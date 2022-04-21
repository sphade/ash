import React from "react";
import styled from "styled-components";
import { ReactComponent as More } from "../assets/images/icons/dot.svg";
import { Space } from "antd";

export const dataSource = [
  {
    key: "1",
    name: "Mike Johnson",
    doctor: "Dr. Amos Joe",
    type: "Dermatologist",
    duration: "30min",
    date: "16th Sep. 2021",
    status: "cancelled",
  },
  {
    key: "2",
    name: "Mike Johnson",
    doctor: "Dr. Amos Joe",
    type: "Dermatologist",
    duration: "30min",
    date: "16th Sep. 2021",
    status: "cancelled",
  },
  {
    key: "3",
    name: "Mike Johnson",
    doctor: "Dr. Amos Joe",
    type: "Dermatologist",
    duration: "30min",
    date: "16th Sep. 2021",
    status: "completed",
  },
  {
    key: "4",
    name: "Mike Johnson",
    doctor: "Dr. Amos Joe",
    type: "Dermatologist",
    duration: "30min",
    date: "16th Sep. 2021",
    status: "completed",
  },
  {
    key: "5",
    name: "Mike Johnson",
    doctor: "Dr. Amos Joe",
    type: "Dermatologist",
    duration: "30min",
    date: "16th Sep. 2021",
    status: "scheduled",
  },
  {
    key: "6",
    name: "Mike Johnson",
    doctor: "Dr. Amos Joe",
    type: "Dermatologist",
    duration: "30min",
    date: "16th Sep. 2021",
    status: "Completed",
  },
  {
    key: "7",
    name: "Mike Johnson",
    doctor: "Dr. Amos Joe",
    type: "Dermatologist",
    duration: "30min",
    date: "16th Sep. 2021",
    status: "Scheduled",
  },
  {
    key: "8",
    name: "Mike Johnson",
    doctor: "Dr. Amos Joe",
    type: "Dermatologist",
    duration: "30min",
    date: "16th Sep. 2021",
    status: "pending",
  },
  {
    key: "9",
    name: "Mike Johnson",
    doctor: "Dr. Amos Joe",
    type: "Dermatologist",
    duration: "30min",
    date: "16th Sep. 2021",
    status: "Scheduled",
  },
  {
    key: "10",
    name: "Mike Johnson",
    doctor: "Dr. Amos Joe",
    type: "Dermatologist",
    duration: "30min",
    date: "16th Sep. 2021",
    status: "Scheduled",
  },
];

export const columns = [
  {
    title: "S/N",
    render: (item, record, index) => index + 1,
  },
  {
    title: "NAME",
    dataIndex: "patient",
    key: "patient",
    render: (text) => (
      <Space>
        {text && text.firstName}
        {text && text.lastName}
      </Space>
    ),
  },
  {
    title: "DOCTOR",
    dataIndex: "doctor",
    key: "doctor",
    render: (text) => (
      <Space>
        Dr.
        {text && text.firstName}
        {text && text.lastName}
      </Space>
    ),
  },
  {
    title: "DOCTOR TYPE",
    dataIndex: "doctor",
    key: "doctor",
    render: (text) => (
      <Space>
        {text &&
          text.specializations.map((item) => {
            return item.title;
          })}
      </Space>
    ),
  },
  {
    title: "DURATION",
    render: () => <Space>30 minutes</Space>,
  },
  {
    title: "DATE",
    dataIndex: "createdAt",
    key: "createdAt",
    render: (text) => <Space>{new Date(text).toLocaleDateString()}</Space>,
  },
  {
    title: "SUBSCRIPTION",
    dataIndex: "status",
    key: "status",
    render: (text) => (
      <Space
        style={{
          width: "90px",
          fontSize: 13,
          padding: "0.5em 1em",
          margin: "0.5em",
          display: "flex",
          justifyContent: "center",
          textAlign: "center",
          textTransform: "capitalize",
          borderRadius: "5px",
          color:
            text === "completed"
              ? "#19B729"
              : text === "accepted"
              ? "#455AFE"
              : text === "active"
              ? "#FFAD33"
              : text === "cancelled"
              ? "#FF8282"
              : text === "pending"
              ? "#455AFE"
              : text === "failed"
              ? "#FF8282"
              : "",
          background:
            text === "completed"
              ? "rgba(25, 183, 41, 0.1)"
              : text === "active"
              ? "rgba(255, 173, 51, 0.1)"
              : text === "accepted"
              ? "rgba(69, 90, 254, 0.1)"
              : text === "cancelled"
              ? "rgba(255, 130, 130, 0.1)"
              : text === "pending"
              ? "rgba(69, 90, 254, 0.1)"
              : text === "failed"
              ? "rgba(255, 130, 130, 0.1)"
              : "",
        }}
      >
        {text === "accepted"
          ? "Scheduled"
          : text === "active"
          ? "Ongoing"
          : text === "completed"
          ? "Completed"
          : text === "cancelled"
          ? "Cancelled"
          : text}
      </Space>
    ),
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

export const MoreButton = styled(More)`
  cursor: pointer;
  width: 1.5em;
  height: 1.5em;

  :hover {
    transform: scale(1.2);
  }
`;
