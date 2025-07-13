import { Mail, Phone, MapPin, ExternalLink, Heart } from "lucide-react";
import { useLocation } from "wouter";

export default function Footer() {
  const [, navigate] = useLocation();

  const handleNavigation = (path: string) => {
    navigate(path);
  };


  const services = [
    { name: "Etsy Hesap Açılışı", path: "/service-etsy" },
    { name: "Etsy Mağaza Yönetimi", path: "/service-etsy" },
    { name: "Trendyol Hizmetleri", path: "/service-trendyol" },
    { name: "Sosyal Medya Yönetimi", path: "/service-sosyalmedya" },
    { name: "Reklamcılık Hizmetleri", path: "/service-reklamcilik" }
  ];

  const companyLinks = [
    { name: "Hakkımızda", path: "/about" },
    { name: "Portfolyo", path: "/portfolio" },
    { name: "Hizmetler", path: "/services" },
    { name: "İletişim", path: "/contact" }
  ];

  return (
    <footer className="bg-gradient-to-br from-purple-900 via-indigo-900 to-blue-900 text-white relative overflow-hidden">
      {/* Background decorations */}
      <div className="absolute inset-0">
        <div className="absolute top-0 right-0 w-96 h-96 bg-white/5 rounded-full -translate-y-48 translate-x-48"></div>
        <div className="absolute bottom-0 left-0 w-64 h-64 bg-white/5 rounded-full translate-y-32 -translate-x-32"></div>
      </div>

      <div className="relative z-10">
        {/* Main Footer Content */}
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div className="grid lg:grid-cols-4 md:grid-cols-2 gap-6">
            
            {/* Logo and Description */}
            <div className="lg:col-span-1">
              <div className="mb-6">
                <img 
                  src="/media/VARONMARK-2.svg" 
                  alt="Varonmark Logo" 
                  className="h-20 w-auto"
                />
              </div>
              <p className="text-purple-200 mb-4 leading-relaxed text-sm">
                Dijital pazarlama alanında güvenilir çözüm ortağınız.
              </p>
              
              {/* Contact Info */}
              <div className="space-y-2 mb-4">
                <div className="flex items-center text-purple-200">
                  <Phone className="w-3 h-3 mr-2 text-yellow-400" />
                  <span className="text-xs">+90 (530) 562 91 26</span>
                </div>
                <div className="flex items-center text-purple-200">
                  <Mail className="w-3 h-3 mr-2 text-yellow-400" />
                  <span className="text-xs">info@varonmark.com</span>
                </div>
                <div className="flex items-center text-purple-200">
                  <MapPin className="w-3 h-3 mr-2 text-yellow-400" />
                  <span className="text-xs">İstanbul, Pendik</span>
                </div>
              </div>

            </div>
            
            {/* Services */}
            <div>
              <h3 className="text-xl font-bold mb-6 text-white">Hizmetlerimiz</h3>
              <ul className="space-y-3">
                {services.map((service, index) => (
                  <li key={index}>
                    <button
                      onClick={() => handleNavigation(service.path)}
                      className="text-purple-200 hover:text-yellow-400 transition-colors text-sm flex items-center group"
                    >
                      <ExternalLink className="w-3 h-3 mr-2 opacity-0 group-hover:opacity-100 transition-opacity" />
                      {service.name}
                    </button>
                  </li>
                ))}
              </ul>
            </div>
            
            {/* Company */}
            <div>
              <h3 className="text-xl font-bold mb-6 text-white">Şirket</h3>
              <ul className="space-y-3">
                {companyLinks.map((link, index) => (
                  <li key={index}>
                    <button
                      onClick={() => handleNavigation(link.path)}
                      className="text-purple-200 hover:text-yellow-400 transition-colors text-sm flex items-center group"
                    >
                      <ExternalLink className="w-3 h-3 mr-2 opacity-0 group-hover:opacity-100 transition-opacity" />
                      {link.name}
                    </button>
                  </li>
                ))}
              </ul>
            </div>
            
            {/* Newsletter */}
            <div>
              <h3 className="text-xl font-bold mb-6 text-white">Bülten</h3>
              <p className="text-purple-200 mb-4 text-sm">
                Dijital pazarlama ipuçları ve son güncellemeler için abone olun.
              </p>
              <div className="flex flex-col space-y-3">
                <input 
                  type="email" 
                  placeholder="E-posta adresiniz"
                  className="bg-white/10 border border-white/20 rounded-lg px-4 py-3 text-white placeholder-white/60 focus:outline-none focus:border-yellow-400 transition-colors backdrop-blur-sm"
                />
                <button className="bg-gradient-to-r from-yellow-400 to-orange-500 text-purple-900 px-6 py-3 rounded-lg font-semibold hover:scale-105 transition-all shadow-lg">
                  Abone Ol
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="border-t border-white/10">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
            <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
              
              {/* Copyright */}
              <div className="text-purple-200 text-sm">
                <p>&copy; 2024 Varonmark. Tüm hakları saklıdır.</p>
              </div>

              {/* Development Credit */}
              <div className="flex items-center text-purple-200 text-sm">
                <span>Bu web sitesi</span>
                <Heart className="w-4 h-4 mx-2 text-red-400 fill-current" />
                <span>ile</span>
                <a 
                  href="https://varonsoft.com" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="ml-2 text-yellow-400 hover:text-yellow-300 transition-colors font-semibold flex items-center group"
                >
                  Varonsoft.com
                  <ExternalLink className="w-3 h-3 ml-1 group-hover:translate-x-1 transition-transform" />
                </a>
                <span className="ml-2">tarafından geliştirildi</span>
              </div>

              {/* Quick Links */}
              <div className="flex space-x-6 text-sm">
                <a href="#" className="text-purple-200 hover:text-yellow-400 transition-colors">
                  Gizlilik Politikası
                </a>
                <a href="#" className="text-purple-200 hover:text-yellow-400 transition-colors">
                  Kullanım Şartları
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}