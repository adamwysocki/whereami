// __tests__/button-test.js
import 'react-native';
import React from 'react';
import Button from '../index';

// Note: test renderer must be required after react-native.
import renderer from 'react-test-renderer';

var onPress = function() {
  return 1;
}

describe('Button', () => {

  it('renders correctly', () => {
    const tree = renderer.create(
      <Button onPress={onPress}>PRESS</Button>
    ).toJSON();
    expect(tree).toMatchSnapshot();
  });

});
