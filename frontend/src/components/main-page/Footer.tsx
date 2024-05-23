import React from "react";
import styled from 'styled-components'

const FooterContainer = styled.div`
background-color: #eec6d5;
margin: 12px auto;
`

const AdvertiseContainer = styled.div`
display:flex;
justify-content: space-between;
background-color: #eec6d5;
color:#ffff;
padding:10px;
`

const LogoProfile = styled.div`
display:flex;
justify-content: space-between;
align-items: center;
color:#000000;
padding:10px;
`

const Logo = styled.div`
font-size: 50px;
letter-spacing: 4px;
color:#000000;

`

const NavigationBar = styled.ul`
margin: 0 auto;
height: 200px;
width: 70%;
display:flex;
justify-content: space-around;
align-items: center;
list-style-type: none;
color:#000000;
padding:10px;


@media (max-width:375px) {
 width : auto ;
 display: flex;
 flex-direction:column;
 color: #2d5463;
 font-weight: 400;
}
`

const Profile = styled.div`
display:flex;
justify-content: space-between;
color:#000000;
min-width: 15%;
`
export const HorizontalLine = styled.div`
width: 100%; /* Adjust the width as needed */
height: 2px; /* Adjust the thickness of the line */
background-color: #7c0f0f24; /* Adjust the color of the line */
margin: 10px 0; /* Adjust the margin as needed */
`;

interface HeaderProps {

}

export const Footer: React.FC<HeaderProps> = () => {

  return <FooterContainer>
    
    <NavigationBar>
      <li>DressUP</li>
      <li>Shop</li>
      <li>+48 040 787776</li>
      <li>Contact</li>
      <li>Find Us</li>
    </NavigationBar>
  </FooterContainer>
}