export class ReviewBooking {
  ///////////////// V A R I A B L E S /////////////////
  root = document.documentElement.style;
  _expRegLetters = /[a-zA-Z]/;
  _expRegNumbers = /[0-9]/;
  _expRegCharacters = /[¡°!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/¿?]/;

  ///////////////// M E T H O D S /////////////////
  // input specialty
  _inputSpecialtyFocusIn() {
    this.root.setProperty('--borderInput-specialty', '#3b59d4')
  }

  _inputSpecialtyBlur() {
    this.root.setProperty('--borderInput-specialty', '#c5c5c5')
  }

  _inputSpecialtyKeyUp() {
    const input = document.querySelector('.data-input-specialty')
    const textError = document.querySelector('.data-p-specialty')

    for (let a = 0; a < input.value.length; a++) {
      this.root.setProperty('--borderInput-specialty', '#3b59d4')

      if (input.value[a].match(this._expRegNumbers) || input.value[a].match(this._expRegCharacters)) {
        this.root.setProperty('--borderInput-specialty', '#f63737')
        textError.textContent = 'Recuerda, solo caracteres tipo texto'
      } else textError.textContent = ''
    }

    if (input.value === '') {
      this.root.setProperty('--borderInput-specialty', '#3b59d4')
      textError.textContent = ''
    }
  }

  _reviewInputSpecialty() {
    const input = document.querySelector('.data-input-specialty')
    const textError = document.querySelector('.data-p-specialty')
    if (input.value === '') {
      this.root.setProperty('--borderInput-specialty', '#f63737')
      textError.textContent = 'El campo es obligatorio'
    } else if (input.value.match(this._expRegNumbers) || input.value.match(this._expRegCharacters)) {
      this.root.setProperty('--borderInput-specialty', '#f63737')
      textError.textContent = 'Solo caracteres tipo texto'
    } else return true
  }
  ////////////////////////////////////////////
  // input date
  _inputDateFocusIn() {
    this.root.setProperty('--borderInput-date', '#3b59d4')
  }

  _inputDateBlur() {
    this.root.setProperty('--borderInput-date', '#c5c5c5')
  }

  _inputDateKeyUp() {
    const input = document.querySelector('.data-input-date')
    const textError = document.querySelector('.data-p-date')

    for (let a = 0; a < input.value.length; a++) {
      this.root.setProperty('--borderInput-date', '#3b59d4')

      if (input.value[a].match(/[¡°!@#$%^&*()_+\-=\[\]{};':"\\|.<>\/¿?]/)) {
        this.root.setProperty('--borderInput-date', '#f63737')
        textError.textContent = 'Sin caracteres especiales'
      } else textError.textContent = ''
    }

    if (input.value === '') {
      this.root.setProperty('--borderInput-date', '#3b59d4')
      textError.textContent = ''
    }
  }

  _reviewInputDate() {
    const input = document.querySelector('.data-input-date')
    const textError = document.querySelector('.data-p-date')

    if (input.value === '') {
      this.root.setProperty('--borderInput-date', '#f63737')
      textError.textContent = 'El campo es obligatorio'
    } else if (input.value.match(/[¡°!@#$%^&*()_+\-=\[\]{};':"\\|.<>\/¿?]/)) {
      this.root.setProperty('--borderInput-date', '#f63737')
      textError.textContent = 'Sin caracteres especiales'
    } else return true
  }
  ////////////////////////////////////////////
  // input schedule
  _inputScheduleFocusIn() {
    this.root.setProperty('--borderInput-schedule', '#3b59d4')
  }

  _inputScheduleBlur() {
    this.root.setProperty('--borderInput-schedule', '#c5c5c5')
  }

  _inputScheduleKeyUp() {
    const input = document.querySelector('.data-input-schedule')
    const textError = document.querySelector('.data-p-schedule')

    for (let a = 0; a < input.value.length; a++) {
      this.root.setProperty('--borderInput-schedule', '#3b59d4')

      if (input.value[a].match(/[¡°!@#$%^&*()_+\=\[\]{};'"\\|,.<>\/¿?]/) || input.value[a].match(this._expRegLetters)) {
        this.root.setProperty('--borderInput-schedule', '#f63737')
        textError.textContent = 'Sin caracteres especiales'
      } else textError.textContent = ''
    }

    if (input.value === '') {
      this.root.setProperty('--borderInput-schedule', '#3b59d4')
      textError.textContent = ''
    }
  }

  _reviewInputSchedule() {
    const input = document.querySelector('.data-input-schedule')
    const textError = document.querySelector('.data-p-schedule')

    if (input.value === '') {
      this.root.setProperty('--borderInput-schedule', '#f63737')
      textError.textContent = 'El campo es obligatorio'
    } else if (input.value.match(/[¡°!@#$%^&*()_+\=\[\]{};'"\\|,.<>\/¿?]/) || input.value.match(this._expRegLetters)) {
      this.root.setProperty('--borderInput-schedule', '#f63737')
      textError.textContent = 'Sin caracteres especiales'
    } else return true
  }
  ////////////////////////////////////////////
  // input booking contact number
  _inputBookingNumberFocusIn() {
    this.root.setProperty('--borderInput-bookingNumber', '#3b59d4')
  }

  _inputBookingNumberBlur() {
    this.root.setProperty('--borderInput-bookingNumber', '#c5c5c5')
  }

  _inputBookingNumberKeyUp() {
    const input = document.querySelector('.data-input-bookingNumber')

    if (input.value.length > 10) input.value = input.value.slice(0, 10)
  }

  _reviewInputBookingNumber() {
    const input = document.querySelector('.data-input-bookingNumber')
    const textError = document.querySelector('.data-p-bookingNumber')

    if (input.value === '') {
      this.root.setProperty('--borderInput-bookingNumber', '#f63737')
      textError.textContent = 'El campo es obligatorio'
    } else if (input.value.length < 10) {
      this.root.setProperty('--borderInput-bookingNumber', '#f63737')
      textError.textContent = 'Se esperan 10 dígitos'
    } else {
      textError.textContent = ''
      return true
    }
  }

  ////////////////////////////////////////////
  // input check password
  _inputCheckPasswordFocusIn() {
    this.root.setProperty('--borderInput-checkPassword', '#3b59d4')
  }

  _inputCheckPasswordBlur() {
    this.root.setProperty('--borderInput-checkPassword', '#c5c5c5')
  }

  _setWrongPass() {
    const textError = document.querySelector('.data-p-checkPassword')
    this.root.setProperty('--borderInput-checkPassword', '#f63737')
    textError.style.color = '#f63737'
    textError.textContent = 'La contraseña es incorrecta'
  }

  _setGoodPass() {
    const textError = document.querySelector('.data-p-checkPassword')
    textError.style.color = '#37b24d'
    textError.textContent = '¡Contraseña verificada!'
    this.root.setProperty('--borderInput-checkPassword', '#37b24d')
  }
  ////////////////////////////////////////////
  // 💳
  ////////////////////////////////////////////
  // input card digits
  _inputCardDigitsFocusIn() {
    this.root.setProperty('--borderInput-cardDigits', '#3b59d4')
  }

  _inputCardDigitsBlur() {
    this.root.setProperty('--borderInput-cardDigits', '#c5c5c5')
  }

  _inputCardDigitsKeyUp() {
    const input = document.querySelector('.payment-input-cardDigits')

    if (input.value.length > 16) input.value = input.value.slice(0, 16)
  }

  _reviewInputCardDigits() {
    const input = document.querySelector('.payment-input-cardDigits')
    const textError = document.querySelector('.payment-p-cardDigits')

    if (input.value === '') {
      this.root.setProperty('--borderInput-cardDigits', '#f63737')
      textError.textContent = 'El campo es obligatorio'
    } else if (input.value.length < 16) {
      this.root.setProperty('--borderInput-cardDigits', '#f63737')
      textError.textContent = 'Se esperan 16 dígitos'
    } else {
      textError.textContent = ''
      return true
    }
  }
  ////////////////////////////////////////////
  // input expiration date
  _inputExpirationDateFocusIn() {
    this.root.setProperty('--borderInput-expirationDate', '#3b59d4')
  }

  _inputExpirationDateBlur() {
    this.root.setProperty('--borderInput-expirationDate', '#c5c5c5')
  }

  _inputExpirationDateKeyUp() {
    const input = document.querySelector('.payment-input-expirationDate')
    const textError = document.querySelector('.payment-p-expirationDate')

    for (let a = 0; a < input.value.length; a++) {
      this.root.setProperty('--borderInput-expirationDate', '#3b59d4')

      if (input.value[a].match(/[¡°!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\¿?]/) || input.value[a].match(this._expRegLetters)) {
        this.root.setProperty('--borderInput-expirationDate', '#f63737')
        textError.textContent = 'Sin caracteres especiales'
      } else textError.textContent = ''
    }

    if (input.value === '') {
      this.root.setProperty('--borderInput-expirationDate', '#3b59d4')
      textError.textContent = ''
    }
  }

  _reviewInputExpirationDate() {
    const input = document.querySelector('.payment-input-expirationDate')
    const textError = document.querySelector('.payment-p-expirationDate')

    if (input.value === '') {
      this.root.setProperty('--borderInput-expirationDate', '#f63737')
      textError.textContent = 'El campo es obligatorio'
    } else if (input.value.match(/[¡°!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\¿?]/) || input.value.match(this._expRegLetters)) {
      this.root.setProperty('--borderInput-expirationDate', '#f63737')
      textError.textContent = 'Sin caracteres especiales'
    } else return true
  }
  ////////////////////////////////////////////
  // input cvv
  _inputCVVFocusIn() {
    this.root.setProperty('--borderInput-cvv', '#3b59d4')
  }

  _inputCVVBlur() {
    this.root.setProperty('--borderInput-cvv', '#c5c5c5')
  }

  _inputCVVKeyUp() {
    const input = document.querySelector('.payment-input-cvv')

    if (input.value.length > 3) input.value = input.value.slice(0, 3)
  }

  _reviewInputCVV() {
    const input = document.querySelector('.payment-input-cvv')
    const textError = document.querySelector('.payment-p-cvv')

    if (input.value === '') {
      this.root.setProperty('--borderInput-cvv', '#f63737')
      textError.textContent = 'El campo es obligatorio'
    } else if (input.value.length < 3) {
      this.root.setProperty('--borderInput-cvv', '#f63737')
      textError.textContent = 'Se esperan al menos 3 dígitos'
    } else {
      textError.textContent = ''
      return true
    }
  }

  _reviewFormBooking() {
    // 📆
    this._reviewInputSpecialty()
    this._reviewInputDate()
    this._reviewInputSchedule()
    this._reviewInputBookingNumber()
    // 💳
    this._reviewInputCardDigits()
    this._reviewInputExpirationDate()
    this._reviewInputCVV()

    if (this._reviewInputSpecialty() && this._reviewInputDate() &&
      this._reviewInputSchedule() && this._reviewInputBookingNumber() && this._reviewInputCardDigits() && this._reviewInputExpirationDate() && this._reviewInputCVV()) {
      return true
    }
  }

}