const express = require("express");
const Sentry= require("@sentry/node")

require("@sentry/tracing")
const Model = require("../models/model");
const router = express.Router();
const axios = require("axios");
require("dotenv").config();
const API_KEY = process.env.API_KEY;
Sentry.init({
  dsn: "https://c1b7c10c133f45f6867d9e48b1b5279a@o1408070.ingest.sentry.io/6743473",


  tracesSampleRate: 1.0,
});
const transaction = Sentry.startTransaction({
  op: "test",
  name: "My First Test Transaction",
});
router.get("/current", async (req, res) => {
  const result = [];
  const cities =new Set(req.query.city.split(","));

  for (let city of cities) {
    console.log(city)
    let url = `http://api.weatherapi.com/v1/current.json?key=${API_KEY}&q=${city}`;
    console.log(url)

    try {
        let results = await axios.get(url);
        json = results.data;

        result.push(json);
    } catch (err) {

        console.log('ERROR IS COMING')
        console.log(err)
        Sentry.captureException(err);
    }finally{
      transaction.finish();
    }



  }


});

router.get("/forecast", async (req, res) => {

  const result = [];

  if (!req.query.city || !req.query.days) return [];
  const cities = req.query.city.split(",");
  const { days } = req.query;
  for (let i = 0; i < cities.length; i++) {
      try {let url = `http://api.weatherapi.com/v1/forecast.json?key=${API_KEY}&q=${cities[i]}&days=${days}`;
          let results = await axios.get(url);
          results = results.data;
          result.push(results);
      } catch (err) {
         console.log("data not found");
      }
  }
  res.send(result);
});
module.exports = router;
