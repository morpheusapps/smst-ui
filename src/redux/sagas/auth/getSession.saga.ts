import { call, put, takeLatest } from 'redux-saga/effects';
import { GetSessionApi, ApiCallResponse } from '../../../api';
import { AuthActionTypes } from '../../actionTypes';
import { SaveProfile, ThrowGlobalError } from '../../actions';
import { UserErrorMessages } from '../../../const/UserErrorMessages';

export function* getSessionSaga() {
  try {
    const {
      data: { profile }
    }: ApiCallResponse<{ profile?: string }> = yield call(GetSessionApi);

    yield put(SaveProfile(profile));
  } catch (e) {
    yield put(ThrowGlobalError(UserErrorMessages.AUTH.GET_SESSION_ERROR));
  }
}

export function* watchGetSessionSaga() {
  yield takeLatest(AuthActionTypes.GET_SESSION, getSessionSaga);
}
