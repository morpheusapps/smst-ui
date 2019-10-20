import { ChangeLanguage } from './ChangeLanguage';
import { LanguageActionTypes } from '../../actionTypes';
import { Fakes } from '../../../../test-utils/Fakes';

test('ChangeLanguage', () => {
  const language = Fakes.language();
  const changeLanguageAction = ChangeLanguage(language);

  expect(changeLanguageAction).toEqual({
    type: LanguageActionTypes.CHANGE_LANGUAGE,
    payload: { language }
  });
});
