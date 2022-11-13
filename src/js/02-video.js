import Player from '@vimeo/player';
import throttle from 'lodash.throttle';

const player = new Player('vimeo-player');
// console.log(player);
// записуем значение плэера в локалсторэдж
function localStorageWrite(data) {
  localStorage.setItem('videoplayer-current-time', data.seconds);
  //   console.log(data.seconds);
  //   console.log(data);
}
// добавляем сротл
player.on('timeupdate', throttle(localStorageWrite, 1000));
// сохраняет текущие время в (localStorage)
player.setCurrentTime(localStorageRecord());
// сохраняем значение видео
function localStorageRecord() {
  let savedValue = Number(localStorage.getItem('videoplayer-current-time'));
  console.log(savedValue);
  return savedValue;
}
