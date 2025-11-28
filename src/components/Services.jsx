import React from 'react';
import { motion } from 'framer-motion';
import { Layout, Smartphone, Globe, Cpu, ShieldCheck, Rocket } from 'lucide-react';

const services = [
  {
    title: "Web UI/UX Tasarım",
    desc: "Kullanıcı deneyimini sanatla buluşturan, piksel mükemmelliğinde arayüzler.",
    icon: <Layout size={32} className="text-neon-blue" />,
    colSpan: "md:col-span-2", // Geniş Kart
    bg: "bg-gradient-to-br from-glass-dark/60 to-neon-blue/5"
  },
  {
    title: "Mobil Uygulama",
    desc: "iOS ve Android için native performans ve kusursuz akış.",
    icon: <Smartphone size={32} className="text-neon-purple" />,
    colSpan: "md:col-span-1", // Kare Kart
    bg: "bg-glass-dark/40"
  },
  {
    title: "SEO & Dijital Pazarlama",
    desc: "Markanızı arama motorlarında ve sosyal medyada zirveye taşıyın.",
    icon: <Globe size={32} className="text-green-400" />,
    colSpan: "md:col-span-1", // Kare Kart
    bg: "bg-glass-dark/40"
  },
  {
    title: "Özel Yazılım Çözümleri",
    desc: "İş süreçlerinizi otomatize eden güçlü algoritmalar, CRM ve ERP sistemleri.",
    icon: <Cpu size={32} className="text-yellow-400" />,
    colSpan: "md:col-span-2", // Geniş Kart
    bg: "bg-gradient-to-br from-glass-dark/60 to-neon-purple/5"
  }
];

const Services = () => {
  return (
    <section className="relative py-24 px-6">
      
      {/* Arka Plan Dekoru */}
      <div className="absolute right-0 top-1/4 w-1/2 h-1/2 bg-neon-blue/5 blur-[100px] pointer-events-none" />

      <div className="max-w-6xl mx-auto">
        
        {/* Başlık */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-16 text-center"
        >
          <span className="text-neon-purple text-sm font-bold tracking-widest uppercase mb-2 block">
            Hizmetlerimiz
          </span>
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Dijital Ekosistem
          </h2>
          <p className="text-crystal-light/60 max-w-2xl mx-auto text-lg">
            GMG Design olarak, sadece kod yazmıyoruz; markanızın dijital geleceğini inşa eden kapsamlı bir ekosistem sunuyoruz.
          </p>
        </motion.div>

        {/* Bento Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {services.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1, duration: 0.5 }}
              viewport={{ once: true }}
              whileHover={{ y: -5 }}
              className={`${service.colSpan} ${service.bg} backdrop-blur-xl border border-glass-border rounded-[2rem] p-8 flex flex-col justify-between group hover:border-glass-border/80 transition-all duration-300 relative overflow-hidden shadow-glass-sm`}
            >
              {/* Hover Glow Effect */}
              <div className="absolute inset-0 bg-white/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />
              
              {/* İkon Kutusu */}
              <div className="mb-6 p-4 bg-white/5 rounded-2xl w-fit border border-white/10 group-hover:scale-110 transition-transform duration-300">
                {service.icon}
              </div>
              
              {/* İçerik */}
              <div>
                <h3 className="text-2xl font-bold text-white mb-3">{service.title}</h3>
                <p className="text-crystal-light/70 leading-relaxed">{service.desc}</p>
              </div>

              {/* Dekoratif Köşe Işığı */}
              <div className="absolute -bottom-4 -right-4 w-24 h-24 bg-white/5 rounded-full blur-2xl group-hover:bg-white/10 transition-colors" />
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default Services;