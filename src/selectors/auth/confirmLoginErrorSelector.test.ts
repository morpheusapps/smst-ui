import { confirmLoginErrorSelector } from './confirmLoginErrorSelector';
import { FakeSemesterionStates } from '../../../test-utils/FakeState/FakeSemesterionStates';
import { FakeAuthState } from '../../../test-utils/FakeState/FakeAuthState';
import { Fakes } from '../../../test-utils/Fakes';

describe('confirmLoginErrorSelector', () => {
  test('Confirm Login Success', () => {
    const authStateProp = {
      auth: FakeAuthState({ loginError: undefined })
    };
    const state = FakeSemesterionStates(authStateProp);

    const confirmLoginError = confirmLoginErrorSelector(state);

    expect(confirmLoginError).toBe('');
  });

  test('Confirm Login Failure', () => {
    const loginError = Fakes.string();
    const authStateProp = {
      auth: FakeAuthState({ loginError })
    };
    const state = FakeSemesterionStates(authStateProp);

    const confirmLoginError = confirmLoginErrorSelector(state);

    expect(confirmLoginError).toBe(loginError);
  });
});
