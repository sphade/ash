import React, { useState } from "react";
import { Modal } from "antd";
import styled from "styled-components";
import { Button } from "../../../Reuseable";
import successIcon from "../../../assets/images/icons/success-message-icon.png";

export const DisableAccountModal = ({ show, handleClose }) => {
  const [success, setSuccess] = useState(false);
  const [visible, setVisible] = useState(false);
  return (
    <Modal
      visible={visible}
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
              If you click “YES” a confirmation link will be sent your email to
              complete the process. Click “NO” to cancel.
            </p>
            <div className="btn-group">
              <Button
                info
                text="YES"
                onClick={() => {
                  setSuccess(true);
                }}
              />
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
            <Button
              outline
              text="CLOSE"
              onClick={() => {
                setVisible(false);
              }}
            />
          </>
        )}
      </Container>
    </Modal>
  );
};

export const ResetPasswordModal = ({ show, handleClose }) => {
  const [success, setSuccess] = useState(false);
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

  .btn-group {
    display: flex;
    gap: 1.5em;
    width: 300px;
  }
`;
