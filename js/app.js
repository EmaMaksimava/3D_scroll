// 3d-Scroll

let zSpacing = -1000,
    lastPos = zSpacing / 5,
    $frames = document.getElementsByClassName('frame'),
    frames = Array.from($frames),
    zVals = [];

window.onscroll = function() {

  let top = document.documentElement.scrollTop,
      delta = lastPos - top;

  lastPos = top;

  frames.forEach(function(n, i) {
    zVals.push( (i * zSpacing) + zSpacing);
    zVals[i] += delta * -5.5;
    let frame = frames[i],
        transform = `translateZ(${zVals[i]}px)`,
        opacity = zVals[i] < Math.abs(zSpacing) / 1.8 ? 1 : 0;
    frame.setAttribute('style', `transform: ${transform}; opacity: ${opacity}`)
  });

}

window.scrollTo(0, 1);

// Audio

let soundButton = document.querySelector('.sound_button'),
    audioContent = document.querySelector('.audio_content');

function turnAudio() {
  if(soundButton.classList.contains('paused') ) {
    audioContent.pause();
  } else {
    audioContent.play();
  }
};

soundButton.addEventListener('click', (e) => {
  soundButton.classList.toggle('paused');
  turnAudio();
})

window.onfocus = turnAudio();

window.onblur = function() {
  audioContent.pause();
}


