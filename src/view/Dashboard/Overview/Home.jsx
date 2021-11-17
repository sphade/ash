import React from 'react';
import { Table, Tabs } from 'antd';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import { OverviewCard, UserMonitorCard } from '../../../components/Overview';
import {
  columns,
  dataSource,
  superAdminOverviewData,
  overviewData,
  users,
} from '../../../mock_store/overview';
import { Searchbar } from '../../../Reuseable';

const Home = () => {
  const { TabPane } = Tabs;
  const loggedInUser = JSON.parse(localStorage.getItem('user'));
  return (
    <React.Fragment>
      <h1>Dashboard</h1>
      <CardWrapper isSuperAdmin={loggedInUser.isSuper}>
        {loggedInUser.isSuper
          ? superAdminOverviewData.map((item, index) => {
              const { text, value, image, background, link } = item;
              return (
                <OverviewCard
                  id={index}
                  bg={background}
                  image={image}
                  value={value}
                  text={text}
                  link={link}
                />
              );
            })
          : overviewData.map((item, index) => {
              const { text, value, image, background, link } = item;
              return (
                <OverviewCard
                  id={index}
                  bg={background}
                  image={image}
                  value={value}
                  text={text}
                  link={link}
                />
              );
            })}
      </CardWrapper>
      <Header>
        <h1>User Monitor</h1>
        <LinkR to='/dashboard/user-monitor'>View All</LinkR>
      </Header>
      <MonitorCardWrapper>
        {users.map((item, index) => {
          const { name, phone, email, date, time, location } = item;
          return (
            <UserMonitorCard
              id={index}
              name={name}
              phone={phone}
              email={email}
              date={date}
              time={time}
              location={location}
            />
          );
        })}
      </MonitorCardWrapper>
      <br />
      <Tabs defaultActiveKey='1' onChange>
        <TabPane tab='Referral' key='1'>
          <Header style={{ marginTop: '0 !important' }}>
            {/* <h1>Referrals</h1> */}
            <div className='group'>
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
            </div>
          </Header>
          <TableWrapper>
            <Table dataSource={dataSource} columns={columns} />
          </TableWrapper>
        </TabPane>
        <TabPane tab='Consultations' key='2'>
          <Header>
            <div className='group'>
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
            </div>
          </Header>
          <TableWrapper>
            <Table dataSource={dataSource} columns={columns} />
          </TableWrapper>
        </TabPane>
      </Tabs>
    </React.Fragment>
  );
};

export default Home;

export const Header = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin: 2rem 0 0.5rem;

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
