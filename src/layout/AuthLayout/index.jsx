import React from "react";
import styled from "styled-components";
import { rem } from "polished";
import { ReactComponent as Cancel } from "../../assets/images/icons/cancel.svg";
import { ReactComponent as Back } from "../../assets/images/icons/back.svg";
import { FaInfoCircle } from "react-icons/fa";

const Index = ({ bgImage, content }) => {
  return (
    <React.Fragment>
      <Container id="container">
        <LeftFrame>
          <img src={bgImage} alt="Background" />
        </LeftFrame>
        <RightFrame>{content}</RightFrame>
      </Container>
      <div className="screen-size-message text-center">
        <FaInfoCircle fontSize="5rem" />
        <div>This dashboard currently doesn't support mobile devices.</div>
        <div className="mt-3">
          For best experience, We recommend you access the dashboard with{" "}
          <b>Google Chrome, Mozilla Firefox or any other suitable browser </b>{" "}
          on a<b> DESKTOP or TABLET</b> device!
        </div>
      </div>
    </React.Fragment>
  );
};

export default Index;

const Container = styled.div`
  width: 100vw;
  height: 100vh;
  box-sizing: border-box;
  display: grid;
  grid-template-columns: 1fr 2fr;

  input[type="number"]::-webkit-inner-spin-button,
  input[type="number"]::-webkit-outer-spin-button {
    -webkit-appearance: none;
    -moz-appearance: none;
    appearance: none;
    margin: 0;
  }

  p.error-msg {
    text-align: left !important;
    margin: 0px;
    padding: 0;
    margin-top: 0.5em;
    font-size: ${rem("13px")};
    letter-spacing: ${rem("0.13px")};
    color: #ff5e5e;
    opacity: 1;
  }

  p.success {
    text-align: left !important;
    margin: 0px;
    padding: 0;
    margin-top: 0.5em;
    font-size: ${rem("13px")};
    font-weight: bold;
    letter-spacing: ${rem("0.13px")};
    color: green;
    opacity: 1;
  }
`;

const LeftFrame = styled.div`
  height: 100%;
  position: relative;

  img {
    position: absolute;
    height: 100%;
    width: 100%;
    object-fit: stretch;
    padding: 0 !important;
    margin: 0 important;
  }
`;

const RightFrame = styled.div`
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;

  h3 {
    font-style: normal;
    font-weight: 500;
    font-size: 2rem;
    line-height: 40px;
    letter-spacing: 0.0015em;
    color: #333333;
  }

  h4 {
    font-style: normal;
    font-weight: bold;
    font-size: 1.2rem;
    line-height: 23px;
    letter-spacing: 0.0015em;
    color: #999999;
  }

  form {
    width: 40%;
    display: flex;
    flex-direction: column;
    row-gap: 1.5rem;

    .img {
      width: 180px;
      height: 180px;
    }

    @media screen and (max-width: 1030px) {
      width: 80%;
    }

    .group {
      width: 100%;
      display: flex;
      flex-direction: column;
      row-gap: 0.8em;
    }
  }

  .input_field_wrapper {
    .label {
      font-style: normal;
      font-weight: 500;
      font-size: 16px;
      line-height: 22px;
      color: #666666;
      margin-bottom: 0.3em;
    }
  }

  .others_wrapper {
    display: flex;
    justify-content: space-between;
  }
`;

export const CancelButton = styled(Cancel)`
  position: absolute;
  right: 4rem;
  top: 2rem;
  cursor: pointer;

  :hover {
    transform: scale(1.1);
  }
`;

export const BackButton = styled(Back)`
  position: absolute;
  left: 4rem;
  top: 2rem;
  cursor: pointer;

  :hover {
    transform: scale(1.1);
  }
`;
