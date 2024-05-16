import { gsap } from "gsap";

export function loader() {
  const spin = gsap.to("#loading-image", {
    rotation: 360,
    repeat: -1,
    duration: 0.5,
    ease: "linear",
  });

  window.addEventListener("load", () => {
    spin.pause();
    gsap.to("#loader", { autoAlpha: 0, duration: 1 });
  });
}
