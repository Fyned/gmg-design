import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Code2, Sparkles } from 'lucide-react';

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20 pb-10">
      
      {/* Arka Plan Işık Patlamaları (Spotlights) */}
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-neon-purple/30 rounded-full blur-[128px] pointer-events-none animate-pulse-slow" />
      <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-neon-blue/20 rounded-full blur-[128px] pointer-events-none animate-pulse-slow" style={{ animationDelay: '2s' }} />

      {/* --- ANA HOLOGRAFİK PENCERE --- */}
      <motion.div 
        initial={{ opacity: 0, y: 50, scale: 0.9 }}
        animate={{ opacity: 1, y: 0, scale: 1 }}
        transition={{ duration: 1, ease: "easeOut" }}
        className="relative z-10 w-[90%] max-w-5xl mx-auto"
      >
        {/* Pencere Çerçevesi (Glass Effect) */}
        <div className="relative bg-glass-dark/40 backdrop-blur-2xl border border-glass-border/50 rounded-[2rem] shadow-2xl overflow-hidden group hover:border-glass-border/80 transition-colors duration-500">
          
          {/* Pencere Başlığı (Window Header) */}
          <div className="h-12 border-b border-white/5 flex items-center px-6 justify-between bg-white/5">
            {/* MacOS Neon Kontrol Noktaları */}
            <div className="flex gap-2">
              <div className="w-3 h-3 rounded-full bg-red-500/80 shadow-[0_0_8px_rgba(239,68,68,0.6)]" />
              <div className="w-3 h-3 rounded-full bg-yellow-500/80 shadow-[0_0_8px_rgba(234,179,8,0.6)]" />
              <div className="w-3 h-3 rounded-full bg-green-500/80 shadow-[0_0_8px_rgba(34,197,94,0.6)]" />
            </div>
            <div className="text-xs font-mono text-white/40 tracking-widest uppercase">
              System: MacOS 26 / GMG Core
            </div>
            <div className="w-10" /> {/* Denge için boşluk */}
          </div>

          {/* İçerik Alanı */}
          <div className="p-8 md:p-16 text-center space-y-8 relative">
            
            {/* Dekoratif Kod Parçacıkları (Background Code) */}
            <div className="absolute top-10 left-10 text-xs font-mono text-neon-blue/20 pointer-events-none select-none hidden md:block text-left">
              <div>{'<Div className="future-ui">'}</div>
              <div className="pl-4">{'<System core="active" />'}</div>
              <div className="pl-4">{'<Render target="hologram" />'}</div>
              <div>{'</Div>'}</div>
            </div>

            {/* Başlık ve Etiket */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
            >
              <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-neon-blue/10 border border-neon-blue/20 text-neon-blue text-xs font-bold tracking-wider uppercase mb-6">
                <Sparkles size={12} />
                Next Gen Software Agency
              </span>
              
              <h1 className="text-5xl md:text-7xl font-bold tracking-tight text-white mb-6">
                Camın Ötesini <br />
                <span className="bg-clip-text text-transparent bg-gradient-to-r from-neon-blue via-crystal-light to-neon-purple drop-shadow-[0_0_30px_rgba(189,0,255,0.3)]">
                  Keşfedin.
                </span>
              </h1>
              
              <p className="text-lg md:text-xl text-crystal-light/70 max-w-2xl mx-auto leading-relaxed">
                GMG Design, işletmenizi bugün için değil, gelecek için tasarlar. 
                Holografik arayüzler, yapay zeka entegrasyonu ve kusursuz kod mimarisi.
              </p>
            </motion.div>

            {/* Aksiyon Butonları */}
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{Ql: 0.5 }}
              className="flex flex-col md:flex-row items-center justify-center gap-4 mt-8"
            >
              <button className="group relative px-8 py-4 bg-white text-space-950 rounded-xl font-bold text-lg hover:scale-105 transition-transform duration-300 shadow-[0_0_40px_rgba(255,255,255,0.3)] overflow-hidden">
                <span className="relative z-10 flex items-center gap-2">
                  Projemi Başlat <ArrowRight size={20} />
                </span>
                <div className="absolute inset-0 bg-gradient-to-r from-neon-blue to-neon-purple opacity-0 group-hover:opacity-20 transition-opacity duration-300" />
              </button>

              <button className="px-8 py-4 bg-glass-light/5 border border-white/10 text-white rounded-xl font-medium hover:bg-white/10 hover:border-white/20 transition-all flex items-center gap-2">
                <Code2 size={20} className="text-neon-purple" />
                Teknolojilerimiz
              </button>
            </motion.div>

          </div>
          
          {/* Alt Çizgi Efekti (Bottom Glow) */}
          <div className="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-neon-blue to-transparent opacity-50" />
        </div>
        
        {/* Yansıma Efekti (Reflection under window) */}
        <div className="absolute -bottom-20 left-1/2 -translate-x-1/2 w-[90%] h-20 bg-gradient-to-b from-neon-blue/20 to-transparent blur-3xl -z-10" />
        
      </motion.div>
    </section>
  );
};

export default Hero;