import React, { useState } from 'react'
import Card, { ProductsContainer } from './Card';
import { products } from '../../data/products';
import { Product } from './Card';

interface AllProps {
  handleAddToCart: (product: Product) => void
  handleAddToFavorite: (product: Product) => void
}

export const All: React.FC<AllProps> = ({ handleAddToCart,handleAddToFavorite }) => {

  const [cartItems, setCartItems] = useState<string[]>([])
  const [favItems, setFavItems] = useState<string[]>([])

  const toggleCartItem = (productId: string) => {
    if (cartItems.includes(productId.toString())) {
      setCartItems(cartItems.filter(id => id !== productId.toString()))
    }
    else {
      setCartItems([...cartItems, productId.toString()])
    }
  }

  const toggleFavItem =(productId:string)=> {

    if (favItems.includes(productId.toString())) {
      setFavItems(favItems.filter(id => id !== productId.toString()))
    }
    else {
      setFavItems([...favItems, productId.toString()])
    }

  }

  return (
    <ProductsContainer>
      {products.map((product) => (
        <Card key={product.id} product={product} onAddToCart={handleAddToCart} onAddToFavorite={handleAddToFavorite} isAddedToCart={cartItems.includes(product.id)} onToggleCart={() => toggleCartItem(product.id)} onToggleFav={() => toggleFavItem(product.id)} />
      ))}
    </ProductsContainer>
  );
};

