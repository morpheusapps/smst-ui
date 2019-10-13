import { Store } from 'redux';
import { SemesterionStates } from '../reducers';
import { configureStore } from './store';
import * as API from '../../api';
import { FakeApiCallResponse } from '../../../test-utils/FakeApiCallResponse';
import { Fakes } from '../../../test-utils/Fakes';
import { UserErrorMessages } from '../../const/UserErrorMessages';
import * as Actions from '../actions';

jest.mock('../../api');

describe('store integration tests', () => {
  let mockedApi: jest.Mocked<typeof API>;
  let store: Store<SemesterionStates>;

  const mockGetSessionApi = ({ profile }: { profile?: string }) =>
    mockedApi.GetSessionApi.mockImplementation(() =>
      FakeApiCallResponse({ data: { profile } })
    );

  const mockConfirmLoginApi = ({ profile }: { profile: string }) =>
    mockedApi.ConfirmLoginApi.mockImplementation(() =>
      FakeApiCallResponse({ data: { profile } })
    );

  beforeEach(() => {
    mockedApi = API as jest.Mocked<typeof API>;
    mockGetSessionApi({ profile: undefined });
    store = configureStore();
  });

  afterEach(() => {
    Object.keys(mockedApi).forEach(
      // @ts-ignore
      api => mockedApi[api].mockRestore && mockedApi[api].mockRestore()
    );
  });

  describe('init', () => {
    test('profile not exist', () => {
      const state = store.getState();

      expect(state).toEqual({
        auth: { profile: undefined },
        alert: {}
      });
    });

    test('profile exist', () => {
      const profile = Fakes.string();

      mockGetSessionApi({ profile });
      store = configureStore();

      const state = store.getState();

      expect(state).toEqual({
        auth: { profile },
        alert: {}
      });
    });

    test('get session error', () => {
      mockedApi.GetSessionApi.mockImplementation(() => {
        throw new Error();
      });
      store = configureStore();

      const state = store.getState();

      expect(state).toEqual({
        auth: { profile: null },
        alert: {
          message: UserErrorMessages.AUTH.GET_SESSION_ERROR
        }
      });
    });
  });

  describe('Confirm Login', () => {
    let token: string;

    beforeEach(() => {
      token = Fakes.string();
    });

    test('success', () => {
      const profile = Fakes.string();

      mockConfirmLoginApi({ profile });

      store.dispatch(Actions.ConfirmLogin(token));

      const state = store.getState();

      expect(state).toEqual({
        auth: { profile },
        alert: {}
      });
    });

    test('failure', () => {
      mockedApi.ConfirmLoginApi.mockImplementation(() => {
        throw new Error();
      });

      store.dispatch(Actions.ConfirmLogin(token));

      const state = store.getState();

      expect(state).toEqual({
        auth: {
          profile: undefined,
          loginError: UserErrorMessages.AUTH.CONFIRM_LOGIN_ERROR
        },
        alert: {}
      });
    });
  });

  describe('Logout', () => {
    test('success', () => {
      store.dispatch(Actions.Logout());

      const state = store.getState();

      expect(state).toEqual({
        auth: { profile: undefined },
        alert: {}
      });
    });
    test('failure', () => {
      mockedApi.DestroySessionApi.mockImplementation(() => {
        throw new Error();
      });

      store.dispatch(Actions.Logout());

      const state = store.getState();

      expect(state).toEqual({
        auth: { profile: undefined },
        alert: { message: UserErrorMessages.AUTH.LOGOUT_ERROR }
      });
    });
  });
});
