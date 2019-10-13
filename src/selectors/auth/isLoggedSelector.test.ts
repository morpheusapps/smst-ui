import { isLoggedSelector } from './isLoggedSelector';
import { FakeSemesterionStates } from '../../../test-utils/FakeState/FakeSemesterionStates';
import { FakeAuthState } from '../../../test-utils/FakeState/FakeAuthState';
import { Fakes } from '../../../test-utils/Fakes';

describe('isLoggedSelector', () => {
  test('profile exist', () => {
    const authStateProp = { auth: FakeAuthState({ profile: Fakes.string() }) };
    const state = FakeSemesterionStates(authStateProp);

    const isLogged = isLoggedSelector(state);

    expect(isLogged).toBe(true);
  });

  test('profile not exist and fetched', () => {
    const authStateProp = { auth: FakeAuthState({ profile: undefined }) };
    const state = FakeSemesterionStates(authStateProp);

    const isLogged = isLoggedSelector(state);

    expect(isLogged).toBe(false);
  });

  test('profile not exist and not fetched', () => {
    const authStateProp = { auth: FakeAuthState({ profile: null }) };
    const state = FakeSemesterionStates(authStateProp);

    const isLogged = isLoggedSelector(state);

    expect(isLogged).toBe(false);
  });
});
