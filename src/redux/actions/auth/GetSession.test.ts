import { GetSession } from './GetSession';
import { AuthActionTypes } from '../../actionTypes/AuthActionTypes';

test('GetSession', () => {
  const getSessionAction = GetSession();

  expect(getSessionAction).toEqual({ type: AuthActionTypes.GET_SESSION });
});
