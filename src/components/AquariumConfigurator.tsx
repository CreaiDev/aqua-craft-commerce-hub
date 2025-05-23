
import React, { useState } from 'react';
import AquariumViewer from './configurator/AquariumViewer';
import DimensionControls from './configurator/DimensionControls';
import MaterialControls from './configurator/MaterialControls';
import PricingCard from './configurator/PricingCard';

const AquariumConfigurator = () => {
  const [dimensions, setDimensions] = useState({
    width: 4,
    height: 2,
    depth: 1.5
  });
  const [glassThickness, setGlassThickness] = useState(0.05);
  const [material, setMaterial] = useState('acrylic');

  // Calculate volume and price
  const volume = (dimensions.width * dimensions.height * dimensions.depth * 264.172).toFixed(1); // Convert to gallons
  const basePrice = 2500;
  const sizeMultiplier = (dimensions.width * dimensions.height * dimensions.depth) * 200;
  const materialMultiplier = material === 'glass' ? 1 : 1.3;
  const totalPrice = Math.round((basePrice + sizeMultiplier) * materialMultiplier);

  return (
    <section id="configurator" className="py-20 bg-crystal-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold text-crystal-900 mb-4">
            Design Your Dream Aquarium
          </h2>
          <p className="text-xl text-crystal-600 max-w-3xl mx-auto">
            Use our interactive 3D configurator to visualize your custom aquarium in real-time. 
            Adjust dimensions, materials, and see instant pricing.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* 3D Viewer */}
          <AquariumViewer 
            dimensions={dimensions} 
            glassThickness={glassThickness}
            volume={volume}
          />

          {/* Controls */}
          <div className="space-y-6">
            <DimensionControls dimensions={dimensions} setDimensions={setDimensions} />
            <MaterialControls 
              material={material} 
              setMaterial={setMaterial}
              glassThickness={glassThickness}
              setGlassThickness={setGlassThickness} 
            />
            <PricingCard totalPrice={totalPrice} />
          </div>
        </div>
      </div>
    </section>
  );
};

export default AquariumConfigurator;
