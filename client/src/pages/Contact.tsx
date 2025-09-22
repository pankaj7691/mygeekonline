import { useEffect } from "react";
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import ContactForm from '@/components/ContactForm';
import BookingForm from '@/components/BookingForm';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Mail, Clock, MapPin } from 'lucide-react';

export default function Contact() {
  useEffect(() => {
    document.title = "Contact Us | My Geek Online - Get Geek Online Support";
    
    const metaDescription = document.createElement('meta');
    metaDescription.name = 'description';
    metaDescription.content = 'Contact My Geek Online for professional Geek Online Support. Email or book a session online. Fast, friendly, and reliable technical assistance.';
    document.head.appendChild(metaDescription);
    
    return () => {
      const existingMeta = document.querySelector('meta[name="description"]');
      if (existingMeta) {
        document.head.removeChild(existingMeta);
      }
    };
  }, []);


  const contactMethods = [
    {
      icon: Mail,
      title: "Email Support",
      description: "Send us a detailed message",
      details: "info@mygeekonline.com",
      action: "Send Email"
    },
    {
      icon: Clock,
      title: "Support Hours",
      description: "When we're available",
      details: "7 Days a Week, Extended Hours",
      action: null
    },
    {
      icon: MapPin,
      title: "Company",
      description: "CVI Holdings Inc.",
      details: "Online Support Worldwide",
      action: null
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      {/* Contact Forms - At the very top */}
      <section className="py-16 bg-muted/50" id="contact-form">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <Tabs defaultValue="contact" className="w-full">
            <TabsList className="grid w-full grid-cols-2 h-16 p-2 bg-background border-2 border-primary/20 rounded-lg shadow-lg">
              <TabsTrigger 
                value="contact" 
                className="text-lg font-semibold py-3 data-[state=active]:bg-primary data-[state=active]:text-primary-foreground data-[state=active]:shadow-md transition-all duration-200"
              >
                Report an Issue
              </TabsTrigger>
              <TabsTrigger 
                value="booking" 
                className="text-lg font-semibold py-3 data-[state=active]:bg-primary data-[state=active]:text-primary-foreground data-[state=active]:shadow-md transition-all duration-200"
              >
                Schedule Session
              </TabsTrigger>
            </TabsList>
            
            <TabsContent value="contact" className="mt-8">
              <Card>
                <CardHeader>
                  <CardTitle>Describe Your Tech Issue</CardTitle>
                  <CardDescription>
                    <span className="font-bold text-foreground">Tell us about your problem and we'll get back to you within few minutes</span>
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <ContactForm showTitle={false} />
                </CardContent>
              </Card>
            </TabsContent>
            
            <TabsContent value="booking" className="mt-8">
              <Card>
                <CardHeader>
                  <CardTitle>Book a Support Session</CardTitle>
                  <CardDescription>
                    Schedule a convenient time for our technicians to help you
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <BookingForm showTitle={false} />
                </CardContent>
              </Card>
            </TabsContent>
          </Tabs>
        </div>
      </section>

      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-br from-primary/10 to-primary/5">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-6xl font-heading font-bold mb-6">
              Contact Us
            </h1>
            <p className="text-xl md:text-2xl text-muted-foreground max-w-3xl mx-auto mb-8">
              Get the Geek Online Support you need, when you need it. Multiple ways to reach our 
              expert technicians for fast, professional assistance.
            </p>
          </div>
        </div>
      </section>

      {/* Contact Methods */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-heading font-bold mb-4">How to Reach Us</h2>
            <p className="text-xl text-muted-foreground">
              Choose the method that works best for you
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {contactMethods.map((method, index) => (
              <Card key={index} className="text-center hover-elevate">
                <CardHeader>
                  <method.icon className="mx-auto h-12 w-12 text-primary mb-4" />
                  <CardTitle className="text-lg">{method.title}</CardTitle>
                  <CardDescription>{method.description}</CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="font-semibold mb-4">{method.details}</p>
                  {method.action && (
                    <Button 
                      variant="outline" 
                      size="sm"
                      onClick={() => window.location.href = '#contact-form'}
                      data-testid={`button-${method.title.toLowerCase().replace(' ', '-')}`}
                    >
                      {method.action}
                    </Button>
                  )}
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Business Information */}
      <section className="py-20 bg-muted/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h2 className="text-3xl font-heading font-bold mb-6">Business Information</h2>
            <div className="bg-card p-8 rounded-lg border max-w-2xl mx-auto">
              <div className="space-y-4">
                <div>
                  <h3 className="font-semibold text-lg mb-2">My Geek Online</h3>
                  <p className="text-muted-foreground">A brand of CVI Holdings Inc.</p>
                </div>
                <div className="grid md:grid-cols-2 gap-4 text-sm">
                  <div>
                    <p className="font-semibold">Support Email:</p>
                    <p className="text-muted-foreground">info@mygeekonline.com</p>
                  </div>
                  <div>
                    <p className="font-semibold">Legal Email:</p>
                    <p className="text-muted-foreground">info@cviholdingsinc.com</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}