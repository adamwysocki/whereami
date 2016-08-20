'use strict';

export default function getBaseLocation(latitude, longitude) {

  return new Promise(resolve => {
    var city = '', state = '', country = '';
    var url = `https://maps.googleapis.com/maps/api/geocode/json?latlng=
    ${latitude},${longitude}&sensor=false`;

    fetch(url)
    .then((response) => response.json())
    .then((responseJson) => {
      if(responseJson.results != null) {
        //console.log('responseJson',JSON.stringify(responseJson.results[0], null, 2));
        city = getCity(responseJson);
        state = getState(responseJson);
        country = getCountry(responseJson);
        resolve({city: city, state: state, country: country});
      } else {
        //console.log('invalid data');
        resolve({"error": "Invalid API data"});
      }
    })
    .catch((error) => {
      //console.error(error);
      resolve({"error": "API Failure"});
    });
  });

}

function getCity(responseJson) {
  return responseJson.results[0].address_components[2].long_name;
}

function getState(responseJson) {
  return responseJson.results[0].address_components[4].long_name;
}

function getCountry(responseJson) {
  return responseJson.results[0].address_components[5].short_name;
}
