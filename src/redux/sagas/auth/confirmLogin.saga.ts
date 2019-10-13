import { call, put, takeLatest } from 'redux-saga/effects';
import { ConfirmLoginApi, ApiCallResponse } from '../../../api';
import { AuthActionTypes } from '../../actionTypes';
import {
  ConfirmLoginAction,
  ThrowConfirmLoginError,
  SaveProfile
} from '../../actions';

export function* confirmLoginSaga(action: ConfirmLoginAction) {
  try {
    const {
      data: { profile }
    }: ApiCallResponse<{ profile: string }> = yield call(
      ConfirmLoginApi,
      action.payload.token
    );

    yield put(SaveProfile(profile));
  } catch (e) {
    yield put(ThrowConfirmLoginError());
  }
}

export function* watchConfirmLoginSaga() {
  yield takeLatest(AuthActionTypes.CONFIRM_LOGIN, confirmLoginSaga);
}
