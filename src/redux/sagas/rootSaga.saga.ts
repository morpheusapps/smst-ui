import { all, fork } from 'redux-saga/effects';
import {
  watchConfirmLoginSaga,
  watchGetSessionSaga,
  watchLogoutSaga
} from './auth';

import { launchSaga } from './launchSaga.saga';

const sagas = [
  watchConfirmLoginSaga,
  watchGetSessionSaga,
  watchLogoutSaga,
  launchSaga
];

export function* rootSaga() {
  yield all(sagas.map(saga => fork(saga)));
}
