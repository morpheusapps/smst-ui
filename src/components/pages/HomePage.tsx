import React, { useCallback } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { SemesterionStates } from '../../redux/reducers';
import { Button } from '../Button';
import { Logout } from '../../redux/actions/auth/Logout';

export const HomePage = () => {
  const email = useSelector(({ auth }: SemesterionStates) => auth.profile);

  const dispatch = useDispatch();
  const logout = useCallback(() => dispatch(Logout()), [dispatch]);

  return (
    <>
      <div>email : {email}</div>
      <Button onClick={logout}>Sign out</Button>
    </>
  );
};
