// weather.js
import axios from "axios";
import { AsphaltTemperature } from "./asphalt.js";
import { apiKey, apiUrl } from "./config.js";

export function getWeather(lat, lon) {
  return axios
    .get(apiUrl, {
      params: {
        key: apiKey,
        q: `${lat},${lon}`,
      },
    })
    .then((response) => {
      const airTemp = response.data.current.temp_f;
      const windspeed = response.data.current.wind_mph;
      const asphaltTemp = AsphaltTemperature(airTemp, windspeed, 0.2);
      return { asphaltTemp, airTemp: (airTemp - 32) / 1.8 };
    })
    .catch((error) => {
      console.error("Error fetching weather data:", error);
    });
}
