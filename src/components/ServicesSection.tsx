import { Palette, ImageIcon, Video, Mic } from 'lucide-react';

export const ServicesSection = () => {
  const services = [
    {
      icon: Palette,
      title: 'Branding IA',
      description: 'Logo, identidad y tono de marca automatizados para crear una presencia única y coherente.',
      gradient: 'from-blue-500 to-blue-600'
    },
    {
      icon: ImageIcon,
      title: 'Imágenes IA',
      description: 'Contenido fotográfico y visual realista para anuncios que capturan la atención de tu audiencia.',
      gradient: 'from-purple-500 to-purple-600'
    },
    {
      icon: Video,
      title: 'Videos publicitarios IA',
      description: 'Spots con actores virtuales o estilo UGC que parecen filmaciones profesionales reales.',
      gradient: 'from-cyan-500 to-cyan-600'
    },
    {
      icon: Mic,
      title: 'Voces IA',
      description: 'Locuciones naturales en varios idiomas con entonación profesional y emociones auténticas.',
      gradient: 'from-blue-600 to-purple-600'
    }
  ];

  return (
    <section className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Todo lo que necesitás para hacer<br />crecer tu marca con IA
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          {services.map((service, index) => (
            <div
              key={index}
              className="group relative bg-white rounded-2xl p-8 border border-gray-200 hover:border-transparent hover:shadow-2xl transition-all duration-300 overflow-hidden"
            >
              <div className="absolute inset-0 bg-gradient-to-br from-blue-50 to-purple-50 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>

              <div className="relative z-10">
                <div className={`w-16 h-16 bg-gradient-to-br ${service.gradient} rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300 shadow-lg`}>
                  <service.icon className="w-8 h-8 text-white" />
                </div>

                <h3 className="text-xl font-bold text-gray-900 mb-3">
                  {service.title}
                </h3>

                <p className="text-gray-600 leading-relaxed">
                  {service.description}
                </p>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center">
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Cada pieza es generada con inteligencia artificial y adaptada a tu marca,
            manteniendo coherencia y calidad profesional en cada entrega.
          </p>
        </div>
      </div>
    </section>
  );
};
