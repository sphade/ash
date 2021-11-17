import React from "react";
import { useHistory } from "react-router-dom";
import styled from "styled-components";

const Index = ({ id, image, value, text, bg, link }) => {
  const history = useHistory();
  return (
    <Container onClick={() => history.push(link)} id={id} bg={bg}>
      <img src={image} alt="" />
      <div>
        <h1>{value.toLocaleString()}</h1>
        <h6>{text}</h6>
      </div>
    </Container>
  );
};

export default Index;

const Container = styled.div`
  width: 100%;
  height: 150px;
  border-radius: 10px;
  padding: 2rem 1.5rem;
  display: flex;
  column-gap: 2rem;
  background-image: url(${(props) => props.bg});
  background-repeat: no-repeat;
  background-size: 100% 100%;
  cursor: pointer;
  img {
    width: 60px;
    height: 60px;
  }

  h1 {
    font-weight: 500;
    font-size: 2.3rem;
    color: #333333;
    letter-spacing: 0.05px;
    margin-bottom: 0.3em;
    padding: 0;
  }

  h6 {
    font-size: 1rem;
    letter-spacing: 0.001em;
    color: #333;
    opacity: 0.7;
    margin: 0;
    padding: 0;
  }

  .group {
    background: red;
    display: flex;
    justify-coontent: space-between;
  }
`;
