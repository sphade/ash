import React from "react";
import {
  Switch,
  BrowserRouter as Router,
  Route,
  Redirect,
} from "react-router-dom";
import { ProtectedRoute } from "./hooks";
import { ForgotPassword, Login } from "./view/Auth";
import {
  AccountSettings,
  CustomerFeedback,
  Overview,
  Promo,
  UserManagement,
} from "./view/Dashboard";
import "antd/dist/antd.css";
import "bootstrap/dist/css/bootstrap.min.css";

function App() {
  return (
    <Router>
      <Switch>
        <Route exact path="/">
          <Redirect to="/dashboard" />
        </Route>
        <Route path="/login" component={Login} />
        <Route path="/forgot-password" component={ForgotPassword} />
        <ProtectedRoute path="/dashboard" component={Overview} />
        <ProtectedRoute path="/user-management" component={UserManagement} />
        <ProtectedRoute path="/promo" component={Promo} />
        <ProtectedRoute path="/account-settings" component={AccountSettings} />
        <ProtectedRoute path="/customer-feedback" component={CustomerFeedback} />
      </Switch>
    </Router>
  );
}

export default App;
