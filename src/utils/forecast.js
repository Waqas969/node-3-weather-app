// const request = require("postman-request");

// const forecast = (latitude, longitude, callback) => {
//   const url = `http://api.weatherstack.com/current?access_key=e84129bc20b99e3b1452c36379b4e3ff&query=${latitude},${longitude}&units=f`;

//   request({ url: url, Json: true }, (error, response) => {
//     if (error) {
//       callback("Unable to connect weather-app ", undefined);
//     } else if (response.body.error) {
//       callback("unable to find location", undefined);
//     } else {
//       const current = response.body.current;
//       const weather = response.body.current.weather_descriptions;
//       callback(
//         undefined,
//         `${weather[0]} It is currently ${current.temperature} degress out.Its feels like ${current.feelslike}degress out`
//       );
//     }
//   });
// };

// module.exports = forecast;
// const url = `http://api.weatherstack.com/current?access_key=${oldkey}&query=${latitude},${longitude}&units=f`;
const oldkey = "e84129bc20b99e3b1452c36379b4e3ff";

// //////////////////////////
const KEY = "e35f3f9e04fc406ae9c736baf27b73ff";
const request = require("postman-request");
const forecast = (latitude, longitude, callback) => {
  const url = `https://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&appid=${KEY}`;
  request({ url, json: true }, (error, { body }) => {
    if (error) {
      callback("Unable to connect to the internet", undefined);
    } else if (error) {
      callback("Unable to find the location", undefined);
    } else {
      const message = `${body.weather[0].description} It is currently ${body.current.temp} fernite out. It is feels like ${body.current.feels_like} out`;
      callback(undefined, message);
    }
  });
};

module.exports = forecast;
