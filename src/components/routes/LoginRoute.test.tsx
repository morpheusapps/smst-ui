import React from 'react';
import { shallow } from 'enzyme';
import * as reactRedux from 'react-redux';
import * as selectors from '../../selectors';
import { LoginRoute } from './LoginRoute';
import { ProtectedRoute } from './ProtectedRoute';
import { RoutesPaths } from '../../const/RoutesPaths';

jest.mock('react-redux');
jest.mock('../../selectors');

describe('<LoginRoute>', () => {
  let mockedReactRedux: jest.Mocked<typeof reactRedux>;
  let mockedSelectors: jest.Mocked<typeof selectors>;

  beforeEach(() => {
    mockedReactRedux = reactRedux as jest.Mocked<typeof reactRedux>;
    mockedSelectors = selectors as jest.Mocked<typeof selectors>;

    mockedReactRedux.useSelector.mockImplementation(
      (selector: (state?: any) => any) => selector()
    );
  });

  const children = <div id="child" />;
  const failurePath = RoutesPaths.BASE;

  const setIsLogged = (mockedIsLogged: boolean) =>
    mockedSelectors.isLoggedSelector.mockImplementation(() => mockedIsLogged);

  test('logged', () => {
    setIsLogged(true);

    const wrapper = shallow(<LoginRoute>{children}</LoginRoute>);

    const protectedRoute = wrapper.find(ProtectedRoute);
    expect(protectedRoute.props()).toEqual({
      isAllowed: false,
      failurePath,
      children
    });
  });

  test('not logged', () => {
    setIsLogged(false);

    const wrapper = shallow(<LoginRoute>{children}</LoginRoute>);

    const protectedRoute = wrapper.find(ProtectedRoute);
    expect(protectedRoute.props()).toEqual({
      isAllowed: true,
      failurePath,
      children
    });
  });
});
