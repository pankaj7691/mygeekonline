import Header from '@/components/Header';
import Footer from '@/components/Footer';

export default function Disclaimer() {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <div className="max-w-4xl mx-auto px-4 py-16">
        <h1 className="text-4xl font-heading font-bold mb-8">Disclaimer</h1>
        <div className="prose prose-lg max-w-none">
          <p className="text-muted-foreground mb-6">
            <strong>Effective Date:</strong> December 20, 2024<br />
            <strong>Last Updated:</strong> December 20, 2024
          </p>

          <section className="mb-8">
            <h2 className="text-2xl font-heading font-semibold mb-4">1. General Information</h2>
            <p className="mb-4">
              The information and services provided by My Geek Online (operated by CVI Holdings Inc.) are intended for 
              general technical support purposes. This disclaimer explains the limitations of our services and your 
              responsibilities when using them.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-heading font-semibold mb-4">2. Service Limitations</h2>
            
            <h3 className="text-xl font-semibold mb-3">Remote Support Constraints</h3>
            <ul className="list-disc pl-6 mb-4">
              <li>Our services are limited to issues that can be resolved through remote access</li>
              <li>Hardware malfunctions, physical damage, or component failures require in-person service</li>
              <li>Some complex system configurations may be beyond the scope of remote support</li>
              <li>Internet connectivity issues may prevent or limit our ability to provide service</li>
            </ul>

            <h3 className="text-xl font-semibold mb-3">Technical Expertise Boundaries</h3>
            <ul className="list-disc pl-6 mb-4">
              <li>We specialize in common consumer technology issues and may refer specialized problems to appropriate vendors</li>
              <li>Enterprise or business-critical systems may require specialized support beyond our service scope</li>
              <li>Highly customized or modified systems may present unique challenges</li>
              <li>Legacy or obsolete technology may have limited support options</li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-heading font-semibold mb-4">3. Data and Information Responsibility</h2>
            
            <h3 className="text-xl font-semibold mb-3">Data Backup and Protection</h3>
            <div className="bg-yellow-50 border border-yellow-200 p-4 rounded-lg mb-4">
              <p className="font-semibold text-yellow-800">IMPORTANT: Always backup your important data before any technical service.</p>
            </div>
            <ul className="list-disc pl-6 mb-4">
              <li>You are solely responsible for backing up your data before service begins</li>
              <li>While we take precautions to protect your data, we cannot guarantee against data loss</li>
              <li>Some troubleshooting procedures may require system resets or software reinstallation</li>
              <li>We strongly recommend having current backups of all important files and documents</li>
            </ul>

            <h3 className="text-xl font-semibold mb-3">Privacy and Confidentiality</h3>
            <ul className="list-disc pl-6 mb-4">
              <li>During remote sessions, our technicians may see information displayed on your screen</li>
              <li>We advise closing sensitive documents and applications before beginning service</li>
              <li>Our technicians are trained to respect your privacy, but you remain responsible for protecting sensitive information</li>
              <li>We recommend using privacy screens or closing confidential materials during sessions</li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-heading font-semibold mb-4">4. Software and Licensing</h2>
            <ul className="list-disc pl-6 mb-4">
              <li>We can only provide support for legally licensed software</li>
              <li>You are responsible for ensuring you have valid licenses for all software on your system</li>
              <li>We may recommend software solutions, but you are responsible for purchasing and licensing decisions</li>
              <li>Some troubleshooting may require software updates or reinstallation using your existing licenses</li>
              <li>We cannot provide or install pirated, cracked, or unlicensed software</li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-heading font-semibold mb-4">5. Third-Party Products and Services</h2>
            <ul className="list-disc pl-6 mb-4">
              <li>We may recommend third-party products, software, or services during troubleshooting</li>
              <li>These recommendations are based on our technical experience but do not constitute endorsements</li>
              <li>You are responsible for evaluating and purchasing any recommended products or services</li>
              <li>We are not responsible for the performance, quality, or support of third-party products</li>
              <li>Warranty and support for third-party items are provided by their respective manufacturers or vendors</li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-heading font-semibold mb-4">6. System Security and Malware</h2>
            <ul className="list-disc pl-6 mb-4">
              <li>While we can remove many types of malware, some infections may cause permanent system damage</li>
              <li>Complete malware removal cannot be guaranteed in all cases</li>
              <li>Some security threats may require system reformatting or hardware replacement</li>
              <li>You are responsible for maintaining updated antivirus software after our service</li>
              <li>Safe computing practices are essential to prevent future infections</li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-heading font-semibold mb-4">7. Hardware and Physical Limitations</h2>
            <div className="bg-red-50 border border-red-200 p-4 rounded-lg mb-4">
              <p className="font-semibold text-red-800">NOTICE: Remote support cannot fix physical hardware problems.</p>
            </div>
            <ul className="list-disc pl-6 mb-4">
              <li>Remote support cannot repair physically damaged hardware components</li>
              <li>Issues requiring hardware replacement, repair, or physical adjustment are outside our service scope</li>
              <li>We can diagnose whether problems are software or hardware-related</li>
              <li>Hardware issues will be identified and you will be advised to seek appropriate repair services</li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-heading font-semibold mb-4">8. Service Availability and Performance</h2>
            <ul className="list-disc pl-6 mb-4">
              <li>Service availability depends on your internet connection and our technician availability</li>
              <li>Response times may vary based on demand and the complexity of your issue</li>
              <li>Some issues may require multiple sessions or extended time to resolve</li>
              <li>We strive for high service quality but cannot guarantee specific performance metrics</li>
              <li>Service may be temporarily unavailable during maintenance or technical difficulties</li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-heading font-semibold mb-4">9. Limitation of Liability</h2>
            <div className="bg-gray-50 border border-gray-200 p-4 rounded-lg mb-4">
              <p className="font-semibold">IMPORTANT LEGAL NOTICE:</p>
            </div>
            <ul className="list-disc pl-6 mb-4">
              <li>My Geek Online and CVI Holdings Inc. provide services "as is" without warranties</li>
              <li>We disclaim all warranties, express or implied, including merchantability and fitness for a particular purpose</li>
              <li>Our liability is limited to the amount paid for the specific service session</li>
              <li>We are not liable for consequential, incidental, or punitive damages</li>
              <li>This includes but is not limited to data loss, business interruption, or lost profits</li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-heading font-semibold mb-4">10. User Responsibilities</h2>
            <p className="mb-4">By using our services, you acknowledge that you:</p>
            <ul className="list-disc pl-6 mb-4">
              <li>Have read and understood this disclaimer</li>
              <li>Accept the risks associated with remote technical support</li>
              <li>Will backup important data before service begins</li>
              <li>Have proper authorization to modify the systems we service</li>
              <li>Will follow our technicians' instructions during service sessions</li>
              <li>Understand the limitations of remote support services</li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-heading font-semibold mb-4">11. Emergency and Critical Systems</h2>
            <div className="bg-red-50 border border-red-200 p-4 rounded-lg mb-4">
              <p className="font-semibold text-red-800">WARNING: Our services are not intended for emergency or life-critical systems.</p>
            </div>
            <ul className="list-disc pl-6 mb-4">
              <li>Do not rely on our services for emergency communications or safety systems</li>
              <li>Medical devices, security systems, and critical business infrastructure require specialized support</li>
              <li>We are not qualified to service systems where failure could result in injury or significant loss</li>
              <li>Contact appropriate emergency services or specialized technicians for critical system issues</li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-heading font-semibold mb-4">12. Changes to This Disclaimer</h2>
            <p className="mb-4">
              This disclaimer may be updated periodically. Updated versions will be posted on our website 
              with a new effective date. Continued use of our services constitutes acceptance of any changes.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-heading font-semibold mb-4">13. Contact Information</h2>
            <p className="mb-4">
              For questions about this disclaimer or our service limitations:
            </p>
            <div className="bg-muted p-4 rounded-lg">
              <p><strong>CVI Holdings Inc.</strong><br />
              Email: info@cviholdingsinc.com<br />
              Phone: 1-800-XXX-XXXX<br />
              Address: [Business Address]</p>
            </div>
          </section>
        </div>
      </div>
      <Footer />
    </div>
  );
}