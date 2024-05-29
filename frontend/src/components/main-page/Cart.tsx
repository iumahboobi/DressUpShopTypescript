import React, { useState } from 'react'
import Card, { Product } from './Card';
import styled from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCcPaypal } from '@fortawesome/free-brands-svg-icons';
import { faCartShopping } from '@fortawesome/free-solid-svg-icons';


/* new card Css */

const CartBanner = styled.div`
display: flex;
flex-direction: column;
justify-content: space-around;
font-size: xx-large;
color: darkgray;
font-weight: 100;
`
const CartImageContainer = styled.div`
position: relative;
z-index: -1;
`
const CartImage = styled.img`
width: 30%;
filter: contrast(35%) brightness(150%);
`

const CartContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  padding: 30px;

  /*Media query for mobile devices */
  @media (max-width:431px) {
    display: flex;
   flex-direction : column ;
   flex-wrap: nowrap;
  }
`;
const LeftBox = styled.div`
  flex: 3; /* 75% width */
  padding: 24px;

  /*Media query for mobile devices */
  @media (max-width:430px) {
    padding: 0;
  }
`;

export const ProductCard = styled.div`
  display: flex;
  align-items: center;
 justify-content: space-around;
  padding: 10px;
  margin-bottom: 10px;
  @media (max-width:375px) {
    flex-direction: column;
    gap: 12px;
  }
`;

export const ProductImage = styled.img`
  width: 150px; /* Adjust width as needed */
  height: 150px; /* Adjust height as needed */
  background-color: lightgray; /* Placeholder color */
  margin-right: 10px;
`;

const ProductDetails = styled.div`
  display: flex;
  justify-content: space-between;
  flex: 1;
`;

const QuantityInput = styled.input`
  width: 50px; /* Adjust width as needed */
  padding: 5px;
  border: 1px solid #ccc;
  border-radius: 4px;
  font-size: 16px;

`

export const ProductTitle = styled.p`
  margin: 0;
`;

export const ProductPrice = styled.p`
  margin: 0;
`;

const PurchaseContainer = styled.div`
  flex: 1;
  border: solid 3px black;
  padding: 16px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  height: 580px;
`;

const TotalContainer = styled.div`
border: solid 2px #282c34;
padding: 10px;
margin-bottom: 10px;
`

const ProductsContainer = styled.div`

margin-bottom: 6px;
padding: 6px;
`

const ProductContainer = styled.div`
margin-bottom: 24px;
padding: 6px;
border-top: 4px dotted #eec6d5;
border-bottom: 4px dotted #eec6d5;
`

const ButtonContainer = styled.div`
 padding :5px ;
 display: flex;
flex-direction: row;
justify-content: flex-end;
`
const CloseButton = styled.button`
background-color: none;
border: solid 2px #000000;
color: #000000;
padding: 6px;
cursor: pointer;

`
const TotalHeader = styled.h3`

text-align: end;
font-size: large;
font-weight: 500;
`

const TotalPrice = styled.h4`

text-align: end;
font-size: x-large;
font-weight: bolder;
`

const PurchaseHeader = styled.h2`
font-size: xx-large;
text-align: left;
`

const PurchasePrice = styled.div`
 display: flex;
 justify-content: space-between;
`
const PurchaseSendinCost = styled(PurchasePrice)`
`
const TotalReceipt = styled(PurchasePrice)`
`
const RecieptContainer = styled.div`
display: flex;
flex: 1;
flex-direction: column;
justify-content: space-between;
`
const PurchaseButtonsContainer = styled.div`

display: flex;
flex-direction:column;
flex: 1;
justify-content: space-evenly;
align-items: center;

@media (max-width:430px){
  gap: 12px;
}
`
const PurchaseButton = styled.button`
padding: 12px;
border: none;
border-radius: 10px;
width: 50%;
font-size: medium;
color: #ffffff;
background-color: #000000;
&:hover {
cursor: pointer;
}
@media (max-width:431px){
  width: 100%;
}

`
const PayPalButton = styled(PurchaseButton)`
background-color: #1c19e7e8;
border: none;
display: flex;
align-items: center;
justify-content: space-around;
&:hover {
background-color:#080675e8;
}
`

const PayPalLogo = styled.img`
width: 40px;
margin-right: 5px;
`
const PaypalText = styled.p`
margin: 0;

@media (max-width:431px){
  font-size: 12px;
}

`
const ParaText = styled.p`
color: #8d8d8d;
`
const ParaPrice = styled.p`
font-weight: 500;
font-size: larger;
`
const ShippingParaText = styled.p<{ isShippingFree: boolean }>`
color: ${(props) => (props.isShippingFree ? 'green' : 'black')};
font-weight: 500;
font-style: ${(props) => (props.isShippingFree ? 'italic' : 'bold')} ;
font-size: larger;
`


interface CartProps {
  addProducts: Product[]
  onDelete: (productId: string) => void
}


export const Cart: React.FC<CartProps> = ({ addProducts, onDelete }) => {

  const [quantities, setQuantities] = useState<{ [key: string]: number }>({})

  const handleQuantityChang = (productId: string, quantity: number) => {
    setQuantities(prevState => ({
      ...prevState,
      [productId]: quantity
    }))
  }

  const sumOfItems = addProducts.reduce((total, product) => {
    const quantity = quantities[product.id] || 1
    return total + (product.price * quantity)
  }, 0).toFixed(2)

  const sendingCost = (Number(sumOfItems) * 0.12).toFixed(2)

  return <div> {addProducts.length === 0 ? (<CartBanner>

    <CartImageContainer>
      <CartImage src='https://img.freepik.com/premium-vector/empty-shopping-cart-graphic_772298-3526.jpg' />
    </CartImageContainer>
    <p>Your Cart is empty</p>
    <p>Please check what we have for you.</p>
  </CartBanner>) : (<CartContainer>
    <LeftBox>
      <>
        <TotalContainer>
          <TotalHeader>Total</TotalHeader>
          <TotalPrice>$ {sumOfItems}</TotalPrice>
        </TotalContainer>
        <ProductsContainer>
          {addProducts.map(product => (
            <ProductContainer>
              <ButtonContainer>
                <CloseButton onClick={() => onDelete(product.id)} >X</CloseButton>
              </ButtonContainer>
              <ProductCard key={product.id}>
                <div>
                  <ProductImage src={product.image} alt={product.title} />
                </div>
                <ProductTitle>{product.title}</ProductTitle>
                <QuantityInput type='number' min='1' max='15' value={quantities[product.id] || 1} onChange={(e) => handleQuantityChang(product.id, parseInt(e.target.value))}  ></QuantityInput>
                <ProductPrice>$ {product.price}</ProductPrice>
              </ProductCard>
            </ProductContainer>
          ))}
        </ProductsContainer>
      </>
    </LeftBox>
    <PurchaseContainer>
      <div>
        <PurchaseHeader>Summary</PurchaseHeader>
        <PurchasePrice>
          <ParaText>Price:</ParaText>
          <ParaPrice>$ {sumOfItems}</ParaPrice>
        </PurchasePrice>
        <PurchaseSendinCost>
          <ParaText>Sending Cost:</ParaText>
          <ShippingParaText isShippingFree={Number(sumOfItems) > 75}>
            {Number(sumOfItems) > 75 ? 'Shipping Free' : `$ ${sendingCost}`}
          </ShippingParaText>
        </PurchaseSendinCost>
      </div>
      <hr></hr>

      <RecieptContainer>
        <div>
          <TotalReceipt>
            <ParaText>Total Price:</ParaText>
            <ParaPrice>$ {Number(sumOfItems) > 75 ? Number(sumOfItems).toFixed(2) : (Number(sumOfItems) + Number(sendingCost)).toFixed(2)}</ParaPrice>
          </TotalReceipt>
          <p>*Free Shipping over $75 shopping</p>
        </div>
        <PurchaseButtonsContainer>
          <PurchaseButton>Zur Kasse</PurchaseButton>
          <PayPalButton>
            <FontAwesomeIcon icon={faCartShopping} />
            <PaypalText>Direct to Paypal</PaypalText>
          </PayPalButton>
        </PurchaseButtonsContainer>
      </RecieptContainer>
    </PurchaseContainer>
  </CartContainer>)}
  </div>

}