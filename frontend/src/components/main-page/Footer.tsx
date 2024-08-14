import React from "react";
import styled from 'styled-components'
import { Link } from 'react-router-dom';


const FooterContainer = styled.div`
background-color: #eec6d5;
margin: 12px auto;
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
@media (max-width:431px) {
 width : auto ;
 display: flex;
 flex-direction:column;
 color: #2d5463;
 font-weight: 400;
}
`

const FooterList = styled.div `
display: flex;
justify-content: space-around;
list-style-type: none;
color: #2d5463;
font-weight: 500;
padding: 12px;
`

const ListItem = styled.li`
  text-decoration: none;
  color:#2d5463b4;
  font-size: 20px;
  font-weight: 400;
  letter-spacing: 2px;
  position: relative;

  &:before {
    content: ''; /* Required for pseudo-element */
    position: absolute; /* Position the pseudo-element absolutely */
    bottom: 0; /* Align the pseudo-element to the bottom */
    left: 0; /* Start the pseudo-element from the left */
    width: 0; /* Initial width */
    height: 2px; /* Height of the border */
    background-color: #79b0a1; /* Color of the border */
    transition: width 0.5s ease; 
  }
  &:hover {
    cursor:pointer; /* Expand width to 100% on hover */
    color: #111549;
    
  }
`
 const StyledLink = styled(Link)`
  text-decoration: none;
  color: inherit; /* Inherit color from the parent */
`;
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

    
      <FooterList>
        <ListItem ><StyledLink to="/" >DressUP</StyledLink></ListItem>
        <ListItem ><StyledLink to='/all' >Shop</StyledLink></ListItem>
        <ListItem>+48 040 787776</ListItem>
        <ListItem>Contact</ListItem>
        <ListItem>Find Us</ListItem>
      </FooterList>
    
  </FooterContainer>
}