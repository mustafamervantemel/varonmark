export default function EtsyPackages() {
  return (
    <div className="mt-20">
      <div className="text-center mb-12">
        <h2 className="text-3xl font-bold text-orange-900 mb-4">Etsy Hizmet Paketlerimiz</h2>
        <p className="text-xl text-orange-700 max-w-3xl mx-auto">
          İhtiyacınıza uygun paket seçin, Etsy'de başarınızı garanti altına alın
        </p>
      </div>

      <div className="grid md:grid-cols-2 gap-8">
        {/* Mağaza Açma Desteği */}
        <div className="bg-gradient-to-br from-orange-50 to-red-50 rounded-3xl p-8 border-2 border-orange-200 hover:shadow-xl transition-all">
          <div className="text-center mb-6">
            <div className="w-16 h-16 bg-gradient-to-r from-orange-500 to-red-500 rounded-full flex items-center justify-center mx-auto mb-4">
              <img src="/media/icons8-etsy-color-32.png" alt="Etsy" className="w-10 h-10 rounded-lg" />
            </div>
            <h3 className="text-2xl font-bold text-orange-800 mb-2">Mağaza Açma Desteği</h3>
            <div className="text-4xl font-bold text-orange-600 mb-2">800₺</div>
            <div className="text-sm text-orange-500">Tek seferlik ödeme</div>
          </div>

          <div className="space-y-4 mb-8">
            <div className="flex items-start space-x-3">
              <div className="w-5 h-5 bg-green-500 rounded-full flex items-center justify-center mt-1">
                <svg className="w-3 h-3 text-white" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                </svg>
              </div>
              <div>
                <h4 className="font-semibold text-orange-800">Mağaza Kurulumu</h4>
                <p className="text-orange-700 text-sm">Etsy mağazanızın profesyonel kurulumu</p>
              </div>
            </div>
            
            <div className="flex items-start space-x-3">
              <div className="w-5 h-5 bg-green-500 rounded-full flex items-center justify-center mt-1">
                <svg className="w-3 h-3 text-white" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                </svg>
              </div>
              <div>
                <h4 className="font-semibold text-orange-800">Mağaza Tasarımı</h4>
                <p className="text-orange-700 text-sm">Logo, banner ve mağaza görsellerinin hazırlanması</p>
              </div>
            </div>

            <div className="flex items-start space-x-3">
              <div className="w-5 h-5 bg-green-500 rounded-full flex items-center justify-center mt-1">
                <svg className="w-3 h-3 text-white" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                </svg>
              </div>
              <div>
                <h4 className="font-semibold text-orange-800">Ürün Kategorileri</h4>
                <p className="text-orange-700 text-sm">Doğru kategori seçimi ve tanımlamaları</p>
              </div>
            </div>

            <div className="flex items-start space-x-3">
              <div className="w-5 h-5 bg-green-500 rounded-full flex items-center justify-center mt-1">
                <svg className="w-3 h-3 text-white" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                </svg>
              </div>
              <div>
                <h4 className="font-semibold text-orange-800">Kargo & Ödeme Ayarları</h4>
                <p className="text-orange-700 text-sm">Kargo şirketleri ve ödeme yöntemlerinin ayarlanması</p>
              </div>
            </div>

            <div className="flex items-start space-x-3">
              <div className="w-5 h-5 bg-green-500 rounded-full flex items-center justify-center mt-1">
                <svg className="w-3 h-3 text-white" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                </svg>
              </div>
              <div>
                <h4 className="font-semibold text-orange-800">Eğitim & Danışmanlık</h4>
                <p className="text-orange-700 text-sm">Etsy paneli kullanımı hakkında detaylı eğitim</p>
              </div>
            </div>
          </div>

          <button 
            onClick={() => window.open("https://wa.me/905305629126", "_blank")}
            className="w-full bg-gradient-to-r from-orange-500 to-red-500 text-white py-3 rounded-lg font-semibold transition-all hover:scale-105 shadow-lg"
          >
            Hemen Başla
          </button>
        </div>

        {/* Mağaza Yönetim Desteği */}
        <div className="bg-gradient-to-br from-purple-50 to-indigo-50 rounded-3xl p-8 border-2 border-purple-300 hover:shadow-xl transition-all relative">
          {/* Popular Badge */}
          <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
            <div className="bg-gradient-to-r from-purple-500 to-pink-500 text-white px-6 py-2 rounded-full text-sm font-bold shadow-lg">
              ⭐ En Popüler
            </div>
          </div>

          <div className="text-center mb-6 mt-4">
            <div className="w-16 h-16 bg-gradient-to-r from-purple-500 to-indigo-500 rounded-full flex items-center justify-center mx-auto mb-4">
              <img src="/media/icons8-etsy-color-32.png" alt="Etsy" className="w-10 h-10 rounded-lg" />
            </div>
            <h3 className="text-2xl font-bold text-purple-800 mb-2">Mağaza Yönetim Desteği</h3>
            <div className="text-4xl font-bold text-purple-600 mb-2">5.000₺</div>
            <div className="text-sm text-purple-500">Aylık ödeme</div>
          </div>

          <div className="space-y-4 mb-8">
            <div className="flex items-start space-x-3">
              <div className="w-5 h-5 bg-green-500 rounded-full flex items-center justify-center mt-1">
                <svg className="w-3 h-3 text-white" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                </svg>
              </div>
              <div>
                <h4 className="font-semibold text-purple-800">🤖 AI Ürün Fotoğrafı</h4>
                <p className="text-purple-700 text-sm">Yapay zeka ile profesyonel ürün fotoğrafları oluşturma</p>
              </div>
            </div>
            
            <div className="flex items-start space-x-3">
              <div className="w-5 h-5 bg-green-500 rounded-full flex items-center justify-center mt-1">
                <svg className="w-3 h-3 text-white" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                </svg>
              </div>
              <div>
                <h4 className="font-semibold text-purple-800">📦 Profesyonel Ürün Yükleme</h4>
                <p className="text-purple-700 text-sm">SEO uyumlu ürün başlıkları, açıklamaları ve etiketleri</p>
              </div>
            </div>

            <div className="flex items-start space-x-3">
              <div className="w-5 h-5 bg-green-500 rounded-full flex items-center justify-center mt-1">
                <svg className="w-3 h-3 text-white" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                </svg>
              </div>
              <div>
                <h4 className="font-semibold text-purple-800">📊 Günlük Mağaza Yönetimi</h4>
                <p className="text-purple-700 text-sm">Sipariş takibi, stok yönetimi ve müşteri desteği</p>
              </div>
            </div>

            <div className="flex items-start space-x-3">
              <div className="w-5 h-5 bg-green-500 rounded-full flex items-center justify-center mt-1">
                <svg className="w-3 h-3 text-white" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                </svg>
              </div>
              <div>
                <h4 className="font-semibold text-purple-800">🎯 Fiyat & Rekabet Analizi</h4>
                <p className="text-purple-700 text-sm">Rakip analizi ve dinamik fiyat optimizasyonu</p>
              </div>
            </div>

            <div className="flex items-start space-x-3">
              <div className="w-5 h-5 bg-green-500 rounded-full flex items-center justify-center mt-1">
                <svg className="w-3 h-3 text-white" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                </svg>
              </div>
              <div>
                <h4 className="font-semibold text-purple-800">📈 Performans Raporları</h4>
                <p className="text-purple-700 text-sm">Haftalık detaylı satış ve performans raporları</p>
              </div>
            </div>

            <div className="flex items-start space-x-3">
              <div className="w-5 h-5 bg-green-500 rounded-full flex items-center justify-center mt-1">
                <svg className="w-3 h-3 text-white" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                </svg>
              </div>
              <div>
                <h4 className="font-semibold text-purple-800">🎨 Kampanya & Promosyon</h4>
                <p className="text-purple-700 text-sm">Özel günlerde kampanya oluşturma ve yönetme</p>
              </div>
            </div>
          </div>

          <button 
            onClick={() => window.open("https://wa.me/905305629126", "_blank")}
            className="w-full bg-gradient-to-r from-purple-500 to-indigo-500 text-white py-3 rounded-lg font-semibold transition-all hover:scale-105 shadow-lg"
          >
            Hemen Başla
          </button>
        </div>
      </div>
    </div>
  );
}