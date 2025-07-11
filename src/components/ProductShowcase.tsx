
const ProductShowcase = () => {
  const productImages = [
    "/lovable-uploads/94f5c847-cb61-4cb5-99ee-96832dd27193.png",
    "/lovable-uploads/b3581df1-c2f7-4c9b-aacf-09b7aaba29ce.png",
    "/lovable-uploads/88b5c93b-877a-44d3-8321-2dd01e1fac06.png",
    "/lovable-uploads/2b967b2f-b443-4a4f-90fb-71643198e748.png"
  ];

  return (
    <section className="py-12 sm:py-16 lg:py-20 bg-gradient-to-br from-green-50 to-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-8 lg:gap-16 items-center">
          {/* Product Gallery */}
          <div className="space-y-6 sm:space-y-8 order-2 lg:order-1">
            <div className="grid grid-cols-2 gap-3 sm:gap-4">
              {productImages.map((image, index) => (
                <div 
                  key={index}
                  className="relative overflow-hidden rounded-xl sm:rounded-2xl bg-white shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105"
                >
                  <img 
                    src={image}
                    alt={`HairFix Product ${index + 1}`}
                    className="w-full h-48 sm:h-64 object-cover"
                  />
                </div>
              ))}
            </div>
          </div>
          
          {/* Product Details */}
          <div className="space-y-6 sm:space-y-8 order-1 lg:order-2">
            <div>
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-4 sm:mb-6">
                Meet Your Hair's
                <span className="block text-transparent bg-gradient-to-r from-green-600 to-green-800 bg-clip-text">
                  Best Friend
                </span>
              </h2>
              <p className="text-lg sm:text-xl text-gray-600 leading-relaxed">
                HairFix isn't just another hair oil - it's a complete hair transformation system in a bottle. Our carefully crafted formula works on a cellular level to repair, nourish, and protect your hair.
              </p>
            </div>
            
            <div className="space-y-4 sm:space-y-6">
              <div className="flex items-start gap-3 sm:gap-4">
                <div className="w-7 h-7 sm:w-8 sm:h-8 bg-green-600 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                  <span className="text-white text-xs sm:text-sm font-bold">1</span>
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900 mb-2 text-sm sm:text-base">Deep Penetration Technology</h4>
                  <p className="text-gray-600 text-sm sm:text-base">Our lightweight formula absorbs quickly without leaving greasy residue.</p>
                </div>
              </div>
              
              <div className="flex items-start gap-3 sm:gap-4">
                <div className="w-7 h-7 sm:w-8 sm:h-8 bg-green-600 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                  <span className="text-white text-xs sm:text-sm font-bold">2</span>
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900 mb-2 text-sm sm:text-base">Natural Ingredient Blend</h4>
                  <p className="text-gray-600 text-sm sm:text-base">Enriched with essential oils and botanical extracts for maximum effectiveness.</p>
                </div>
              </div>
              
              <div className="flex items-start gap-3 sm:gap-4">
                <div className="w-7 h-7 sm:w-8 sm:h-8 bg-green-600 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                  <span className="text-white text-xs sm:text-sm font-bold">3</span>
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900 mb-2 text-sm sm:text-base">Visible Results in 7 Days</h4>
                  <p className="text-gray-600 text-sm sm:text-base">Experience softer, shinier, and healthier hair in just one week of regular use.</p>
                </div>
              </div>
            </div>
            
            <div className="bg-white p-4 sm:p-6 rounded-xl sm:rounded-2xl border border-green-200 shadow-sm">
              <div className="flex flex-col sm:flex-row sm:justify-between sm:items-center mb-4 gap-2">
                <h3 className="text-xl sm:text-2xl font-bold text-gray-900">Special Launch Price</h3>
                <div className="text-left sm:text-right">
                  <div className="text-sm text-gray-500 line-through">PKR 4,999</div>
                  <div className="text-2xl sm:text-3xl font-bold text-green-600">PKR 2,999</div>
                </div>
              </div>
              <div className="text-sm text-green-600 font-medium mb-4">
                🎉 Limited Time Offer - Save 40%
              </div>
              <button className="w-full bg-gradient-to-r from-green-600 to-green-700 hover:from-green-700 hover:to-green-800 text-white py-3 sm:py-4 rounded-xl font-semibold text-base sm:text-lg transition-all duration-300 hover:scale-105 shadow-lg">
                Order Now - Free Shipping
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProductShowcase;
