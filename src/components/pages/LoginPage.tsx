import React from 'react';
import { Button } from '../Button';

export const LoginPage = (): JSX.Element => (
  <div>
    <a
      href={`${process.env.REACT_APP_BACKEND_AUTH}/api/auth/google`}
      style={{ textDecoration: 'none', color: 'white' }}
    >
      <Button>Sign in with Google</Button>
    </a>
  </div>
);
