import React from 'react';
import { shallow } from 'enzyme';
import * as reactRedux from 'react-redux';
import { LoginRoute } from './LoginRoute';
import { ProtectedRoute } from './ProtectedRoute';
import { RoutesPaths } from '../../const/RoutesPaths';

jest.mock('react-redux');

describe('<LoginRoute>', () => {
  let mockedReactRedux: jest.Mocked<typeof reactRedux>;

  beforeEach(() => {
    mockedReactRedux = reactRedux as jest.Mocked<typeof reactRedux>;
  });

  const children = <div id="child" />;
  const failurePath = RoutesPaths.BASE;

  const setIsLogged = (mockedIsLogged: boolean) =>
    mockedReactRedux.useSelector.mockImplementation(() => mockedIsLogged);

  test('logged', () => {
    const isLogged = true;
    setIsLogged(isLogged);

    const wrapper = shallow(<LoginRoute>{children}</LoginRoute>);

    const protectedRoute = wrapper.find(ProtectedRoute);
    expect(protectedRoute.props()).toEqual({
      isAllowed: !isLogged,
      failurePath,
      children
    });
  });

  test('not logged', () => {
    const isLogged = false;
    setIsLogged(isLogged);

    const wrapper = shallow(<LoginRoute>{children}</LoginRoute>);

    const protectedRoute = wrapper.find(ProtectedRoute);
    expect(protectedRoute.props()).toEqual({
      isAllowed: !isLogged,
      failurePath,
      children
    });
  });
});
