import React from "react";
import styled from "styled-components";
import { ReactComponent as More } from "../assets/images/icons/dot.svg";
import { Space } from "antd";

export const dataSource = [
  {
    key: "1",
    name: "Mike Johnson",
    phone: "+234 812 345 6789",
    email: "amosjohnson@gmail.com",
    role: "Patient",
    status: "Active",
  },
  {
    key: "2",
    name: "Mike Johnson",
    phone: "+234 812 345 6789",
    email: "amosjohnson@gmail.com",
    role: "Patient",
    status: "Active",
  },
  {
    key: "3",
    name: "Mike Johnson",
    phone: "+234 812 345 6789",
    email: "amosjohnson@gmail.com",
    role: "Patient",
    status: "Active",
  },
  {
    key: "4",
    name: "Mike Johnson",
    phone: "+234 812 345 6789",
    email: "amosjohnson@gmail.com",
    role: "Patient",
    status: "Inactive",
  },
  {
    key: "5",
    name: "Mike Johnson",
    phone: "+234 812 345 6789",
    email: "amosjohnson@gmail.com",
    role: "Patient",
    status: "Active",
  },
  {
    key: "6",
    name: "Mike Johnson",
    phone: "+234 812 345 6789",
    email: "amosjohnson@gmail.com",
    role: "Patient",
    status: "Inactive",
  },
  {
    key: "7",
    name: "Mike Johnson",
    phone: "+234 812 345 6789",
    email: "amosjohnson@gmail.com",
    role: "Patient",
    status: "Active",
  },
  {
    key: "8",
    name: "Mike Johnson",
    phone: "+234 812 345 6789",
    email: "amosjohnson@gmail.com",
    role: "Patient",
    status: "Active",
  },
  {
    key: "9",
    name: "Mike Johnson",
    phone: "+234 812 345 6789",
    email: "amosjohnson@gmail.com",
    role: "Patient",
    status: "Inactive",
  },
  {
    key: "10",
    name: "Mike Johnson",
    phone: "+234 812 345 6789",
    email: "amosjohnson@gmail.com",
    role: "Patient",
    status: "Active",
  },
];

export const columns = [
  {
    title: "S/N",
    dataIndex: "key",
    key: "key",
  },
  {
    title: "NAME",
    dataIndex: "name",
    key: "name",
  },
  {
    title: "PHONE NUMBER",
    dataIndex: "phone",
    key: "phone",
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
  },
  {
    title: "STATUS",
    dataIndex: "status",
    key: "status",
    render: (text) => {
      if (text === "Inactive") {
        return <b style={{ color: "#FF8282" }}>{text}</b>;
      } else if (text === "Active") {
        return <b style={{ color: "#455AFE" }}>{text}</b>;
      } else {
        return "";
      }
    },
  },
  {
    title: "Action",
    key: "action",
    render: () => (
      <Space>
        <MoreButton />
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
