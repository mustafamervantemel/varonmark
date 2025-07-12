import React, { useState } from "react";
import { ExternalLink, ArrowRight } from "lucide-react";

const categories = [
  "Hepsi",
  "E-ticaret",
  "Sosyal Medya",
  "Reklamcılık",
  "Etsy",
  "Trendyol",
  "Instagram",
  "TikTok",
  "Google Ads",
  "Meta Ads",
  "Moda",
  "Teknoloji",
  "Güzellik",
  "Yemek",
  "Eğitim",
  "Sağlık",
  "Finans",
  "Emlak",
];

const projects = [
  {
    category: "Etsy",
    title: "Handmade Jewelry Store",
    description:
      "El yapımı takılar satan bir Etsy mağazası için kapsamlı SEO optimizasyonu ve ürün listeleme hizmetleri. Mağaza trafiğini %300 artırdık.",
    goal: "Amacımız mağazanın organik trafiğini artırmak ve daha fazla satış yapmaktı. Etsy SEO kurallarına uygun ürün başlıkları, açıklamaları ve etiketleri optimize ettik. Profesyonel ürün fotoğrafları çektik ve mağaza görünümünü iyileştirdik.",
    image: "https://via.placeholder.com/600x400/6B46C1/FFFFFF?text=Etsy+Store",
    domain: "https://etsy.com/shop/handmadejewelry",
    stats: {
      traffic: "+300%",
      sales: "+250%",
      keywords: "50+"
    }
  },
  {
    category: "Trendyol",
    title: "Fashion Boutique",
    description:
      "Moda sektöründe faaliyet gösteren bir marka için Trendyol mağaza optimizasyonu ve reklam yönetimi. Satışları %400 artırdık.",
    goal: "Trendyol algoritmasına uygun ürün yönetimi, fiyat stratejisi ve reklam kampanyaları oluşturduk. Mağaza performansını sürekli analiz ederek optimizasyonlar yaptık.",
    image: "https://via.placeholder.com/600x400/F97316/FFFFFF?text=Trendyol+Store",
    domain: "https://trendyol.com/magaza/fashionboutique",
    stats: {
      sales: "+400%",
      clicks: "+200%",
      conversion: "+150%"
    }
  },
  {
    category: "Instagram",
    title: "Beauty Brand",
    description:
      "Güzellik markası için Instagram hesap yönetimi, içerik üretimi ve influencer marketing. Takipçi sayısını 50K'ya çıkardık.",
    goal: "Organik büyüme stratejileri ile marka bilinirliğini artırdık. Düzenli içerik planlaması, story stratejileri ve etkileşim artırıcı kampanyalar yürüttük.",
    image: "https://via.placeholder.com/600x400/E91E63/FFFFFF?text=Instagram+Growth",
    domain: "https://instagram.com/beautybrand",
    stats: {
      followers: "50K+",
      engagement: "+180%",
      reach: "+300%"
    }
  },
  {
    category: "Google Ads",
    title: "E-commerce Website",
    description:
      "Online mağaza için Google Ads kampanyaları yönettik. ROI'yi %500 artırarak reklamcılık maliyetlerini optimize ettik.",
    goal: "Doğru hedef kitle analizi ile etkili reklam kampanyaları oluşturduk. Anahtar kelime araştırması, reklam metinleri ve landing page optimizasyonu yaptık.",
    image: "https://via.placeholder.com/600x400/4285F4/FFFFFF?text=Google+Ads",
    domain: "https://ecommercestore.com",
    stats: {
      roi: "+500%",
      cpc: "-40%",
      conversions: "+250%"
    }
  },
  {
    category: "Meta Ads",
    title: "Restaurant Chain",
    description:
      "Restoran zinciri için Facebook ve Instagram reklamları yönettik. Müşteri sayısını %300 artırdık ve marka bilinirliğini güçlendirdik.",
    goal: "Yerel hedefleme ile doğru müşteri kitlesine ulaştık. Görsel içerikler ve video reklamları ile yüksek etkileşim sağladık.",
    image: "https://via.placeholder.com/600x400/1877F2/FFFFFF?text=Meta+Ads",
    domain: "https://restaurantchain.com",
    stats: {
      customers: "+300%",
      awareness: "+200%",
      orders: "+180%"
    }
  },
  {
    category: "TikTok",
    title: "Fitness Coach",
    description:
      "Fitness antrenörü için TikTok içerik stratejisi ve hesap büyütme. Viral videolar ile 100K+ takipçiye ulaştık.",
    goal: "Trend analizi yaparak viral potansiyeli yüksek içerikler ürettik. Düzenli paylaşım programı ve etkileşim stratejileri uyguladık.",
    image: "https://via.placeholder.com/600x400/000000/FFFFFF?text=TikTok+Growth",
    domain: "https://tiktok.com/@fitnesscoach",
    stats: {
      followers: "100K+",
      views: "5M+",
      engagement: "+400%"
    }
  },
  {
    category: "E-ticaret",
    title: "Tech Store",
    description:
      "Teknoloji ürünleri satan e-ticaret sitesi için kapsamlı dijital pazarlama stratejisi. Tüm kanallardan %350 büyüme sağladık.",
    goal: "Çok kanallı pazarlama stratejisi ile SEO, SEM, sosyal medya ve e-mail marketing'i entegre ettik. Müşteri yolculuğunu optimize ettik.",
    image: "https://via.placeholder.com/600x400/10B981/FFFFFF?text=E-commerce",
    domain: "https://techstore.com",
    stats: {
      revenue: "+350%",
      traffic: "+280%",
      conversion: "+120%"
    }
  },
  {
    category: "Sosyal Medya",
    title: "Travel Agency",
    description:
      "Seyahat acentesi için çok platformlu sosyal medya yönetimi. Tüm hesaplarında toplamda 200K+ takipçiye ulaştık.",
    goal: "Instagram, Facebook, TikTok ve Twitter hesaplarını entegre bir strateji ile yönettik. Seyahat içerikleri ile yüksek etkileşim sağladık.",
    image: "https://via.placeholder.com/600x400/8B5CF6/FFFFFF?text=Social+Media",
    domain: "https://travelagency.com",
    stats: {
      followers: "200K+",
      engagement: "+250%",
      bookings: "+180%"
    }
  }
];

export default function FullPortfolio() {
  const [selectedCategory, setSelectedCategory] = useState("Hepsi");

  const filteredProjects =
    selectedCategory === "Hepsi"
      ? projects
      : projects.filter((p) => p.category === selectedCategory);

  return (
    <section className="bg-gradient-to-br from-gray-50 to-white">
      {/* ÜST BÖLÜM */}
      <div className="py-20 px-6">
        <div className="bg-gradient-to-r from-purple-900 via-purple-800 to-indigo-900 text-white rounded-2xl p-12 flex flex-col lg:flex-row gap-10 max-w-7xl mx-auto">
          {/* Sol taraf */}
          <div className="flex-1 space-y-6">
            <span className="inline-block bg-white/20 backdrop-blur-sm text-sm px-4 py-2 rounded-full border border-white/30">
              • Portfolyo
            </span>
            <h2 className="text-4xl font-bold leading-tight">
              Dijital Pazarlama <br /> Proje Portfolyosu
            </h2>
            <p className="text-purple-100 text-lg">
              Varonmark, dijital pazarlama alanında uzman bir ajansıdır. 5+ yıllık
              tecrübemizle 500'den fazla başarılı proje tamamladık.
              Aşağıda projelerimize göz atabilirsiniz.
            </p>
            <div className="grid grid-cols-3 gap-4 mt-8">
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
                <div className="text-sm text-purple-200">Ortalama Artış</div>
              </div>
            </div>
          </div>

          {/* Sağ taraf görsel */}
          <div className="flex-1 relative">
            <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 border border-white/20">
              <div className="grid grid-cols-2 gap-4">
                <div className="bg-white/10 rounded-lg p-4 text-center">
                  <img src="/src/media/icons8-etsy-color-32.png" alt="Etsy" className="w-8 h-8 mx-auto mb-2" />
                  <div className="text-sm font-semibold">Etsy</div>
                </div>
                <div className="bg-white/10 rounded-lg p-4 text-center">
                  <img src="/src/media/trendyol.jpeg" alt="Trendyol" className="w-8 h-8 mx-auto mb-2 rounded" />
                  <div className="text-sm font-semibold">Trendyol</div>
                </div>
                <div className="bg-white/10 rounded-lg p-4 text-center">
                  <img src="/src/media/icons8-instagram-3d-fluency-32.png" alt="Instagram" className="w-8 h-8 mx-auto mb-2" />
                  <div className="text-sm font-semibold">Instagram</div>
                </div>
                <div className="bg-white/10 rounded-lg p-4 text-center">
                  <img src="/src/media/icons8-google-ads-color-32.png" alt="Google Ads" className="w-8 h-8 mx-auto mb-2" />
                  <div className="text-sm font-semibold">Google Ads</div>
                </div>
              </div>
            </div>
            <div className="absolute -top-4 -right-4 bg-white/20 backdrop-blur-sm text-white px-4 py-2 text-sm rounded-xl shadow-lg border border-white/30">
              500+ proje tamamlandı
            </div>
            <div className="absolute -bottom-4 -left-4 bg-white/20 backdrop-blur-sm text-white px-4 py-2 text-sm rounded-xl shadow-lg border border-white/30">
              5+ Yıllık Tecrübe
            </div>
          </div>
        </div>

        {/* Kategori filtreleri */}
        <div className="max-w-6xl mx-auto mt-12 flex flex-wrap gap-4 justify-center">
          {categories.map((cat, i) => (
            <button
              key={i}
              onClick={() => setSelectedCategory(cat)}
              className={`px-6 py-3 rounded-full text-sm font-medium transition-all ${
                selectedCategory === cat
                  ? "bg-purple-600 text-white shadow-lg"
                  : "bg-white hover:bg-purple-50 text-gray-800 border border-gray-200 hover:border-purple-200"
              }`}
            >
              {cat}
            </button>
          ))}
        </div>
      </div>

      {/* ALT PROJE LİSTESİ */}
      <div className="bg-white py-20 px-6 md:px-16">
        <div className="max-w-7xl mx-auto space-y-16">
          {filteredProjects.length > 0 ? (
            filteredProjects.map((project, index) => (
              <div
                key={index}
                className="flex flex-col lg:flex-row items-center gap-8 p-8 border border-gray-200 rounded-3xl bg-white shadow-lg hover:shadow-xl transition-shadow"
              >
                {/* Görsel */}
                <div className="w-full lg:w-1/2">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="rounded-2xl shadow-sm w-full object-cover h-80"
                  />
                </div>

                {/* İçerik */}
                <div className="w-full lg:w-1/2 space-y-6">
                  <div className="flex items-center gap-3">
                    <span className="inline-block bg-purple-100 text-purple-700 text-sm px-4 py-2 rounded-full font-medium">
                      {project.category}
                    </span>
                    {project.stats && (
                      <div className="flex gap-2">
                        {Object.entries(project.stats).map(([key, value]) => (
                          <span key={key} className="text-xs bg-green-100 text-green-700 px-2 py-1 rounded-full">
                            {value}
                          </span>
                        ))}
                      </div>
                    )}
                  </div>
                  
                  <h3 className="text-3xl font-bold text-gray-900">
                    {project.title}
                  </h3>
                  
                  <p className="text-gray-700 text-lg leading-relaxed">
                    {project.description}
                  </p>
                  
                  <div className="bg-gray-50 rounded-xl p-6">
                    <h4 className="font-semibold text-gray-900 mb-2">Proje Hedefi</h4>
                    <p className="text-gray-600 text-sm leading-relaxed">
                      {project.goal}
                    </p>
                  </div>
                  
                  <a
                    href={project.domain}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 bg-purple-600 hover:bg-purple-700 text-white px-6 py-3 rounded-full font-semibold transition-all hover:scale-105 shadow-lg"
                  >
                    Projeyi İncele
                    <ExternalLink className="w-4 h-4" />
                  </a>
                </div>
              </div>
            ))
          ) : (
            <div className="text-center py-16">
              <div className="text-gray-400 text-6xl mb-4">🔍</div>
              <p className="text-xl text-gray-600 mb-2">Bu kategoriye ait proje bulunamadı</p>
              <p className="text-gray-500">Lütfen farklı bir kategori seçin</p>
            </div>
          )}
        </div>
      </div>
    </section>
  );
}