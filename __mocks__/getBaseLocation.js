//__mocks__/getBaseLocation.js
export default function request(latitude, longitude) {
  return new Promise((resolve, reject) => {
    process.nextTick(
      resolve({city: 'Linden', state: 'New Jersey', country: 'US'});
    );
  });
}
