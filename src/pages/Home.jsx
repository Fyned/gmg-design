import React from 'react';
import Hero from '../components/Hero';
import Services from '../components/Services'; // Yeni ekledik

const Home = () => {
  return (
    <>
      <Hero />
      <Services /> {/* Bento Grid Hizmetler */}
      
      {/* Geçici Footer Yeri (Boşluk kalsın diye) */}
      <div className="h-20" />
    </>
  );
};

export default Home;