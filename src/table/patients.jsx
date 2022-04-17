import React from 'react';
import styled from 'styled-components';
import { ReactComponent as More } from '../assets/images/icons/dot.svg';
import { Space, Dropdown, Menu } from 'antd';

const menu = (data) => (
  <Menu>
    <Menu.Item
      onClick={() => {
        sessionStorage.setItem('selectedPatient', JSON.stringify(data));
      }}
    >
      View
    </Menu.Item>
  </Menu>
);

export const columns = [
  {
    title: 'S/N',
    render: (item, record, index) => index + 1,
  },
  {
    title: 'NAME',
    dataIndex: 'firstName',
    key: 'firstName',
    render: (text, row) => (
      <Space>
        {text}
        {row.lastName}
      </Space>
    ),
  },
  {
    title: 'PHONE NUMBER',
    dataIndex: 'phoneNumber',
    key: 'phoneNumber',
  },
  {
    title: 'EMAIL ADDRESS',
    dataIndex: 'email',
    key: 'email',
  },
  {
    title: 'SIGN UP DATE',
    dataIndex: 'createdAt',
    key: 'createdAt',
    render: (text) => (
      <Space>{text ? new Date(text).toLocaleDateString() : '--------'}</Space>
    ),
  },
  {
    title: 'VISITs',
    dataIndex: 'visit',
    key: 'visit',
  },
  {
    title: 'SUBSCRIPTION',
    dataIndex: 'subscription',
    key: 'subscription',
    render: (text) => (
      <Space
        style={{
          width: '90px',
          fontSize: 13,
          padding: '0.5em 1em',
          margin: '0.5em',
          display: 'flex',
          justifyContent: 'center',
          textAlign: 'center',
          textTransform: 'capitalize',
          borderRadius: '5px',
          color:
            text === 'Premium'
              ? '#FA0E9B'
              : text === 'Standard'
              ? '#19B729'
              : text === 'Unlimited'
              ? '#455AFE'
              : '',
          background:
            text === 'Premium'
              ? 'rgba(250, 14, 155, 0.05)'
              : text === 'Standard'
              ? 'rgba(25, 183, 41, 0.1)'
              : text === 'Unlimited'
              ? 'rgba(69, 90, 254, 0.05)'
              : '',
        }}
      >
        {text}
      </Space>
    ),
  },
  {
    title: 'Action',
    key: 'action',
    render: (item, record) => (
      <Space>
        <Dropdown overlay={menu(record)}>
          <MoreButton />
        </Dropdown>
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

