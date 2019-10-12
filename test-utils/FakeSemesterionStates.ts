import { SemesterionStates } from '../src/redux';
import { FakeAuthState } from './FakeAuthState';

interface FakeSemesterionStatesProps {
  auth?: {
    profile?: string;
  };
}

export const FakeSemesterionStates = (
  props?: FakeSemesterionStatesProps
): SemesterionStates => ({
  auth: FakeAuthState(props && props.auth),
  ...props
});
