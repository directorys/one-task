const inputEl = document.querySelector('input');
const buttonEl = document.querySelector('button');
const timerEl = document.querySelector('span');

let boolean = true;

const createTimer = (seconds) => {
  timerEl.textContent = new Date(0, 0, 0, 0, 0, seconds)
    .toString()
    .split(' ')[4];
}

const createTimerAnimator = () => {
  return (seconds) => {
    const current = {
      value: seconds
    };

    createTimer(current.value);

    const time = new Date();
    let bagTime = 0;

    setTimeout(function setTimer() {
      current.value++;

      createTimer(current.value);

      bagTime = new Date().getMilliseconds() - time.getMilliseconds();

      setTimeout(setTimer, 1000 - bagTime);
    }, 1000);

  };
};

const animateTimer = createTimerAnimator();

inputEl.addEventListener('input', (event) => {
  event.target.value = parseInt(event.target.value);
  if (event.target.value.toString() === 'NaN') event.target.value = '';
});

buttonEl.addEventListener('click', () => {
  const seconds = Number(inputEl.value);

  boolean
  ? animateTimer(seconds)
  : alert('Вы уже запустили таймер!')

  boolean = false;

  inputEl.value = '';
});
