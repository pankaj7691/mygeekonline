import { useEffect } from "react";
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import ContactForm from '@/components/ContactForm';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { useLocation } from 'wouter';
import { CheckCircle, Wifi, Router, Signal, Shield } from 'lucide-react';

export default function WiFiNetworkSupport() {
  useEffect(() => {
    document.title = "Wi-Fi & Network Support Services | My Geek Online";
    
    // Add meta description
    const metaDescription = document.createElement('meta');
    metaDescription.name = 'description';
    metaDescription.content = 'Professional Wi-Fi and network troubleshooting services. Fix internet connectivity issues, optimize network speed, secure your wireless network with online help.';
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
    "Wi-Fi connection troubleshooting",
    "Internet speed optimization", 
    "Router configuration and setup",
    "Network security enhancement",
    "Password recovery and reset",
    "Device connectivity issues",
    "Range extender installation",
    "Guest network configuration"
  ];

  const commonIssues = [
    { icon: Wifi, title: "No Internet Connection", description: "Connected to Wi-Fi but no internet access" },
    { icon: Signal, title: "Weak Signal", description: "Poor Wi-Fi signal strength or dead zones" },
    { icon: Router, title: "Router Problems", description: "Router keeps disconnecting or not working" },
    { icon: Shield, title: "Security Issues", description: "Unsecured network or suspected intrusions" }
  ];

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-br from-primary/10 to-primary/5">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <Wifi className="mx-auto h-16 w-16 text-primary mb-6" />
            <h1 className="text-4xl md:text-6xl font-heading font-bold mb-6">
              Wi-Fi & Network Support
            </h1>
            <p className="text-xl md:text-2xl text-muted-foreground max-w-3xl mx-auto mb-8">
              Restore your internet connection and optimize your network performance. 
              Our experts fix Wi-Fi issues and enhance network security online.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" onClick={handleBookSession} data-testid="button-book-session">
                Book Session
              </Button>
              <Button variant="outline" size="lg" data-testid="button-get-quote">
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
            <h2 className="text-3xl font-heading font-bold mb-4">Network Issues We Resolve</h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              From basic connectivity problems to advanced network optimization, we handle it all with online help.
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
                Complete Network Solutions
              </h2>
              <p className="text-lg text-muted-foreground mb-8">
                Whether you're dealing with slow internet, connection drops, or security concerns, 
                our network specialists provide comprehensive online solutions.
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
                Fix Your Network Now
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
            <h2 className="text-3xl font-heading font-bold mb-4">Why Choose Our Network Support?</h2>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            <Card>
              <CardHeader>
                <CardTitle className="text-center">24/7 Availability</CardTitle>
              </CardHeader>
              <CardContent className="text-center">
                <p className="text-muted-foreground">
                  Network issues don't wait. Get immediate help any time of day or night.
                </p>
              </CardContent>
            </Card>
            
            <Card>
              <CardHeader>
                <CardTitle className="text-center">Security Focused</CardTitle>
              </CardHeader>
              <CardContent className="text-center">
                <p className="text-muted-foreground">
                  We prioritize your network security while solving connectivity issues.
                </p>
              </CardContent>
            </Card>
            
            <Card>
              <CardHeader>
                <CardTitle className="text-center">Performance Optimization</CardTitle>
              </CardHeader>
              <CardContent className="text-center">
                <p className="text-muted-foreground">
                  Not just fixing problems - we optimize your network for maximum speed and reliability.
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