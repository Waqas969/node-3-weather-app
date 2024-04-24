const { response } = require("express");

console.log("client side javscript loaded");

const url = fetch("https://puzzle.mead.io/puzzle").then((response) => {
  response.json().then((data) => {
    console.log(data);
  });
});
console.log(url);
// const url2 = fetch(`http://localhost:3000/weather?address=boston`).then(
//   (response) => {
//     response.json().then((data) => {
//       if (data.error) {
//         console.log(data.error);
//       } else {
//         console.log(data.location);
//         console.log(data.forecast);
//       }
//     });
//   }
// );

// console.log(url2);
