
import Header from '@/components/Header';
import Hero from '@/components/Hero';
import Features from '@/components/Features';
import AquariumConfigurator from '@/components/AquariumConfigurator';
import Gallery from '@/components/Gallery';
import Footer from '@/components/Footer';

const Index = () => {
  return (
    <div className="min-h-screen">
      <Header />
      <Hero />
      <Features />
      <AquariumConfigurator />
      <Gallery />
      <Footer />
    </div>
  );
};

export default Index;
