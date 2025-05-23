
import React, { Suspense } from 'react';
import { Canvas } from '@react-three/fiber';
import { OrbitControls } from '@react-three/drei';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import AquariumModel from './AquariumModel';

interface AquariumViewerProps {
  dimensions: {
    width: number;
    height: number;
    depth: number;
  };
  glassThickness: number;
  volume: string;
}

const AquariumViewer: React.FC<AquariumViewerProps> = ({ dimensions, glassThickness, volume }) => {
  return (
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
          <Canvas 
            camera={{ position: [5, 3, 5], fov: 45 }}
            gl={{ alpha: true, antialias: true }}
          >
            {/* Lighting */}
            <ambientLight intensity={0.4} />
            <directionalLight position={[10, 10, 5]} intensity={1} />
            <pointLight position={[-10, -10, -5]} intensity={0.5} />
            
            {/* Aquarium Model wrapped in Suspense */}
            <Suspense fallback={null}>
              <AquariumModel dimensions={dimensions} glassThickness={glassThickness} />
            </Suspense>
            
            {/* Controls - outside of Suspense */}
            <OrbitControls enablePan={false} enableZoom={true} enableRotate={true} />
          </Canvas>
        </div>
      </CardContent>
    </Card>
  );
}

export default AquariumViewer;
