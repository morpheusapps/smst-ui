import React from 'react';
import { useSelector } from 'react-redux';
import {
  SignInFormLayout,
  SignInHeader,
  StyledGoogleAuthButton
} from './SignInForm.styled';
import { SignInError } from './SignInError';
import { confirmLoginErrorSelector } from '../../../selectors';

export const SignInForm = () => {
  const confirmLoginError = useSelector(confirmLoginErrorSelector);

  return (
    <div>
      <SignInFormLayout>
        <SignInHeader>Sign In To Semesterion</SignInHeader>
        <div>
          <StyledGoogleAuthButton
            url={`${process.env.REACT_APP_BACKEND_AUTH}/api/auth/google`}
          />
        </div>
      </SignInFormLayout>
      {confirmLoginError && <SignInError error={confirmLoginError} />}
    </div>
  );
};
