import { isProfileFetchedSelector } from './isProfileFetchedSelector';
import { FakeSemesterionStates } from '../../../test-utils/FakeState/FakeSemesterionStates';
import { FakeAuthState } from '../../../test-utils/FakeState/FakeAuthState';
import { Fakes } from '../../../test-utils/Fakes';

describe('isProfileFetchedSelector', () => {
  test('profile exist and fetched', () => {
    const authStateProp = { auth: FakeAuthState({ profile: Fakes.string() }) };
    const state = FakeSemesterionStates(authStateProp);

    const isProfileFetched = isProfileFetchedSelector(state);

    expect(isProfileFetched).toBe(true);
  });

  test('profile not exist and fetched', () => {
    const authStateProp = { auth: FakeAuthState({ profile: undefined }) };
    const state = FakeSemesterionStates(authStateProp);

    const isProfileFetched = isProfileFetchedSelector(state);

    expect(isProfileFetched).toBe(true);
  });

  test('profile not exist and not fetched', () => {
    const authStateProp = { auth: FakeAuthState({ profile: null }) };
    const state = FakeSemesterionStates(authStateProp);

    const isProfileFetched = isProfileFetchedSelector(state);

    expect(isProfileFetched).toBe(false);
  });
});
