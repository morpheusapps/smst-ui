import React from 'react';
import { SignInErorLayout } from './SignInForm.styled';

export interface SignInErrorProps {
  error: string;
}
export const SignInError = ({ error }: SignInErrorProps) => (
  <SignInErorLayout data-testid="sign-in-error">{error}</SignInErorLayout>
);
