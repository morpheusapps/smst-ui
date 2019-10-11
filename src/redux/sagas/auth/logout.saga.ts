import { call, put, takeLatest } from 'redux-saga/effects';
import { DestroySessionApi } from '../../../api';
import { AuthActionTypes } from '../../actionTypes';
import { RemoveProfile } from '../../actions';

function* destroySessionSaga() {
  try {
    yield call(DestroySessionApi);
    yield put(RemoveProfile());
  } catch (e) {
    // dont care
  }
}

export function* watchLogoutSaga() {
  yield takeLatest(AuthActionTypes.LOGOUT, destroySessionSaga);
}
