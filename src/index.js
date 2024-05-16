import { getLocation } from "./location.js";
import { getWeather } from "./weather.js";

import { animateTemperature } from "./counterAnimation.js";

document.getElementById("getWeather").addEventListener("click", function () {
  getLocation().then((position) => {
    getWeather(position.latitude, position.longitude)
      .then((temperatures) => {
        animateTemperature(
          temperatures.airTempCelcius,
          temperatures.asphaltTemp
        );
      })
      .catch((error) => {
        console.error("Error getting weather data:", error);
      });
  });
});
