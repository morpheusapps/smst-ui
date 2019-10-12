import { testSaga } from 'redux-saga-test-plan';
import { confirmLoginSaga } from './confirmLogin.saga';
import * as API from '../../../api';
import { FakeApiCallResponse } from '../../../../test-utils/FakeApiCallResponse';
import { ConfirmLogin, GetSession } from '../../actions';
import { Fakes } from '../../../../test-utils/Fakes';

jest.mock('../../../api');

describe('confirmLoginSaga', () => {
  let token: string;

  beforeEach(() => {
    token = Fakes.string();
  });

  test('success', () => {
    testSaga(confirmLoginSaga, ConfirmLogin(token))
      .next()
      .call(API.ConfirmLoginApi, token)
      .next(FakeApiCallResponse())
      .put(GetSession())
      .next()
      .isDone();
  });

  test('failure', () => {
    testSaga(confirmLoginSaga, ConfirmLogin(token))
      .next()
      .call(API.ConfirmLoginApi, token)
      .throw(new Error())
      .isDone();
  });
});
