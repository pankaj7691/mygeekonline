import { Link } from 'wouter';

export default function Footer() {
  return (
    <footer className="bg-card border-t border-border py-12">
      <div className="max-w-6xl mx-auto px-4">
        <div className="grid md:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="col-span-2 md:col-span-1">
            <h3 className="text-lg font-heading font-bold mb-4">My Geek Online</h3>
            <p className="text-sm text-muted-foreground mb-4">
              Fast, Friendly & Reliable Tech Help, Anytime.
            </p>
            <p className="text-xs text-muted-foreground">
              My Geek Online is a brand of CVI Holdings Inc.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-semibold mb-4">Services</h4>
            <ul className="space-y-2 text-sm">
              <li><Link href="/services/printer-support" className="text-muted-foreground hover:text-foreground transition-colors">Printer Support</Link></li>
              <li><Link href="/services/wifi-network" className="text-muted-foreground hover:text-foreground transition-colors">Wi-Fi & Network</Link></li>
              <li><Link href="/services/virus-malware-removal" className="text-muted-foreground hover:text-foreground transition-colors">Virus & Malware</Link></li>
              <li><Link href="/services/data-backup-recovery" className="text-muted-foreground hover:text-foreground transition-colors">Data & Backup</Link></li>
            </ul>
          </div>

          {/* Company */}
          <div>
            <h4 className="font-semibold mb-4">Company</h4>
            <ul className="space-y-2 text-sm">
              <li><Link href="/about" className="text-muted-foreground hover:text-foreground transition-colors">About Us</Link></li>
              <li><Link href="/faq" className="text-muted-foreground hover:text-foreground transition-colors">FAQ</Link></li>
              <li><Link href="/testimonials" className="text-muted-foreground hover:text-foreground transition-colors">Testimonials</Link></li>
              <li><Link href="/contact" className="text-muted-foreground hover:text-foreground transition-colors">Contact</Link></li>
            </ul>
          </div>

          {/* Legal */}
          <div>
            <h4 className="font-semibold mb-4">Legal</h4>
            <ul className="space-y-2 text-sm">
              <li><Link href="/terms" className="text-muted-foreground hover:text-foreground transition-colors">Terms of Service</Link></li>
              <li><Link href="/privacy" className="text-muted-foreground hover:text-foreground transition-colors">Privacy Policy</Link></li>
              <li><Link href="/refund-policy" className="text-muted-foreground hover:text-foreground transition-colors">Refund Policy</Link></li>
            </ul>
          </div>
        </div>

        <div className="border-t border-border mt-8 pt-8 text-center">
          <p className="text-sm text-muted-foreground">
            © 2024 CVI Holdings Inc. | MyGeekOnline.com | All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}