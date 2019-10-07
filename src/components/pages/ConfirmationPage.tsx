import React, { useEffect } from 'react';
import { withRouter, RouteComponentProps } from 'react-router-dom';
import qs from 'qs';
import { Dispatch } from 'redux';
import { connect } from 'react-redux';
import {
  SaveLoginTokenAction,
  ConfirmLoginAction
} from '../../redux/actions/auth';

interface PropsFromDispatch {
  saveLoginToken: (token: string) => void;
  confirmLogin: () => void;
}

type ConfirmationPageProps = PropsFromDispatch & RouteComponentProps;

export const ConfirmationPage = ({
  location,
  saveLoginToken,
  confirmLogin
}: ConfirmationPageProps): JSX.Element => {
  useEffect((): void => {
    const { token = '' }: { token?: string } = qs.parse(location.search, {
      ignoreQueryPrefix: true
    });
    saveLoginToken(token);
    confirmLogin();
  });

  return <div />;
};

const mapDispatchToProps = (dispatch: Dispatch): PropsFromDispatch => ({
  saveLoginToken: (token: string): SaveLoginTokenAction =>
    dispatch(SaveLoginTokenAction(token)),
  confirmLogin: (): ConfirmLoginAction => dispatch(ConfirmLoginAction())
});

export const ConnectedConfirmationPage = withRouter(connect(
  undefined,
  mapDispatchToProps
)(ConfirmationPage) as any);
