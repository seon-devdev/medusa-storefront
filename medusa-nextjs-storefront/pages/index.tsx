import React from 'react';
import { fetchProducts } from '../api/api';
import ProductCard from '../components/ProductCard';

export default async function Home() {
  const products = await fetchProducts();

  return (
    <div>
      <h1>Products</h1>
      <div className="product-list">
        {products.map((product: any) => (
          <ProductCard
            key={product.id}
            id={product.id}
            title={product.title}
            description={product.description}
            price={product.variants[0]?.prices[0]?.amount / 100 || 0}
            imageUrl={product.thumbnail || '/placeholder.png'}
          />
        ))}
      </div>
    </div>
  );
}