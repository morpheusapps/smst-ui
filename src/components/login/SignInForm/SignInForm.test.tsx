import React from 'react';
import { SignInForm } from './SignInForm';
import { TextPerLanguage } from './SignInForm.text';
import { testRender } from '../../../../test-utils/testRender';
import { FakeSemesterionStates } from '../../../../test-utils/FakeState/FakeSemesterionStates';
import { FakeAuthState } from '../../../../test-utils/FakeState/FakeAuthState';
import { Fakes } from '../../../../test-utils/Fakes';
import { FakeLanguageState } from '../../../../test-utils/FakeState/FakeLanguageState';

describe('<SignInForm>', () => {
  test('google login button exist', () => {
    const { getByTestId } = testRender(<SignInForm />, {
      initialState: FakeSemesterionStates()
    });

    expect(getByTestId('google-login-button')).toBeDefined();
  });

  describe('error', () => {
    test('no error has been found', () => {
      const initialState = FakeSemesterionStates({
        auth: FakeAuthState({ loginError: undefined })
      });

      const { queryByTestId, getByTestId } = testRender(<SignInForm />, {
        initialState
      });

      expect(queryByTestId('sign-in-error')).toBeNull();
      expect(getByTestId('google-login-button')).toBeDefined();
    });

    test('previous login failed', () => {
      const loginError = Fakes.string();
      const initialState = FakeSemesterionStates({
        auth: FakeAuthState({ loginError })
      });

      const { getByTestId, getByText } = testRender(<SignInForm />, {
        initialState
      });

      expect(getByText(loginError)).toBeDefined();
      expect(getByTestId('google-login-button')).toBeDefined();
    });
  });

  describe('header text by language', () => {
    test('english', () => {
      const initialState = FakeSemesterionStates({
        language: FakeLanguageState({ language: 'english' })
      });

      const { getByText } = testRender(<SignInForm />, {
        initialState
      });

      expect(getByText(TextPerLanguage.english)).toBeDefined();
    });

    test('hebrew', () => {
      const initialState = FakeSemesterionStates({
        language: FakeLanguageState({ language: 'hebrew' })
      });

      const { getByText } = testRender(<SignInForm />, {
        initialState
      });

      expect(getByText(TextPerLanguage.hebrew)).toBeDefined();
    });
  });
});
