import React from 'react';
import { Routes, Route } from 'react-router-dom';
import ProductShow from '@components/ProductShow';
import Products from './components/Products';

const App = () => {
  return (
    <div class="container mx-auto">
      <Routes>
        <Route path="/" element={<Products />} />
        <Route path="/products/:id" element={<ProductShow />} />
      </Routes>
    </div>
  );
};

export default App;