import React from 'react';
import styled from 'styled-components';
import Content from './Content';
import Navbar from './Navbar';
import Sidebar from './Sidebar';

const Index = ({ children }) => {
  return (
    <React.Fragment>
      <Container id='container'>
        <Navbar />
        <Sidebar />
        <Content>{children}</Content>
      </Container>
    </React.Fragment>
  );
};

export default Index;

const Container = styled.div``;
