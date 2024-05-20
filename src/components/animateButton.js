import gsap from "gsap";
export function AnimateButton() {
  let button = document.getElementById("getWeather");

  button.addEventListener("mouseover", function () {
    gsap.to(button, {
      scaleX: 0.9,
      scaleY: 1.1,
      boxShadow: "10px 10px 20px rgba(0,0,0,0.2)",
      border: "1px solid black",
      duration: 0.5,
      ease: "power2.out",
    });
  });

  button.addEventListener("mouseout", function () {
    gsap.to(button, {
      scaleX: 1,
      scaleY: 1,
      boxShadow: "0px 0px 0px rgba(0,0,0,0)",
      border: "none",
      duration: 0.5,
      ease: "power2.out",
    });
  });

  button.addEventListener("mousedown", function () {
    gsap.to(button, {
      scaleX: 0.9,
      scaleY: 1.1,
      boxShadow: "10px 10px 20px rgba(0,0,0,0.2)",
      border: "1px solid black",
      duration: 0.5,
      ease: "power2.out",
    });
  });

  button.addEventListener("mouseup", function () {
    gsap.to(button, {
      scaleX: 1,
      scaleY: 1,
      boxShadow: "0px 0px 0px rgba(0,0,0,0)",
      border: "none",
      duration: 0.5,
      ease: "power2.out",
    });
  });
}