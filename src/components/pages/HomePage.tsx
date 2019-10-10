import React from 'react';
import { connect } from 'react-redux';
import { Dispatch } from 'redux';
import { SemesterionStates } from '../../redux/reducers';
import { Button } from '../Button';
import { LogoutAction } from '../../redux/actions/auth/Logout';

interface PropsFromStore {
  email?: string;
}

interface PropsFromDispatch {
  logout: () => void;
}

type HomePageProsp = PropsFromStore & PropsFromDispatch;

export const HomePage = ({ email, logout }: HomePageProsp) => (
  <>
    <div>email : {email}</div>
    <Button onClick={logout}>Sign out</Button>
  </>
);

const mapStateToProps = ({ auth }: SemesterionStates): PropsFromStore => ({
  email: auth.profile
});

const mapDispatchToProps = (dispatch: Dispatch): PropsFromDispatch => ({
  logout: () => dispatch(LogoutAction())
});

export const ConnectedHomePage = connect(
  mapStateToProps,
  mapDispatchToProps
)(HomePage);
