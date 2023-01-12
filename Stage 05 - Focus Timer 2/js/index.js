import {
  displayMinutes,
  displaySeconds,
  buttonCafeteria,
  buttonCafeteria2,
  buttonFireplace,
  buttonFireplace2,
  buttonForest,
  buttonForest2,
  buttonMinus,
  buttonPlay,
  buttonPlay2,
  buttonPlus,
  buttonRain,
  buttonRain2,
  buttonStop,
} from "./elements.js";
import { Timer } from "./timer.js";
import { Events } from "./events.js";
import { Sound } from "./sounds.js";
import { Controls } from "./controls.js";

const timer = Timer(displayMinutes, displaySeconds);

const controls = Controls(
  timer,
  buttonPlay,
  buttonPlay2,
  buttonForest,
  buttonForest2,
  buttonCafeteria,
  buttonCafeteria2,
  buttonFireplace,
  buttonRain,
  buttonRain2,
  buttonFireplace2
);

const sound = Sound();

const events = Events(timer, controls, sound);
