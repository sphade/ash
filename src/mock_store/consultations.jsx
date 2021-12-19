import React from "react";
import styled from "styled-components";
import { ReactComponent as More } from "../assets/images/icons/dot.svg";
import { Tag, Space } from "antd";

export const dataSource = [
  {
    key: "1",
    name: "Mike Johnson",
    doctor: "Dr. Amos Joe",
    type: "Dermatologist",
    duration: "30min",
    date: "16th Sep. 2021",
    status: "Cancelled",
  },
  {
    key: "2",
    name: "Mike Johnson",
    doctor: "Dr. Amos Joe",
    type: "Dermatologist",
    duration: "30min",
    date: "16th Sep. 2021",
    status: "Cancelled",
  },
  {
    key: "3",
    name: "Mike Johnson",
    doctor: "Dr. Amos Joe",
    type: "Dermatologist",
    duration: "30min",
    date: "16th Sep. 2021",
    status: "Completed",
  },
  {
    key: "4",
    name: "Mike Johnson",
    doctor: "Dr. Amos Joe",
    type: "Dermatologist",
    duration: "30min",
    date: "16th Sep. 2021",
    status: "Completed",
  },
  {
    key: "5",
    name: "Mike Johnson",
    doctor: "Dr. Amos Joe",
    type: "Dermatologist",
    duration: "30min",
    date: "16th Sep. 2021",
    status: "Ongoing",
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
    status: "Ongoing",
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
    dataIndex: "key",
    key: "key",
  },
  {
    title: "NAME",
    dataIndex: "name",
    key: "name",
  },
  {
    title: "DOCTOR",
    dataIndex: "doctor",
    key: "doctor",
  },
  {
    title: "DOCTOR TYPE",
    dataIndex: "type",
    key: "type",
  },
  {
    title: "DURATION",
    dataIndex: "duration",
    key: "duration",
  },
  {
    title: "DATE",
    dataIndex: "date",
    key: "date",
  },
  {
    title: "STATUS",
    dataIndex: "status",
    key: "status",
    render: (text) => (
      <Tag
        style={{ width: "90px", textAlign: "center", fontWeight:"bold" }}
        color={
          text === "Cancelled"
            ? "#FF8282"
            : text === "Scheduled"
            ? "#455AFE"
            : text === "Completed"
            ? "#19B729"
            : text === "Ongoing"
            ? "#FFAD33"
            : ""
        }
      >
        {text.toUpperCase()}
      </Tag>
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

const MoreButton = styled(More)`
  cursor: pointer;
  width: 1.5em;
  height: 1.5em;

  :hover {
    transform: scale(1.2);
  }
`;
