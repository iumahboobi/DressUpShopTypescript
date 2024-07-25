import React from 'react';
import styled from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStar, faGlobe } from '@fortawesome/free-solid-svg-icons';
// Styled component for the products container
export const ProductsContainer = styled.div` 
  display: flex;
  flex-wrap:wrap;
  gap: 50px;
  
  @media (max-width:431px) {
    padding: 0px;
  }


`;

// Styled component for the product card container
export const ProductCardContainer = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    width: 500px;
    border: 1px solid #ccc;
    border-radius: 8px;
    padding: 16px;
    box-shadow: 0 0 10px rgba(0, 0, 0, 0.6);
`;

/* Second Card*/

const Wrapper = styled.div`
display: flex;
margin: 0 auto;
background-color: #39879c1a;
padding: 12px;
min-width: 47%;
justify-content: space-around;
border-radius:43% 57% 74% 26% / 25% 71% 29% 75%;
@media (max-width:431px) { 
      display: block;
    }
`
const ProductImmage = styled.div`
`

const ProductInfo = styled.div`
display: flex;
flex-direction: column;
`
const ProductText = styled.div`
 height: 300px;
  width: 327px;
`

const ProductHeader = styled.h1`
font-family: 'Bentham', serif;
font-size: 24px;
`
const ProductDescriptions = styled.p`
  min-height: 100px;
  margin: 0 0 0 38px;
  font-family: 'Playfair Display', serif;
  color: #8d8d8d;
  text-align: justify;
  line-height: 1.7em;
  font-size: 15px;
  font-weight: lighter;
  overflow: hidden;
`
const ProductButtons = styled.div`
display: flex;
justify-content: space-around;
`
const RatingCountContainer = styled(ProductButtons)`
  padding: 12px;
`
const RateSpan = styled.span`
color: #8d8d8d;
margin-left: 4px;
`
const CountSpan = styled.span`
color: #8d8d8d;
margin-left: 4px;
`
const ProductButton = styled.div`
`

const ProductPriceButtonPara = styled.p`
`

const ProductSpan = styled.span`
font-family: 'Suranna', serif;
font-size: 34px;
`
const ProductPriceButton = styled.button`
 height: 50px;
  width: 176px;
  margin: 0 40px 0 16px;
  box-sizing: border-box;
  border: transparent;
  border-radius: 60px;
  font-family: 'Raleway', sans-serif;
  font-size: 14px;
  font-weight: 500;
  text-transform: uppercase;
  letter-spacing: 0.2em;
  color: #ffffff;
  background-color: #9cebd5;
  cursor: pointer;
  outline: none;
  &:hover{
    background-color: #79b0a1;
  }
`
const ProductDeleteButton = styled(ProductPriceButton)`
background-color: #ad5555;

&:hover{
  background-color: brown;    
  }
`
// Define the interface for the product
export interface Product {
  id: string
  image: string;
  title: string;
  description: string;
  price: number;
  category: string
  rating: {
    rate: number;
    count: number;
  }
}

// Define the props interface for the ProductCard component
export interface CardProps {
  product: Product;
  isAddedToCart?: boolean
  isAddedToFavorite?: boolean
  onAddToCart: (product: Product) => void;
  onAddToFavorite: (product: Product) => void;
  onToggleCart?: () => void
  onToggleFav?: () => void
  onDeleteFromFavorites?: (product: Product) => void
}

export const Card: React.FC<CardProps> = ({ product, isAddedToCart, isAddedToFavorite, onAddToCart, onAddToFavorite, onToggleCart, onDeleteFromFavorites }) => {
  const { rating } = product;
  const rate = rating ? rating.rate : 'N/A';
  const count = rating ? rating.count : 'N/A';
  return <Wrapper key={product.id}>
    <ProductImmage >
      <img src={product.image} alt={product.title} height="420" width="327" />
    </ProductImmage>
    <ProductInfo >
      <ProductText>
        <ProductHeader>{product.title}</ProductHeader>
        <ProductDescriptions>{product.description}</ProductDescriptions>
      </ProductText>
      <div>
        <ProductButton>
          <ProductPriceButtonPara>$<ProductSpan>{product.price}</ProductSpan>
          </ProductPriceButtonPara>
          <RatingCountContainer>
            <div>
              <FontAwesomeIcon icon={faStar} color='gold' />
              <RateSpan>Rating: {rate}</RateSpan>
            </div>
            <div>
              <FontAwesomeIcon icon={faGlobe} />
              <CountSpan>Count: {count}</CountSpan>
            </div>
          </RatingCountContainer>

          <ProductButtons>
            <ProductPriceButton onClick={() => isAddedToCart ? onToggleCart && onToggleCart() : onAddToCart(product)}>{isAddedToCart ? 'Add to Cart' : 'Add to Cart'}</ProductPriceButton>
            {isAddedToFavorite ?
              (<ProductDeleteButton onClick={() => onDeleteFromFavorites && onDeleteFromFavorites(product)}>{'Delete'}</ProductDeleteButton>)
              : (<ProductPriceButton onClick={() => onAddToFavorite(product)}>{'Add Favorite'}</ProductPriceButton>
              )
            }
          </ProductButtons>
        </ProductButton>
      </div>
    </ProductInfo>
  </Wrapper>
};

export default Card;