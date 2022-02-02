import React from 'react';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import 'react-loading-skeleton/dist/skeleton.css';
import { FaInfoCircle } from 'react-icons/fa';
import {
  Switch,
  BrowserRouter as Router,
  Route,
  Redirect,
} from 'react-router-dom';
import { ProtectedRoute } from './hooks';
import { ForgotPassword, Login, PageNotFound } from './view/Auth';
import {
  AccountSettings,
  CustomerFeedback,
  Overview,
  Promo,
  UserManagement,
} from './view/Dashboard';
import 'antd/dist/antd.css';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
    <>
      <Router>
        <Switch>
          {/* Authentication */}
          <Route exact path='/'>
            <Redirect to='/dashboard' />
          </Route>
          <Route path='/login' component={Login} />
          <Route path='/forgot-password' component={ForgotPassword} />

          {/* Dashboard Routes */}
          <ProtectedRoute path='/dashboard' component={Overview} />
          <ProtectedRoute path='/user-management' component={UserManagement} />
          <ProtectedRoute path='/promo' component={Promo} />
          <ProtectedRoute
            path='/account-settings'
            component={AccountSettings}
          />
          <ProtectedRoute
            path='/customer-feedback'
            component={CustomerFeedback}
          />
          <Route path='*' component={PageNotFound} />
        </Switch>
      </Router>
      <div className='screen-size-message text-center'>
        <FaInfoCircle fontSize='5rem' />
        <div>This dashboard currently doesn't support mobile devices.</div>
        <div className='mt-3'>
          For best experience, We recommend you access the dashboard with{' '}
          <b>Google Chrome, Mozilla Firefox or any other suitable browser </b>{' '}
          on a<b> DESKTOP or TABLET</b> device!
        </div>
      </div>
    </>
  );
}

export default App;
