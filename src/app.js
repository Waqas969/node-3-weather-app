const forecast = require("./utils/forecast");
const geocode = require("./utils/geoode");
const path = require("path");
const express = require("express");
const hbs = require("hbs");
const app = express();
// define path to express config
const publicDirectoryPath = path.join(__dirname, "../public");
const viewsPath = path.join(__dirname, "../templates/views");
const partialsPath = path.join(__dirname, "../templates/partials");
// setup handlebars engine and views location
app.set("view engine", "hbs");
app.set("views", viewsPath);
hbs.registerPartials(partialsPath);
// setup static directory tro serve
app.use(express.static(publicDirectoryPath));

app.get("", (req, res) => {
  res.render("index", {
    title: "Weather App",
    name: "Waqas",
  });
});

app.get("/about", (req, res) => {
  res.render("about", {
    title: "About me",
    name: "Waqas",
  });
});
app.get("/help", (req, res) => {
  res.render("help", {
    name: "Andrew Mead",
    title: "Help....",
  });
});
app.get("/weather", (req, res) => {
  if (!req.query.address) {
    return res.send({
      error: "You must provide a address term",
    });
  }

  geocode(req.query.address, (error, { latitude, longitude } = {}) => {
    if (error) {
      res.send({ error });
    }
    forecast(latitude, longitude, (error, forecastData) => {
      if (error) {
        res.send({ error });
      }
      res.send({
        forecast: forecastData,
        location,
        address: req.query.address,
      });
    });
  });

  console.log(req.query);
  ////////////////////////////////start
  // geocode(
  //   req.query.address,
  //   (error, { latitude = 0, longitude = 0, location = 0 } = {}) => {
  //     if (error) {
  //       return res.send({
  //         error,
  //       });
  //     }
  //     forecast(latitude, longitude, (error, forecastData = 0) => {
  //       if (error) {
  //         return res.send({ error });
  //       }
  //       res.send({
  //         forecast: forecastData,
  //         location,
  //         address: req.query.address,
  //       });
  //     });
  //   }
  // );
  ////////////////////////////end
  // res.send({
  //   forecast: "It is snowing",
  //   location: "Philadelphia",
  //   address: req.query.address,
  // });
});

app.get("/product", (req, res) => {
  if (!req.query.search) {
    return res.send({
      Error: "You must provide a search term",
    });
  }
  console.log(req.query.search);
  res.send({
    product: [],
  });
});
app.get("/help/*", (req, res) => {
  // res.send("Help Articles Not Found please visit Help");
  res.render("404", {
    title: "404",
    name: "Waqas",
    errorMessage: "Hel Atricles Not Found Please visit help...",
  });
});

app.get("*", (req, res) => {
  // res.send("My 404 page");
  res.render("404", {
    title: "404",
    name: "Waqas",
    errorMessage: "Page not found",
  });
});
app.listen(3000, () => {
  console.log("server is up on 3000");
});
