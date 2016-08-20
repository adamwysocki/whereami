// __tests__/whereami-test.js
import 'react-native';
import React from 'react';
import whereami from '../index';

// Note: test renderer must be required after react-native.
import renderer from 'react-test-renderer';

describe('whereami', () => {

  it('renders correctly initially', () => {
    const tree = renderer.create(
      <whereami />
    ).toJSON();
    expect(tree).toMatchSnapshot();
  });

});
