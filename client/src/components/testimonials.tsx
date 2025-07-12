import { Star, ExternalLink, MessageCircle, Users, Quote } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

export default function Testimonials() {
  const testimonials = [
    {
      name: "Ahmet Kaya",
      role: "E-ticaret Girişimcisi",
      content: "Varonmark sayesinde Etsy mağazamın satışları 3 katına çıktı. Profesyonel yaklaşımları ve sürekli iletişimleri mükemmel. SEO optimizasyonu ve ürün fotoğrafçılığı hizmeti aldım.",
      photo: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=100&h=100&fit=crop&crop=face&auto=format",
      service: "etsy",
      serviceIcon: "/src/media/icons8-etsy-color-32.png",
      serviceName: "Etsy Mağazası",
      visitUrl: "https://etsy.com/shop/ahmetkaya",
      rating: 5,
      gradient: "from-orange-500 to-red-500"
    },
    {
      name: "Zeynep Demir",
      role: "Moda Markası Sahibi",
      content: "Sosyal medya yönetimi hizmeti aldım. Instagram followerslarım %400 arttı ve engagement oranım çok yükseldi. İçerik kalitesi ve strateji harika.",
      photo: "https://images.unsplash.com/photo-1494790108755-2616b612b142?w=100&h=100&fit=crop&crop=face&auto=format",
      service: "instagram",
      serviceIcon: "/src/media/icons8-instagram-3d-fluency-32.png",
      serviceName: "Instagram Hesabı",
      visitUrl: "https://instagram.com/zeynepdemir_fashion",
      rating: 5,
      gradient: "from-pink-500 to-purple-500"
    },
    {
      name: "Mehmet Özkan",
      role: "Teknoloji Şirketi Kurucusu",
      content: "Google Ads kampanyalarımız sayesinde maliyetlerimiz %50 azaldı, dönüşüm oranımız ise %200 arttı. ROI'muz inanılmaz derecede iyileşti.",
      photo: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&h=100&fit=crop&crop=face&auto=format",
      service: "website",
      serviceIcon: "/src/media/icons8-google-ads-color-32.png",
      serviceName: "Web Sitesi",
      visitUrl: "https://mehmetozkan-tech.com",
      rating: 5,
      gradient: "from-blue-500 to-indigo-500"
    },
    {
      name: "Fatma Yılmaz",
      role: "El Sanatları Ustası",
      content: "Trendyol mağazamı açtıktan sonra ilk ayda 100+ satış yaptım. Ürün listeleme ve SEO konularında çok yardımcı oldular.",
      photo: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=100&h=100&fit=crop&crop=face&auto=format",
      service: "trendyol",
      serviceIcon: "/src/media/trendyol.jpeg",
      serviceName: "Trendyol Mağazası",
      visitUrl: "https://trendyol.com/magaza/fatmayilmaz",
      rating: 5,
      gradient: "from-orange-500 to-pink-500"
    },
    {
      name: "Can Arslan",
      role: "Fitness Antrenörü",
      content: "Instagram hesabım 10K'dan 50K'ya çıktı. Video içeriklerimin reach'i inanılmaz arttı. Organik büyüme stratejileri çok etkili.",
      photo: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=100&h=100&fit=crop&crop=face&auto=format",
      service: "instagram",
      serviceIcon: "/src/media/icons8-instagram-3d-fluency-32.png",
      serviceName: "Instagram Hesabı",
      visitUrl: "https://instagram.com/canarslan_fit",
      rating: 5,
      gradient: "from-pink-500 to-purple-500"
    },
    {
      name: "Elif Kılıç",
      role: "Güzellik Uzmanı",
      content: "Etsy mağazamda organik trafiğim %500 arttı. Anahtar kelime optimizasyonu ve ürün fotoğrafları mükemmel oldu.",
      photo: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=100&h=100&fit=crop&crop=face&auto=format",
      service: "etsy",
      serviceIcon: "/src/media/icons8-etsy-color-32.png",
      serviceName: "Etsy Mağazası",
      visitUrl: "https://etsy.com/shop/elifkilic",
      rating: 5,
      gradient: "from-orange-500 to-red-500"
    }
  ];

  const handleVisitClick = (url: string) => {
    window.open(url, '_blank', 'noopener,noreferrer');
  };

  return (
    <section className="py-20 bg-gradient-to-br from-purple-50 via-pink-50 to-orange-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center bg-purple-100 rounded-full px-6 py-2 mb-6">
            <MessageCircle className="w-5 h-5 text-purple-600 mr-2" />
            <span className="text-purple-600 font-semibold">Müşteri Yorumları</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Müşterilerimiz <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-600 to-pink-600">Ne Diyor?</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Bizimle çalışan müşterilerimizin gerçek deneyimleri ve başarı hikayeleri
          </p>
        </div>
        
        {/* Testimonials Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {testimonials.map((testimonial, index) => (
            <Card key={index} className="group hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 border-0 shadow-lg overflow-hidden">
              <CardContent className="p-0">
                {/* Header with gradient */}
                <div className={`bg-gradient-to-r ${testimonial.gradient} p-6 text-white relative`}>
                  <div className="absolute inset-0 bg-black/10"></div>
                  <div className="relative z-10">
                    <div className="flex items-center justify-between mb-4">
                      <div className="flex items-center">
                        <img 
                          src={testimonial.serviceIcon} 
                          alt={testimonial.serviceName}
                          className="w-8 h-8 rounded-lg bg-white/20 p-1"
                        />
                        <span className="ml-2 text-sm font-semibold">{testimonial.serviceName}</span>
                      </div>
                      <Quote className="w-6 h-6 text-white/60" />
                    </div>
                    
                    {/* Rating */}
                    <div className="flex items-center mb-3">
                      {[...Array(testimonial.rating)].map((_, i) => (
                        <Star key={i} className="w-4 h-4 fill-current text-yellow-300" />
                      ))}
                    </div>
                  </div>
                </div>

                {/* Content */}
                <div className="p-6">
                  <p className="text-gray-700 mb-6 leading-relaxed italic">
                    "{testimonial.content}"
                  </p>
                  
                  {/* Customer Info */}
                  <div className="flex items-center justify-between mb-6">
                    <div className="flex items-center">
                      <img 
                        src={testimonial.photo}
                        alt={testimonial.name}
                        className="w-12 h-12 rounded-full object-cover mr-4 ring-2 ring-gray-200"
                      />
                      <div>
                        <div className="font-bold text-gray-900">{testimonial.name}</div>
                        <div className="text-sm text-gray-600">{testimonial.role}</div>
                      </div>
                    </div>
                  </div>
                  
                  {/* Visit Button */}
                  <button 
                    onClick={() => handleVisitClick(testimonial.visitUrl)}
                    className={`w-full bg-gradient-to-r ${testimonial.gradient} text-white py-3 rounded-lg font-semibold transition-all hover:scale-105 shadow-lg flex items-center justify-center group`}
                  >
                    Ziyaret Et
                    <ExternalLink className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                  </button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Stats Section */}
        <div className="grid md:grid-cols-4 gap-6 mb-16">
          <Card className="group hover:shadow-xl transition-all duration-300 hover:-translate-y-2 border-0 shadow-lg">
            <CardContent className="p-6 text-center">
              <div className="w-16 h-16 bg-gradient-to-r from-green-500 to-emerald-500 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform">
                <Star className="w-8 h-8 text-white" />
              </div>
              <div className="text-3xl font-bold text-gray-900 mb-2">4.9/5</div>
              <div className="text-gray-600 font-medium">Ortalama Puan</div>
            </CardContent>
          </Card>
          
          <Card className="group hover:shadow-xl transition-all duration-300 hover:-translate-y-2 border-0 shadow-lg">
            <CardContent className="p-6 text-center">
              <div className="w-16 h-16 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform">
                <Users className="w-8 h-8 text-white" />
              </div>
              <div className="text-3xl font-bold text-gray-900 mb-2">200+</div>
              <div className="text-gray-600 font-medium">Mutlu Müşteri</div>
            </CardContent>
          </Card>
          
          <Card className="group hover:shadow-xl transition-all duration-300 hover:-translate-y-2 border-0 shadow-lg">
            <CardContent className="p-6 text-center">
              <div className="w-16 h-16 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform">
                <MessageCircle className="w-8 h-8 text-white" />
              </div>
              <div className="text-3xl font-bold text-gray-900 mb-2">150+</div>
              <div className="text-gray-600 font-medium">Pozitif Yorum</div>
            </CardContent>
          </Card>
          
          <Card className="group hover:shadow-xl transition-all duration-300 hover:-translate-y-2 border-0 shadow-lg">
            <CardContent className="p-6 text-center">
              <div className="w-16 h-16 bg-gradient-to-r from-orange-500 to-red-500 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform">
                <ExternalLink className="w-8 h-8 text-white" />
              </div>
              <div className="text-3xl font-bold text-gray-900 mb-2">%98</div>
              <div className="text-gray-600 font-medium">Tavsiye Oranı</div>
            </CardContent>
          </Card>
        </div>

        {/* Call to Action */}
        <Card className="bg-gradient-to-r from-purple-600 to-pink-600 text-white overflow-hidden">
          <CardContent className="p-0">
            <div className="relative p-8 md:p-12">
              {/* Background decorations */}
              <div className="absolute top-0 right-0 w-64 h-64 bg-white/10 rounded-full -translate-y-32 translate-x-32"></div>
              <div className="absolute bottom-0 left-0 w-48 h-48 bg-white/10 rounded-full translate-y-24 -translate-x-24"></div>
              
              <div className="relative z-10 text-center">
                <div className="w-20 h-20 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-6 backdrop-blur-sm">
                  <MessageCircle className="w-10 h-10 text-white" />
                </div>
                <h3 className="text-3xl md:text-4xl font-bold mb-4">Siz de Başarı Hikayenizi Yazın</h3>
                <p className="text-white/90 text-lg mb-8 max-w-2xl mx-auto">
                  Müşterilerimizin başarı hikayelerinde yerinizi alın. Bizimle çalışarak dijital pazarlama hedeflerinize ulaşın.
                </p>
                
                <button className="bg-white text-purple-600 px-8 py-4 rounded-full font-semibold hover:bg-purple-50 transition-colors inline-flex items-center text-lg group">
                  Ücretsiz Danışmanlık Alın
                  <ExternalLink className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
                </button>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </section>
  );
}