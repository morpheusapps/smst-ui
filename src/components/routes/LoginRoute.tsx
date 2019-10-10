import React from 'react';
import { RouteProps } from 'react-router-dom';
import { connect } from 'react-redux';
import { ContainerProps } from '../types/ContainerProps';
import { ProtectedRoute } from './ProtectedRoute';
import { SemesterionStates } from '../../redux/reducers';
import { RoutesPaths } from '../../const/RoutesPaths';

interface PropsFromStore {
  isLogged: boolean;
}

type LoginRouteProps = RouteProps & ContainerProps & PropsFromStore;

export const LoginRoute = ({
  isLogged,
  children,
  ...routeProps
}: LoginRouteProps) => (
  <ProtectedRoute
    {...routeProps}
    isAuthorized={!isLogged}
    unAuthorizedRedirectPath={RoutesPaths.BASE}
  >
    {children}
  </ProtectedRoute>
);

const mapStateToProps = ({ auth }: SemesterionStates): PropsFromStore => ({
  isLogged: Boolean(auth.profile)
});

export const ConnectedLoginRoute = connect(mapStateToProps)(LoginRoute);
