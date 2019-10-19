import React from 'react';
import { GoogleAuthButton } from 'smst-design-system';

export const LoginPage = () => (
  <GoogleAuthButton
    url={`${process.env.REACT_APP_BACKEND_AUTH}/api/auth/google`}
  />
);
