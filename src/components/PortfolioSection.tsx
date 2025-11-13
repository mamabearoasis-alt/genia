import { Play, Image as ImageIcon } from 'lucide-react';
import { useState } from 'react';
import { MediaViewer } from './MediaViewer';
import { VideoThumbnail } from './VideoThumbnail';
import { portfolioItems } from '../lib/portfolio-data';
import { usePortfolioMedia } from '../hooks/usePortfolioMedia';

interface PortfolioItemComponentProps {
  item: {
    type: 'video' | 'image';
    title: string;
    category: string;
    fileName: string;
  };
  onSelect: (media: { src: string; type: 'video' | 'image'; title: string }) => void;
}

const PortfolioItemComponent = ({ item, onSelect }: PortfolioItemComponentProps) => {
  const { url } = usePortfolioMedia(item.fileName);

  if (!url) {
    return (
      <div className="relative aspect-video bg-gradient-to-br from-gray-100 to-gray-200 rounded-2xl overflow-hidden">
        <div className="absolute inset-0 bg-gray-300 animate-pulse flex items-center justify-center">
          <p className="text-gray-600 text-sm">Cargando...</p>
        </div>
      </div>
    );
  }

  return (
    <button
      onClick={() => onSelect({ src: url, type: item.type, title: item.title })}
      type="button"
      className="group relative aspect-video bg-gradient-to-br from-gray-100 to-gray-200 rounded-2xl overflow-hidden cursor-pointer hover:shadow-2xl transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
    >
      {/* Hover overlay */}
      <div className="absolute inset-0 bg-gradient-to-br from-blue-600/20 to-purple-600/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>

      {/* Content - Image for thumbnails */}
      {item.type === 'video' ? (
        <VideoThumbnail src={url} alt={item.title} />
      ) : (
        <img
          src={url}
          alt={item.title}
          className="absolute inset-0 w-full h-full object-cover"
          onError={(e) => {
            (e.target as HTMLImageElement).src = 'data:image/svg+xml,%3Csvg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 400 300"%3E%3Crect fill="%23d1d5db" width="400" height="300"/%3E%3Ctext x="50%25" y="50%25" font-size="16" fill="%236b7280" text-anchor="middle" dy=".3em"%3EImagen%3C/text%3E%3C/svg%3E';
          }}
        />
      )}

      {/* Center icon */}
      <div className="absolute inset-0 flex items-center justify-center">
        {item.type === 'video' ? (
          <div className="w-16 h-16 rounded-full bg-white/90 backdrop-blur-sm flex items-center justify-center group-hover:scale-110 transition-transform duration-300 shadow-xl">
            <Play className="w-8 h-8 text-blue-600 ml-1" fill="currentColor" />
          </div>
        ) : (
          <div className="w-16 h-16 rounded-full bg-white/90 backdrop-blur-sm flex items-center justify-center group-hover:scale-110 transition-transform duration-300 shadow-xl">
            <ImageIcon className="w-8 h-8 text-purple-600" />
          </div>
        )}
      </div>

      {/* Hover text */}
      <div className="absolute bottom-0 left-0 right-0 p-6 bg-gradient-to-t from-black/80 to-transparent translate-y-full group-hover:translate-y-0 transition-transform duration-300">
        <p className="text-white font-semibold mb-1">{item.title}</p>
        <p className="text-white/80 text-sm">{item.category}</p>
      </div>

      {/* Category badge */}
      <div className="absolute top-4 right-4 px-3 py-1 bg-white/90 backdrop-blur-sm rounded-full">
        <span className="text-xs font-semibold text-gray-900">{item.category}</span>
      </div>
    </button>
  );
};

export const PortfolioSection = () => {
  const [selectedMedia, setSelectedMedia] = useState<{
    src: string;
    type: 'video' | 'image';
    title: string;
  } | null>(null);

  const scrollToDemo = () => {
    document.getElementById('final-cta')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <>
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Mirá lo que podemos crear<br />para tu marca
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
            {portfolioItems.map((item, index) => (
              <PortfolioItemComponent
                key={index}
                item={item}
                onSelect={setSelectedMedia}
              />
            ))}
          </div>

          <div className="text-center space-y-6">
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Todo lo que ves fue generado con IA. Sin actores. Sin cámaras. Sin límites.
            </p>

            <button
              onClick={scrollToDemo}
              className="group px-8 py-4 bg-gradient-to-r from-blue-600 to-purple-600 text-white text-lg font-semibold rounded-full hover:shadow-2xl hover:shadow-cyan-400/50 transition-all duration-300 hover:scale-105"
            >
              <span className="relative z-10">Quiero una demo de contenido IA</span>
            </button>
          </div>
        </div>
      </section>

      <MediaViewer
        isOpen={!!selectedMedia}
        onClose={() => setSelectedMedia(null)}
        src={selectedMedia?.src || ''}
        type={selectedMedia?.type || 'image'}
        title={selectedMedia?.title || ''}
      />
    </>
  );
};
