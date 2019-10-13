import { call, put, takeLatest } from 'redux-saga/effects';
import { GetSessionApi, ApiCallResponse } from '../../../api';
import { AuthActionTypes } from '../../actionTypes';
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

export function* watchGetSessionSaga() {
  yield takeLatest(AuthActionTypes.GET_SESSION, getSessionSaga);
}
