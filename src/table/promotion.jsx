import React from "react";
import styled from "styled-components";
import { ReactComponent as Button } from "../assets/images/icons/monitor_card_back.svg";
import { Space } from "antd";

export const promotions = [
  {
    id: 1,
    code: "#23GBH",
    start_date: "16th Sept. 2021",
    end_date: "16th Sept. 2021",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sollicitudin in ultricies sem id vel tincidunt nunc nec.",
    usage: 210,
  },
  {
    id: 2,
    code: "#23GBH",
    start_date: "16th Sept. 2021",
    end_date: "16th Sept. 2021",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sollicitudin in ultricies sem id vel tincidunt nunc nec.",
    usage: 210,
  },
  {
    id: 3,
    code: "#23GBH",
    start_date: "16th Sept. 2021",
    end_date: "16th Sept. 2021",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sollicitudin in ultricies sem id vel tincidunt nunc nec.",
    usage: 210,
  },
  {
    id: 4,
    code: "#23GBH",
    start_date: "16th Sept. 2021",
    end_date: "16th Sept. 2021",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sollicitudin in ultricies sem id vel tincidunt nunc nec.",
    usage: 210,
  },
];

export const dataSource = [
  {
    key: "1",
    code: "#23GBH",
    start_date: "16th Sept. 2021",
    end_date: "16th Sept. 2021",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sollicitudin in ultricies sem id vel tincidunt nunc nec.",
    usage: 210,
  },
  {
    key: "2",
    code: "#23GBH",
    start_date: "16th Sept. 2021",
    end_date: "16th Sept. 2021",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sollicitudin in ultricies sem id vel tincidunt nunc nec.",
    usage: 210,
  },
  {
    key: "3",
    code: "#23GBH",
    start_date: "16th Sept. 2021",
    end_date: "16th Sept. 2021",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sollicitudin in ultricies sem id vel tincidunt nunc nec.",
    usage: 210,
  },
  {
    key: "4",
    code: "#23GBH",
    start_date: "16th Sept. 2021",
    end_date: "16th Sept. 2021",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sollicitudin in ultricies sem id vel tincidunt nunc nec.",
    usage: 210,
  },
  {
    key: "5",
    code: "#23GBH",
    start_date: "16th Sept. 2021",
    end_date: "16th Sept. 2021",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sollicitudin in ultricies sem id vel tincidunt nunc nec.",
    usage: 210,
  },
  {
    key: "6",
    code: "#23GBH",
    start_date: "16th Sept. 2021",
    end_date: "16th Sept. 2021",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sollicitudin in ultricies sem id vel tincidunt nunc nec.",
    usage: 210,
  },
  {
    key: "7",
    code: "#23GBH",
    start_date: "16th Sept. 2021",
    end_date: "16th Sept. 2021",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sollicitudin in ultricies sem id vel tincidunt nunc nec.",
    usage: 210,
  },
  {
    key: "8",
    code: "#23GBH",
    start_date: "16th Sept. 2021",
    end_date: "16th Sept. 2021",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sollicitudin in ultricies sem id vel tincidunt nunc nec.",
    usage: 210,
  },
  {
    key: "9",
    code: "#23GBH",
    start_date: "16th Sept. 2021",
    end_date: "16th Sept. 2021",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sollicitudin in ultricies sem id vel tincidunt nunc nec.",
    usage: 210,
  },
  {
    key: "10",
    code: "#23GBH",
    start_date: "16th Sept. 2021",
    end_date: "16th Sept. 2021",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sollicitudin in ultricies sem id vel tincidunt nunc nec.",
    usage: 210,
  },
];

export const columns = [
  {
    title: "S/N",
    dataIndex: "key",
    key: "key",
  },
  {
    title: "CODE",
    dataIndex: "code",
    key: "code",
  },
  {
    title: "DESCRIPTION",
    dataIndex: "description",
    key: "description",
    render: (text) => <p>{text.substring(0, 50) + "..."}</p>,
  },
  {
    title: "START DATE",
    dataIndex: "start_date",
    key: "start_date",
  },
  {
    title: "END DATE",
    dataIndex: "end_date",
    key: "end_date",
  },
  {
    title: "USAGE",
    dataIndex: "usage",
    key: "usage",
    render: (text) => <p>{text} Users</p>,
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

const MoreButton = styled(Button)`
  cursor: pointer;
  width: 1.5em;
  height: 1.5em;

  :hover {
    transform: scale(1.2);
  }
`;
