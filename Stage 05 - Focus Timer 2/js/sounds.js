export function Sound() {
  const forestSound = new Audio("https://drive.google.com/file/d/1CRHkV72WUMdcqec5GT_KdsqFz0z3VAOA/view");
  const rainSound = new Audio("https://drive.google.com/file/d/1Ip8xBqAUJ-bty51Wz8JBtX_bWXCgA0P2/view");
  const cafeteriaSound = new Audio("https://drive.google.com/file/d/1OxLKpCwg2wrxXFNUHgZxJ51QEt0ac5RA/view");
  const fireplaceSound = new Audio("https://drive.google.com/file/d/1MakaBPxJvTa_whaSM3kEbRcxiVd1GRCB/view");

  function soundForest() {
    stopSound();
    forestSound.loop = true;
    forestSound.play();
  }

  function soundRain() {
    stopSound();
    rainSound.loop = true;
    rainSound.play();
  }

  function soundCafeteria() {
    stopSound();
    cafeteriaSound.loop = true;
    cafeteriaSound.play();
  }

  function soundFireplace() {
    stopSound();
    fireplaceSound.loop = true;
    fireplaceSound.play();
  }

  function stopSound() {
    forestSound.pause();
    rainSound.pause();
    fireplaceSound.pause();
    cafeteriaSound.pause();
  }

  return {
    soundForest,
    soundRain,
    soundCafeteria,
    soundFireplace,
    stopSound,
  };
}
