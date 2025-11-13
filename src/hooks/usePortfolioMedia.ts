import { useState, useEffect } from 'react';
import { supabase } from '../lib/supabase';

const BUCKET_NAME = 'project-media';
const CACHE_KEY = 'portfolio_urls_cache';
const CACHE_EXPIRY = 60 * 60 * 1000; // 1 hora

interface CachedUrl {
  fileName: string;
  url: string;
  timestamp: number;
}

export const usePortfolioMedia = (fileName: string) => {
  const [url, setUrl] = useState<string>('');
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchMediaUrl = async () => {
      try {
        const cache = localStorage.getItem(CACHE_KEY);
        let cachedUrls: CachedUrl[] = [];

        if (cache) {
          cachedUrls = JSON.parse(cache);
        }

        const cachedItem = cachedUrls.find(
          (item) => item.fileName === fileName && Date.now() - item.timestamp < CACHE_EXPIRY
        );

        if (cachedItem) {
          setUrl(cachedItem.url);
          setLoading(false);
          return;
        }

        const { data } = supabase.storage
          .from(BUCKET_NAME)
          .getPublicUrl(fileName);

        if (data?.publicUrl) {
          setUrl(data.publicUrl);

          const newCache = cachedUrls.filter((item) => item.fileName !== fileName);
          newCache.push({
            fileName,
            url: data.publicUrl,
            timestamp: Date.now()
          });
          localStorage.setItem(CACHE_KEY, JSON.stringify(newCache));
        } else {
          setError('No se pudo obtener la URL del archivo');
        }
      } catch (err) {
        setError(`Error al cargar el archivo: ${err instanceof Error ? err.message : 'desconocido'}`);
      } finally {
        setLoading(false);
      }
    };

    if (fileName) {
      fetchMediaUrl();
    }
  }, [fileName]);

  return { url, loading, error };
};
