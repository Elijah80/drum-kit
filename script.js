const keys = document.querySelector('.keys');
const dataKeys = [65, 83, 68, 70, 71, 72, 74, 75, 76];
const soundNames = ['clap', 'hihat', 'kick', 'openhat', 'boom', 'ride', 'snare', 'tom', 'tink'];

dataKeys.forEach((key) => {
  const div = document.createElement('div');
  const kbd = document.createElement('kbd');
  const span = document.createElement('span');

  div.classList.add('key');
  div.setAttribute('data-key', key);

  kbd.textContent = String.fromCharCode(key);

  span.classList.add('sound');

  switch(key){
    case 65:
      span.textContent = 'clap';
      break;
    case 83:
      span.textContent = 'hihat';
      break;
    case 68:
      span.textContent = 'kick';
      break;
    case 70:
      span.textContent = 'openhat';
      break;
    case 71:
      span.textContent = 'boom';
      break;
    case 72:
      span.textContent = 'ride';
      break;
    case 74:
      span.textContent = 'snare';
      break;
    case 75:
      span.textContent = 'tom';
      break;
    case 76:
      span.textContent = 'tink';
      break;
    default:
      span.textContent = '';
      break;
  }

  div.appendChild(kbd);
  div.appendChild(span);

  keys.appendChild(div);
})
