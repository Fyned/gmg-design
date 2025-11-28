import React from 'react';
import Hero from '../components/Hero';
import Services from '../components/Services';
import Pricing from '../components/Pricing';

const Home = () => {
  return (
    <>
      <Hero />
      <Services />
      <Pricing />
      {/* O eski div'i sildik */}
    </>
  );
};

export default Home;