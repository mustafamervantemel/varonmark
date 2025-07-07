import { ArrowRight } from "lucide-react";

export default function Hero() {
  const scrollToContact = () => {
    const element = document.getElementById("contact");
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section id="home" className="relative min-h-screen gradient-purple overflow-hidden">
      <div className="absolute inset-0">
        {/* Floating Circles */}
        <div className="absolute top-20 left-10 w-32 h-32 border border-white/20 rounded-full animate-pulse"></div>
        <div className="absolute bottom-20 right-20 w-48 h-48 border border-white/10 rounded-full animate-pulse"></div>
        <div className="absolute top-1/2 right-10 w-64 h-64 border border-white/5 rounded-full animate-pulse"></div>
        
        {/* Floating User Avatars with placeholder images */}
        <div className="absolute top-32 right-32 w-12 h-12 rounded-full border-2 border-white shadow-lg animate-bounce bg-gray-300 flex items-center justify-center text-white font-semibold">
          AK
        </div>
        <div className="absolute bottom-40 left-20 w-14 h-14 rounded-full border-2 border-white shadow-lg animate-bounce bg-gray-400 flex items-center justify-center text-white font-semibold">
          ZD
        </div>
        <div className="absolute top-1/2 left-32 w-10 h-10 rounded-full border-2 border-white shadow-lg animate-bounce bg-gray-500 flex items-center justify-center text-white font-semibold text-xs">
          MÖ
        </div>
        <div className="absolute bottom-1/3 right-1/4 w-12 h-12 rounded-full border-2 border-white shadow-lg animate-bounce bg-gray-600 flex items-center justify-center text-white font-semibold">
          EY
        </div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-20">
        <div className="grid lg:grid-cols-2 gap-12 items-center min-h-screen">
          <div className="text-white">
            <h1 className="text-4xl md:text-6xl font-bold leading-tight mb-6">
              En İyi Dijital Pazarlama{" "}
              <span className="text-yellow-300">Yeteneklerini</span>{" "}
              Keşfet - Sadece Bir{" "}
              <span className="text-yellow-300">Tık Uzağında!</span>
            </h1>
            <p className="text-xl mb-8 text-purple-100">
              Etsy, Trendyol, sosyal medya ve reklamcılık alanlarında profesyonel hizmetlerle işinizi büyütün.
            </p>
            <button 
              onClick={scrollToContact}
              className="bg-black hover:bg-gray-800 text-white px-8 py-4 rounded-full text-lg font-semibold transition-colors flex items-center"
            >
              Projeye Başla <ArrowRight className="ml-2 w-5 h-5" />
            </button>
            
            {/* Expert Badge */}
            <div className="mt-8 inline-flex items-center bg-purple-700/50 backdrop-blur-sm rounded-full px-4 py-2">
              <span className="text-sm font-medium">Ahmet</span>
            </div>
          </div>

          <div className="relative">
            {/* Central Circle with Stats */}
            <div className="relative w-80 h-80 mx-auto">
              <div className="absolute inset-0 border-2 border-white/20 rounded-full"></div>
              <div className="absolute inset-8 border border-white/10 rounded-full"></div>
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="text-center text-white">
                  <div className="text-5xl font-bold mb-2">100+</div>
                  <div className="text-lg font-medium text-purple-200">Uzmanlar</div>
                </div>
              </div>
              
              {/* Platform Icons */}
              <div className="absolute top-4 left-1/2 transform -translate-x-1/2 w-8 h-8 bg-black rounded-lg flex items-center justify-center">
                <span className="text-white text-xs font-bold">E</span>
              </div>
              <div className="absolute bottom-4 right-4 w-8 h-8 bg-black rounded-lg flex items-center justify-center">
                <span className="text-white text-xs font-bold">G</span>
              </div>
              <div className="absolute top-1/2 left-4 transform -translate-y-1/2 w-8 h-8 bg-black rounded-lg flex items-center justify-center">
                <span className="text-white text-xs font-bold">I</span>
              </div>
              <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 w-8 h-8 bg-black rounded-lg flex items-center justify-center">
                <span className="text-white text-xs font-bold">M</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Partner Logos */}
      <div className="absolute bottom-8 left-0 right-0">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-center items-center space-x-12 opacity-60 flex-wrap gap-4">
            <div className="text-white font-semibold flex items-center">
              <span className="mr-2">🛍️</span>
              Etsy Partners
            </div>
            <div className="text-white font-semibold flex items-center">
              <span className="mr-2">🛒</span>
              Trendyol Experts
            </div>
            <div className="text-white font-semibold flex items-center">
              <span className="mr-2">🔍</span>
              Google Certified
            </div>
            <div className="text-white font-semibold flex items-center">
              <span className="mr-2">📘</span>
              Meta Partners
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
