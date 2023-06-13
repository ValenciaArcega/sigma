const reviewRegister = () => {
  let root = document.querySelector(':root');
  let reviewed = false;
  let resultName = false;
  let resultID = false;
  let resultPass = false;
  // inputs
  const inputName = document.querySelector('.signUpForm-name');
  const inputID = document.querySelector('.signUpForm-mail');
  const inputPass = document.querySelector('.signUpForm-pass');
  const inputPassConfirm = document.querySelector('.signUpForm-passConfirm');
  // error
  const textErrorName = document.querySelector('.signUpForm-name-p');
  const textErrorID = document.querySelector('.signUpForm-mail-p');
  const textErrorPassConfirm = document.querySelector('.signUpForm-passConfirm-p');

  /////////////////////////////////////////////////////////
  if (inputName.value === '') {
    root.style.setProperty('--borderFieldName', '#f63737');
    textErrorName.textContent = 'El campo es obligatorio';
  } else if (inputName.value.match(/[0-9]/)) {
    root.style.setProperty('--borderFieldName', '#f63737');
    textErrorName.textContent = 'Solo caracteres tipo texto';
  } else {
    resultName = true;
  }
  /////////////////////////////////////////////////////////
  if (inputID.value === '') {
    root.style.setProperty('--borderFieldID', '#f63737');
    textErrorID.textContent = 'El campo es obligatorio';
  } else {
    resultID = true;
  }
  /////////////////////////////////////////////////////////
  if (inputPassConfirm.value === inputPass.value) {
    resultPass = true;
  } else {
    root.style.setProperty('--borderFieldPassConfirm', '#f63737');
    textErrorPassConfirm.textContent = 'Las contraseñas no coinciden';
  }
  /////////////////////////////////////////////////////////
  if (resultName && resultID && resultPass) {
    return reviewed = true;
  }
  return reviewed;
};

export default reviewRegister;