import { useState } from "react";
import { Menu, X, TrendingUp } from "lucide-react";

export default function Navigation() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
    setIsMenuOpen(false);
  };

  return (
    <nav className="bg-white/95 backdrop-blur-sm shadow-sm fixed w-full z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div className="flex items-center">
            <div className="text-2xl font-bold text-purple-600 flex items-center">
              <TrendingUp className="w-8 h-8 mr-2" />
              Varonmark
            </div>
          </div>
          
          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-8">
              <button 
                onClick={() => scrollToSection("home")}
                className="text-gray-900 hover:text-purple-600 px-3 py-2 text-sm font-medium transition-colors"
              >
                Ana Sayfa
              </button>
              <button 
                onClick={() => scrollToSection("services")}
                className="text-gray-700 hover:text-purple-600 px-3 py-2 text-sm font-medium transition-colors"
              >
                Hizmetler
              </button>
              <button 
                onClick={() => scrollToSection("about")}
                className="text-gray-700 hover:text-purple-600 px-3 py-2 text-sm font-medium transition-colors"
              >
                Hakkımızda
              </button>
              <button 
                onClick={() => scrollToSection("contact")}
                className="text-gray-700 hover:text-purple-600 px-3 py-2 text-sm font-medium transition-colors"
              >
                İletişim
              </button>
            </div>
          </div>
          
          <div className="hidden md:block">
            <button 
              onClick={() => scrollToSection("contact")}
              className="bg-purple-600 hover:bg-purple-700 text-white px-6 py-2 rounded-full text-sm font-medium transition-colors"
            >
              Ücretsiz Danışmanlık
            </button>
          </div>
          
          <div className="md:hidden">
            <button 
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="text-gray-700 hover:text-purple-600"
            >
              {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>
      
      {/* Mobile menu */}
      {isMenuOpen && (
        <div className="md:hidden">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 bg-white shadow-lg">
            <button 
              onClick={() => scrollToSection("home")}
              className="block px-3 py-2 text-base font-medium text-gray-700 hover:text-purple-600 hover:bg-gray-50 w-full text-left"
            >
              Ana Sayfa
            </button>
            <button 
              onClick={() => scrollToSection("services")}
              className="block px-3 py-2 text-base font-medium text-gray-700 hover:text-purple-600 hover:bg-gray-50 w-full text-left"
            >
              Hizmetler
            </button>
            <button 
              onClick={() => scrollToSection("about")}
              className="block px-3 py-2 text-base font-medium text-gray-700 hover:text-purple-600 hover:bg-gray-50 w-full text-left"
            >
              Hakkımızda
            </button>
            <button 
              onClick={() => scrollToSection("contact")}
              className="block px-3 py-2 text-base font-medium text-gray-700 hover:text-purple-600 hover:bg-gray-50 w-full text-left"
            >
              İletişim
            </button>
            <button 
              onClick={() => scrollToSection("contact")}
              className="block w-full text-left bg-purple-600 hover:bg-purple-700 text-white px-3 py-2 rounded-md text-base font-medium transition-colors mt-2"
            >
              Ücretsiz Danışmanlık
            </button>
          </div>
        </div>
      )}
    </nav>
  );
}
