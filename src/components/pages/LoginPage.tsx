import React from 'react';
import { SignInForm } from '../login';
import { LoginPageLayout, LoginPageContent } from './LoginPage.styled';

export const LoginPage = () => (
  <LoginPageLayout>
    <LoginPageContent>
      <SignInForm />
    </LoginPageContent>
  </LoginPageLayout>
);
