import React from 'react';
import axios from 'axios';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import { Button } from './Button';

const App = (): JSX.Element => (
  <div style={{ display: 'flex', justifyContent: 'center' }}>
    <Router>
      <Switch>
        <Route exact path="/">
          <div>
            <a
              href="http://localhost:8000/api/auth/google"
              style={{ textDecoration: 'none', color: 'white' }}
            >
              <Button>Sign in with Google</Button>
            </a>
          </div>
        </Route>
        <Route exact path="/home">
          <div>
            <Button
              onClick={() =>
                axios.get(
                  `/api/auth/confirm?jwt=${new URLSearchParams(
                    window.location.search
                  ).get('jwt')}&email=${new URLSearchParams(
                    window.location.search
                  ).get('email')}`
                )
              }
            >
              Confirm Login
            </Button>
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
