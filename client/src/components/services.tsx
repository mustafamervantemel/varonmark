import { Check, Store, Hash, Megaphone, ShoppingBag } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

export default function Services() {
  const scrollToContact = () => {
    const element = document.getElementById("contact");
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section id="services" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">Hizmetlerimiz</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Dijital pazarlama alanında kapsamlı çözümler sunuyoruz. Her hizmetimiz deneyimli uzmanlar tarafından yürütülür.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Etsy Account Setup */}
          <Card className="bg-gradient-to-br from-purple-50 to-purple-100 border-purple-200 hover:shadow-lg transition-shadow">
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
          <Card className="bg-gradient-to-br from-blue-50 to-blue-100 border-blue-200 hover:shadow-lg transition-shadow relative">
            <div className="absolute -top-3 left-1/2 transform -translate-x-1/2">
              <span className="bg-blue-500 text-white px-3 py-1 rounded-full text-xs font-semibold">En Popüler</span>
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
          <Card className="bg-gradient-to-br from-pink-50 to-pink-100 border-pink-200 hover:shadow-lg transition-shadow">
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
                  Hash stratejisi
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
          <Card className="bg-gradient-to-br from-green-50 to-green-100 border-green-200 hover:shadow-lg transition-shadow">
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

        {/* Additional Service Info */}
        <div className="mt-16 text-center">
          <Card className="bg-gray-50">
            <CardContent className="p-8">
              <h3 className="text-2xl font-semibold text-gray-900 mb-4">Trendyol Hizmetleri</h3>
              <p className="text-gray-600 mb-6">
                Etsy için sunduğumuz tüm hizmetler aynı kalite ve fiyatlarla Trendyol için de mevcuttur.
              </p>
              <div className="grid md:grid-cols-2 gap-6">
                <Card className="bg-white shadow-sm">
                  <CardContent className="p-6">
                    <h4 className="font-semibold text-gray-900 mb-2">Trendyol Hesap Açılışı</h4>
                    <p className="text-purple-600 font-bold text-xl">800₺</p>
                  </CardContent>
                </Card>
                <Card className="bg-white shadow-sm">
                  <CardContent className="p-6">
                    <h4 className="font-semibold text-gray-900 mb-2">Trendyol Mağaza Yardımcısı</h4>
                    <p className="text-blue-500 font-bold text-xl">5.000₺/ay</p>
                  </CardContent>
                </Card>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
}
