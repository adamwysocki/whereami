// __tests__/location-test.js
import 'react-native';
import React from 'react';
import Location from '../index';

// Note: test renderer must be required after react-native.
import renderer from 'react-test-renderer';

var onPress = function() {
  return 1;
}

describe('Location', () => {

  it('renders correctly', () => {
    const tree = renderer.create(
      <Location
        onPress={onPress}
        city={"New York"}
        state={"NY"}
        country={"US"}
      />
    ).toJSON();
    expect(tree).toMatchSnapshot();
  });

});
