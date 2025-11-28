import React from 'react';
import { Link } from 'react-router-dom';
import { Github, Twitter, Linkedin, Instagram, Mail, Phone, MapPin } from 'lucide-react';
import logoLight from '../assets/logo/logo-light.png';

const Footer = () => {
  return (
    <footer className="relative border-t border-white/10 bg-space-950 pt-20 pb-10 overflow-hidden">
      
      {/* Arka Plan Glow Efekti */}
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[1000px] h-[400px] bg-neon-blue/5 rounded-full blur-[120px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-16">
          
          {/* 1. Sütun: Marka ve Sosyal Medya */}
          <div className="space-y-6">
            <Link to="/" className="block w-32">
               <img src={logoLight} alt="GMG Design" className="w-full h-auto opacity-90 hover:opacity-100 transition-opacity" />
            </Link>
            <p className="text-crystal-light/60 text-sm leading-relaxed">
              Geleceğin teknolojisini bugünün estetiğiyle buluşturuyoruz. 
              Dijital dünyada iz bırakmak isteyenler için buradayız.
            </p>
            <div className="flex gap-4">
              <a href="#" className="text-crystal-light/60 hover:text-white transition-colors"><Twitter size={20} /></a>
              <a href="#" className="text-crystal-light/60 hover:text-white transition-colors"><Linkedin size={20} /></a>
              <a href="#" className="text-crystal-light/60 hover:text-white transition-colors"><Instagram size={20} /></a>
              <a href="#" className="text-crystal-light/60 hover:text-white transition-colors"><Github size={20} /></a>
            </div>
          </div>

          {/* 2. Sütun: Hızlı Erişim */}
          <div>
            <h4 className="text-white font-bold mb-6">Hızlı Erişim</h4>
            <ul className="space-y-4 text-sm text-crystal-light/60">
              <li><Link to="/" className="hover:text-neon-blue transition-colors">Ana Sayfa</Link></li>
              <li><Link to="/corporate" className="hover:text-neon-blue transition-colors">Kurumsal</Link></li>
              <li><Link to="/packages" className="hover:text-neon-blue transition-colors">Paketler</Link></li>
              <li><Link to="/contact" className="hover:text-neon-blue transition-colors">İletişim</Link></li>
            </ul>
          </div>

          {/* 3. Sütun: Hizmetler */}
          <div>
            <h4 className="text-white font-bold mb-6">Hizmetler</h4>
            <ul className="space-y-4 text-sm text-crystal-light/60">
              <li className="hover:text-neon-blue transition-colors cursor-pointer">UI/UX Tasarım</li>
              <li className="hover:text-neon-blue transition-colors cursor-pointer">Web Yazılım</li>
              <li className="hover:text-neon-blue transition-colors cursor-pointer">Mobil Uygulama</li>
              <li className="hover:text-neon-blue transition-colors cursor-pointer">SEO & Pazarlama</li>
            </ul>
          </div>

          {/* 4. Sütun: İletişim */}
          <div>
            <h4 className="text-white font-bold mb-6">İletişim</h4>
            <ul className="space-y-4 text-sm text-crystal-light/60">
              <li className="flex items-start gap-3">
                <MapPin size={18} className="text-neon-purple shrink-0" />
                <span>Teknopark İstanbul, <br />Sanayi Mah. No:1</span>
              </li>
              <li className="flex items-center gap-3">
                <Phone size={18} className="text-neon-purple shrink-0" />
                <span>+90 552 857 44 42</span>
              </li>
              <li className="flex items-center gap-3">
                <Mail size={18} className="text-neon-purple shrink-0" />
                <span>info@gmgdesign.com</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Alt Bar: Telif Hakkı */}
        <div className="pt-8 border-t border-white/5 flex flex-col md:flex-row items-center justify-between gap-4 text-xs text-crystal-light/40">
          <p>&copy; {new Date().getFullYear()} GMG Design. Tüm hakları saklıdır.</p>
          <div className="flex gap-6">
            <a href="#" className="hover:text-white transition-colors">Gizlilik Politikası</a>
            <a href="#" className="hover:text-white transition-colors">Kullanım Şartları</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;