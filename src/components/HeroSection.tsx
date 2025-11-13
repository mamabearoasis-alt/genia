import { Sparkles } from 'lucide-react';

export const HeroSection = () => {
  const scrollToDemo = () => {
    document.getElementById('final-cta')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-white via-blue-50 to-purple-50">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_50%,rgba(37,99,235,0.1),transparent_50%),radial-gradient(circle_at_70%_80%,rgba(168,85,247,0.1),transparent_50%)]"></div>

      <div className="relative z-10 max-w-7xl mx-auto px-6 py-20 text-center">
        <div className="inline-flex items-center gap-2 px-4 py-2 bg-white/80 backdrop-blur-sm rounded-full border border-blue-200 mb-8 animate-fadeIn" style={{ animationDuration: '0.6s' }}>
          <Sparkles className="w-4 h-4 text-blue-600" />
          <span className="text-sm font-medium text-gray-700">Creatividad potenciada por IA</span>
        </div>

        <h1 className="text-5xl md:text-7xl font-bold text-gray-900 mb-6 leading-tight animate-fadeIn" style={{ animationDuration: '0.8s' }}>
          Creamos contenido publicitario<br />
          <span className="bg-gradient-to-r from-blue-600 via-purple-600 to-cyan-500 bg-clip-text text-transparent">
            con inteligencia artificial
          </span>
          <br />en horas, no semanas
        </h1>

        <p className="text-xl md:text-2xl text-gray-600 mb-12 max-w-3xl mx-auto animate-fadeIn" style={{ animationDuration: '1s' }}>
          Videos, imágenes y branding diseñados con IA para escalar tu eCommerce sin depender de equipos humanos
        </p>

        <button
          onClick={scrollToDemo}
          className="group relative px-8 py-4 bg-gradient-to-r from-blue-600 to-purple-600 text-white text-lg font-semibold rounded-full hover:shadow-2xl hover:shadow-cyan-400/50 transition-all duration-300 hover:scale-105 animate-fadeIn"
          style={{ animationDuration: '1.2s' }}
        >
          <span className="relative z-10">Agendá una demo gratuita</span>
          <div className="absolute inset-0 rounded-full bg-gradient-to-r from-cyan-400 to-blue-500 opacity-0 group-hover:opacity-100 transition-opacity duration-300 blur-xl"></div>
        </button>

        <div className="flex flex-wrap items-center justify-center gap-8 mt-12 text-gray-600 animate-fadeIn" style={{ animationDuration: '1.4s' }}>
          <div className="flex items-center gap-2">
            <div className="w-2 h-2 bg-blue-600 rounded-full"></div>
            <span className="text-sm font-medium">Sin actores</span>
          </div>
          <div className="flex items-center gap-2">
            <div className="w-2 h-2 bg-purple-600 rounded-full"></div>
            <span className="text-sm font-medium">Sin filmaciones</span>
          </div>
          <div className="flex items-center gap-2">
            <div className="w-2 h-2 bg-cyan-500 rounded-full"></div>
            <span className="text-sm font-medium">Sin límites</span>
          </div>
        </div>

        <div className="mt-20 relative max-w-5xl mx-auto animate-fadeIn" style={{ animationDuration: '1.6s' }}>
          <div className="absolute inset-0 bg-gradient-to-r from-blue-600 to-purple-600 rounded-2xl blur-3xl opacity-20"></div>
          <div className="relative bg-white/50 backdrop-blur-sm border border-gray-200 rounded-2xl p-8 grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="flex flex-col items-center justify-center p-6 bg-gradient-to-br from-blue-50 to-purple-50 rounded-xl">
              <div className="w-16 h-16 bg-gradient-to-br from-blue-600 to-purple-600 rounded-full flex items-center justify-center mb-4">
                <Sparkles className="w-8 h-8 text-white" />
              </div>
              <div className="text-sm text-gray-600 text-center">Generación IA en tiempo real</div>
            </div>
            <div className="flex flex-col items-center justify-center p-6 bg-gradient-to-br from-purple-50 to-blue-50 rounded-xl">
              <div className="w-16 h-16 bg-gradient-to-br from-purple-600 to-cyan-500 rounded-full flex items-center justify-center mb-4">
                <Sparkles className="w-8 h-8 text-white" />
              </div>
              <div className="text-sm text-gray-600 text-center">Contenido profesional instantáneo</div>
            </div>
            <div className="flex flex-col items-center justify-center p-6 bg-gradient-to-br from-cyan-50 to-blue-50 rounded-xl">
              <div className="w-16 h-16 bg-gradient-to-br from-cyan-500 to-blue-600 rounded-full flex items-center justify-center mb-4">
                <Sparkles className="w-8 h-8 text-white" />
              </div>
              <div className="text-sm text-gray-600 text-center">Escalabilidad ilimitada</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
