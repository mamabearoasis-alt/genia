import { Sparkles, Zap, TrendingDown, CheckCircle } from 'lucide-react';

export const ValuePropositionSection = () => {
  const values = [
    {
      icon: Sparkles,
      text: '100% producción IA, sin equipos humanos',
      color: 'text-blue-600'
    },
    {
      icon: Zap,
      text: 'Hasta 10× más rápido que una agencia tradicional',
      color: 'text-purple-600'
    },
    {
      icon: TrendingDown,
      text: '80% menos costos de producción',
      color: 'text-cyan-600'
    },
    {
      icon: CheckCircle,
      text: 'Resultados indistinguibles de contenido real',
      color: 'text-blue-600'
    }
  ];

  return (
    <section className="py-24 bg-gradient-to-br from-gray-50 to-blue-50">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            ¿Por qué las marcas eligen Genia?
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {values.map((value, index) => (
            <div
              key={index}
              className="bg-white rounded-2xl p-6 shadow-sm hover:shadow-xl transition-all duration-300 hover:-translate-y-2 border border-gray-100"
            >
              <div className="flex flex-col items-center text-center">
                <div className={`w-14 h-14 rounded-full bg-gradient-to-br from-blue-100 to-purple-100 flex items-center justify-center mb-4`}>
                  <value.icon className={`w-7 h-7 ${value.color}`} />
                </div>
                <p className="text-gray-900 font-semibold leading-relaxed">
                  {value.text}
                </p>
              </div>
            </div>
          ))}
        </div>

        <div className="bg-white rounded-3xl shadow-xl p-8 md:p-12 border border-gray-100">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div>
              <h3 className="text-3xl font-bold text-gray-900 mb-6">
                Agencia Tradicional
              </h3>
              <div className="space-y-4">
                <div className="flex items-start gap-3">
                  <div className="w-6 h-6 rounded-full bg-red-100 flex items-center justify-center flex-shrink-0 mt-1">
                    <div className="w-3 h-0.5 bg-red-600"></div>
                  </div>
                  <p className="text-gray-600">Semanas de producción</p>
                </div>
                <div className="flex items-start gap-3">
                  <div className="w-6 h-6 rounded-full bg-red-100 flex items-center justify-center flex-shrink-0 mt-1">
                    <div className="w-3 h-0.5 bg-red-600"></div>
                  </div>
                  <p className="text-gray-600">Miles de dólares por campaña</p>
                </div>
                <div className="flex items-start gap-3">
                  <div className="w-6 h-6 rounded-full bg-red-100 flex items-center justify-center flex-shrink-0 mt-1">
                    <div className="w-3 h-0.5 bg-red-600"></div>
                  </div>
                  <p className="text-gray-600">Dependencia de equipos externos</p>
                </div>
                <div className="flex items-start gap-3">
                  <div className="w-6 h-6 rounded-full bg-red-100 flex items-center justify-center flex-shrink-0 mt-1">
                    <div className="w-3 h-0.5 bg-red-600"></div>
                  </div>
                  <p className="text-gray-600">Revisiones y cambios lentos</p>
                </div>
              </div>
            </div>

            <div>
              <h3 className="text-3xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent mb-6">
                Genia (IA)
              </h3>
              <div className="space-y-4">
                <div className="flex items-start gap-3">
                  <div className="w-6 h-6 rounded-full bg-green-100 flex items-center justify-center flex-shrink-0 mt-1">
                    <CheckCircle className="w-4 h-4 text-green-600" />
                  </div>
                  <p className="text-gray-900 font-medium">Horas de producción</p>
                </div>
                <div className="flex items-start gap-3">
                  <div className="w-6 h-6 rounded-full bg-green-100 flex items-center justify-center flex-shrink-0 mt-1">
                    <CheckCircle className="w-4 h-4 text-green-600" />
                  </div>
                  <p className="text-gray-900 font-medium">80% menos inversión</p>
                </div>
                <div className="flex items-start gap-3">
                  <div className="w-6 h-6 rounded-full bg-green-100 flex items-center justify-center flex-shrink-0 mt-1">
                    <CheckCircle className="w-4 h-4 text-green-600" />
                  </div>
                  <p className="text-gray-900 font-medium">Autonomía total con IA</p>
                </div>
                <div className="flex items-start gap-3">
                  <div className="w-6 h-6 rounded-full bg-green-100 flex items-center justify-center flex-shrink-0 mt-1">
                    <CheckCircle className="w-4 h-4 text-green-600" />
                  </div>
                  <p className="text-gray-900 font-medium">Iteraciones instantáneas</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
