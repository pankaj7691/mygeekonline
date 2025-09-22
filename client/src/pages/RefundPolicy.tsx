import Header from '@/components/Header';
import Footer from '@/components/Footer';

export default function RefundPolicy() {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <div className="max-w-4xl mx-auto px-4 py-16">
        <h1 className="text-4xl font-heading font-bold mb-8">Refund Policy</h1>
        <div className="prose prose-lg max-w-none">
          <p className="text-muted-foreground mb-6">
            <strong>Effective Date:</strong> December 20, 2024<br />
            <strong>Last Updated:</strong> December 20, 2024
          </p>

          <section className="mb-8">
            <h2 className="text-2xl font-heading font-semibold mb-4">1. Our Commitment to Satisfaction</h2>
            <p className="mb-4">
              At My Geek Online (operated by CVI Holdings Inc.), we stand behind the quality of our Geek Online Support services. 
              This refund policy outlines the circumstances under which refunds may be provided and the process for requesting them.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-heading font-semibold mb-4">2. Money-Back Guarantee</h2>
            <p className="mb-4">
              We offer a satisfaction guarantee for our services under the following conditions:
            </p>
            <ul className="list-disc pl-6 mb-4">
              <li><strong>Service Resolution:</strong> If we cannot resolve your technical issue as described, you may be eligible for a full refund</li>
              <li><strong>Time Frame:</strong> Refund requests must be made within 7 days of service completion</li>
              <li><strong>Good Faith Effort:</strong> We must have made a genuine attempt to resolve your issue using appropriate technical methods</li>
              <li><strong>Service Accessibility:</strong> The issue must be within the scope of our advertised remote support capabilities</li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-heading font-semibold mb-4">3. Eligible Refund Scenarios</h2>
            <p className="mb-4">Refunds may be provided in the following situations:</p>
            
            <h3 className="text-xl font-semibold mb-3">Full Refund Eligibility</h3>
            <ul className="list-disc pl-6 mb-4">
              <li>We were unable to establish remote connection due to technical limitations on our end</li>
              <li>The advertised service was not delivered as promised</li>
              <li>Technical issue was not resolved despite our best efforts and falls within our service scope</li>
              <li>Billing error or duplicate charges occurred</li>
            </ul>

            <h3 className="text-xl font-semibold mb-3">Partial Refund Eligibility</h3>
            <ul className="list-disc pl-6 mb-4">
              <li>Service was partially completed but not fully resolved due to external factors</li>
              <li>Session was interrupted due to circumstances beyond either party's control</li>
              <li>Additional services were charged but not provided</li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-heading font-semibold mb-4">4. Non-Refundable Situations</h2>
            <p className="mb-4">Refunds will NOT be provided in the following circumstances:</p>
            <ul className="list-disc pl-6 mb-4">
              <li><strong>Hardware Issues:</strong> Problems requiring physical repair or hardware replacement</li>
              <li><strong>User Error:</strong> Issues caused by customer actions after service completion</li>
              <li><strong>Scope Changes:</strong> Discovery of additional problems not part of the original service request</li>
              <li><strong>Third-Party Software:</strong> Issues with unlicensed or pirated software</li>
              <li><strong>Service Completion:</strong> When the requested service was successfully completed as agreed</li>
              <li><strong>Customer Cancellation:</strong> When customer terminates session before issue resolution without valid reason</li>
              <li><strong>Unauthorized Use:</strong> Services performed on devices without proper ownership or authorization</li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-heading font-semibold mb-4">5. Refund Request Process</h2>
            <p className="mb-4">To request a refund, please follow these steps:</p>
            
            <h3 className="text-xl font-semibold mb-3">Step 1: Contact Us</h3>
            <ul className="list-disc pl-6 mb-4">
              <li>Email: info@cviholdingsinc.com</li>
              <li>Phone: 1-800-XXX-XXXX</li>
              <li>Include your service ticket number and detailed explanation</li>
            </ul>

            <h3 className="text-xl font-semibold mb-3">Step 2: Provide Documentation</h3>
            <ul className="list-disc pl-6 mb-4">
              <li>Original service request details</li>
              <li>Communication records with our support team</li>
              <li>Screenshots or evidence of unresolved issues (if applicable)</li>
            </ul>

            <h3 className="text-xl font-semibold mb-3">Step 3: Review Process</h3>
            <ul className="list-disc pl-6 mb-4">
              <li>We will review your request within 2-3 business days</li>
              <li>Additional information may be requested for evaluation</li>
              <li>You will receive a written decision via email</li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-heading font-semibold mb-4">6. Refund Processing</h2>
            <p className="mb-4">
              <strong>Approved Refunds:</strong>
            </p>
            <ul className="list-disc pl-6 mb-4">
              <li>Refunds will be processed using the original payment method</li>
              <li>Processing time: 5-7 business days for credit cards, 3-5 business days for other methods</li>
              <li>You will receive confirmation once the refund has been initiated</li>
              <li>Bank processing times may vary and are beyond our control</li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-heading font-semibold mb-4">7. Subscription Services</h2>
            <p className="mb-4">
              For subscription-based services (if applicable):
            </p>
            <ul className="list-disc pl-6 mb-4">
              <li>Monthly subscriptions can be cancelled at any time with no refund for partial months</li>
              <li>Annual subscriptions may be eligible for prorated refunds if cancelled within 30 days</li>
              <li>Cancellation must be requested before the next billing cycle</li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-heading font-semibold mb-4">8. Dispute Resolution</h2>
            <p className="mb-4">
              If you disagree with our refund decision:
            </p>
            <ul className="list-disc pl-6 mb-4">
              <li>You may request a review by our customer service manager</li>
              <li>Provide additional evidence or documentation supporting your claim</li>
              <li>Final decisions will be communicated within 5 business days</li>
              <li>You maintain the right to pursue resolution through other legal means</li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-heading font-semibold mb-4">9. Prevention and Quality Assurance</h2>
            <p className="mb-4">
              To minimize refund situations, we:
            </p>
            <ul className="list-disc pl-6 mb-4">
              <li>Clearly communicate service capabilities and limitations upfront</li>
              <li>Provide realistic timeframes for issue resolution</li>
              <li>Maintain detailed records of all service interactions</li>
              <li>Continuously train our technicians on best practices</li>
              <li>Regularly review and improve our service delivery processes</li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-heading font-semibold mb-4">10. Policy Updates</h2>
            <p className="mb-4">
              This refund policy may be updated periodically to reflect changes in our services or business practices. 
              Updated policies will be posted on our website with a new effective date.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-heading font-semibold mb-4">11. Contact Information</h2>
            <p className="mb-4">
              For refund requests or questions about this policy:
            </p>
            <div className="bg-muted p-4 rounded-lg">
              <p><strong>CVI Holdings Inc. - Refund Department</strong><br />
              Email: info@cviholdingsinc.com<br />
              Phone: 1-800-XXX-XXXX<br />
              Address: [Business Address]<br />
              Hours: Monday-Friday, 9 AM - 6 PM EST</p>
            </div>
          </section>
        </div>
      </div>
      <Footer />
    </div>
  );
}