import React from 'react';
import { useLocation, Route } from 'react-router-dom';
import { AuthorizedRoute } from './AuthorizedRoute';
import { RoutesPaths } from '../../../const/RoutesPaths';
import { testRender } from '../../../../test-utils/testRender';
import { FakeSemesterionStates } from '../../../../test-utils/FakeState/FakeSemesterionStates';
import { FakeAuthState } from '../../../../test-utils/FakeState/FakeAuthState';
import { Fakes } from '../../../../test-utils/Fakes';

const TestRoutes = ({ route }: { route: string }) => (
  <>
    <AuthorizedRoute exact path={route}>
      <LocationDisplay />
    </AuthorizedRoute>
    <Route exact path={RoutesPaths.LOGIN}>
      <LocationDisplay />
    </Route>
  </>
);

const LocationDisplay = () => <div>{useLocation().pathname}</div>;

describe('<AuthorizedRoute>', () => {
  let route: string;

  beforeEach(() => {
    route = Fakes.route();
  });

  test('logged', () => {
    const initialState = FakeSemesterionStates({
      auth: FakeAuthState({ profile: Fakes.string() })
    });

    const { getByText } = testRender(<TestRoutes route={route} />, {
      route,
      initialState
    });

    expect(getByText(route)).toBeDefined();
  });

  test('not logged and profile fetched', () => {
    const initialState = FakeSemesterionStates({
      auth: FakeAuthState({ profile: undefined })
    });

    const { getByText } = testRender(<TestRoutes route={route} />, {
      route,
      initialState
    });

    expect(getByText(RoutesPaths.LOGIN)).toBeDefined();
  });

  test('not logged and profile not fetched', () => {
    const initialState = FakeSemesterionStates({
      auth: FakeAuthState({ profile: null })
    });

    const { getByText } = testRender(<TestRoutes route={route} />, {
      route,
      initialState
    });

    expect(getByText(route)).toBeDefined();
  });
});
