import { AlertState } from '../../src/redux/reducers/alert/AlertState';
import { Fakes } from '../Fakes';

export const FakeAlertState = (props?: Partial<AlertState>): AlertState => ({
  message: Fakes.stringOptional(),
  ...props
});
