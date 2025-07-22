import React from 'react';

interface ProductCardProps {
  id: string;
  title: string;
  description: string;
  price: number;
  imageUrl: string;
}

const ProductCard: React.FC<ProductCardProps> = ({ id, title, description, price, imageUrl }) => {
  return (
    <div className="product-card" key={id}>
      <img src={imageUrl} alt={title} />
      <h2>{title}</h2>
      <p>{description}</p>
      <p>${price.toFixed(2)}</p>
      <button>Add to Cart</button>
    </div>
  );
};

export default ProductCard;