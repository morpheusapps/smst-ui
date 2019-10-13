import { call, put, takeLatest } from 'redux-saga/effects';
import { DestroySessionApi } from '../../../api';
import { AuthActionTypes } from '../../actionTypes';
import { RemoveProfile, ThrowGlobalError } from '../../actions';
import { UserErrors } from '../../../const/UserErrors';

export function* logoutSaga() {
  try {
    yield call(DestroySessionApi);

    yield put(RemoveProfile());
  } catch (e) {
    yield put(ThrowGlobalError(UserErrors.AUTH.LOGOUT_ERROR));
  }
}

export function* watchLogoutSaga() {
  yield takeLatest(AuthActionTypes.LOGOUT, logoutSaga);
}
