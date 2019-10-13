import { testSaga } from 'redux-saga-test-plan';
import { logoutSaga } from './logout.saga';
import * as API from '../../../api';
import { FakeApiCallResponse } from '../../../../test-utils/FakeApiCallResponse';
import { RemoveProfile, ThrowGlobalError } from '../../actions';
import { UserErrors } from '../../../const/UserErrors';

describe('logoutSaga', () => {
  test('success', () => {
    testSaga(logoutSaga)
      .next()
      .call(API.DestroySessionApi)
      .next(FakeApiCallResponse())
      .put(RemoveProfile())
      .next()
      .isDone();
  });

  test('failure', () => {
    testSaga(logoutSaga)
      .next()
      .call(API.DestroySessionApi)
      .throw(new Error())
      .put(ThrowGlobalError(UserErrors.AUTH.LOGOUT_ERROR))
      .next()
      .isDone();
  });
});
