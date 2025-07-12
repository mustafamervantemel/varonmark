import { Check, Store, ShoppingBag, Star, TrendingUp, Users, Zap, ArrowRight } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

export default function Services() {

  const handleContactClick = () => {
    window.open("https://wa.me/905305629126", "_blank");
  };

  const services = [
    {
      icon: "/src/media/icons8-etsy-color-120.png",
      title: "Etsy Hesap Açılışı",
      description: "Profesyonel Etsy mağazanız için tam kurulum ve optimizasyon",
      price: "800₺",
      period: "Tek seferlik",
      features: [
        "Mağaza kurulumu",
        "SEO optimizasyonu",
        "İlk 10 ürün yükleme",
        "Logo ve banner tasarımı"
      ],
      popular: false,
      gradient: "from-orange-500 to-red-500"
    },
    {
      icon: "/src/media/icons8-etsy-color-120.png",
      title: "Etsy Mağaza Yardımcısı",
      description: "Aylık mağaza yönetimi ve sürekli optimizasyon hizmetleri",
      price: "5.000₺",
      period: "Aylık",
      features: [
        "Günlük mağaza yönetimi",
        "Ürün listesi optimizasyonu",
        "Müşteri desteği",
        "Performans raporları"
      ],
      popular: true,
      gradient: "from-orange-500 to-red-500"
    },
    {
      icon: "/src/media/icons8-instagram-3d-fluency-120.png",
      title: "Sosyal Medya Yönetimi",
      description: "Instagram, TikTok ve X için kapsamlı sosyal medya yönetimi",
      price: "7.500₺",
      period: "Aylık",
      features: [
        "İçerik üretimi",
        "Günlük paylaşım",
        "Story yönetimi",
        "Etkileşim artırma"
      ],
      popular: false,
      gradient: "from-pink-500 to-purple-500"
    },
    {
      icon: "/src/media/icons8-meta-windows-11-color-120.png",
      title: "Reklamcılık Hizmetleri",
      description: "Google & Meta Ads ile etkili reklam kampanyaları",
      price: "3.750₺",
      period: "Aylık",
      features: [
        "Kampanya kurulumu",
        "Günlük optimizasyon",
        "A/B testleri",
        "Performans raporları"
      ],
      popular: false,
      gradient: "from-blue-500 to-indigo-500"
    }
  ];

  return (
    <section id="services" className="py-20 bg-gradient-to-br from-purple-50 via-indigo-50 to-blue-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center bg-purple-100 rounded-full px-6 py-2 mb-6">
            <Zap className="w-5 h-5 text-purple-600 mr-2" />
            <span className="text-purple-600 font-semibold">Hizmetlerimiz</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Dijital Pazarlama <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-600 to-pink-600">Çözümleri</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Dijital pazarlama alanında kapsamlı çözümler sunuyoruz. Her hizmetimiz deneyimli uzmanlar tarafından yürütülür.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
          {services.map((service, index) => (
            <Card key={index} className={`relative overflow-hidden hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 ${service.popular ? 'ring-2 ring-purple-500' : ''}`}>
              {service.popular && (
                <div className="absolute top-0 right-0 bg-gradient-to-r from-purple-500 to-pink-500 text-white px-4 py-1 text-sm font-semibold">
                  <Star className="w-4 h-4 inline mr-1" />
                  Popüler
                </div>
              )}
              <CardContent className="p-0">
                {/* Header with gradient */}
                <div className={`bg-gradient-to-r ${service.gradient} p-6 text-white text-center relative`}>
                  <div className="absolute inset-0 bg-black/10"></div>
                  <div className="relative z-10">
                    <div className="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-4 backdrop-blur-sm">
                      <img src={service.icon} alt={service.title} className="w-10 h-10" />
                    </div>
                    <h3 className="text-xl font-bold mb-2">{service.title}</h3>
                    <p className="text-white/90 text-sm">{service.description}</p>
                  </div>
                </div>

                {/* Content */}
                <div className="p-6">
                  <div className="text-center mb-6">
                    <div className="text-3xl font-bold text-gray-900 mb-1">{service.price}</div>
                    <div className="text-sm text-gray-500">{service.period}</div>
                  </div>

                  <div className="space-y-3 mb-6">
                    {service.features.map((feature, idx) => (
                      <div key={idx} className="flex items-center">
                        <Check className="w-5 h-5 text-green-500 mr-3 flex-shrink-0" />
                        <span className="text-gray-700 text-sm">{feature}</span>
                      </div>
                    ))}
                  </div>

                  <button 
                    onClick={handleContactClick}
                    className={`w-full bg-gradient-to-r ${service.gradient} text-white py-3 rounded-lg font-semibold transition-all hover:scale-105 shadow-lg flex items-center justify-center group`}
                  >
                    Hemen Başla
                    <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                  </button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Trendyol Services Section */}
        <div className="relative">
          <Card className="bg-gradient-to-r from-orange-500 via-red-500 to-pink-500 text-white overflow-hidden">
            <CardContent className="p-0">
              <div className="relative p-8 md:p-12">
                {/* Background decorations */}
                <div className="absolute top-0 right-0 w-64 h-64 bg-white/10 rounded-full -translate-y-32 translate-x-32"></div>
                <div className="absolute bottom-0 left-0 w-48 h-48 bg-white/10 rounded-full translate-y-24 -translate-x-24"></div>
                
                <div className="relative z-10">
                  <div className="flex items-center justify-center mb-8">
                    <div className="w-20 h-20 bg-white/20 rounded-full flex items-center justify-center mr-6 backdrop-blur-sm">
                      <img src="/src/media/trendyol.jpeg" alt="Trendyol" className="w-12 h-12 rounded-lg" />
                    </div>
                    <div>
                      <h3 className="text-3xl md:text-4xl font-bold mb-2">Trendyol Hizmetleri</h3>
                      <p className="text-white/90 text-lg">Türkiye'nin en büyük e-ticaret platformunda başarı</p>
                    </div>
                  </div>
                  
                  <div className="text-center mb-8">
                    <p className="text-white/90 text-lg mb-4">
                      Etsy için sunduğumuz tüm hizmetler aynı kalite ve fiyatlarla Trendyol için de mevcuttur.
                    </p>
                    <div className="flex flex-wrap justify-center gap-4">
                      <div className="flex items-center bg-white/20 rounded-full px-4 py-2 backdrop-blur-sm">
                        <TrendingUp className="w-5 h-5 mr-2" />
                        <span className="font-semibold">%400 Satış Artışı</span>
                      </div>
                      <div className="flex items-center bg-white/20 rounded-full px-4 py-2 backdrop-blur-sm">
                        <Users className="w-5 h-5 mr-2" />
                        <span className="font-semibold">100+ Başarılı Mağaza</span>
                      </div>
                      <div className="flex items-center bg-white/20 rounded-full px-4 py-2 backdrop-blur-sm">
                        <Star className="w-5 h-5 mr-2" />
                        <span className="font-semibold">7/24 Destek</span>
                      </div>
                    </div>
                  </div>
                  
                  <div className="grid md:grid-cols-2 gap-6">
                    <Card className="bg-white/10 backdrop-blur-sm border-white/20">
                      <CardContent className="p-6 text-center">
                        <div className="w-12 h-12 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-4">
                          <Store className="w-6 h-6 text-white" />
                        </div>
                        <h4 className="font-bold text-xl mb-2">Trendyol Hesap Açılışı</h4>
                        <p className="text-white/80 mb-4">Profesyonel mağaza kurulumu ve optimizasyon</p>
                        <div className="text-2xl font-bold mb-4">800₺</div>
                        <button 
                          onClick={handleContactClick}
                          className="w-full bg-white text-orange-500 py-2 rounded-full font-semibold hover:bg-white/90 transition-colors"
                        >
                          Hemen Başla
                        </button>
                      </CardContent>
                    </Card>
                    
                    <Card className="bg-white/10 backdrop-blur-sm border-white/20">
                      <CardContent className="p-6 text-center">
                        <div className="w-12 h-12 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-4">
                          <ShoppingBag className="w-6 h-6 text-white" />
                        </div>
                        <h4 className="font-bold text-xl mb-2">Trendyol Mağaza Yardımcısı</h4>
                        <p className="text-white/80 mb-4">Aylık mağaza yönetimi ve sürekli optimizasyon</p>
                        <div className="text-2xl font-bold mb-4">5.000₺/ay</div>
                        <button 
                          onClick={handleContactClick}
                          className="w-full bg-white text-orange-500 py-2 rounded-full font-semibold hover:bg-white/90 transition-colors"
                        >
                          Başlayın
                        </button>
                      </CardContent>
                    </Card>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Call to Action */}
        <div className="text-center mt-16">
          <div className="bg-gradient-to-r from-purple-600 to-pink-600 rounded-2xl p-8 text-white">
            <h3 className="text-2xl font-bold mb-4">Hangi hizmeti seçeceğinizden emin değil misiniz?</h3>
            <p className="text-purple-100 mb-6">Uzmanlarımızla ücretsiz görüşün, size en uygun paketi belirleyelim.</p>
            <button 
              onClick={handleContactClick}
              className="bg-white text-purple-600 px-8 py-3 rounded-full font-semibold hover:bg-purple-50 transition-colors inline-flex items-center"
            >
              Ücretsiz Danışmanlık
              <ArrowRight className="w-5 h-5 ml-2" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}