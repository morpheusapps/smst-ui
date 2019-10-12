import { isLoggedSelector } from './isLoggedSelector';
import { FakeSemesterionStates } from '../../../test-utils/FakeSemesterionStates';
import { FakeAuthState } from '../../../test-utils/FakeAuthState';
import { Fakes } from '../../../test-utils/Fakes';

describe('isLoggedSelector', () => {
  test('profile exist', () => {
    const authStateProp = { auth: FakeAuthState({ profile: Fakes.string() }) };
    const state = FakeSemesterionStates(authStateProp);

    const isLogged = isLoggedSelector(state);

    expect(isLogged).toBe(true);
  });

  test('profile not exist', () => {
    const authStateProp = { auth: FakeAuthState({ profile: undefined }) };
    const state = FakeSemesterionStates(authStateProp);

    const isLogged = isLoggedSelector(state);

    expect(isLogged).toBe(false);
  });
});
