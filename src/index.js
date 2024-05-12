import { getLocation } from "./location.js";
import { getWeather } from "./weather.js";

import { animateTemperature } from "./counterAnimation.js";

document.getElementById("getWeather").addEventListener("click", function () {
  getLocation().then((position) => {
    getWeather(position.latitude, position.longitude)
      .then((temperatures) => {
        const airTempCelsius = (temperatures.airTemp - 32) * (5 / 9);
        document.getElementById("air").innerHTML =
          airTempCelsius.toFixed(2) + "°C";
        document.getElementById("ground").innerHTML =
          temperatures.asphaltTemp.toFixed(2) + "°C";

        animateTemperature(airTempCelsius, temperatures.asphaltTemp);
      })
      .catch((error) => {
        console.error("Error getting weather data:", error);
      });
  });
});
