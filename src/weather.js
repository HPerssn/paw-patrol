import axios from "axios";
import { AsphaltTemperature } from "./asphalt.js";
import { apiUrl } from "./config.js";

export function getWeather(lat, lon) {
  return axios
    .get(apiUrl, {
      params: {
        latitude: lat,
        longitude: lon,
        current: "temperature_2m,wind_speed_10m",
        temperature_unit: "fahrenheit",
        wind_speed_unit: "mph",
      },
    })
    .then((response) => {
      console.log("Weather data:", response.data);
      let airTemp = response.data.current.temperature_2m;
      let windspeed = response.data.current.wind_speed_10m;
      let asphaltTemp = AsphaltTemperature(airTemp, windspeed, 0.2);
      console.log(airTemp, windspeed, asphaltTemp);
      return { asphaltTemp, airTemp };
    })
    .catch((error) => {
      console.error("Error fetching weather data:", error);
    });
}
