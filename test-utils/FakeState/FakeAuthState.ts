import { AuthState } from '../../src/redux/reducers/auth/AuthState';
import { Fakes } from '../Fakes';
import { Sample } from '../Sample';

export interface FakeAuthStateProps {
  profile?: string | null;
  loginError?: string;
}

export const FakeAuthState = (props?: FakeAuthStateProps): AuthState => ({
  profile: Sample([Fakes.string(), undefined, null]),
  loginError: Fakes.stringOptional(),
  ...props
});
