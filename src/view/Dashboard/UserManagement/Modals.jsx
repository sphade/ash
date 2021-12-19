import React, { useState } from "react";
import { Modal } from "antd";
import styled from "styled-components";
import { Button } from "../../../Reuseable";
import successIcon from "../../../assets/images/icons/success-message-icon.png";

export const DisableAccountModal = ({ show, handleClose }) => {
  const [
    success,
    // setSuccess
  ] = useState(false);
  return (
    <Modal
      visible={show}
      width={565}
      footer={null}
      closable={false}
      centered={true}
    >
      <Container>
        {!success ? (
          <>
            <h4>Disable User Account</h4>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Turpis
              sagittis maecenas faucibus suspendisse.
            </p>
            <div className="btn-group">
              <Button info text="YES" />
              <Button outline text="NO" />
            </div>
          </>
        ) : (
          <>
            <img src={successIcon} alt="" />
            <h4>Link Sent to Admin</h4>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Turpis
              sagittis maecenas faucibus suspendisse.
            </p>
            <Button outline text="CLOSE" />
          </>
        )}
      </Container>
    </Modal>
  );
};

export const ResetPasswordModal = ({ show, handleClose }) => {
    const [
      success,
      // setSuccess
    ] = useState(false);
    return (
      <Modal
        visible={show}
        width={565}
        footer={null}
        closable={false}
        centered={true}
      >
        <Container>
          {!success ? (
            <>
              <h4>Reset User Password</h4>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Turpis
                sagittis maecenas faucibus suspendisse.
              </p>
              <div className="btn-group">
                <Button info text="YES" />
                <Button outline text="NO" />
              </div>
            </>
          ) : (
            <>
              <img src={successIcon} alt="" />
              <h4>Password Reset Link Sent</h4>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Turpis
                sagittis maecenas faucibus suspendisse.
              </p>
              <Button outline text="CLOSE" />
            </>
          )}
        </Container>
      </Modal>
    );
  };

const Container = styled.div`
  padding: 2em;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  row-gap: 1.2rem;
  color: #666666;

  img {
    width: 150px;
    height: 150px;
  }

  h4 {
    font-weight: bold;
    font-size: 25px;
    line-height: 29px;
    text-align: center;
  }

  p,
  h4 {
    margin: 0;
    padding: 0;
  }

  btn-group {
    display: flex;
    gap: 1.5em;
  }
`;
