import { getLocation } from "./location.js";
import { getWeather } from "./weather.js";

document.getElementById("getWeather").addEventListener("click", function () {
  getLocation().then((position) => {
    getWeather(position.latitude, position.longitude)
      .then((temperatures) => {
        document.getElementById("air").innerHTML =
          temperatures.airTemp.toFixed(2) + "°C";
        document.getElementById("ground").innerHTML =
          temperatures.asphaltTemp.toFixed(2) + "°C";
      })
      .catch((error) => {
        console.error("Error getting weather data:", error);
      });
  });
});
