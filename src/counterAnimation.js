import { gsap } from "gsap";

export function animateTemperature(airTemperature, groundTemperature) {
  // Objects to be tweened
  let airObj = { val: 0 };
  let groundObj = { val: 0 };

  // Elements to display the values
  let airElement = document.getElementById("air");
  let groundElement = document.getElementById("ground");

  // Animate air temperature
  gsap.to(airObj, {
    val: airTemperature,
    duration: 2,
    onUpdate: function () {
      airElement.textContent = airObj.val.toFixed(2);
    },
  });

  // Animate ground temperature
  gsap.to(groundObj, {
    val: groundTemperature,
    duration: 2,
    onUpdate: function () {
      groundElement.textContent = groundObj.val.toFixed(2) + "°C";
    },
  });
}
