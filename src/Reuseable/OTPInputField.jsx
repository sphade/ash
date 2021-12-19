import React from "react";
import styled from "styled-components";

const Index = ({ fieldname, valueName, onTextChange, onChangeKeyUp, tabIndexValue }) => {
  return (
    <Container
      name={fieldname}
      value={valueName}
      onChange={onTextChange}
      onKeyUp={onChangeKeyUp}
      type="number"
      min="0"
      max="9"
      autoComplete="off"
      tabIndex={tabIndexValue}
      maxLength="1"
    />
  );
};

export default Index;

const Container = styled.input`
  height: 5rem;
  width: 5rem;
  background: #f4f4f4;
  border: 1px solid #e5e5e5;
  box-sizing: border-box;
  border-radius: 5px;
  font-size: 3em;
  color: #333333;
  text-align: center;

  :focus {
    outline: none;
    border: 1px solid #bdbdbd;
  }
`;
