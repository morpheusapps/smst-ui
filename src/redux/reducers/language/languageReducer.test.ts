import { languageReducer } from './languageReducer';
import { FakeLanguageState } from '../../../../test-utils/FakeState/FakeLanguageState';
import { ChangeLanguage } from '../../actions';
import { Fakes } from '../../../../test-utils/Fakes';

describe('authReducer', () => {
  test('CHANGE_LANGUAGE', () => {
    const language = Fakes.language();
    const initialState = FakeLanguageState();

    const action = ChangeLanguage(language);

    const state = languageReducer(initialState, action);

    expect(state).toEqual({ ...initialState, language });
  });
});
