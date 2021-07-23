import React from "react";

import styled from "styled-components";
import { Link } from "react-router-dom";

const Nav = () => {
  return (
    <StyledNav>
      <h1>
        <Link to="/">Capture</Link>
      </h1>
      <ul>
        <li>
          <Link to="/about">About Us</Link>
        </li>
        <li>
          <Link to="/work">Our Work</Link>
        </li>
        <li>
          <Link to="/contact">Contact Us</Link>
        </li>
      </ul>
    </StyledNav>
  );
};

const StyledNav = styled.nav`
  min-height: 10vh;
  margin: auto;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1rem 10rem;
  background: #5c5a5b;

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

  .logo {
    font-weight: lighter;
  }
`;

export default Nav;
