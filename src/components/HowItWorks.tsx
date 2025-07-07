
const HowItWorks = () => {
  const steps = [
    {
      step: "1",
      title: "Apply to Scalp",
      description: "Take a small amount of HairFix oil and gently massage it into your scalp using circular motions.",
      icon: "🤲"
    },
    {
      step: "2", 
      title: "Massage Thoroughly",
      description: "Massage for 5-10 minutes to improve blood circulation and help the oil penetrate deeply.",
      icon: "💆‍♀️"
    },
    {
      step: "3",
      title: "Leave Overnight",
      description: "For best results, leave the oil on overnight or for at least 2-3 hours before washing.",
      icon: "🌙"
    },
    {
      step: "4",
      title: "Wash & See Results",
      description: "Wash with your regular shampoo and enjoy softer, shinier, and healthier-looking hair.",
      icon: "✨"
    }
  ];

  return (
    <section className="py-20 bg-gradient-to-br from-cream-50 to-green-50">
      <div className="container mx-auto px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
            How to Use
            <span className="block text-transparent bg-gradient-to-r from-green-600 to-green-800 bg-clip-text">
              HairFix Oil
            </span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Follow these simple steps to get the maximum benefits from your HairFix oil treatment.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {steps.map((step, index) => (
            <div key={index} className="text-center">
              <div className="relative mb-8">
                <div className="w-20 h-20 bg-green-600 rounded-full flex items-center justify-center mx-auto mb-4 shadow-lg">
                  <span className="text-white text-2xl font-bold">{step.step}</span>
                </div>
                <div className="text-4xl mb-4">{step.icon}</div>
                {index < steps.length - 1 && (
                  <div className="hidden lg:block absolute top-10 left-full w-full h-0.5 bg-green-200 -z-10"></div>
                )}
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-4">
                {step.title}
              </h3>
              <p className="text-gray-600 leading-relaxed">
                {step.description}
              </p>
            </div>
          ))}
        </div>

        <div className="mt-16 text-center">
          <div className="bg-white p-8 rounded-2xl shadow-lg max-w-2xl mx-auto">
            <h3 className="text-2xl font-bold text-gray-900 mb-4">💡 Pro Tip</h3>
            <p className="text-gray-600 text-lg">
              For enhanced results, warm the oil slightly before application. Use 2-3 times per week for optimal hair health and growth.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;
