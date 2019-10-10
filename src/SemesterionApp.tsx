import React from 'react';
import { BrowserRouter as Router, Switch } from 'react-router-dom';
import { ConnectedLoginRoute as LoginRoute } from './components/routes/LoginRoute';
import { ConnectedAuthorizedRoute as AuthorizedRoute } from './components/routes/AuthorizedRoute';
import { LoginPage } from './components/pages/LoginPage';
import { ConnectedConfirmationPage as ConfirmationPage } from './components/pages/ConfirmationPage';
import { ConnectedHomePage as HomePage } from './components/pages/HomePage';
import { RoutesPaths } from './const/RoutesPaths';

export const SemesterionApp = () => (
  <div style={{ display: 'flex', justifyContent: 'center' }}>
    <Router>
      <Switch>
        <AuthorizedRoute exact path={RoutesPaths.BASE}>
          <HomePage />
        </AuthorizedRoute>
        <LoginRoute exact path={RoutesPaths.LOGIN}>
          <LoginPage />
        </LoginRoute>
        <LoginRoute exact path={RoutesPaths.LOGIN_CONFIRMATION}>
          <ConfirmationPage />
        </LoginRoute>
      </Switch>
    </Router>
  </div>
);
