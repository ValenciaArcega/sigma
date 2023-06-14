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
    this.root.setProperty('--bg-garage', '#fff')
    this.root.setProperty('--bg-finder', '#fff')
    // borders
    this.root.setProperty('--border-garage', '#c8c8c8')
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
    this.root.setProperty('--ff', '#12171a')
    this.root.setProperty('--black18', '#fff')
    this.root.setProperty('--bg-garage', '#2a2a2a')
    this.root.setProperty('--bg-finder', '#2c2c2c')
    // borders
    this.root.setProperty('--border-garage', 'transparent')
    // blur
    this.root.setProperty('--bg-blur-navBar', 'rgba(0, 0, 0, 0.4)')
    // shadows
    this.root.setProperty('--shadow-finder', 'transparent')
  };

} // class
