import React, { useEffect } from 'react';
import { withRouter, RouteComponentProps, Redirect } from 'react-router-dom';
import qs from 'qs';
import { Dispatch } from 'redux';
import { connect } from 'react-redux';
import { ConfirmLoginAction } from '../../redux/actions/auth';
import { SemesterionStates } from '../../redux/reducers';

interface PropsFromDispatch {
  confirmLogin: (token: string) => void;
}

interface PropsFromStore {
  profile?: string;
}

type ConfirmationPageProps = PropsFromDispatch &
  PropsFromStore &
  RouteComponentProps;

export const ConfirmationPage = ({
  location,
  confirmLogin,
  profile
}: ConfirmationPageProps): JSX.Element => {
  useEffect((): void => {
    const { token = '' }: { token?: string } = qs.parse(location.search, {
      ignoreQueryPrefix: true
    });
    confirmLogin(token);
  });

  if (profile) {
    return <Redirect to="/home" />;
  }

  return <div />;
};

const mapStateToProps = ({ auth }: SemesterionStates): PropsFromStore => ({
  profile: auth.profile
});

const mapDispatchToProps = (dispatch: Dispatch): PropsFromDispatch => ({
  confirmLogin: (token: string): ConfirmLoginAction =>
    dispatch(ConfirmLoginAction(token))
});

export const ConnectedConfirmationPage = withRouter(connect(
  mapStateToProps,
  mapDispatchToProps
)(ConfirmationPage) as any);
