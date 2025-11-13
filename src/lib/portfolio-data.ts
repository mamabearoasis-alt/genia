export interface PortfolioItem {
  type: 'video' | 'image';
  title: string;
  category: string;
  fileName: string;
}

export const portfolioItems: PortfolioItem[] = [
  {
    type: 'video',
    title: 'Video UGC Profesional',
    category: 'Video IA',
    fileName: 'Santiago Carazzo - Genia - Video UGC 1.mp4'
  },
  {
    type: 'image',
    title: 'Render de Producto IA',
    category: 'Imagen IA',
    fileName: 'Santiago Carazzo - Genia - Foto producto.png'
  },
  {
    type: 'video',
    title: 'Anuncio UGC Estilo TikTok',
    category: 'Video IA',
    fileName: 'Santiago Carazzo - Genia - Video UGC 2.mp4'
  },
  {
    type: 'image',
    title: 'Logo Estilo Corporativo',
    category: 'Imagen IA',
    fileName: 'Santiago Carazzo - Genia - Logo cliente.png'
  },
  {
    type: 'video',
    title: 'Spot Publicitario IA',
    category: 'Video IA',
    fileName: 'Santiago Carazzo - Genia - Video UGC 3.mp4'
  },
  {
    type: 'image',
    title: 'Post Social Media',
    category: 'Imagen IA',
    fileName: 'Santiago Carazzo - Genia - Post Instagram Envios.png'
  }
];
