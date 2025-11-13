export const FinalCTASection = () => {
  return (
    <section id="final-cta" className="py-24 bg-gradient-to-br from-gray-900 via-blue-900 to-purple-900 relative overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_50%,rgba(37,99,235,0.2),transparent_50%),radial-gradient(circle_at_70%_80%,rgba(168,85,247,0.2),transparent_50%)]"></div>

      <div className="relative z-10 max-w-5xl mx-auto px-6 text-center">
        <h2 className="text-4xl md:text-6xl font-bold text-white mb-6 leading-tight">
          Transformá la forma en que<br />tu marca crea contenido
        </h2>

        <p className="text-xl text-gray-300 mb-12 max-w-2xl mx-auto">
          Agendá una demo gratuita y descubrí cómo usar IA para escalar tus campañas sin límites
        </p>

        <div className="bg-white/10 backdrop-blur-lg rounded-3xl p-8 md:p-12 border border-white/20 max-w-2xl mx-auto mb-8">
          <form className="space-y-6" onSubmit={(e) => e.preventDefault()}>
            <div>
              <input
                type="text"
                placeholder="Tu nombre"
                className="w-full px-6 py-4 rounded-xl bg-white/10 border border-white/20 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-cyan-400 transition-all duration-300"
              />
            </div>

            <div>
              <input
                type="email"
                placeholder="Tu email"
                className="w-full px-6 py-4 rounded-xl bg-white/10 border border-white/20 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-cyan-400 transition-all duration-300"
              />
            </div>

            <div>
              <input
                type="text"
                placeholder="Nombre de tu marca o eCommerce"
                className="w-full px-6 py-4 rounded-xl bg-white/10 border border-white/20 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-cyan-400 transition-all duration-300"
              />
            </div>

            <button
              type="submit"
              className="group w-full px-8 py-5 bg-gradient-to-r from-blue-500 to-purple-600 text-white text-lg font-bold rounded-xl hover:shadow-2xl hover:shadow-cyan-400/50 transition-all duration-300 hover:scale-105 relative overflow-hidden"
            >
              <span className="relative z-10">Agendá tu demo gratuita ahora</span>
              <div className="absolute inset-0 bg-gradient-to-r from-cyan-400 to-blue-500 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            </button>
          </form>
        </div>

        <p className="text-sm text-gray-400">
          Sin compromiso. Te mostramos cómo funciona Genia y cómo puede adaptar la IA a tu negocio.
        </p>
      </div>
    </section>
  );
};
