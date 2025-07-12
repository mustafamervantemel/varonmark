import Navigation from "@/components/navigation";
import WorkingProcess from "@/components/working-process";
import Footer from "@/components/footer";

export default function NasilCalisiyoruzPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-50 to-white">
      <Navigation />
      
      <main className="pt-16">
        <WorkingProcess />
      </main>
      
      <Footer />
    </div>
  );
}