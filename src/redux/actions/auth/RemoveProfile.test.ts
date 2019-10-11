import { RemoveProfile } from './RemoveProfile';
import { AuthActionTypes } from '../../actionTypes/AuthActionTypes';

test('RemoveProfile', () => {
  const removeProfileAction = RemoveProfile();

  expect(removeProfileAction).toEqual({ type: AuthActionTypes.REMOVE_PROFILE });
});
