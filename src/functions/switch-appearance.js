const makeDark = () => {
  const root = document.querySelector(':root');
  const btnDark = document.querySelector('.btn-Dark');
  const btnLight = document.querySelector('.btn-Light');
  btnDark.classList.add('hidden');
  btnLight.classList.remove('hidden');

  root.style.setProperty('--bg', '#181818');
  root.style.setProperty('--ff', '#12171a');
  root.style.setProperty('--black18', '#fff');
  // borders
  root.style.setProperty('--border-dashboardCard', '#272727');
  // blur
  root.style.setProperty('--bg-blur-navBar', 'rgba(0, 0, 0, 0.4)');
  // shadows
  root.style.setProperty('--shadow-finder', 'transparent');
};

const makeLight = () => {
  const root = document.querySelector(':root');
  const btnDark = document.querySelector('.btn-Dark');
  const btnLight = document.querySelector('.btn-Light');
  btnLight.classList.add('hidden');
  btnDark.classList.remove('hidden');

  root.style.setProperty('--bg', '#f2f2f7');
  root.style.setProperty('--ff', '#fff');
  root.style.setProperty('--black18', '#181818');
  // borders
  root.style.setProperty('--border-dashboardCard', '#c8c8c8');
  // blur
  root.style.setProperty('--bg-blur-navBar', 'rgba(255, 255, 255, 0.4)');
  // shadows
  root.style.setProperty('--shadow-finder', '0px 20px 18px -18px rgba(0, 0, 0, 0.12)');
};

export { makeDark, makeLight };
