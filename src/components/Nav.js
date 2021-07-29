import React from "react";

import styled from "styled-components";
import { Link } from "react-router-dom";

const Nav = () => {
  return (
    <StyledNav>
      <h1>Caption</h1>
      <ul>
        <li className="li" id="li">
          <Link to="/">About Us</Link>
          <div className="line"></div>
        </li>
        <li className="li">
          <Link to="/work">Our Work</Link>
          <div className="line"></div>
        </li>
        <li className="li">
          <Link to="/contact">Contact Us</Link>
          <div className="line"></div>
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
  padding: 1rem 4rem;
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

  .li {
    border-bottom: 3px solid transparent;
    &:hover {
      border-bottom: 3px solid #129cf3;
    }
    &#li {
      border-bottom: 3px solid red;
    }
  }

  h1 {
    margin-left: 6rem;
    font-weight: bold;
    color: white;
    font-style: italic;
    letter-spacing: 0.2rem;
  }
`;

export default Nav;
