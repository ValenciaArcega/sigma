/* 👉 Version on functional code
let root = document.querySelector(':root');

////////////////////////////////////////////////////////////
// input name
const inputNameFocusIn = () => root.style.setProperty('--borderInput-name', '#3b59d4');
const inputNameBlur = () => root.style.setProperty('--borderInput-name', '#c5c5c5');
const inputNameKeyUp = () => {
  let root = document.querySelector(':root');
  const inputName = document.querySelector('.signUp-name');
  const textErrorName = document.querySelector('.signUp-name-p');

  for (let i = 0; i < inputName.value.length; i++) {
    root.style.setProperty('--borderInput-name', '#2e466f');
    if (inputName.value[i].match(/^[0-9]+$/)) {
      textErrorName.textContent = 'Recuerda, caracteres de tipo texto';
      root.style.setProperty('--borderInput-name', '#f63737');
    } else {
      textErrorName.textContent = '';
    }
  }
  if (inputName.value === '') {
    textErrorName.textContent = '';
    root.style.setProperty('--borderInput-name', '#2e466f');
  }
};
////////////////////////////////////////////////////////////
// input mail
const inputMailFocusIn = () => root.style.setProperty('--borderInput-mail', '#3b59d4');
const inputMailBlur = () => root.style.setProperty('--borderInput-mail', '#c5c5c5');
////////////////////////////////////////////////////////////
// input number
const inputNumberFocusIn = () => root.style.setProperty('--borderInput-number', '#3b59d4');
const inputNumberBlur = () => root.style.setProperty('--borderInput-number', '#c5c5c5');
////////////////////////////////////////////////////////////
// input IDCar
const inputIDCarFocusIn = () => root.style.setProperty('--borderInput-plates', '#3b59d4');
const inputIDCarBlur = () => root.style.setProperty('--borderInput-plates', '#c5c5c5');
////////////////////////////////////////////////////////////
// input model car
const inputModelCarFocusIn = () => root.style.setProperty('--borderInput-modelCar', '#3b59d4');
const inputModelCarBlur = () => root.style.setProperty('--borderInput-modelCar', '#c5c5c5');
////////////////////////////////////////////////////////////
// input password
const inputPassFocusIn = () => root.style.setProperty('--borderInput-pass', '#3b59d4');
const inputPassBlur = () => root.style.setProperty('--borderInput-pass', '#c5c5c5');
const showPassRegister = () => {
  const inputPass = document.querySelector('.signUp-pass');
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
const inputConfirmPassFocusIn = () => root.style.setProperty('--borderInput-passConfirm', '#3b59d4');
const inputConfirmPassBlur = () => root.style.setProperty('--borderInput-passConfirm', '#c5c5c5');

const inputConfirmPassKeyUp = () => {
  const inputPass = document.querySelector('.signUp-pass');
  const inputPassConfirm = document.querySelector('.signUp-passConfirm');
  const textErrorPassConfirm = document.querySelector('.signUp-passConfirm-p');

  if (inputPassConfirm.value === inputPass.value) {
    textErrorPassConfirm.textContent = '';
    root.style.setProperty('--borderInput-passConfirm', 'green');
  } else {
    root.style.setProperty('--borderInput-passConfirm', '#f63737');
    textErrorPassConfirm.textContent = 'Las contraseñas no coinciden';
  }
};
const showConfirmRegister = () => {
  const inputPassConfirm = document.querySelector('.signUp-passConfirm');
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
const inputNameFocusIn = () => root.style.setProperty('--borderInput-name', '#3b59d4');
const inputNameBlur = () => root.style.setProperty('--borderInput-name', '#c5c5c5');
const inputNameKeyUp = () => {
  let root = document.querySelector(':root');
  const inputName = document.querySelector('.signUp-name');
  const textErrorName = document.querySelector('.signUp-name-p');

  for (let i = 0; i < inputName.value.length; i++) {
    root.style.setProperty('--borderInput-name', '#2e466f');
    if (inputName.value[i].match(/^[0-9]+$/)) {
      textErrorName.textContent = 'Recuerda, caracteres de tipo texto';
      root.style.setProperty('--borderInput-name', '#f63737');
    } else {
      textErrorName.textContent = '';
    }
  }
  if (inputName.value === '') {
    textErrorName.textContent = '';
    root.style.setProperty('--borderInput-name', '#2e466f');
  }
};
////////////////////////////////////////////////////////////
// input mail
const inputMailFocusIn = () => root.style.setProperty('--borderInput-mail', '#3b59d4');
const inputMailBlur = () => root.style.setProperty('--borderInput-mail', '#c5c5c5');
////////////////////////////////////////////////////////////
// input number
const inputNumberFocusIn = () => root.style.setProperty('--borderInput-number', '#3b59d4');
const inputNumberBlur = () => root.style.setProperty('--borderInput-number', '#c5c5c5');
////////////////////////////////////////////////////////////
// input IDCar
const inputIDCarFocusIn = () => root.style.setProperty('--borderInput-plates', '#3b59d4');
const inputIDCarBlur = () => root.style.setProperty('--borderInput-plates', '#c5c5c5');
////////////////////////////////////////////////////////////
// input model car
const inputModelCarFocusIn = () => root.style.setProperty('--borderInput-modelCar', '#3b59d4');
const inputModelCarBlur = () => root.style.setProperty('--borderInput-modelCar', '#c5c5c5');
////////////////////////////////////////////////////////////
// input password
const inputPassFocusIn = () => root.style.setProperty('--borderInput-pass', '#3b59d4');
const inputPassBlur = () => root.style.setProperty('--borderInput-pass', '#c5c5c5');
const showPassRegister = () => {
  const inputPass = document.querySelector('.signUp-pass');
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
const inputConfirmPassFocusIn = () => root.style.setProperty('--borderInput-passConfirm', '#3b59d4');
const inputConfirmPassBlur = () => root.style.setProperty('--borderInput-passConfirm', '#c5c5c5');

const inputConfirmPassKeyUp = () => {
  const inputPass = document.querySelector('.signUp-pass');
  const inputPassConfirm = document.querySelector('.signUp-passConfirm');
  const textErrorPassConfirm = document.querySelector('.signUp-passConfirm-p');

  if (inputPassConfirm.value === inputPass.value) {
    textErrorPassConfirm.textContent = '';
    root.style.setProperty('--borderInput-passConfirm', 'green');
  } else {
    root.style.setProperty('--borderInput-passConfirm', '#f63737');
    textErrorPassConfirm.textContent = 'Las contraseñas no coinciden';
  }
};
const showConfirmRegister = () => {
  const inputPassConfirm = document.querySelector('.signUp-passConfirm');
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