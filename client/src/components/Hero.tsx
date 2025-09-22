import { Button } from '@/components/ui/button';
import { Calendar } from 'lucide-react';
import { useLocation } from 'wouter';
import heroImage from '@assets/generated_images/Tech_support_hero_background_70bf64f6.png';

interface HeroProps {
  // No props needed anymore
}

export default function Hero({}: HeroProps) {
  const [, setLocation] = useLocation();

  const handleBookSession = () => {
    console.log('Hero book session clicked');
    setLocation('/contact');
  };

  return (
    <section className="relative min-h-[600px] flex items-center justify-center overflow-hidden">
      {/* Background Image with Overlay */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url(${heroImage})` }}
      >
        <div className="absolute inset-0 bg-black/65"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 w-full px-4 text-center text-white">
        <div className="flex justify-center mb-6">
          <h1 className="text-4xl md:text-6xl font-heading font-bold leading-tight md:whitespace-nowrap" style={{textShadow: '0 2px 8px rgba(0,0,0,0.8)'}} data-testid="text-hero-headline">
            Get Geek Online Support — Anytime.
          </h1>
        </div>
        <p className="text-lg md:text-xl mb-8 max-w-3xl mx-auto leading-relaxed" style={{textShadow: '0 1px 4px rgba(0,0,0,0.7)'}} data-testid="text-hero-subheadline">
          Printers, Wi-Fi, software, and more — get online help from trusted technicians at My Geek Online.
        </p>
        
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Button 
            size="lg" 
            onClick={handleBookSession}
            className="bg-success text-success-foreground hover:bg-success/90 px-8 py-4 text-xl font-bold"
            data-testid="button-hero-book"
          >
            <Calendar className="w-5 h-5 mr-2" />
            Book a Session
          </Button>
        </div>
      </div>
    </section>
  );
}