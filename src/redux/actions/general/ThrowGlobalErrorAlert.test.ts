import { ThrowGlobalErrorAlert } from './ThrowGlobalErrorAlert';
import { GlobalActionTypes } from '../../actionTypes';
import { Fakes } from '../../../../test-utils/Fakes';

test('ThrowGetSessionError', () => {
  const errorMessage = Fakes.string();
  const throwGetSessionErrorAction = ThrowGlobalErrorAlert(errorMessage);

  expect(throwGetSessionErrorAction).toEqual({
    type: GlobalActionTypes.THROW_GLOBAL_ERROR_ALERT,
    payload: { errorMessage }
  });
});
