import React from 'react';
import { Routes, Route } from 'react-router-dom';
import ProductShow from '@components/ProductShow';
import Products from '@components/Products';
import AppBar from '@components/AppBar';

const App = () => {
  return (
    <div className="container mx-auto">
      <AppBar />
      <Routes>
        <Route path="/" element={<Products />} />
        <Route path="/products/:id" element={<ProductShow />} />
      </Routes>
    </div>
  );
};

export default App;
