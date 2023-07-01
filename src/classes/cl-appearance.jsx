export default class AppearanceCl {
  root = document.documentElement.style;

  _makeLight() {
    const btnDark = document.querySelector('.btn-Dark')
    const btnLight = document.querySelector('.btn-Light')
    btnLight.classList.add('hidden')
    btnDark.classList.remove('hidden')

    this.root.setProperty('--bg', '#f2f2f7')
    this.root.setProperty('--ff', '#fff')
    this.root.setProperty('--black18', '#181818')
    // background & foreground
    this.root.setProperty('--bg-garage', '#fff')
    this.root.setProperty('--bg-finder', '#fff')
    this.root.setProperty('--bg-input-specialty', '#fff')
    this.root.setProperty('--bg-input-date', '#fff')
    this.root.setProperty('--bg-input-schedule', '#fff')
    this.root.setProperty('--bg-input-bookingNumber', '#fff')
    this.root.setProperty('--bg-input-checkPassword', '#fff')
    this.root.setProperty('--bg-input-cardDigits', '#fff')
    this.root.setProperty('--bg-input-expirationDate', '#fff')
    this.root.setProperty('--bg-input-cvv', '#fff')
    this.root.setProperty('--bg-btn-profile', '#e1e7f7')
    this.root.setProperty('--fr-btn-profile', '#0965c8')
    this.root.setProperty('--bg-btnRed-profile', '#fff')
    this.root.setProperty('--fr-btnRed-profile', '#de3333')
    // borders
    this.root.setProperty('--border-garage', '#c8c8c8')
    this.root.setProperty('--borderBKInput-date', '#c5c5c5')
    this.root.setProperty('--borderBKInput-schedule', '#c5c5c5')
    this.root.setProperty('--borderBKInput-number', '#c5c5c5')
    this.root.setProperty('--borderBKInput-checkPassword', '#c5c5c5')
    this.root.setProperty('--borderBKInput-cardDigits', '#c5c5c5')
    this.root.setProperty('--borderBKInput-expirationDate', '#c5c5c5')
    this.root.setProperty('--borderBKInput-cvv', '#c5c5c5')
    // blur
    this.root.setProperty('--bg-blur-navBar', 'rgba(255, 255, 255, 0.4)')
    // shadows
    this.root.setProperty('--shadow-finder', '0px 20px 18px -18px rgba(0, 0, 0, 0.12)')
  };

  _makeDark() {
    const btnDark = document.querySelector('.btn-Dark')
    const btnLight = document.querySelector('.btn-Light')
    btnDark.classList.add('hidden')
    btnLight.classList.remove('hidden')

    this.root.setProperty('--bg', '#181818')
    this.root.setProperty('--ff', '#242424')
    this.root.setProperty('--black18', '#fff')
    // background
    this.root.setProperty('--bg-garage', '#2a2a2a')
    this.root.setProperty('--bg-finder', '#2c2c2c')
    this.root.setProperty('--bg-input-specialty', '#181818')
    this.root.setProperty('--bg-input-date', '#181818')
    this.root.setProperty('--bg-input-schedule', '#181818')
    this.root.setProperty('--bg-input-bookingNumber', '#181818')
    this.root.setProperty('--bg-input-checkPassword', '#181818')
    this.root.setProperty('--bg-input-cardDigits', '#181818')
    this.root.setProperty('--bg-input-expirationDate', '#181818')
    this.root.setProperty('--bg-input-cvv', '#181818')
    this.root.setProperty('--bg-btn-profile', '#00154e')
    this.root.setProperty('--fr-btn-profile', '#5facff')
    this.root.setProperty('--bg-btnRed-profile', '#2e2e2e')
    this.root.setProperty('--fr-btnRed-profile', '#ff6b6b')
    // borders
    this.root.setProperty('--border-garage', 'transparent')
    this.root.setProperty('--borderBKInput-date', '#2a2a2a')
    this.root.setProperty('--borderBKInput-schedule', '#2a2a2a')
    this.root.setProperty('--borderBKInput-number', '#2a2a2a')
    this.root.setProperty('--borderBKInput-checkPassword', '#2a2a2a')
    this.root.setProperty('--borderBKInput-cardDigits', '#2a2a2a')
    this.root.setProperty('--borderBKInput-expirationDate', '#2a2a2a')
    this.root.setProperty('--borderBKInput-cvv', '#2a2a2a')
    // blur
    this.root.setProperty('--bg-blur-navBar', 'rgba(0, 0, 0, 0.4)')
    // shadows
    this.root.setProperty('--shadow-finder', 'transparent')
  };

} // class
