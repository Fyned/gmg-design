import React from 'react';
import logoDark from './assets/logo/logo-dark.png';
import logoLight from './assets/logo/logo-light.png';

function App() {
  // Test için 'dark' veya 'light' yapabilirsin.
  const theme = 'dark'; 

  return (
    <div className={`h-screen w-full flex flex-col items-center justify-center relative overflow-hidden ${theme === 'light' ? 'light' : ''}`}>
      
      {/* Arka Plan Işık Efekti */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-crystal-dark/20 rounded-full blur-[150px] pointer-events-none" />

      {/* İçerik Paneli */}
      <div className="z-10 p-12 text-center
                      bg-glass-dark/50 backdrop-blur-2xl border border-glass-border shadow-glass-md rounded-[3rem]
                      transition-all duration-500">
        
        {/* DÜZELTME BURADA: Mantığı tersine çevirdik */}
        {/* Theme Dark ise -> logoLight (Açık Logo) göster */}
        {/* Theme Light ise -> logoDark (Koyu Logo) göster */}
        <img 
          src={theme === 'dark' ? logoLight : logoDark} 
          alt="GMG Design Logo" 
          className="w-64 md:w-80 h-auto mx-auto mb-6 drop-shadow-[0_0_30px_rgba(165,180,252,0.4)]" 
        />

        <p className="text-crystal-light/90 text-lg tracking-[0.2em] font-light uppercase mt-4">
          System Initialized...
        </p>
        
        <div className="flex items-center justify-center gap-3 mt-6">
          <span className="relative flex h-3 w-3">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
            <span className="relative inline-flex rounded-full h-3 w-3 bg-green-500"></span>
          </span>
          <span className="text-sm font-mono text-green-400">Faz 0: Tamamlandı</span>
        </div>
      </div>

    </div>
  )
}

export default App;