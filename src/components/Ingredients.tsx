
const Ingredients = () => {
  const ingredients = [
    {
      name: "Argan Oil",
      benefits: "Rich in vitamin E and antioxidants, repairs damaged hair and adds shine",
      icon: "🌰"
    },
    {
      name: "Coconut Oil",
      benefits: "Penetrates hair shaft deeply, prevents protein loss and strengthens hair",
      icon: "🥥"
    },
    {
      name: "Jojoba Oil", 
      benefits: "Mimics natural scalp oils, promotes hair growth and reduces dandruff",
      icon: "🌿"
    },
    {
      name: "Rosemary Extract",
      benefits: "Stimulates blood circulation, promotes hair growth and prevents hair loss",
      icon: "🌿"
    },
    {
      name: "Vitamin E",
      benefits: "Powerful antioxidant that protects hair from environmental damage",
      icon: "💊"
    },
    {
      name: "Biotin",
      benefits: "Essential for healthy hair growth and strengthening hair follicles",
      icon: "🧬"
    }
  ];

  return (
    <section className="py-12 sm:py-16 lg:py-20 bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12 sm:mb-16">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-4 sm:mb-6">
            Premium Natural
            <span className="block text-transparent bg-gradient-to-r from-green-600 to-green-800 bg-clip-text">
              Ingredients
            </span>
          </h2>
          <p className="text-lg sm:text-xl text-gray-600 max-w-3xl mx-auto px-4">
            Each ingredient in HairFix is carefully selected for its proven benefits in hair care and restoration.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {ingredients.map((ingredient, index) => (
            <div 
              key={index}
              className="bg-gradient-to-br from-green-50 to-white p-4 sm:p-6 rounded-xl sm:rounded-2xl border border-green-100 hover:shadow-lg transition-all duration-300 hover:scale-105"
            >
              <div className="flex items-center gap-3 sm:gap-4 mb-3 sm:mb-4">
                <div className="text-2xl sm:text-3xl">{ingredient.icon}</div>
                <h3 className="text-lg sm:text-xl font-semibold text-gray-900">
                  {ingredient.name}
                </h3>
              </div>
              <p className="text-sm sm:text-base text-gray-600 leading-relaxed">
                {ingredient.benefits}
              </p>
            </div>
          ))}
        </div>

        <div className="mt-12 sm:mt-16 text-center">
          <div className="bg-gradient-to-r from-green-600 to-green-700 text-white p-6 sm:p-8 rounded-xl sm:rounded-2xl shadow-xl max-w-4xl mx-auto">
            <h3 className="text-xl sm:text-2xl font-bold mb-4">🌿 100% Natural & Safe</h3>
            <p className="text-base sm:text-lg mb-4 sm:mb-6">
              No sulfates, no parabens, no artificial fragrances. Just pure, natural ingredients that your hair will love.
            </p>
            <div className="flex flex-wrap justify-center gap-2 sm:gap-4 text-xs sm:text-sm">
              <span className="bg-white/20 px-3 sm:px-4 py-2 rounded-full">✓ Cruelty-Free</span>
              <span className="bg-white/20 px-3 sm:px-4 py-2 rounded-full">✓ Vegan</span>
              <span className="bg-white/20 px-3 sm:px-4 py-2 rounded-full">✓ Organic</span>
              <span className="bg-white/20 px-3 sm:px-4 py-2 rounded-full">✓ Dermatologist Tested</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Ingredients;
