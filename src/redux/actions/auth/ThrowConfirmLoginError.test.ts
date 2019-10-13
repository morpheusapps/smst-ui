import { ThrowConfirmLoginError } from './ThrowConfirmLoginError';
import { AuthActionTypes } from '../../actionTypes';
import { UserErrorMessages } from '../../../const/UserErrorMessages';

test('ThrowConfirmLoginError', () => {
  const confirmLoginAction = ThrowConfirmLoginError();

  expect(confirmLoginAction).toEqual({
    type: AuthActionTypes.THROW_CONFIRM_LOGIN_ERROR,
    payload: { loginError: UserErrorMessages.AUTH.CONFIRM_LOGIN_ERROR }
  });
});
