import React from 'react';
import { Table } from 'antd';
import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import styled from 'styled-components';
import { OverviewCard, UserMonitorCard } from '../../../components/Overview';
import { columns } from '../../../table/overview';
import { columns as consultationsColumns } from '../../../table/consultations';
import { Searchbar } from '../../../Reuseable';
import {
  getAppointmentCount,
  getDoctorCount,
  getPatientCount,
  getTotalRevenue,
  getUsers,
  getReferrals,
} from '../../../redux/sagas/dashboard/overview';
import Skeleton from 'react-loading-skeleton';
import {
  overviewSelector,
  toggleActiveTab,
} from '../../../redux/reducers/dashboard/overview';
import {
  PatientIcon,
  DoctorIcon,
  DollarIcon,
  ConsultationIcon,
} from '../../../assets/images/icons/overview';
import { CardBg1, CardBg2 } from '../../../assets/images/background';

const Home = () => {
  const dispatch = useDispatch();

  React.useEffect(() => {
    dispatch(getAppointmentCount());
    dispatch(getDoctorCount());
    dispatch(getPatientCount());
    dispatch(getTotalRevenue());
    dispatch(getUsers());
    dispatch(getReferrals());
  }, [dispatch]);

  const {
    doctorCountLoading,
    patientCountLoading,
    appointmentCountLoading,
    doctorCount,
    patientCount,
    appointmentCount,
    appointments,
    revenueLoading,
    revenue,
    usersLoading,
    users,
    referralsLoading,
    referrals,
    activeTab,
  } = useSelector(overviewSelector);
  const loggedInUser = JSON.parse(sessionStorage.getItem('user'));
  return (
    <Container>
      {doctorCountLoading || patientCountLoading || appointmentCountLoading ? (
        <Skeleton width='120px' height='35px' />
      ) : (
        <h1>Dashboard</h1>
      )}
      <CardWrapper isSuperAdmin={loggedInUser.isSuper}>
        {doctorCountLoading ||
        patientCountLoading ||
        appointmentCountLoading ||
        revenueLoading ? (
          <>
            <Skeleton height={150} />
            <Skeleton height={150} />
            <Skeleton height={150} />
            <Skeleton height={150} />
          </>
        ) : (
          <>
            <OverviewCard
              text='Total Patients'
              value={patientCount || 0}
              image={PatientIcon}
              bg={CardBg1}
              link='/dashboard/patients'
            />
            <OverviewCard
              text='Total Doctors'
              value={doctorCount || 0}
              image={DoctorIcon}
              bg={CardBg2}
              link='/dashboard/patients'
            />
            <OverviewCard
              text='Total Consultations'
              value={appointmentCount || 0}
              image={ConsultationIcon}
              bg={CardBg1}
              link='/dashboard/consultations'
            />
            {loggedInUser.isSuper ? (
              <OverviewCard
                text='Total Revenue'
                value={revenue || 0}
                image={DollarIcon}
                bg={CardBg2}
                link='/dashboard/revenue'
              />
            ) : (
              ''
            )}
          </>
        )}
      </CardWrapper>
      <Header>
        {usersLoading ? (
          <>
            <Skeleton height={40} width={150} />
            <Skeleton height={40} width={150} />
          </>
        ) : (
          <>
            <h1>User Monitor</h1>
            <LinkR to='/dashboard/user-monitor'>View All</LinkR>
          </>
        )}
      </Header>
      <MonitorCardWrapper>
        {usersLoading ? (
          <>
            <Skeleton width={340} height={240} />
            <Skeleton width={340} height={240} />
            <Skeleton width={340} height={240} />
            <Skeleton width={340} height={240} />
            <Skeleton width={340} height={240} />
          </>
        ) : (
          users.map((item, index) => {
            return <UserMonitorCard key={index} {...item} />;
          })
        )}
      </MonitorCardWrapper>
      <div className='tab-group'>
        {referralsLoading ? (
          <>
            <Skeleton width={150} height={40} />
            <Skeleton width={150} height={40} />
          </>
        ) : (
          ['Referral', 'Consultations'].map((item, index) => {
            return (
              <Tab
                key={index}
                className={activeTab === item ? 'active' : ''}
                onClick={() => dispatch(toggleActiveTab(item))}
              >
                {item}
              </Tab>
            );
          })
        )}
      </div>

      {activeTab === 'Referral' && (
        <>
          <Header style={{ marginTop: '0 !important' }}>
            <div className='group'>
              {referralsLoading ? (
                <>
                  <Skeleton width={180} height={40} />
                  <Skeleton width={250} height={40} />
                </>
              ) : (
                <>
                  <select
                    style={{ border: 'none', height: '3rem', width: '150px' }}
                    class='form-select'
                  >
                    <option selected>Filter</option>
                    <option value='today'>Today</option>
                    <option value='one_week'>Last 7 Days</option>
                    <option value='one_month'>One Month</option>
                    <option value='one_year'>One Year</option>
                  </select>
                  <Searchbar />
                </>
              )}
            </div>
          </Header>
          <TableWrapper>
            {referralsLoading ? (
              <Skeleton width={'100%'} height={330} />
            ) : (
              <Table dataSource={referrals} columns={columns} />
            )}
          </TableWrapper>
        </>
      )}
      {activeTab === 'Consultations' && (
        <>
          <Header>
            <div className='group'>
              {appointmentCountLoading ? (
                <>
                  <Skeleton width={180} height={40} />
                  <Skeleton width={250} height={40} />
                </>
              ) : (
                <>
                  <select
                    style={{ border: 'none', height: '3rem', width: '150px' }}
                    class='form-select'
                  >
                    <option selected>Filter</option>
                    <option value='today'>Today</option>
                    <option value='one_week'>Last 7 Days</option>
                    <option value='one_month'>One Month</option>
                    <option value='one_year'>One Year</option>
                  </select>
                  <Searchbar />
                </>
              )}
            </div>
          </Header>
          <TableWrapper>
            {appointmentCountLoading ? (
              <Skeleton width={'100%'} height={330} />
            ) : (
              <Table dataSource={appointments} columns={consultationsColumns} />
            )}
          </TableWrapper>
        </>
      )}
    </Container>
  );
};

export default Home;

export const Header = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin: 40px 0 30px;

  .group {
    display: flex;
    column-gap: 1rem;
    align-items: center;
  }
`;

export const LinkR = styled(Link)`
  text-decoration: none;
  color: #455afe;
  font-weight: 500;
  font-size: 14px;
  line-height: 16px;
  letter-spacing: 0.0225em;
  text-transform: uppercase;
`;

export const CardWrapper = styled.div`
  margin-top: 1.2rem;
  display: grid;
  grid-template-columns: ${({ isSuperAdmin }) =>
    isSuperAdmin ? '1fr 1fr 1fr 1fr' : '1fr 1fr 1fr'};
  gap: 1.5rem;
`;

export const MonitorCardWrapper = styled.div`
  display: flex;
  // grid-template-columns: 1fr 1fr 1fr;
  gap: 2rem;
  padding-bottom: 1rem;
  overflow-x: scroll;

  // ::-webkit-scrollbar {
  //   width: 0;  /* Remove scrollbar space */
  //   background: transparent;
`;

export const TableWrapper = styled.div`
  width: 100%;
  overflow-x: hidden !important;
  // height: 200px;
  // background:green;
  // margin: 0;
  // padding:0;
  margin-top: 1.5rem;
`;

export const Tab = styled.div`
  font-style: normal;
  font-weight: bold;
  font-size: 20px;
  line-height: 23px;
  letter-spacing: 0.0015em;
  color: #999999;
  cursor: pointer;

  :hover {
    opacity: 0.7;
  }
`;

const Container = styled.div`
  .active {
    color: #e20b8c;
  }

  .tab-group {
    display: flex;
    gap: 2rem;
    margin: 44px 0 20px;
  }
`;
