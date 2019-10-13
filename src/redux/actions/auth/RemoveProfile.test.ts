import { RemoveProfile } from './RemoveProfile';
import { AuthActionTypes } from '../../actionTypes';

test('RemoveProfile', () => {
  const removeProfileAction = RemoveProfile();

  expect(removeProfileAction).toEqual({ type: AuthActionTypes.REMOVE_PROFILE });
});
