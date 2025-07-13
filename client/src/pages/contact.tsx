import { useState } from "react";
import { Phone, Mail, MapPin, Instagram, Linkedin, Twitter, Clock, MessageCircle, Users, CheckCircle } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Badge } from "@/components/ui/badge";
import { useToast } from "@/hooks/use-toast";
import { useMutation } from "@tanstack/react-query";
import { apiRequest } from "@/lib/queryClient";
import Navigation from "@/components/navigation";
import Footer from "@/components/footer";
import emailjs from '@emailjs/browser';

export default function ContactPage() {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    service: "",
    message: ""
  });

  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleInputChange = (field: string, value: string) => {
    setFormData(prev => ({
      ...prev,
      [field]: value
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!formData.name || !formData.email) {
      toast({
        title: "Hata",
        description: "Ad ve email alanları zorunludur.",
        variant: "destructive",
      });
      return;
    }

    setIsSubmitting(true);

    try {
      // Ana bildirim için template parametreleri
      const notificationParams = {
        name: formData.name,
        email: formData.email,
        phone: formData.phone,
        service: formData.service,
        message: formData.message,
        time: new Date().toLocaleString('tr-TR')
      };

      // Müşteriye otomatik yanıt için template parametreleri
      const autoReplyParams = {
        name: formData.name,
        title: formData.service || "Genel Danışmanlık Talebi",
        email: formData.email
      };

      // Ana bildirim gönder
      await emailjs.send(
        'Ad2Y1NjtyFoHerY3A', // Service ID (Public Key)
        'template_0q1xh9y', // Template ID - Size giden bildirim
        notificationParams,
        'Ad2Y1NjtyFoHerY3A' // Public Key
      );

      // Müşteriye otomatik yanıt gönder
      await emailjs.send(
        'Ad2Y1NjtyFoHerY3A', // Service ID (Public Key)
        'template_cmhrwjg', // Template ID - Müşteriye giden auto-reply
        autoReplyParams,
        'Ad2Y1NjtyFoHerY3A' // Public Key
      );

      toast({
        title: "Başarılı!",
        description: "Mesajınız başarıyla gönderildi. En kısa sürede size dönüş yapacağız.",
      });

      setFormData({
        name: "",
        email: "",
        phone: "",
        service: "",
        message: ""
      });
    } catch (error) {
      console.error('EmailJS Error:', error);
      toast({
        title: "Hata",
        description: "Mesaj gönderilirken bir hata oluştu. Lütfen tekrar deneyin.",
        variant: "destructive",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="min-h-screen">
      <Navigation />
      
      {/* Hero Section */}
      <section className="pt-20 pb-12 bg-gradient-to-br from-purple-900 via-purple-800 to-pink-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <Badge variant="secondary" className="mb-4 bg-white/10 text-white border-white/20">
              İletişim
            </Badge>
            <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">
              Projenizi
              <span className="block text-transparent bg-clip-text bg-gradient-to-r from-purple-200 to-pink-200">
                Konuşalım
              </span>
            </h1>
            <p className="text-xl text-purple-100 max-w-3xl mx-auto">
              Dijital pazarlama hedeflerinizi gerçekleştirmek için uzman ekibimizle tanışın. Ücretsiz danışmanlık hizmetimizden faydalanın.
            </p>
          </div>
        </div>
      </section>

      {/* Contact Info Cards */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-3 gap-8 mb-16">
            <Card className="bg-gradient-to-br from-purple-50 to-purple-100 border-purple-200 hover:shadow-lg transition-all duration-300">
              <CardContent className="p-8 text-center">
                <div className="w-16 h-16 bg-purple-600 rounded-full flex items-center justify-center mx-auto mb-6">
                  <Phone className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-4">Telefon Desteği</h3>
                <p className="text-gray-600 mb-4">
                  Hızlı destek için bizi arayın
                </p>
                <p className="text-purple-600 font-semibold text-lg">+90 530 562 91 26</p>
                <p className="text-sm text-gray-500 mt-2">Pazartesi - Cuma, 09:00 - 18:00</p>
              </CardContent>
            </Card>

            <Card className="bg-gradient-to-br from-blue-50 to-blue-100 border-blue-200 hover:shadow-lg transition-all duration-300">
              <CardContent className="p-8 text-center">
                <div className="w-16 h-16 bg-blue-500 rounded-full flex items-center justify-center mx-auto mb-6">
                  <Mail className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-4">E-posta Desteği</h3>
                <p className="text-gray-600 mb-4">
                  Detaylı sorular için yazın
                </p>
                <p className="text-blue-500 font-semibold text-lg">info@varonmark.com</p>
                <p className="text-sm text-gray-500 mt-2">24 saat içinde yanıt</p>
              </CardContent>
            </Card>

            <Card className="bg-gradient-to-br from-green-50 to-green-100 border-green-200 hover:shadow-lg transition-all duration-300">
              <CardContent className="p-8 text-center">
                <div className="w-16 h-16 bg-green-500 rounded-full flex items-center justify-center mx-auto mb-6">
                  <MapPin className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-4">Ofis Adresi</h3>
                <p className="text-gray-600 mb-4">
                  Yüz yüze görüşme için
                </p>
                <p className="text-green-500 font-semibold text-lg">İstanbul, Pendik</p>
                <p className="text-sm text-gray-500 mt-2">Randevu ile</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Main Contact Form */}
      <section className="py-20 bg-gradient-to-br from-purple-900 via-purple-800 to-pink-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12">
            {/* Contact Info */}
            <div className="text-white">
              <h2 className="text-4xl font-bold mb-6">Bizimle İletişime Geçin</h2>
              <p className="text-xl text-purple-100 mb-8">
                Projenizdeki hedeflerinizi konuşalım ve size özel çözümler geliştirelim.
              </p>
              
              <div className="space-y-6 mb-8">
                <div className="flex items-center">
                  <div className="w-12 h-12 bg-white/20 rounded-full flex items-center justify-center mr-4">
                    <Phone className="w-5 h-5 text-white" />
                  </div>
                  <div>
                    <div className="font-medium">Telefon</div>
                    <div className="text-purple-200">+90 530 562 91 26</div>
                  </div>
                </div>
                
                <div className="flex items-center">
                  <div className="w-12 h-12 bg-white/20 rounded-full flex items-center justify-center mr-4">
                    <Mail className="w-5 h-5 text-white" />
                  </div>
                  <div>
                    <div className="font-medium">E-posta</div>
                    <div className="text-purple-200">info@varonmark.com</div>
                  </div>
                </div>
                
                <div className="flex items-center">
                  <div className="w-12 h-12 bg-white/20 rounded-full flex items-center justify-center mr-4">
                    <MapPin className="w-5 h-5 text-white" />
                  </div>
                  <div>
                    <div className="font-medium">Adres</div>
                    <div className="text-purple-200">İstanbul, Pendik</div>
                  </div>
                </div>
              </div>
              
              <div className="mb-8">
                <h4 className="font-semibold mb-4">Sosyal Medya</h4>
                <div className="flex space-x-4">
                  <a href="#" className="w-10 h-10 bg-white/20 rounded-full flex items-center justify-center hover:bg-white/30 transition-colors">
                    <Instagram className="w-5 h-5 text-white" />
                  </a>
                  <a href="#" className="w-10 h-10 bg-white/20 rounded-full flex items-center justify-center hover:bg-white/30 transition-colors">
                    <Linkedin className="w-5 h-5 text-white" />
                  </a>
                  <a href="#" className="w-10 h-10 bg-white/20 rounded-full flex items-center justify-center hover:bg-white/30 transition-colors">
                    <Twitter className="w-5 h-5 text-white" />
                  </a>
                </div>
              </div>

              {/* Process Steps */}
              <div className="bg-white/10 rounded-2xl p-6 backdrop-blur-sm">
                <h4 className="font-semibold mb-4 text-white">Süreç Nasıl İşler?</h4>
                <div className="space-y-4">
                  <div className="flex items-start">
                    <div className="w-8 h-8 bg-white/20 rounded-full flex items-center justify-center mr-4 mt-1">
                      <span className="text-white font-semibold text-sm">1</span>
                    </div>
                    <div>
                      <div className="font-medium text-white">Ücretsiz Danışmanlık</div>
                      <div className="text-purple-200 text-sm">Projenizdeki hedeflerinizi konuşuyoruz</div>
                    </div>
                  </div>
                  <div className="flex items-start">
                    <div className="w-8 h-8 bg-white/20 rounded-full flex items-center justify-center mr-4 mt-1">
                      <span className="text-white font-semibold text-sm">2</span>
                    </div>
                    <div>
                      <div className="font-medium text-white">Özel Strateji</div>
                      <div className="text-purple-200 text-sm">Size özel çözümler geliştiriyoruz</div>
                    </div>
                  </div>
                  <div className="flex items-start">
                    <div className="w-8 h-8 bg-white/20 rounded-full flex items-center justify-center mr-4 mt-1">
                      <span className="text-white font-semibold text-sm">3</span>
                    </div>
                    <div>
                      <div className="font-medium text-white">Hızlı Başlangıç</div>
                      <div className="text-purple-200 text-sm">24 saat içinde projenizi başlatıyoruz</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            
            {/* Contact Form */}
            <Card className="bg-white">
              <CardContent className="p-8">
                <div className="text-center mb-8">
                  <h3 className="text-2xl font-bold text-gray-900 mb-2">Ücretsiz Danışmanlık Alın</h3>
                  <p className="text-gray-600">Formu doldurun, size en kısa sürede dönüş yapalım</p>
                </div>

                <form onSubmit={handleSubmit} className="space-y-6">
                  <div>
                    <Label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">
                      Ad Soyad *
                    </Label>
                    <Input
                      id="name"
                      type="text"
                      value={formData.name}
                      onChange={(e) => handleInputChange("name", e.target.value)}
                      placeholder="Adınız ve soyadınız"
                      required
                      className="focus:ring-2 focus:ring-purple-600 focus:border-transparent"
                    />
                  </div>
                  
                  <div>
                    <Label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                      E-posta *
                    </Label>
                    <Input
                      id="email"
                      type="email"
                      value={formData.email}
                      onChange={(e) => handleInputChange("email", e.target.value)}
                      placeholder="E-posta adresiniz"
                      required
                      className="focus:ring-2 focus:ring-purple-600 focus:border-transparent"
                    />
                  </div>
                  
                  <div>
                    <Label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-2">
                      Telefon
                    </Label>
                    <Input
                      id="phone"
                      type="tel"
                      value={formData.phone}
                      onChange={(e) => handleInputChange("phone", e.target.value)}
                      placeholder="Telefon numaranız"
                      className="focus:ring-2 focus:ring-purple-600 focus:border-transparent"
                    />
                  </div>
                  
                  <div>
                    <Label htmlFor="service" className="block text-sm font-medium text-gray-700 mb-2">
                      İlgilendiğiniz Hizmet
                    </Label>
                    <Select value={formData.service} onValueChange={(value) => handleInputChange("service", value)}>
                      <SelectTrigger className="focus:ring-2 focus:ring-purple-600 focus:border-transparent">
                        <SelectValue placeholder="Hizmet seçiniz" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="etsy-setup">Etsy Hesap Açılışı</SelectItem>
                        <SelectItem value="etsy-management">Etsy Mağaza Yardımcısı</SelectItem>
                        <SelectItem value="social-media">Sosyal Medya Yönetimi</SelectItem>
                        <SelectItem value="advertising">Reklamcılık Hizmetleri</SelectItem>
                        <SelectItem value="trendyol-setup">Trendyol Hesap Açılışı</SelectItem>
                        <SelectItem value="trendyol-management">Trendyol Mağaza Yardımcısı</SelectItem>
                        <SelectItem value="consulting">Genel Danışmanlık</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                  
                  <div>
                    <Label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">
                      Mesajınız
                    </Label>
                    <Textarea
                      id="message"
                      value={formData.message}
                      onChange={(e) => handleInputChange("message", e.target.value)}
                      placeholder="Projeniz hakkında detayları yazabilirsiniz..."
                      rows={4}
                      className="focus:ring-2 focus:ring-purple-600 focus:border-transparent"
                    />
                  </div>
                  
                  <Button 
                    type="submit" 
                    className="w-full bg-purple-600 hover:bg-purple-700 text-white py-3 rounded-lg font-semibold transition-colors"
                    disabled={isSubmitting}
                  >
                    {isSubmitting ? "Gönderiliyor..." : "Ücretsiz Danışmanlık Talep Et"}
                  </Button>
                </form>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Neden Varonmark?</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Dijital pazarlama alanında uzman ekibimiz ve hizmet kalitemizle fark yaratıyoruz.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <Card className="bg-gradient-to-br from-purple-50 to-purple-100 border-purple-200 hover:shadow-lg transition-all duration-300">
              <CardContent className="p-8 text-center">
                <div className="w-16 h-16 bg-purple-600 rounded-full flex items-center justify-center mx-auto mb-6">
                  <Clock className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-4">Hızlı Başlangıç</h3>
                <p className="text-gray-600">
                  24 saat içinde projenizi başlatıyor, ilk sonuçları 7 gün içinde görmenizi sağlıyoruz.
                </p>
              </CardContent>
            </Card>

            <Card className="bg-gradient-to-br from-blue-50 to-blue-100 border-blue-200 hover:shadow-lg transition-all duration-300">
              <CardContent className="p-8 text-center">
                <div className="w-16 h-16 bg-blue-500 rounded-full flex items-center justify-center mx-auto mb-6">
                  <MessageCircle className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-4">7/24 Destek</h3>
                <p className="text-gray-600">
                  Her an ulaşabileceğiniz müşteri destek ekibimiz ile sorunlarınızı hızlıca çözüyoruz.
                </p>
              </CardContent>
            </Card>

            <Card className="bg-gradient-to-br from-green-50 to-green-100 border-green-200 hover:shadow-lg transition-all duration-300">
              <CardContent className="p-8 text-center">
                <div className="w-16 h-16 bg-green-500 rounded-full flex items-center justify-center mx-auto mb-6">
                  <Users className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-4">Uzman Ekip</h3>
                <p className="text-gray-600">
                  Google, Meta ve platform sertifikalarına sahip 100+ uzman ile başarı garantisi veriyoruz.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Sık Sorulan Sorular</h2>
            <p className="text-xl text-gray-600">
              Merak ettiğiniz konulara hızlı yanıtlar bulun.
            </p>
          </div>

          <div className="space-y-6">
            <Card>
              <CardContent className="p-6">
                <div className="flex items-start">
                  <div className="w-8 h-8 bg-purple-600 rounded-full flex items-center justify-center mr-4 mt-1">
                    <span className="text-white text-sm">?</span>
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900 mb-2">Danışmanlık hizmeti gerçekten ücretsiz mi?</h3>
                    <p className="text-gray-600">
                      Evet, ilk danışmanlık hizmetimiz tamamen ücretsizdir. Projenizi değerlendirip size özel çözümler sunuyoruz.
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="p-6">
                <div className="flex items-start">
                  <div className="w-8 h-8 bg-blue-500 rounded-full flex items-center justify-center mr-4 mt-1">
                    <span className="text-white text-sm">?</span>
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900 mb-2">Projemi ne kadar sürede başlatabilirsiniz?</h3>
                    <p className="text-gray-600">
                      Danışmanlık sonrası anlaşmamız halinde projelerinizi 24 saat içinde başlatabilir, ilk sonuçları 7 gün içinde görmenizi sağlayabiliriz.
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="p-6">
                <div className="flex items-start">
                  <div className="w-8 h-8 bg-green-500 rounded-full flex items-center justify-center mr-4 mt-1">
                    <span className="text-white text-sm">?</span>
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900 mb-2">Hangi platformlarda hizmet veriyorsunuz?</h3>
                    <p className="text-gray-600">
                      Etsy, Trendyol, Instagram, TikTok, X (Twitter), Google Ads ve Meta Ads platformlarında uzman hizmet veriyoruz.
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}