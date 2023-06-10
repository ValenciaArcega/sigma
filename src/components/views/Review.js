class Review {
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

}

export default Review;
