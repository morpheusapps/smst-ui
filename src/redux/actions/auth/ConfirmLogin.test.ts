import { ConfirmLogin } from './ConfirmLogin';
import { Fakes } from '../../../../test-utils/Fakes';
import { AuthActionTypes } from '../../actionTypes/AuthActionTypes';

test('ConfirmLogin', () => {
  const token = Fakes.string();

  const confirmLoginAction = ConfirmLogin(token);

  expect(confirmLoginAction).toEqual({
    type: AuthActionTypes.CONFIRM_LOGIN,
    payload: { token }
  });
});
