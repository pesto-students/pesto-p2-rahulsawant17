const express = require("express");
const Model = require("../models/model");
const router = express.Router();
const axios = require("axios");
require("dotenv").config();
const API_KEY = process.env.API_KEY;
router.get("/current", async (req, res) => {
  const result = [];
  const cities =new Set(req.query.city.split(","));

  for (let city of cities) {
    let url = `http://api.weatherapi.com/v1/current.json?key=${API_KEY}&q=${city}`;


    try {
        let results = await axios.get(url);
        json = results.data;

        result.push(json);
    } catch (err) {

        console.log("data not found")
    }



  }
  const page = !req.query.page ? 1 : parseInt(req.query.page);
  const limit = !req.query.limit ? 1 : parseInt(req.query.limit);
  const start = (page - 1) * limit;
  const end = page * limit;

  const resultp = result.slice(start, end);
  res.send(resultp);
  // res.send(result)

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
