import { Switch, Route } from "wouter";
import { queryClient } from "./lib/queryClient";
import { QueryClientProvider } from "@tanstack/react-query";
import { Toaster } from "@/components/ui/toaster";
import { TooltipProvider } from "@/components/ui/tooltip";
import Home from "@/pages/home";
import AboutPage from "@/pages/about";
import ServicesPage from "@/pages/services";
import ContactPage from "@/pages/contact";
import NotFound from "@/pages/not-found";
import TrendyolPage from "@/pages/service-trendyol";
import EtsyPage from "@/pages/service-etsy";
import ReklamcilikPage from "@/pages/service-reklamcilik";
import SosyalMedyaPage from "@/pages/service-sosyalmedya";
import Portfolio from "@/pages/portfolio";
import NasilCalisiyoruzPage from "@/pages/nasil-calisiyoruz";

function Router() {
  return (
    <Switch>
      <Route path="/" component={Home} />
      <Route path="/about" component={AboutPage} />
      <Route path="/services" component={ServicesPage} />
      <Route path="/portfolio" component={Portfolio} />
      <Route path="/contact" component={ContactPage} />
      <Route path="/service-trendyol" component={TrendyolPage} />
      <Route path="/service-etsy" component={EtsyPage} />
      <Route path="/service-reklamcilik" component={ReklamcilikPage} />
      <Route path="/service-sosyalmedya" component={SosyalMedyaPage} />
      <Route path="/nasil-calisiyoruz" component={NasilCalisiyoruzPage} />
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
