import Navigation from "@/components/navigation";
import FullPortfolio from "@/components/full-portfolio";
import Footer from "@/components/footer";

export default function Portfolio() {
  return (
    <div className="min-h-screen">
      <Navigation />
      <FullPortfolio />
      <Footer />
    </div>
  );
}