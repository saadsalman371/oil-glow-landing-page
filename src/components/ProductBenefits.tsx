
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
    }
  ];

  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
            The Triple Power of 
            <span className="block text-transparent bg-gradient-to-r from-green-600 to-green-800 bg-clip-text">
              Repair • Restore • Revive
            </span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Our magical formula combines nature's most powerful ingredients to give you the healthy, beautiful hair you deserve.
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {benefits.map((benefit, index) => (
            <div 
              key={index}
              className="text-center p-8 rounded-2xl bg-gradient-to-br from-green-50 to-white border border-green-100 hover:shadow-lg transition-all duration-300 hover:scale-105 group"
            >
              <div className="text-4xl mb-4 group-hover:scale-110 transition-transform duration-300">
                {benefit.icon}
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-4">
                {benefit.title}
              </h3>
              <p className="text-gray-600 leading-relaxed">
                {benefit.description}
              </p>
            </div>
          ))}
        </div>
        
        <div className="mt-16 text-center">
          <div className="inline-flex items-center gap-4 bg-green-50 px-8 py-4 rounded-full border border-green-200">
            <span className="text-green-600 font-semibold">✓ Clinically Tested</span>
            <span className="text-green-600 font-semibold">✓ No Harmful Chemicals</span>
            <span className="text-green-600 font-semibold">✓ Suitable for All Hair Types</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProductBenefits;
