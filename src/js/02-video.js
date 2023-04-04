
import Player from '@vimeo/player';
import throttle from 'lodash.throttle';

const iframe = document.querySelector('#vimeo-player');
const player = new Player(iframe);
const KEY_SEC = 'videoplayer-current-time';

const timeUpdate = function (e) {
  localStorage.setItem(KEY_SEC, JSON.stringify(e.seconds));
};

player.on('timeupdate', throttle(timeUpdate, 1000));

const savedSeconds = localStorage.getItem(KEY_SEC);

try {
  player.setCurrentTime(JSON.parse(savedSeconds) || 0);
} catch (err) {
  console.log(err);
}
