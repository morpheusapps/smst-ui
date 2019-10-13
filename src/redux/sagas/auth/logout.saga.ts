import { call, put, takeLatest } from 'redux-saga/effects';
import { DestroySessionApi } from '../../../api';
import { AuthActionTypes } from '../../actionTypes';
import { RemoveProfile, ThrowLogoutError } from '../../actions';

export function* logoutSaga() {
  try {
    yield call(DestroySessionApi);

    yield put(RemoveProfile());
  } catch (e) {
    yield put(ThrowLogoutError());
  }
}

export function* watchLogoutSaga() {
  yield takeLatest(AuthActionTypes.LOGOUT, logoutSaga);
}
