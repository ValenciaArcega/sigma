class Review {
  root = document.documentElement.style;
  ////////////////////////////////////////////
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
      // this.root.setProperty('--bg-input-specialty', '#fff')

      if (input.value[a].match(/^[0-9]+$/) || input.value[a].match(/[¡°!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/¿?]/)) {
        this.root.setProperty('--borderInput-specialty', '#f63737')
        // this.root.setProperty('--bg-input-specialty', '#ffa9a9a6')
        textError.textContent = 'Recuerda, solo caracteres tipo texto'
      } else {
        // this.root.setProperty('--bg-input-specialty', '#fff')
        textError.textContent = ''
      }
    }

    if (input.value === '') {
      this.root.setProperty('--borderInput-specialty', '#3b59d4')
      textError.textContent = ''
    }
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
      } else {
        textError.textContent = ''
      }
    }

    if (input.value === '') {
      this.root.setProperty('--borderInput-date', '#3b59d4')
      textError.textContent = ''
    }
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

      if (input.value[a].match(/[¡°!@#$%^&*()_+\=\[\]{};'"\\|,.<>\/¿?]/)) {
        this.root.setProperty('--borderInput-schedule', '#f63737')
        textError.textContent = 'Sin caracteres especiales'
      } else textError.textContent = ''
    }

    if (input.value === '') {
      this.root.setProperty('--borderInput-schedule', '#3b59d4')
      textError.textContent = ''
    }
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

  }
  ////////////////////////////////////////////
  // input name
  _inputNameFocusIn() {
    this.root.setProperty('--borderFieldName', '#3b59d4')
  }
  _inputNameBlur() {
    this.root.setProperty('--borderFieldName', '#c5c5c5')
  }

  _inputNameKeyUp() {
    const inputName = document.querySelector('.signUpForm-name')
    const textErrorName = document.querySelector('.signUpForm-name-p')

    for (let i = 0; i < inputName.value.length; i++) {
      this.root.setProperty('--borderFieldName', '#3b59d4')

      if (inputName.value[i].match(/^[0-9]+$/) || inputName.value[i].match(/[¡°!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/¿?]/)) {
        textErrorName.textContent = 'Recuerda, solo caracteres de tipo texto'
        this.root.setProperty('--borderFieldName', '#f63737')
      } else {
        textErrorName.textContent = ''
      }
    }

    if (inputName.value === '') {
      textErrorName.textContent = ''
      this.root.setProperty('--borderFieldName', '#3b59d4')
    }
  };

  _reviewInputName() {
    const inputName = document.querySelector('.signUpForm-name')
    const textErrorName = document.querySelector('.signUpForm-name-p')

    if (inputName.value === '') {
      this.root.setProperty('--borderFieldName', '#f63737')
      textErrorName.textContent = 'El campo es obligatorio'
    } else if (inputName.value.match(/[0-9]/) || inputName.value.match(/[¡°!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/¿?]/)) {
      this.root.setProperty('--borderFieldName', '#f63737')
      textErrorName.textContent = 'Solo caracteres tipo texto'
    } else {
      return true
    }
  }

  ////////////////////////////////////////////
  // input mail
  _inputMailFocusIn() {
    this.root.setProperty('--borderFieldID', '#3b59d4')
  }
  _inputMailBlur() {
    this.root.setProperty('--borderFieldID', '#c5c5c5')
  }

  _reviewInputMail() {
    const inputMail = document.querySelector('.signUpForm-mail')
    const labelErrorMail = document.querySelector('.signUpForm-mail-p')

    if (inputMail.value === '') {
      this.root.setProperty('--borderFieldID', '#f63737')
      labelErrorMail.textContent = 'El campo es obligatorio'
    } else if (!inputMail.value.includes('@') || !inputMail.value.includes('.') || inputMail.value.length < 8) {
      this.root.setProperty('--borderFieldID', '#f63737')
      labelErrorMail.textContent = 'Ingresa un formato de correo valido'
    } else {
      labelErrorMail.textContent = ''
      return true
    }
  }

  ////////////////////////////////////////////////////////////
  // input number
  _inputNumberFocusIn() {
    this.root.setProperty('--borderFieldNumber', '#3b59d4')
  }
  _inputNumberBlur() {
    this.root.setProperty('--borderFieldNumber', '#c5c5c5')
  }
  _inputNumberKeyUp() {
    const inputNumber = document.querySelector('.signUpForm-number')
    const labelErrorNumber = document.querySelector('.signUpForm-number-p')

    for (let i = 0; i < inputNumber.value.length; i++) {
      this.root.setProperty('--borderFieldNumber', '#3b59d4')
      if (inputNumber.value[i].match(/[a-zA-Z]/) || inputNumber.value[i].match(/[¡°!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/¿?]/)) {
        this.root.setProperty('--borderFieldNumber', '#f63737')
        labelErrorNumber.textContent = 'Recuerda, caracteres de tipo númerico'
      } else {
        labelErrorNumber.textContent = ''
      }
    }

    if (inputNumber.value === '') {
      this.root.setProperty('--borderFieldNumber', '#3b59d4')
      labelErrorNumber.textContent = ''
    }
  };

  _reviewInputNumber() {
    const inputNumber = document.querySelector('.signUpForm-number')
    const labelErrorNumber = document.querySelector('.signUpForm-number-p')

    if (inputNumber.value === '') {
      this.root.setProperty('--borderFieldNumber', '#f63737')
      labelErrorNumber.textContent = 'El campo es obligatorio'
    } else if (inputNumber.value.match(/[a-zA-Z]/) || inputNumber.value.match(/[¡°!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/¿?]/)) {
      this.root.setProperty('--borderFieldNumber', '#f63737')
      labelErrorNumber.textContent = 'Solo caracteres de tipo númerico'
    } else {
      return true
    }
  }

  ////////////////////////////////////////////////////////////
  // input IDCar
  _inputIDCarFocusIn() {
    this.root.setProperty('--borderFieldIDCar', '#3b59d4')
  }
  _inputIDCarBlur() {
    this.root.setProperty('--borderFieldIDCar', '#c5c5c5')
  }
  ////////////////////////////////////////////////////////////
  // input model car
  _inputModelCarFocusIn() {
    this.root.setProperty('--borderFieldModel', '#3b59d4')
  }
  _inputModelCarBlur() {
    this.root.setProperty('--borderFieldModel', '#c5c5c5')
  }
  ////////////////////////////////////////////////////////////
  // input password
  _inputPassFocusIn() {
    this.root.setProperty('--borderFieldPass', '#3b59d4')
  }
  _inputPassBlur() {
    this.root.setProperty('--borderFieldPass', '#c5c5c5')
  }

  _emptyConfirmPass() {
    document.querySelector('.signUpForm-passConfirm').value = document.querySelector('.signUpForm-passConfirm-p').textContent = document.querySelector('.signUpForm-pass-p').textContent = ''
  }

  _reviewInputPass() {
    const inputPass = document.querySelector('.signUpForm-pass')
    const labelErrorPass = document.querySelector('.signUpForm-pass-p')

    if (inputPass.value === '') {
      this.root.setProperty('--borderFieldPass', '#f63737')
      labelErrorPass.textContent = 'El campo es obligatorio'
    } else if (inputPass.value.length <= 5) {
      this.root.setProperty('--borderFieldPass', '#f63737')
      labelErrorPass.textContent = 'Al menos 6 caracteres'
    } else {
      labelErrorPass.textContent = ''
      return true
    }
  }

  _showPassRegister() {
    const inputPass = document.querySelector('.signUpForm-pass')
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
    this.root.setProperty('--borderFieldPassConfirm', '#3b59d4')
  }
  _inputConfirmPassBlur() {
    this.root.setProperty('--borderFieldPassConfirm', '#c5c5c5')
  }

  _inputConfirmPassKeyUp() {
    const inputPass = document.querySelector('.signUpForm-pass')
    const inputPassConfirm = document.querySelector('.signUpForm-passConfirm')
    const textErrorPassConfirm = document.querySelector('.signUpForm-passConfirm-p')

    if (inputPassConfirm.value === inputPass.value) {
      this.root.setProperty('--borderFieldPassConfirm', '#3b59d4')
      textErrorPassConfirm.textContent = ''
      textErrorPassConfirm.style.color = '#3b59d4'
      textErrorPassConfirm.textContent = '¡Coinciden!'
    } else {
      this.root.setProperty('--borderFieldPassConfirm', '#f63737')
      textErrorPassConfirm.style.color = '#f63737'
      textErrorPassConfirm.textContent = 'No coinciden'
    }
  };

  _reviewInputConfirmPassword() {
    const inputPass = document.querySelector('.signUpForm-pass')
    const inputPassConfirm = document.querySelector('.signUpForm-passConfirm')
    const textErrorPassConfirm = document.querySelector('.signUpForm-passConfirm-p')

    if (inputPass.value !== inputPassConfirm.value) {
      this.root.setProperty('--borderFieldPassConfirm', '#f63737')
      textErrorPassConfirm.style.color = '#f63737'
      textErrorPassConfirm.textContent = 'Las contraseñas no coinciden'
    } else {
      return true
    }
  }

  _showConfirmRegister() {
    const inputPassConfirm = document.querySelector('.signUpForm-passConfirm')
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
  };

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

export default Review;

/* 👉 Version on functional code
let root = document.querySelector(':root');

////////////////////////////////////////////////////////////
// input name
const inputNameFocusIn = () => root.style.setProperty('--borderFieldName', '#3b59d4');
const inputNameBlur = () => root.style.setProperty('--borderFieldName', '#c5c5c5');
const inputNameKeyUp = () => {
  let root = document.querySelector(':root');
  const inputName = document.querySelector('.signUpForm-name');
  const textErrorName = document.querySelector('.signUpForm-name-p');

  for (let i = 0; i < inputName.value.length; i++) {
    root.style.setProperty('--borderFieldName', '#2e466f');
    if (inputName.value[i].match(/^[0-9]+$/)) {
      textErrorName.textContent = 'Recuerda, caracteres de tipo texto';
      root.style.setProperty('--borderFieldName', '#f63737');
    } else {
      textErrorName.textContent = '';
    }
  }
  if (inputName.value === '') {
    textErrorName.textContent = '';
    root.style.setProperty('--borderFieldName', '#2e466f');
  }
};
////////////////////////////////////////////////////////////
// input mail
const inputMailFocusIn = () => root.style.setProperty('--borderFieldID', '#3b59d4');
const inputMailBlur = () => root.style.setProperty('--borderFieldID', '#c5c5c5');
////////////////////////////////////////////////////////////
// input number
const inputNumberFocusIn = () => root.style.setProperty('--borderFieldNumber', '#3b59d4');
const inputNumberBlur = () => root.style.setProperty('--borderFieldNumber', '#c5c5c5');
////////////////////////////////////////////////////////////
// input IDCar
const inputIDCarFocusIn = () => root.style.setProperty('--borderFieldIDCar', '#3b59d4');
const inputIDCarBlur = () => root.style.setProperty('--borderFieldIDCar', '#c5c5c5');
////////////////////////////////////////////////////////////
// input model car
const inputModelCarFocusIn = () => root.style.setProperty('--borderFieldModel', '#3b59d4');
const inputModelCarBlur = () => root.style.setProperty('--borderFieldModel', '#c5c5c5');
////////////////////////////////////////////////////////////
// input password
const inputPassFocusIn = () => root.style.setProperty('--borderFieldPass', '#3b59d4');
const inputPassBlur = () => root.style.setProperty('--borderFieldPass', '#c5c5c5');
const showPassRegister = () => {
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
};
////////////////////////////////////////////////////////////
// input confirm password
const inputConfirmPassFocusIn = () => root.style.setProperty('--borderFieldPassConfirm', '#3b59d4');
const inputConfirmPassBlur = () => root.style.setProperty('--borderFieldPassConfirm', '#c5c5c5');

const inputConfirmPassKeyUp = () => {
  const inputPass = document.querySelector('.signUpForm-pass');
  const inputPassConfirm = document.querySelector('.signUpForm-passConfirm');
  const textErrorPassConfirm = document.querySelector('.signUpForm-passConfirm-p');

  if (inputPassConfirm.value === inputPass.value) {
    textErrorPassConfirm.textContent = '';
    root.style.setProperty('--borderFieldPassConfirm', 'green');
  } else {
    root.style.setProperty('--borderFieldPassConfirm', '#f63737');
    textErrorPassConfirm.textContent = 'Las contraseñas no coinciden';
  }
};
const showConfirmRegister = () => {
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

export {
  inputNameFocusIn, inputNameBlur, inputNameKeyUp, inputMailFocusIn, inputMailBlur, inputIDCarFocusIn, inputModelCarFocusIn, inputModelCarBlur, inputIDCarBlur, inputNumberBlur, inputNumberFocusIn, inputPassFocusIn, inputPassBlur, showPassRegister, inputConfirmPassFocusIn, inputConfirmPassBlur, inputConfirmPassKeyUp, showConfirmRegister
};
let root = document.querySelector(':root');

////////////////////////////////////////////////////////////
// input name
const inputNameFocusIn = () => root.style.setProperty('--borderFieldName', '#3b59d4');
const inputNameBlur = () => root.style.setProperty('--borderFieldName', '#c5c5c5');
const inputNameKeyUp = () => {
  let root = document.querySelector(':root');
  const inputName = document.querySelector('.signUpForm-name');
  const textErrorName = document.querySelector('.signUpForm-name-p');

  for (let i = 0; i < inputName.value.length; i++) {
    root.style.setProperty('--borderFieldName', '#2e466f');
    if (inputName.value[i].match(/^[0-9]+$/)) {
      textErrorName.textContent = 'Recuerda, caracteres de tipo texto';
      root.style.setProperty('--borderFieldName', '#f63737');
    } else {
      textErrorName.textContent = '';
    }
  }
  if (inputName.value === '') {
    textErrorName.textContent = '';
    root.style.setProperty('--borderFieldName', '#2e466f');
  }
};
////////////////////////////////////////////////////////////
// input mail
const inputMailFocusIn = () => root.style.setProperty('--borderFieldID', '#3b59d4');
const inputMailBlur = () => root.style.setProperty('--borderFieldID', '#c5c5c5');
////////////////////////////////////////////////////////////
// input number
const inputNumberFocusIn = () => root.style.setProperty('--borderFieldNumber', '#3b59d4');
const inputNumberBlur = () => root.style.setProperty('--borderFieldNumber', '#c5c5c5');
////////////////////////////////////////////////////////////
// input IDCar
const inputIDCarFocusIn = () => root.style.setProperty('--borderFieldIDCar', '#3b59d4');
const inputIDCarBlur = () => root.style.setProperty('--borderFieldIDCar', '#c5c5c5');
////////////////////////////////////////////////////////////
// input model car
const inputModelCarFocusIn = () => root.style.setProperty('--borderFieldModel', '#3b59d4');
const inputModelCarBlur = () => root.style.setProperty('--borderFieldModel', '#c5c5c5');
////////////////////////////////////////////////////////////
// input password
const inputPassFocusIn = () => root.style.setProperty('--borderFieldPass', '#3b59d4');
const inputPassBlur = () => root.style.setProperty('--borderFieldPass', '#c5c5c5');
const showPassRegister = () => {
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
};
////////////////////////////////////////////////////////////
// input confirm password
const inputConfirmPassFocusIn = () => root.style.setProperty('--borderFieldPassConfirm', '#3b59d4');
const inputConfirmPassBlur = () => root.style.setProperty('--borderFieldPassConfirm', '#c5c5c5');

const inputConfirmPassKeyUp = () => {
  const inputPass = document.querySelector('.signUpForm-pass');
  const inputPassConfirm = document.querySelector('.signUpForm-passConfirm');
  const textErrorPassConfirm = document.querySelector('.signUpForm-passConfirm-p');

  if (inputPassConfirm.value === inputPass.value) {
    textErrorPassConfirm.textContent = '';
    root.style.setProperty('--borderFieldPassConfirm', 'green');
  } else {
    root.style.setProperty('--borderFieldPassConfirm', '#f63737');
    textErrorPassConfirm.textContent = 'Las contraseñas no coinciden';
  }
};
const showConfirmRegister = () => {
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

export {
  inputNameFocusIn, inputNameBlur, inputNameKeyUp, inputMailFocusIn, inputMailBlur, inputIDCarFocusIn, inputModelCarFocusIn, inputModelCarBlur, inputIDCarBlur, inputNumberBlur, inputNumberFocusIn, inputPassFocusIn, inputPassBlur, showPassRegister, inputConfirmPassFocusIn, inputConfirmPassBlur, inputConfirmPassKeyUp, showConfirmRegister
};
*/