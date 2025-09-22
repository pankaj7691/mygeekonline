import { useState } from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Shield, Clock, Award, CheckCircle, Users, Lock, ChevronLeft, ChevronRight, Star } from 'lucide-react';

export default function TestimonialsSection() {
  const [currentTestimonial, setCurrentTestimonial] = useState(0);

  const guarantees = [
    {
      icon: Clock,
      title: 'Fast Response',
      description: 'Get help within few minutes of contacting us. No long wait times or scheduling delays.',
      highlight: 'Within Minutes'
    },
    {
      icon: Shield,
      title: '100% Safe & Secure',
      description: 'Bank-level encryption and secure connections. You control access and can disconnect anytime.',
      highlight: 'Fully Protected'
    },
    {
      icon: CheckCircle,
      title: 'Satisfaction Guaranteed',
      description: 'If we can\'t fix your issue, you don\'t pay. Complete satisfaction or full refund policy.',
      highlight: 'Money Back Promise'
    }
  ];

  const trustIndicators = [
    {
      icon: Award,
      title: 'Certified Technicians',
      description: 'Our team holds professional certifications and years of hands-on experience.'
    },
    {
      icon: Users,
      title: 'Trusted by Thousands',
      description: 'Serving customers worldwide with professional online support since our founding.'
    },
    {
      icon: Lock,
      title: 'Privacy Protected',
      description: 'Your personal data and files remain completely private and secure during sessions.'
    }
  ];

  const testimonials = [
    {
      name: 'David M.',
      location: 'Austin, TX',
      image: '/api/placeholder/64/64',
      text: 'Malware removed, PC secured, and everything runs faster. They also set up real-time protection. Fantastic service.',
      rating: 5,
      service: 'Virus Removal'
    },
    {
      name: 'Sarah K.',
      location: 'Miami, FL', 
      image: '/api/placeholder/64/64',
      text: 'My printer finally works with all devices! Setup was quick and the technician explained everything clearly.',
      rating: 5,
      service: 'Printer Setup'
    },
    {
      name: 'Michael R.',
      location: 'Seattle, WA',
      image: '/api/placeholder/64/64',
      text: 'Lost all my photos but they recovered everything! Professional, quick, and saved my precious memories.',
      rating: 5,
      service: 'Data Recovery'
    },
    {
      name: 'Jennifer L.',
      location: 'Denver, CO',
      image: '/api/placeholder/64/64',
      text: 'Wi-Fi issues were driving me crazy. Now I have strong signal throughout my house. Excellent work!',
      rating: 5,
      service: 'Wi-Fi Setup'
    },
    {
      name: 'Robert S.',
      location: 'Phoenix, AZ',
      image: '/api/placeholder/64/64', 
      text: 'Computer was running so slow, now it\'s like new again. They cleaned everything and it boots up in seconds.',
      rating: 5,
      service: 'Computer Cleanup'
    }
  ];

  const nextTestimonial = () => {
    setCurrentTestimonial((prev) => (prev + 1) % testimonials.length);
  };

  const prevTestimonial = () => {
    setCurrentTestimonial((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  const currentReview = testimonials[currentTestimonial];

  return (
    <>
      {/* Why Choose My Geek Online Section */}
      <section className="py-16 bg-muted/30">
        <div className="max-w-6xl mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-heading font-bold mb-4" data-testid="text-guarantees-heading">
              Why Choose My Geek Online?
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Professional tech support with guarantees that protect you. Experience the difference of working with experts you can trust.
            </p>
          </div>
          
          {/* Main Guarantees */}
          <div className="grid md:grid-cols-3 gap-6 mb-12">
            {guarantees.map((guarantee, index) => (
              <Card key={index} className="hover-elevate border-primary/20" data-testid={`guarantee-${index}`}>
                <CardContent className="p-6 text-center">
                  <div className="w-16 h-16 mx-auto mb-4 bg-primary/10 rounded-full flex items-center justify-center">
                    <guarantee.icon className="w-8 h-8 text-primary" />
                  </div>
                  <h3 className="text-xl font-heading font-semibold mb-2">{guarantee.title}</h3>
                  <div className="text-sm font-semibold text-success mb-3">{guarantee.highlight}</div>
                  <p className="text-muted-foreground leading-relaxed">
                    {guarantee.description}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* Trust Indicators */}
          <div className="grid md:grid-cols-3 gap-6">
            {trustIndicators.map((indicator, index) => (
              <Card key={index} className="hover-elevate" data-testid={`trust-${index}`}>
                <CardContent className="p-6 text-center">
                  <indicator.icon className="w-12 h-12 mx-auto mb-4 text-primary" />
                  <h4 className="text-lg font-semibold mb-2">{indicator.title}</h4>
                  <p className="text-muted-foreground text-sm">
                    {indicator.description}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-16 bg-background">
        <div className="max-w-4xl mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-heading font-bold mb-4 text-primary" data-testid="text-testimonials-heading">
              Testimonials
            </h2>
          </div>
          
          {/* Testimonial Card */}
          <div className="max-w-3xl mx-auto">
            <Card className="border-0 shadow-lg overflow-hidden" data-testid={`testimonial-${currentTestimonial}`}>
              <CardContent className="p-0">
                <div className="flex">
                  {/* Blue Sidebar */}
                  <div className="bg-primary w-24 md:w-32 flex-shrink-0 flex items-center justify-center">
                    <div className="text-white text-center transform -rotate-90 whitespace-nowrap">
                      <div className="font-semibold text-lg" data-testid="text-testimonial-name">{currentReview.name}</div>
                    </div>
                  </div>
                  
                  {/* Content Area */}
                  <div className="flex-1 p-8 md:p-12 text-center">
                    {/* Avatar */}
                    <Avatar className="w-16 h-16 mx-auto mb-6" data-testid="avatar-testimonial">
                      <AvatarImage src={currentReview.image} alt={currentReview.name} />
                      <AvatarFallback className="bg-primary/10 text-primary font-semibold">
                        {currentReview.name.split(' ').map(n => n[0]).join('')}
                      </AvatarFallback>
                    </Avatar>
                    
                    {/* Testimonial Text */}
                    <blockquote className="text-lg md:text-xl text-foreground mb-6 leading-relaxed" data-testid="text-testimonial-quote">
                      "{currentReview.text}"
                    </blockquote>
                    
                    {/* Star Rating */}
                    <div className="flex justify-center mb-4" data-testid="rating-stars">
                      {[...Array(currentReview.rating)].map((_, i) => (
                        <Star key={i} className="w-5 h-5 fill-yellow-400 text-yellow-400" />
                      ))}
                    </div>
                    
                    {/* Service Type */}
                    <div className="text-sm text-muted-foreground" data-testid="text-testimonial-meta">
                      {currentReview.service} • {currentReview.location}
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
            
            {/* Navigation Arrows */}
            <div className="flex justify-center mt-8 gap-2">
              <Button
                variant="outline"
                size="icon"
                onClick={prevTestimonial}
                data-testid="button-prev-testimonial"
              >
                <ChevronLeft className="w-4 h-4" />
              </Button>
              <Button
                variant="outline"
                size="icon"
                onClick={nextTestimonial}
                data-testid="button-next-testimonial"
              >
                <ChevronRight className="w-4 h-4" />
              </Button>
            </div>
            
            {/* Dots Indicator */}
            <div className="flex justify-center mt-4 gap-2">
              {testimonials.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentTestimonial(index)}
                  className={`w-2 h-2 rounded-full transition-all ${
                    index === currentTestimonial ? 'bg-primary' : 'bg-muted-foreground/30'
                  }`}
                  data-testid={`dot-${index}`}
                />
              ))}
            </div>
          </div>
        </div>
      </section>
    </>
  );
}