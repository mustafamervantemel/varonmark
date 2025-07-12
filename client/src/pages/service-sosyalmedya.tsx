import Navigation from "@/components/navigation";
import SocialMediaPackages from "@/components/social-media-packages";
import Footer from "@/components/footer";

export default function SosyalMedyaPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-50 to-white">
      <Navigation />
      
      <main className="pt-16">
        <div className="bg-gradient-to-r from-purple-600 to-purple-800 text-white py-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center">
              <div className="flex items-center justify-center mb-4">
                <img src="/src/media/icons8-instagram-3d-fluency-96.png" alt="Sosyal Medya" className="w-16 h-16 mr-4" />
                <h1 className="text-4xl font-bold">Sosyal Medya Yöneticiliği</h1>
              </div>
              <p className="text-xl text-purple-100 max-w-3xl mx-auto">
                Markanızı sosyal medyada güçlendirin ve hedef kitlenizle etkileşim kurun
              </p>
            </div>
          </div>
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          {/* Sosyal Medya Hizmet Paketleri */}
          <SocialMediaPackages />
          
          <div className="py-16">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-white rounded-lg shadow-lg p-6">
              <div className="text-yellow-600 mb-4">
                <svg className="w-12 h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-3 text-purple-900">İçerik Üretimi</h3>
              <p className="text-purple-700">
                Markanıza özel yaratıcı içerikler, görseller ve videolar. Hikaye anlatımı ile etkileşim odaklı paylaşımlar.
              </p>
            </div>

            <div className="bg-white rounded-lg shadow-lg p-6">
              <div className="text-yellow-600 mb-4">
                <svg className="w-12 h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-3 text-purple-900">Topluluk Yönetimi</h3>
              <p className="text-purple-700">
                Takipçilerinizle aktif iletişim, yorumların yönetimi ve müşteri hizmetleri. Marka sadakatini artırma.
              </p>
            </div>

            <div className="bg-white rounded-lg shadow-lg p-6">
              <div className="text-yellow-600 mb-4">
                <svg className="w-12 h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-3 text-purple-900">Sosyal Medya Stratejisi</h3>
              <p className="text-purple-700">
                Markanıza özel sosyal medya stratejisi geliştirme. Hedef kitle analizi ve içerik takvimi planlama.
              </p>
            </div>

            <div className="bg-white rounded-lg shadow-lg p-6">
              <div className="text-yellow-600 mb-4">
                <svg className="w-12 h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 10l4.553-2.276A1 1 0 0121 8.618v6.764a1 1 0 01-1.447.894L15 14M5 18h8a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v8a2 2 0 002 2z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-3 text-purple-900">Video İçerik</h3>
              <p className="text-purple-700">
                Reels, Stories ve TikTok için video içerik üretimi. Viral potansiyeli yüksek yaratıcı videolar.
              </p>
            </div>

            <div className="bg-white rounded-lg shadow-lg p-6">
              <div className="text-yellow-600 mb-4">
                <svg className="w-12 h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-3 text-purple-900">Influencer İşbirlikleri</h3>
              <p className="text-purple-700">
                Markanıza uygun influencer'lar ile iş birliği kurma. Mikro ve makro influencer kampanyaları yönetimi.
              </p>
            </div>

            <div className="bg-white rounded-lg shadow-lg p-6">
              <div className="text-yellow-600 mb-4">
                <svg className="w-12 h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 12l3-3 3 3 4-4M8 21l4-4 4 4M3 4h18M4 4h16v12a1 1 0 01-1 1H5a1 1 0 01-1-1V4z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-3 text-purple-900">Analiz & Raporlama</h3>
              <p className="text-purple-700">
                Detaylı sosyal medya analizleri ve performans raporları. Etkileşim oranları ve büyüme metriklerinin takibi.
              </p>
            </div>
          </div>

          


          <div className="mt-16 text-center">
            <h2 className="text-3xl font-bold mb-4">Sosyal Medyada Fark Yaratmaya Başlayın!</h2>
            <p className="text-gray-600 mb-8 max-w-2xl mx-auto">
              Markanızı sosyal medyada güçlendirin ve hedef kitlenizle anlamlı bağlantılar kurun. Uzman ekibimizle sosyal medya başarınızı yakalayın.
            </p>
            <button className="bg-pink-500 hover:bg-pink-600 text-white px-8 py-3 rounded-full text-lg font-medium transition-colors">
              Ücretsiz Sosyal Medya Analizi
            </button>
          </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}