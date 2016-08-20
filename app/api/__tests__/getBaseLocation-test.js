// __tests__/getBaseLocation-test.js
import 'react-native';

// Note: test renderer must be required after react-native.
import renderer from 'react-test-renderer';

jest.unmock('../getBaseLocation');
import getBaseLocation from '../getBaseLocation';

describe('getBaseLocation', () => {
  const fetch = global.fetch

  it('functions correctly', async () => {
    global.fetch = jest.fn().mockImplementation(() =>
        Promise.resolve(new Response('{"results": [ {"address_components": [ {}, {}, {"long_name": "Linden"}, {}, {"long_name": "New Jersey"}, {"short_name": "US"} ] }]}')));

    const location = await getBaseLocation(10, 10);
    expect(location.city).toEqual("Linden");
    expect(location.state).toEqual("New Jersey");
    expect(location.country).toEqual("US");
  });

  it('handles errors', async () => {
    global.fetch = jest.fn().mockImplementation(() =>
        Promise.reject(new Response('{"status":500, "statusText": "Test Error!"}', {status: 500})));

    const location = await getBaseLocation(10, 10);
    expect(location.error).toEqual("API Failure");
  });

  it('handles bad data', async () => {
    global.fetch = jest.fn().mockImplementation(() =>
      Promise.resolve(new Response('{}')));

    const location = await getBaseLocation(10, 10);
    expect(location.error).toEqual("Invalid API data");
  });

  afterEach(() => {
      global.fetch = fetch;
  });
});
