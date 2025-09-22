import Header from '@/components/Header';
import Hero from '@/components/Hero';
import BenefitsSection from '@/components/BenefitsSection';
import ServicesGrid from '@/components/ServicesGrid';
import HowItWorks from '@/components/HowItWorks';
import TestimonialsSection from '@/components/TestimonialsSection';
import ContactForm from '@/components/ContactForm';
import BookingForm from '@/components/BookingForm';
import Footer from '@/components/Footer';
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

export default function Home() {
  const handleBookSession = () => {
    console.log('Book session clicked - would navigate to booking page');
    // todo: remove mock functionality - implement actual booking navigation
    alert('Navigate to booking page');
  };

  const handleServiceClick = (service: string) => {
    console.log(`Service clicked: ${service}`);
    // todo: remove mock functionality - implement service page navigation
    alert(`Navigate to ${service} page`);
  };

  return (
    <div className="min-h-screen bg-background">
      <Header />
      <Hero />
      <BenefitsSection />
      <ServicesGrid onServiceClick={handleServiceClick} />
      <HowItWorks />
      
      {/* Contact & Booking Section */}
      <section className="py-20 bg-muted/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-heading font-bold mb-4">
              Ready to Get Your Tech Issues Resolved?
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Choose how you'd like to get started - send us a message for a quick consultation, 
              or book a session to schedule your online help appointment.
            </p>
          </div>
          
          <div className="max-w-2xl mx-auto">
            <Tabs defaultValue="contact" className="w-full">
              <TabsList className="grid w-full grid-cols-2 mb-8">
                <TabsTrigger value="contact" data-testid="tab-contact">Get a Quote</TabsTrigger>
                <TabsTrigger value="booking" data-testid="tab-booking">Book Session</TabsTrigger>
              </TabsList>
              
              <TabsContent value="contact" className="mt-0">
                <div className="bg-card p-8 rounded-lg border">
                  <ContactForm showTitle={false} />
                </div>
              </TabsContent>
              
              <TabsContent value="booking" className="mt-0">
                <div className="bg-card p-8 rounded-lg border">
                  <BookingForm showTitle={false} />
                </div>
              </TabsContent>
            </Tabs>
          </div>
        </div>
      </section>
      
      <TestimonialsSection />
      <Footer />
    </div>
  );
}