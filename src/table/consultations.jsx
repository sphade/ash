import React from 'react';
import styled from 'styled-components';
import { ReactComponent as More } from '../assets/images/icons/dot.svg';
import { Space } from 'antd';

export const dataSource = [
  {
    key: '1',
    name: 'Mike Johnson',
    doctor: 'Dr. Amos Joe',
    type: 'Dermatologist',
    duration: '30min',
    date: '16th Sep. 2021',
    status: 'cancelled',
  },
  {
    key: '2',
    name: 'Mike Johnson',
    doctor: 'Dr. Amos Joe',
    type: 'Dermatologist',
    duration: '30min',
    date: '16th Sep. 2021',
    status: 'cancelled',
  },
  {
    key: '3',
    name: 'Mike Johnson',
    doctor: 'Dr. Amos Joe',
    type: 'Dermatologist',
    duration: '30min',
    date: '16th Sep. 2021',
    status: 'completed',
  },
  {
    key: '4',
    name: 'Mike Johnson',
    doctor: 'Dr. Amos Joe',
    type: 'Dermatologist',
    duration: '30min',
    date: '16th Sep. 2021',
    status: 'completed',
  },
  {
    key: '5',
    name: 'Mike Johnson',
    doctor: 'Dr. Amos Joe',
    type: 'Dermatologist',
    duration: '30min',
    date: '16th Sep. 2021',
    status: 'scheduled',
  },
  {
    key: '6',
    name: 'Mike Johnson',
    doctor: 'Dr. Amos Joe',
    type: 'Dermatologist',
    duration: '30min',
    date: '16th Sep. 2021',
    status: 'Completed',
  },
  {
    key: '7',
    name: 'Mike Johnson',
    doctor: 'Dr. Amos Joe',
    type: 'Dermatologist',
    duration: '30min',
    date: '16th Sep. 2021',
    status: 'Scheduled',
  },
  {
    key: '8',
    name: 'Mike Johnson',
    doctor: 'Dr. Amos Joe',
    type: 'Dermatologist',
    duration: '30min',
    date: '16th Sep. 2021',
    status: 'pending',
  },
  {
    key: '9',
    name: 'Mike Johnson',
    doctor: 'Dr. Amos Joe',
    type: 'Dermatologist',
    duration: '30min',
    date: '16th Sep. 2021',
    status: 'Scheduled',
  },
  {
    key: '10',
    name: 'Mike Johnson',
    doctor: 'Dr. Amos Joe',
    type: 'Dermatologist',
    duration: '30min',
    date: '16th Sep. 2021',
    status: 'Scheduled',
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
    title: 'DOCTOR',
    dataIndex: 'doctor',
    key: 'doctor',
  },
  {
    title: 'DOCTOR TYPE',
    dataIndex: 'type',
    key: 'type',
  },
  {
    title: 'DURATION',
    dataIndex: 'duration',
    key: 'duration',
  },
  {
    title: 'DATE',
    dataIndex: 'date',
    key: 'date',
  },
  {
    title: 'STATUS',
    dataIndex: 'status',
    key: 'status',
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
            text === 'completed'
              ? '#19B729'
              : text === 'pending'
              ? '#FFAD33'
              : text === 'cancelled'
              ? '#FF8282'
              : text === 'scheduled'
              ? '#455AFE'
              : '',
          background:
            text === 'completed'
              ? 'rgba(25, 183, 41, 0.1)'
              : text === 'pending'
              ? 'rgba(255, 173, 51, 0.1)'
              : text === 'cancelled'
              ? 'rgba(255, 130, 130, 0.1)'
              : text === 'scheduled'
              ? 'rgba(69, 90, 254, 0.1)'
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
  width: 1.5em;
  height: 1.5em;

  :hover {
    transform: scale(1.2);
  }
`;
