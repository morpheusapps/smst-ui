import { call, put, takeLatest } from 'redux-saga/effects';
import { DestroySessionApi } from '../../../api';
import { AuthActionTypes } from '../../actionTypes';
import { RemoveProfile } from '../../actions';

export function* logoutSaga() {
  try {
    yield call(DestroySessionApi);
  } catch (e) {
    // dont care
  } finally {
    yield put(RemoveProfile());
  }
}

export function* watchLogoutSaga() {
  yield takeLatest(AuthActionTypes.LOGOUT, logoutSaga);
}
