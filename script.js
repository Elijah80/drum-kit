const keys = document.querySelector('.keys');
const body = document.body;
const dataKeys = [65, 83, 68, 70, 71, 72, 74, 75, 76];

dataKeys.forEach((key) => {
  const div = document.createElement('div');
  const img = document.createElement('img');
  const kbd = document.createElement('kbd');
  const span = document.createElement('span');
  const audio = document.createElement('audio');

  div.classList.add('key');
  div.setAttribute('data-key', key);

  img.classList.add('instrument');

  kbd.textContent = String.fromCharCode(key);

  span.classList.add('sound');

  audio.setAttribute('data-key', key);

  switch(key){
    case 65:
      span.textContent = 'clap';
      img.setAttribute('src', './images/instruments/clap_drum.png');
      audio.setAttribute('src', './sounds/clap.wav');
      break;
    case 83:
      span.textContent = 'hihat';
      img.setAttribute('src', './images/instruments/hihat_drum.png');
      audio.setAttribute('src', './sounds/hihat.wav');
      break;
    case 68:
      span.textContent = 'kick';
      img.setAttribute('src', './images/instruments/kick_drum.png');
      audio.setAttribute('src', './sounds/kick.wav');
      break;
    case 70:
      span.textContent = 'openhat';
      img.setAttribute('src', './images/instruments/openhat_drum.png');
      audio.setAttribute('src', './sounds/openhat.wav');
      break;
    case 71:
      span.textContent = 'boom';
      img.setAttribute('src', './images/instruments/boom_drum.png');
      audio.setAttribute('src', './sounds/boom.wav');
      break;
    case 72:
      span.textContent = 'ride';
      img.setAttribute('src', './images/instruments/ride_drum.png');
      audio.setAttribute('src', './sounds/ride.wav');
      break;
    case 74:
      span.textContent = 'snare';
      img.setAttribute('src', './images/instruments/snare_drum.png');
      audio.setAttribute('src', './sounds/snare.wav');
      break;
    case 75:
      span.textContent = 'tom';
      img.setAttribute('src', './images/instruments/tom_drum.png');
      audio.setAttribute('src', './sounds/tom.wav');
      break;
    case 76:
      span.textContent = 'tink';
      img.setAttribute('src', './images/instruments/tink_drum.png');
      audio.setAttribute('src', './sounds/tink.wav');
      break;
    default:
      span.textContent = '';
      break;
  }

  div.appendChild(img);
  div.appendChild(kbd);
  div.appendChild(span);

  keys.appendChild(div);

  body.appendChild(audio);
})

