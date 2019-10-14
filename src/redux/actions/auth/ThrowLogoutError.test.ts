import { ThrowLogoutError } from './ThrowLogoutError';
import { AuthActionTypes } from '../../actionTypes';
import { UserErrorMessages } from '../../../const/UserErrorMessages';

test('ThrowLogoutError', () => {
  const throwLogoutErrorAction = ThrowLogoutError();

  expect(throwLogoutErrorAction).toEqual({
    type: AuthActionTypes.THROW_LOGOUT_ERROR,
    payload: { errorMessage: UserErrorMessages.AUTH.LOGOUT_ERROR }
  });
});
