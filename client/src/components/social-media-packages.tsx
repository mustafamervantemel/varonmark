export default function SocialMediaPackages() {
  return (
    <div className="mt-20">
      <div className="text-center mb-12">
        <h2 className="text-3xl font-bold text-pink-900 mb-4">Sosyal Medya Yönetimi Hizmet Paketlerimiz</h2>
        <p className="text-xl text-pink-700 max-w-3xl mx-auto">
          İhtiyacınıza uygun paket seçin, sosyal medyada başarınızı garanti altına alın
        </p>
      </div>

      <div className="grid md:grid-cols-2 gap-8">
        {/* Sosyal Medya Kurulum Desteği */}
        <div className="bg-gradient-to-br from-pink-50 to-purple-50 rounded-3xl p-8 border-2 border-pink-200 hover:shadow-xl transition-all">
          <div className="text-center mb-6">
            <div className="w-16 h-16 bg-gradient-to-r from-pink-500 to-purple-500 rounded-full flex items-center justify-center mx-auto mb-4">
              <img src="/src/media/icons8-instagram-3d-fluency-32.png" alt="Instagram" className="w-10 h-10 rounded-lg" />
            </div>
            <h3 className="text-2xl font-bold text-pink-800 mb-2">Sosyal Medya Kurulum Desteği</h3>
            <div className="text-4xl font-bold text-pink-600 mb-2">800₺</div>
            <div className="text-sm text-pink-500">Tek seferlik ödeme</div>
          </div>

          <div className="space-y-4 mb-8">
            <div className="flex items-start space-x-3">
              <div className="w-5 h-5 bg-green-500 rounded-full flex items-center justify-center mt-1">
                <svg className="w-3 h-3 text-white" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                </svg>
              </div>
              <div>
                <h4 className="font-semibold text-pink-800">Hesap Optimizasyonu</h4>
                <p className="text-pink-700 text-sm">Instagram, TikTok ve Facebook hesaplarınızın profesyonel kurulumu</p>
              </div>
            </div>
            
            <div className="flex items-start space-x-3">
              <div className="w-5 h-5 bg-green-500 rounded-full flex items-center justify-center mt-1">
                <svg className="w-3 h-3 text-white" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                </svg>
              </div>
              <div>
                <h4 className="font-semibold text-pink-800">Görsel Kimlik Tasarımı</h4>
                <p className="text-pink-700 text-sm">Profil fotoğrafı, kapak görseli ve hikaye şablonları</p>
              </div>
            </div>

            <div className="flex items-start space-x-3">
              <div className="w-5 h-5 bg-green-500 rounded-full flex items-center justify-center mt-1">
                <svg className="w-3 h-3 text-white" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                </svg>
              </div>
              <div>
                <h4 className="font-semibold text-pink-800">İçerik Stratejisi</h4>
                <p className="text-pink-700 text-sm">Hedef kitleye uygun içerik planlaması ve strateji belirleme</p>
              </div>
            </div>

            <div className="flex items-start space-x-3">
              <div className="w-5 h-5 bg-green-500 rounded-full flex items-center justify-center mt-1">
                <svg className="w-3 h-3 text-white" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                </svg>
              </div>
              <div>
                <h4 className="font-semibold text-pink-800">Hashtag Araştırması</h4>
                <p className="text-pink-700 text-sm">Organik erişimi artıracak etkili hashtag setleri</p>
              </div>
            </div>

            <div className="flex items-start space-x-3">
              <div className="w-5 h-5 bg-green-500 rounded-full flex items-center justify-center mt-1">
                <svg className="w-3 h-3 text-white" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                </svg>
              </div>
              <div>
                <h4 className="font-semibold text-pink-800">Eğitim & Danışmanlık</h4>
                <p className="text-pink-700 text-sm">Sosyal medya platformları kullanımı hakkında detaylı eğitim</p>
              </div>
            </div>
          </div>

          <button 
            onClick={() => window.open("https://wa.me/905305629126", "_blank")}
            className="w-full bg-gradient-to-r from-pink-500 to-purple-500 text-white py-3 rounded-lg font-semibold transition-all hover:scale-105 shadow-lg"
          >
            Hemen Başla
          </button>
        </div>

        {/* Sosyal Medya Yönetim Desteği */}
        <div className="bg-gradient-to-br from-purple-50 to-indigo-50 rounded-3xl p-8 border-2 border-purple-300 hover:shadow-xl transition-all relative">
          {/* Popular Badge */}
          <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
            <div className="bg-gradient-to-r from-purple-500 to-pink-500 text-white px-6 py-2 rounded-full text-sm font-bold shadow-lg">
              ⭐ En Popüler
            </div>
          </div>

          <div className="text-center mb-6 mt-4">
            <div className="w-16 h-16 bg-gradient-to-r from-purple-500 to-indigo-500 rounded-full flex items-center justify-center mx-auto mb-4">
              <img src="/src/media/icons8-instagram-3d-fluency-32.png" alt="Instagram" className="w-10 h-10 rounded-lg" />
            </div>
            <h3 className="text-2xl font-bold text-purple-800 mb-2">Sosyal Medya Yönetim Desteği</h3>
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
                <h4 className="font-semibold text-purple-800">🤖 AI İçerik Üretimi</h4>
                <p className="text-purple-700 text-sm">Yapay zeka ile profesyonel görseller ve videolar oluşturma</p>
              </div>
            </div>
            
            <div className="flex items-start space-x-3">
              <div className="w-5 h-5 bg-green-500 rounded-full flex items-center justify-center mt-1">
                <svg className="w-3 h-3 text-white" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                </svg>
              </div>
              <div>
                <h4 className="font-semibold text-purple-800">📱 Günlük İçerik Yönetimi</h4>
                <p className="text-purple-700 text-sm">Instagram, TikTok ve Facebook için günlük paylaşım</p>
              </div>
            </div>

            <div className="flex items-start space-x-3">
              <div className="w-5 h-5 bg-green-500 rounded-full flex items-center justify-center mt-1">
                <svg className="w-3 h-3 text-white" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                </svg>
              </div>
              <div>
                <h4 className="font-semibold text-purple-800">💬 Topluluk Yönetimi</h4>
                <p className="text-purple-700 text-sm">Yorumlar, mesajlar ve etkileşimlerin profesyonel yönetimi</p>
              </div>
            </div>

            <div className="flex items-start space-x-3">
              <div className="w-5 h-5 bg-green-500 rounded-full flex items-center justify-center mt-1">
                <svg className="w-3 h-3 text-white" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                </svg>
              </div>
              <div>
                <h4 className="font-semibold text-purple-800">🎯 Trend Takibi & Viral İçerik</h4>
                <p className="text-purple-700 text-sm">Güncel trendleri yakalayarak viral içerikler oluşturma</p>
              </div>
            </div>

            <div className="flex items-start space-x-3">
              <div className="w-5 h-5 bg-green-500 rounded-full flex items-center justify-center mt-1">
                <svg className="w-3 h-3 text-white" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                </svg>
              </div>
              <div>
                <h4 className="font-semibold text-purple-800">📊 Analiz & Raporlama</h4>
                <p className="text-purple-700 text-sm">Haftalık performans raporları ve büyüme analizi</p>
              </div>
            </div>

            <div className="flex items-start space-x-3">
              <div className="w-5 h-5 bg-green-500 rounded-full flex items-center justify-center mt-1">
                <svg className="w-3 h-3 text-white" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                </svg>
              </div>
              <div>
                <h4 className="font-semibold text-purple-800">🚀 Influencer İşbirlikleri</h4>
                <p className="text-purple-700 text-sm">Micro-influencer kampanyaları ve iş birliği organizasyonu</p>
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