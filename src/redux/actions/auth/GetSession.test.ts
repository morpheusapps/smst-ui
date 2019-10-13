import { GetSession } from './GetSession';
import { AuthActionTypes } from '../../actionTypes';

test('GetSession', () => {
  const getSessionAction = GetSession();

  expect(getSessionAction).toEqual({ type: AuthActionTypes.GET_SESSION });
});
