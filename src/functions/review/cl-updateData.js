export class ReviewUpdateData {
  ///////////////// V A R I A B L E S /////////////////
  root = document.documentElement.style;
  _expRegLetters = /[a-zA-Z]/;
  _expRegNumbers = /[0-9]/;
  _expRegCharacters = /[¡°!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/¿?]/;

  ///////////////// M E T H O D S /////////////////  
  // input name
  _inputNameFocusIn() {
    this.root.setProperty('--borderInput-name', '#3b59d4')
  }
  _inputNameBlur() {
    this.root.setProperty('--borderInput-name', '#c5c5c5')
  }

  _inputNameKeyUp() {
    const inputName = document.querySelector('.signUp-name')
    const textErrorName = document.querySelector('.signUp-name-p')

    for (let i = 0; i < inputName.value.length; i++) {
      this.root.setProperty('--borderInput-name', '#3b59d4')

      if (inputName.value[i].match(this._expRegNumbers) || inputName.value[i].match(this._expRegCharacters)) {
        textErrorName.textContent = 'Recuerda, solo caracteres de tipo texto'
        this.root.setProperty('--borderInput-name', '#f63737')
      } else textErrorName.textContent = ''
    }

    if (inputName.value === '') {
      textErrorName.textContent = ''
      this.root.setProperty('--borderInput-name', '#3b59d4')
    }
  };

  _reviewInputName() {
    const inputName = document.querySelector('.signUp-name')
    const textErrorName = document.querySelector('.signUp-name-p')

    if (inputName.value === '') {
      this.root.setProperty('--borderInput-name', '#f63737')
      textErrorName.textContent = 'El campo es obligatorio'
    } else if (inputName.value.match(/[0-9]/) || inputName.value.match(this._expRegCharacters)) {
      this.root.setProperty('--borderInput-name', '#f63737')
      textErrorName.textContent = 'Solo caracteres tipo texto'
    } else return true
  }

  ////////////////////////////////////////////////////////////
  // input number
  _inputNumberFocusIn() {
    this.root.setProperty('--borderInput-number', '#3b59d4')
  }
  _inputNumberBlur() {
    this.root.setProperty('--borderInput-number', '#c5c5c5')
  }
  _inputNumberKeyUp() {
    const inputNumber = document.querySelector('.signUp-number')
    const labelErrorNumber = document.querySelector('.signUp-number-p')

    for (let i = 0; i < inputNumber.value.length; i++) {
      this.root.setProperty('--borderInput-number', '#3b59d4')
      if (inputNumber.value[i].match(this._expRegLetters) || inputNumber.value[i].match(this._expRegCharacters)) {
        this.root.setProperty('--borderInput-number', '#f63737')
        labelErrorNumber.textContent = 'Recuerda, caracteres de tipo númerico'
      } else labelErrorNumber.textContent = ''
    }

    if (inputNumber.value === '') {
      this.root.setProperty('--borderInput-number', '#3b59d4')
      labelErrorNumber.textContent = ''
    }
  };

  _reviewInputNumber() {
    const inputNumber = document.querySelector('.signUp-number')
    const labelErrorNumber = document.querySelector('.signUp-number-p')

    if (inputNumber.value === '') {
      this.root.setProperty('--borderInput-number', '#f63737')
      labelErrorNumber.textContent = 'El campo es obligatorio'
    } else if (inputNumber.value.match(this._expRegLetters) || inputNumber.value.match(this._expRegCharacters)) {
      this.root.setProperty('--borderInput-number', '#f63737')
      labelErrorNumber.textContent = 'Solo caracteres de tipo númerico'
    } else return true
  }

  ////////////////////////////////////////////////////////////
  // input IDCar
  _inputIDCarFocusIn() {
    this.root.setProperty('--borderInput-plates', '#3b59d4')
  }
  _inputIDCarBlur() {
    this.root.setProperty('--borderInput-plates', '#c5c5c5')
  }
  ////////////////////////////////////////////////////////////
  // input model car
  _inputModelCarFocusIn() {
    this.root.setProperty('--borderInput-modelCar', '#3b59d4')
  }
  _inputModelCarBlur() {
    this.root.setProperty('--borderInput-modelCar', '#c5c5c5')
  }
  ////////////////////////////////////////////////////////////
  // input password
  _inputPassFocusIn() {
    this.root.setProperty('--borderInput-pass', '#3b59d4')
  }
  _inputPassBlur() {
    this.root.setProperty('--borderInput-pass', '#c5c5c5')
  }

  _emptyConfirmPass() {
    document.querySelector('.signUp-passConfirm').value = document.querySelector('.signUp-passConfirm-p').textContent = document.querySelector('.signUp-pass-p').textContent = ''
  }

  _reviewInputPass() {
    const inputPass = document.querySelector('.signUp-pass')
    const labelErrorPass = document.querySelector('.signUp-pass-p')

    if (inputPass.value === '') {
      this.root.setProperty('--borderInput-pass', '#f63737')
      labelErrorPass.textContent = 'El campo es obligatorio'
    } else if (inputPass.value.length <= 5) {
      this.root.setProperty('--borderInput-pass', '#f63737')
      labelErrorPass.textContent = 'Al menos 6 caracteres'
    } else {
      labelErrorPass.textContent = ''
      return true
    }
  }

  _showPassRegister() {
    const inputPass = document.querySelector('.signUp-pass')
    const iconHidePass = document.querySelector('.btn-hidePass-svg')
    const iconShowPass = document.querySelector('.btn-showPass-svg')

    if (inputPass.type == "password") {
      inputPass.type = "text"
      iconHidePass.classList.remove('hidden')
      iconShowPass.classList.add('hidden')
    } else {
      inputPass.type = "password"
      iconShowPass.classList.remove('hidden')
      iconHidePass.classList.add('hidden')
    }
  }
  ////////////////////////////////////////////////////////////
  // input confirm password
  _inputConfirmPassFocusIn() {
    this.root.setProperty('--borderInput-passConfirm', '#3b59d4')
  }
  _inputConfirmPassBlur() {
    this.root.setProperty('--borderInput-passConfirm', '#c5c5c5')
  }

  _inputConfirmPassKeyUp() {
    const inputPass = document.querySelector('.signUp-pass')
    const inputPassConfirm = document.querySelector('.signUp-passConfirm')
    const textErrorPassConfirm = document.querySelector('.signUp-passConfirm-p')

    if (inputPassConfirm.value === inputPass.value) {
      this.root.setProperty('--borderInput-passConfirm', '#3b59d4')
      textErrorPassConfirm.textContent = ''
      textErrorPassConfirm.style.color = '#3b59d4'
      textErrorPassConfirm.textContent = '¡Coinciden!'
    } else {
      this.root.setProperty('--borderInput-passConfirm', '#f63737')
      textErrorPassConfirm.style.color = '#f63737'
      textErrorPassConfirm.textContent = 'No coinciden'
    }
  };

  _reviewInputConfirmPassword() {
    const inputPass = document.querySelector('.signUp-pass')
    const inputPassConfirm = document.querySelector('.signUp-passConfirm')
    const textErrorPassConfirm = document.querySelector('.signUp-passConfirm-p')

    if (inputPass.value !== inputPassConfirm.value) {
      this.root.setProperty('--borderInput-passConfirm', '#f63737')
      textErrorPassConfirm.style.color = '#f63737'
      textErrorPassConfirm.textContent = 'Las contraseñas no coinciden'
    } else return true
  }

  _showConfirmRegister() {
    const inputPassConfirm = document.querySelector('.signUp-passConfirm')
    const iconShowPassConfirm = document.querySelector('.btn-showPassConfirm-svg')
    const iconHidePassConfirm = document.querySelector('.btn-hidePassConfirm-svg')

    if (inputPassConfirm.type === 'password') {
      inputPassConfirm.type = 'text'
      iconHidePassConfirm.classList.remove('hidden')
      iconShowPassConfirm.classList.add('hidden')
    } else {
      inputPassConfirm.type = 'password'
      iconShowPassConfirm.classList.remove('hidden')
      iconHidePassConfirm.classList.add('hidden')
    }
  }

  _reviewFormUpdateData(e) {
    e.preventDefault()
    this._reviewInputName()
    this._reviewInputPass()
    this._reviewInputNumber()
    this._reviewInputConfirmPassword()
    if (this._reviewInputName() && this._reviewInputNumber() && this._reviewInputConfirmPassword() && this._reviewInputPass()) {
      return true
    }
  }

  _reviewFormSignUp(e) {
    e.preventDefault()
    this._reviewInputName()
    this._reviewInputMail()
    this._reviewInputPass()
    this._reviewInputConfirmPassword()
    if (this._reviewInputName() && this._reviewInputMail() && this._reviewInputConfirmPassword() && this._reviewInputPass()) {
      return true
    }
  }
}