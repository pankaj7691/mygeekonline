import { MessageCircle, Monitor, CheckCircle } from 'lucide-react';

export default function HowItWorks() {
  const steps = [
    {
      icon: MessageCircle,
      number: '1',
      title: 'Tell Us Your Problem',
      description: 'Call us or fill out our quick form to describe the tech issue you\'re experiencing.'
    },
    {
      icon: Monitor,
      number: '2',
      title: 'Connect Securely',
      description: 'Our certified technician will connect to your device safely using secure access.'
    },
    {
      icon: CheckCircle,
      number: '3',
      title: 'Problem Solved',
      description: 'Watch as we fix your issue in real-time. Get back to work with confidence.'
    }
  ];

  return (
    <section className="py-16 bg-background">
      <div className="max-w-6xl mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-heading font-bold mb-4" data-testid="text-how-it-works-heading">
            How It Works
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Get your tech problems solved in three simple steps. It's that easy.
          </p>
        </div>
        
        <div className="grid md:grid-cols-3 gap-8">
          {steps.map((step, index) => (
            <div key={index} className="text-center relative" data-testid={`step-${step.number}`}>
              {/* Connection Line */}
              {index < steps.length - 1 && (
                <div className="hidden md:block absolute top-8 left-1/2 w-full h-0.5 bg-border transform translate-x-1/2 z-0"></div>
              )}
              
              {/* Step Content */}
              <div className="relative z-10">
                <div className="w-16 h-16 mx-auto mb-4 bg-primary rounded-full flex items-center justify-center relative">
                  <step.icon className="w-8 h-8 text-primary-foreground" />
                  <div className="absolute -top-2 -right-2 w-8 h-8 bg-success rounded-full flex items-center justify-center text-sm font-bold text-success-foreground">
                    {step.number}
                  </div>
                </div>
                <h3 className="text-xl font-heading font-semibold mb-2">{step.title}</h3>
                <p className="text-muted-foreground">{step.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}