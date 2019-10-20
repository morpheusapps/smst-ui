import { LanguageState } from '../../src/redux/reducers/language/LanguageState';
import { Fakes } from '../Fakes';

export const FakeLanguageState = (
  props?: Partial<LanguageState>
): LanguageState => ({
  language: Fakes.language(),
  ...props
});
