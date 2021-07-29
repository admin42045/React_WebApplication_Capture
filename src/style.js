// importing the styled file components if we are using the styled-components
import styled from "styled-components";

// styled components and this file import anywhere
export const About = styled.div`
  min-height: 90vh;
  display: flex;
  align-item: center;
  justify-content: space-between;
  padding: 5rem 10rem;
  color: white;
`;

// also import this file anywhere
export const Description = styled.div`
  flex: 1;
  padding-right: 5rem;
  h2 {
    font-weight: lighter;
  }
`;

// also import this file anywhere
export const Image = styled.div`
  flex: 1;
  overflow: hidden;
  img {
    box-shadow: 0 10px 15px white;
    border-radius: 0.5rem;
    width: 100%;
    height: 80vh;
    object-fit: cover;
  }
`;
