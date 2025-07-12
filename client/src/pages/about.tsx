import { Award, TrendingUp, Headphones, Users, Target, Heart, ChevronRight, Star } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import Navigation from "@/components/navigation";
import Footer from "@/components/footer";

export default function AboutPage() {
  return (
    <div className="min-h-screen">
      <Navigation />
      
      {/* Hero Section */}
      <section className="pt-20 pb-12 bg-gradient-to-br from-purple-900 via-purple-800 to-indigo-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <Badge variant="secondary" className="mb-4 bg-white/10 text-white border-white/20">
              Hakkımızda
            </Badge>
            <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">
              Dijital Pazarlama
              <span className="block text-transparent bg-clip-text bg-gradient-to-r from-purple-200 to-pink-200">
                Uzmanları
              </span>
            </h1>
            <p className="text-xl text-purple-100 max-w-3xl mx-auto">
              5+ yıllık deneyimimiz ve 100+ uzman ekibimizle işinizi online dünyada başarıya taşıyoruz.
            </p>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="text-4xl font-bold text-purple-600 mb-2">500+</div>
              <div className="text-gray-600">Tamamlanan Proje</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-blue-500 mb-2">200+</div>
              <div className="text-gray-600">Mutlu Müşteri</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-green-500 mb-2">%300</div>
              <div className="text-gray-600">Ortalama Satış Artışı</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-pink-500 mb-2">5+</div>
              <div className="text-gray-600">Yıllık Deneyim</div>
            </div>
          </div>
        </div>
      </section>

      {/* Story Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl font-bold text-gray-900 mb-6">Hikayemiz</h2>
              <p className="text-lg text-gray-600 mb-6">
                Varonmark, 2019 yılında dijital pazarlama alanında fark yaratmak amacıyla kuruldu. 
                Küçük bir ekiple başladığımız yolculuğumuzda, müşterilerimizin başarısını kendi 
                başarımız olarak gördük.
              </p>
              <p className="text-lg text-gray-600 mb-6">
                Bugün 100+ uzman ekibimizle, e-ticaret platformlarından sosyal medya yönetimine, 
                reklam kampanyalarından SEO çalışmalarına kadar geniş bir yelpazede hizmet veriyoruz.
              </p>
              <div className="flex items-center text-purple-600 font-semibold">
                <span>Daha fazla bilgi</span>
                <ChevronRight className="w-4 h-4 ml-1" />
              </div>
            </div>
            
            <div className="relative">
              <div className="bg-gradient-to-br from-purple-100 to-blue-100 rounded-3xl shadow-2xl w-full h-96 flex items-center justify-center">
                <div className="text-center">
                  <div className="text-8xl mb-4">🚀</div>
                  <div className="text-xl font-semibold text-gray-800">İnovasyon & Büyüme</div>
                  <div className="text-gray-600">Sürekli gelişim anlayışımız</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Değerlerimiz</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Çalışma prensipilerimiz ve değerlerimiz işimizin temelini oluşturur.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <Card className="bg-gradient-to-br from-purple-50 to-purple-100 border-purple-200 hover:shadow-lg transition-all duration-300">
              <CardContent className="p-8 text-center">
                <div className="w-16 h-16 bg-purple-600 rounded-full flex items-center justify-center mx-auto mb-6">
                  <Target className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-4">Sonuç Odaklı</h3>
                <p className="text-gray-600">
                  Her projede ölçülebilir sonuçlar elde etmek için veri odaklı stratejiler geliştiriyoruz.
                </p>
              </CardContent>
            </Card>

            <Card className="bg-gradient-to-br from-blue-50 to-blue-100 border-blue-200 hover:shadow-lg transition-all duration-300">
              <CardContent className="p-8 text-center">
                <div className="w-16 h-16 bg-blue-500 rounded-full flex items-center justify-center mx-auto mb-6">
                  <Heart className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-4">Müşteri Memnuniyeti</h3>
                <p className="text-gray-600">
                  Müşterilerimizin başarısı bizim önceliğimizdir. Her projede %100 memnuniyet hedefliyoruz.
                </p>
              </CardContent>
            </Card>

            <Card className="bg-gradient-to-br from-green-50 to-green-100 border-green-200 hover:shadow-lg transition-all duration-300">
              <CardContent className="p-8 text-center">
                <div className="w-16 h-16 bg-green-500 rounded-full flex items-center justify-center mx-auto mb-6">
                  <Users className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-4">Takım Çalışması</h3>
                <p className="text-gray-600">
                  Güçlü takım ruhumuzla her projede işbirliği içinde çalışıyor, en iyi sonuçları alıyoruz.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl font-bold text-gray-900 mb-6">Neden Varonmark?</h2>
              <p className="text-lg text-gray-600 mb-8">
                Dijital pazarlama alanında 5+ yıllık deneyimimiz ve 100+ uzman ekibimizle, 
                işinizi online dünyada başarıya taşıyoruz. Her projede kişiselleştirilmiş 
                çözümler sunuyor, müşterilerimizin hedeflerine ulaşmasını sağlıyoruz.
              </p>
              
              <div className="space-y-6">
                <div className="flex items-start">
                  <div className="w-8 h-8 bg-purple-600 rounded-full flex items-center justify-center mr-4 mt-1">
                    <Award className="w-4 h-4 text-white" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900 mb-1">Sertifikalı Uzmanlar</h3>
                    <p className="text-gray-600">Google, Meta ve platform sertifikalarına sahip profesyoneller</p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="w-8 h-8 bg-blue-500 rounded-full flex items-center justify-center mr-4 mt-1">
                    <TrendingUp className="w-4 h-4 text-white" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900 mb-1">Kanıtlanmış Sonuçlar</h3>
                    <p className="text-gray-600">Ortalama %300 satış artışı ve %150 reach artışı</p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="w-8 h-8 bg-green-500 rounded-full flex items-center justify-center mr-4 mt-1">
                    <Headphones className="w-4 h-4 text-white" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900 mb-1">7/24 Destek</h3>
                    <p className="text-gray-600">Her an ulaşabileceğiniz müşteri destek ekibimiz</p>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="relative">
              <div className="bg-gradient-to-br from-purple-100 to-blue-100 rounded-3xl shadow-2xl w-full h-96 flex items-center justify-center text-gray-500">
                <div className="text-center">
                  <div className="text-6xl mb-4">👥</div>
                  <div className="text-lg font-semibold">Varonmark Ekibi</div>
                  <div className="text-sm">Dijital pazarlama uzmanları</div>
                </div>
              </div>
              
              <div className="absolute -bottom-6 -right-6 bg-white rounded-2xl shadow-lg p-6">
                <div className="grid grid-cols-2 gap-4 text-center">
                  <div>
                    <div className="text-2xl font-bold text-purple-600">500+</div>
                    <div className="text-sm text-gray-600">Proje</div>
                  </div>
                  <div>
                    <div className="text-2xl font-bold text-blue-500">200+</div>
                    <div className="text-sm text-gray-600">Müşteri</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Uzman Ekibimiz</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Her alanda uzman profesyonellerden oluşan ekibimizle projelerinizde başarı garantisi veriyoruz.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {/* Team Member 1 */}
            <Card className="hover:shadow-lg transition-shadow">
              <CardContent className="p-8 text-center">
                <div className="w-20 h-20 bg-gradient-to-br from-purple-400 to-purple-600 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl text-white">👨‍💼</span>
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">E-ticaret Uzmanları</h3>
                <p className="text-gray-600 mb-4">
                  Etsy ve Trendyol konularında uzman ekibimiz, mağaza kurulumundan yönetimine kadar her aşamada size destek olur.
                </p>
                <div className="flex justify-center space-x-1">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 text-yellow-500 fill-current" />
                  ))}
                </div>
              </CardContent>
            </Card>

            {/* Team Member 2 */}
            <Card className="hover:shadow-lg transition-shadow">
              <CardContent className="p-8 text-center">
                <div className="w-20 h-20 bg-gradient-to-br from-blue-400 to-blue-600 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl text-white">👩‍💻</span>
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">Sosyal Medya Uzmanları</h3>
                <p className="text-gray-600 mb-4">
                  Instagram, TikTok ve X platformlarında içerik üretimi ve topluluk yönetimi konularında uzman ekibimiz.
                </p>
                <div className="flex justify-center space-x-1">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 text-yellow-500 fill-current" />
                  ))}
                </div>
              </CardContent>
            </Card>

            {/* Team Member 3 */}
            <Card className="hover:shadow-lg transition-shadow">
              <CardContent className="p-8 text-center">
                <div className="w-20 h-20 bg-gradient-to-br from-green-400 to-green-600 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl text-white">👨‍🚀</span>
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">Reklam Uzmanları</h3>
                <p className="text-gray-600 mb-4">
                  Google Ads ve Meta Ads konularında sertifikalı uzmanlarımızla ROI odaklı reklam kampanyaları yürütüyoruz.
                </p>
                <div className="flex justify-center space-x-1">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 text-yellow-500 fill-current" />
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-br from-purple-900 via-purple-800 to-indigo-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-bold text-white mb-6">
            Projenizi Konuşalım
          </h2>
          <p className="text-xl text-purple-100 mb-8 max-w-2xl mx-auto">
            Dijital pazarlama hedeflerinizi gerçekleştirmek için uzman ekibimizle tanışın.
          </p>
          <button className="bg-white text-purple-900 px-8 py-4 rounded-full font-semibold hover:bg-purple-50 transition-colors">
            Ücretsiz Danışmanlık Alın
          </button>
        </div>
      </section>

      <Footer />
    </div>
  );
}