import { Fakes } from './Fakes';
import { AuthState } from '../src/redux/reducers/auth/AuthState';

interface FakeAuthStateProps {
  profile?: string;
}

export const FakeAuthState = (props?: FakeAuthStateProps): AuthState => ({
  profile: Fakes.stringOptional(),
  ...props
});