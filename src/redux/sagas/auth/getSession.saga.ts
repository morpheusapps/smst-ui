import { call, put } from 'redux-saga/effects';
import { GetSessionApi, ApiCallResponse } from '../../../api';
import { SaveProfile, ThrowGetSessionError } from '../../actions';

export function* getSessionSaga() {
  try {
    const {
      data: { profile }
    }: ApiCallResponse<{ profile?: string }> = yield call(GetSessionApi);

    yield put(SaveProfile(profile));
  } catch (e) {
    yield put(ThrowGetSessionError());
  }
}
