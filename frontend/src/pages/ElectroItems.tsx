import React from 'react'
import { ProductsContainer } from '../components/main-page/Card';
import { Product } from '../components/main-page/Card';
import Card from '../components/main-page/Card';


interface ElectroProps {

  electroProducts: Product[]
  handleAddToCart: (product: Product) => void
  handleAddToFavorite: (product: Product) => void
}

export const Electronics: React.FC<ElectroProps> = ({ electroProducts, handleAddToCart, handleAddToFavorite }) => {
  return (
    <ProductsContainer>
      {electroProducts.filter((product => product.category === "electronics")).map(product => (
        <Card key={product.id} product={product} onAddToCart={handleAddToCart} onAddToFavorite={handleAddToFavorite} isAddedToCart={false} />
      ))}
    </ProductsContainer>
  );
};