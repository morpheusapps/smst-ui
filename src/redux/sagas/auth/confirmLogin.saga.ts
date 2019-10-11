import { call, put, takeLatest } from 'redux-saga/effects';
import { AxiosResponse } from 'axios';
import { ConfirmLoginApi } from '../../../api';
import { AuthActionTypes } from '../../actionTypes';
import { GetSession, ConfirmLoginAction } from '../../actions';

function* confirmLoginSaga(action: ConfirmLoginAction) {
  const { status }: AxiosResponse = yield call(
    ConfirmLoginApi,
    action.payload.token
  );
  if (status === 200) {
    yield put(GetSession());
  }
}

export function* watchConfirmLoginSaga() {
  yield takeLatest(AuthActionTypes.CONFIRM_LOGIN, confirmLoginSaga);
}
