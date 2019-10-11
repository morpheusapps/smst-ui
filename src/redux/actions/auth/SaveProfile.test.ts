import { SaveProfile } from './SaveProfile';
import { AuthActionTypes } from '../../actionTypes/AuthActionTypes';
import { Fakes } from '../../../../test-utils/Fakes';

test('SaveProfile', () => {
  const profile = Fakes.string();

  const saveProfileAction = SaveProfile(profile);

  expect(saveProfileAction).toEqual({
    type: AuthActionTypes.SAVE_PROFILE,
    payload: { profile }
  });
});
