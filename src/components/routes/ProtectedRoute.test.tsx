import React from 'react';
import { shallow } from 'enzyme';
import { Route, Redirect } from 'react-router-dom';
import { ProtectedRoute } from './ProtectedRoute';
import { Fakes } from '../../../test-utils/Fakes';

jest.mock('react-redux');

describe('<ProtectedRoute>', () => {
  const children = <div id="child" />;
  test('allowed', () => {
    const isAllowed = true;
    const failurePath = Fakes.string();

    const wrapper = shallow(
      <ProtectedRoute isAllowed={isAllowed} failurePath={failurePath}>
        {children}
      </ProtectedRoute>
    );

    const route = wrapper.find(Route);
    expect(route).toHaveLength(1);
    expect(route.props()).toEqual({ children });
  });

  test('not allowed', () => {
    const isAllowed = false;
    const failurePath = Fakes.string();

    const wrapper = shallow(
      <ProtectedRoute isAllowed={isAllowed} failurePath={failurePath}>
        {children}
      </ProtectedRoute>
    );

    const redirect = wrapper.find(Redirect);

    expect(redirect).toHaveLength(1);
    expect(redirect.props()).toEqual({ to: failurePath });
  });
});
