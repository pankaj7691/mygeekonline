import { CheckCircle, Shield, Clock, Award } from 'lucide-react';

export default function BenefitsSection() {
  const benefits = [
    {
      icon: Clock,
      title: 'Remote Help Anytime',
      description: 'No waiting for a shop appointment. Get help when you need it most.'
    },
    {
      icon: Award,
      title: 'Certified Experts',
      description: 'Our technicians are verified professionals with years of experience.'
    },
    {
      icon: Shield,
      title: 'Secure Sessions',
      description: 'All remote sessions are encrypted and secure with money-back guarantee.'
    }
  ];

  return (
    <section className="py-16 bg-muted/30">
      <div className="max-w-6xl mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-heading font-bold mb-4" data-testid="text-benefits-heading">
            Why Choose My Geek Online?
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Professional tech support that puts your needs first with transparent pricing and reliable service.
          </p>
        </div>
        
        <div className="grid md:grid-cols-3 gap-8">
          {benefits.map((benefit, index) => (
            <div key={index} className="text-center" data-testid={`benefit-${index}`}>
              <div className="w-16 h-16 mx-auto mb-4 bg-primary/10 rounded-full flex items-center justify-center">
                <benefit.icon className="w-8 h-8 text-primary" />
              </div>
              <h3 className="text-xl font-heading font-semibold mb-2">{benefit.title}</h3>
              <p className="text-muted-foreground">{benefit.description}</p>
              <div className="flex items-center justify-center mt-3">
                <CheckCircle className="w-5 h-5 text-success mr-2" />
                <span className="text-sm font-medium text-success">Verified Benefit</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}