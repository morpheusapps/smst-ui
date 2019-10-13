import { testSaga } from 'redux-saga-test-plan';
import { confirmLoginSaga } from './confirmLogin.saga';
import * as API from '../../../api';
import { FakeApiCallResponse } from '../../../../test-utils/FakeApiCallResponse';
import {
  ConfirmLogin,
  ThrowConfirmLoginError,
  SaveProfile
} from '../../actions';
import { Fakes } from '../../../../test-utils/Fakes';

jest.mock('../../../api');

describe('confirmLoginSaga', () => {
  let token: string;

  beforeEach(() => {
    token = Fakes.string();
  });

  test('success', () => {
    const profile = Fakes.string();

    testSaga(confirmLoginSaga, ConfirmLogin(token))
      .next()
      .call(API.ConfirmLoginApi, token)
      .next(FakeApiCallResponse({ data: { profile } }))
      .put(SaveProfile(profile))
      .next()
      .isDone();
  });

  test('failure', () => {
    testSaga(confirmLoginSaga, ConfirmLogin(token))
      .next()
      .call(API.ConfirmLoginApi, token)
      .throw(new Error())
      .put(ThrowConfirmLoginError())
      .next()
      .isDone();
  });
});
