import { ThrowGetSessionError } from './ThrowGetSessionError';
import { AuthActionTypes } from '../../actionTypes';
import { UserErrorMessages } from '../../../const/UserErrorMessages';

test('ThrowGetSessionError', () => {
  const throwGetSessionErrorAction = ThrowGetSessionError();

  expect(throwGetSessionErrorAction).toEqual({
    type: AuthActionTypes.THROW_GET_SESSION_ERROR,
    payload: { errorMessage: UserErrorMessages.AUTH.GET_SESSION_ERROR }
  });
});
