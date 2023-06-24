
export class ClReviewUpdateData {
  ///////////////////////////////////////////////// var
  root = document.documentElement.style;
  _regExpLetters = /[a-zA-Z]/;
  _regExpNumbers = /[0-9]/;
  _regExpCharacters = /[´¡°!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/¿?]/;

  ///////////////////////////////////////////////// fn
  _inputFocusIn(str) {
    this.root.setProperty(`--borderUDInput-${str}`, '#4263eb')
  }

  _inputBlur(str) {
    this.root.setProperty(`--borderUDInput-${str}`, '#c5c5c5')
  }

  _inputNameKeyUp() {
    const input = document.querySelector('.updateData-name')
    const textError = document.querySelector('.updateData-name-p')

    this.root.setProperty('--borderUDInput-name', '#4263eb')

    if (input.value.match(this._regExpNumbers) || input.value.match(this._regExpCharacters)) {
      this.root.setProperty('--borderUDInput-name', '#DF0000')
      textError.textContent = 'Recuerda, caracteres tipo texto'
    } else textError.textContent = ''

    if (input.value === '') {
      this.root.setProperty('--borderUDInput-name', '#4263eb')
      textError.textContent = ''
    }
  };

  _inputNumberKeyUp() {
    const input = document.querySelector('.updateData-number')
    const textError = document.querySelector('.updateData-number-p')

    this.root.setProperty('--borderUDInput-number', '#4263eb')
    if (input.value.match(this._regExpLetters) || input.value.match(this._regExpCharacters)) {
      this.root.setProperty('--borderUDInput-number', '#DF0000')
      textError.textContent = 'Recuerda, caracteres tipo númerico'
    } else textError.textContent = ''

    if (input.value === '') {
      this.root.setProperty('--borderUDInput-number', '#4263eb')
      textError.textContent = ''
    }
  };

  _reviewInputName() {
    const input = document.querySelector('.updateData-name')
    const textError = document.querySelector('.updateData-name-p')

    if (input.value === '') {
      this.root.setProperty('--borderUDInput-name', '#DF0000')
      textError.textContent = 'El campo es obligatorio'
    } else if (input.value.match(this._regExpNumbers) || input.value.match(this._regExpCharacters)) {
      this.root.setProperty('--borderUDInput-name', '#DF0000')
      textError.textContent = 'Solo caracteres tipo texto'
    } else return true
  }

  _reviewInputNumber() {
    const input = document.querySelector('.updateData-number')
    const textError = document.querySelector('.updateData-number-p')

    if (input.value === '') {
      this.root.setProperty('--borderUDInput-number', '#DF0000')
      textError.textContent = 'El campo es obligatorio'
    } else if (input.value.match(this._regExpLetters) || input.value.match(this._regExpCharacters)) {
      this.root.setProperty('--borderUDInput-number', '#DF0000')
      textError.textContent = 'Solo caracteres de tipo númerico'
    } else return true
  }

  _reviewFormUpdateData(e) {
    e.preventDefault()
    this._reviewInputName()
    this._reviewInputNumber()

    if (this._reviewInputName() && this._reviewInputNumber()) {
      return true
    }
  }
}