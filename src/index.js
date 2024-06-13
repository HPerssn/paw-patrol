import "./styles/styles2.css";
import { getLocation } from "./components/location.js";
document.getElementById("getWeather").addEventListener("click", function () {
  import("./components/animateButton.js").then(({ AnimateButton }) => {
    AnimateButton();
  });

  getLocation().then((position) => {
    import("./components/dropdown.js").then(({ dropdown }) => {
      dropdown();
    });

    import("./components/weather.js")
      .then(({ getWeather }) =>
        getWeather(position.latitude, position.longitude)
      )
      .then((temperatures) => {
        let asphaltTemp = temperatures.asphaltTemp;
        if (position.hours < 11 || position.hours > 15) {
          asphaltTemp -= 5; // minskar temp vid morgon och kväll
        }
        Promise.all([
          import("./components/counterAnimation.js"),
          import("./components/resultText.js"),
        ]).then(([{ animateTemperature }, { resultText }]) => {
          animateTemperature(temperatures.airTempCelcius, asphaltTemp);
          resultText(temperatures.airTempCelcius, asphaltTemp);
        });
      })
      .catch((error) => {
        console.error("Error getting weather data:", error);
      });
  });
});
