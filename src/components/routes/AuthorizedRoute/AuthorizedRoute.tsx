import React from 'react';
import { RouteProps } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { ProtectedRoute } from 'morpheusapps-common-ui';
import { isLoggedSelector, isProfileFetchedSelector } from '../../../selectors';
import { ContainerProps } from '../../types/ContainerProps';
import { RoutesPaths } from '../../../const/RoutesPaths';

export type AuthorizedRouteProps = RouteProps & ContainerProps;

export const AuthorizedRoute = ({
  children,
  ...routeProps
}: AuthorizedRouteProps) => {
  const isLogged = useSelector(isLoggedSelector);
  const isProfileFetched = useSelector(isProfileFetchedSelector);

  return (
    <ProtectedRoute
      {...routeProps}
      isAllowed={isLogged || !isProfileFetched}
      failurePath={RoutesPaths.LOGIN}
    >
      {children}
    </ProtectedRoute>
  );
};
