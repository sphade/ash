import React, { useState } from "react";
import { message, Modal } from "antd";
import styled from "styled-components";
import { Button } from "../../../Reuseable";
import successIcon from "../../../assets/images/icons/success-message-icon.png";
// import axios from "axios";
import { useMutation, useQueryClient } from "react-query";
import {
  disableUser,
  resetUserPassword,
  verifyDoctor,
} from "../../../api/adminApi";
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
              If you click “YES” the selected user would be{" "}
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

export const VerifyDoctorModal = ({ show, handleClose }) => {
  const [success, setSuccess] = useState(false);
  const user = JSON.parse(sessionStorage.getItem("selectedUser"));
  const queryClient = useQueryClient();

  const { mutate, isLoading } = useMutation((user) => verifyDoctor(user), {
    onSuccess: (data) => {
      setSuccess(true);

      queryClient.invalidateQueries("users");
    },
    onError: (err) => {
      handleClose();

      err.request.status = 409
        ? message.info("this doctor has already been verified")
        : (err.request.status = 404
            ? message.error("doctor could not be found")
            : message.error(err.message));
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
            <h4>Verify Doctor</h4>
            <p>
              if you click yes, the selected doctor's license would be verified
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
            <h4>Doctor verified</h4>
            <p>Doctor has been successfully verified</p>
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
