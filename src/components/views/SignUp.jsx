import reviewRegister from "../../functions/review-userRegistration"
import { getAuth, createUserWithEmailAndPassword } from 'firebase/auth'
import { firebaseApp } from '../../credentials'
import { IconText, IconHashtag, IconHide, IconShow, IconHideConfirm, IconShowConfirm } from '../svg/IconsSignUp'
import { getFirestore, getDoc, setDoc, doc } from "firebase/firestore"
import Review from "../../functions/Review"

export function SignUp({ setIsRegistering }) {
  const classReview = new Review()
  const auth = getAuth(firebaseApp)
  const firestore = getFirestore(firebaseApp)

  function upperCaseName(str) {
    // pablo  mario   gonzaleZ CAMARENA  
    // Pablo Mario Gonzalez Camarena 
    const stageOne = str.trim().toLowerCase().split(' ').filter(n => n !== '')
    return stageOne.map(n => n[0].toUpperCase() + n.slice(1)).join(' ')
  }

  async function addUser(e) {
    e.preventDefault()
    reviewRegister()
    const name = e.target.sufn.value
    const nameFixed = upperCaseName(name)
    const mail = e.target.inputMail.value
    const password = e.target.inputPassword.value
    const dataUser = [
      {
        name: nameFixed,
        mail: mail,
        pass: password,
      },
    ]
    const docRef = doc(firestore, `users/${mail}`)
    const query = await getDoc(docRef)

    if (!query.exists()) {
      await setDoc(docRef, { data: [...dataUser] })
      if (reviewRegister()) await createUserWithEmailAndPassword(auth, mail, password)
    } else {
      return
    }
  }

  function resetBorders() {
    const root = document.querySelector(':root')
    root.style.setProperty('--borderFieldName', '#c5c5c5')
    root.style.setProperty('--borderFieldID', '#c5c5c5')
    root.style.setProperty('--borderFieldPassConfirm', '#c5c5c5')
  };

  function goSignIn() {
    resetBorders()
    setIsRegistering(false)
  };

  return (
    <section className="container-signUp">
      <form className="signUpForm">
        {/* <form className="signUpForm" onSubmit={addUser}> */}
        <h1 className="signUpForm-title">Crea una cuenta <span className="gradient">gratis</span></h1>

        <label className="signUpForm-label" htmlFor="sufn">
          Nombre
          <IconText />
        </label>
        <input
          id="sufn"
          className="signUpForm-name"
          placeholder="Ingresa tu nombre y apellidos"
          autoComplete="new-password"
          onFocus={() => classReview._inputNameFocusIn()}
          onBlur={() => classReview._inputNameBlur()}
          onKeyUp={() => classReview._inputNameKeyUp()}
        />
        <p className="signUpForm-name-p"> </p>

        <label className="signUpForm-label" htmlFor="inputMail">
          Correo electrónico
          <IconHashtag />
        </label>
        <input
          id="inputMail"
          className="signUpForm-mail"
          placeholder="usuario@dominio.com"
          autoComplete="new-password"
          onFocus={() => classReview._inputMailFocusIn()}
          onBlur={() => classReview._inputMailBlur()}
        // onChangeCapture={() => document.querySelector('.signUpForm-mail-p').textContent = ''}
        />
        <p className="signUpForm-mail-p"></p>

        <label className="signUpForm-label" htmlFor="inputPassword">Contraseña</label>
        <section className="wrapper-password">
          <input
            id="inputPassword"
            className="signUpForm-pass"
            type="password"
            autoComplete="new-password"
            placeholder="Crea una contraseña"
            onBlur={() => classReview._inputPassBlur()}
            onFocus={() => classReview._inputPassFocusIn()}
          />
          <button onClick={() => classReview._showPassRegister()} className="btn-showPass" type="button" title="button show">
            <IconShow />
            <IconHide />
          </button>
        </section>

        <section className="wrapper-textAdvicePass">
          <p className="signUpForm-pass-p">Una contraseña segura</p>
          <ul className="signUpForm-pass-ul">
            <li>Tiene al menos 8 caracteres</li>
            <li>Combinación de letras, números, etc.</li>
          </ul>
        </section>

        <label className="signUpForm-label" htmlFor="sufcp">Confirmar contraseña</label>
        <div className="wrapper-password">
          <input
            id="sufcp"
            className="signUpForm-passConfirm"
            type="password"
            autoComplete="new-password"
            placeholder="Repite la contraseña"
            onKeyUp={() => classReview._inputConfirmPassKeyUp()}
            onFocus={() => classReview._inputConfirmPassFocusIn()}
            onBlur={() => classReview._inputConfirmPassBlur()}
          />
          <button onClick={() => classReview._showConfirmRegister()} className="btn-showPassConfirm" type="button" title="button show">
            <IconShowConfirm />
            <IconHideConfirm />
          </button>
        </div>
        <p className="signUpForm-passConfirm-p"></p>

        <button
          type="button"
          onClick={() => { if (classReview._print()) console.log('Yes') }}
          className="signUpForm-btnRegister"
          name="button to Register">Registrarme Ahora</button>

        <label className="signUpForm-labelGoSignIn" htmlFor="sufbsi">¿Ya tienes una cuenta?
          <button id="sufbsi" className="signUpForm-btnGoSignIn" onClick={goSignIn}> Inicia Sesión</button>
        </label>

      </form>
    </section>
  )
};
