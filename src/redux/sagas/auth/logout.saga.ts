import { call, put, takeLatest } from 'redux-saga/effects';
import { DestroySessionApi } from '../../../api';
import { AuthActionTypes } from '../../actionTypes';
import { RemoveProfileAction } from '../../actions/auth/RemoveProfile';

function* destroySessionSaga() {
  try {
    yield call(DestroySessionApi);
    yield put(RemoveProfileAction());
  } catch (e) {
    // dont care
  }
}

export function* watchLogoutSaga() {
  yield takeLatest(AuthActionTypes.LOGOUT, destroySessionSaga);
}
