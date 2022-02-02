import React from 'react';
import styled from 'styled-components';
import { ReactComponent as More } from '../assets/images/icons/dot-vertical.svg';
import { ReactComponent as StarIcon } from '../assets/images/icons/star.svg';
import { ReactComponent as StarOutlineIcon } from '../assets/images/icons/star-outline.svg';
import { Space } from 'antd';

export const dataSource = [
  {
    key: '1',
    name: 'Mike Johnson',
    phone: '+234 812 345 6789',
    email: 'amosjohnson@gmail.com',
    date: '16th Sep. 2021',
    consults: 25,
    rating: 3,
    status: 'Verified',
  },
  {
    key: '2',
    name: 'Mike Johnson',
    phone: '+234 812 345 6789',
    email: 'amosjohnson@gmail.com',
    date: '16th Sep. 2021',
    consults: 25,
    rating: 1,
    status: 'rejected',
  },
  {
    key: '3',
    name: 'Mike Johnson',
    phone: '+234 812 345 6789',
    email: 'amosjohnson@gmail.com',
    date: '16th Sep. 2021',
    consults: 25,
    rating: 0,
    status: 'accepted',
  },
  {
    key: '4',
    name: 'Mike Johnson',
    phone: '+234 812 345 6789',
    email: 'amosjohnson@gmail.com',
    date: '16th Sep. 2021',
    consults: 25,
    rating: 5,
    status: 'accepted',
  },
  {
    key: '5',
    name: 'Mike Johnson',
    phone: '+234 812 345 6789',
    email: 'amosjohnson@gmail.com',
    date: '16th Sep. 2021',
    consults: 25,
    rating: 4,
    status: 'pending',
  },
  {
    key: '6',
    name: 'Mike Johnson',
    phone: '+234 812 345 6789',
    email: 'amosjohnson@gmail.com',
    date: '16th Sep. 2021',
    consults: 25,
    rating: 3,
    status: 'Pending',
  },
  {
    key: '7',
    name: 'Mike Johnson',
    phone: '+234 812 345 6789',
    email: 'amosjohnson@gmail.com',
    date: '16th Sep. 2021',
    consults: 25,
    rating: 2,
    status: 'Rejected',
  },
  {
    key: '8',
    name: 'Mike Johnson',
    phone: '+234 812 345 6789',
    email: 'amosjohnson@gmail.com',
    date: '16th Sep. 2021',
    consults: 25,
    rating: 5,
    status: 'Pending',
  },
  {
    key: '9',
    name: 'Mike Johnson',
    phone: '+234 812 345 6789',
    email: 'amosjohnson@gmail.com',
    date: '16th Sep. 2021',
    consults: 25,
    rating: 4,
    status: 'Rejected',
  },
  {
    key: '10',
    name: 'Mike Johnson',
    phone: '+234 812 345 6789',
    email: 'amosjohnson@gmail.com',
    date: '16th Sep. 2021',
    consults: 25,
    rating: 5,
    status: 'Pending',
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
    render: (text, row) => (
      <Space>
        Dr.
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
      <Space>
        {text !== null ? new Date(text).toLocaleDateString() : '--------'}
      </Space>
    ),
  },
  {
    title: 'CONSULTS',
    dataIndex: 'appointmentCount',
    key: 'appointmentCount',
    render: (text) => <Space>{!text ? '------' : text}</Space>,
  },
  {
    title: 'RATING',
    dataIndex: 'avgRating',
    key: 'avgRating',
    render: (text = 0) => (
      <Space>
        {Array.from({ length: text }, (index) => {
          return <Star key={index} />;
        })}
        {Array.from({ length: parseInt(5 - text) }, (index) => {
          return <StarOutline key={index} />;
        })}
      </Space>
    ),
  },
  {
    title: 'STATUS',
    dataIndex: 'isVerified',
    key: 'isVerified',
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
            text === 'accepted'
              ? '#19B729'
              : text === 'pending'
              ? '#FFAD33'
              : text === 'rejected'
              ? '#FF8282'
              : '',
          background:
            text === 'accepted'
              ? 'rgba(25, 183, 41, 0.1)'
              : text === 'pending'
              ? 'rgba(255, 173, 51, 0.1)'
              : text === 'rejected'
              ? 'rgba(255, 130, 130, 0.1)'
              : '',
        }}
      >
        {text === 'accepted' ? 'Verified' : text}
      </Space>
    ),
  },
  {
    title: 'Action',
    key: 'action',
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
