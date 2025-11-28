import React from 'react';
import { Outlet } from 'react-router-dom';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer'; // <-- Yeni: Footer'ı import ettik

const MainLayout = () => {
  return (
    <div className="min-h-screen relative flex flex-col"> {/* flex-col ekledik ki footer alta yapışsın */}
      
      {/* NAVBAR */}
      <Navbar />

      {/* SAYFA İÇERİĞİ (Büyüyerek alanı kaplasın) */}
      <main className="relative z-10 flex-grow">
        <Outlet />
      </main>

      {/* FOOTER */}
      <Footer /> {/* <-- Yeni: En alta Footer'ı yerleştirdik */}

      {/* ARKA PLAN EFEKTLERİ (Global) */}
      <div className="fixed top-0 left-0 w-full h-full overflow-hidden -z-10 pointer-events-none">
         <div className="absolute top-[-10%] left-[-10%] w-[50%] h-[50%] bg-purple-900/20 rounded-full blur-[120px]" />
         <div className="absolute bottom-[-10%] right-[-10%] w-[50%] h-[50%] bg-blue-900/20 rounded-full blur-[120px]" />
      </div>

    </div>
  );
};

export default MainLayout;