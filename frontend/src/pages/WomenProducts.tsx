import React from 'react'
import { ProductsContainer } from '../components/main-page/Card';
import { Product } from '../components/main-page/Card';
import Card from '../components/main-page/Card';
interface womenProductsProps {
  womenProducts: Product[]
  handleAddToCart: (product: Product) => void
  handleAddToFavorite: (product: Product) => void
}

export const WomenProducts: React.FC<womenProductsProps> = ({ womenProducts, handleAddToCart, handleAddToFavorite }) => {
  return (
    <ProductsContainer>
      {womenProducts.filter((product => product.category === "women's clothing")).map(product => (
        <Card key={product.id} product={product} onAddToCart={handleAddToCart} onAddToFavorite={handleAddToFavorite} isAddedToCart={false} />
      ))}
    </ProductsContainer>
  );
};