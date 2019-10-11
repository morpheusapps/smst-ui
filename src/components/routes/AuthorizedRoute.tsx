import React from 'react';
import { RouteProps } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { isLoggedSelector } from '../../redux';
import { ContainerProps } from '../types/ContainerProps';
import { ProtectedRoute } from './ProtectedRoute';
import { RoutesPaths } from '../../const/RoutesPaths';

type AuthorizedRouteProps = RouteProps & ContainerProps;

export const AuthorizedRoute = ({
  children,
  ...routeProps
}: AuthorizedRouteProps) => {
  const isLogged = useSelector(isLoggedSelector);

  return (
    <ProtectedRoute
      {...routeProps}
      isAllowed={isLogged}
      failurePath={RoutesPaths.LOGIN}
    >
      {children}
    </ProtectedRoute>
  );
};
