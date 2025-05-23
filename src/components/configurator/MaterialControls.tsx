
import React from 'react';
import { Card, CardHeader, CardTitle, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Slider } from '@/components/ui/slider';

interface MaterialControlsProps {
  material: string;
  setMaterial: React.Dispatch<React.SetStateAction<string>>;
  glassThickness: number;
  setGlassThickness: React.Dispatch<React.SetStateAction<number>>;
}

const MaterialControls: React.FC<MaterialControlsProps> = ({ 
  material, 
  setMaterial, 
  glassThickness, 
  setGlassThickness 
}) => {
  return (
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
  );
}

export default MaterialControls;
