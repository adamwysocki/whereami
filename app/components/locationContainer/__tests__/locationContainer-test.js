// __tests__/locationContainer-test.js
import 'react-native';
import React from 'react';
import LocationContainer from '../index';

// Note: test renderer must be required after react-native.
import renderer from 'react-test-renderer';

var onPress = function() {
  return;
}

describe('locationContainer', () => {
  const fetch = global.fetch

  beforeEach(() => {
    global.fetch = jest.fn().mockImplementation(() =>
        Promise.resolve(new Response('{"results": [ {"address_components": [ {}, {}, {"long_name": "Linden"}, {}, {"long_name": "New Jersey"}, {"short_name": "US"} ] }]}')));
  });

  it('renders correctly', () => {
    const tree = renderer.create(
      <LocationContainer
        onPress={onPress}
        latitude={31}
        longitude={-58}
      />
    ).toJSON();
    expect(tree).toMatchSnapshot();
  });

  afterEach(() => {
      global.fetch = fetch;
  });
});
