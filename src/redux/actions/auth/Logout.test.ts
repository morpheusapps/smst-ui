import { Logout } from './Logout';
import { AuthActionTypes } from '../../actionTypes';

test('Logout', () => {
  const logoutAction = Logout();

  expect(logoutAction).toEqual({ type: AuthActionTypes.LOGOUT });
});
