import React from "react";
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import styled from 'styled-components'
import { useAuth } from './AuthContext'

const NavigationBarOne = styled.ul`
position: sticky;
margin: 30px auto;
width: 70%;
display:flex;
justify-content: space-around;
list-style-type: none;
color:#000000;
padding:10px;
@media (max-width:431px){
 display : block;
 margin: 10px auto;
}

`

const ListItem = styled.li`
  text-decoration: none;
  color:#2d5463;
  font-size: 24px;
  font-weight: 100;
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
  &:hover:before {
    width: 100%; /* Expand width to 100% on hover */
  }
`

const StyledLink = styled(Link)`
  text-decoration: none;
  color: inherit; /* Inherit color from the parent */
`;

interface NavigationBarProps {
}

export const NavigationBar: React.FC<NavigationBarProps> = () => {

  const { token, logout } = useAuth()


  return <NavigationBarOne className="navigation">
    <ListItem><StyledLink to='/all'>All</StyledLink></ListItem>
    <ListItem><StyledLink to='/men'>Men</StyledLink></ListItem>
    <ListItem><StyledLink to='/women'>Women</StyledLink></ListItem>
    <ListItem><StyledLink to='/accessories'>Accessories</StyledLink></ListItem>
    <ListItem><StyledLink to='/addProducts'>AddProducts</StyledLink></ListItem>
    <ListItem><StyledLink to='/electronics'>Electronics</StyledLink></ListItem>
    {token ? (

      <>
        
        <ListItem><StyledLink to='/loginForm' onClick={logout}>Log Out</StyledLink></ListItem>
      </>

    ) : (

      <>
        <ListItem><StyledLink to='/loginForm'>Log In</StyledLink></ListItem>
        <ListItem><StyledLink to='/registerForm'>Register</StyledLink></ListItem>
      </>

    )}
  </NavigationBarOne>
}