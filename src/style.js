import styled from 'styled-components';

// styled components
export const About = styled.div `
 min-height: 90vh;
 display: flex;
 align-item: center;
 justify-content: space-between;
 padding: 5rem 10rem;
 color: white;
`;

export const Description =styled.div `
   flex: 1;
   padding-right: 5rem;
   h2 {
       font-weight: lighter;
   }
`;

export const Image = styled.div `
    flex: 1;
    overflow: hidden;
 img{
    box-shadow: 0  10px 15px white;    
    border-radius: 0.5rem;
     width: 100%;
     height: 80vh;
     object-fit: cover;
 }
`;
