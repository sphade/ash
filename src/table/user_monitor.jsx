import React from 'react';
import styled from 'styled-components';
import { ReactComponent as Button } from '../assets/images/icons/monitor_card_back.svg';
import { Space } from 'antd';
export const dataSource = [
  {
    key: '1',
    name: 'Mike Johnson',
    phone: '+234 812 345 6789',
    email: 'amosjohnson@gmail.com',
    date: '16th Sep. 2021',
    time: '13:45:56',
    location: 'No 15, London street, New Road, Lekki, Lagos, NG',
  },
  {
    key: '2',
    name: 'Mike Johnson',
    phone: '+234 812 345 6789',
    email: 'amosjohnson@gmail.com',
    date: '16th Sep. 2021',
    time: '13:45:56',
    location: 'No 15, London street, New Road, Lekki, Lagos, NG',
  },
  {
    key: '3',
    name: 'Mike Johnson',
    phone: '+234 812 345 6789',
    email: 'amosjohnson@gmail.com',
    date: '16th Sep. 2021',
    time: '13:45:56',
    location: 'No 15, London street, New Road, Lekki, Lagos, NG',
  },
  {
    key: '4',
    name: 'Mike Johnson',
    phone: '+234 812 345 6789',
    email: 'amosjohnson@gmail.com',
    date: '16th Sep. 2021',
    time: '13:45:56',
    location: 'No 15, London street, New Road, Lekki, Lagos, NG',
  },
  {
    key: '5',
    name: 'Mike Johnson',
    phone: '+234 812 345 6789',
    email: 'amosjohnson@gmail.com',
    date: '16th Sep. 2021',
    time: '13:45:56',
    location: 'No 15, London street, New Road, Lekki, Lagos, NG',
  },
  {
    key: '6',
    name: 'Mike Johnson',
    phone: '+234 812 345 6789',
    email: 'amosjohnson@gmail.com',
    date: '16th Sep. 2021',
    time: '13:45:56',
    location: 'No 15, London street, New Road, Lekki, Lagos, NG',
  },
  {
    key: '7',
    name: 'Mike Johnson',
    phone: '+234 812 345 6789',
    email: 'amosjohnson@gmail.com',
    date: '16th Sep. 2021',
    time: '13:45:56',
    location: 'No 15, London street, New Road, Lekki, Lagos, NG',
  },
  {
    key: '8',
    name: 'Mike Johnson',
    phone: '+234 812 345 6789',
    email: 'amosjohnson@gmail.com',
    date: '16th Sep. 2021',
    time: '13:45:56',
    location: 'No 15, London street, New Road, Lekki, Lagos, NG',
  },
  {
    key: '9',
    name: 'Mike Johnson',
    phone: '+234 812 345 6789',
    email: 'amosjohnson@gmail.com',
    date: '16th Sep. 2021',
    time: '13:45:56',
    location: 'No 15, London street, New Road, Lekki, Lagos, NG',
  },
  {
    key: '10',
    name: 'Mike Johnson',
    phone: '+234 812 345 6789',
    email: 'amosjohnson@gmail.com',
    date: '16th Sep. 2021',
    time: '13:45:56',
    location: 'No 15, London street, New Road, Lekki, Lagos, NG',
  },
];

export const columns = [
  {
    title: 'S/N',
    render: (item, record, index) => index + 1,
  },
  {
    title: 'NAME',
    dataIndex: 'firstName',
    key: 'firstName',
    render: (text, record) => (
      <Space>
        {text}
        {record.lastName}
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
    title: 'SIGNUP DATE',
    dataIndex: 'createdAt',
    key: 'createdAt',
    render: (text) => (
      <Space>{text ? new Date(text).toLocaleDateString() : '------'}</Space>
    ),
  },
  {
    title: 'TIME',
    dataIndex: 'createdAt',
    key: 'createdAt',
    render: (text) => (
      <Space>{text ? new Date(text).toLocaleTimeString() : '------'}</Space>
    ),
  },
  {
    title: 'Action',
    key: 'action',
    render: () => (
      <Space>
        <ViewButton />
      </Space>
    ),
  },
];

export const ViewButton = styled(Button)`
  cursor: pointer;
  width: 30px;
  height: 30px;

  :hover {
    transform: scale(1.2);
  }
`;
