import { gsap } from "gsap";

export function dropdown() {
  gsap.to("#weather", {
    height: "auto",
    duration: 1,
    ease: "power2.inOut",
    onComplete: function () {
      document.getElementById("weather").style.height = "auto";
    },
  });
}
