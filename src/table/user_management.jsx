import React from "react";
import styled from "styled-components";
import { ReactComponent as More } from "../assets/images/icons/dot.svg";
import { Space, Dropdown, Menu } from "antd";
import { useDispatch } from "react-redux";
import {
  toggleShowModal,
  toggleShowResetPasswordModal,
  toggleShowVerifyDoctorModal,
} from "../redux/reducers/dashboard/overview";

const UserMenu = (data) => {
  const dispatch = useDispatch();
  return (
    <Menu>
      <Menu.Item
        onClick={() => {
          sessionStorage.setItem("selectedUser", JSON.stringify(data));

          dispatch(toggleShowModal());
        }}
      >
        {data?.active ? "Disable" : "Enable"}
      </Menu.Item>

      <Menu.Item
        onClick={() => {
          sessionStorage.setItem("selectedUser", JSON.stringify(data));
          dispatch(toggleShowResetPasswordModal());
        }}
      >
        Reset Password
      </Menu.Item>
      {data.role === "doctor" && (
        <Menu.Item
          onClick={() => {
            sessionStorage.setItem("selectedUser", JSON.stringify(data));
            dispatch(toggleShowVerifyDoctorModal());
          }}
        >
          Verify Doctor
        </Menu.Item>
      )}
    </Menu>
  );
};

export const columns = [
  {
    title: "S/N",
    render: (item, record, index) => index + 1,
  },
  {
    title: "NAME",
    dataIndex: "firstName",
    key: "firstName",
    render: (text, record) => (
      <Space>
        {text}
        {record.lastName}
      </Space>
    ),
  },
  {
    title: "PHONE NUMBER",
    dataIndex: "phoneNumber",
    key: "phoneNumber",
  },
  {
    title: "EMAIL ADDRESS",
    dataIndex: "email",
    key: "email",
  },
  {
    title: "ROLE",
    dataIndex: "role",
    key: "role",
    render: (text) => <div style={{ textTransform: "capitalize" }}>{text}</div>,
  },

  {
    title: "Action",
    key: "action",
    render: (record) => (
      <Space>
        <Dropdown overlay={UserMenu(record)}>
          <div>
            <MoreButton />
          </div>
        </Dropdown>
      </Space>
    ),
  },
];

const MoreButton = styled(More)`
  cursor: pointer;
  width: 1.5em;
  height: 1.5em;

  :hover {
    transform: scale(1.2);
  }
`;
