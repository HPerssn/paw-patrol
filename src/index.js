import config from "./config.js";

const apiKey = config.apiKey;
const apiUrl = config.apiUrl;
const axios = require("axios");

axios
  .get(apiUrl, {
    params: {
      key: apiKey,
      q: "Malmö",
    },
  })
  .then((response) => {
    // Handle success
    console.log("Weather data:", response.data);
  })
  .catch((error) => {
    // Handle error
    console.error("Error fetching weather data:", error);
  });
