import { Award, TrendingUp, Headphones, Users, Target, Clock, Star, Zap, ArrowRight, Shield, Trophy, Heart } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { useLocation } from "wouter";

export default function About() {
  const [, navigate] = useLocation();

  const handleContactClick = () => {
    navigate("/contact");
  };

  const features = [
    {
      icon: Award,
      title: "Sertifikalı Uzmanlar",
      description: "Google, Meta ve platform sertifikalarına sahip profesyoneller",
      gradient: "from-purple-500 to-indigo-500",
      stats: "100+ Sertifika"
    },
    {
      icon: TrendingUp,
      title: "Kanıtlanmış Sonuçlar",
      description: "Ortalama %300 satış artışı ve %150 reach artışı",
      gradient: "from-blue-500 to-cyan-500",
      stats: "%300 Artış"
    },
    {
      icon: Headphones,
      title: "7/24 Destek",
      description: "Her an ulaşabileceğiniz müşteri destek ekibimiz",
      gradient: "from-green-500 to-emerald-500",
      stats: "7/24 Erişim"
    },
    {
      icon: Shield,
      title: "Güvenli Hizmet",
      description: "Tüm projelerinizde güvenlik ve gizlilik önceliğimiz",
      gradient: "from-red-500 to-pink-500",
      stats: "100% Güvenli"
    },
    {
      icon: Target,
      title: "Hedef Odaklı",
      description: "Müşterilerimizin hedeflerine ulaşması için özel stratejiler",
      gradient: "from-orange-500 to-yellow-500",
      stats: "Hedef Odaklı"
    },
    {
      icon: Clock,
      title: "Hızlı Teslimat",
      description: "Projelerinizi zamanında ve kaliteli şekilde teslim ederiz",
      gradient: "from-teal-500 to-green-500",
      stats: "Zamanında"
    }
  ];

  const stats = [
    { number: "500+", label: "Tamamlanan Proje", icon: Trophy },
    { number: "200+", label: "Mutlu Müşteri", icon: Heart },
    { number: "5+", label: "Yıllık Deneyim", icon: Star },
    { number: "10+", label: "Uzman Ekip", icon: Users }
  ];

  return (
    <section id="about" className="py-20 bg-gradient-to-br from-gray-50 via-blue-50 to-indigo-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center bg-purple-100 rounded-full px-6 py-2 mb-6">
            <Users className="w-5 h-5 text-purple-600 mr-2" />
            <span className="text-purple-600 font-semibold">Hakkımızda</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Neden <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-600 to-pink-600">Varonmark?</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-4xl mx-auto">
            Dijital pazarlama alanında 5+ yıllık deneyimimiz ve 100+ uzman ekibimizle, 
            işinizi online dünyada başarıya taşıyoruz. Her projede kişiselleştirilmiş 
            çözümler sunuyor, müşterilerimizin hedeflerine ulaşmasını sağlıyoruz.
          </p>
        </div>

        {/* Main Content */}
        <div className="grid lg:grid-cols-2 gap-16 items-center mb-20">
          {/* Left Side - Features */}
          <div className="space-y-8">
            <div className="grid md:grid-cols-2 gap-6">
              {features.map((feature, index) => (
                <Card key={index} className="group hover:shadow-xl transition-all duration-300 hover:-translate-y-2 border-0 shadow-lg">
                  <CardContent className="p-6">
                    <div className={`w-12 h-12 bg-gradient-to-r ${feature.gradient} rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform`}>
                      <feature.icon className="w-6 h-6 text-white" />
                    </div>
                    <h3 className="font-bold text-gray-900 mb-2 text-lg">{feature.title}</h3>
                    <p className="text-gray-600 text-sm mb-3 leading-relaxed">{feature.description}</p>
                    <div className="flex items-center justify-between">
                      <span className={`text-xs font-semibold px-3 py-1 rounded-full bg-gradient-to-r ${feature.gradient} text-white`}>
                        {feature.stats}
                      </span>
                      <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
          
          {/* Right Side - Team Visual */}
          <div className="relative">
            <Card className="bg-gradient-to-br from-purple-500 via-indigo-500 to-blue-500 text-white overflow-hidden shadow-2xl">
              <CardContent className="p-0">
                <div className="relative p-8">
                  {/* Background decorations */}
                  <div className="absolute top-0 right-0 w-32 h-32 bg-white/10 rounded-full -translate-y-16 translate-x-16"></div>
                  <div className="absolute bottom-0 left-0 w-24 h-24 bg-white/10 rounded-full translate-y-12 -translate-x-12"></div>
                  <div className="absolute top-1/2 left-1/2 w-40 h-40 bg-white/5 rounded-full -translate-x-1/2 -translate-y-1/2"></div>
                  
                  <div className="relative z-10 text-center">
                    <div className="w-20 h-20 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-6 backdrop-blur-sm">
                      <Users className="w-10 h-10 text-white" />
                    </div>
                    <h3 className="text-2xl font-bold mb-2">Varonmark Ekibi</h3>
                    <p className="text-white/90 mb-8">Dijital pazarlama uzmanları</p>
                    
                    {/* Team Stats */}
                    <div className="grid grid-cols-2 gap-4 mb-8">
                      <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4">
                        <div className="text-2xl font-bold">100+</div>
                        <div className="text-sm text-white/80">Uzman</div>
                      </div>
                      <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4">
                        <div className="text-2xl font-bold">24/7</div>
                        <div className="text-sm text-white/80">Destek</div>
                      </div>
                    </div>
                    
                    <button 
                      onClick={handleContactClick}
                      className="bg-white text-purple-600 px-6 py-3 rounded-full font-semibold hover:bg-purple-50 transition-colors inline-flex items-center group"
                    >
                      Ekibimizle Tanış
                      <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                    </button>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>

        {/* Stats Section */}
        <div className="grid md:grid-cols-4 gap-6 mb-16">
          {stats.map((stat, index) => (
            <Card key={index} className="group hover:shadow-xl transition-all duration-300 hover:-translate-y-2 border-0 shadow-lg">
              <CardContent className="p-6 text-center">
                <div className="w-16 h-16 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform">
                  <stat.icon className="w-8 h-8 text-white" />
                </div>
                <div className="text-3xl font-bold text-gray-900 mb-2">{stat.number}</div>
                <div className="text-gray-600 font-medium">{stat.label}</div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Why Choose Us Section */}
        <Card className="bg-gradient-to-r from-purple-600 to-pink-600 text-white overflow-hidden">
          <CardContent className="p-0">
            <div className="relative p-8 md:p-12">
              {/* Background decorations */}
              <div className="absolute top-0 right-0 w-64 h-64 bg-white/10 rounded-full -translate-y-32 translate-x-32"></div>
              <div className="absolute bottom-0 left-0 w-48 h-48 bg-white/10 rounded-full translate-y-24 -translate-x-24"></div>
              
              <div className="relative z-10 text-center">
                <div className="w-20 h-20 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-6 backdrop-blur-sm">
                  <Zap className="w-10 h-10 text-white" />
                </div>
                <h3 className="text-3xl md:text-4xl font-bold mb-4">Başarınız Bizim Önceliğimiz</h3>
                <p className="text-white/90 text-lg mb-8 max-w-2xl mx-auto">
                  Dijital pazarlama dünyasında fark yaratan çözümlerle, markانınızı bir adım öne taşıyoruz. 
                  Deneyimli ekibimiz ve kanıtlanmış stratejilerimizle hedeflerinize ulaşın.
                </p>
                
                <div className="flex flex-wrap justify-center gap-4 mb-8">
                  <div className="flex items-center bg-white/20 rounded-full px-4 py-2 backdrop-blur-sm">
                    <Award className="w-5 h-5 mr-2" />
                    <span className="font-semibold">Sertifikalı Uzmanlar</span>
                  </div>
                  <div className="flex items-center bg-white/20 rounded-full px-4 py-2 backdrop-blur-sm">
                    <TrendingUp className="w-5 h-5 mr-2" />
                    <span className="font-semibold">Kanıtlanmış Sonuçlar</span>
                  </div>
                  <div className="flex items-center bg-white/20 rounded-full px-4 py-2 backdrop-blur-sm">
                    <Headphones className="w-5 h-5 mr-2" />
                    <span className="font-semibold">7/24 Destek</span>
                  </div>
                </div>
                
                <button 
                  onClick={handleContactClick}
                  className="bg-white text-purple-600 px-8 py-4 rounded-full font-semibold hover:bg-purple-50 transition-colors inline-flex items-center text-lg group"
                >
                  Hemen Başlayın
                  <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
                </button>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </section>
  );
}