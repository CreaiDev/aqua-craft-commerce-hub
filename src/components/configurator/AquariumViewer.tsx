
import React, { Suspense } from 'react';
import { Canvas } from '@react-three/fiber';
import { OrbitControls, Environment, ContactShadows } from '@react-three/drei';
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
          <Canvas camera={{ position: [5, 3, 5], fov: 45 }}>
            <Suspense fallback={null}>
              <ambientLight intensity={0.4} />
              <directionalLight position={[10, 10, 5]} intensity={1} />
              <pointLight position={[-10, -10, -5]} intensity={0.5} />
              
              <AquariumModel dimensions={dimensions} glassThickness={glassThickness} />
              
              <Environment preset="apartment" />
              <ContactShadows opacity={0.4} scale={10} blur={1} far={10} resolution={256} color="#000000" />
              <OrbitControls enablePan={false} enableZoom={true} enableRotate={true} />
            </Suspense>
          </Canvas>
        </div>
      </CardContent>
    </Card>
  );
}

export default AquariumViewer;
