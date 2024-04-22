import React, { useState } from 'react'
import styled from 'styled-components';
import { Product } from './Card';
import Card, { ProductsContainer } from './Card';


const FavBanner = styled.div`
display: flex;
flex-direction: column;
justify-content: space-around;
font-size: xx-large;
color: darkgray;
font-weight: 100;
`

const FavImageContainer=styled.div `
position: relative;
z-index: -1;
`
const FavImage = styled.img`
width: 25%;
filter: contrast(35%) brightness(150%);
`


interface FavProps {
    addProducts: Product[]
    onAddToCart: (product: Product) => void
    onDelete: (product: string) => void
}

export const Favorite: React.FC<FavProps> = ({ addProducts, onAddToCart, onDelete }) => {

    const handleAddToCart = (product: Product) => {
        // Call the onAddToCart function to add the product to the cart
        onAddToCart(product)
        // Call the onDelete function to remove the product from favorites
        onDelete(product.id)
    }

    const handleOnAddToFavorite = () => {

    }

    const handleDeleteFromFavorites = (productId: string) => {
        onDelete(productId)
    }

    const toggleFavItem = (productId: string) => {

    }


    return <div>
        {addProducts.length === 0 ? (<FavBanner>

            <FavImageContainer>
                <FavImage src='data:image/png;base64,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' />
            </FavImageContainer>
            <p>Your favorite is empty</p>
            <p>Here is space for your favorites.</p>

        </FavBanner>) : (<ProductsContainer>{addProducts.map(product => (
            <Card key={product.id} product={product} isAddedToCart={false} isAddedToFavorite={true} onAddToCart={() => handleAddToCart(product)} onAddToFavorite={() => handleOnAddToFavorite?.()} onToggleCart={() => toggleFavItem(product.id)} onToggleFav={() => toggleFavItem(product.id)} onDeleteFromFavorites={() => handleDeleteFromFavorites(product.id)} />
        ))}</ProductsContainer>)}

    </div>
}