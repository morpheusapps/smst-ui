import React, { useEffect, useCallback } from 'react';
import { useLocation, Redirect } from 'react-router-dom';
import qs from 'qs';
import { useDispatch, useSelector } from 'react-redux';
import { ConfirmLogin } from '../../redux';
import { isConfirmLoginFailedSelector } from '../../selectors';
import { RoutesPaths } from '../../const/RoutesPaths';

export const ConfirmationPage = () => {
  const dispatch = useDispatch();
  const confirmLogin = useCallback(
    (token: string) => dispatch(ConfirmLogin(token)),
    [dispatch]
  );

  const location = useLocation();

  const isConfirmLoginFailed = useSelector(isConfirmLoginFailedSelector);

  useEffect((): void => {
    const { token }: { token?: string } = qs.parse(location.search, {
      ignoreQueryPrefix: true
    });
    confirmLogin(token || '');
  }, [confirmLogin, location.search]);

  return isConfirmLoginFailed ? (
    <Redirect to={RoutesPaths.LOGIN} />
  ) : (
    <div>logging in... </div>
  );
};
