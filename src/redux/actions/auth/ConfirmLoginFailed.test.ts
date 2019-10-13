import { ConfirmLoginFailed } from './ConfirmLoginFailed';
import { AuthActionTypes } from '../../actionTypes/AuthActionTypes';

test('ConfirmLogin', () => {
  const confirmLoginAction = ConfirmLoginFailed();

  expect(confirmLoginAction).toEqual({
    type: AuthActionTypes.FAIL_CONFIRM_LOGIN
  });
});
