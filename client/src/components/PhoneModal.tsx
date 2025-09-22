import { useState } from "react";
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Phone, Copy, Check } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

interface PhoneModalProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
  phoneNumber?: string;
  displayNumber?: string;
  title?: string;
  description?: string;
}

export default function PhoneModal({ 
  open, 
  onOpenChange, 
  phoneNumber = "1-800-XXX-XXXX",
  displayNumber = "1-800-XXX-XXXX",
  title = "Call My Geek Online",
  description = "Use any of these options to reach our technical support team:"
}: PhoneModalProps) {
  const [copied, setCopied] = useState(false);
  const { toast } = useToast();

  const handleCopyToClipboard = async () => {
    try {
      await navigator.clipboard.writeText(phoneNumber);
      setCopied(true);
      toast({
        title: "Phone number copied!",
        description: "The phone number has been copied to your clipboard."
      });
      setTimeout(() => setCopied(false), 2000);
    } catch (err) {
      toast({
        title: "Copy failed",
        description: "Please manually copy the phone number.",
        variant: "destructive"
      });
    }
  };

  const handleDirectCall = () => {
    // Only use tel: link if user explicitly chooses it
    window.open(`tel:${phoneNumber}`, '_self');
  };

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="sm:max-w-md">
        <DialogHeader>
          <DialogTitle className="flex items-center gap-2">
            <Phone className="h-5 w-5 text-primary" />
            {title}
          </DialogTitle>
        </DialogHeader>
        
        <div className="space-y-6">
          <p className="text-sm text-muted-foreground">
            {description}
          </p>
          
          {/* Large Phone Number Display */}
          <div className="text-center p-6 bg-muted/50 rounded-lg border">
            <div className="text-3xl font-bold text-primary mb-2" data-testid="phone-number-display">
              {displayNumber}
            </div>
            <p className="text-sm text-muted-foreground">
              Available 7 days a week with extended hours
            </p>
          </div>
          
          {/* Action Buttons */}
          <div className="grid grid-cols-2 gap-3">
            <Button 
              variant="outline" 
              onClick={handleCopyToClipboard}
              className="flex items-center gap-2"
              data-testid="button-copy-phone"
            >
              {copied ? <Check className="h-4 w-4" /> : <Copy className="h-4 w-4" />}
              {copied ? "Copied!" : "Copy Number"}
            </Button>
            
            <Button 
              onClick={handleDirectCall}
              className="flex items-center gap-2"
              data-testid="button-call-direct"
            >
              <Phone className="h-4 w-4" />
              Call Now
            </Button>
          </div>
          
          {/* Additional Options */}
          <div className="text-center space-y-2 pt-4 border-t">
            <p className="text-sm font-semibold">Need Help Right Away?</p>
            <p className="text-xs text-muted-foreground">
              For urgent computer emergencies, call immediately for priority support.
              For non-urgent issues, you can also contact us via our online form.
            </p>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
}