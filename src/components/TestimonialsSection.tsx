import { Quote } from 'lucide-react';

export const TestimonialsSection = () => {
  const testimonials = [
    {
      text: 'Lanzamos 15 anuncios en 3 días. Los resultados fueron espectaculares.',
      author: 'Ecommerce de ropa deportiva',
      gradient: 'from-blue-500 to-blue-600'
    },
    {
      text: 'Ahorramos miles en producciones sin perder calidad visual.',
      author: 'Marca de cosmética natural',
      gradient: 'from-purple-500 to-purple-600'
    },
    {
      text: 'Los videos parecen hechos con actores reales, pero todo es IA.',
      author: 'Startup de suplementos',
      gradient: 'from-cyan-500 to-cyan-600'
    }
  ];

  return (
    <section className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Lo que dicen las marcas<br />que ya usan Genia
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className="group bg-white rounded-2xl p-8 shadow-sm hover:shadow-xl transition-all duration-300 hover:-translate-y-2 border border-gray-100"
            >
              <div className={`w-12 h-12 bg-gradient-to-br ${testimonial.gradient} rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300`}>
                <Quote className="w-6 h-6 text-white" />
              </div>

              <p className="text-lg text-gray-900 leading-relaxed mb-6 font-medium">
                "{testimonial.text}"
              </p>

              <div className="flex items-center gap-3">
                <div className={`w-1 h-8 bg-gradient-to-b ${testimonial.gradient} rounded-full`}></div>
                <p className="text-sm text-gray-600 font-medium">{testimonial.author}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
