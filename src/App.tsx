import React from 'react';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import { LoginPage } from './components/pages/LoginPage';
import { Button } from './components/Button';
import { ConnectedConfirmationPage as ConfirmationPage } from './components/pages/ConfirmationPage';

const App = (): JSX.Element => (
  <div style={{ display: 'flex', justifyContent: 'center' }}>
    <Router>
      <Switch>
        <Route exact path="/">
          <LoginPage />
        </Route>
        <Route exact path="/login/confirmation">
          <ConfirmationPage />
        </Route>
        <Route exact path="/home">
          <Link style={{ textDecoration: 'none', color: 'white' }} to="/">
            <Button>Sign out</Button>
          </Link>
        </Route>
      </Switch>
    </Router>
  </div>
);

export default App;
