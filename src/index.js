import { getLocation } from "./location.js";
import { getWeather } from "./weather.js";
import { animateTemperature } from "./counterAnimation.js";
import { loader } from "./loader.js";

document.getElementById("getWeather").addEventListener("click", function () {
  getLocation().then((position) => {
    getWeather(position.latitude, position.longitude)
      .then((temperatures) => {
        let asphaltTemp = temperatures.asphaltTemp;
        if (position.hours < 7 || position.hours > 18) {
          asphaltTemp -= 5; // minskar temp vid morgon och kväll
        }
        animateTemperature(temperatures.airTempCelcius, asphaltTemp);
      })
      .catch((error) => {
        console.error("Error getting weather data:", error);
      });
  });
});

window.onload = loader();
