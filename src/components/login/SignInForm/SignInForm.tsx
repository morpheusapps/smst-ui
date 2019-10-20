import React from 'react';
import { useSelector } from 'react-redux';
import {
  SignInFormLayout,
  SignInHeader,
  StyledGoogleAuthButton
} from './SignInForm.styled';
import { SignInError } from './SignInError';
import { TextPerLanguage } from './SignInForm.text';
import {
  confirmLoginErrorSelector,
  languageSelector
} from '../../../selectors';
import { LanguageProps } from '../../types/LanguageProps';

export type SignInFormProps = LanguageProps;

export const SignInForm = () => {
  const confirmLoginError = useSelector(confirmLoginErrorSelector);
  const language = useSelector(languageSelector);

  return (
    <div>
      <SignInFormLayout>
        <SignInHeader>{TextPerLanguage[language]}</SignInHeader>
        <div>
          <StyledGoogleAuthButton
            url={`${process.env.REACT_APP_BACKEND_AUTH}/api/auth/google`}
            language={language}
          />
        </div>
      </SignInFormLayout>
      {confirmLoginError && <SignInError error={confirmLoginError} />}
    </div>
  );
};
