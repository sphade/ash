import React from "react";
import styled from "styled-components";
import { ReactComponent as More } from "../assets/images/icons/dot-vertical.svg";
import { ReactComponent as StarIcon } from "../assets/images/icons/star.svg";
import { ReactComponent as StarOutlineIcon } from "../assets/images/icons/star-outline.svg";
import { Tag, Space } from "antd";

export const dataSource = [
  {
    key: "1",
    name: "Mike Johnson",
    phone: "+234 812 345 6789",
    email: "amosjohnson@gmail.com",
    date: "16th Sep. 2021",
    consults: 25,
    rating: 3,
    status: "Verified",
  },
  {
    key: "2",
    name: "Mike Johnson",
    phone: "+234 812 345 6789",
    email: "amosjohnson@gmail.com",
    date: "16th Sep. 2021",
    consults: 25,
    rating: 3,
    status: "Rejected",
  },
  {
    key: "3",
    name: "Mike Johnson",
    phone: "+234 812 345 6789",
    email: "amosjohnson@gmail.com",
    date: "16th Sep. 2021",
    consults: 25,
    rating: 3,
    status: "Verified",
  },
  {
    key: "4",
    name: "Mike Johnson",
    phone: "+234 812 345 6789",
    email: "amosjohnson@gmail.com",
    date: "16th Sep. 2021",
    consults: 25,
    rating: 3,
    status: "Verified",
  },
  {
    key: "5",
    name: "Mike Johnson",
    phone: "+234 812 345 6789",
    email: "amosjohnson@gmail.com",
    date: "16th Sep. 2021",
    consults: 25,
    rating: 3,
    status: "Verified",
  },
  {
    key: "6",
    name: "Mike Johnson",
    phone: "+234 812 345 6789",
    email: "amosjohnson@gmail.com",
    date: "16th Sep. 2021",
    consults: 25,
    rating: 3,
    status: "Pending",
  },
  {
    key: "7",
    name: "Mike Johnson",
    phone: "+234 812 345 6789",
    email: "amosjohnson@gmail.com",
    date: "16th Sep. 2021",
    consults: 25,
    rating: 3,
    status: "Rejected",
  },
  {
    key: "8",
    name: "Mike Johnson",
    phone: "+234 812 345 6789",
    email: "amosjohnson@gmail.com",
    date: "16th Sep. 2021",
    consults: 25,
    rating: 3,
    status: "Pending",
  },
  {
    key: "9",
    name: "Mike Johnson",
    phone: "+234 812 345 6789",
    email: "amosjohnson@gmail.com",
    date: "16th Sep. 2021",
    consults: 25,
    rating: 3,
    status: "Rejected",
  },
  {
    key: "10",
    name: "Mike Johnson",
    phone: "+234 812 345 6789",
    email: "amosjohnson@gmail.com",
    date: "16th Sep. 2021",
    consults: 25,
    rating: 3,
    status: "Pending",
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
    title: "SIGN UP DATE",
    dataIndex: "date",
    key: "date",
  },
  {
    title: "CONSULTS",
    dataIndex: "consults",
    key: "consults",
  },
  {
    title: "RATING",
    dataIndex: "rating",
    key: "rating",
    render: () => (
      <Space>
        <Star />
        <Star />
        <Star />
        <StarOutline />
        <StarOutline />
      </Space>
    ),
  },
  {
    title: "STATUS",
    dataIndex: "status",
    key: "status",
    render: (text) => (
      <Tag
        style={{  width: "90px", textAlign: "center" }}
        color={
          text === "Pending"
            ? "#FFAD33"
            : text === "Rejected"
            ? "#FF8282"
            : text === "Verified"
            ? "#455AFE"
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
  width: 1.2em;
  height: 1.2em;

  :hover {
    transform: scale(1.2);
  }
`;

const Star = styled(StarIcon)`
  width: 12.5px;
  height: 12.5px;
`;

const StarOutline = styled(StarOutlineIcon)`
  width: 12.5px;
  height: 12.5px;
`;
