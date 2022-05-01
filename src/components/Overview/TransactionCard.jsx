import React from "react";
import styled from "styled-components";
import credit from "../../assets/images/icons/credit.svg";
import debit from "../../assets/images/icons/debit.svg";

const TransactionCard = (props, { index }) => {
  return (
    <Container key={index} color={!props.inflow ? "color" : ""}>
      <div className="group">
        <img src={props.inflow ? credit : debit} alt="" />
        <div className="row">
          <h3>
            {props.inflow ? "Credit transaction" : "Debit transaction"} -{" "}
            {props.title}
          </h3>
          <span>{new Date(props.transactionDate).toLocaleDateString()}</span>
        </div>
      </div>
      <h2>
        {props.inflow ? "+" : "-"}
        {props.amount}
      </h2>
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
