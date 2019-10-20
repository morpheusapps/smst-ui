import { Action } from 'redux';
import { LanguageActionTypes } from '../../actionTypes';
import { Language } from '../../../const/Language';

export interface ChangeLanguageAction extends Action<LanguageActionTypes> {
  type: LanguageActionTypes.CHANGE_LANGUAGE;
  payload: { language: Language };
}

export const ChangeLanguage = (language: Language): ChangeLanguageAction => ({
  type: LanguageActionTypes.CHANGE_LANGUAGE,
  payload: { language }
});
