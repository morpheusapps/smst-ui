import React from 'react';
import { ConfirmLoginForm } from '../../login/ConfirmLoginForm';
import { ConfirmationPageLayout } from './ConfirmationPage.styled';

export const ConfirmationPage = () => (
  <ConfirmationPageLayout>
    <ConfirmLoginForm />
  </ConfirmationPageLayout>
);
