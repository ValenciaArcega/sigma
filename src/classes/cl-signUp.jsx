
export class ClReviewSignUp {
  ///////////////////////////////////////////////// var
  root = document.documentElement.style;
  _regExpLetters = /[a-zA-Z]/;
  _regExpNumbers = /[0-9]/;
  _regExpCharacters = /[´¡°!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/¿?]/;

  ///////////////////////////////////////////////// fn
  _inputFocusIn(str) {
    this.root.setProperty(`--borderInput-${str}`, '#4263eb')
  }

  _inputBlur(str) {
    this.root.setProperty(`--borderInput-${str}`, '#c5c5c5')
  }

  _inputNameKeyUp() {
    const input = document.querySelector('.signUp-name')
    const textError = document.querySelector('.signUp-name-p')

    this.root.setProperty('--borderInput-name', '#4263eb')

    if (input.value.match(this._regExpNumbers) || input.value.match(this._regExpCharacters)) {
      this.root.setProperty('--borderInput-name', '#DF0000')
      textError.textContent = 'Recuerda, solo caracteres de tipo texto'
    } else textError.textContent = ''

    if (input.value === '') {
      this.root.setProperty('--borderInput-name', '#4263eb')
      textError.textContent = ''
    }
  }

  _inputMailKeyUp() {
    const input = document.querySelector('.signUp-mail')
    const textError = document.querySelector('.signUp-mail-p')

    this.root.setProperty('--borderInput-name', '#4263eb')
    textError.textContent = ''

    if (input.value === '') {
      this.root.setProperty('--borderInput-name', '#4263eb')
      textError.textContent = ''
    }
  }

  _inputConfirmPassKeyUp() {
    const input = document.querySelector('.signUp-pass')
    const inputConfirm = document.querySelector('.signUp-passConfirm')
    const textError = document.querySelector('.signUp-passConfirm-p')

    if (inputConfirm.value === input.value) {
      this.root.setProperty('--borderInput-passConfirm', '#4263eb')
      textError.style.color = '#4263eb'
      textError.textContent = '¡Coinciden!'
    } else {
      this.root.setProperty('--borderInput-passConfirm', '#DF0000')
      textError.style.color = '#DF0000'
      textError.textContent = 'No coinciden'
    }
  }

  _reviewInputName() {
    const input = document.querySelector('.signUp-name')
    const textError = document.querySelector('.signUp-name-p')

    if (input.value === '') {
      this.root.setProperty('--borderInput-name', '#DF0000')
      textError.textContent = 'El campo es obligatorio'
    } else if (input.value.match(this._regExpNumbers) || input.value.match(this._regExpCharacters)) {
      this.root.setProperty('--borderInput-name', '#DF0000')
      textError.textContent = 'Solo caracteres tipo texto'
    } else return true
  }

  _reviewInputMail() {
    const input = document.querySelector('.signUp-mail')
    const textError = document.querySelector('.signUp-mail-p')

    if (input.value === '') {
      this.root.setProperty('--borderInput-mail', '#DF0000')
      textError.textContent = 'El campo es obligatorio'
    } else if (!input.value.includes('@') || !input.value.includes('.') || input.value.length < 8) {
      this.root.setProperty('--borderInput-mail', '#DF0000')
      textError.textContent = 'Ingresa un formato de correo valido'
    } else return true
  }

  _reviewInputPass() {
    const input = document.querySelector('.signUp-pass')
    const textError = document.querySelector('.signUp-pass-p')

    if (input.value === '') {
      this.root.setProperty('--borderInput-pass', '#DF0000')
      textError.textContent = 'El campo es obligatorio'
    } else if (input.value.length <= 7) {
      this.root.setProperty('--borderInput-pass', '#DF0000')
      textError.textContent = 'Al menos 8 caracteres'
    } else return true
  }

  _reviewInputPassConfirm() {
    const input = document.querySelector('.signUp-pass')
    const inputConfirm = document.querySelector('.signUp-passConfirm')
    const textError = document.querySelector('.signUp-passConfirm-p')

    if (input.value !== inputConfirm.value) {
      this.root.setProperty('--borderInput-passConfirm', '#DF0000')
      textError.style.color = '#DF0000'
      textError.textContent = 'Las contraseñas no coinciden'
    } else return true
  }

  _reviewFormSignUp(e) {
    e.preventDefault()
    this._reviewInputName()
    this._reviewInputMail()
    this._reviewInputPass()
    this._reviewInputPassConfirm()

    if (this._reviewInputName() && this._reviewInputMail() && this._reviewInputPassConfirm() && this._reviewInputPass()) return true
  }

  // 🔑

  _emptyConfirmPass() {
    document.querySelector('.signUp-passConfirm').value = document.querySelector('.signUp-passConfirm-p').textContent = document.querySelector('.signUp-pass-p').textContent = ''
  }

  _showPass(input, show, hide) {
    const inputPass = document.querySelector(`.${input}`)
    const iconShow = document.querySelector(`.${show}`)
    const iconHide = document.querySelector(`.${hide}`)

    if (inputPass.type == "password") {
      inputPass.type = "text"
      iconHide.classList.remove('hidden')
      iconShow.classList.add('hidden')
    } else {
      inputPass.type = "password"
      iconShow.classList.remove('hidden')
      iconHide.classList.add('hidden')
    }
  }

  // for all forms
  _resetBorders() {
    this.root.setProperty('--borderInput-name', '#c5c5c5')
    this.root.setProperty('--borderInput-mail', '#c5c5c5')
    this.root.setProperty('--borderInput-pass', '#c5c5c5')
    this.root.setProperty('--borderInput-passConfirm', '#c5c5c5')
    // UpdateData.jsx
    this.root.setProperty('--borderUDInput-name', '#c5c5c5')
    this.root.setProperty('--borderUDInput-number', '#c5c5c5')
    this.root.setProperty('--borderUDInput-plates', '#c5c5c5')
    this.root.setProperty('--borderUDInput-modelCar', '#c5c5c5')
    // Booking.jsx
    this.root.setProperty('--borderBKInput-date', '#c5c5c5')
    this.root.setProperty('--borderBKInput-schedule', '#c5c5c5')
    this.root.setProperty('--borderBKInput-number', '#c5c5c5')
    this.root.setProperty('--borderBKInput-checkPassword', '#c5c5c5')

    this.root.setProperty('--borderBKInput-cardDigits', '#c5c5c5')
    this.root.setProperty('--borderBKInput-expirationDate', '#c5c5c5')
    this.root.setProperty('--borderBKInput-cvv', '#c5c5c5')

    this.root.setProperty('--borderInput-garage-name', '#c5c5c5')
    this.root.setProperty('--borderInput-garage-number', '#c5c5c5')
    this.root.setProperty('--borderInput-garage-coorLat', '#c5c5c5')
    this.root.setProperty('--borderInput-garage-coorLong', '#c5c5c5')
    this.root.setProperty('--borderInput-garage-serv1', '#c5c5c5')
    this.root.setProperty('--borderInput-garage-serv2', '#c5c5c5')
    this.root.setProperty('--borderInput-garage-serv3', '#c5c5c5')
  }

} // class