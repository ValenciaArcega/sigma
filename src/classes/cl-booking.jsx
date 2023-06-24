
export class ClReviewBooking {
  ///////////////////////////////////////////////// var
  root = document.documentElement.style;
  _regExpLetters = /[a-zA-Z]/;
  _regExpNumbers = /[0-9]/;
  _regExpCharacters = /[´¡°!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/¿?]/;

  ///////////////////////////////////////////////// fn
  _inputFocusIn(str) {
    this.root.setProperty(`--borderBKInput-${str}`, '#4263eb')
  }

  _inputBlur(str) {
    this.root.setProperty(`--borderBKInput-${str}`, '#c5c5c5')
  }

  _inputScheduleKeyUp() {
    const input = document.querySelector('.data-input-schedule')
    const textError = document.querySelector('.data-p-schedule')

    this.root.setProperty('--borderBKInput-schedule', '#4263eb')

    if (input.value.match(/[´¡°!@#$%^&*()_+\=\[\]{};'"\\|,.<>\/¿?]/) || input.value.match(this._regExpLetters)) {
      this.root.setProperty('--borderBKInput-schedule', '#DF0000')
      textError.textContent = 'Sin caracteres especiales'
    } else textError.textContent = ''

    if (input.value === '') {
      this.root.setProperty('--borderBKInput-schedule', '#4263eb')
      textError.textContent = ''
    }
  }

  _inputBookingNumberKeyUp() {
    const input = document.querySelector('.data-input-bookingNumber')

    if (input.value.length > 10) input.value = input.value.slice(0, 10)
  }

  _inputCardDigitsKeyUp() {
    const input = document.querySelector('.payment-input-cardDigits')

    if (input.value.length > 16) input.value = input.value.slice(0, 16)
  }

  _inputExpirationDateKeyUp() {
    const input = document.querySelector('.payment-input-expirationDate')
    const textError = document.querySelector('.payment-p-expirationDate')

    this.root.setProperty('--borderBKInput-expirationDate', '#4263eb')

    if (input.value[a].match(/[´¡°!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\¿?]/) || input.value[a].match(this._regExpLetters)) {
      this.root.setProperty('--borderBKInput-expirationDate', '#DF0000')
      textError.textContent = 'Sin caracteres especiales'
    } else textError.textContent = ''

    if (input.value === '') {
      this.root.setProperty('--borderBKInput-expirationDate', '#4263eb')
      textError.textContent = ''
    }
  }

  _inputCVVKeyUp() {
    const input = document.querySelector('.payment-input-cvv')

    if (input.value.length > 3) input.value = input.value.slice(0, 3)
  }

  _reviewInputSchedule() {
    const input = document.querySelector('.data-input-schedule')
    const textError = document.querySelector('.data-p-schedule')

    if (input.value === '') {
      this.root.setProperty('--borderBKInput-schedule', '#DF0000')
      textError.textContent = 'El campo es obligatorio'
    } else if (input.value.match(/[´¡°!@#$%^&*()_+\=\[\]{};'"\\|,.<>\/¿?]/) || input.value.match(this._regExpLetters)) {
      this.root.setProperty('--borderBKInput-schedule', '#DF0000')
      textError.textContent = 'Sin caracteres especiales'
    } else return true
  }

  _reviewInputBookingNumber() {
    const input = document.querySelector('.data-input-bookingNumber')
    const textError = document.querySelector('.data-p-bookingNumber')

    if (input.value === '') {
      this.root.setProperty('--borderBKInput-number', '#DF0000')
      textError.textContent = 'El campo es obligatorio'
      // } else if (input.value.length < 10) {
      //   this.root.setProperty('--borderBKInput-number', '#DF0000')
      //   textError.textContent = 'Se esperan 10 dígitos'
    } else return true
  }

  _reviewInputCardDigits() {
    const input = document.querySelector('.payment-input-cardDigits')
    const textError = document.querySelector('.payment-p-cardDigits')

    if (input.value === '') {
      this.root.setProperty('--borderBKInput-cardDigits', '#DF0000')
      textError.textContent = 'El campo es obligatorio'
      // } else if (input.value.length < 16) {
      //   this.root.setProperty('--borderBKInput-cardDigits', '#DF0000')
      //   textError.textContent = 'Se esperan 16 dígitos'
    } else return true
  }

  _reviewInputExpirationDate() {
    const input = document.querySelector('.payment-input-expirationDate')
    const textError = document.querySelector('.payment-p-expirationDate')

    if (input.value === '') {
      this.root.setProperty('--borderBKInput-expirationDate', '#DF0000')
      textError.textContent = 'El campo es obligatorio'
    } else if (input.value.match(/[¡°!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\¿?]/) || input.value.match(this._regExpLetters)) {
      this.root.setProperty('--borderBKInput-expirationDate', '#DF0000')
      textError.textContent = 'Sin caracteres especiales'
    } else return true
  }

  _reviewInputCVV() {
    const input = document.querySelector('.payment-input-cvv')
    const textError = document.querySelector('.payment-p-cvv')

    if (input.value === '') {
      this.root.setProperty('--borderBKInput-cvv', '#DF0000')
      textError.textContent = 'El campo es obligatorio'
    } else if (input.value.length < 3) {
      this.root.setProperty('--borderBKInput-cvv', '#DF0000')
      textError.textContent = 'Se esperan al menos 3 dígitos'
    } else return true
  }

  _reviewFormBooking() {
    // 📆
    this._reviewInputSchedule()
    this._reviewInputBookingNumber()
    // 💳
    this._reviewInputCardDigits()
    this._reviewInputExpirationDate()
    this._reviewInputCVV()

    if (this._reviewInputSchedule() && this._reviewInputBookingNumber() && this._reviewInputCardDigits() && this._reviewInputExpirationDate() && this._reviewInputCVV()) return true
  }

  /* input check password
  _setWrongPass() {
    const textError = document.querySelector('.data-p-checkPassword')
    this.root.setProperty('--borderBKInput-checkPassword', '#DF0000')
    textError.style.color = '#DF0000'
    textError.textContent = 'La contraseña es incorrecta'
  }

  _setGoodPass() {
    const textError = document.querySelector('.data-p-checkPassword')
    textError.style.color = '#37b24d'
    textError.textContent = '¡Contraseña verificada!'
    this.root.setProperty('--borderBKInput-checkPassword', '#37b24d')
  }
  */
}