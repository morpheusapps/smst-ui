import { testSaga } from 'redux-saga-test-plan';
import { destroySessionSaga } from './logout.saga';
import * as API from '../../../api';
import { FakeApiCallResponse } from '../../../../test-utils/FakeApiCallResponse';
import { RemoveProfile } from '../../actions';

describe('destroySessionSaga', () => {
  test('success', () => {
    testSaga(destroySessionSaga)
      .next()
      .call(API.DestroySessionApi)
      .next(FakeApiCallResponse())
      .put(RemoveProfile())
      .next()
      .isDone();
  });

  test('failure', () => {
    testSaga(destroySessionSaga)
      .next()
      .call(API.DestroySessionApi)
      .throw(new Error())
      .put(RemoveProfile())
      .next()
      .isDone();
  });
});
