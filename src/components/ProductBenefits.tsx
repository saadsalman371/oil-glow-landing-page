
const ProductBenefits = () => {
  const benefits = [
    {
      icon: "🔧",
      title: "Repair Damaged Hair",
      description: "Penetrates deep into hair follicles to repair damage from heat styling, coloring, and environmental factors."
    },
    {
      icon: "🌟",
      title: "Restore Natural Shine",
      description: "Brings back your hair's natural luster and smoothness, leaving it silky and manageable."
    },
    {
      icon: "💪",
      title: "Revive Hair Growth",
      description: "Stimulates scalp circulation and nourishes hair roots to promote healthy, faster hair growth."
    },
    {
      icon: "🛡️",
      title: "Protective Formula",
      description: "Creates a protective barrier against future damage while maintaining hair's natural moisture balance."
    },
    {
      icon: "🌿",
      title: "100% Natural",
      description: "Made with organic ingredients and essential oils that are safe for all hair types and ages."
    },
    {
      icon: "💧",
      title: "Deep Hydration",
      description: "Provides intense moisture to dry and brittle hair, making it soft and touchable."
    }
  ];

  return (
    <section className="py-12 sm:py-16 lg:py-20 bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12 sm:mb-16">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-4 sm:mb-6">
            The Triple Power of 
            <span className="block text-transparent bg-gradient-to-r from-green-600 to-green-800 bg-clip-text">
              Repair • Restore • Revive
            </span>
          </h2>
          <p className="text-lg sm:text-xl text-gray-600 max-w-3xl mx-auto px-4">
            Our magical formula combines nature's most powerful ingredients to give you the healthy, beautiful hair you deserve.
          </p>
        </div>
        
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {benefits.map((benefit, index) => (
            <div 
              key={index}
              className="text-center p-6 sm:p-8 rounded-2xl bg-gradient-to-br from-green-50 to-white border border-green-100 hover:shadow-lg transition-all duration-300 hover:scale-105 group"
            >
              <div className="text-3xl sm:text-4xl mb-4 group-hover:scale-110 transition-transform duration-300">
                {benefit.icon}
              </div>
              <h3 className="text-lg sm:text-xl font-semibold text-gray-900 mb-3 sm:mb-4">
                {benefit.title}
              </h3>
              <p className="text-sm sm:text-base text-gray-600 leading-relaxed">
                {benefit.description}
              </p>
            </div>
          ))}
        </div>
        
        <div className="mt-12 sm:mt-16 text-center">
          <div className="inline-flex flex-col sm:flex-row items-center gap-2 sm:gap-4 bg-green-50 px-6 sm:px-8 py-4 rounded-full border border-green-200">
            <span className="text-green-600 font-semibold text-sm sm:text-base">✓ Clinically Tested</span>
            <span className="text-green-600 font-semibold text-sm sm:text-base">✓ No Harmful Chemicals</span>
            <span className="text-green-600 font-semibold text-sm sm:text-base">✓ Suitable for All Hair Types</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProductBenefits;
