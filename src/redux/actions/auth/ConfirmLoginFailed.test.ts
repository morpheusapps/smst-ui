import { ThrowConfirmLoginError } from './ThrowConfirmLoginError';
import { AuthActionTypes } from '../../actionTypes';

test('ConfirmLogin', () => {
  const confirmLoginAction = ThrowConfirmLoginError();

  expect(confirmLoginAction).toEqual({
    type: AuthActionTypes.FAIL_CONFIRM_LOGIN
  });
});
