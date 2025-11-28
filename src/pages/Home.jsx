import React from 'react';
import Hero from '../components/Hero';
import Services from '../components/Services';
import Pricing from '../components/Pricing'; // Yeni ekledik

const Home = () => {
  return (
    <>
      <Hero />
      <Services />
      <Pricing /> {/* Fiyatlandırma Bölümü */}
      
      {/* Geçici Footer (Hala yer tutucu) */}
      <div className="h-20" />
    </>
  );
};

export default Home;