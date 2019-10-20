import { languageSelector } from './languageSelector';
import { FakeSemesterionStates } from '../../../test-utils/FakeState/FakeSemesterionStates';
import { FakeLanguageState } from '../../../test-utils/FakeState/FakeLanguageState';
import { Fakes } from '../../../test-utils/Fakes';

describe('languageSelector', () => {
  test('fetch language', () => {
    const expectedLanguage = Fakes.language();
    const state = FakeSemesterionStates({
      language: FakeLanguageState({ language: expectedLanguage })
    });

    const language = languageSelector(state);

    expect(language).toBe(expectedLanguage);
  });
});
