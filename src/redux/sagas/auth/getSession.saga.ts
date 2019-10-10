import { call, put, takeLatest } from 'redux-saga/effects';
import { AxiosResponse } from 'axios';
import { GetSessionApi } from '../../../api';
import { AuthActionTypes } from '../../actionTypes';
import { SaveProfileAction } from '../../actions/auth/SaveProfile';

export function* getSessionSaga() {
  const { status, data }: AxiosResponse<{ profile: string }> = yield call(
    GetSessionApi
  );
  if (status === 200) {
    yield put(SaveProfileAction(data.profile));
  }
}

export function* watchGetSessionSaga() {
  yield takeLatest(AuthActionTypes.GET_SESSION, getSessionSaga);
}