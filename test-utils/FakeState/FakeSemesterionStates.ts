import { SemesterionStates } from '../../src/redux';
import { FakeAuthState, FakeAuthStateProps } from './FakeAuthState';
import { FakeAlertStateProps, FakeAlertState } from './FakeAlertState';

interface FakeSemesterionStatesProps {
  auth?: FakeAuthStateProps;
  alert?: FakeAlertStateProps;
}

export const FakeSemesterionStates = (
  props?: FakeSemesterionStatesProps
): SemesterionStates => ({
  auth: FakeAuthState(props && props.auth),
  alert: FakeAlertState(props && props.alert),
  ...props
});
