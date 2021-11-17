import React from "react";
import styled from "styled-components";
import credit from "../../assets/images/icons/credit.svg";
import debit from "../../assets/images/icons/debit.svg";

const TransactionCard = ({ description, date, amount, type }) => {
  return (
    <Container color={type === "debit" ? "color" : ""}>
      <div className="group">
        <img src={type !== "credit" ? credit : debit} alt="" />
        <div className="row">
          <h3>{description}</h3>
          <span>{date}</span>
        </div>
      </div>
      <h2>{amount}</h2>
    </Container>
  );
};

export default TransactionCard;

const Container = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin: 2rem 0;
  img {
    width: 40px;
    height: 40px;
  }

  .group {
    display: flex;
    align-items: center;
    column-gap: 1.2rem;
  }

  .row {
    display: flex;
    flex-direction: column;
    column-gap: 1.2rem;
  }

  h3 {
    font-weight: 500;
    font-size: 16px;
    letter-spacing: 0.0015em;
    color: #333333;
    margin: 0 0 0.3em;
  }

  h2 {
    font-weight: 500;
    font-size: 16px;
    line-height: 19px;
    color: ${(props) => (props.color ? "#E20B8C" : "#455AFE")};
  }

  span {
    font-weight: normal;
    font-size: 12px;
    line-height: 14px;
    color: #999999;
  }
`;
