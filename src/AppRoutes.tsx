import React from 'react';
import { BrowserRouter as Router, Switch } from 'react-router-dom';
import { LoginRoute } from './components/routes/LoginRoute';
import { AuthorizedRoute } from './components/routes/AuthorizedRoute';
import { LoginPage } from './components/pages/LoginPage';
import { ConfirmationPage } from './components/pages/ConfirmationPage';
import { HomePage } from './components/pages/HomePage';
import { RoutesPaths } from './const/RoutesPaths';

export const AppRoutes = () => (
  <Router>
    <Switch>
      <AuthorizedRoute exact path={RoutesPaths.BASE}>
        <HomePage />
      </AuthorizedRoute>
      <LoginRoute exact path={RoutesPaths.LOGIN}>
        <LoginPage />
      </LoginRoute>
      <LoginRoute exact path={RoutesPaths.LOGIN_CONFIRM}>
        <ConfirmationPage />
      </LoginRoute>
    </Switch>
  </Router>
);
