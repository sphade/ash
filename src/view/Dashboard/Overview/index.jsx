import React from 'react';
import { Route } from 'react-router-dom';
import styled from 'styled-components';
import { DashboardLayout } from '../../../layout';
import Home from './Home';
import Doctors from './Doctors';
import Patients from './Patient';
import Revenue from './Revenue';
import UserMonitor from './UserMonitor';
import Consultations from './Consultation';

const Index = () => {
  const loggedInUser = JSON.parse(sessionStorage.getItem('user'));
  return (
    <DashboardLayout
      children={
        <Container>
          <Route exact path='/dashboard'>
            <Home />
          </Route>
          <Route exact path='/dashboard/revenue'>
            {loggedInUser.isSuper ? <Revenue /> : <p>Unauthorized</p>}
          </Route>
          <Route exact path='/dashboard/user-monitor'>
            <UserMonitor />
          </Route>
          <Route exact path='/dashboard/patients'>
            <Patients />
          </Route>
          <Route exact path='/dashboard/doctors'>
            <Doctors />
          </Route>
          <Route exact path='/dashboard/consultations'>
            <Consultations />
          </Route>
        </Container>
      }
    />
  );
};

export default Index;

const Container = styled.div`
  width: 100%;
  height: 100%;
  overflow-x: hidden !important;
  h1 {
    font-size: 25px;
    line-height: 29px;
    color: #666666;
  }
`;

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
