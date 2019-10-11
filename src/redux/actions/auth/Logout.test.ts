import { Logout } from './Logout';
import { AuthActionTypes } from '../../actionTypes/AuthActionTypes';

test('Logout', () => {
  const logoutAction = Logout();

  expect(logoutAction).toEqual({ type: AuthActionTypes.LOGOUT });
});
