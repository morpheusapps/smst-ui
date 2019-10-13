import { testSaga } from 'redux-saga-test-plan';
import { getSessionSaga } from './getSession.saga';
import * as API from '../../../api';
import { FakeApiCallResponse } from '../../../../test-utils/FakeApiCallResponse';
import { SaveProfile, ThrowGetSessionError } from '../../actions';
import { Fakes } from '../../../../test-utils/Fakes';

describe('getSessionSaga', () => {
  let profile: string | undefined;

  beforeEach(() => {
    profile = Fakes.stringOptional();
  });

  test('success', () => {
    testSaga(getSessionSaga)
      .next()
      .call(API.GetSessionApi)
      .next(FakeApiCallResponse({ data: { profile } }))
      .put(SaveProfile(profile))
      .next()
      .isDone();
  });

  test('failure', () => {
    testSaga(getSessionSaga)
      .next()
      .call(API.GetSessionApi)
      .throw(new Error())
      .put(ThrowGetSessionError())
      .next()
      .isDone();
  });
});
