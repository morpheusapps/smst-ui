import { call, put, takeLatest } from 'redux-saga/effects';
import { ConfirmLoginApi } from '../../../api';
import { AuthActionTypes } from '../../actionTypes';
import {
  GetSession,
  ConfirmLoginAction,
  ConfirmLoginFailed
} from '../../actions';

export function* confirmLoginSaga(action: ConfirmLoginAction) {
  try {
    yield call(ConfirmLoginApi, action.payload.token);

    yield put(GetSession());
  } catch (e) {
    yield put(ConfirmLoginFailed());
  }
}

export function* watchConfirmLoginSaga() {
  yield takeLatest(AuthActionTypes.CONFIRM_LOGIN, confirmLoginSaga);
}
