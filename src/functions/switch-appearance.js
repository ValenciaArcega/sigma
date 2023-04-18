const makeDark = () => {
  const root = document.querySelector(':root');
  const btnDark = document.querySelector('.btn-Dark');
  const btnLight = document.querySelector('.btn-Light');
  btnDark.classList.add('hidden');
  btnLight.classList.remove('hidden');

  root.style.setProperty('--bg', '#181818');
};

const makeLight = () => {
  const root = document.querySelector(':root');
  const btnDark = document.querySelector('.btn-Dark');
  const btnLight = document.querySelector('.btn-Light');
  btnLight.classList.add('hidden');
  btnDark.classList.remove('hidden');

  root.style.setProperty('--bg', '#f2f2f7');
};

export { makeDark, makeLight };


