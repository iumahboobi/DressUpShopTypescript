import React from 'react'
import { ProductsContainer } from '../components/main-page/Card';
import { Product } from '../components/main-page/Card';
import Card from '../components/main-page/Card';


interface accessoriesProps {
  accessories: Product[]
  handleAddToCart: (product: Product) => void
  handleAddToFavorite: (product: Product) => void
}

export const AccessoriesProducts: React.FC<accessoriesProps> = ({ accessories, handleAddToCart, handleAddToFavorite }) => {
  return (
    <ProductsContainer>
      {accessories.filter((product => product.category === "jewelry")).map(product => (
        <Card key={product.id} product={product} onAddToCart={handleAddToCart} onAddToFavorite={handleAddToFavorite} isAddedToCart={false} />
      ))}
    </ProductsContainer>
  );
};