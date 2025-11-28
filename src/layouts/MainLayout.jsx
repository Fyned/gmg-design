import React from 'react';
import { Outlet } from 'react-router-dom';

const MainLayout = () => {
  return (
    <div className="min-h-screen relative">
      
      {/* --- GEÇİCİ NAVBAR (Tasarımı sonraki adımda yapacağız) --- */}
      <nav className="fixed top-6 left-1/2 -translate-x-1/2 w-[90%] md:w-[600px] h-16 
                      bg-glass-dark/60 backdrop-blur-md border border-glass-border rounded-full 
                      flex items-center justify-between px-8 z-50 shadow-glass-lg">
        <div className="text-white font-bold">GMG</div>
        <div className="flex gap-4 text-sm text-crystal-light">
          <span>Ana Sayfa</span>
          <span>Kurumsal</span>
          <span>Paketler</span>
        </div>
      </nav>

      {/* --- SAYFA İÇERİĞİ --- */}
      <main className="relative z-10">
        <Outlet />
      </main>

      {/* --- ARKA PLAN EFEKTLERİ (Global) --- */}
      <div className="fixed top-0 left-0 w-full h-full overflow-hidden -z-10 pointer-events-none">
         <div className="absolute top-[-10%] left-[-10%] w-[50%] h-[50%] bg-purple-900/20 rounded-full blur-[120px]" />
         <div className="absolute bottom-[-10%] right-[-10%] w-[50%] h-[50%] bg-blue-900/20 rounded-full blur-[120px]" />
      </div>

    </div>
  );
};

export default MainLayout;