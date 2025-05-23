import { Mail, Phone, MapPin } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-crystal-900 text-white py-16">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Brand */}
          <div>
            <div className="flex items-center space-x-2 mb-6">
              <img 
                src="/lovable-uploads/32b33a88-0fc8-4d03-8bb6-ca0b9e7f9e4b.png" 
                alt="Advanced Acrylics Logo" 
                className="h-8 w-auto"
              />
              <span className="text-2xl font-bold">Advanced Acrylics</span>
            </div>
            <p className="text-crystal-300 mb-6 leading-relaxed">
              Transforming spaces with custom aquarium installations that blend 
              artistry, technology, and nature into living masterpieces.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-crystal-400 hover:text-coral-400 transition-colors">
                <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z"/>
                </svg>
              </a>
              <a href="#" className="text-crystal-400 hover:text-coral-400 transition-colors">
                <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M22.46 6c-.77.35-1.6.58-2.46.69.88-.53 1.56-1.37 1.88-2.38-.83.5-1.75.85-2.72 1.05C18.37 4.5 17.26 4 16 4c-2.35 0-4.27 1.92-4.27 4.29 0 .34.04.67.11.98C8.28 9.09 5.11 7.38 3 4.79c-.37.63-.58 1.37-.58 2.15 0 1.49.75 2.81 1.91 3.56-.71 0-1.37-.2-1.95-.5v.03c0 2.08 1.48 3.82 3.44 4.21a4.22 4.22 0 0 1-1.93.07 4.28 4.28 0 0 0 4 2.98 8.521 8.521 0 0 1-5.33 1.84c-.34 0-.68-.02-1.02-.06C3.44 20.29 5.7 21 8.12 21 16 21 20.33 14.46 20.33 8.79c0-.19 0-.37-.01-.56.84-.6 1.56-1.36 2.14-2.23z"/>
                </svg>
              </a>
              <a href="#" className="text-crystal-400 hover:text-coral-400 transition-colors">
                <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12.017 0C5.396 0 .029 5.367.029 11.987c0 5.079 3.158 9.417 7.618 11.174-.105-.949-.199-2.403.041-3.439.219-.937 1.406-5.957 1.406-5.957s-.359-.72-.359-1.781c0-1.663.967-2.911 2.168-2.911 1.024 0 1.518.769 1.518 1.688 0 1.029-.653 2.567-.992 3.992-.285 1.193.6 2.165 1.775 2.165 2.128 0 3.768-2.245 3.768-5.487 0-2.861-2.063-4.869-5.008-4.869-3.41 0-5.409 2.562-5.409 5.199 0 1.033.394 2.143.889 2.741.099.12.112.225.085.345-.09.375-.293 1.199-.334 1.363-.053.225-.172.271-.402.165-1.495-.69-2.433-2.878-2.433-4.646 0-3.776 2.748-7.252 7.92-7.252 4.158 0 7.392 2.967 7.392 6.923 0 4.135-2.607 7.462-6.233 7.462-1.214 0-2.357-.629-2.758-1.378l-.749 2.848c-.269 1.045-1.004 2.352-1.498 3.146 1.123.345 2.306.535 3.55.535 6.624 0 11.99-5.367 11.99-11.99C24.007 5.367 18.641.001.012.001z.017 0z"/>
                </svg>
              </a>
            </div>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-xl font-bold mb-6">Services</h3>
            <ul className="space-y-3">
              <li><a href="#" className="text-crystal-300 hover:text-coral-400 transition-colors">Custom Design</a></li>
              <li><a href="#" className="text-crystal-300 hover:text-coral-400 transition-colors">3D Visualization</a></li>
              <li><a href="#" className="text-crystal-300 hover:text-coral-400 transition-colors">Installation</a></li>
              <li><a href="#" className="text-crystal-300 hover:text-coral-400 transition-colors">Maintenance</a></li>
              <li><a href="#" className="text-crystal-300 hover:text-coral-400 transition-colors">Consultation</a></li>
            </ul>
          </div>

          {/* Support */}
          <div>
            <h3 className="text-xl font-bold mb-6">Support</h3>
            <ul className="space-y-3">
              <li><a href="#" className="text-crystal-300 hover:text-coral-400 transition-colors">FAQ</a></li>
              <li><a href="#" className="text-crystal-300 hover:text-coral-400 transition-colors">Care Guides</a></li>
              <li><a href="#" className="text-crystal-300 hover:text-coral-400 transition-colors">Warranty</a></li>
              <li><a href="#" className="text-crystal-300 hover:text-coral-400 transition-colors">Technical Support</a></li>
              <li><a href="#" className="text-crystal-300 hover:text-coral-400 transition-colors">Emergency Service</a></li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-xl font-bold mb-6">Contact</h3>
            <div className="space-y-4">
              <div className="flex items-start space-x-3">
                <MapPin className="h-5 w-5 text-coral-400 mt-0.5 flex-shrink-0" />
                <div className="text-crystal-300">
                  <div>123 Marine Drive</div>
                  <div>Coastal City, CA 90210</div>
                </div>
              </div>
              <div className="flex items-center space-x-3">
                <Phone className="h-5 w-5 text-coral-400 flex-shrink-0" />
                <a href="tel:+1-555-AQUA-CRAFT" className="text-crystal-300 hover:text-coral-400 transition-colors">
                  +1 (555) AQUA-CRAFT
                </a>
              </div>
              <div className="flex items-center space-x-3">
                <Mail className="h-5 w-5 text-coral-400 flex-shrink-0" />
                <a href="mailto:hello@aquacraft.com" className="text-crystal-300 hover:text-coral-400 transition-colors">
                  hello@aquacraft.com
                </a>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-crystal-800 mt-12 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="text-crystal-400 text-sm">
              © 2024 Advanced Acrylics. All rights reserved.
            </div>
            <div className="flex space-x-6 mt-4 md:mt-0">
              <a href="#" className="text-crystal-400 hover:text-coral-400 transition-colors text-sm">Privacy Policy</a>
              <a href="#" className="text-crystal-400 hover:text-coral-400 transition-colors text-sm">Terms of Service</a>
              <a href="#" className="text-crystal-400 hover:text-coral-400 transition-colors text-sm">Cookie Policy</a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
