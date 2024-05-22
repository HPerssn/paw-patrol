import { gsap } from "gsap";

export function dropdown() {
  gsap.to("#weather", {
    height: "auto",
    boxShadow: "0px 0px 20px rgba(0,0,0,0.2)",
    border: "1px solid var(--main-text-color)",
    duration: 1,
    ease: "power2.inOut",
    onComplete: function () {
      document.getElementById("weather").style.height = "auto";
    },
  });
}
