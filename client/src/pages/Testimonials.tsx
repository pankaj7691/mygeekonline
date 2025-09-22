import { useEffect } from "react";
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { useLocation } from 'wouter';
import { Star, Quote } from 'lucide-react';

export default function Testimonials() {
  const [, setLocation] = useLocation();

  const handleBookSession = () => {
    setLocation('/contact');
  };

  useEffect(() => {
    document.title = "Customer Testimonials | My Geek Online Success Stories";
    
    const metaDescription = document.createElement('meta');
    metaDescription.name = 'description';
    metaDescription.content = 'Read real customer testimonials about My Geek Online Geek Online Support services. See why thousands trust us for computer repair and technical assistance.';
    document.head.appendChild(metaDescription);
    
    return () => {
      const existingMeta = document.querySelector('meta[name="description"]');
      if (existingMeta) {
        document.head.removeChild(existingMeta);
      }
    };
  }, []);


  const testimonials = [
    {
      name: "Sarah Johnson",
      location: "Tampa, FL",
      rating: 5,
      issue: "Printer Setup",
      testimonial: "I was struggling with my new wireless printer for hours. The My Geek Online technician provided online help and had it working perfectly in just 20 minutes. Incredible service!",
      date: "2 weeks ago"
    },
    {
      name: "Mike Chen",
      location: "Seattle, WA",
      rating: 5,
      issue: "Virus Removal",
      testimonial: "My computer was completely infected with malware. The technician removed everything and installed security software. My laptop runs like new again. Worth every penny!",
      date: "1 month ago"
    },
    {
      name: "Linda Rodriguez",
      location: "Phoenix, AZ",
      rating: 5,
      issue: "Wi-Fi Issues",
      testimonial: "Our home Wi-Fi kept dropping connections. The support team fixed our router settings and optimized our network. Now we have perfect connectivity throughout the house.",
      date: "3 weeks ago"
    },
    {
      name: "Robert Thompson",
      location: "Chicago, IL",
      rating: 5,
      issue: "Data Recovery",
      testimonial: "I thought I lost all my family photos when my hard drive crashed. My Geek Online recovered everything and set up automatic cloud backups. Amazing service and very professional!",
      date: "1 month ago"
    },
    {
      name: "Jennifer Davis",
      location: "Austin, TX",
      rating: 5,
      issue: "Computer Slowdown",
      testimonial: "My laptop was running so slow I was ready to buy a new one. After the optimization service, it's faster than when I first bought it. Saved me hundreds of dollars!",
      date: "2 weeks ago"
    },
    {
      name: "David Wilson",
      location: "Boston, MA",
      rating: 5,
      issue: "Software Installation",
      testimonial: "Needed help installing and configuring business software. The technician was patient, knowledgeable, and got everything working perfectly. Excellent customer service!",
      date: "1 week ago"
    }
  ];

  const stats = [
    { number: "99%", label: "Customer Satisfaction" },
    { number: "10,000+", label: "Issues Resolved" },
    { number: "4.9/5", label: "Average Rating" }
  ];

  const StarRating = ({ rating }: { rating: number }) => {
    return (
      <div className="flex gap-1">
        {[...Array(5)].map((_, i) => (
          <Star
            key={i}
            className={`w-4 h-4 ${
              i < rating ? 'fill-yellow-400 text-yellow-400' : 'text-gray-300'
            }`}
          />
        ))}
      </div>
    );
  };

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-br from-primary/10 to-primary/5">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-6xl font-heading font-bold mb-6">
              Customer Success Stories
            </h1>
            <p className="text-xl md:text-2xl text-muted-foreground max-w-3xl mx-auto mb-8">
              Real testimonials from satisfied customers who trusted My Geek Online 
              to solve their technology problems quickly and professionally.
            </p>
            <Button size="lg" onClick={handleBookSession} data-testid="button-book-session">
              Join Our Happy Customers
            </Button>
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-3 gap-8 text-center">
            {stats.map((stat, index) => (
              <div key={index}>
                <div className="text-4xl font-bold text-primary mb-2">{stat.number}</div>
                <div className="text-muted-foreground">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Grid */}
      <section className="py-20 bg-muted/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-heading font-bold mb-4">What Our Customers Say</h2>
            <p className="text-xl text-muted-foreground">
              Don't just take our word for it - hear from real customers
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <Card key={index} className="relative">
                <CardHeader>
                  <div className="flex items-start justify-between mb-2">
                    <Quote className="w-8 h-8 text-primary/20 flex-shrink-0" />
                    <StarRating rating={testimonial.rating} />
                  </div>
                  <CardTitle className="text-lg">{testimonial.name}</CardTitle>
                  <CardDescription>{testimonial.location}</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="mb-4">
                    <span className="inline-block bg-primary/10 text-primary px-2 py-1 rounded text-xs font-semibold">
                      {testimonial.issue}
                    </span>
                  </div>
                  <blockquote className="text-muted-foreground italic leading-relaxed mb-4">
                    "{testimonial.testimonial}"
                  </blockquote>
                  <p className="text-xs text-muted-foreground">{testimonial.date}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Trust Indicators */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-heading font-bold mb-4">Why Customers Trust Us</h2>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            <Card className="text-center">
              <CardHeader>
                <CardTitle>Certified Technicians</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  All our technicians are certified professionals with years of experience 
                  in computer repair and Geek Online Support.
                </p>
              </CardContent>
            </Card>
            
            <Card className="text-center">
              <CardHeader>
                <CardTitle>100% Satisfaction Guarantee</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  We stand behind our work. If we can't fix your issue, you don't pay. 
                  Your satisfaction is our guarantee.
                </p>
              </CardContent>
            </Card>
            
            <Card className="text-center">
              <CardHeader>
                <CardTitle>Secure & Safe</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  Bank-level encryption and secure connections ensure your data and 
                  privacy are always protected during support sessions.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-primary text-primary-foreground">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-heading font-bold mb-4">
            Ready to Experience Our Award-Winning Service?
          </h2>
          <p className="text-xl mb-8 opacity-90 max-w-3xl mx-auto">
            Join thousands of satisfied customers who trust My Geek Online for their 
            technology needs. Get professional help today!
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button 
              size="lg" 
              variant="secondary" 
              onClick={handleBookSession}
              data-testid="button-book-session-cta"
            >
              Book Session Now
            </Button>
            <Button 
              size="lg" 
              variant="outline"
              className="bg-transparent border-primary-foreground text-primary-foreground hover:bg-primary-foreground hover:text-primary"
              data-testid="button-get-quote"
            >
              Get Free Quote
            </Button>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}