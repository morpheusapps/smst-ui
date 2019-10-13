import { alertReducer } from './alertReducer';
import { AlertAction } from './AlertAction';
import { FakeAlertState } from '../../../../test-utils/FakeState/FakeAlertState';
import {
  ThrowLogoutError,
  ThrowGetSessionError,
  ThrowGlobalErrorAlert
} from '../../actions';
import { Fakes } from '../../../../test-utils/Fakes';

describe('alertReducer', () => {
  describe('default', () => {
    const errorAlertActionAssertion = (action: AlertAction) => {
      const initialState = FakeAlertState();

      const state = alertReducer(initialState, action);

      expect(state).toEqual({
        ...initialState,
        message: action.payload.errorMessage
      });
    };

    test('THROW_LOGOUT_ERROR', () =>
      errorAlertActionAssertion(ThrowLogoutError()));
    test('THROW_GET_SESSION_ERROR', () =>
      errorAlertActionAssertion(ThrowGetSessionError()));
    test('THROW_GLOBAL_ERROR_ALERT', () =>
      errorAlertActionAssertion(ThrowGlobalErrorAlert(Fakes.string())));
  });
});
