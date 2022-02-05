import React, { Fragment } from 'react';
import { useHistory } from 'react-router-dom';
import { BackArrow } from '../../../layout/DashboardLayout/Content';
import { Header as Title } from './Revenue';
import { Header as Heading, TableWrapper } from './Home';
import { Searchbar } from '../../../Reuseable';
import { Space, Table, Dropdown, Menu } from 'antd';
import { Star, MoreButton,StarOutline } from '../../../table/doctors';
import { useDispatch, useSelector } from 'react-redux';
import { doctorsSelector,handleToggleModal, } from '../../../redux/reducers/dashboard/doctors';
import { getDoctors } from '../../../redux/sagas/dashboard/doctors';
import Skeleton from 'react-loading-skeleton';
import { DoctorInfoModal } from './Modals';

const Doctors = () => {
  const history = useHistory();
  const dispatch = useDispatch();

  React.useEffect(() => {
    dispatch(getDoctors());
  }, [dispatch]);

  const { doctors, doctorsLoading } = useSelector(doctorsSelector);

  const menu = (data) => (
    <Menu>
      <Menu.Item
        onClick={() => {
          sessionStorage.setItem('selectedDoctor', JSON.stringify(data));
          dispatch(handleToggleModal());
        }}
      >
        View
      </Menu.Item>
    </Menu>
  );

  const columns = [
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
      render: (item, record) => (
        <Space>
          <Dropdown overlay={menu(record)}>
            <MoreButton />
          </Dropdown>
        </Space>
      ),
    },
  ];
  
  return (
    <Fragment>
      <DoctorInfoModal />
      <Title>
        {doctorsLoading ? (
          <>
            <Skeleton width={150} height={40} />
            <Skeleton width={150} height={40} />
          </>
        ) : (
          <>
            <BackArrow onClick={() => history.goBack()} />
            <h6>Total Doctors</h6>
          </>
        )}
      </Title>
      <Heading>
        {doctorsLoading ? (
          <>
            <Skeleton width={150} height={40} />
            <Skeleton width={350} height={40} />
          </>
        ) : (
          <>
            <div className='group'>
              <select
                style={{
                  height: '3rem',
                  width: '150px',
                  borderRadius: '10px',
                  border: 'none',
                }}
                class='form-select'
              >
                <option selected>Filter Role</option>
                <option value='Verified'>Verified</option>
                <option value='Pending'>Pending</option>
                <option value='Rejected'>Rejected</option>
              </select>
            </div>
            <Searchbar />
          </>
        )}
      </Heading>
      {doctorsLoading ? (
        <>
          <Skeleton width={'100%'} height={500} />
          <br />
        </>
      ) : (
        <TableWrapper>
          <Table dataSource={doctors} columns={columns} />
        </TableWrapper>
      )}
    </Fragment>
  );
};

export default Doctors;
