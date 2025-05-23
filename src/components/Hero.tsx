
import { Button } from '@/components/ui/button';
import { ArrowRight, Play } from 'lucide-react';

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-ocean-gradient">
      {/* Animated Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-20 left-10 w-72 h-72 bg-coral-500/10 rounded-full blur-3xl animate-float"></div>
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-ocean-300/10 rounded-full blur-3xl animate-float" style={{ animationDelay: '1s' }}></div>
        <div className="absolute top-1/2 left-1/3 w-64 h-64 bg-white/5 rounded-full blur-2xl animate-float" style={{ animationDelay: '2s' }}></div>
      </div>

      <div className="container mx-auto px-4 py-20 text-center relative z-10">
        <div className="max-w-4xl mx-auto">
          {/* Badge */}
          <div className="inline-flex items-center px-4 py-2 rounded-full glass-morphism mb-8">
            <span className="text-sm font-medium text-white">🌊 Premium Custom Aquariums</span>
          </div>

          {/* Main Heading */}
          <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 leading-tight">
            Crafting Aquatic
            <span className="block text-coral-400">Masterpieces</span>
          </h1>

          {/* Subheading */}
          <p className="text-xl md:text-2xl text-crystal-100 mb-8 max-w-3xl mx-auto leading-relaxed">
            Transform your space into a living work of art with custom-designed aquariums 
            that blend cutting-edge technology with artisan craftsmanship.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12">
            <Button 
              size="lg" 
              className="bg-coral-gradient hover:opacity-90 text-white font-semibold px-8 py-4 text-lg group"
            >
              Start Designing
              <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
            </Button>
            <Button 
              size="lg" 
              variant="outline" 
              className="border-white/30 text-white hover:bg-white/10 font-semibold px-8 py-4 text-lg group"
            >
              <Play className="mr-2 h-5 w-5 group-hover:scale-110 transition-transform" />
              Watch Process
            </Button>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 glass-morphism rounded-2xl p-8">
            <div>
              <div className="text-3xl md:text-4xl font-bold text-coral-400 mb-2">500+</div>
              <div className="text-crystal-200 text-sm md:text-base">Custom Builds</div>
            </div>
            <div>
              <div className="text-3xl md:text-4xl font-bold text-coral-400 mb-2">15+</div>
              <div className="text-crystal-200 text-sm md:text-base">Years Experience</div>
            </div>
            <div>
              <div className="text-3xl md:text-4xl font-bold text-coral-400 mb-2">98%</div>
              <div className="text-crystal-200 text-sm md:text-base">Satisfaction Rate</div>
            </div>
            <div>
              <div className="text-3xl md:text-4xl font-bold text-coral-400 mb-2">24/7</div>
              <div className="text-crystal-200 text-sm md:text-base">Support</div>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-white/30 rounded-full flex justify-center">
          <div className="w-1 h-3 bg-white/60 rounded-full mt-2 animate-pulse"></div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
