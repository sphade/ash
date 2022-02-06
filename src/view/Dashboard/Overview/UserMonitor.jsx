import React, { Fragment } from 'react';
import { Table, Space } from 'antd';
import { useHistory } from 'react-router-dom';
import { BackArrow } from '../../../layout/DashboardLayout/Content';
import { Header as Title } from './Revenue';
import { Header as Heading, TableWrapper } from './Home';
import { Searchbar, SelectField } from '../../../Reuseable';
// import { columns } from '../../../table/user_monitor';
import Skeleton from 'react-loading-skeleton';
import {
  overviewSelector,
  toggleShowModal,
} from '../../../redux/reducers/dashboard/overview';
import { useDispatch, useSelector } from 'react-redux';
import { getUsers } from '../../../redux/sagas/dashboard/overview';
import { ViewButton } from '../../../table/user_monitor';
import { UserMonitorModal } from './Modals';

const UserMonitor = () => {
  const history = useHistory();
  const dispatch = useDispatch();

  React.useEffect(() => {
    dispatch(getUsers());
  }, [dispatch]);

  const { usersLoading, users, showUserModal } = useSelector(overviewSelector);

  const handleViewUser = (data) => {
    sessionStorage.setItem('requestMonitorUser', JSON.stringify(data));
    dispatch(toggleShowModal());
  };

  const columns = [
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
      render: (text, record) => (
        <ViewButton onClick={() => handleViewUser(record)} />
      ),
    },
  ];
  return (
    <Fragment>
      <UserMonitorModal
        show={showUserModal}
        handleClose={() => dispatch(toggleShowModal())}
      />
      <Title>
        {usersLoading ? (
          <Skeleton width='150px' height='35px' />
        ) : (
          <>
            <BackArrow onClick={() => history.goBack()} />
            <h6>User Monitor</h6>
          </>
        )}
      </Title>
      <Heading>
        {usersLoading ? (
          <>
            <div className='group'>
              <Skeleton width='120px' height='35px' />
              <Skeleton width='120px' height='35px' />
            </div>
            <Skeleton width='300px' height='35px' />
          </>
        ) : (
          <>
            <div className='group'>
              <SelectField
                placeholder='Filter'
                data={[
                  { value: 'Doctor', name: 'Doctor' },
                  { value: 'Patient', name: 'Patient' },
                ]}
              />
              <SelectField
                placeholder='Filter'
                data={[
                  { value: 'today', name: 'Today' },
                  { value: '7_days', name: '7 days' },
                  { value: 'one_month', name: 'One Month' },
                  { value: 'one_year', name: 'One Year' },
                ]}
              />
            </div>
            <Searchbar />
          </>
        )}
      </Heading>
      <TableWrapper>
        {usersLoading ? (
          <Skeleton width={'100%'} height={330} />
        ) : (
          <Table dataSource={users} columns={columns} />
        )}
      </TableWrapper>
    </Fragment>
  );
};

export default UserMonitor;
