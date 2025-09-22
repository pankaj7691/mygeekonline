import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { LucideIcon } from 'lucide-react';

interface ServiceCardProps {
  icon: LucideIcon;
  title: string;
  description: string;
  features: string[];
  href?: string;
  onLearnMore?: () => void;
}

export default function ServiceCard({ icon: Icon, title, description, features, href, onLearnMore }: ServiceCardProps) {
  const handleLearnMore = () => {
    console.log(`Learn more about ${title} clicked`);
    onLearnMore?.();
  };

  return (
    <Card className="h-full hover-elevate transition-all duration-200" data-testid={`card-service-${title.toLowerCase().replace(/\\s+/g, '-')}`}>
      <CardHeader className="text-center">
        <div className="w-16 h-16 mx-auto mb-4 bg-primary/10 rounded-lg flex items-center justify-center">
          <Icon className="w-8 h-8 text-primary" />
        </div>
        <CardTitle className="text-xl font-heading">{title}</CardTitle>
        <CardDescription className="text-muted-foreground">{description}</CardDescription>
      </CardHeader>
      <CardContent className="space-y-4">
        <ul className="space-y-2">
          {features.map((feature, index) => (
            <li key={index} className="flex items-start text-sm">
              <span className="text-success mr-2 mt-0.5">✓</span>
              <span>{feature}</span>
            </li>
          ))}
        </ul>
        <Button 
          variant="outline" 
          className="w-full mt-4"
          onClick={handleLearnMore}
          data-testid={`button-learn-more-${title.toLowerCase().replace(/\\s+/g, '-')}`}
        >
          Learn More
        </Button>
      </CardContent>
    </Card>
  );
}