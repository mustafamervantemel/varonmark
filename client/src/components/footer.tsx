import { TrendingUp, Instagram, Linkedin, Twitter } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-white py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-4 gap-8">
          <div>
            <div className="text-2xl font-bold text-purple-400 mb-4 flex items-center">
              <TrendingUp className="w-8 h-8 mr-2" />
              Varonmark
            </div>
            <p className="text-gray-400 mb-4">
              Dijital pazarlama alanında güvenilir çözüm ortağınız.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-400 hover:text-purple-400 transition-colors">
                <Instagram className="w-5 h-5" />
              </a>
              <a href="#" className="text-gray-400 hover:text-purple-400 transition-colors">
                <Linkedin className="w-5 h-5" />
              </a>
              <a href="#" className="text-gray-400 hover:text-purple-400 transition-colors">
                <Twitter className="w-5 h-5" />
              </a>
            </div>
          </div>
          
          <div>
            <h3 className="font-semibold mb-4">Hizmetler</h3>
            <ul className="space-y-2 text-gray-400">
              <li><a href="#services" className="hover:text-white transition-colors">Etsy Hesap Açılışı</a></li>
              <li><a href="#services" className="hover:text-white transition-colors">Etsy Mağaza Yönetimi</a></li>
              <li><a href="#services" className="hover:text-white transition-colors">Sosyal Medya Yönetimi</a></li>
              <li><a href="#services" className="hover:text-white transition-colors">Reklamcılık</a></li>
              <li><a href="#services" className="hover:text-white transition-colors">Trendyol Hizmetleri</a></li>
            </ul>
          </div>
          
          <div>
            <h3 className="font-semibold mb-4">Şirket</h3>
            <ul className="space-y-2 text-gray-400">
              <li><a href="#about" className="hover:text-white transition-colors">Hakkımızda</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Referanslar</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Blog</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Kariyer</a></li>
            </ul>
          </div>
          
          <div>
            <h3 className="font-semibold mb-4">İletişim</h3>
            <ul className="space-y-2 text-gray-400">
              <li>+90 (555) 123 45 67</li>
              <li>info@varonmark.com</li>
              <li>İstanbul, Türkiye</li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400">
          <p>&copy; 2024 Varonmark. Tüm hakları saklıdır.</p>
        </div>
      </div>
    </footer>
  );
}
