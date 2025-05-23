
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { 
  Zap, 
  Shield, 
  Eye, 
  Wrench, 
  Award, 
  Clock,
  Ruler,
  Droplets
} from 'lucide-react';

const Features = () => {
  const features = [
    {
      icon: <Eye className="h-8 w-8" />,
      title: "3D Visualization",
      description: "See your custom aquarium in photorealistic detail before production begins."
    },
    {
      icon: <Ruler className="h-8 w-8" />,
      title: "Precision Engineering",
      description: "Computer-controlled cutting and assembly for perfect fits and crystal-clear joints."
    },
    {
      icon: <Shield className="h-8 w-8" />,
      title: "Premium Materials",
      description: "Only the finest optical-grade acrylic and ultra-clear glass for unmatched clarity."
    },
    {
      icon: <Wrench className="h-8 w-8" />,
      title: "Expert Installation",
      description: "Professional installation and setup by certified aquarium specialists."
    },
    {
      icon: <Droplets className="h-8 w-8" />,
      title: "Integrated Filtration",
      description: "Custom filtration systems designed specifically for your aquarium's needs."
    },
    {
      icon: <Award className="h-8 w-8" />,
      title: "Lifetime Warranty",
      description: "Comprehensive warranty covering materials and craftsmanship for peace of mind."
    },
    {
      icon: <Clock className="h-8 w-8" />,
      title: "Fast Turnaround",
      description: "Most custom builds completed and installed within 4-6 weeks."
    },
    {
      icon: <Zap className="h-8 w-8" />,
      title: "Smart Integration",
      description: "Optional smart controls for lighting, temperature, and water quality monitoring."
    }
  ];

  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-crystal-900 mb-4">
            Why Choose AquaCraft?
          </h2>
          <p className="text-xl text-crystal-600 max-w-3xl mx-auto">
            We combine cutting-edge technology with artisan craftsmanship to deliver 
            aquariums that exceed expectations in both beauty and functionality.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map((feature, index) => (
            <Card 
              key={index} 
              className="group hover:shadow-xl transition-all duration-300 hover:-translate-y-2 border-crystal-200 hover:border-ocean-300"
            >
              <CardHeader className="text-center pb-4">
                <div className="mx-auto w-16 h-16 bg-ocean-gradient rounded-2xl flex items-center justify-center text-white group-hover:scale-110 transition-transform duration-300">
                  {feature.icon}
                </div>
                <CardTitle className="text-xl font-bold text-crystal-900 group-hover:text-ocean-700 transition-colors">
                  {feature.title}
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-crystal-600 text-center leading-relaxed">
                  {feature.description}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;
