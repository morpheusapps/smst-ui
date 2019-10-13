import { all, fork } from 'redux-saga/effects';
import { watchConfirmLoginSaga, watchLogoutSaga } from './auth';

import { launchSaga } from './launchSaga.saga';

const sagas = [watchConfirmLoginSaga, watchLogoutSaga, launchSaga];

export function* rootSaga() {
  yield all(sagas.map(saga => fork(saga)));
}
