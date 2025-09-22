import { useEffect } from "react";
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import ContactForm from '@/components/ContactForm';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { useLocation } from 'wouter';
import { CheckCircle, Printer, Wifi, Settings, Shield } from 'lucide-react';

export default function PrinterSupport() {
  useEffect(() => {
    document.title = "Printer Support & Setup Services | My Geek Online";
    
    // Add meta description
    const metaDescription = document.createElement('meta');
    metaDescription.name = 'description';
    metaDescription.content = 'Expert online printer support and setup services. Fix printing issues, install drivers, configure wireless printing, and troubleshoot all printer problems with online help.';
    document.head.appendChild(metaDescription);
    
    return () => {
      // Cleanup meta tag on unmount
      const existingMeta = document.querySelector('meta[name="description"]');
      if (existingMeta) {
        document.head.removeChild(existingMeta);
      }
    };
  }, []);

  const [, setLocation] = useLocation();

  const handleBookSession = () => {
    setLocation('/contact');
  };

  const features = [
    "Printer driver installation and updates",
    "Wireless printer setup and configuration", 
    "Print quality troubleshooting",
    "Paper jam and feeding issue resolution",
    "Network printer sharing setup",
    "Scanner configuration and testing",
    "Ink/toner optimization guidance",
    "Multi-device printer access setup"
  ];

  const commonIssues = [
    { icon: Printer, title: "Won't Print", description: "Printer receives jobs but doesn't print anything" },
    { icon: Wifi, title: "Connection Issues", description: "Can't connect printer to Wi-Fi or computer" },
    { icon: Settings, title: "Driver Problems", description: "Missing, outdated, or corrupted printer drivers" },
    { icon: Shield, title: "Error Messages", description: "Persistent error codes and warning messages" }
  ];

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-br from-primary/10 to-primary/5">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <Printer className="mx-auto h-16 w-16 text-primary mb-6" />
            <h1 className="text-4xl md:text-6xl font-heading font-bold mb-6">
              Expert Printer Support
            </h1>
            <p className="text-xl md:text-2xl text-muted-foreground max-w-3xl mx-auto mb-8">
              Get your printer working perfectly with our online support services. 
              We fix printing issues, install drivers, and set up wireless printing in minutes.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" onClick={handleBookSession} data-testid="button-book-session">
                Book Session
              </Button>
              <Button variant="outline" size="lg" onClick={handleBookSession} data-testid="button-get-quote">
                Get Free Quote
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* What We Fix */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-heading font-bold mb-4">Common Printer Issues We Resolve</h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Our certified technicians can diagnose and fix most printer problems online within minutes.
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {commonIssues.map((issue, index) => (
              <Card key={index} className="text-center">
                <CardHeader>
                  <issue.icon className="mx-auto h-12 w-12 text-primary mb-4" />
                  <CardTitle className="text-lg">{issue.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription>{issue.description}</CardDescription>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Service Features */}
      <section className="py-20 bg-muted/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-heading font-bold mb-6">
                Complete Printer Support Services
              </h2>
              <p className="text-lg text-muted-foreground mb-8">
                From basic setup to complex network configuration, our experts handle all printer-related challenges online and efficiently.
              </p>
              
              <div className="grid gap-4">
                {features.map((feature, index) => (
                  <div key={index} className="flex items-center gap-3">
                    <CheckCircle className="h-5 w-5 text-green-500 flex-shrink-0" />
                    <span>{feature}</span>
                  </div>
                ))}
              </div>
            </div>
            
            <div className="bg-card p-8 rounded-lg border">
              <h3 className="text-xl font-heading font-semibold mb-4 text-center">
                Get Printer Help Now
              </h3>
              <ContactForm showTitle={false} />
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-heading font-bold mb-4">Why Choose My Geek Online for Printer Support?</h2>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            <Card>
              <CardHeader>
                <CardTitle className="text-center">Fast Online Service</CardTitle>
              </CardHeader>
              <CardContent className="text-center">
                <p className="text-muted-foreground">
                  Connect instantly for immediate printer troubleshooting. No waiting for technician visits.
                </p>
              </CardContent>
            </Card>
            
            <Card>
              <CardHeader>
                <CardTitle className="text-center">Expert Technicians</CardTitle>
              </CardHeader>
              <CardContent className="text-center">
                <p className="text-muted-foreground">
                  Certified printer specialists with years of experience across all major brands and models.
                </p>
              </CardContent>
            </Card>
            
            <Card>
              <CardHeader>
                <CardTitle className="text-center">Satisfaction Guarantee</CardTitle>
              </CardHeader>
              <CardContent className="text-center">
                <p className="text-muted-foreground">
                  100% money-back guarantee if we can't resolve your printer issue online.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}