
const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white py-16">
      <div className="container mx-auto px-6 lg:px-8">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Brand */}
          <div className="space-y-4">
            <div className="flex items-center gap-2">
              <div className="w-8 h-8 bg-green-600 rounded-full flex items-center justify-center">
                <span className="text-white font-bold text-sm">G</span>
              </div>
              <span className="text-xl font-bold">GLOW & CO.</span>
            </div>
            <p className="text-gray-400 leading-relaxed">
              Transforming hair care with natural, effective solutions. Your journey to beautiful, healthy hair starts here.
            </p>
            <div className="flex gap-4">
              <div className="w-10 h-10 bg-gray-800 hover:bg-green-600 rounded-full flex items-center justify-center transition-colors cursor-pointer">
                <span className="text-sm">📘</span>
              </div>
              <div className="w-10 h-10 bg-gray-800 hover:bg-green-600 rounded-full flex items-center justify-center transition-colors cursor-pointer">
                <span className="text-sm">📷</span>
              </div>
              <div className="w-10 h-10 bg-gray-800 hover:bg-green-600 rounded-full flex items-center justify-center transition-colors cursor-pointer">
                <span className="text-sm">🐦</span>
              </div>
            </div>
          </div>
          
          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li><a href="#" className="text-gray-400 hover:text-white transition-colors">About Us</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white transition-colors">How to Use</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Ingredients</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Reviews</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Contact</a></li>
            </ul>
          </div>
          
          {/* Customer Care */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Customer Care</h3>
            <ul className="space-y-2">
              <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Shipping Info</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Returns Policy</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Size Guide</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white transition-colors">FAQ</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Track Order</a></li>
            </ul>
          </div>
          
          {/* Contact Info */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Get in Touch</h3>
            <div className="space-y-3">
              <div className="flex items-center gap-3">
                <span className="text-green-400">📞</span>
                <span className="text-gray-400">+91 98765 43210</span>
              </div>
              <div className="flex items-center gap-3">
                <span className="text-green-400">✉️</span>
                <span className="text-gray-400">hello@glowandco.com</span>
              </div>
              <div className="flex items-start gap-3">
                <span className="text-green-400">📍</span>
                <span className="text-gray-400">Mumbai, Maharashtra, India</span>
              </div>
            </div>
          </div>
        </div>
        
        <div className="border-t border-gray-800 mt-12 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-gray-400 text-sm">
              © 2024 Glow & Co. All rights reserved.
            </p>
            <div className="flex gap-6">
              <a href="#" className="text-gray-400 hover:text-white text-sm transition-colors">Privacy Policy</a>
              <a href="#" className="text-gray-400 hover:text-white text-sm transition-colors">Terms of Service</a>
              <a href="#" className="text-gray-400 hover:text-white text-sm transition-colors">Cookie Policy</a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
