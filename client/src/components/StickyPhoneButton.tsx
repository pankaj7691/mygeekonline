import { Phone } from 'lucide-react';
import { Button } from '@/components/ui/button';

interface StickyPhoneButtonProps {
  onCall?: () => void;
}

export default function StickyPhoneButton({ onCall }: StickyPhoneButtonProps) {
  const handleCall = () => {
    console.log('Sticky phone button clicked');
    onCall?.();
  };

  return (
    <div className="fixed bottom-6 right-6 z-50 md:hidden">
      <Button
        size="lg"
        className="w-14 h-14 rounded-full bg-success text-success-foreground hover:bg-success/90 shadow-lg"
        onClick={handleCall}
        data-testid="button-sticky-phone"
      >
        <Phone className="w-6 h-6" />
      </Button>
    </div>
  );
}