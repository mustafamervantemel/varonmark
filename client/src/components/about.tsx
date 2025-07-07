import { Award, TrendingUp, Headphones } from "lucide-react";

export default function About() {
  return (
    <section id="about" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-4xl font-bold text-gray-900 mb-6">Neden Varonmark?</h2>
            <p className="text-lg text-gray-600 mb-8">
              Dijital pazarlama alanında 5+ yıllık deneyimimiz ve 100+ uzman ekibimizle, 
              işinizi online dünyada başarıya taşıyoruz. Her projede kişiselleştirilmiş 
              çözümler sunuyor, müşterilerimizin hedeflerine ulaşmasını sağlıyoruz.
            </p>
            
            <div className="space-y-6">
              <div className="flex items-start">
                <div className="w-8 h-8 bg-purple-600 rounded-full flex items-center justify-center mr-4 mt-1">
                  <Award className="w-4 h-4 text-white" />
                </div>
                <div>
                  <h3 className="font-semibold text-gray-900 mb-1">Sertifikalı Uzmanlar</h3>
                  <p className="text-gray-600">Google, Meta ve platform sertifikalarına sahip profesyoneller</p>
                </div>
              </div>
              
              <div className="flex items-start">
                <div className="w-8 h-8 bg-blue-500 rounded-full flex items-center justify-center mr-4 mt-1">
                  <TrendingUp className="w-4 h-4 text-white" />
                </div>
                <div>
                  <h3 className="font-semibold text-gray-900 mb-1">Kanıtlanmış Sonuçlar</h3>
                  <p className="text-gray-600">Ortalama %300 satış artışı ve %150 reach artışı</p>
                </div>
              </div>
              
              <div className="flex items-start">
                <div className="w-8 h-8 bg-green-500 rounded-full flex items-center justify-center mr-4 mt-1">
                  <Headphones className="w-4 h-4 text-white" />
                </div>
                <div>
                  <h3 className="font-semibold text-gray-900 mb-1">7/24 Destek</h3>
                  <p className="text-gray-600">Her an ulaşabileceğiniz müşteri destek ekibimiz</p>
                </div>
              </div>
            </div>
          </div>
          
          <div className="relative">
            {/* Team placeholder image with stats overlay */}
            <div className="bg-gradient-to-br from-purple-100 to-blue-100 rounded-2xl shadow-lg w-full h-96 flex items-center justify-center text-gray-500">
              <div className="text-center">
                <div className="text-6xl mb-4">👥</div>
                <div className="text-lg font-semibold">Varonmark Ekibi</div>
                <div className="text-sm">Dijital pazarlama uzmanları</div>
              </div>
            </div>
            
            {/* Stats Overlay */}
            <div className="absolute -bottom-6 -right-6 bg-white rounded-2xl shadow-lg p-6">
              <div className="grid grid-cols-2 gap-4 text-center">
                <div>
                  <div className="text-2xl font-bold text-purple-600">500+</div>
                  <div className="text-sm text-gray-600">Proje</div>
                </div>
                <div>
                  <div className="text-2xl font-bold text-blue-500">200+</div>
                  <div className="text-sm text-gray-600">Müşteri</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
