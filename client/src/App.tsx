import { Switch, Route } from "wouter";
import { queryClient } from "./lib/queryClient";
import { QueryClientProvider } from "@tanstack/react-query";
import { Toaster } from "@/components/ui/toaster";
import { TooltipProvider } from "@/components/ui/tooltip";
import { useScrollToTop } from "@/hooks/useScrollToTop";
import Home from "@/pages/Home";
import Services from "@/pages/Services";
import About from "@/pages/About";
import FAQ from "@/pages/FAQ";
import Contact from "@/pages/Contact";
import Testimonials from "@/pages/Testimonials";
import PrivacyPolicy from "@/pages/PrivacyPolicy";
import TermsOfService from "@/pages/TermsOfService";
import RefundPolicy from "@/pages/RefundPolicy";
import Disclaimer from "@/pages/Disclaimer";
import PrinterSupport from "@/pages/PrinterSupport";
import WiFiNetworkSupport from "@/pages/WiFiNetworkSupport";
import VirusMalwareRemoval from "@/pages/VirusMalwareRemoval";
import DataBackupRecovery from "@/pages/DataBackupRecovery";
import NotFound from "@/pages/not-found";

function Router() {
  useScrollToTop();
  
  return (
    <Switch>
      <Route path="/" component={Home} />
      <Route path="/services" component={Services} />
      <Route path="/about" component={About} />
      <Route path="/faq" component={FAQ} />
      <Route path="/contact" component={Contact} />
      <Route path="/testimonials" component={Testimonials} />
      <Route path="/privacy" component={PrivacyPolicy} />
      <Route path="/terms" component={TermsOfService} />
      <Route path="/refund-policy" component={RefundPolicy} />
      <Route path="/disclaimer" component={Disclaimer} />
      <Route path="/services/printer-support" component={PrinterSupport} />
      <Route path="/services/wifi-network" component={WiFiNetworkSupport} />
      <Route path="/services/virus-malware-removal" component={VirusMalwareRemoval} />
      <Route path="/services/data-backup-recovery" component={DataBackupRecovery} />
      {/* Fallback to 404 */}
      <Route component={NotFound} />
    </Switch>
  );
}

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <Toaster />
        <Router />
      </TooltipProvider>
    </QueryClientProvider>
  );
}

export default App;
