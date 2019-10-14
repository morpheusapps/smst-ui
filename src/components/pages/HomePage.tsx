import React, { useCallback } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Button } from 'smst-design-system';
import { SemesterionStates, Logout } from '../../redux';

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
