export class ReviewUserData {
  ///////////////// V A R I A B L E S /////////////////
  root = document.documentElement.style;
  _expRegLetters = /[a-zA-Z]/;
  _expRegNumbers = /[0-9]/;
  _expRegCharacters = /[¡°!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/¿?]/;

  ///////////////// M E T H O D S /////////////////
  _inputCheckPasswordUserDataFocusIn() {
    document.querySelector('.form-userData-error').textContent = ''
    this.root.setProperty('--borderInput-checkPassword-userData', '#3b59d4')
    this.root.setProperty('--bg-input-checkPassword-userData', 'transparent')
  }

  _inputCheckPasswordUserDataBlur() {
    this.root.setProperty('--borderInput-checkPassword-userData', '#c5c5c5')
  }

  _setInputCheckPasswordUserDataGood() {
    const textError = document.querySelector('.form-userData-error')
    this.root.setProperty('--borderInput-checkPassword-userData', '#5fc81f')
    this.root.setProperty('--bg-input-checkPassword-userData', '#acffa5')

    textError.style.color = '#5fc81f'
    textError.textContent = 'Descargando...'
  }

  _setInputCheckPasswordUserDataWrong() {
    const textError = document.querySelector('.form-userData-error')
    this.root.setProperty('--borderInput-checkPassword-userData', '#ff3737')
    this.root.setProperty('--bg-input-checkPassword-userData', '#ffc5c5')

    textError.style.color = '#f63737'
    textError.textContent = 'La contraseña es incorrecta'
  }

  _reviewInputCheckPasswordUserData() {
    const input = document.querySelector('.form-userData-input')
    const textError = document.querySelector('.form-userData-error')

    if (input.value === '') {
      this.root.setProperty('--borderInput-checkPassword-userData', '#f63737')
      this._setInputCheckPasswordUserDataWrong()
      textError.textContent = 'El campo no puede estar vacio'
    } else return true
  }
}