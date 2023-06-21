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
    // backgrounds
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
    // borders
    this.root.setProperty('--border-garage', '#c8c8c8')
    this.root.setProperty('--borderInput-specialty', '#c5c5c5')
    this.root.setProperty('--borderInput-date', '#c5c5c5')
    this.root.setProperty('--borderInput-schedule', '#c5c5c5')
    this.root.setProperty('--borderInput-bookingNumber', '#c5c5c5')
    this.root.setProperty('--borderInput-checkPassword', '#c5c5c5')
    this.root.setProperty('--borderInput-cardDigits', '#c5c5c5')
    this.root.setProperty('--borderInput-expirationDate', '#c5c5c5')
    this.root.setProperty('--borderInput-cvv', '#c5c5c5')
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
    // borders
    this.root.setProperty('--border-garage', 'transparent')
    this.root.setProperty('--borderInput-specialty', '#2a2a2a')
    this.root.setProperty('--borderInput-date', '#2a2a2a')
    this.root.setProperty('--borderInput-schedule', '#2a2a2a')
    this.root.setProperty('--borderInput-bookingNumber', '#2a2a2a')
    this.root.setProperty('--borderInput-checkPassword', '#2a2a2a')
    this.root.setProperty('--borderInput-cardDigits', '#2a2a2a')
    this.root.setProperty('--borderInput-expirationDate', '#2a2a2a')
    this.root.setProperty('--borderInput-cvv', '#2a2a2a')
    // blur
    this.root.setProperty('--bg-blur-navBar', 'rgba(0, 0, 0, 0.4)')
    // shadows
    this.root.setProperty('--shadow-finder', 'transparent')
  };

} // class
