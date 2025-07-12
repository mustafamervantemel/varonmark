import Navigation from "@/components/navigation";
import Hero from "@/components/hero";
import ToolsMarquee from "@/components/tools-marquee";
import PartnersShowcase from "@/components/partners-showcase";
import Services from "@/components/services";
import WorkingProcess from "@/components/working-process";
import About from "@/components/about";
import Testimonials from "@/components/testimonials";
import Contact from "@/components/contact";
import Footer from "@/components/footer";

export default function Home() {
  return (
    <div className="min-h-screen">
      <Navigation />
      <Hero />
      <WorkingProcess />
      <ToolsMarquee />
      <PartnersShowcase />
      <Services />
      <About />
      <Contact />
      <Footer />
    </div>
  );
}
