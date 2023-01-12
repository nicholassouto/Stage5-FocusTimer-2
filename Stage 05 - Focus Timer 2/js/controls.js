export function Controls(
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
) {
  function Play() {
    buttonPlay.classList.add("hide");
    buttonPlay2.classList.remove("hide");
  }

  function Stop() {
    timer.Reset();
    resetPlay();
  }

  function Forest() {
    resetAll();
    buttonForest.classList.add("hide");
    buttonForest2.classList.remove("hide");
  }

  function Rain() {
    resetAll();
    buttonRain.classList.add("hide");
    buttonRain2.classList.remove("hide");
  }

  function Cafeteria() {
    resetAll();
    buttonCafeteria.classList.add("hide");
    buttonCafeteria2.classList.remove("hide");
  }

  function Fireplace() {
    resetAll();
    buttonFireplace.classList.add("hide");
    buttonFireplace2.classList.remove("hide");
  }

  function resetPlay() {
    buttonPlay.classList.remove("hide");
    buttonPlay2.classList.add("hide");
    resetAll();
  }

  function resetAll() {
    buttonForest.classList.remove("hide");
    buttonForest2.classList.add("hide");
    buttonRain.classList.remove("hide");
    buttonRain2.classList.add("hide");
    buttonCafeteria.classList.remove("hide");
    buttonCafeteria2.classList.add("hide");
    buttonFireplace.classList.remove("hide");
    buttonFireplace2.classList.add("hide");
  }

  return {
    Play,
    Stop,
    resetAll,
    Forest,
    Rain,
    Fireplace,
    Cafeteria,
  };
}
