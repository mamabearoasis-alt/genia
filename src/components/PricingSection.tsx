import { Sparkles, Zap, Rocket } from 'lucide-react';

export const PricingSection = () => {
  const scrollToDemo = () => {
    document.getElementById('final-cta')?.scrollIntoView({ behavior: 'smooth' });
  };

  const plans = [
    {
      icon: Sparkles,
      name: 'Starter',
      credits: '50 créditos',
      description: 'Ideal para 10 imágenes o 2 videos',
      features: [
        'Generación de imágenes IA',
        'Videos cortos UGC style',
        'Voces IA básicas',
        'Soporte por email'
      ],
      gradient: 'from-blue-500 to-blue-600',
      popular: false
    },
    {
      icon: Zap,
      name: 'Pro',
      credits: '150 créditos',
      description: '5 videos + branding completo',
      features: [
        'Todo en Starter',
        'Branding completo IA',
        'Videos profesionales',
        'Voces premium multiidioma',
        'Soporte prioritario'
      ],
      gradient: 'from-purple-500 to-purple-600',
      popular: true
    },
    {
      icon: Rocket,
      name: 'Scale',
      credits: '500 créditos',
      description: 'Producción mensual ilimitada',
      features: [
        'Todo en Pro',
        'Volumen ilimitado',
        'Cuenta dedicada',
        'Iteraciones sin costo',
        'Soporte 24/7'
      ],
      gradient: 'from-cyan-500 to-cyan-600',
      popular: false
    }
  ];

  return (
    <section className="py-24 bg-gradient-to-br from-gray-50 to-purple-50">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Pagás solo por lo que necesitás
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Con nuestro sistema de créditos IA, elegís cuántas piezas querés generar y cuándo.
            Sin suscripciones, sin ataduras.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
          {plans.map((plan, index) => (
            <div
              key={index}
              className={`relative bg-white rounded-3xl p-8 ${
                plan.popular
                  ? 'shadow-2xl scale-105 border-2 border-purple-600'
                  : 'shadow-lg border border-gray-200'
              } hover:shadow-2xl transition-all duration-300`}
            >
              {plan.popular && (
                <div className="absolute -top-4 left-1/2 -translate-x-1/2 px-6 py-1 bg-gradient-to-r from-purple-600 to-cyan-500 text-white text-sm font-semibold rounded-full">
                  Más popular
                </div>
              )}

              <div className={`w-16 h-16 bg-gradient-to-br ${plan.gradient} rounded-2xl flex items-center justify-center mb-6`}>
                <plan.icon className="w-8 h-8 text-white" />
              </div>

              <h3 className="text-2xl font-bold text-gray-900 mb-2">{plan.name}</h3>
              <div className="text-3xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent mb-2">
                {plan.credits}
              </div>
              <p className="text-gray-600 mb-6">{plan.description}</p>

              <ul className="space-y-3 mb-8">
                {plan.features.map((feature, idx) => (
                  <li key={idx} className="flex items-start gap-3">
                    <div className="w-5 h-5 rounded-full bg-green-100 flex items-center justify-center flex-shrink-0 mt-0.5">
                      <div className="w-2 h-2 rounded-full bg-green-600"></div>
                    </div>
                    <span className="text-gray-700">{feature}</span>
                  </li>
                ))}
              </ul>

              <button
                onClick={scrollToDemo}
                className={`w-full py-3 rounded-full font-semibold transition-all duration-300 ${
                  plan.popular
                    ? 'bg-gradient-to-r from-purple-600 to-cyan-500 text-white hover:shadow-xl hover:scale-105'
                    : 'bg-gray-100 text-gray-900 hover:bg-gray-200'
                }`}
              >
                Elegir plan
              </button>
            </div>
          ))}
        </div>

        <div className="text-center">
          <button
            onClick={scrollToDemo}
            className="group inline-flex items-center gap-2 text-blue-600 font-semibold text-lg hover:gap-4 transition-all duration-300"
          >
            Agendá tu demo y descubrí tu pack ideal
            <span className="text-2xl group-hover:translate-x-2 transition-transform duration-300">→</span>
          </button>
        </div>
      </div>
    </section>
  );
};
