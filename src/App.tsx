import React from 'react';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import { Button } from './Button';

const App = (): JSX.Element => (
  <div style={{ display: 'flex', justifyContent: 'center' }}>
    <Router>
      <Switch>
        <Route exact path="/">
          <div style={{ marginTop: '500px' }}>
            <Link style={{ textDecoration: 'none', color: 'white' }} to="/home">
              <Button>Sign in with Google</Button>
            </Link>
          </div>
        </Route>
        <Route exact path="/home">
          <div style={{ marginTop: '500px' }}>
            <Link style={{ textDecoration: 'none', color: 'white' }} to="/">
              <Button>Sign out</Button>
            </Link>
          </div>
        </Route>
      </Switch>
    </Router>
  </div>
);

export default App;
