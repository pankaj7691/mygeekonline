import Header from '@/components/Header';
import Footer from '@/components/Footer';

export default function PrivacyPolicy() {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <div className="max-w-4xl mx-auto px-4 py-16">
        <h1 className="text-4xl font-heading font-bold mb-8">Privacy Policy</h1>
        <div className="prose prose-lg max-w-none">
          <p className="text-muted-foreground mb-6">
            <strong>Effective Date:</strong> December 20, 2024<br />
            <strong>Last Updated:</strong> December 20, 2024
          </p>

          <section className="mb-8">
            <h2 className="text-2xl font-heading font-semibold mb-4">1. Introduction</h2>
            <p className="mb-4">
              My Geek Online, operated by CVI Holdings Inc. ("we," "our," or "us"), is committed to protecting your privacy. 
              This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you visit our website 
              MyGeekOnline.com or use our remote technical support services.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-heading font-semibold mb-4">2. Information We Collect</h2>
            
            <h3 className="text-xl font-semibold mb-3">Personal Information</h3>
            <p className="mb-4">When you use our services, we may collect:</p>
            <ul className="list-disc pl-6 mb-4">
              <li>Name, email address, and phone number</li>
              <li>Technical issues and device information you provide</li>
              <li>Payment information (processed securely through third-party providers)</li>
              <li>Communication records with our support team</li>
            </ul>

            <h3 className="text-xl font-semibold mb-3">Technical Information</h3>
            <p className="mb-4">During remote support sessions, we may access:</p>
            <ul className="list-disc pl-6 mb-4">
              <li>System specifications and software configurations</li>
              <li>Error logs and diagnostic information</li>
              <li>Screen sharing data (only during active sessions with your consent)</li>
              <li>Device performance metrics relevant to troubleshooting</li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-heading font-semibold mb-4">3. How We Use Your Information</h2>
            <p className="mb-4">We use collected information to:</p>
            <ul className="list-disc pl-6 mb-4">
              <li>Provide technical support and troubleshooting services</li>
              <li>Schedule appointments and follow up on service requests</li>
              <li>Process payments and maintain billing records</li>
              <li>Improve our services and customer experience</li>
              <li>Send service-related communications and updates</li>
              <li>Comply with legal obligations and protect our rights</li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-heading font-semibold mb-4">4. Information Sharing and Disclosure</h2>
            <p className="mb-4">We do not sell or rent your personal information. We may share information only in these circumstances:</p>
            <ul className="list-disc pl-6 mb-4">
              <li><strong>Service Providers:</strong> Trusted third-party vendors who assist in providing our services</li>
              <li><strong>Legal Requirements:</strong> When required by law or to protect our legal rights</li>
              <li><strong>Business Transfers:</strong> In connection with mergers, acquisitions, or asset sales</li>
              <li><strong>Your Consent:</strong> When you explicitly authorize us to share your information</li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-heading font-semibold mb-4">5. Data Security</h2>
            <p className="mb-4">
              We implement industry-standard security measures to protect your information, including:
            </p>
            <ul className="list-disc pl-6 mb-4">
              <li>Encrypted data transmission and storage</li>
              <li>Secure remote access protocols during support sessions</li>
              <li>Regular security audits and employee training</li>
              <li>Limited access to personal information on a need-to-know basis</li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-heading font-semibold mb-4">6. Your Rights and Choices</h2>
            <p className="mb-4">You have the right to:</p>
            <ul className="list-disc pl-6 mb-4">
              <li>Access, update, or delete your personal information</li>
              <li>Opt out of marketing communications</li>
              <li>Request a copy of your data</li>
              <li>File complaints with relevant privacy authorities</li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-heading font-semibold mb-4">7. Cookies and Tracking</h2>
            <p className="mb-4">
              Our website uses cookies and similar technologies to enhance your experience, analyze website traffic, 
              and provide personalized content. You can control cookie preferences through your browser settings.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-heading font-semibold mb-4">8. Children's Privacy</h2>
            <p className="mb-4">
              Our services are not intended for children under 13 years of age. We do not knowingly collect 
              personal information from children under 13 without parental consent.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-heading font-semibold mb-4">9. Changes to This Policy</h2>
            <p className="mb-4">
              We may update this Privacy Policy periodically. We will notify you of significant changes by posting 
              the updated policy on our website with a new effective date.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-heading font-semibold mb-4">10. Contact Information</h2>
            <p className="mb-4">
              For questions about this Privacy Policy or our data practices, contact us at:
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