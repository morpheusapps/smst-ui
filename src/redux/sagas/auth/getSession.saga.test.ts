import { testSaga } from 'redux-saga-test-plan';
import { getSessionSaga } from './getSession.saga';
import * as API from '../../../api';
import { FakeApiCallResponse } from '../../../../test-utils/FakeApiCallResponse';
import { SaveProfile, RemoveProfile } from '../../actions';
import { Fakes } from '../../../../test-utils/Fakes';

jest.mock('../../../api');

describe('getSessionSaga', () => {
  let mockedAPI: jest.Mocked<typeof API>;

  const setGetSessionApiResponse = (profile: string) => {
    mockedAPI.GetSessionApi.mockImplementation(() =>
      FakeApiCallResponse({ data: { profile } })
    );
  };

  let profile: string;

  beforeEach(() => {
    mockedAPI = API as jest.Mocked<typeof API>;
    profile = Fakes.string();
    setGetSessionApiResponse(profile);
  });

  test('success', () => {
    testSaga(getSessionSaga)
      .next()
      .call(API.GetSessionApi)
      .next()
      .put(SaveProfile(profile))
      .next()
      .isDone();
  });

  test('failure', () => {
    testSaga(getSessionSaga)
      .next()
      .call(API.GetSessionApi)
      .throw(new Error())
      .put(RemoveProfile())
      .next()
      .isDone();
  });
});
