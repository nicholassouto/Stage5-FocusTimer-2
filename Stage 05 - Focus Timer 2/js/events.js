import {
  buttonCafeteria,
  buttonFireplace,
  buttonForest,
  buttonMinus,
  buttonPlay,
  buttonPlus,
  buttonRain,
  buttonStop,
} from "./elements.js";

export function Events(timer, controls, sound) {
  buttonPlay.addEventListener("click", function () {
    controls.Play();
    timer.Countdown();
  });

  buttonStop.addEventListener("click", function () {
    controls.Stop();
    sound.stopSound();
  });

  buttonPlus.addEventListener("click", function () {
    timer.Plus();
  });

  buttonMinus.addEventListener("click", function () {
    timer.Minus();
  });

  buttonForest.addEventListener("click", function () {
    controls.Forest();
    sound.soundForest();
  });

  buttonRain.addEventListener("click", function () {
    controls.Rain();
    sound.soundRain();
  });

  buttonCafeteria.addEventListener("click", function () {
    controls.Cafeteria();
    sound.soundCafeteria();
  });

  buttonFireplace.addEventListener("click", function () {
    controls.Fireplace();
    sound.soundFireplace();
  });
}
