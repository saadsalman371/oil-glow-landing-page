
import { Button } from "@/components/ui/button";

const Hero = () => {
  return (
    <section className="relative min-h-screen bg-gradient-to-br from-green-50 via-cream-50 to-green-100 flex items-center pt-16">
      {/* Background decorative elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-10 -right-10 w-72 h-72 bg-green-200/20 rounded-full blur-3xl"></div>
        <div className="absolute -bottom-10 -left-10 w-96 h-96 bg-green-300/10 rounded-full blur-3xl"></div>
      </div>
      
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center">
          {/* Content */}
          <div className="text-center lg:text-left space-y-6 lg:space-y-8 animate-fade-in">
            <div className="space-y-4 lg:space-y-6">
              <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-7xl font-bold leading-tight">
                Transform Your
                <span className="block text-transparent bg-gradient-to-r from-green-600 to-green-800 bg-clip-text">
                  Hair Story
                </span>
              </h1>
              
              <p className="text-lg sm:text-xl lg:text-2xl text-gray-600 leading-relaxed max-w-2xl mx-auto lg:mx-0">
                Discover the magical power of HairFix - the all-natural hair oil that repairs, restores, and revives your hair from root to tip.
              </p>
              
              <div className="flex flex-col sm:flex-row flex-wrap gap-2 sm:gap-4 text-sm text-green-700 font-medium justify-center lg:justify-start">
                <span className="flex items-center justify-center gap-2">
                  ✨ 100% Natural Ingredients
                </span>
                <span className="flex items-center justify-center gap-2">
                  🌿 Chemical-Free Formula
                </span>
                <span className="flex items-center justify-center gap-2">
                  💚 Dermatologist Approved
                </span>
              </div>
            </div>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <Button 
                size="lg" 
                className="bg-gradient-to-r from-green-600 to-green-700 hover:from-green-700 hover:to-green-800 text-white px-6 sm:px-8 py-4 sm:py-6 text-base sm:text-lg font-semibold rounded-full shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105"
              >
                Order Now - PKR 2,999
              </Button>
              <Button 
                variant="outline" 
                size="lg"
                className="border-2 border-green-600 text-green-700 hover:bg-green-50 px-6 sm:px-8 py-4 sm:py-6 text-base sm:text-lg font-semibold rounded-full transition-all duration-300 hover:scale-105"
              >
                Learn More
              </Button>
            </div>
            
            <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4 sm:gap-6 pt-4">
              <div className="text-center">
                <div className="text-xl sm:text-2xl font-bold text-green-700">10K+</div>
                <div className="text-xs sm:text-sm text-gray-600">Happy Customers</div>
              </div>
              <div className="hidden sm:block w-px h-12 bg-gray-300"></div>
              <div className="text-center">
                <div className="text-xl sm:text-2xl font-bold text-green-700">4.9★</div>
                <div className="text-xs sm:text-sm text-gray-600">Average Rating</div>
              </div>
              <div className="hidden sm:block w-px h-12 bg-gray-300"></div>
              <div className="text-center">
                <div className="text-xl sm:text-2xl font-bold text-green-700">30 Days</div>
                <div className="text-xs sm:text-sm text-gray-600">Money Back</div>
              </div>
            </div>
          </div>
          
          {/* Product Image */}
          <div className="relative flex justify-center animate-fade-in order-first lg:order-last">
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-r from-green-400/20 to-green-600/20 rounded-full blur-2xl scale-110"></div>
              <img 
                src="/lovable-uploads/8e23cbb3-528f-44d5-a1e7-23bc494119b0.png" 
                alt="HairFix Magical Hair Oil" 
                className="relative z-10 w-full max-w-xs sm:max-w-sm md:max-w-md mx-auto drop-shadow-2xl hover:scale-105 transition-transform duration-500"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
