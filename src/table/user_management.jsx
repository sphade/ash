import React from 'react';
import styled from 'styled-components';
import { ReactComponent as More } from '../assets/images/icons/dot.svg';
import { Space, Dropdown, Menu } from 'antd';

export const dataSource = [
  {
    key: '1',
    name: 'Mike Johnson',
    phone: '+234 812 345 6789',
    email: 'amosjohnson@gmail.com',
    role: 'Patient',
    status: 'Active',
  },
  {
    key: '2',
    name: 'Mike Johnson',
    phone: '+234 812 345 6789',
    email: 'amosjohnson@gmail.com',
    role: 'Patient',
    status: 'Active',
  },
  {
    key: '3',
    name: 'Mike Johnson',
    phone: '+234 812 345 6789',
    email: 'amosjohnson@gmail.com',
    role: 'Patient',
    status: 'Active',
  },
  {
    key: '4',
    name: 'Mike Johnson',
    phone: '+234 812 345 6789',
    email: 'amosjohnson@gmail.com',
    role: 'Patient',
    status: 'Inactive',
  },
  {
    key: '5',
    name: 'Mike Johnson',
    phone: '+234 812 345 6789',
    email: 'amosjohnson@gmail.com',
    role: 'Patient',
    status: 'Active',
  },
  {
    key: '6',
    name: 'Mike Johnson',
    phone: '+234 812 345 6789',
    email: 'amosjohnson@gmail.com',
    role: 'Patient',
    status: 'Inactive',
  },
  {
    key: '7',
    name: 'Mike Johnson',
    phone: '+234 812 345 6789',
    email: 'amosjohnson@gmail.com',
    role: 'Patient',
    status: 'Active',
  },
  {
    key: '8',
    name: 'Mike Johnson',
    phone: '+234 812 345 6789',
    email: 'amosjohnson@gmail.com',
    role: 'Patient',
    status: 'Active',
  },
  {
    key: '9',
    name: 'Mike Johnson',
    phone: '+234 812 345 6789',
    email: 'amosjohnson@gmail.com',
    role: 'Patient',
    status: 'Inactive',
  },
  {
    key: '10',
    name: 'Mike Johnson',
    phone: '+234 812 345 6789',
    email: 'amosjohnson@gmail.com',
    role: 'Patient',
    status: 'Active',
  },
];

const menu = (data) => (
  <Menu>
    <Menu.Item
      onClick={() => {
        // sessionStorage.setItem('selectedUser', JSON.stringify(data));
      }} //
    >
      Disable
    </Menu.Item>
    <Menu.Item
      onClick={() => {
        // sessionStorage.setItem('selectedUser', JSON.stringify(data));
      }}
    >
      Reset Password
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
    title: 'ROLE',
    dataIndex: 'role',
    key: 'role',
    render: (text) => <div style={{ textTransform: 'capitalize' }}>{text}</div>,
  },
  {
    title: 'STATUS',
    dataIndex: 'active',
    key: 'active',
    render: (text) => {
      if (text === false) {
        return <b style={{ color: '#FF8282' }}>Inactive</b>;
      } else if (text === true) {
        return <b style={{ color: '#455AFE' }}>Active</b>;
      } else {
        return '';
      }
    },
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

const MoreButton = styled(More)`
  cursor: pointer;
  width: 1.5em;
  height: 1.5em;

  :hover {
    transform: scale(1.2);
  }
`;
