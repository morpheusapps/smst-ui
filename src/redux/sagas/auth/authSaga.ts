/* eslint-disable @typescript-eslint/explicit-function-return-type */
import { all, call, put, takeLatest } from 'redux-saga/effects';
import { AxiosResponse } from 'axios';
import { ConfirmLoginApi, GetSessionApi } from '../../../api';
import { AuthActionTypes } from '../../actionTypes';
import {
  ConfirmLoginAction,
  GetSessionAction,
  SaveProfileAction
} from '../../actions/auth/index';

function* getSession() {
  const { status, data }: AxiosResponse<{ profile: string }> = yield call(
    GetSessionApi
  );
  if (status === 200) {
    yield put(SaveProfileAction(data.profile));
  }
}

function* watchGetSession() {
  yield takeLatest(AuthActionTypes.GET_SESSION, getSession);
}

function* confirmLogin(action: ConfirmLoginAction) {
  const { status }: AxiosResponse = yield call(
    ConfirmLoginApi,
    action.payload.token
  );
  if (status === 200) {
    yield put(GetSessionAction);
  }
}

function* watchConfirmLogin() {
  yield takeLatest(AuthActionTypes.CONFIRM_LOGIN, confirmLogin);
}

export function* authSaga() {
  yield getSession();
  yield all([watchConfirmLogin(), watchGetSession()]);
}
