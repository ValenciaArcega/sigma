class Review {
  ////////////////////////////////////////////
  root = document.documentElement.style;
  ////////////////////////////////////////////
  // input name
  _inputNameFocusIn() {
    this.root.setProperty('--borderFieldName', '#3b59d4');
  }
  _inputNameBlur() {
    this.root.setProperty('--borderFieldName', '#c5c5c5');
  }
  _inputNameKeyUp() {
    const inputName = document.querySelector('.signUpForm-name');
    const textErrorName = document.querySelector('.signUpForm-name-p');

    for (let i = 0; i < inputName.value.length; i++) {
      this.root.setProperty('--borderFieldName', '#3b59d4');
      if (inputName.value[i].match(/^[0-9]+$/)) {
        textErrorName.textContent = 'Recuerda, caracteres de tipo texto';
        this.root.setProperty('--borderFieldName', '#f63737');
      } else {
        textErrorName.textContent = '';
      }
    }
    if (inputName.value === '') {
      textErrorName.textContent = '';
      this.root.setProperty('--borderFieldName', '#3b59d4');
    }
  };
  ////////////////////////////////////////////
  // input mail
  _inputMailFocusIn() {
    this.root.setProperty('--borderFieldID', '#3b59d4');
  }
  _inputMailBlur() {
    this.root.setProperty('--borderFieldID', '#c5c5c5');
  }
  ////////////////////////////////////////////////////////////
  // input number
  _inputNumberFocusIn() {
    this.root.setProperty('--borderFieldNumber', '#3b59d4');
  }
  _inputNumberBlur() {
    this.root.setProperty('--borderFieldNumber', '#c5c5c5');
  }
  _inputNumberKeyUp() {
    const inputNumber = document.querySelector('.signUpForm-number');
    const labelErrorNumber = document.querySelector('.signUpForm-number-p');

    for (let i = 0; i < inputNumber.value.length; i++) {
      this.root.setProperty('--borderFieldNumber', '#3b59d4');
      if (inputNumber.value[i].match(/[a-zA-Z]/)) {
        this.root.setProperty('--borderFieldNumber', '#f63737');
        labelErrorNumber.textContent = 'Recuerda, caracteres de tipo númerico';
      } else {
        labelErrorNumber.textContent = '';
      }
      if (inputNumber.value === '') {
        labelErrorNumber.textContent = '';
        this.root.setProperty('--borderFieldNumber', '#3b59d4');
      }
    }
  };
  ////////////////////////////////////////////////////////////
  // input IDCar
  _inputIDCarFocusIn() {
    this.root.setProperty('--borderFieldIDCar', '#3b59d4');
  }
  _inputIDCarBlur() {
    this.root.setProperty('--borderFieldIDCar', '#c5c5c5');
  }
  ////////////////////////////////////////////////////////////
  // input model car
  _inputModelCarFocusIn() {
    this.root.setProperty('--borderFieldModel', '#3b59d4');
  }
  _inputModelCarBlur() {
    this.root.setProperty('--borderFieldModel', '#c5c5c5');
  }
  ////////////////////////////////////////////////////////////
  // input password
  _inputPassFocusIn() {
    this.root.setProperty('--borderFieldPass', '#3b59d4');
  }
  _inputPassBlur() {
    this.root.setProperty('--borderFieldPass', '#c5c5c5');
  }
  _showPassRegister() {
    const inputPass = document.querySelector('.signUpForm-pass');
    //const btnShowPass = document.querySelector('.btn-showPass');
    const iconHidePass = document.querySelector('.btn-hidePass-svg');
    const iconShowPass = document.querySelector('.btn-showPass-svg');

    if (inputPass.type == "password") {
      inputPass.type = "text";
      iconHidePass.classList.remove('hidden');
      iconShowPass.classList.add('hidden');
    } else {
      inputPass.type = "password";
      iconShowPass.classList.remove('hidden');
      iconHidePass.classList.add('hidden');
    }
  }
  ////////////////////////////////////////////////////////////
  // input confirm password
  _inputConfirmPassFocusIn() {
    this.root.setProperty('--borderFieldPassConfirm', '#3b59d4');
  }
  _inputConfirmPassBlur() {
    this.root.setProperty('--borderFieldPassConfirm', '#c5c5c5');
  }
  _inputConfirmPassKeyUp() {
    const inputPass = document.querySelector('.signUpForm-pass');
    const inputPassConfirm = document.querySelector('.signUpForm-passConfirm');
    const textErrorPassConfirm = document.querySelector('.signUpForm-passConfirm-p');

    if (inputPassConfirm.value === inputPass.value) {
      textErrorPassConfirm.textContent = '';
      this.root.setProperty('--borderFieldPassConfirm', '#3b59d4');
      textErrorPassConfirm.style.color = '#3b59d4';
      textErrorPassConfirm.textContent = '¡Coinciden!';
    } else {
      textErrorPassConfirm.style.color = '#f63737';
      this.root.setProperty('--borderFieldPassConfirm', '#f63737');
      textErrorPassConfirm.textContent = 'Las contraseñas no coinciden';
    }
  };
  _showConfirmRegister() {
    const inputPassConfirm = document.querySelector('.signUpForm-passConfirm');
    const iconShowPassConfirm = document.querySelector('.btn-showPassConfirm-svg');
    const iconHidePassConfirm = document.querySelector('.btn-hidePassConfirm-svg');

    if (inputPassConfirm.type === 'password') {
      inputPassConfirm.type = 'text';
      iconHidePassConfirm.classList.remove('hidden');
      iconShowPassConfirm.classList.add('hidden');
    } else {
      inputPassConfirm.type = 'password';
      iconShowPassConfirm.classList.remove('hidden');
      iconHidePassConfirm.classList.add('hidden');
    }
  };
}

export default Review;
