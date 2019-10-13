import { SemesterionStates } from '../src/redux';
import { FakeAuthState } from './FakeAuthState';

interface FakeSemesterionStatesProps {
  auth?: {
    profile?: string | null;
  };
}

export const FakeSemesterionStates = (
  props?: FakeSemesterionStatesProps
): SemesterionStates => ({
  auth: FakeAuthState(props && props.auth),
  ...props
});
