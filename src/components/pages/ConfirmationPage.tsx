import React, { useEffect, useCallback } from 'react';
import { useLocation } from 'react-router-dom';
import qs from 'qs';
import { useDispatch } from 'react-redux';
import { ConfirmLogin } from '../../redux';

export const ConfirmationPage = () => {
  const dispatch = useDispatch();
  const confirmLogin = useCallback(
    (token: string) => dispatch(ConfirmLogin(token)),
    [dispatch]
  );

  const location = useLocation();

  useEffect((): void => {
    const { token }: { token?: string } = qs.parse(location.search, {
      ignoreQueryPrefix: true
    });
    confirmLogin(token || '');
  }, [confirmLogin, location.search]);

  return <>logging in... </>;
};
