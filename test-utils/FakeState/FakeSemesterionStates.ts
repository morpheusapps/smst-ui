import { SemesterionStates } from '../../src/redux';
import { FakeAuthState } from './FakeAuthState';
import { FakeAlertState } from './FakeAlertState';
import { FakeLanguageState } from './FakeLanguageState';

export const FakeSemesterionStates = (
  props?: Partial<SemesterionStates>
): SemesterionStates => ({
  auth: FakeAuthState(props && props.auth),
  alert: FakeAlertState(props && props.alert),
  language: FakeLanguageState(props && props.language),
  ...props
});
