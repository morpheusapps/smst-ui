import React from 'react';
import { Redirect, Route, RouteProps } from 'react-router-dom';
import { ContainerProps } from '../types/ContainerProps';

type ProtectedRouteProps = RouteProps &
  ContainerProps & {
    isAuthorized: boolean;
    unAuthorizedRedirectPath: string;
  };

export const ProtectedRoute = ({
  isAuthorized,
  unAuthorizedRedirectPath,
  children,
  ...routeProps
}: ProtectedRouteProps) => (
  <>
    {isAuthorized ? (
      <Route {...routeProps}>{children}</Route>
    ) : (
      <Redirect to={unAuthorizedRedirectPath} />
    )}
  </>
);
