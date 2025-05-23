
import React, { Suspense, useState } from 'react';
import { Canvas } from '@react-three/fiber';
import { OrbitControls, Environment, ContactShadows } from '@react-three/drei';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Slider } from '@/components/ui/slider';
import { Badge } from '@/components/ui/badge';
import * as THREE from 'three';

// 3D Aquarium Component
function Aquarium({ dimensions, glassThickness }: { dimensions: { width: number; height: number; depth: number }; glassThickness: number }) {
  const { width, height, depth } = dimensions;
  
  return (
    <group>
      {/* Water */}
      <mesh position={[0, 0, 0]}>
        <boxGeometry args={[width - 0.1, height - 0.1, depth - 0.1]} />
        <meshPhysicalMaterial
          color="#0ea5e9"
          transparent
          opacity={0.3}
          transmission={0.9}
          roughness={0}
          metalness={0}
          ior={1.33}
        />
      </mesh>

      {/* Glass Panels */}
      {/* Front */}
      <mesh position={[0, 0, depth/2]}>
        <boxGeometry args={[width, height, glassThickness]} />
        <meshPhysicalMaterial
          color="#ffffff"
          transparent
          opacity={0.1}
          transmission={0.98}
          roughness={0}
          metalness={0}
          ior={1.52}
        />
      </mesh>

      {/* Back */}
      <mesh position={[0, 0, -depth/2]}>
        <boxGeometry args={[width, height, glassThickness]} />
        <meshPhysicalMaterial
          color="#ffffff"
          transparent
          opacity={0.1}
          transmission={0.98}
          roughness={0}
          metalness={0}
          ior={1.52}
        />
      </mesh>

      {/* Left */}
      <mesh position={[-width/2, 0, 0]}>
        <boxGeometry args={[glassThickness, height, depth]} />
        <meshPhysicalMaterial
          color="#ffffff"
          transparent
          opacity={0.1}
          transmission={0.98}
          roughness={0}
          metalness={0}
          ior={1.52}
        />
      </mesh>

      {/* Right */}
      <mesh position={[width/2, 0, 0]}>
        <boxGeometry args={[glassThickness, height, depth]} />
        <meshPhysicalMaterial
          color="#ffffff"
          transparent
          opacity={0.1}
          transmission={0.98}
          roughness={0}
          metalness={0}
          ior={1.52}
        />
      </mesh>

      {/* Bottom */}
      <mesh position={[0, -height/2, 0]}>
        <boxGeometry args={[width, glassThickness, depth]} />
        <meshPhysicalMaterial
          color="#ffffff"
          transparent
          opacity={0.1}
          transmission={0.98}
          roughness={0}
          metalness={0}
          ior={1.52}
        />
      </mesh>

      {/* Substrate */}
      <mesh position={[0, -height/2 + 0.1, 0]}>
        <boxGeometry args={[width - 0.2, 0.2, depth - 0.2]} />
        <meshStandardMaterial color="#8b7355" roughness={0.8} />
      </mesh>
    </group>
  );
}

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
          <Card className="overflow-hidden">
            <CardHeader>
              <CardTitle className="flex items-center justify-between">
                <span>3D Preview</span>
                <Badge variant="secondary" className="bg-ocean-100 text-ocean-700">
                  {volume} gallons
                </Badge>
              </CardTitle>
            </CardHeader>
            <CardContent className="p-0">
              <div className="h-96 bg-gradient-to-b from-crystal-100 to-crystal-200">
                <Canvas camera={{ position: [5, 3, 5], fov: 45 }}>
                  <Suspense fallback={null}>
                    <ambientLight intensity={0.4} />
                    <directionalLight position={[10, 10, 5]} intensity={1} />
                    <pointLight position={[-10, -10, -5]} intensity={0.5} />
                    
                    <Aquarium dimensions={dimensions} glassThickness={glassThickness} />
                    
                    <Environment preset="apartment" />
                    <ContactShadows opacity={0.4} scale={10} blur={1} far={10} resolution={256} color="#000000" />
                    <OrbitControls enablePan={false} enableZoom={true} enableRotate={true} />
                  </Suspense>
                </Canvas>
              </div>
            </CardContent>
          </Card>

          {/* Controls */}
          <div className="space-y-6">
            <Card>
              <CardHeader>
                <CardTitle>Dimensions</CardTitle>
              </CardHeader>
              <CardContent className="space-y-6">
                <div>
                  <label className="block text-sm font-medium text-crystal-700 mb-2">
                    Width: {dimensions.width.toFixed(1)} ft
                  </label>
                  <Slider
                    value={[dimensions.width]}
                    onValueChange={(value) => setDimensions(prev => ({ ...prev, width: value[0] }))}
                    max={12}
                    min={2}
                    step={0.5}
                    className="w-full"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-crystal-700 mb-2">
                    Height: {dimensions.height.toFixed(1)} ft
                  </label>
                  <Slider
                    value={[dimensions.height]}
                    onValueChange={(value) => setDimensions(prev => ({ ...prev, height: value[0] }))}
                    max={6}
                    min={1}
                    step={0.5}
                    className="w-full"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-crystal-700 mb-2">
                    Depth: {dimensions.depth.toFixed(1)} ft
                  </label>
                  <Slider
                    value={[dimensions.depth]}
                    onValueChange={(value) => setDimensions(prev => ({ ...prev, depth: value[0] }))}
                    max={4}
                    min={1}
                    step={0.5}
                    className="w-full"
                  />
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Material & Thickness</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div>
                  <label className="block text-sm font-medium text-crystal-700 mb-2">Material</label>
                  <div className="grid grid-cols-2 gap-2">
                    <Button
                      variant={material === 'glass' ? 'default' : 'outline'}
                      onClick={() => setMaterial('glass')}
                      className="w-full"
                    >
                      Glass
                    </Button>
                    <Button
                      variant={material === 'acrylic' ? 'default' : 'outline'}
                      onClick={() => setMaterial('acrylic')}
                      className="w-full"
                    >
                      Acrylic
                    </Button>
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium text-crystal-700 mb-2">
                    Thickness: {(glassThickness * 12).toFixed(1)} inches
                  </label>
                  <Slider
                    value={[glassThickness]}
                    onValueChange={(value) => setGlassThickness(value[0])}
                    max={0.2}
                    min={0.03}
                    step={0.01}
                    className="w-full"
                  />
                </div>
              </CardContent>
            </Card>

            <Card className="bg-ocean-gradient text-white">
              <CardContent className="p-6">
                <div className="flex justify-between items-center mb-4">
                  <h3 className="text-2xl font-bold">Estimated Price</h3>
                  <div className="text-3xl font-bold text-coral-400">
                    ${totalPrice.toLocaleString()}
                  </div>
                </div>
                <p className="text-crystal-100 mb-6">
                  Final pricing may vary based on additional features, filtration systems, and installation requirements.
                </p>
                <Button className="w-full bg-coral-gradient hover:opacity-90 text-white font-semibold">
                  Request Detailed Quote
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AquariumConfigurator;
