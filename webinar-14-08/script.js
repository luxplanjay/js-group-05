/**
 * 1. При нажатии на старт запускать таймер
 * 2. при нажатии на стоп останавливать таймер
 * 3. нужен обект для хранения полей и методов таймера
 * 4. метод start, stop и поле timerId
 * 5. xx:xx.x
 */

/*
  1. делаем паузу прямо сейчас на занятии полностью
  2. показываю подсказку визуальную без кода и обьясняю как делается сейчас
  3. делаете сами и если не получится даю записаное видео где полностью пишется таймер
 */

const startBtn = document.querySelector('button[data-action="start"]');
const stopBtn = document.querySelector('button[data-action="stop"]');
const clockface = document.querySelector('.clockface');

const timer = {
  id: null,
  startTime: null,
  deltaTime: 0,
  isActive: false,
  start() {
    if (this.isActive) return;

    this.isActive = true;
    this.startTime = Date.now();

    this.id = setInterval(() => {
      const currentTime = Date.now();
      this.deltaTime = currentTime - this.startTime;

      updateClockface(this.deltaTime);
    }, 100);
  },
  stop() {
    clearInterval(this.id);
    this.isActive = false;
  },
  reset() {
    this.stop();
    this.deltaTime = 0;
    updateClockface(this.deltaTime);
  },
};

startBtn.addEventListener('click', handleStartBtnClick);
stopBtn.addEventListener('click', handleStopBtnClick);

function handleStartBtnClick() {
  if (!timer.isActive) {
    timer.start();
    this.textContent = 'Pause';
  } else {
    timer.stop();
    this.textContent = 'Continue';
  }
}

function handleStopBtnClick() {
  timer.reset();
  startBtn.textContent = 'Start';
}

function updateClockface(time) {
  const formattedTime = formatTime(time);
  clockface.textContent = formattedTime;
}

function formatTime(ms) {
  const date = new Date(ms);

  let minutes = date.getMinutes();
  minutes = minutes < 10 ? `0${minutes}` : minutes;

  let seconds = date.getSeconds();
  seconds = seconds < 10 ? `0${seconds}` : seconds;

  const mseconds = String(date.getMilliseconds()).slice(0, 1);

  return `${minutes}:${seconds}.${mseconds}`;
}

new Modal({
  openBtnEl: document.querySelector('.open-modal'),
});
