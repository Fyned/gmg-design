import React from 'react';
import { motion } from 'framer-motion';
import { Check, Star } from 'lucide-react';

const packages = [
  {
    name: "Başlangıç",
    price: "1.250€",
    desc: "Kurumsal kimliğinizi dijital dünyada oluşturun.",
    features: ["5 Sayfa Responsive Tasarım", "Temel SEO Optimizasyonu", "SSL Güvenlik Sertifikası", "İletişim Formu Entegrasyonu", "Mobil Uyumlu Arayüz"],
    highlight: false,
    delay: 0.1
  },
  {
    name: "Profesyonel",
    price: "2.250€",
    desc: "Büyüyen işletmeler için kapsamlı çözüm.",
    features: ["10+ Sayfa Özel Tasarım", "Gelişmiş SEO & Blog", "Çoklu Dil Desteği (TR/EN)", "Yönetim Paneli (CMS)", "Google Analytics Kurulumu", "6 Ay Teknik Destek"],
    highlight: true, // Bu paket öne çıkacak
    delay: 0.2
  },
  {
    name: "Enterprise",
    price: "4.500€",
    desc: "Tam kapsamlı dijital dönüşüm ve otomasyon.",
    features: ["Özel Kodlama & Yazılım", "E-Ticaret Entegrasyonu", "API & CRM Bağlantıları", "Global CDN & Hız Optimizasyonu", "Sınırsız Dil Seçeneği", "1 Yıl Öncelikli Bakım"],
    highlight: false,
    delay: 0.3
  }
];

const Pricing = () => {
  return (
    <section className="relative py-32 px-6 overflow-hidden">
      
      {/* Arka Plan Işıklandırması */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[500px] bg-neon-purple/10 rounded-full blur-[120px] pointer-events-none" />

      <div className="max-w-7xl mx-auto relative z-10">
        
        {/* Başlık */}
        <div className="text-center mb-20">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">Şeffaf Fiyatlandırma</h2>
          <p className="text-crystal-light/60 text-lg">
            Sürpriz maliyet yok. İşletmenizin ihtiyacına uygun paketi seçin.
          </p>
        </div>

        {/* Paketler Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-center">
          {packages.map((pkg, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: pkg.delay, duration: 0.5 }}
              className={`relative p-8 rounded-[2rem] border transition-all duration-300 group
                ${pkg.highlight 
                  ? 'bg-glass-dark/60 border-neon-blue/30 shadow-[0_0_50px_rgba(79,70,229,0.2)] md:scale-110 z-10' 
                  : 'bg-glass-dark/30 border-glass-border hover:border-glass-border/80'
                }
              `}
            >
              {/* Popüler Etiketi */}
              {pkg.highlight && (
                <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-gradient-to-r from-neon-blue to-neon-purple text-white text-xs font-bold px-4 py-1 rounded-full flex items-center gap-1 shadow-lg">
                  <Star size={12} fill="currentColor" /> EN ÇOK TERCİH EDİLEN
                </div>
              )}

              {/* Başlık ve Fiyat */}
              <div className="text-center mb-8">
                <h3 className={`text-xl font-medium mb-2 ${pkg.highlight ? 'text-white' : 'text-crystal-light'}`}>
                  {pkg.name}
                </h3>
                <div className="text-4xl font-bold text-white mb-2">{pkg.price}</div>
                <p className="text-sm text-crystal-light/50">{pkg.desc}</p>
              </div>

              {/* Özellik Listesi */}
              <ul className="space-y-4 mb-8">
                {pkg.features.map((feature, i) => (
                  <li key={i} className="flex items-start gap-3 text-sm text-crystal-light/80">
                    <Check size={18} className={pkg.highlight ? 'text-neon-blue' : 'text-crystal-light/40'} />
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>

              {/* Buton */}
              <button className={`w-full py-4 rounded-xl font-bold transition-all duration-300
                ${pkg.highlight
                  ? 'bg-white text-space-950 hover:scale-105 shadow-lg'
                  : 'bg-white/5 text-white border border-white/10 hover:bg-white/10'
                }
              `}>
                Paketi Seç
              </button>

            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default Pricing;