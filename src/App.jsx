import React from 'react';
import { Routes, Route } from 'react-router-dom';
import MainLayout from './layouts/MainLayout';
import Home from './pages/Home';
import Corporate from './pages/Corporate';
import Packages from './pages/Packages';

function App() {
  return (
    <Routes>
      <Route path="/" element={<MainLayout />}>
        <Route index element={<Home />} />
        <Route path="corporate" element={<Corporate />} />
        <Route path="packages" element={<Packages />} />
        {/* Diğer sayfalar buraya eklenecek */}
      </Route>
    </Routes>
  );
}

export default App;