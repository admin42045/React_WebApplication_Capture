import styled from 'styled-components';


import React from 'react';

const ContactUs = () => {
    return(
        <Form>
          <Container>
          <form>
            <label>Name: </label>
            <input type="text" name="input" placeholder=" name" />
            <label>Password:</label>
            <input type="password" name=" password" placeholder="password" />
            <label>Message: </label>
            <textarea rows="7" cols="20" placeholder=" type your message here...."></textarea>
            <button>Submit</button>
          </form>
          </Container>
        </Form>
    )
};

const Form =styled.div `
  min-height: 10vh;
  display: flex;
  text-align: center;
  justify-content: center;
  align-itmes: center;
  padding: 2rem 5rem;
  bachground:#454;
`;


const Container = styled.div `
  background: #5a5c5b; 
  border-radius: 0.5rem;
  color: white;
  font-size: 2rem;
  text-align: left;
  form{
    margin: 5rem;
    display: flex;
    flex-direction: column;
  }
  input {
    font-size: 2rem;
    border-radius: 0.4rem;
    margin: 0.4rem;
  }
  textarea {
    margin: 0.4rem;
    border-radius: 0.4rem;
  }

`;


export default ContactUs;