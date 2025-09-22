import { Printer, Wifi, Shield, Cloud } from 'lucide-react';
import ServiceCard from './ServiceCard';

interface ServicesGridProps {
  onServiceClick?: (service: string) => void;
}

export default function ServicesGrid({ onServiceClick }: ServicesGridProps) {
  const services = [
    {
      icon: Printer,
      title: 'Printer Support',
      description: 'Get your printer working with driver updates, setup help, and troubleshooting.',
      features: [
        'Driver installation & updates',
        'Wi-Fi printer setup',
        'Print quality issues',
        'Paper jam resolution',
        'Wireless connectivity'
      ],
      href: '/services/printer-support'
    },
    {
      icon: Wifi,
      title: 'Wi-Fi & Network',
      description: 'Resolve internet connection issues and optimize your home network.',
      features: [
        'Internet connection problems',
        'Wi-Fi setup & optimization',
        'Router configuration',
        'Network security',
        'Speed troubleshooting'
      ],
      href: '/services/wifi-network'
    },
    {
      icon: Shield,
      title: 'Virus & Malware',
      description: 'Remove threats and protect your computer from future infections.',
      features: [
        'Virus & malware removal',
        'System security scan',
        'Anti-virus setup',
        'Browser cleanup',
        'Security best practices'
      ],
      href: '/services/virus-malware'
    },
    {
      icon: Cloud,
      title: 'Data & Backup',
      description: 'Secure your important files with professional backup solutions.',
      features: [
        'Data backup setup',
        'Cloud storage configuration',
        'File recovery assistance',
        'Sync troubleshooting',
        'Storage optimization'
      ],
      href: '/services/data-backup'
    }
  ];

  return (
    <section className="py-16 bg-background">
      <div className="max-w-6xl mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-heading font-bold mb-4" data-testid="text-services-heading">
            Our Tech Support Services
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Expert remote assistance for all your technology needs. Get professional help without leaving your home.
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map((service, index) => (
            <ServiceCard
              key={index}
              icon={service.icon}
              title={service.title}
              description={service.description}
              features={service.features}
              href={service.href}
              onLearnMore={() => onServiceClick?.(service.title)}
            />
          ))}
        </div>
      </div>
    </section>
  );
}