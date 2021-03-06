import React from 'react';
import { RouteProps } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { ProtectedRoute } from 'morpheusapps-common-ui';
import { isLoggedSelector } from '../../../selectors';
import { ContainerProps } from '../../types/ContainerProps';
import { RoutesPaths } from '../../../const/RoutesPaths';

type LoginRouteProps = RouteProps & ContainerProps;

export const LoginRoute = ({ children, ...routeProps }: LoginRouteProps) => {
  const isLogged = useSelector(isLoggedSelector);

  return (
    <ProtectedRoute
      {...routeProps}
      isAllowed={!isLogged}
      failurePath={RoutesPaths.BASE}
    >
      {children}
    </ProtectedRoute>
  );
};
