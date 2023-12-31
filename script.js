const keys = document.querySelector('.keys');
const dataKeys = ['a', 's', 'd', 'f', 'g', 'h', 'j', 'k', 'l'];

/** Used to create the instrument cards and append the created elements to their parent elements **/
function createKeyElement(key) {
  const div = document.createElement('div');
  const img = document.createElement('img');
  const kbd = document.createElement('kbd');
  const span = document.createElement('span');
  const audio = document.createElement('audio');

  div.classList.add('key');
  div.setAttribute('data-key', key.charCodeAt(0));

  img.classList.add('instrument');

  kbd.textContent = key.toUpperCase();

  span.classList.add('sound');

  audio.setAttribute('data-key', key.charCodeAt(0));

  switch(key){
    case 'a':
      img.setAttribute('src', './images/instruments/clap_drum.png');
      span.textContent = 'clap';
      audio.setAttribute('src', './sounds/clap.wav');
      break;
    case 's':
      img.setAttribute('src', './images/instruments/hihat_drum.png');
      span.textContent = 'hihat';
      audio.setAttribute('src', './sounds/hihat.wav');
      break;
    case 'd':
      img.setAttribute('src', './images/instruments/kick_drum.png');
      span.textContent = 'kick';
      audio.setAttribute('src', './sounds/kick.wav');
      break;
    case 'f':
      img.setAttribute('src', './images/instruments/openhat_drum.png');
      span.textContent = 'openhat';
      audio.setAttribute('src', './sounds/openhat.wav');
      break;
    case 'g':
      img.setAttribute('src', './images/instruments/boom_drum.png');
      span.textContent = 'boom';
      audio.setAttribute('src', './sounds/boom.wav');
      break;
    case 'h':
      img.setAttribute('src', './images/instruments/ride_drum.png');
      span.textContent = 'ride';
      audio.setAttribute('src', './sounds/ride.wav');
      break;
    case 'j':
      img.setAttribute('src', './images/instruments/snare_drum.png');
      span.textContent = 'snare';
      audio.setAttribute('src', './sounds/snare.wav');
      break;
    case 'k':
      img.setAttribute('src', './images/instruments/tom_drum.png');
      span.textContent = 'tom';
      audio.setAttribute('src', './sounds/tom.wav');
      break;
    case 'l':
      img.setAttribute('src', './images/instruments/tink_drum.png');
      span.textContent = 'tink';
      audio.setAttribute('src', './sounds/tink.wav');
      break;
    default:
      span.textContent = '';
      break;
  }

  div.appendChild(img);
  div.appendChild(kbd);
  div.appendChild(span);
  div.addEventListener('mousedown', function(){
    playDrums(String.fromCharCode((div.getAttribute('data-key'))));
  });
  div.addEventListener('mouseup', function(){
    removePlayingClass();
  });

  keys.appendChild(div);

  document.body.appendChild(audio);
}

/** Loop through dataKeys to create a card for each instrument **/
dataKeys.forEach((key) => {
  createKeyElement(key);
})

/** function to select the corresponding instrument **/
function playDrums(dataKey) {
  const instruments = document.querySelectorAll('.key');
  const sounds  = document.querySelectorAll('audio');

  instruments.forEach((instrument) => {
    const instrumentDataKey = String.fromCharCode(instrument.getAttribute('data-key'));

    if (dataKey === instrumentDataKey){
      instrument.classList.toggle('playing');

      sounds.forEach((sound) => {
        if (instrumentDataKey === String.fromCharCode(sound.getAttribute('data-key'))) {
          sound.currentTime = 0;
          sound.play();
        }
      })
    }
  })
}


function removePlayingClass() {
  const playing = document.querySelector('.playing');
  playing.classList.remove('playing');
}


/** Event Listeners **/
document.addEventListener('keydown', (event) => {
  playDrums(event.key);
})

document.addEventListener('keyup', (event) => {
  removePlayingClass();
})