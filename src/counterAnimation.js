import { gsap } from "gsap";

export function animateTemperature(airTemperature, groundTemperature) {
  // Objekt som animeras
  let airObj = { val: 0 };
  let groundObj = { val: 0 };

  // kopplar samman med ID
  let airElement = document.getElementById("air");
  let groundElement = document.getElementById("ground");

  // Animerar luften
  gsap.to(airObj, {
    val: airTemperature,
    duration: 2,
    onUpdate: function () {
      airElement.textContent = airObj.val.toFixed(2);
    },
  });

  // Animerar Marktemp
  gsap.to(groundObj, {
    val: groundTemperature,
    duration: 2,
    onUpdate: function () {
      groundElement.textContent = groundObj.val.toFixed(2) + "°C";
    },
  });
}
