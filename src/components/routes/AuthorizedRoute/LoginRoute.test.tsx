import React from 'react';
import { useLocation, Route } from 'react-router-dom';
import { LoginRoute } from '../LoginRoute/LoginRoute';
import { RoutesPaths } from '../../../const/RoutesPaths';
import { renderWithReduxAndRouter } from '../../../../test-utils/renderWithReduxAndRouter';
import { Fakes } from '../../../../test-utils/Fakes';
import { FakeSemesterionStates } from '../../../../test-utils/FakeState/FakeSemesterionStates';
import { FakeAuthState } from '../../../../test-utils/FakeState/FakeAuthState';

const TestRoutes = ({ route }: { route: string }) => (
  <>
    <LoginRoute exact path={route}>
      <LocationDisplay />
    </LoginRoute>
    <Route exact path={RoutesPaths.BASE}>
      <LocationDisplay />
    </Route>
  </>
);

const LocationDisplay = () => <div>{useLocation().pathname}</div>;

describe('<LoginRoute>', () => {
  let route: string;

  beforeEach(() => {
    route = Fakes.route();
  });

  test('not logged', () => {
    const initialState = FakeSemesterionStates({
      auth: FakeAuthState({ profile: undefined })
    });

    const { getByText } = renderWithReduxAndRouter(
      <TestRoutes route={route} />,
      { route, initialState }
    );

    expect(getByText(route)).toBeDefined();
  });

  test('logged', () => {
    const initialState = FakeSemesterionStates({
      auth: FakeAuthState({ profile: Fakes.string() })
    });

    const { getByText } = renderWithReduxAndRouter(
      <TestRoutes route={route} />,
      { route, initialState }
    );

    expect(getByText(RoutesPaths.BASE)).toBeDefined();
  });
});
