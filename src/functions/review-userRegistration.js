const reviewRegister = () => {
  let root = document.querySelector(':root')
  let reviewed = false
  let resultName = false
  let resultID = false
  let resultPass = false
  // inputs
  const inputName = document.querySelector('.signUp-name')
  const inputID = document.querySelector('.signUp-mail')
  const inputPass = document.querySelector('.signUp-pass')
  const inputPassConfirm = document.querySelector('.signUp-passConfirm')
  // error
  const textErrorName = document.querySelector('.signUp-name-p')
  const textErrorID = document.querySelector('.signUp-mail-p')
  const textErrorPassConfirm = document.querySelector('.signUp-passConfirm-p')

  /////////////////////////////////////////////////////////
  if (inputName.value === '') {
    root.style.setProperty('--borderInput-name', '#f63737')
    textErrorName.textContent = 'El campo es obligatorio'
  } else if (inputName.value.match(/[0-9]/)) {
    root.style.setProperty('--borderInput-name', '#f63737')
    textErrorName.textContent = 'Solo caracteres tipo texto'
  } else {
    resultName = true
  }
  /////////////////////////////////////////////////////////
  if (inputID.value === '') {
    root.style.setProperty('--borderInput-mail', '#f63737')
    textErrorID.textContent = 'El campo es obligatorio'
  } else {
    resultID = true
  }
  /////////////////////////////////////////////////////////
  if (inputPassConfirm.value === inputPass.value) {
    resultPass = true
  } else {
    root.style.setProperty('--borderInput-passConfirm', '#f63737')
    textErrorPassConfirm.textContent = 'Las contraseñas no coinciden'
  }
  /////////////////////////////////////////////////////////
  if (resultName && resultID && resultPass) {
    return reviewed = true
  }
  return reviewed
}

export default reviewRegister