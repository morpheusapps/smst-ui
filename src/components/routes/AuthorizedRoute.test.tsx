import React from 'react';
import { shallow } from 'enzyme';
import * as reactRedux from 'react-redux';
import * as selectors from '../../selectors';
import { AuthorizedRoute } from './AuthorizedRoute';
import { ProtectedRoute } from './ProtectedRoute';
import { RoutesPaths } from '../../const/RoutesPaths';

jest.mock('react-redux');
jest.mock('../../selectors');

describe('<AuthorizedRoute>', () => {
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
  const failurePath = RoutesPaths.LOGIN;

  const setIsLogged = (mockedIsLogged: boolean) =>
    mockedSelectors.isLoggedSelector.mockImplementation(() => mockedIsLogged);

  const setIsProfileFetched = (mockedIsProfileFetched: boolean) =>
    mockedSelectors.isProfileFetchedSelector.mockImplementation(
      () => mockedIsProfileFetched
    );

  test('logged', () => {
    setIsLogged(true);
    setIsProfileFetched(true);

    const wrapper = shallow(<AuthorizedRoute>{children}</AuthorizedRoute>);

    const protectedRoute = wrapper.find(ProtectedRoute);
    expect(protectedRoute.props()).toEqual({
      isAllowed: true,
      failurePath,
      children
    });
  });

  test('not logged and profile fetched', () => {
    setIsLogged(false);
    setIsProfileFetched(true);

    const wrapper = shallow(<AuthorizedRoute>{children}</AuthorizedRoute>);

    const protectedRoute = wrapper.find(ProtectedRoute);
    expect(protectedRoute.props()).toEqual({
      isAllowed: false,
      failurePath,
      children
    });
  });

  test('not logged and profile not fetched', () => {
    setIsLogged(false);
    setIsProfileFetched(false);

    const wrapper = shallow(<AuthorizedRoute>{children}</AuthorizedRoute>);

    const protectedRoute = wrapper.find(ProtectedRoute);
    expect(protectedRoute.props()).toEqual({
      isAllowed: true,
      failurePath,
      children
    });
  });
});
