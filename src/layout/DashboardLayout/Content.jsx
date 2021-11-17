import React from "react";
import styled from "styled-components";
import {ReactComponent as ChevronLeft} from '../../assets/images/icons/chevron-left.svg';
const Content = ({ children }) => {
  return <Container>{children}</Container>;
};

export default Content;

const Container = styled.div`
  position: relative;
  top: 64px;
  left: 250px;
  width: calc(100vw - 250px);
  height: -webkit-calc(100% - 64px);
  height: -moz-calc(100% - 64px);
  min-height: calc(100vh - 64px);
  background: #efefef;
  padding: 2rem 3rem;
  color:#666666;
  overflow-x: hidden !important;
`;

export const BackArrow = styled(ChevronLeft)`
  cursor: pointer;

  :hover {
    transform: scale(1.05);
  }
`;
