import React from 'react';
import styled from 'styled-components';
import { ReactComponent as More } from '../assets/images/icons/dot.svg';
import { Space, Dropdown, Menu } from 'antd';

const menu = (handleShowView) => (
  <Menu>
    <Menu.Item onClick={handleShowView}>View</Menu.Item>
  </Menu>
);
export const dataSource = [
  {
    key: '1',
    name: 'Mike Johnson',
    phone: '+234 812 345 6789',
    email: 'amosjohnson@gmail.com',
    date: '16th Sep. 2021',
    visit: 13,
    subscription: 'Premium',
  },
  {
    key: '2',
    name: 'Mike Johnson',
    phone: '+234 812 345 6789',
    email: 'amosjohnson@gmail.com',
    date: '16th Sep. 2021',
    visit: 15,
    subscription: 'Unlimited',
  },
  {
    key: '3',
    name: 'Mike Johnson',
    phone: '+234 812 345 6789',
    email: 'amosjohnson@gmail.com',
    date: '16th Sep. 2021',
    visit: 13,
    subscription: 'Premium',
  },
  {
    key: '4',
    name: 'Mike Johnson',
    phone: '+234 812 345 6789',
    email: 'amosjohnson@gmail.com',
    date: '16th Sep. 2021',
    visit: 13,
    subscription: 'Premium',
  },
  {
    key: '5',
    name: 'Mike Johnson',
    phone: '+234 812 345 6789',
    email: 'amosjohnson@gmail.com',
    date: '16th Sep. 2021',
    visit: 16,
    subscription: 'Premium',
  },
  {
    key: '6',
    name: 'Mike Johnson',
    phone: '+234 812 345 6789',
    email: 'amosjohnson@gmail.com',
    date: '16th Sep. 2021',
    visit: 13,
    subscription: 'Standard',
  },
  {
    key: '7',
    name: 'Mike Johnson',
    phone: '+234 812 345 6789',
    email: 'amosjohnson@gmail.com',
    date: '16th Sep. 2021',
    visit: 13,
    subscription: 'Unlimited',
  },
  {
    key: '8',
    name: 'Mike Johnson',
    phone: '+234 812 345 6789',
    email: 'amosjohnson@gmail.com',
    date: '16th Sep. 2021',
    visit: 13,
    subscription: 'Standard',
  },
  {
    key: '9',
    name: 'Mike Johnson',
    phone: '+234 812 345 6789',
    email: 'amosjohnson@gmail.com',
    date: '16th Sep. 2021',
    visit: 13,
    subscription: 'Unlimited',
  },
  {
    key: '10',
    name: 'Mike Johnson',
    phone: '+234 812 345 6789',
    email: 'amosjohnson@gmail.com',
    date: '16th Sep. 2021',
    visit: 13,
    subscription: 'Standard',
  },
];

export const columns = [
  {
    title: 'S/N',
    dataIndex: 'key',
    key: 'key',
  },
  {
    title: 'NAME',
    dataIndex: 'name',
    key: 'name',
  },
  {
    title: 'PHONE NUMBER',
    dataIndex: 'phone',
    key: 'phone',
  },
  {
    title: 'EMAIL ADDRESS',
    dataIndex: 'email',
    key: 'email',
  },
  {
    title: 'SIGN UP DATE',
    dataIndex: 'date',
    key: 'date',
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
    render: () => (
      <Space>
        <Dropdown overlay={menu}>
          <MoreButton />
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
