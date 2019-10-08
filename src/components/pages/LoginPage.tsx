import React from 'react';
import { connect } from 'react-redux';
import { Button } from '../Button';
import { SemesterionStates } from '../../redux/reducers';

export const LoginPage = ({ email }: { email?: string }): JSX.Element => (
  <>
    <a
      href={`${process.env.REACT_APP_BACKEND_AUTH}/api/auth/google`}
      style={{ textDecoration: 'none', color: 'white' }}
    >
      <Button>Sign in with Google</Button>
    </a>
    <div>email :{email} </div>
  </>
);

const mapStateToProps = ({ auth }: SemesterionStates): { email?: string } => ({
  email: auth.profile
});

export const ConnectedLoginPage = connect(mapStateToProps)(LoginPage);
