import { ExternalLink } from "lucide-react";

interface Partner {
  id: number;
  brandName: string;
  brandLogo: string;
  platformType: "etsy" | "trendyol" | "instagram" | "website";
  platformLogo: string;
  url: string;
  description: string;
}

export default function PartnersShowcase() {
  const partners: Partner[] = [
    {
      id: 1,
      brandName: "MiraGiftShop",
      brandLogo: "/brand-logo/miragift.png",
      platformType: "etsy",
      platformLogo: "/src/media/icons8-etsy-color-32.png",
      url: "https://www.etsy.com/shop/MiraGiftShop?ref=shop-header-name&listing_id=1710484991&from_page=listing",
      description: "Kişiye Özel Hediye Mağazası - Etsy'de %80 satış artışı"
    },
    {
      id: 2,
      brandName: "BARYADESIGN",
      brandLogo: "/src/brand/BARYADESIGN.png",
      platformType: "etsy",
      platformLogo: "/src/media/icons8-etsy-color-32.png",
      url: "https://www.etsy.com/shop/BARYADESIGN?ref=shop-header-name&listing_id=1174946911&from_page=listing",
      description: "Değerli Taş Takıcısı - Etsy'de mağaza optimizasyonu"
    },
    {
      id: 3,
      brandName: "Popizone",
      brandLogo: "",
      platformType: "trendyol",
      platformLogo: "/src/media/trendyol.jpeg",
      url: "https://trendyol.com/magaza/fashionstore",
      description: "E-Ticaret Mağazası - Trendyol'da %250 satış artışı"
    },
    {
      id: 4,
      brandName: "Zeysel Store",
      brandLogo: "/src/brand/ZeyselStore.png",
      platformType: "trendyol",
      platformLogo: "/src/media/trendyol.jpeg",
      url: "https://www.trendyol.com/magaza/zeysel-store-m-1108376?sst=0",
      description: "E-Ticaret Mağazası - Trendyol SEO ve reklam hizmetleri"
    },
    {
      id: 5,
      brandName: "Ada Smile Studio",
      brandLogo: "/src/brand/AdaSmileStudio.png",
      platformType: "instagram",
      platformLogo: "/src/media/icons8-instagram-3d-fluency-32.png",
      url: "https://instagram.com/beautybrand",
      description: "Diş Hekimliği Kliniği - Instagram'da %50 müşteri artışı"
    },
    {
      id: 6,
      brandName: "Popizone",
      brandLogo: "/src/brand/Popizone.png",
      platformType: "instagram",
      platformLogo: "/src/media/icons8-instagram-3d-fluency-32.png",
      url: "https://www.instagram.com/popizone_/",
      description: "E-Ticaret Mağazası - Instagram içerik ve büyüme stratejisi"
    },
    {
      id: 7,
      brandName: "Ubuntu Yatırım",
      brandLogo: "/src/brand/UbuntuYatirim.png",
      platformType: "website",
      platformLogo: "/src/media/icons8-meta-windows-11-color-32.png",
      url: "https://www.ubuntuyatirim.com",
      description: "Finansal Hizmetler - Meta Ads ile %80 müşteri artışı"
    },
    {
      id: 8,
      brandName: "Ada Smile Studio",
      brandLogo: "/src/brand/AdaSmileStudio.png",
      platformType: "website",
      platformLogo: "/src/media/icons8-meta-windows-11-color-32.png",
      url: "https://www.adasmilestudio.com",
      description: "Diş Hekimliği Kliniği - Google & Meta Ads kampanyaları"
    }
  ];

  const handleCardClick = (url: string) => {
    window.open(url, '_blank', 'noopener,noreferrer');
  };

  return (
    <section className="py-20 bg-gradient-to-br from-purple-50 to-indigo-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            Bizimle Çalışan Firmalar
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Farklı sektörlerden markalar bizimle çalışarak dijital pazarlama hedeflerine ulaştı
          </p>
        </div>

        <div className="overflow-x-auto scrollbar-hide">
          <div className="flex items-center gap-8 pb-4" style={{ width: 'max-content' }}>
            {partners.map((partner) => (
              <div
                key={partner.id}
                onClick={() => handleCardClick(partner.url)}
                className="bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 cursor-pointer group transform hover:scale-105 border border-gray-100 min-w-[300px] flex-shrink-0"
              >
              <div className="p-8">
                {/* Brand Logo */}
                <div className="flex justify-center mb-6">
                  <div className="w-32 h-16 bg-gray-100 rounded-lg flex items-center justify-center overflow-hidden">
                    <img
                      src={partner.brandLogo}
                      alt={partner.brandName}
                      className="w-full h-full object-contain"
                    />
                  </div>
                </div>

                {/* Brand Name */}
                <h3 className="text-xl font-semibold text-gray-900 text-center mb-4">
                  {partner.brandName}
                </h3>

                {/* Platform Info */}
                <div className="flex items-center justify-center mb-4">
                  <div className="flex items-center space-x-2 bg-gray-50 rounded-full px-4 py-2">
                    <img
                      src={partner.platformLogo}
                      alt={partner.platformType}
                      className="w-6 h-6 object-contain"
                    />
                    <span className="text-sm font-medium text-gray-700 capitalize">
                      {partner.platformType === "website" ? "Web Sitesi" : partner.platformType}
                    </span>
                  </div>
                </div>

                {/* Description */}
                <p className="text-gray-600 text-center text-sm mb-6 leading-relaxed">
                  {partner.description}
                </p>

                {/* Visit Link */}
                <div className="flex items-center justify-center">
                  <div className="flex items-center space-x-2 text-purple-600 group-hover:text-purple-700 transition-colors">
                    <span className="text-sm font-medium">Ziyaret Et</span>
                    <ExternalLink className="w-4 h-4" />
                  </div>
                </div>
              </div>

              {/* Hover Effect Indicator */}
              <div className="absolute inset-0 rounded-2xl border-2 border-transparent group-hover:border-purple-200 transition-all duration-300"></div>
            </div>
          ))}
          </div>
        </div>

        {/* Bottom CTA */}
        <div className="text-center mt-16">
          <p className="text-lg text-gray-600 mb-6">
            Siz de işinizi bir sonraki seviyeye taşımak için bizimle çalışın
          </p>
          <button className="bg-purple-600 hover:bg-purple-700 text-white px-8 py-3 rounded-full text-lg font-semibold transition-all hover:scale-105 shadow-lg">
            Ücretsiz Danışmanlık Alın
          </button>
        </div>
      </div>

      <style>{`
        .scrollbar-hide {
          -ms-overflow-style: none;
          scrollbar-width: none;
        }
        .scrollbar-hide::-webkit-scrollbar {
          display: none;
        }
      `}</style>
    </section>
  );
}