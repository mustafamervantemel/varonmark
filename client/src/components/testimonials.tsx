import { Star } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

export default function Testimonials() {
  const testimonials = [
    {
      name: "Ahmet Kaya",
      role: "E-ticaret Girişimcisi",
      content: "Varonmark sayesinde Etsy mağazamın satışları 3 katına çıktı. Profesyonel yaklaşımları ve sürekli iletişimleri mükemmel.",
      initials: "AK"
    },
    {
      name: "Zeynep Demir",
      role: "Moda Markası Sahibi",
      content: "Sosyal medya yönetimi hizmeti aldım. Instagram followerslarım %400 arttı ve engagement oranım çok yükseldi.",
      initials: "ZD"
    },
    {
      name: "Mehmet Özkan",
      role: "Teknoloji Şirketi Kurucusu",
      content: "Google Ads kampanyalarımız sayesinde maliyetlerimiz %50 azaldı, dönüşüm oranımız ise %200 arttı.",
      initials: "MÖ"
    }
  ];

  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">Müşteri Yorumları</h2>
          <p className="text-xl text-gray-600">Bizimle çalışan müşterilerimizin deneyimleri</p>
        </div>
        
        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <Card key={index} className="bg-gray-50">
              <CardContent className="p-8">
                <div className="flex items-center mb-4">
                  <div className="flex text-yellow-400 text-sm">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 fill-current" />
                    ))}
                  </div>
                </div>
                <p className="text-gray-600 mb-6 italic">
                  "{testimonial.content}"
                </p>
                <div className="flex items-center">
                  <div className="w-12 h-12 rounded-full mr-4 bg-purple-600 flex items-center justify-center text-white font-semibold">
                    {testimonial.initials}
                  </div>
                  <div>
                    <div className="font-semibold text-gray-900">{testimonial.name}</div>
                    <div className="text-sm text-gray-600">{testimonial.role}</div>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
