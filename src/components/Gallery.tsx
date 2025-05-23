
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';

const Gallery = () => {
  const projects = [
    {
      id: 1,
      title: "Modern Corporate Lobby",
      description: "800-gallon curved aquarium with integrated coral reef ecosystem",
      image: "https://images.unsplash.com/photo-1544551763-46a013bb70d5?auto=format&fit=crop&w=800&q=80",
      size: "12' × 4' × 3'",
      type: "Saltwater",
      price: "$45,000"
    },
    {
      id: 2,
      title: "Residential Living Wall",
      description: "Custom built-in aquarium with natural wood integration",
      image: "https://images.unsplash.com/photo-1520637836862-4d197d17c12a?auto=format&fit=crop&w=800&q=80",
      size: "8' × 3' × 2'",
      type: "Freshwater",
      price: "$28,000"
    },
    {
      id: 3,
      title: "Restaurant Feature Wall",
      description: "Floor-to-ceiling aquarium with automated feeding system",
      image: "https://images.unsplash.com/photo-1559827260-dc66d52bef19?auto=format&fit=crop&w=800&q=80",
      size: "6' × 8' × 2.5'",
      type: "Mixed",
      price: "$35,000"
    },
    {
      id: 4,
      title: "Penthouse Centerpiece",
      description: "360-degree viewing cylinder with LED art integration",
      image: "https://images.unsplash.com/photo-1583212292454-1fe6229603b7?auto=format&fit=crop&w=800&q=80",
      size: "4' diameter × 6'",
      type: "Saltwater",
      price: "$52,000"
    },
    {
      id: 5,
      title: "Medical Office Relaxation",
      description: "Peaceful freshwater display with automated maintenance",
      image: "https://images.unsplash.com/photo-1535591273668-578e31182c4f?auto=format&fit=crop&w=800&q=80",
      size: "10' × 2.5' × 2'",
      type: "Freshwater",
      price: "$22,000"
    },
    {
      id: 6,
      title: "Luxury Home Bar",
      description: "Backlit aquarium bar with temperature-controlled compartments",
      image: "https://images.unsplash.com/photo-1554990349-170b9e4bdf3b?auto=format&fit=crop&w=800&q=80",
      size: "14' × 3' × 2.5'",
      type: "Saltwater",
      price: "$48,000"
    }
  ];

  return (
    <section id="gallery" className="py-20 bg-crystal-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-crystal-900 mb-4">
            Showcase Gallery
          </h2>
          <p className="text-xl text-crystal-600 max-w-3xl mx-auto">
            Explore our portfolio of custom aquarium installations, from intimate home displays 
            to grand commercial installations that captivate and inspire.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project) => (
            <Card key={project.id} className="group overflow-hidden hover:shadow-2xl transition-all duration-300 hover:-translate-y-2">
              <div className="relative overflow-hidden">
                <img 
                  src={project.image} 
                  alt={project.title}
                  className="w-full h-64 object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute top-4 right-4">
                  <Badge 
                    variant="secondary" 
                    className={`
                      ${project.type === 'Saltwater' ? 'bg-ocean-100 text-ocean-700' : 
                        project.type === 'Freshwater' ? 'bg-emerald-100 text-emerald-700' : 
                        'bg-purple-100 text-purple-700'}
                    `}
                  >
                    {project.type}
                  </Badge>
                </div>
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </div>
              
              <CardContent className="p-6">
                <h3 className="text-xl font-bold text-crystal-900 mb-2 group-hover:text-ocean-700 transition-colors">
                  {project.title}
                </h3>
                <p className="text-crystal-600 mb-4 leading-relaxed">
                  {project.description}
                </p>
                
                <div className="flex justify-between items-center">
                  <div>
                    <div className="text-sm text-crystal-500 mb-1">Dimensions</div>
                    <div className="font-semibold text-crystal-700">{project.size}</div>
                  </div>
                  <div className="text-right">
                    <div className="text-sm text-crystal-500 mb-1">Investment</div>
                    <div className="font-bold text-ocean-600 text-lg">{project.price}</div>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="text-center mt-12">
          <p className="text-crystal-600 mb-6">
            Ready to see your vision come to life? Let's discuss your project.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="px-8 py-3 bg-ocean-gradient text-white font-semibold rounded-lg hover:opacity-90 transition-opacity">
              Schedule Consultation
            </button>
            <button className="px-8 py-3 border-2 border-ocean-600 text-ocean-600 font-semibold rounded-lg hover:bg-ocean-50 transition-colors">
              View Full Portfolio
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Gallery;
