import { X } from 'lucide-react';
import { useState, useEffect } from 'react';

interface MediaViewerProps {
  isOpen: boolean;
  onClose: () => void;
  src: string;
  type: 'video' | 'image';
  title: string;
}

export const MediaViewer = ({ isOpen, onClose, src, type, title }: MediaViewerProps) => {
  const [error, setError] = useState(false);

  useEffect(() => {
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };

    if (isOpen) {
      document.addEventListener('keydown', handleEscape);
      document.body.style.overflow = 'hidden';
    }

    return () => {
      document.removeEventListener('keydown', handleEscape);
      document.body.style.overflow = 'unset';
    };
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
      <div
        className="absolute inset-0 bg-black/70 backdrop-blur-sm"
        onClick={onClose}
      ></div>

      <div className="relative z-10 w-full max-w-4xl max-h-[90vh] bg-gray-900 rounded-2xl overflow-hidden shadow-2xl animate-fadeIn-fast">
        <button
          onClick={onClose}
          className="absolute top-4 right-4 z-20 p-2 bg-white/10 hover:bg-white/20 rounded-full transition-colors duration-300 backdrop-blur-sm"
          aria-label="Close"
        >
          <X className="w-6 h-6 text-white" />
        </button>

        <div className="relative w-full h-full bg-black flex items-center justify-center">
          {type === 'video' ? (
            <video
              src={src}
              controls
              autoPlay
              playsInline
              className="w-full h-full object-contain"
              style={{ maxHeight: 'calc(90vh - 60px)' }}
              onError={() => setError(true)}
            >
              <source src={src} type="video/mp4" />
              Tu navegador no soporta videos HTML5
            </video>
          ) : (
            <img
              src={src}
              alt={title}
              className="w-full h-full object-contain"
              style={{ maxHeight: 'calc(90vh - 60px)' }}
              onError={() => setError(true)}
            />
          )}

          {error && (
            <div className="absolute inset-0 flex items-center justify-center bg-black/80">
              <div className="text-center">
                <p className="text-white text-lg mb-4">No se pudo cargar el contenido</p>
                <a
                  href={src}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-block px-6 py-2 bg-blue-600 hover:bg-blue-700 text-white rounded-lg transition-colors duration-300"
                >
                  Abrir en nueva pestaña
                </a>
              </div>
            </div>
          )}
        </div>

        <div className="bg-gray-800 px-6 py-4 border-t border-gray-700">
          <h3 className="text-white font-semibold">{title}</h3>
        </div>
      </div>
    </div>
  );
};
