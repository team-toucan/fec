import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

import { getAllProducts } from '../../api';

const Products = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    getAllProducts().then((res) => {
      setProducts(res.data);
    });
  }, []);

  return (
    <div>
      {products.map((p, i) => (
        <li key={i}>
          <Link to={`/products/${p.id}`}>{p.name}</Link>
        </li>
      ))}
    </div>
  );
};

export default Products;
