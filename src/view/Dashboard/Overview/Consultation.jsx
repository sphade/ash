import React, { Fragment } from 'react';
import { useHistory } from 'react-router-dom';
import { BackArrow } from '../../../layout/DashboardLayout/Content';
import { Header as Title } from './Revenue';
import { Header as Heading, TableWrapper } from './Home';
import { Searchbar } from '../../../Reuseable';
import { Space, Table, Dropdown, Menu } from 'antd';
import { MoreButton } from '../../../table/consultations';
import { useDispatch, useSelector } from 'react-redux';
import { overviewSelector } from '../../../redux/reducers/dashboard/overview';
import { getAppointmentCount } from '../../../redux/sagas/dashboard/overview';
import Skeleton from 'react-loading-skeleton';
import { ConsultationInfoModal } from './Modals';
import { handleToggleModal } from '../../../redux/reducers/dashboard/consultations';

const Consultations = () => {
  const history = useHistory();
  const dispatch = useDispatch();

  React.useEffect(() => {
    dispatch(getAppointmentCount());
  }, [dispatch]);

  const { appointmentCountLoading, appointments } =
    useSelector(overviewSelector);

  const menu = (data) => (
    <Menu>
      <Menu.Item
        onClick={() => {
          sessionStorage.setItem('selectedConsultation', JSON.stringify(data));
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
      dataIndex: 'patient',
      key: 'patient',
      render: (text) => (
        <Space>
          {text && text.firstName}
          {text &&  text.lastName}
        </Space>
      ),
    },
    {
      title: 'DOCTOR',
      dataIndex: 'doctor',
      key: 'doctor',
      render: (text) => (
        <Space>
          Dr.
          {text && text.firstName}
          {text && text.lastName}
        </Space>
      ),
    },
    {
      title: 'DOCTOR TYPE',
      dataIndex: 'doctor',
      key: 'doctor',
      render: (text) => (
        <Space>
          {text && text.specializations.map((item) => {
            return item.title;
          })}
        </Space>
      ),
    },
    {
      title: 'DURATION',
      render: () => <Space>30 minutes</Space>,
    },
    {
      title: 'DATE',
      dataIndex: 'createdAt',
      key: 'createdAt',
      render: (text) => <Space>{new Date(text).toLocaleDateString()}</Space>,
    },
    {
      title: 'STATUS',
      // dataIndex: 'state',
      // key: 'state',
      // render: (text) => (
      //   <Space
      //     style={{
      //       width: '90px',
      //       fontSize: 13,
      //       padding: '0.5em 1em',
      //       margin: '0.5em',
      //       display: 'flex',
      //       justifyContent: 'center',
      //       textAlign: 'center',
      //       textTransform: 'capitalize',
      //       borderRadius: '5px',
      //       color:
      //         text === 'completed'
      //           ? '#19B729'
      //           : text === 'pending'
      //           ? '#FFAD33'
      //           : text === 'cancelled'
      //           ? '#FF8282'
      //           : text === 'scheduled'
      //           ? '#455AFE'
      //           : '',
      //       background:
      //         text === 'completed'
      //           ? 'rgba(25, 183, 41, 0.1)'
      //           : text === 'pending'
      //           ? 'rgba(255, 173, 51, 0.1)'
      //           : text === 'cancelled'
      //           ? 'rgba(255, 130, 130, 0.1)'
      //           : text === 'scheduled'
      //           ? 'rgba(69, 90, 254, 0.1)'
      //           : '',
      //     }}
      //   >
      //     {text === 'accepted' ? 'Verified' : text}
      //   </Space>
      // ),
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
      <ConsultationInfoModal />
      <Title>
        {appointmentCountLoading ? (
          <>
            <Skeleton width={150} height={40} />
            <Skeleton width={150} height={40} />
          </>
        ) : (
          <>
            <BackArrow onClick={() => history.goBack()} />
            <h6>Total Consultations</h6>
          </>
        )}
      </Title>
      <Heading>
        {appointmentCountLoading ? (
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
                className='form-select'
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
      {appointmentCountLoading ? (
        <>
          <Skeleton width={'100%'} height={500} />
          <br />
        </>
      ) : (
        <TableWrapper>
          <Table dataSource={appointments} columns={columns} />
        </TableWrapper>
      )}
    </Fragment>
  );
};

export default Consultations;
