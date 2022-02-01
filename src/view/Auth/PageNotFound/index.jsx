import React from 'react';
import { AuthLayout } from '../../../layout';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import { FaInfoCircle } from 'react-icons/fa';

const Index = () => {
  return (
    <AuthLayout
      children={
        <Container>
          <FaInfoCircle fontSize='5rem' />
          <h1>Page Not Found!</h1>
          <p>The page you are trying to visit doesn't exist.</p>
          <Button to='/login'>Go Back To Home</Button>
        </Container>
      }
    />
  );
};

export default Index;

const Container = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  gap: 2rem;

  h1 {
    // color: #e20b8c;
    font-size: 2.5em;
  }

  p {
    // color: #e20b8c;
    font-size: 1.5em;
  }
`;

const Button = styled(Link)`
  border: none;
  background: #000;
  color: #fff;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 0.7em 2em;
  font-weight: 600;
  font-size: 20px;
  text-decoration: none;
  border-radius: 10px;

  :hover {
    color: #fff;
    opacity: 0.7;
  }
`;
