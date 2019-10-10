import React, { useEffect } from 'react';
import { withRouter, RouteComponentProps } from 'react-router-dom';
import qs from 'qs';
import { Dispatch } from 'redux';
import { connect } from 'react-redux';
import { ConfirmLoginAction } from '../../redux/actions/auth/ConfirmLogin';

interface PropsFromDispatch {
  confirmLogin: (token: string) => void;
}

type ConfirmationPageProps = PropsFromDispatch & RouteComponentProps;

export const ConfirmationPage = ({
  location,
  confirmLogin
}: ConfirmationPageProps) => {
  useEffect((): void => {
    const { token }: { token?: string } = qs.parse(location.search, {
      ignoreQueryPrefix: true
    });
    confirmLogin(token || '');
  }, [confirmLogin, location.search]);

  return <>logging in... </>;
};

const mapDispatchToProps = (dispatch: Dispatch): PropsFromDispatch => ({
  confirmLogin: (token: string) => dispatch(ConfirmLoginAction(token))
});

export const ConnectedConfirmationPage = withRouter(
  connect(
    undefined,
    mapDispatchToProps
  )(ConfirmationPage)
);
