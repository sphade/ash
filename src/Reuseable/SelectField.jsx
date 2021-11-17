import React from "react";
import styled from "styled-components";

const SelectField = ({options}) => {
  return <Container border radius height width>
      {options}
  </Container>;
};

export default SelectField;

const Container = styled.select`
  padding: 0 1em;
  border: ${(props) => (props.border ? "none" : "1px solid #e5e5e5")};
  border-radius: ${(props) => (props.radius ? "5px" : "10px")};
  height: ${(props) => (props.height ? "3rem" : "")};
  width: ${(props) => (props.width ? "150px" : "")};

  :focus {
    outline: none;
    box-shadow: none;
  }
`;
