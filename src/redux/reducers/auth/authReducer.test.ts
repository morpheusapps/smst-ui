import { authReducer } from './authReducer';
import { FakeAuthState } from '../../../../test-utils/FakeState/FakeAuthState';
import { Fakes } from '../../../../test-utils/Fakes';
import {
  SaveProfile,
  RemoveProfile,
  ConfirmLogin,
  ThrowConfirmLoginError,
  Logout,
  ThrowLogoutError,
  ThrowGetSessionError
} from '../../actions';
import { AuthAction } from './AuthAction';

describe('authReducer', () => {
  test('CONFIRM_LOGIN', () => {
    const initialState = FakeAuthState();

    const action = ConfirmLogin(Fakes.string());

    const state = authReducer(initialState, action);

    expect(state).toEqual({ ...initialState, loginError: undefined });
  });

  test('THROW_CONFIRM_LOGIN_ERROR', () => {
    const initialState = FakeAuthState();

    const action = ThrowConfirmLoginError();

    const state = authReducer(initialState, action);

    expect(state).toEqual({
      ...initialState,
      loginError: action.payload.loginError
    });
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

  describe('default', () => {
    const defaultAssertion = (action: AuthAction) => {
      const initialState = FakeAuthState();

      const state = authReducer(initialState, action);

      expect(state).toEqual(initialState);
    };

    test('LOGOUT', () => defaultAssertion(Logout()));
    test('THROW_LOGOUT_ERROR', () => defaultAssertion(ThrowLogoutError()));
    test('THROW_GET_SESSION_ERROR', () =>
      defaultAssertion(ThrowGetSessionError()));
  });
});
