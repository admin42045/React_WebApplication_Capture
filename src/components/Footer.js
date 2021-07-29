import styled from "styled-components";
import React from "react";

const Footer = () => {
  return (
    <FooterStyle>
      <p>
        Expert Photography &copy; 2021-2022 . All Rights Reserved. <br />
        Privacy Policy Terms of Use
      </p>
    </FooterStyle>
  );
};

const FooterStyle = styled.div`
  min-height: 10rem;
  padding: 4rem 4rem 2rem 4rem;
  text-align: center;

  p {
    font-size: 1.1rem;
  }
`;

export default Footer;
