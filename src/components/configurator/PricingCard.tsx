
import React from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';

interface PricingCardProps {
  totalPrice: number;
}

const PricingCard: React.FC<PricingCardProps> = ({ totalPrice }) => {
  return (
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
  );
}

export default PricingCard;
