import { useState, useRef, useEffect } from 'react';

interface VideoThumbnailProps {
  src: string;
  alt: string;
}

export const VideoThumbnail = ({ src, alt }: VideoThumbnailProps) => {
  const [thumbnail, setThumbnail] = useState<string>('');
  const [isLoading, setIsLoading] = useState(true);
  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;

    const handleLoadedMetadata = () => {
      try {
        video.currentTime = Math.min(1, video.duration * 0.1);
      } catch {
        video.currentTime = 0;
      }
    };

    const handleSeeked = () => {
      try {
        const canvas = document.createElement('canvas');
        canvas.width = video.videoWidth || 400;
        canvas.height = video.videoHeight || 300;
        const ctx = canvas.getContext('2d');

        if (ctx) {
          ctx.drawImage(video, 0, 0);
          const dataUrl = canvas.toDataURL('image/jpeg', 0.8);
          setThumbnail(dataUrl);
        }
      } catch (error) {
        console.error('Error capturing video frame:', error);
      }
      setIsLoading(false);
    };

    video.addEventListener('loadedmetadata', handleLoadedMetadata);
    video.addEventListener('seeked', handleSeeked);

    video.addEventListener('error', () => {
      setIsLoading(false);
      setThumbnail('data:image/svg+xml,%3Csvg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 400 300"%3E%3Crect fill="%23d1d5db" width="400" height="300"/%3E%3Ctext x="50%25" y="50%25" font-size="16" fill="%236b7280" text-anchor="middle" dy=".3em"%3EVideo%3C/text%3E%3C/svg%3E');
    });

    return () => {
      video.removeEventListener('loadedmetadata', handleLoadedMetadata);
      video.removeEventListener('seeked', handleSeeked);
      video.removeEventListener('error', () => {});
    };
  }, [src]);

  const fallbackSvg = 'data:image/svg+xml,%3Csvg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 400 300"%3E%3Crect fill="%23e5e7eb" width="400" height="300"/%3E%3Ctext x="50%25" y="50%25" font-size="14" fill="%239ca3af" text-anchor="middle" dy=".3em"%3ECargando...%3C/text%3E%3C/svg%3E';

  return (
    <>
      <img
        src={thumbnail || fallbackSvg}
        alt={alt}
        className="absolute inset-0 w-full h-full object-cover"
        onError={(e) => {
          (e.target as HTMLImageElement).src = 'data:image/svg+xml,%3Csvg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 400 300"%3E%3Crect fill="%23d1d5db" width="400" height="300"/%3E%3Ctext x="50%25" y="50%25" font-size="16" fill="%236b7280" text-anchor="middle" dy=".3em"%3EVideo%3C/text%3E%3C/svg%3E';
        }}
      />

      <video
        ref={videoRef}
        src={src}
        className="hidden"
        crossOrigin="anonymous"
        preload="metadata"
      />

      {isLoading && (
        <div className="absolute inset-0 bg-gray-300 animate-pulse" />
      )}
    </>
  );
};
