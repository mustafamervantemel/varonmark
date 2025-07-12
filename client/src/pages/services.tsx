import { Check, Store, Hash, Megaphone, ShoppingBag, TrendingUp, Users, Zap, Star } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import Navigation from "@/components/navigation";
import Footer from "@/components/footer";

export default function ServicesPage() {
  const scrollToContact = () => {
    const element = document.getElementById("contact");
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <div className="min-h-screen">
      <Navigation />
      
      {/* Hero Section */}
      <section className="pt-20 pb-12 bg-gradient-to-br from-blue-900 via-blue-800 to-purple-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <Badge variant="secondary" className="mb-4 bg-white/10 text-white border-white/20">
              Hizmetlerimiz
            </Badge>
            <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">
              Dijital Pazarlama
              <span className="block text-transparent bg-clip-text bg-gradient-to-r from-blue-200 to-purple-200">
                Çözümleri
              </span>
            </h1>
            <p className="text-xl text-blue-100 max-w-3xl mx-auto">
              E-ticaret platformlarından sosyal medya yönetimine, reklam kampanyalarından SEO çalışmalarına kadar geniş bir yelpazede profesyonel hizmet.
            </p>
          </div>
        </div>
      </section>

      {/* Services Overview */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Kapsamlı Dijital Pazarlama Hizmetleri</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Her ihtiyacınız için özel çözümler sunuyoruz. Deneyimli uzman ekibimizle projelerinizde başarı garantisi veriyoruz.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 mb-16">
            <Card className="bg-gradient-to-br from-purple-50 to-purple-100 border-purple-200 hover:shadow-lg transition-all duration-300">
              <CardContent className="p-8 text-center">
                <div className="w-16 h-16 bg-purple-600 rounded-full flex items-center justify-center mx-auto mb-6">
                  <Store className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-4">E-ticaret Çözümleri</h3>
                <p className="text-gray-600">
                  Etsy ve Trendyol platformlarında mağaza kurulumu, ürün yönetimi ve satış optimizasyonu.
                </p>
              </CardContent>
            </Card>

            <Card className="bg-gradient-to-br from-blue-50 to-blue-100 border-blue-200 hover:shadow-lg transition-all duration-300">
              <CardContent className="p-8 text-center">
                <div className="w-16 h-16 bg-blue-500 rounded-full flex items-center justify-center mx-auto mb-6">
                  <Hash className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-4">Sosyal Medya Yönetimi</h3>
                <p className="text-gray-600">
                  Instagram, TikTok ve X platformlarında profesyonel içerik üretimi ve topluluk yönetimi.
                </p>
              </CardContent>
            </Card>

            <Card className="bg-gradient-to-br from-green-50 to-green-100 border-green-200 hover:shadow-lg transition-all duration-300">
              <CardContent className="p-8 text-center">
                <div className="w-16 h-16 bg-green-500 rounded-full flex items-center justify-center mx-auto mb-6">
                  <Megaphone className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-4">Reklam Kampanyaları</h3>
                <p className="text-gray-600">
                  Google Ads ve Meta Ads ile ROI odaklı, hedefli reklam kampanyaları ve optimizasyon.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Detailed Services */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Hizmet Paketlerimiz</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              İhtiyacınıza uygun paket seçin ve dijital pazarlama hedeflerinize ulaşın.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {/* Etsy Account Setup */}
            <Card className="bg-gradient-to-br from-purple-50 to-purple-100 border-purple-200 hover:shadow-lg transition-all duration-300">
              <CardContent className="p-8">
                <div className="w-16 h-16 bg-purple-600 rounded-full flex items-center justify-center mb-6">
                  <ShoppingBag className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3">Etsy Hesap Açılışı</h3>
                <p className="text-gray-600 mb-6">Profesyonel Etsy mağazanız için tam kurulum hizmeti.</p>
                <div className="flex items-baseline mb-6">
                  <span className="text-3xl font-bold text-purple-600">800₺</span>
                  <span className="text-gray-500 ml-2">tek seferlik</span>
                </div>
                <ul className="text-sm text-gray-600 space-y-2 mb-6">
                  <li className="flex items-center">
                    <Check className="w-4 h-4 text-purple-600 mr-2" />
                    Hesap kurulumu
                  </li>
                  <li className="flex items-center">
                    <Check className="w-4 h-4 text-purple-600 mr-2" />
                    Mağaza tasarımı
                  </li>
                  <li className="flex items-center">
                    <Check className="w-4 h-4 text-purple-600 mr-2" />
                    İlk ürün yüklemesi
                  </li>
                  <li className="flex items-center">
                    <Check className="w-4 h-4 text-purple-600 mr-2" />
                    SEO optimizasyonu
                  </li>
                </ul>
                <button 
                  onClick={scrollToContact}
                  className="w-full bg-purple-600 hover:bg-purple-700 text-white py-3 rounded-full font-semibold transition-colors"
                >
                  Hemen Başla
                </button>
              </CardContent>
            </Card>

            {/* Etsy Store Assistant */}
            <Card className="bg-gradient-to-br from-blue-50 to-blue-100 border-blue-200 hover:shadow-lg transition-all duration-300 relative">
              <div className="absolute -top-3 left-1/2 transform -translate-x-1/2">
                <Badge className="bg-blue-500 text-white px-3 py-1 text-xs font-semibold">
                  <Star className="w-3 h-3 mr-1" />
                  En Popüler
                </Badge>
              </div>
              <CardContent className="p-8">
                <div className="w-16 h-16 bg-blue-500 rounded-full flex items-center justify-center mb-6">
                  <Store className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3">Etsy Mağaza Yardımcısı</h3>
                <p className="text-gray-600 mb-6">Aylık profesyonel mağaza yönetimi ve ürün optimizasyonu.</p>
                <div className="flex items-baseline mb-6">
                  <span className="text-3xl font-bold text-blue-500">5.000₺</span>
                  <span className="text-gray-500 ml-2">/ay</span>
                </div>
                <ul className="text-sm text-gray-600 space-y-2 mb-6">
                  <li className="flex items-center">
                    <Check className="w-4 h-4 text-blue-500 mr-2" />
                    Ürün yükleme
                  </li>
                  <li className="flex items-center">
                    <Check className="w-4 h-4 text-blue-500 mr-2" />
                    SEO optimizasyonu
                  </li>
                  <li className="flex items-center">
                    <Check className="w-4 h-4 text-blue-500 mr-2" />
                    Mağaza düzenlemesi
                  </li>
                  <li className="flex items-center">
                    <Check className="w-4 h-4 text-blue-500 mr-2" />
                    Performans raporları
                  </li>
                </ul>
                <button 
                  onClick={scrollToContact}
                  className="w-full bg-blue-500 hover:bg-blue-600 text-white py-3 rounded-full font-semibold transition-colors"
                >
                  Başlayın
                </button>
              </CardContent>
            </Card>

            {/* Social Media Management */}
            <Card className="bg-gradient-to-br from-pink-50 to-pink-100 border-pink-200 hover:shadow-lg transition-all duration-300">
              <CardContent className="p-8">
                <div className="w-16 h-16 bg-pink-500 rounded-full flex items-center justify-center mb-6">
                  <Hash className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3">Sosyal Medya Yönetimi</h3>
                <p className="text-gray-600 mb-6">Instagram, TikTok ve X hesaplarınız için profesyonel yönetim.</p>
                <div className="flex items-baseline mb-6">
                  <span className="text-3xl font-bold text-pink-500">7.500₺</span>
                  <span className="text-gray-500 ml-2">/ay</span>
                </div>
                <ul className="text-sm text-gray-600 space-y-2 mb-6">
                  <li className="flex items-center">
                    <Check className="w-4 h-4 text-pink-500 mr-2" />
                    İçerik üretimi
                  </li>
                  <li className="flex items-center">
                    <Check className="w-4 h-4 text-pink-500 mr-2" />
                    Hashtag stratejisi
                  </li>
                  <li className="flex items-center">
                    <Check className="w-4 h-4 text-pink-500 mr-2" />
                    Community management
                  </li>
                  <li className="flex items-center">
                    <Check className="w-4 h-4 text-pink-500 mr-2" />
                    Analytics raporları
                  </li>
                </ul>
                <button 
                  onClick={scrollToContact}
                  className="w-full bg-pink-500 hover:bg-pink-600 text-white py-3 rounded-full font-semibold transition-colors"
                >
                  Başlayın
                </button>
              </CardContent>
            </Card>

            {/* Advertising Services */}
            <Card className="bg-gradient-to-br from-green-50 to-green-100 border-green-200 hover:shadow-lg transition-all duration-300">
              <CardContent className="p-8">
                <div className="w-16 h-16 bg-green-500 rounded-full flex items-center justify-center mb-6">
                  <Megaphone className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3">Reklamcılık Hizmetleri</h3>
                <p className="text-gray-600 mb-6">Google Ads ve Meta Ads ile hedefli reklam kampanyaları.</p>
                <div className="flex items-baseline mb-6">
                  <span className="text-3xl font-bold text-green-500">3.750₺</span>
                  <span className="text-gray-500 ml-2">/ay</span>
                </div>
                <ul className="text-sm text-gray-600 space-y-2 mb-6">
                  <li className="flex items-center">
                    <Check className="w-4 h-4 text-green-500 mr-2" />
                    Kampanya kurulumu
                  </li>
                  <li className="flex items-center">
                    <Check className="w-4 h-4 text-green-500 mr-2" />
                    Hedef kitle analizi
                  </li>
                  <li className="flex items-center">
                    <Check className="w-4 h-4 text-green-500 mr-2" />
                    A/B testler
                  </li>
                  <li className="flex items-center">
                    <Check className="w-4 h-4 text-green-500 mr-2" />
                    ROI optimizasyonu
                  </li>
                </ul>
                <button 
                  onClick={scrollToContact}
                  className="w-full bg-green-500 hover:bg-green-600 text-white py-3 rounded-full font-semibold transition-colors"
                >
                  Başlayın
                </button>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Trendyol Services */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Trendyol Hizmetleri</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Etsy için sunduğumuz tüm hizmetler aynı kalite ve fiyatlarla Trendyol için de mevcuttur.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            <Card className="bg-gradient-to-br from-purple-50 to-purple-100 border-purple-200 hover:shadow-lg transition-all duration-300">
              <CardContent className="p-8">
                <div className="w-16 h-16 bg-purple-600 rounded-full flex items-center justify-center mb-6">
                  <ShoppingBag className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3">Trendyol Hesap Açılışı</h3>
                <p className="text-gray-600 mb-6">Profesyonel Trendyol mağazanız için tam kurulum hizmeti.</p>
                <div className="flex items-baseline mb-6">
                  <span className="text-3xl font-bold text-purple-600">800₺</span>
                  <span className="text-gray-500 ml-2">tek seferlik</span>
                </div>
                <ul className="text-sm text-gray-600 space-y-2 mb-6">
                  <li className="flex items-center">
                    <Check className="w-4 h-4 text-purple-600 mr-2" />
                    Hesap kurulumu ve doğrulama
                  </li>
                  <li className="flex items-center">
                    <Check className="w-4 h-4 text-purple-600 mr-2" />
                    Mağaza tasarımı
                  </li>
                  <li className="flex items-center">
                    <Check className="w-4 h-4 text-purple-600 mr-2" />
                    İlk ürün yüklemesi
                  </li>
                  <li className="flex items-center">
                    <Check className="w-4 h-4 text-purple-600 mr-2" />
                    Kategori optimizasyonu
                  </li>
                </ul>
                <button 
                  onClick={scrollToContact}
                  className="w-full bg-purple-600 hover:bg-purple-700 text-white py-3 rounded-full font-semibold transition-colors"
                >
                  Hemen Başla
                </button>
              </CardContent>
            </Card>

            <Card className="bg-gradient-to-br from-blue-50 to-blue-100 border-blue-200 hover:shadow-lg transition-all duration-300">
              <CardContent className="p-8">
                <div className="w-16 h-16 bg-blue-500 rounded-full flex items-center justify-center mb-6">
                  <Store className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3">Trendyol Mağaza Yardımcısı</h3>
                <p className="text-gray-600 mb-6">Aylık profesyonel mağaza yönetimi ve ürün optimizasyonu.</p>
                <div className="flex items-baseline mb-6">
                  <span className="text-3xl font-bold text-blue-500">5.000₺</span>
                  <span className="text-gray-500 ml-2">/ay</span>
                </div>
                <ul className="text-sm text-gray-600 space-y-2 mb-6">
                  <li className="flex items-center">
                    <Check className="w-4 h-4 text-blue-500 mr-2" />
                    Ürün yükleme ve yönetimi
                  </li>
                  <li className="flex items-center">
                    <Check className="w-4 h-4 text-blue-500 mr-2" />
                    Fiyat optimizasyonu
                  </li>
                  <li className="flex items-center">
                    <Check className="w-4 h-4 text-blue-500 mr-2" />
                    Stok takibi
                  </li>
                  <li className="flex items-center">
                    <Check className="w-4 h-4 text-blue-500 mr-2" />
                    Satış raporları
                  </li>
                </ul>
                <button 
                  onClick={scrollToContact}
                  className="w-full bg-blue-500 hover:bg-blue-600 text-white py-3 rounded-full font-semibold transition-colors"
                >
                  Başlayın
                </button>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Why Choose Our Services */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Neden Hizmetlerimizi Seçmelisiniz?</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Profesyonel ekibimiz ve kanıtlanmış yöntemlerimizle işinizi bir üst seviyeye taşıyoruz.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <Card className="bg-white hover:shadow-lg transition-shadow">
              <CardContent className="p-8 text-center">
                <div className="w-16 h-16 bg-purple-600 rounded-full flex items-center justify-center mx-auto mb-6">
                  <TrendingUp className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-4">Kanıtlanmış Sonuçlar</h3>
                <p className="text-gray-600">
                  500+ başarılı proje ve %300 ortalama satış artışı ile müşterilerimize değer katıyoruz.
                </p>
              </CardContent>
            </Card>

            <Card className="bg-white hover:shadow-lg transition-shadow">
              <CardContent className="p-8 text-center">
                <div className="w-16 h-16 bg-blue-500 rounded-full flex items-center justify-center mx-auto mb-6">
                  <Users className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-4">Uzman Ekip</h3>
                <p className="text-gray-600">
                  Google, Meta ve platform sertifikalarına sahip 100+ uzman ile projelerinizi yönetiyoruz.
                </p>
              </CardContent>
            </Card>

            <Card className="bg-white hover:shadow-lg transition-shadow">
              <CardContent className="p-8 text-center">
                <div className="w-16 h-16 bg-green-500 rounded-full flex items-center justify-center mx-auto mb-6">
                  <Zap className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-4">Hızlı Başlangıç</h3>
                <p className="text-gray-600">
                  Projenizi 24 saat içinde başlatıyor, ilk sonuçları 7 gün içinde görmenizi sağlıyoruz.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-br from-blue-900 via-blue-800 to-purple-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-bold text-white mb-6">
            Projenizi Bugün Başlatalım
          </h2>
          <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
            Dijital pazarlama hedeflerinize ulaşmak için uzman ekibimizle çalışmaya başlayın.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button 
              onClick={scrollToContact}
              className="bg-white text-blue-900 px-8 py-4 rounded-full font-semibold hover:bg-blue-50 transition-colors"
            >
              Ücretsiz Danışmanlık Alın
            </button>
            <button className="bg-blue-500 text-white px-8 py-4 rounded-full font-semibold hover:bg-blue-600 transition-colors">
              Hizmetler Hakkında Bilgi
            </button>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}