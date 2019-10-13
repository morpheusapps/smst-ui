import { authReducer } from './authReducer';
import { FakeAuthState } from '../../../../test-utils/FakeAuthState';
import { Fakes } from '../../../../test-utils/Fakes';
import { SaveProfile, RemoveProfile, ConfirmLogin } from '../../actions';

describe('authReducer', () => {
  test('CONFIRM_LOGIN', () => {
    const initialState = FakeAuthState();

    const action = ConfirmLogin(Fakes.string());

    const state = authReducer(initialState, action);

    expect(state).toEqual({ ...initialState, loginError: undefined });
  });
  test('SAVE_PROFILE', () => {
    const initialState = FakeAuthState();

    const profile = Fakes.string();
    const action = SaveProfile(profile);

    const state = authReducer(initialState, action);

    expect(state).toEqual({ ...initialState, profile });
  });
  test('REMOVE_PROFILE', () => {
    const initialState = FakeAuthState();

    const action = RemoveProfile();

    const state = authReducer(initialState, action);

    expect(state).toEqual({ ...initialState, profile: undefined });
  });
});
