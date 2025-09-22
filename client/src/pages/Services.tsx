import { useEffect } from "react";
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Link, useLocation } from 'wouter';
import { Printer, Wifi, Shield, HardDrive, ArrowRight } from 'lucide-react';

export default function Services() {
  const [, setLocation] = useLocation();

  const handleBookSession = () => {
    setLocation('/contact');
  };

  useEffect(() => {
    document.title = "Geek Online Support Services | My Geek Online";
    
    const metaDescription = document.createElement('meta');
    metaDescription.name = 'description';
    metaDescription.content = 'Professional Geek Online Support services including printer setup, Wi-Fi troubleshooting, virus removal, and data backup. Get expert help from certified technicians.';
    document.head.appendChild(metaDescription);
    
    return () => {
      const existingMeta = document.querySelector('meta[name="description"]');
      if (existingMeta) {
        document.head.removeChild(existingMeta);
      }
    };
  }, []);


  const services = [
    {
      icon: Printer,
      title: "Printer Support",
      description: "Setup, configuration, and troubleshooting for all printer types",
      features: ["Driver installation", "Wireless setup", "Print quality fixes", "Network printing"],
      link: "/services/printer-support"
    },
    {
      icon: Wifi,
      title: "Wi-Fi & Network",
      description: "Internet connectivity and network optimization services",
      features: ["Connection troubleshooting", "Speed optimization", "Router setup", "Security configuration"],
      link: "/services/wifi-network"
    },
    {
      icon: Shield,
      title: "Virus & Malware Removal",
      description: "Complete system cleaning and security protection",
      features: ["Malware scanning", "System cleanup", "Security software", "Prevention guidance"],
      link: "/services/virus-malware-removal"
    },
    {
      icon: HardDrive,
      title: "Data Backup & Recovery",
      description: "Protect and recover your important files and data",
      features: ["Backup setup", "File recovery", "Cloud storage", "Data migration"],
      link: "/services/data-backup-recovery"
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-br from-primary/10 to-primary/5">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-6xl font-heading font-bold mb-6">
              Our Geek Online Support Services
            </h1>
            <p className="text-xl md:text-2xl text-muted-foreground max-w-3xl mx-auto mb-8">
              Professional Geek Online Support for all your computer and device needs. 
              Get expert help from certified technicians, anytime.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" onClick={handleBookSession} data-testid="button-book-session">
                Book Session
              </Button>
              <Link href="/contact">
                <Button variant="outline" size="lg" data-testid="button-get-quote">
                  Get Free Quote
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-heading font-bold mb-4">Choose Your Service</h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Select the service you need, or contact us for a custom solution tailored to your specific requirements.
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 gap-8">
            {services.map((service, index) => (
              <Card key={index} className="group hover-elevate transition-all duration-300">
                <CardHeader>
                  <div className="flex items-center gap-4 mb-4">
                    <div className="bg-primary/10 p-3 rounded-lg">
                      <service.icon className="h-8 w-8 text-primary" />
                    </div>
                    <div>
                      <CardTitle className="text-xl">{service.title}</CardTitle>
                      <CardDescription className="text-base">{service.description}</CardDescription>
                    </div>
                  </div>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2 mb-6">
                    {service.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-center gap-2 text-sm">
                        <div className="w-1.5 h-1.5 bg-primary rounded-full"></div>
                        {feature}
                      </li>
                    ))}
                  </ul>
                  <Link href={service.link}>
                    <Button className="w-full group" data-testid={`button-service-${index}`}>
                      Learn More & Get Help
                      <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                    </Button>
                  </Link>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-20 bg-muted/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-heading font-bold mb-4">Why Choose My Geek Online?</h2>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            <Card className="text-center">
              <CardHeader>
                <CardTitle>Expert Technicians</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  Certified professionals with years of experience in computer repair and Geek Online Support.
                </p>
              </CardContent>
            </Card>
            
            <Card className="text-center">
              <CardHeader>
                <CardTitle>Online Support</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  Get help instantly without waiting for a technician visit. Most issues resolved with online help.
                </p>
              </CardContent>
            </Card>
            
            <Card className="text-center">
              <CardHeader>
                <CardTitle>Money-Back Guarantee</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  100% satisfaction guarantee. If we can't fix your issue, you don't pay.
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