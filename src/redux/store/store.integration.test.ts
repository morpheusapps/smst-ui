import { Store } from 'redux';
import { SemesterionStates } from '../reducers';
import { configureStore } from './store';
import * as API from '../../api';
import { FakeApiCallResponse } from '../../../test-utils/FakeApiCallResponse';
import { Fakes } from '../../../test-utils/Fakes';

jest.mock('../../api');

describe('store integration tests', () => {
  let mockedApi: jest.Mocked<typeof API>;
  let store: Store<SemesterionStates>;

  beforeEach(() => {
    mockedApi = API as jest.Mocked<typeof API>;
    mockedApi.GetSessionApi.mockImplementation(() =>
      FakeApiCallResponse({ data: { profile: undefined } })
    );
    store = configureStore();
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

      mockedApi.GetSessionApi.mockImplementation(() =>
        FakeApiCallResponse({ data: { profile } })
      );
      store = configureStore();

      const state = store.getState();

      expect(state).toEqual({
        auth: { profile },
        alert: {}
      });
    });
  });
});
