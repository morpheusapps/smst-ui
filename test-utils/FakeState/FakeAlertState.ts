import { AlertState } from '../../src/redux/reducers/alert/AlertState';
import { Fakes } from '../Fakes';

export interface FakeAlertStateProps {
  message?: string;
  loginError?: string;
}

export const FakeAlertState = (props?: FakeAlertStateProps): AlertState => ({
  message: Fakes.stringOptional(),
  ...props
});
