import React, { useEffect, useState } from "react";
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import styled, { keyframes } from 'styled-components'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCartShopping, faSearch, faUser, faHeart } from '@fortawesome/free-solid-svg-icons';
import { Banner } from "./Banner";
import { NavigationBar } from "./NavigationBar";
import { HorizontalLine } from "./Footer";
import { ProductSearch } from "./ProductSearch";

const HeaderContainer = styled.div<{ isHidden: boolean }>`
margin: 0 auto;
left:0;
right: 0;
transition: transform 1s ease-in-out;
transform: translateY(${props => (props.isHidden ? '-100%' : '0')});
`

const flyIn = keyframes`
0%,100% {
  transform:translateX(100%);
  opacity:0;
}
50% {
  transform: translateX(0);
  opacity: 1;
}
75% {
  transform: translateX(0);
  opacity: 0.5;
}
`

const AdvertiseContainer = styled.div`
overflow: hidden;
display:flex;
justify-content: space-between;
background-color: #eec6d5;
color:#ffff;
padding:10px;

/*Media query for mobile devices */
@media (max-width:600px) {
  display: flex;
  flex-direction: column;
}

`
const AdvertiseText = styled.p`
animation: ${flyIn} 6s ease  infinite;
opacity:0;

/*Delay subsequent paragraphs*/

&:nth-child(2) {
  animation-delay:0.5s;
}
&:nth-child(3) {
  animation-delay: 1s;
}

/*Media query for mobile devices */
@media (max-width:431px) {
  animation:none;
  opacity:1;
}
`

const LogoProfile = styled.div`
display:flex;
justify-content: space-between;
align-items: center;
color:#000000;
padding:14px;
height: 50px;
/*Media query for mobile devices */
@media (max-width:431px) {
 display: block;
  height: auto;
  margin: 0 auto;
  padding: 12px 0;
}
`

const Logo = styled.div`
font-size: 50px;
letter-spacing: 4px;
color:#000000;
`
const LogoLink = styled(Link)`
  text-decoration: none;
  color: inherit; /* Inherit color from the parent */
`;


const FixedContainer = styled.div`

width: 100%;
background-color: aliceblue;
top: 0;
transition: top 0.6s ease;
`

/*Cart style */

const CartLink = styled(Link)`
  text-decoration: none;
  color: inherit; /* Inherit color from the parent */
  display: flex;
  flex-direction: column-reverse;
`;

const ProfileLink = styled(Link)`
text-decoration: none;

`

const CartItemNumber = styled.p`
color :#000000;
background-color: #9cebd5;
padding: 4px;
border-radius: 20px;
margin-bottom: 0;
font-weight: bold;

`

const Profile = styled.div`
display:flex;
justify-content: space-between;
color:#000000;
min-width: 15%;
align-items: end;
`


interface HeaderProps {
  cartItemCount: number
  favItemCount: number
}

export const Header: React.FC<HeaderProps> = ({ cartItemCount, favItemCount }) => {

  const [isHidden, setIsHidden] = useState<boolean>(false)


  useEffect(() => {

    const handleScroll = () => {

      const currentScrollPos = window.pageYOffset
      const isAtTop = currentScrollPos > 0
      setIsHidden(isAtTop)
    }
    window.addEventListener('scroll', handleScroll)

    return () => {
      window.removeEventListener('scroll', handleScroll)
    }
  }, [])

  return <HeaderContainer isHidden={isHidden}>
    <AdvertiseContainer>
      <AdvertiseText>New Commers</AdvertiseText>
      <AdvertiseText>BUY ONLINE + PICK UP IN STORE</AdvertiseText>
      <AdvertiseText>FREE SHIPPING ON ORDERS OVER 75$</AdvertiseText>
    </AdvertiseContainer>

    <FixedContainer >
      <LogoProfile  >
        <div>
          <ProductSearch />
        </div>
        <LogoLink to='/'><Logo>DressUp</Logo>
        </LogoLink>
        <Profile>
          <ProfileLink to='/login' >
            <FontAwesomeIcon icon={faUser} size={'2x'} />
          </ProfileLink>
          <CartLink to='/cart' >
            <FontAwesomeIcon icon={faCartShopping} size={'2x'}
            /><CartItemNumber>{cartItemCount}</CartItemNumber>
          </CartLink>

          <CartLink to='/favorite'>
            <FontAwesomeIcon icon={faHeart} size={'2x'} style={{ color: 'rgba(155, 9, 9, 0.925)' }} />
            <CartItemNumber>{favItemCount}</CartItemNumber>
          </CartLink>
        </Profile>
      </LogoProfile>
      <HorizontalLine />
      <NavigationBar />
    </FixedContainer>
  </HeaderContainer>
}