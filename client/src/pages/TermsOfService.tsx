import Header from '@/components/Header';
import Footer from '@/components/Footer';

export default function TermsOfService() {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <div className="max-w-4xl mx-auto px-4 py-16">
        <h1 className="text-4xl font-heading font-bold mb-8">Terms of Service</h1>
        <div className="prose prose-lg max-w-none">
          <p className="text-muted-foreground mb-6">
            <strong>Effective Date:</strong> December 20, 2024<br />
            <strong>Last Updated:</strong> December 20, 2024
          </p>

          <section className="mb-8">
            <h2 className="text-2xl font-heading font-semibold mb-4">1. Agreement to Terms</h2>
            <p className="mb-4">
              By accessing or using My Geek Online services provided by CVI Holdings Inc., you agree to be bound by these Terms of Service. 
              If you do not agree to these terms, please do not use our services.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-heading font-semibold mb-4">2. Description of Services</h2>
            <p className="mb-4">
              My Geek Online provides remote technical support services including but not limited to:
            </p>
            <ul className="list-disc pl-6 mb-4">
              <li>Computer and device troubleshooting</li>
              <li>Software installation and configuration</li>
              <li>Printer setup and maintenance</li>
              <li>Wi-Fi and network connectivity support</li>
              <li>Virus and malware removal</li>
              <li>Data backup and recovery assistance</li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-heading font-semibold mb-4">3. User Responsibilities</h2>
            <p className="mb-4">By using our services, you agree to:</p>
            <ul className="list-disc pl-6 mb-4">
              <li>Provide accurate information about your technical issues</li>
              <li>Have legitimate ownership or authorization to modify the devices we service</li>
              <li>Back up important data before service sessions (when possible)</li>
              <li>Follow technician instructions during support sessions</li>
              <li>Pay for services according to our pricing structure</li>
              <li>Not use our services for illegal or unauthorized purposes</li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-heading font-semibold mb-4">4. Remote Access and Security</h2>
            <p className="mb-4">
              Our remote support services require temporary access to your device. You understand and consent that:
            </p>
            <ul className="list-disc pl-6 mb-4">
              <li>Remote access is granted only during scheduled support sessions</li>
              <li>Our technicians will only access systems necessary to resolve your issue</li>
              <li>You maintain the right to terminate remote access at any time</li>
              <li>We use secure, encrypted connections for all remote sessions</li>
              <li>You are responsible for removing our remote access software after service completion</li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-heading font-semibold mb-4">5. Payment Terms</h2>
            <ul className="list-disc pl-6 mb-4">
              <li>Services are billed according to our published rate schedule</li>
              <li>Payment is due upon completion of services unless other arrangements are made</li>
              <li>We accept major credit cards and other payment methods as available</li>
              <li>Additional charges may apply for complex issues requiring extended support</li>
              <li>Subscription plans, if applicable, are billed according to the selected billing cycle</li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-heading font-semibold mb-4">6. Service Limitations</h2>
            <p className="mb-4">Please note the following limitations:</p>
            <ul className="list-disc pl-6 mb-4">
              <li>We cannot guarantee resolution of all technical issues</li>
              <li>Some hardware problems may require in-person service or replacement</li>
              <li>We are not responsible for data loss during service delivery</li>
              <li>Service availability may be limited during peak hours or maintenance periods</li>
              <li>We reserve the right to refuse service for issues outside our expertise</li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-heading font-semibold mb-4">7. Intellectual Property</h2>
            <p className="mb-4">
              All content on the My Geek Online website, including text, graphics, logos, and software, 
              is the property of CVI Holdings Inc. and is protected by copyright and other intellectual property laws.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-heading font-semibold mb-4">8. Disclaimers and Limitation of Liability</h2>
            <p className="mb-4">
              TO THE MAXIMUM EXTENT PERMITTED BY LAW:
            </p>
            <ul className="list-disc pl-6 mb-4">
              <li>Our services are provided "as is" without warranties of any kind</li>
              <li>We disclaim all warranties, express or implied, including merchantability and fitness for purpose</li>
              <li>Our liability is limited to the amount paid for the specific service session</li>
              <li>We are not liable for indirect, consequential, or punitive damages</li>
              <li>You assume all risks associated with the use of our services</li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-heading font-semibold mb-4">9. Indemnification</h2>
            <p className="mb-4">
              You agree to indemnify and hold harmless CVI Holdings Inc. and My Geek Online from any claims, 
              damages, or expenses arising from your use of our services or violation of these terms.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-heading font-semibold mb-4">10. Termination</h2>
            <p className="mb-4">
              We reserve the right to terminate or suspend access to our services at any time, 
              with or without cause, and with or without notice.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-heading font-semibold mb-4">11. Governing Law</h2>
            <p className="mb-4">
              These Terms of Service are governed by the laws of [Your State/Jurisdiction] without regard to conflict of law principles. 
              Any disputes will be resolved in the courts of [Your Jurisdiction].
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-heading font-semibold mb-4">12. Changes to Terms</h2>
            <p className="mb-4">
              We reserve the right to modify these Terms of Service at any time. 
              Updated terms will be posted on our website with a new effective date.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-heading font-semibold mb-4">13. Contact Information</h2>
            <p className="mb-4">
              For questions about these Terms of Service, contact us at:
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