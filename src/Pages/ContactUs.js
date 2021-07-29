import styled from "styled-components";

import React from "react";

const ContactUs = () => {
  return (
    <Form>
      <Container>
        <form>
          <label>Name: </label>
          <input type="text" name="input" placeholder=" name" />
          <label>Password:</label>
          <input type="password" name=" password" placeholder=" password" />
          <label>Message: </label>
          <textarea
            rows="7"
            cols="20"
            placeholder=" type your message here...."
          ></textarea>
          <button id="cb">Submit</button>
        </form>
      </Container>
    </Form>
  );
};

const Form = styled.div`
  min-height: 10vh;
  display: flex;
  text-align: center;
  justify-content: center;
  align-itmes: center;
  padding: 2rem 5rem;
  bachground: #454;
  #cb {
    font-size: 1.5rem;
    padding: 0.5rem;
    width: 10vw;
    margin: 1rem 10rem;
  }
`;

const Container = styled.div`
  background: #5a5c5b;
  border-radius: 0.5rem;
  color: white;
  font-size: 2rem;
  text-align: left;
  form {
    margin: 4rem;
    display: flex;
    flex-direction: column;
  }
  input {
    font-size: 2rem;
    border-radius: 0.4rem;
    border: 0.1rem solid #129cf3;
    margin: 0.4rem;
  }
  textarea {
    margin: 0.4rem;
    border-radius: 0.4rem;
    border: 0.1rem solid #129cf3;
  }
`;

export default ContactUs;
