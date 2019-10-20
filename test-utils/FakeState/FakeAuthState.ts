import { AuthState } from '../../src/redux/reducers/auth/AuthState';
import { Fakes } from '../Fakes';
import { Sample } from '../Sample';

export const FakeAuthState = (props?: Partial<AuthState>): AuthState => ({
  profile: Sample([Fakes.string(), undefined, null]),
  loginError: Fakes.stringOptional(),
  ...props
});
