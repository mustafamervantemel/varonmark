import { ArrowRight, Star, Users, TrendingUp, Zap } from "lucide-react";
import { useLocation } from "wouter";

export default function Hero() {
  const [location, navigate] = useLocation();
  
  const scrollToContact = () => {
    const element = document.getElementById("contact");
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  const handleCTAClick = () => {
    window.open("https://wa.me/905305629126", "_blank");
  };

  return (
    <section id="home" className="relative min-h-screen bg-gradient-to-br from-purple-900 via-purple-800 to-indigo-900 overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0">
        {/* Animated gradient blobs */}
        <div className="absolute top-0 -left-4 w-72 h-72 bg-purple-300 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-blob"></div>
        <div className="absolute top-0 -right-4 w-72 h-72 bg-yellow-300 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-blob animation-delay-2000"></div>
        <div className="absolute -bottom-8 left-20 w-72 h-72 bg-pink-300 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-blob animation-delay-4000"></div>
        
        {/* Floating Icons */}
        <div className="absolute top-20 left-10 w-16 h-16 border border-white/20 rounded-2xl animate-pulse backdrop-blur-sm bg-white/5 flex items-center justify-center">
          <TrendingUp className="w-8 h-8 text-white/60" />
        </div>
        <div className="absolute bottom-20 right-20 w-20 h-20 border border-white/10 rounded-full animate-pulse backdrop-blur-sm bg-white/5 flex items-center justify-center">
          <Users className="w-10 h-10 text-white/60" />
        </div>
        <div className="absolute top-1/2 right-10 w-18 h-18 border border-white/5 rounded-xl animate-pulse backdrop-blur-sm bg-white/5 flex items-center justify-center">
          <Zap className="w-9 h-9 text-white/60" />
        </div>
        
        {/* Floating Achievement Badges */}
        <div className="absolute top-32 right-32 bg-white/10 backdrop-blur-sm rounded-2xl p-3 shadow-lg animate-bounce border border-white/20">
          <div className="flex items-center space-x-2">
            <Star className="w-4 h-4 text-yellow-400 fill-current" />
            <span className="text-white text-sm font-semibold">500+ Proje</span>
          </div>
        </div>
        <div className="absolute bottom-40 left-20 bg-white/10 backdrop-blur-sm rounded-2xl p-3 shadow-lg animate-bounce border border-white/20" style={{animationDelay: '0.5s'}}>
          <div className="flex items-center space-x-2">
            <Users className="w-4 h-4 text-blue-400" />
            <span className="text-white text-sm font-semibold">200+ Müşteri</span>
          </div>
        </div>
        <div className="absolute top-1/2 left-32 bg-white/10 backdrop-blur-sm rounded-2xl p-3 shadow-lg animate-bounce border border-white/20" style={{animationDelay: '1s'}}>
          <div className="flex items-center space-x-2">
            <TrendingUp className="w-4 h-4 text-green-400" />
            <span className="text-white text-sm font-semibold">%300 Artış</span>
          </div>
        </div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-20">
        <div className="grid lg:grid-cols-2 gap-12 items-center min-h-screen">
          <div className="text-white">
            {/* Badge */}
            <div className="inline-flex items-center bg-white/10 backdrop-blur-sm rounded-full px-4 py-2 mb-6 border border-white/20">
              <Star className="w-4 h-4 text-yellow-400 fill-current mr-2" />
              <span className="text-sm font-medium">5+ Yıllık Uzman Ekip</span>
            </div>
            
            <h1 className="text-4xl md:text-6xl font-bold leading-tight mb-6">
              Dijital Pazarlama
              <span className="block text-transparent bg-clip-text bg-gradient-to-r from-yellow-300 to-pink-300">
                Uzmanları
              </span>
              <span className="block text-2xl md:text-4xl font-normal text-purple-200 mt-2">
                İşinizi Büyütüyor
              </span>
            </h1>
            <p className="text-xl mb-8 text-purple-100 leading-relaxed">
              Etsy, Trendyol, sosyal medya ve reklamcılık alanlarında profesyonel hizmetlerle 
              <span className="text-yellow-300 font-semibold"> %300 satış artışı</span> garantisi veriyoruz.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 mb-8">
              <button 
                onClick={handleCTAClick}
                className="bg-white text-purple-900 px-8 py-4 rounded-full text-lg font-semibold transition-all hover:bg-purple-50 hover:scale-105 flex items-center justify-center shadow-lg"
              >
                Ücretsiz Danışmanlık <ArrowRight className="ml-2 w-5 h-5" />
              </button>
              <button 
                onClick={() => navigate("/service-trendyol")}
                className="bg-transparent border-2 border-white text-white px-8 py-4 rounded-full text-lg font-semibold transition-all hover:bg-white hover:text-purple-900 flex items-center justify-center"
              >
                Hizmetleri İncele
              </button>
            </div>
            
            {/* Stats */}
            <div className="grid grid-cols-3 gap-6">
              <div className="text-center">
                <div className="text-2xl font-bold text-yellow-300">500+</div>
                <div className="text-sm text-purple-200">Proje</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-yellow-300">200+</div>
                <div className="text-sm text-purple-200">Müşteri</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-yellow-300">%300</div>
                <div className="text-sm text-purple-200">Satış Artışı</div>
              </div>
            </div>
          </div>

          <div className="relative">
            {/* Modern Dashboard Mockup */}
            <div className="relative max-w-lg mx-auto">
              {/* Main Dashboard Card */}
              <div className="bg-white/10 backdrop-blur-md rounded-3xl p-8 border border-white/20 shadow-2xl">
                <div className="text-center text-white mb-6">
                  <div className="text-4xl font-bold mb-2 text-yellow-300">10+</div>
                  <div className="text-lg font-medium text-purple-200">Dijital Pazarlama Uzmanı</div>
                </div>
                
                {/* Platform Grid */}
                <div className="grid grid-cols-2 gap-4 mb-6">
                  <div className="bg-white/10 rounded-2xl p-4 text-center border border-white/10">
                    <div className="mb-2">
                      <img src="/src/media/icons8-etsy-color-32.png" alt="Etsy" className="w-8 h-8 mx-auto" />
                    </div>
                    <div className="text-white font-semibold text-sm">Etsy</div>
                    <div className="text-purple-200 text-xs"></div>
                  </div>
                  <div className="bg-white/10 rounded-2xl p-4 text-center border border-white/10">
                    <div className="mb-2">
                      <img src="/src/media/trendyol.jpeg" alt="Trendyol" className="w-8 h-8 mx-auto rounded" />
                    </div>
                    <div className="text-white font-semibold text-sm">Trendyol</div>
                    <div className="text-purple-200 text-xs"></div>
                  </div>
                  <div className="bg-white/10 rounded-2xl p-4 text-center border border-white/10">
                    <div className="mb-2">
                      <img src="/src/media/icons8-instagram-3d-fluency-32.png" alt="Social Media" className="w-8 h-8 mx-auto" />
                    </div>
                    <div className="text-white font-semibold text-sm">Sosyal Medya</div>
                    <div className="text-purple-200 text-xs">Instagram & TikTok</div>
                  </div>
                  <div className="bg-white/10 rounded-2xl p-4 text-center border border-white/10">
                    <div className="mb-2">
                      <img src="/src/media/icons8-meta-windows-11-color-32.png" alt="Ads" className="w-8 h-8 mx-auto" />
                    </div>
                    <div className="text-white font-semibold text-sm">Reklamcılık</div>
                    <div className="text-purple-200 text-xs">Google & Meta</div>
                  </div>
                </div>
                
                {/* Performance Indicator */}
                <div className="bg-gradient-to-r from-green-400/20 to-blue-400/20 rounded-xl p-4 border border-white/10">
                  <div className="flex items-center justify-between">
                    <div>
                      <div className="text-white font-semibold text-sm">Başarı Oranı</div>
                      <div className="text-green-300 text-xs">Son 30 gün</div>
                    </div>
                    <div className="text-2xl font-bold text-green-300">98%</div>
                  </div>
                </div>
              </div>
              
              {/* Floating Stats Cards */}
              <div className="absolute -top-4 -right-4 bg-white/10 backdrop-blur-sm rounded-2xl p-4 border border-white/20 shadow-lg">
                <div className="text-center">
                  <div className="text-xl font-bold text-yellow-300">7/24</div>
                  <div className="text-xs text-white">Hizmet</div>
                </div>
              </div>
              
              <div className="absolute -bottom-4 -left-4 bg-white/10 backdrop-blur-sm rounded-2xl p-4 border border-white/20 shadow-lg">
                <div className="text-center">
                  <div className="text-xl font-bold text-green-300">7/24</div>
                  <div className="text-xs text-white">Destek</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Trust Indicators */}
      <div className="absolute bottom-8 left-0 right-0">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-4">
            <p className="text-purple-200 text-sm">Güvenilir Partnerler</p>
          </div>
          <div className="flex justify-center items-center space-x-8 opacity-80 flex-wrap gap-6">
            <div className="bg-white/10 backdrop-blur-sm rounded-xl px-4 py-2 border border-white/20">
              <div className="text-white font-semibold flex items-center text-sm">
                <img src="/src/media/icons8-etsy-color-16.png" alt="Etsy" className="w-4 h-4 mr-2" />
                Etsy 
              </div>
            </div>
            <div className="bg-white/10 backdrop-blur-sm rounded-xl px-4 py-2 border border-white/20">
              <div className="text-white font-semibold flex items-center text-sm">
                <img src="/src/media/trendyol.jpeg" alt="Trendyol" className="w-4 h-4 mr-2 rounded" />
                Trendyol 
              </div>
            </div>
            <div className="bg-white/10 backdrop-blur-sm rounded-xl px-4 py-2 border border-white/20">
              <div className="text-white font-semibold flex items-center text-sm">
                <span className="mr-2">🔍</span>
                Google 
              </div>
            </div>
            <div className="bg-white/10 backdrop-blur-sm rounded-xl px-4 py-2 border border-white/20">
              <div className="text-white font-semibold flex items-center text-sm">
                <img src="/src/media/icons8-meta-windows-11-color-16.png" alt="Meta" className="w-4 h-4 mr-2" />
                Meta 
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
