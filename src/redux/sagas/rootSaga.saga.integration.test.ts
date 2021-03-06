import { expectSaga } from 'redux-saga-test-plan';
import * as matchers from 'redux-saga-test-plan/matchers';
import { throwError } from 'redux-saga-test-plan/providers';
import { rootSaga } from './rootSaga.saga';
import * as API from '../../api';
import * as Actions from '../actions';
import { Fakes } from '../../../test-utils/Fakes';
import { FakeApiCallResponse } from '../../../test-utils/FakeApiCallResponse';

jest.mock('../../api');

describe('rootSaga integration tests', () => {
  let profile: string | undefined;

  beforeEach(() => {
    profile = Fakes.stringOptional();
  });

  describe('Fetch session on app load', () => {
    test('success', () =>
      expectSaga(rootSaga)
        .provide([
          [
            matchers.call.fn(API.GetSessionApi),
            FakeApiCallResponse({ data: { profile } })
          ]
        ])
        .put(Actions.SaveProfile(profile))
        .silentRun());

    test('failure', () =>
      expectSaga(rootSaga)
        .provide([
          [matchers.call.fn(API.GetSessionApi), throwError(new Error())]
        ])
        .put(Actions.ThrowGetSessionError())
        .silentRun());
  });

  describe('Confirm Login', () => {
    let token: string;

    beforeEach(() => {
      token = Fakes.string();
    });

    test('success', () =>
      expectSaga(rootSaga)
        .provide([
          [
            matchers.call.fn(API.ConfirmLoginApi),
            FakeApiCallResponse({ data: { profile } })
          ]
        ])
        .call(API.ConfirmLoginApi, token)
        .put(Actions.SaveProfile(profile))
        .dispatch(Actions.ConfirmLogin(token))
        .silentRun());

    test('failure', () =>
      expectSaga(rootSaga)
        .provide([
          [matchers.call.fn(API.ConfirmLoginApi), throwError(new Error())]
        ])
        .not.put(Actions.SaveProfile(profile))
        .put(Actions.ThrowConfirmLoginError())
        .dispatch(Actions.ConfirmLogin(token))
        .silentRun());
  });

  describe('Logout', () => {
    test('success', () =>
      expectSaga(rootSaga)
        .provide([
          [
            matchers.call.fn(API.GetSessionApi),
            FakeApiCallResponse({ data: { profile } })
          ]
        ])
        .call(API.DestroySessionApi)
        .put(Actions.RemoveProfile())
        .dispatch(Actions.Logout())
        .silentRun());

    test('failure', () =>
      expectSaga(rootSaga)
        .provide([
          [
            matchers.call.fn(API.GetSessionApi),
            FakeApiCallResponse({ data: { profile } })
          ],
          [matchers.call.fn(API.DestroySessionApi), throwError(new Error())]
        ])
        .not.put(Actions.RemoveProfile())
        .dispatch(Actions.Logout())
        .silentRun());
  });
});
