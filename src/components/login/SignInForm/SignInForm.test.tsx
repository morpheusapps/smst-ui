import React from 'react';
import { SignInForm } from './SignInForm';
import { renderWithRedux } from '../../../../test-utils/renderWithRedux';
import { FakeSemesterionStates } from '../../../../test-utils/FakeState/FakeSemesterionStates';
import { FakeAuthState } from '../../../../test-utils/FakeState/FakeAuthState';
import { Fakes } from '../../../../test-utils/Fakes';

describe('<SignInForm>', () => {
  test('no error has been found', () => {
    const initialState = FakeSemesterionStates({
      auth: FakeAuthState({ loginError: undefined })
    });

    const { queryByTestId, getByTestId } = renderWithRedux(<SignInForm />, {
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

    const { getByTestId, getByText } = renderWithRedux(<SignInForm />, {
      initialState
    });

    expect(getByText(loginError)).toBeDefined();
    expect(getByTestId('google-login-button')).toBeDefined();
  });
});
