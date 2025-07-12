import { MessageCircle, Calendar, Cog, CreditCard, CheckCircle, ArrowRight } from "lucide-react";

export default function WorkingProcess() {
  const steps = [
    {
      id: 1,
      title: "WhatsApp İletişimi",
      description: "Müşterimiz hizmet almak istediğinde WhatsApp hattımıza mesaj atıyor. Bu mesaj direkt hizmeti veren birime iletiliyor.",
      icon: MessageCircle,
      color: "from-green-500 to-emerald-500",
      bgColor: "from-green-50 to-emerald-50",
      borderColor: "border-green-200"
    },
    {
      id: 2,
      title: "Ön Toplantı & Danışmanlık",
      description: "Hizmet birimiz müşteriyle ihtiyaçlarına göre ön toplantı düzenliyor. Proje detayları ve beklentiler konuşuluyor.",
      icon: Calendar,
      color: "from-blue-500 to-cyan-500",
      bgColor: "from-blue-50 to-cyan-50",
      borderColor: "border-blue-200"
    },
    {
      id: 3,
      title: "Hizmet Sunumu",
      description: "Uzman ekibimiz müşterinin ihtiyaçları doğrultusunda profesyonel hizmeti yerine getiriyor.",
      icon: Cog,
      color: "from-purple-500 to-indigo-500",
      bgColor: "from-purple-50 to-indigo-50",
      borderColor: "border-purple-200"
    },
    {
      id: 4,
      title: "Ödeme & Teslim",
      description: "Hizmet tamamlandıktan sonra müşteriden IBAN transferi veya Sanal POS ile güvenli ödeme alınıyor.",
      icon: CreditCard,
      color: "from-orange-500 to-red-500",
      bgColor: "from-orange-50 to-red-50",
      borderColor: "border-orange-200"
    }
  ];

  return (
    <section className="py-20 bg-gradient-to-br from-gray-50 via-white to-purple-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center bg-purple-100 rounded-full px-6 py-2 mb-6">
            <CheckCircle className="w-5 h-5 text-purple-600 mr-2" />
            <span className="text-purple-600 font-semibold">Çalışma Sürecimiz</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Nasıl <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-600 to-pink-600">Çalışıyoruz?</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Müşteri memnuniyeti odaklı, şeffaf ve profesyonel çalışma sürecimizle size en iyi hizmeti sunuyoruz
          </p>
        </div>

        {/* Process Steps */}
        <div className="relative">
          {/* Connection Lines */}
          <div className="hidden md:block absolute top-1/2 left-0 right-0 h-0.5 bg-gradient-to-r from-purple-200 via-blue-200 to-purple-200 transform -translate-y-1/2 z-0"></div>
          
          <div className="grid md:grid-cols-4 gap-8 relative z-10">
            {steps.map((step, index) => {
              const IconComponent = step.icon;
              return (
                <div key={step.id} className="relative">
                  {/* Step Card */}
                  <div className={`bg-gradient-to-br ${step.bgColor} rounded-3xl p-8 border-2 ${step.borderColor} hover:shadow-xl transition-all duration-300 hover:-translate-y-2 group`}>
                    {/* Step Number & Icon */}
                    <div className="flex items-center justify-between mb-6">
                      <div className={`w-16 h-16 bg-gradient-to-r ${step.color} rounded-full flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform`}>
                        <IconComponent className="w-8 h-8 text-white" />
                      </div>
                      <div className="bg-white rounded-full w-10 h-10 flex items-center justify-center shadow-md">
                        <span className="text-purple-600 font-bold text-lg">{step.id}</span>
                      </div>
                    </div>

                    {/* Content */}
                    <h3 className="text-xl font-bold text-gray-900 mb-4">{step.title}</h3>
                    <p className="text-gray-700 leading-relaxed">{step.description}</p>
                  </div>

                  {/* Arrow for mobile */}
                  {index < steps.length - 1 && (
                    <div className="md:hidden flex justify-center mt-6 mb-2">
                      <ArrowRight className="w-6 h-6 text-purple-400" />
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </div>

        {/* Features Section */}
        <div className="mt-20 grid md:grid-cols-3 gap-8">
          <div className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-shadow border border-gray-100">
            <div className="w-16 h-16 bg-gradient-to-r from-green-500 to-emerald-500 rounded-full flex items-center justify-center mx-auto mb-6">
              <MessageCircle className="w-8 h-8 text-white" />
            </div>
            <h3 className="text-xl font-bold text-center mb-4">7/24 İletişim</h3>
            <p className="text-gray-600 text-center">
              WhatsApp hattımız sürekli aktif. Sorularınızı hızlıca yanıtlıyor, hizmet sürecinizi takip ediyoruz.
            </p>
          </div>

          <div className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-shadow border border-gray-100">
            <div className="w-16 h-16 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-full flex items-center justify-center mx-auto mb-6">
              <CheckCircle className="w-8 h-8 text-white" />
            </div>
            <h3 className="text-xl font-bold text-center mb-4">Şeffaf Süreç</h3>
            <p className="text-gray-600 text-center">
              Başından sonuna kadar tüm süreçler şeffaf. Ne zaman, nasıl yapılacağını önceden biliyorsunuz.
            </p>
          </div>

          <div className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-shadow border border-gray-100">
            <div className="w-16 h-16 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full flex items-center justify-center mx-auto mb-6">
              <CreditCard className="w-8 h-8 text-white" />
            </div>
            <h3 className="text-xl font-bold text-center mb-4">Güvenli Ödeme</h3>
            <p className="text-gray-600 text-center">
              Hizmet tamamlandıktan sonra ödeme. IBAN transferi veya Sanal POS ile güvenli ödeme seçenekleri.
            </p>
          </div>
        </div>

        {/* CTA Section */}
        <div className="mt-20 bg-gradient-to-r from-purple-600 to-pink-600 rounded-3xl p-8 md:p-12 text-white text-center relative overflow-hidden">
          {/* Background decorations */}
          <div className="absolute top-0 right-0 w-64 h-64 bg-white/10 rounded-full -translate-y-32 translate-x-32"></div>
          <div className="absolute bottom-0 left-0 w-48 h-48 bg-white/10 rounded-full translate-y-24 -translate-x-24"></div>
          
          <div className="relative z-10">
            <div className="w-20 h-20 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-6 backdrop-blur-sm">
              <MessageCircle className="w-10 h-10 text-white" />
            </div>
            <h3 className="text-3xl md:text-4xl font-bold mb-4">Hizmet Almaya Hazır mısınız?</h3>
            <p className="text-white/90 text-lg mb-8 max-w-2xl mx-auto">
              WhatsApp hattımızdan bize ulaşın, size özel çözümlerimizi keşfedin ve dijital başarınızı yakalayın.
            </p>
            
            <a 
              href="https://wa.me/905305629126" 
              target="_blank" 
              rel="noopener noreferrer"
              className="bg-white text-purple-600 px-8 py-4 rounded-full font-semibold hover:bg-purple-50 transition-colors inline-flex items-center text-lg group"
            >
              <MessageCircle className="w-5 h-5 mr-2" />
              WhatsApp'tan İletişime Geç
              <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}