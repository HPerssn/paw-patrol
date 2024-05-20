import axios from "axios";
import { AsphaltTemperature } from "./asphalt.js";
import { apiUrl } from "./config.js";

export function getWeather(lat, lon) {
  return axios
    .get(apiUrl, {
      params: {
        latitude: lat,
        longitude: lon,
        current: "temperature_2m",
        temperature_unit: "fahrenheit",
      },
    })
    .then((response) => {
      let airTemp = response.data.current.temperature_2m;
      let airTempCelcius = (airTemp - 32) * (5 / 9);
      let asphaltTemp = AsphaltTemperature(airTemp);
      console.log(airTempCelcius, asphaltTemp);
      return { asphaltTemp, airTempCelcius };
    })
    .catch((error) => {
      console.error("Error fetching weather data:", error);
    });
}
