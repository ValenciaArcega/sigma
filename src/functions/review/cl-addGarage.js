export class ReviewAddGarage {
  ///////////////// V A R I A B L E S /////////////////
  root = document.documentElement.style;
  _expRegLetters = /[a-zA-Z]/;
  _expRegNumbers = /[0-9]/;
  _expRegCharacters = /[¡°!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/¿?]/;

  ///////////////// M E T H O D S /////////////////
  _inputNameFocusIn() {
    this.root.setProperty('--borderInput-garageName', '#3b59d4')
  }

  _inputNameBlur() {
    this.root.setProperty('--borderInput-garageName', '#c5c5c5')
  }

  _inputNameKeyUp() {
    const input = document.querySelector('.inputGarage-name')
    const textError = document.querySelector('.addGarage-p-name')

    for (let a = 0; a < input.value.length; a++) {
      this.root.setProperty('--borderInput-garageName', '#3b59d4')

      if (input.value[a].match(this._expRegNumbers) || input.value[a].match(/[¡°!@#$%^&*()_+\-=\[\]{};':"\\|.<>\/¿?]/)) {
        this.root.setProperty('--borderInput-garageName', 'red')
        textError.textContent = 'Recuerda, caracteres tipo texto'
      } else {
        textError.textContent = ''
      }
    }

    if (input.value === '') {
      this.root.setProperty('--borderInput-garageName', '#3b59d4')
      textError.textContent = ''
    }
  }
  ////////////////////////////////////////////////////////////
  // input number
  _inputNumberFocusIn() {
    this.root.setProperty('--borderInput-garage-number', '#3b59d4')
  }

  _inputNumberBlur() {
    this.root.setProperty('--borderInput-garage-number', '#c5c5c5')
  }
  ////////////////////////////////////////////////////////////
  // input latitude
  _inputLatitudeFocusIn() {
    this.root.setProperty('--borderInput-garage-coorLat', '#3b59d4')
  }
  _inputLatitudeBlur() {
    this.root.setProperty('--borderInput-garage-coorLat', '#c5c5c5')
  }
  ////////////////////////////////////////////////////////////
  // input latitude
  _inputLongitudeFocusIn() {
    this.root.setProperty('--borderInput-garage-coorLong', '#3b59d4')
  }
  _inputLongitudeBlur() {
    this.root.setProperty('--borderInput-garage-coorLong', '#c5c5c5')
  }
  ////////////////////////////////////////////////////////////
}
