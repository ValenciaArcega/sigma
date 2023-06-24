
export class ClReviewAddGarage {
  ///////////////////////////////////////////////// var
  root = document.documentElement.style;
  _regExpLetters = /[a-zA-Z]/;
  _regExpNumbers = /[0-9]/;
  _regExpCharacters = /[´¡°!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/¿?]/;

  ///////////////////////////////////////////////// fn
  _inputFocusIn(str) {
    this.root.setProperty(`--borderInput-garage-${str}`, '#4263eb')
  }

  _inputBlur(str) {
    this.root.setProperty(`--borderInput-garage-${str}`, '#c5c5c5')
  }

  _inputNameKeyUp() {
    const input = document.querySelector('.inputGarage-name')
    const textError = document.querySelector('.addGarage-p-name')

    this.root.setProperty('--borderInput-garage-name', '#4263eb')

    if (input.value.match(this._regExpNumbers) || input.value.match(/[´¡°!@#$%^&*()_+\-=\[\]{};':"\\|.<>\/¿?]/)) {
      this.root.setProperty('--borderInput-garage-name', '#DF0000')
      textError.textContent = 'Recuerda, caracteres tipo texto'
    } else textError.textContent = ''

    if (input.value === '') {
      this.root.setProperty('--borderInput-garage-name', '#4263eb')
      textError.textContent = ''
    }
  }

  _inputServicesKeyUp(str) {
    const input = document.querySelector(`.inputGarage-${str}`)
    const textError = document.querySelector(`.addGarage-p-${str}`)

    this.root.setProperty(`--borderInput-garage-${str}`, '#4263eb')

    if (input.value.match(this._regExpCharacters) || input.value.match(this._regExpNumbers)) {
      this.root.setProperty(`--borderInput-garage-${str}`, '#DF0000')
      textError.textContent = 'Recuerda, caracteres tipo texto'
    } else textError.textContent = ''

    if (input.value === '') {
      this.root.setProperty(`--borderInput-garage-${str}`, '#4263eb')
      textError.textContent = ''
    }
  }


} // class