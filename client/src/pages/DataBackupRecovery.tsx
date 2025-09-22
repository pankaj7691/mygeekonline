import { useEffect } from "react";
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import ContactForm from '@/components/ContactForm';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { useLocation } from 'wouter';
import { CheckCircle, HardDrive, Cloud, FileX, RotateCcw } from 'lucide-react';

export default function DataBackupRecovery() {
  useEffect(() => {
    document.title = "Data Backup & Recovery Services | My Geek Online";
    
    // Add meta description
    const metaDescription = document.createElement('meta');
    metaDescription.name = 'description';
    metaDescription.content = 'Professional data backup and recovery services. Recover lost files, set up automated backups, protect your important data from loss with expert online assistance.';
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
    "Automatic backup system setup",
    "Cloud storage configuration", 
    "Lost file recovery attempts",
    "Corrupted file restoration",
    "External drive backup setup",
    "Sync across multiple devices",
    "Backup schedule optimization",
    "Data migration assistance"
  ];

  const services = [
    { icon: RotateCcw, title: "File Recovery", description: "Recover accidentally deleted or corrupted files" },
    { icon: Cloud, title: "Cloud Backup Setup", description: "Automated cloud backups for ultimate protection" },
    { icon: HardDrive, title: "Local Backup Solutions", description: "External drive and network backup configuration" },
    { icon: FileX, title: "Data Migration", description: "Transfer files safely to new computers or drives" }
  ];

  const dataLossCauses = [
    "Hardware failure or corruption",
    "Accidental file deletion",
    "Virus or malware attacks",
    "Operating system crashes",
    "Natural disasters (fire, flood)",
    "Theft or device loss",
    "Software corruption",
    "Human error or mistakes"
  ];

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-br from-blue-50 to-indigo-50 dark:from-blue-950/20 dark:to-indigo-950/20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <HardDrive className="mx-auto h-16 w-16 text-blue-600 mb-6" />
            <h1 className="text-4xl md:text-6xl font-heading font-bold mb-6">
              Data Backup & Recovery
            </h1>
            <p className="text-xl md:text-2xl text-muted-foreground max-w-3xl mx-auto mb-8">
              Protect your precious files and memories with professional backup solutions. 
              Recover lost data and prevent future data loss disasters.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" onClick={handleBookSession} data-testid="button-book-session">
                Book Session
              </Button>
              <Button variant="outline" size="lg" onClick={handleBookSession} data-testid="button-get-quote">
                Free Backup Assessment
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Services We Provide */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-heading font-bold mb-4">Data Protection Services</h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              From emergency data recovery to proactive backup solutions, we've got your data covered.
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {services.map((service, index) => (
              <Card key={index} className="text-center border-blue-200 dark:border-blue-800">
                <CardHeader>
                  <service.icon className="mx-auto h-12 w-12 text-blue-600 mb-4" />
                  <CardTitle className="text-lg">{service.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription>{service.description}</CardDescription>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Data Loss Prevention */}
      <section className="py-20 bg-muted/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-heading font-bold mb-4">Common Causes of Data Loss</h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Don't become a statistic. Protect yourself against these common data loss scenarios.
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto">
            {dataLossCauses.map((cause, index) => (
              <div key={index} className="flex items-center gap-3 p-4 bg-card rounded-lg border border-orange-200 dark:border-orange-800" data-testid={`data-loss-cause-${index}`}>
                <FileX className="h-5 w-5 text-orange-600 flex-shrink-0" />
                <span>{cause}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Service Features */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-heading font-bold mb-6">
                Complete Data Protection Strategy
              </h2>
              <p className="text-lg text-muted-foreground mb-8">
                We implement the 3-2-1 backup rule: 3 copies of your data, on 2 different storage types, 
                with 1 copy stored offsite. Your data will never be at risk again.
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
            
            <div className="bg-card p-8 rounded-lg border border-blue-200 dark:border-blue-800">
              <div className="text-center mb-6">
                <HardDrive className="mx-auto h-12 w-12 text-blue-600 mb-4" />
                <h3 className="text-xl font-heading font-semibold text-blue-600">
                  Protect Your Data Today
                </h3>
              </div>
              <ContactForm showTitle={false} />
            </div>
          </div>
        </div>
      </section>

      {/* Statistics Section */}
      <section className="py-20 bg-muted/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-heading font-bold mb-4">Don't Become a Data Loss Statistic</h2>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            <Card className="text-center border-red-200 dark:border-red-800">
              <CardHeader>
                <CardTitle className="text-3xl font-bold text-red-600">60%</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  of businesses that lose data shut down within 6 months
                </p>
              </CardContent>
            </Card>
            
            <Card className="text-center border-orange-200 dark:border-orange-800">
              <CardHeader>
                <CardTitle className="text-3xl font-bold text-orange-600">2.5 TB</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  of data is created every day by the average person
                </p>
              </CardContent>
            </Card>
            
            <Card className="text-center border-blue-200 dark:border-blue-800">
              <CardHeader>
                <CardTitle className="text-3xl font-bold text-blue-600">$1,000+</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  average cost of professional data recovery services
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