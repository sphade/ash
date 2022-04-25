import React, { useState } from "react";
import { Modal } from "antd";
import styled from "styled-components";
import { Button } from "../../../Reuseable";
import successIcon from "../../../assets/images/icons/success-message-icon.png";
import { api } from "../../../api/instance";
import axios from "axios";
import { useMutation } from "react-query";
export const DisableAccountModal = ({ show, handleClose }) => {
  const [success, setSuccess] = useState(false);
  const [visible, setVisible] = useState(false);
  const user = JSON.parse(sessionStorage.getItem("selectedUser"));
  const disableUser = async () => {
    const res = await api.patch(
      "/users",
      {
        userType: user.role,
        active: user.active,
        ids: [user.id],
      },
      {
        headers: {
          Authorization: `Bearer ${sessionStorage.getItem("token")}`,
          Accept: "application/json",
          "Content-Type": "application/json",
        },
      }
    );
    setSuccess(true);
  };
  const { isLoading, mutate, isError, error } = useMutation(disableUser);

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
              If you click “YES” a confirmation link will be sent your email to
              complete the process. Click “NO” to cancel.
            </p>
            <div className="btn-group">
              <Button
                info
                text="YES"
                loading={isLoading}
                onClick={() => {
                  mutate();
                }}
              />
              <Button
                outline
                text="NO"
                disabled={isLoading}
                onClick={() => {
                  handleClose();
                }}
              />
            </div>
            {isError && <p style={{ color: "red" }}>{error.message}</p>}
          </>
        ) : (
          <>
            <img src={successIcon} alt="" />
            <h4>Link Sent to Admin</h4>
            <p>
              A confirmation link has been sent to your email address, please
              click on the link to complete the process.
            </p>
            <Button
              outline
              text="CLOSE"
              onClick={() => {
                handleClose();
                setSuccess(false);
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
  const user = JSON.parse(sessionStorage.getItem("selectedUser"));

  const resetUserPassword = async () => {
    const res = await api.patch(
      `/users/${user.id}`,
      {
        userType: user.role,
      },
      {
        headers: {
          Authorization: `Bearer ${sessionStorage.getItem("token")}`,
          Accept: "application/json",
          "Content-Type": "application/json",
        },
      }
    );
    setSuccess(true);
  };
  const { isLoading, mutate, isError, error } = useMutation(resetUserPassword);
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
              A password reset link will be sent to the user's email address.
              Click “NO” to cancel.
            </p>
            <div className="btn-group">
              <Button
                info
                text="YES"
                loading={isLoading}
                onClick={() => {
                  mutate();
                }}
              />

              <Button
                outline
                text="NO"
                disabled={isLoading}
                onClick={() => {
                  handleClose();
                }}
              />
            </div>
            {isError && <p style={{ color: "red" }}>{error.message}</p>}
          </>
        ) : (
          <>
            <img src={successIcon} alt="" />
            <h4>Password Reset Link Sent</h4>
            <p>A password reset link has been sent to the user</p>
            <Button
              outline
              text="CLOSE"
              onClick={() => {
                handleClose();
                setSuccess(false);
              }}
            />
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
