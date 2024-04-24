const request = require("postman-request");

// const geocode = (address, callback) => {
//   const url = `https://api.mapbox.com/geocoding/v5/mapbox.places/${address}.json?access_token=pk.eyJ1IjoiYW5kcmV3bWVhZDEiLCJhIjoiY2pvOG8ybW90MDFhazNxcnJ4OTYydzJlOSJ9.njY7HvaalLEVhEOIghPTlw&limit=1`;

//   request({ url: url, json: true }, (error, response) => {
//     if (error) {
//       callback("unable to connect to location services!", undefined);
//     } else if (response.body.features.length === 0) {
//       callback("unable to find to location Try another location", undefined);
//     } else {
//       callback(undefined, { latitude: response.body.features[0].center[1] });
//       callback(undefined, { longitude: response.body.features[0].center[0] });
//       callback(undefined, { longitude: response.body.features[0].place_name });
//     }
//   });
// };
// module.exports = {
//   geocode: geocode,
// };
// const url =
//   "https://api.mapbox.com/geocoding/v5/mapbox.places/" +
//   address +
//   ".json?access_token=pk.eyJ1IjoiYW5kcmV3bWVhZDEiLCJhIjoiY2pvOG8ybW90MDFhazNxcnJ4OTYydzJlOSJ9.njY7HvaalLEVhEOIghPTlw&limit=1";
//////////////////
const KEY = "e35f3f9e04fc406ae9c736baf27b73ff";
const geocode = (address, callback) => {
  const url = `https://api.openweathermap.org/data/2.5/weather?q=${address}&appid=${KEY}`;
  request({ url, json: true }, (error, { body }) => {
    if (error) {
      callback("Unable to connect to location services!", undefined);
      // } else if (body.coords.length == 0) {
      //   callback("Unable to find location. Try another search.", undefined);
    } else {
      callback(undefined, {
        latitude: body.lat,
        longitude: body.lon,
        location: body.timezone,
      });
    }
  });
};

module.exports = geocode;
