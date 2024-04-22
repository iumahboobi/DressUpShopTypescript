import React from 'react'
import { ProductCardContainer, ProductsContainer } from '../components/main-page/Card';
import { Product } from '../components/main-page/Card';
import Card from '../components/main-page/Card';

interface MenProductsProps {
  menProducts: Product[]
  handleAddToCart: (product: Product) => void
  handleAddToFavorite: (product: Product) => void
}

export const MenProducts: React.FC<MenProductsProps> = ({ menProducts, handleAddToCart, handleAddToFavorite }) => {
  return (
    <ProductsContainer>{
      menProducts.filter((product => product.category === "men's clothing")).map(product => (
        <Card key={product.id} product={product} onAddToCart={handleAddToCart} onAddToFavorite={handleAddToFavorite} isAddedToCart={false}/>
      ))
    }
    </ProductsContainer>
  );
};