import { getSessionSaga } from './auth';

export function* launchSaga() {
  yield getSessionSaga();
}
