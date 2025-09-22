import { Printer } from 'lucide-react';
import ServiceCard from '../ServiceCard';

export default function ServiceCardExample() {
  return (
    <div className="p-4 max-w-sm">
      <ServiceCard
        icon={Printer}
        title="Printer Support"
        description="Get your printer working with driver updates, setup help, and troubleshooting."
        features={[
          'Driver installation & updates',
          'Wi-Fi printer setup',
          'Print quality issues',
          'Paper jam resolution'
        ]}
        onLearnMore={() => console.log('Learn more clicked')}
      />
    </div>
  );
}