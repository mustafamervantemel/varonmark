import { useState } from "react";
import { Menu, X, ChevronDown } from "lucide-react";
import { useLocation } from "wouter";
import { DropdownMenu, DropdownMenuTrigger, DropdownMenuContent, DropdownMenuItem } from "./ui/dropdown-menu";

export default function Navigation() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [location, navigate] = useLocation();

  const scrollToSection = (id: string) => {
    // If we're on home page, scroll to section
    if (location === "/") {
      const element = document.getElementById(id);
      if (element) {
        element.scrollIntoView({ behavior: "smooth" });
      }
    } else {
      // If we're on another page, navigate to home and then scroll
      navigate("/");
      setTimeout(() => {
        const element = document.getElementById(id);
        if (element) {
          element.scrollIntoView({ behavior: "smooth" });
        }
      }, 100);
    }
    setIsMenuOpen(false);
  };

  const navigateToPage = (path: string) => {
    navigate(path);
    setIsMenuOpen(false);
  };

  return (
    <nav className="bg-gradient-to-r from-purple-900 via-purple-800 to-indigo-900 backdrop-blur-sm shadow-lg fixed w-full z-50 border-b border-white/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div className="flex items-center">
            <button 
              onClick={() => navigateToPage("/")}
              className="flex items-center hover:opacity-80 transition-opacity"
            >
              <img 
                src="/media/VARONMARK-2.svg" 
                alt="Varonmark Logo" 
                className="h-28 md:h-24 w-auto"
              />
            </button>
          </div>
          
          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-8">
              <button 
                onClick={() => navigateToPage("/")}
                className={`px-3 py-2 text-sm font-medium transition-colors ${location === "/" ? "text-yellow-300" : "text-white/90 hover:text-yellow-300"}`}
              >
                Ana Sayfa
              </button>
              <DropdownMenu>
                <DropdownMenuTrigger asChild>
                  <button
                    className={`px-3 py-2 text-sm font-medium transition-colors flex items-center gap-1 ${location.startsWith("/service-") ? "text-yellow-300" : "text-white/90 hover:text-yellow-300"}`}
                  >
                    Hizmetler
                    <ChevronDown className="w-4 h-4" />
                  </button>
                </DropdownMenuTrigger>
                <DropdownMenuContent>
                  <DropdownMenuItem onClick={() => navigateToPage("/service-trendyol")}>Trendyol</DropdownMenuItem>
                  <DropdownMenuItem onClick={() => navigateToPage("/service-etsy")}>Etsy</DropdownMenuItem>
                  <DropdownMenuItem onClick={() => navigateToPage("/service-reklamcilik")}>Reklamcılık</DropdownMenuItem>
                  <DropdownMenuItem onClick={() => navigateToPage("/service-sosyalmedya")}>Sosyal Medya Yöneticiliği</DropdownMenuItem>
                </DropdownMenuContent>
              </DropdownMenu>
              <button 
                onClick={() => navigateToPage("/about")}
                className={`px-3 py-2 text-sm font-medium transition-colors ${location === "/about" ? "text-yellow-300" : "text-white/90 hover:text-yellow-300"}`}
              >
                Hakkımızda
              </button>
              <button 
                onClick={() => navigateToPage("/portfolio")}
                className={`px-3 py-2 text-sm font-medium transition-colors ${location === "/portfolio" ? "text-yellow-300" : "text-white/90 hover:text-yellow-300"}`}
              >
                Portfolyo
              </button>
              <button 
                onClick={() => navigateToPage("/nasil-calisiyoruz")}
                className={`px-3 py-2 text-sm font-medium transition-colors ${location === "/nasil-calisiyoruz" ? "text-yellow-300" : "text-white/90 hover:text-yellow-300"}`}
              >
                Nasıl Çalışıyoruz
              </button>
              <button 
                onClick={() => navigateToPage("/contact")}
                className={`px-3 py-2 text-sm font-medium transition-colors ${location === "/contact" ? "text-yellow-300" : "text-white/90 hover:text-yellow-300"}`}
              >
                İletişim
              </button>
            </div>
          </div>
          
          <div className="hidden md:block">
            <button 
              onClick={() => navigateToPage("/contact")}
              className="bg-white hover:bg-yellow-300 text-purple-900 px-6 py-2 rounded-full text-sm font-medium transition-all hover:scale-105 shadow-lg"
            >
              Ücretsiz Danışmanlık
            </button>
          </div>
          
          <div className="md:hidden">
            <button 
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="text-white hover:text-yellow-300"
            >
              {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>
      
      {/* Mobile menu */}
      {isMenuOpen && (
        <div className="md:hidden">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 bg-gradient-to-r from-purple-900 via-purple-800 to-indigo-900 shadow-lg border-t border-white/10">
            <button 
              onClick={() => navigateToPage("/")}
              className={`block px-3 py-2 text-base font-medium hover:bg-white/10 w-full text-left rounded-lg ${location === "/" ? "text-yellow-300" : "text-white/90 hover:text-yellow-300"}`}
            >
              Ana Sayfa
            </button>
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <button
                  className={`block px-3 py-2 text-base font-medium hover:bg-white/10 w-full text-left flex items-center gap-1 rounded-lg ${location.startsWith("/service-") ? "text-yellow-300" : "text-white/90 hover:text-yellow-300"}`}
                >
                  Hizmetler
                  <ChevronDown className="w-4 h-4" />
                </button>
              </DropdownMenuTrigger>
              <DropdownMenuContent>
                <DropdownMenuItem onClick={() => navigateToPage("/service-trendyol")}>Trendyol</DropdownMenuItem>
                <DropdownMenuItem onClick={() => navigateToPage("/service-etsy")}>Etsy</DropdownMenuItem>
                <DropdownMenuItem onClick={() => navigateToPage("/service-reklamcilik")}>Reklamcılık</DropdownMenuItem>
                <DropdownMenuItem onClick={() => navigateToPage("/service-sosyalmedya")}>Sosyal Medya Yöneticiliği</DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
            <button 
              onClick={() => navigateToPage("/about")}
              className={`block px-3 py-2 text-base font-medium hover:bg-white/10 w-full text-left rounded-lg ${location === "/about" ? "text-yellow-300" : "text-white/90 hover:text-yellow-300"}`}
            >
              Hakkımızda
            </button>
            <button 
              onClick={() => navigateToPage("/portfolio")}
              className={`block px-3 py-2 text-base font-medium hover:bg-white/10 w-full text-left rounded-lg ${location === "/portfolio" ? "text-yellow-300" : "text-white/90 hover:text-yellow-300"}`}
            >
              Portfolyo
            </button>
            <button 
              onClick={() => navigateToPage("/contact")}
              className={`block px-3 py-2 text-base font-medium hover:bg-white/10 w-full text-left rounded-lg ${location === "/contact" ? "text-yellow-300" : "text-white/90 hover:text-yellow-300"}`}
            >
              İletişim
            </button>
            <button 
              onClick={() => navigateToPage("/contact")}
              className="block w-full text-left bg-white hover:bg-yellow-300 text-purple-900 px-3 py-2 rounded-lg text-base font-medium transition-all hover:scale-105 shadow-lg mt-2"
            >
              Ücretsiz Danışmanlık
            </button>
          </div>
        </div>
      )}
    </nav>
  );
}
