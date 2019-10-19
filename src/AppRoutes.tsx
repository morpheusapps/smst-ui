import React from 'react';
import { BrowserRouter as Router, Switch } from 'react-router-dom';
import { LoginRoute, AuthorizedRoute } from './components/routes';
import { LoginPage, ConfirmationPage, HomePage } from './components/pages';
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
