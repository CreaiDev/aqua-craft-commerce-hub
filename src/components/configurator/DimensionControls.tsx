
import React from 'react';
import { Card, CardHeader, CardTitle, CardContent } from '@/components/ui/card';
import { Slider } from '@/components/ui/slider';

interface DimensionsType {
  width: number;
  height: number;
  depth: number;
}

interface DimensionControlsProps {
  dimensions: DimensionsType;
  setDimensions: React.Dispatch<React.SetStateAction<DimensionsType>>;
}

const DimensionControls: React.FC<DimensionControlsProps> = ({ dimensions, setDimensions }) => {
  return (
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
  );
}

export default DimensionControls;
