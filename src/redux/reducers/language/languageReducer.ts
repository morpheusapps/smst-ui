import { Reducer } from 'redux';
import { LanguageState } from './LanguageState';
import { LanguageActionTypes } from '../../actionTypes';
import { LanguageAction } from './LanguageAction';

const defaultState: LanguageState = {
  language: 'english'
};

export const languageReducer: Reducer<LanguageState, LanguageAction> = (
  state = defaultState,
  action: LanguageAction
): LanguageState => {
  switch (action.type) {
    case LanguageActionTypes.CHANGE_LANGUAGE: {
      return { ...state, language: action.payload.language };
    }
    default:
      return state;
  }
};
