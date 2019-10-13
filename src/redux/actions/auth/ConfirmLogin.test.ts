import { ConfirmLogin } from './ConfirmLogin';
import { AuthActionTypes } from '../../actionTypes';
import { Fakes } from '../../../../test-utils/Fakes';

test('ConfirmLogin', () => {
  const token = Fakes.string();

  const confirmLoginAction = ConfirmLogin(token);

  expect(confirmLoginAction).toEqual({
    type: AuthActionTypes.CONFIRM_LOGIN,
    payload: { token }
  });
});
