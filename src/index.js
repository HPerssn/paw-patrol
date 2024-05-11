const config = require("./config.js");
const apiUrl = config.apiUrl;
const apiKey = config.apiKey;
const axios = require("axios");
function calculateAsphaltTemperature(airTemp, windspeed, constant) {
  return airTemp + constant * Math.sqrt(windspeed);
}

axios
  .get(apiUrl, {
    params: {
      key: apiKey,
      q: "Malmö",
    },
  })
  .then((response) => {
    // Handle success
    const airTemp = response.data.current.temp_f;
    const windspeed = response.data.current.wind_mph;
    const asphaltTemp =
      (calculateAsphaltTemperature(airTemp, windspeed, 0.2) - 32) / 1.8;
    console.log("Weather data:", airTemp, "fahrenheit", windspeed, "mph");
    console.log("Asphalt temperature:", asphaltTemp.toFixed(2), "celsius");
  })
  .catch((error) => {
    // Handle error
    console.error("Error fetching weather data:", error);
  });
