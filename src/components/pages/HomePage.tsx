import React, { useCallback } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { SemesterionStates } from '../../redux/reducers';
import { Button } from '../Button';
import { LogoutAction } from '../../redux/actions/auth/Logout';

export const HomePage = () => {
  const email = useSelector(({ auth }: SemesterionStates) => auth.profile);

  const dispatch = useDispatch();
  const logout = useCallback(() => dispatch(LogoutAction()), [dispatch]);

  return (
    <>
      <div>email : {email}</div>
      <Button onClick={logout}>Sign out</Button>
    </>
  );
};
