import { useState } from "react";
import { Phone, Mail, MapPin, Instagram, Linkedin, Twitter } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { useToast } from "@/hooks/use-toast";
import { useMutation } from "@tanstack/react-query";
import { apiRequest } from "@/lib/queryClient";

export default function Contact() {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    service: "",
    message: ""
  });

  const submitMutation = useMutation({
    mutationFn: async (data: typeof formData) => {
      return await apiRequest("POST", "/api/contacts", data);
    },
    onSuccess: () => {
      toast({
        title: "Başarılı!",
        description: "Mesajınız başarıyla gönderildi. En kısa sürede size geri dönüş yapacağız."
      });
      setFormData({
        name: "",
        email: "",
        phone: "",
        service: "",
        message: ""
      });
    },
    onError: () => {
      toast({
        title: "Hata!",
        description: "Mesajınız gönderilemedi. Lütfen tekrar deneyiniz.",
        variant: "destructive"
      });
    }
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name || !formData.email) {
      toast({
        title: "Hata!",
        description: "Lütfen gerekli alanları doldurunuz.",
        variant: "destructive"
      });
      return;
    }
    submitMutation.mutate(formData);
  };

  const handleInputChange = (field: string, value: string) => {
    setFormData(prev => ({
      ...prev,
      [field]: value
    }));
  };

  return (
    <section id="contact" className="py-20 gradient-purple">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-white mb-4">Ücretsiz Danışmanlık Alın</h2>
          <p className="text-xl text-purple-200">
            Projenizdeki hedeflerinizi konuşalım ve size özel çözümler geliştirelim.
          </p>
        </div>
        
        <div className="grid lg:grid-cols-2 gap-12">
          <div className="text-white">
            <h3 className="text-2xl font-semibold mb-6">Bizimle İletişime Geçin</h3>
            
            <div className="space-y-6">
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
                  <div className="text-purple-200">İstanbul, Türkiye</div>
                </div>
              </div>
            </div>
            
            <div className="mt-8">
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
          </div>
          
          <Card className="bg-white">
            <CardContent className="p-8">
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
                    placeholder="Projeniz hakkında detayları yazabilirsiniz"
                    rows={4}
                    className="focus:ring-2 focus:ring-purple-600 focus:border-transparent"
                  />
                </div>
                
                <Button 
                  type="submit" 
                  className="w-full bg-purple-600 hover:bg-purple-700 text-white py-3 rounded-lg font-semibold transition-colors"
                  disabled={submitMutation.isPending}
                >
                  {submitMutation.isPending ? "Gönderiliyor..." : "Ücretsiz Danışmanlık Talep Et"}
                </Button>
              </form>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
}
