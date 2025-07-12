import Navigation from "@/components/navigation";
import EtsyPackages from "@/components/etsy-packages";
import Footer from "@/components/footer";

export default function EtsyPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-50 to-white">
      <Navigation />
      
      <main className="pt-16">
        <div className="bg-gradient-to-r from-purple-600 to-purple-800 text-white py-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center">
              <div className="flex items-center justify-center mb-4">
                <img src="/media/icons8-etsy-color-96.png" alt="Etsy" className="w-16 h-16 mr-4" />
                <h1 className="text-4xl font-bold">Etsy Hizmetlerimiz</h1>
              </div>
              <p className="text-xl text-purple-100 max-w-3xl mx-auto">
                Etsy'de global pazarda yerinizi alın ve yaratıcı ürünlerinizi dünyaya tanıtın
              </p>
            </div>
          </div>
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          {/* Etsy Hizmet Paketleri */}
          <EtsyPackages />
          
          <div className="py-16">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-white rounded-lg shadow-lg p-6">
              <div className="text-yellow-600 mb-4">
                <svg className="w-12 h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-3 text-purple-900">Mağaza Kurulumu</h3>
              <p className="text-purple-700">
                Etsy'de profesyonel mağaza kurulumu, banner tasarımı ve mağaza politikalarının oluşturulması.
              </p>
            </div>

            <div className="bg-white rounded-lg shadow-lg p-6">
              <div className="text-yellow-600 mb-4">
                <svg className="w-12 h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-3 text-purple-900">Ürün Fotoğrafçılığı</h3>
              <p className="text-purple-700">
                Etsy standartlarına uygun ürün fotoğrafı çekimi ve düzenlemesi. Lifestyle ve stüdyo çekimleri.
              </p>
            </div>

            <div className="bg-white rounded-lg shadow-lg p-6">
              <div className="text-yellow-600 mb-4">
                <svg className="w-12 h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 7h.01M7 3h5c.512 0 1.024.195 1.414.586l7 7a2 2 0 010 2.828l-7 7a2 2 0 01-2.828 0l-7-7A1.994 1.994 0 013 12V7a4 4 0 014-4z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-3 text-purple-900">SEO Optimizasyonu</h3>
              <p className="text-purple-700">
                Etsy SEO optimizasyonu, anahtar kelime araştırması ve listing optimizasyonu hizmetleri.
              </p>
            </div>

            <div className="bg-white rounded-lg shadow-lg p-6">
              <div className="text-yellow-600 mb-4">
                <svg className="w-12 h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-3 text-purple-900">Listing Yazımı</h3>
              <p className="text-purple-700">
                Etsy'e özel ürün açıklamaları, başlıklar ve etiketler. Satış odaklı içerik yazımı.
              </p>
            </div>

            <div className="bg-white rounded-lg shadow-lg p-6">
              <div className="text-yellow-600 mb-4">
                <svg className="w-12 h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-3 text-purple-900">Etsy Ads Yönetimi</h3>
              <p className="text-purple-700">
                Etsy reklamları kurulumu, yönetimi ve optimizasyonu. ROI odaklı kampanya stratejileri.
              </p>
            </div>

            <div className="bg-white rounded-lg shadow-lg p-6">
              <div className="text-yellow-600 mb-4">
                <svg className="w-12 h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-3 text-purple-900">Global Pazarlama</h3>
              <p className="text-purple-700">
                Uluslararası pazarlara açılma stratejileri, çoklu dil desteği ve kültürel adaptasyon.
              </p>
            </div>
          </div>

          <div className="mt-16 bg-white rounded-lg shadow-lg p-8">
            <h2 className="text-3xl font-bold text-center mb-8 text-purple-900">Etsy Başarı Stratejimiz</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              <div className="text-center">
                <div className="bg-yellow-100 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                  <span className="text-purple-600 font-bold text-xl">1</span>
                </div>
                <h4 className="font-semibold mb-2 text-purple-900">Araştırma</h4>
                <p className="text-purple-600 text-sm">Pazar araştırması ve rakip analizi</p>
              </div>
              <div className="text-center">
                <div className="bg-yellow-100 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                  <span className="text-purple-600 font-bold text-xl">2</span>
                </div>
                <h4 className="font-semibold mb-2 text-purple-900">Optimizasyon</h4>
                <p className="text-purple-600 text-sm">Mağaza ve ürün optimizasyonu</p>
              </div>
              <div className="text-center">
                <div className="bg-yellow-100 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                  <span className="text-purple-600 font-bold text-xl">3</span>
                </div>
                <h4 className="font-semibold mb-2 text-purple-900">Tanıtım</h4>
                <p className="text-purple-600 text-sm">Etsy Ads ve organik tanıtım</p>
              </div>
              <div className="text-center">
                <div className="bg-yellow-100 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                  <span className="text-purple-600 font-bold text-xl">4</span>
                </div>
                <h4 className="font-semibold mb-2 text-purple-900">Büyüme</h4>
                <p className="text-purple-600 text-sm">Sürekli analiz ve iyileştirme</p>
              </div>
            </div>
          </div>

          <div className="mt-16 bg-gradient-to-r from-purple-600 to-purple-800 text-white rounded-lg p-8">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
              <div>
                <h2 className="text-3xl font-bold mb-4">Etsy'de Satış Rekorları Kırın!</h2>
                <p className="text-purple-100 mb-6">
                  El yapımı ürünlerinizi global pazarda doğru şekilde konumlandırın. Müşterilerimiz ortalama 3 ay içinde satışlarını %200 artırıyor.
                </p>
                <div className="space-y-3">
                  <div className="flex items-center space-x-3">
                    <svg className="w-5 h-5 text-yellow-200" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                    <span>Anahtar kelime optimizasyonu</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <svg className="w-5 h-5 text-yellow-200" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                    <span>Profesyonel ürün fotoğrafları</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <svg className="w-5 h-5 text-yellow-200" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                    <span>Etsy algoritma optimizasyonu</span>
                  </div>
                </div>
              </div>
              <div className="text-center">
                <div className="bg-white/20 rounded-lg p-6 backdrop-blur-sm">
                  <h3 className="text-2xl font-bold mb-2">%200+</h3>
                  <p className="text-purple-100">Ortalama Satış Artışı</p>
                </div>
              </div>
            </div>
          </div>

          <div className="mt-16 text-center">
            <h2 className="text-3xl font-bold mb-4 text-purple-900">Etsy Yolculuğunuz Başlasın!</h2>
            <p className="text-purple-700 mb-8 max-w-2xl mx-auto">
              Yaratıcı ürünlerinizi global pazarda doğru şekilde konumlandırın. Uzman ekibimizle Etsy'de başarı hikayenizi yazın.
            </p>
            <button className="bg-purple-600 hover:bg-purple-700 text-white px-8 py-3 rounded-full text-lg font-medium transition-colors">
              Ücretsiz Etsy Analizi
            </button>
          </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}