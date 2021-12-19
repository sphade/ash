import React from "react";
import { Modal } from "antd";
import styled from "styled-components";
import { InputField, Button } from "../../../Reuseable";

export const CreatePromotionModal = ({ show, handleClose }) => {
  return (
    <Modal
      visible={show}
      width={565}
      footer={null}
      closable={false}
      centered={true}
    >
      <Container>
        <h3>Create Promotion</h3>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sollicitudin
          in ultricies sem id vel tincidunt nunc nec.
        </p>
        <form action="">
          <div className="item">
            <h4>Promo Code</h4>
            <InputField />
          </div>
          <div className="group">
            <div className="item">
              <h4>Start Date</h4>
              <InputField />
            </div>
            <div className="item">
              <h4>Time</h4>
              <InputField />
            </div>
          </div>
          <div className="group">
            <div className="item">
              <h4>End Date</h4>
              <InputField />
            </div>
            <div className="item">
              <h4>Time</h4>
              <InputField />
            </div>
          </div>
          <div className="item">
            <h4>Description</h4>
            <InputField />
          </div>
          <div className="btn-group">
            <Button text="CREATE" info />
            <Button text="CLOSE" outline onClick={handleClose} />
          </div>
        </form>
      </Container>
    </Modal>
  );
};

const Container = styled.div`
  padding: 2rem;

  h3,
  h4,
  p {
    margin: 0;
    padding: 0;
  }

  h3 {
    font-weight: bold;
    font-size: 25px;
    line-height: 29px;
    color: #666666;
    margin-bottom: 1.5rem;
  }

  p {
    font-weight: normal;
    font-size: 14px;
    line-height: 16px;
    letter-spacing: 0.0025em;
    color: #666666;
    margin-bottom: 1.5rem;
  }

  form {
    margin: 1.5rem 0;
    display: flex;
    flex-direction: column;
    gap: 1rem;

    h4 {
      font-weight: bold;
      font-size: 16px;
      line-height: 22px;
      letter-spacing: 0.0015em;
      color: #666666;
    }

    .group {
      display: flex;
      gap: 1rem;
    }

    .btn-group {
        margin-top:1.5rem;
        display: flex;
        gap: 1rem;
      }
  }
`;
