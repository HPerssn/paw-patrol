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
      if (airObj.val > 27) {
        gsap.to(airElement, {
          backgroundColor: "red",

          duration: 0.5,
          ease: "elastic.in",
        });
      } else if (airObj.val > 20) {
        gsap.to(airElement, {
          backgroundColor: "yellow",

          duration: 0.5,
          ease: "elastic.in",
        });
      }
    },
  });

  // Animerar Marktemp
  gsap.to(groundObj, {
    val: groundTemperature,
    duration: 2,
    onUpdate: function () {
      groundElement.textContent = groundObj.val.toFixed(2) + "°C";
      if (groundObj.val > 40) {
        gsap.to(groundElement, {
          backgroundColor: "red",
          duration: 0.5,
          ease: "elastic.in",
        });
      } else if (groundObj.val > 30) {
        gsap.to(groundElement, {
          backgroundColor: "yellow",
          duration: 0.5,
          ease: "elastic.in",
        });
      } else {
        gsap.to(groundElement, {
          backgroundColor: "green",
          duration: 0.5,
          ease: "elastic.in",
        });
      }
    },
  });
}
