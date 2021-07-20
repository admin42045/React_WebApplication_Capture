import React from 'react';

import styled from 'styled-components';


const Nav = () => {
    return(
        <StyledNav>
            <h1><a className="logo" href="#">Capture</a></h1>
            <ul>
                <li><a href="#">Home</a></li>
                <li><a href="#">About</a></li>
                <li><a href="#">Our Work</a></li>
                <li><a href="#">Contact Us</a></li>
            </ul>
        </StyledNav>
    );
};


const  StyledNav = styled.nav `
   min-height: 10vh;
   margin: auto;
   display: flex;
   justify-content: space-between;
   align-items: center;
   padding:1rem 10rem;
   
   a {
       color: white;
       text-decoration: none;
       padding: 2rem;
       font-size: 1.5rem;
   }

   ul {
       display: flex;
       list-style: none;
   }

  .logo{
      font-weight: lighter;
  }

`;

export default Nav;
