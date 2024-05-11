import { getLocation } from "./location.js";
import { getWeather } from "./weather.js";

document.getElementById("getWeather").addEventListener("click", function () {
  getLocation().then((position) => {
    getWeather(position.latitude, position.longitude)
      .then((asphaltTemp) => {
        document.getElementById("weather").innerHTML =
          asphaltTemp.toFixed(2) + "°C";
      })
      .catch((error) => {
        console.error("Error getting weather data:", error);
      });
  });
});
