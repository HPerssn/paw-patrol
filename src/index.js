import { getLocation } from "./components/location.js";
import { getWeather } from "./components/weather.js";
import { animateTemperature } from "./components/counterAnimation.js";
import { dropdown } from "./components/dropdown.js";
import { AnimateButton } from "./components/animateButton.js";

AnimateButton();

document.getElementById("getWeather").addEventListener("click", function () {
  getLocation().then((position) => {
    dropdown();
    getWeather(position.latitude, position.longitude)
      .then((temperatures) => {
        let asphaltTemp = temperatures.asphaltTemp;
        if (position.hours < 11 || position.hours > 15) {
          asphaltTemp -= 5; // minskar temp vid morgon och kväll
        }

        animateTemperature(temperatures.airTempCelcius, asphaltTemp);
      })
      .catch((error) => {
        console.error("Error getting weather data:", error);
      });
  });
});
