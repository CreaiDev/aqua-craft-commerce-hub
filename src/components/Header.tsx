
import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Menu, X } from 'lucide-react';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 glass-morphism border-b border-white/20">
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <div className="flex items-center space-x-2">
            <div className="relative">
              <img 
                src="/lovable-uploads/32b33a88-0fc8-4d03-8bb6-ca0b9e7f9e4b.png" 
                alt="Advanced Acrylics Logo" 
                className="h-8 w-auto"
              />
            </div>
            <span className="text-2xl font-bold text-gradient">Advanced Acrylics</span>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            <a href="#configurator" className="text-crystal-700 hover:text-ocean-600 transition-colors font-medium">
              Configurator
            </a>
            <a href="#gallery" className="text-crystal-700 hover:text-ocean-600 transition-colors font-medium">
              Gallery
            </a>
            <a href="#process" className="text-crystal-700 hover:text-ocean-600 transition-colors font-medium">
              Our Process
            </a>
            <a href="#about" className="text-crystal-700 hover:text-ocean-600 transition-colors font-medium">
              About
            </a>
            <Button className="bg-ocean-gradient hover:opacity-90 text-white font-semibold px-6">
              Get Quote
            </Button>
          </nav>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden text-crystal-700"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden mt-4 pb-4 border-t border-white/20 pt-4">
            <nav className="flex flex-col space-y-4">
              <a href="#configurator" className="text-crystal-700 hover:text-ocean-600 transition-colors font-medium">
                Configurator
              </a>
              <a href="#gallery" className="text-crystal-700 hover:text-ocean-600 transition-colors font-medium">
                Gallery
              </a>
              <a href="#process" className="text-crystal-700 hover:text-ocean-600 transition-colors font-medium">
                Our Process
              </a>
              <a href="#about" className="text-crystal-700 hover:text-ocean-600 transition-colors font-medium">
                About
              </a>
              <Button className="bg-ocean-gradient hover:opacity-90 text-white font-semibold px-6 w-full">
                Get Quote
              </Button>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;
