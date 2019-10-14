import { isConfirmLoginFailedSelector } from './isConfirmLoginFailedSelector';
import { FakeSemesterionStates } from '../../../test-utils/FakeState/FakeSemesterionStates';
import { FakeAuthState } from '../../../test-utils/FakeState/FakeAuthState';
import { Fakes } from '../../../test-utils/Fakes';

describe('isLoggedSelector', () => {
  test('Confirm Login Success', () => {
    const authStateProp = {
      auth: FakeAuthState({ loginError: undefined })
    };
    const state = FakeSemesterionStates(authStateProp);

    const isConfirmLoginFailed = isConfirmLoginFailedSelector(state);

    expect(isConfirmLoginFailed).toBe(false);
  });

  test('Confirm Login Failure', () => {
    const authStateProp = {
      auth: FakeAuthState({ loginError: Fakes.string() })
    };
    const state = FakeSemesterionStates(authStateProp);

    const isConfirmLoginFailed = isConfirmLoginFailedSelector(state);

    expect(isConfirmLoginFailed).toBe(true);
  });
});
