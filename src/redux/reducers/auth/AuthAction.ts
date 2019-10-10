import { SaveProfileAction } from '../../actions/auth/SaveProfile';
import { RemoveProfileAction } from '../../actions/auth/RemoveProfile';

export type AuthAction = SaveProfileAction | RemoveProfileAction;
