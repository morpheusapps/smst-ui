import { Fakes } from './Fakes';
import { AuthState } from '../src/redux/reducers/auth/AuthState';
import { Sample } from './Sample';

interface FakeAuthStateProps {
  profile?: string | null;
  loginError?: string;
}

export const FakeAuthState = (props?: FakeAuthStateProps): AuthState => ({
  profile: Sample([Fakes.string(), undefined, null]),
  loginError: Fakes.stringOptional(),
  ...props
});
