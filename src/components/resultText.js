import { gsap } from "gsap";
import { TextPlugin } from "gsap/TextPlugin";

gsap.registerPlugin(TextPlugin);

export function resultText(air, ground) {
  let airTempInterpretation;

  if (air > 30) {
    airTempInterpretation = "It's incredibly hot today, be cautious!";
  } else if (air > 25) {
    airTempInterpretation = "It is starting to get hot, be cautious!";
  } else if (air > 22) {
    airTempInterpretation = "The air temperature is nice and warm.";
  } else {
    airTempInterpretation = "It's nice and chill!";
  }
  let text;
  if (ground > 40) {
    text = `Ouch! The pavement is burning hot. Not safe for your dog's paws. ${airTempInterpretation}`;
  } else if (ground > 35) {
    text = `The pavement is hot. Be cautious with your dog's paws. ${airTempInterpretation}`;

  } else if (ground > 30) {
    text = `The pavement is warm but still safe for your dog's stroll. ${airTempInterpretation}`;
  } else {
    text = `The pavement is cool and comfy, perfect for your dog's walk. ${airTempInterpretation}`;
  }

  let interpretationElement = document.querySelector("#interpretation");
  gsap.to(interpretationElement, {
    duration: 3,
    text: text,
    ease: "power2.out",
  });
}
