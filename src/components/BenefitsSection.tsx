import { Rocket, DollarSign, Brain } from 'lucide-react';

export const BenefitsSection = () => {
  const scrollToDemo = () => {
    document.getElementById('final-cta')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="py-24 bg-gray-50">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            El cuello de botella de tu contenido<br />ya no es el equipo creativo
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Sabemos que generar anuncios de calidad para tu eCommerce puede llevar semanas,
            costar miles de dólares y depender de equipos externos. En Genia, reemplazamos
            todo eso con inteligencia artificial para que puedas lanzar campañas profesionales sin esperas.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
          <div className="group bg-white p-8 rounded-2xl shadow-sm hover:shadow-xl transition-all duration-300 hover:-translate-y-2 border border-gray-100">
            <div className="w-20 h-20 bg-gradient-to-br from-blue-500 to-blue-600 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
              <Rocket className="w-10 h-10 text-white" />
            </div>
            <h3 className="text-2xl font-bold text-gray-900 mb-4">Rapidez</h3>
            <p className="text-gray-600 leading-relaxed">
              Contenido generado en horas. Olvídate de las semanas de producción tradicional.
              Con IA, tus campañas están listas cuando las necesitas.
            </p>
          </div>

          <div className="group bg-white p-8 rounded-2xl shadow-sm hover:shadow-xl transition-all duration-300 hover:-translate-y-2 border border-gray-100">
            <div className="w-20 h-20 bg-gradient-to-br from-purple-500 to-purple-600 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
              <DollarSign className="w-10 h-10 text-white" />
            </div>
            <h3 className="text-2xl font-bold text-gray-900 mb-4">Bajo costo</h3>
            <p className="text-gray-600 leading-relaxed">
              Sin equipos, actores ni producciones costosas. Ahorra hasta un 80% en costos
              de producción sin sacrificar calidad profesional.
            </p>
          </div>

          <div className="group bg-white p-8 rounded-2xl shadow-sm hover:shadow-xl transition-all duration-300 hover:-translate-y-2 border border-gray-100">
            <div className="w-20 h-20 bg-gradient-to-br from-cyan-500 to-cyan-600 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
              <Brain className="w-10 h-10 text-white" />
            </div>
            <h3 className="text-2xl font-bold text-gray-900 mb-4">Escalabilidad</h3>
            <p className="text-gray-600 leading-relaxed">
              Crea decenas de piezas para testear y optimizar anuncios. Escala tu producción
              sin límites de tiempo o recursos humanos.
            </p>
          </div>
        </div>

        <div className="text-center">
          <button
            onClick={scrollToDemo}
            className="group inline-flex items-center gap-2 text-blue-600 font-semibold text-lg hover:gap-4 transition-all duration-300"
          >
            Descubrí cómo funciona
            <span className="text-2xl group-hover:translate-x-2 transition-transform duration-300">→</span>
          </button>
        </div>
      </div>
    </section>
  );
};
