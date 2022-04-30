import React, { useState } from "react";
import { message, Modal } from "antd";
import styled from "styled-components";
import { Button } from "../../../Reuseable";
import successIcon from "../../../assets/images/icons/success-message-icon.png";
// import axios from "axios";
import { useMutation, useQueryClient } from "react-query";
import { disableUser, resetUserPassword } from "../../../api/adminApi";
export const DisableAccountModal = ({ show, handleClose }) => {
  const queryClient = useQueryClient();
  const [success, setSuccess] = useState(false);
  // const [visible, setVisible] = useState(false);
  const user = JSON.parse(sessionStorage.getItem("selectedUser"));
  const { mutate, isLoading } = useMutation((data) => disableUser(data), {
    onSuccess: (data) => {
      setSuccess(true);

      queryClient.invalidateQueries("users");
    },
    onError: () => {
      message.error("an error occurred , refresh and try again");
      handleClose();
    },
  });

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
            <h4>
              {user?.active === true ? "Disable " : "Enable "} User Account
            </h4>
            <p>
              If you click “YES” the Selected user Account would be{" "}
              {user?.active === true ? " Disabled " : " Enabled "}. Click “NO”
              to cancel.
            </p>
            <div className="btn-group">
              <Button
                info
                text="YES"
                loading={isLoading}
                onClick={() => {
                  mutate({
                    userType: user.role,
                    active: !user.active,
                    ids: [user.id],
                  });
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
          </>
        ) : (
          <>
            <img src={successIcon} alt="" />
            <h4> User {user?.active === true ? " Disabled " : " Enabled "} </h4>
            <p>
              User has been successfully{" "}
              {user?.active === true ? " Disabled " : " Enabled "}
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
  const queryClient = useQueryClient();

  const { mutate, isLoading } = useMutation((user) => resetUserPassword(user), {
    onSuccess: (data) => {
      setSuccess(true);

      queryClient.invalidateQueries("users");
    },
    onError: () => {
      message.error("an error occurred , refresh and try again");
      handleClose();
    },
  });
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
                  mutate(user);
                  
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
