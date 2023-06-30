import { getAuth, createUserWithEmailAndPassword } from 'firebase/auth'
import { firebaseApp } from '../../credentials'
import { IconText, IconAt, IconHide, IconShow, IconHideConfirm, IconShowConfirm } from '../svg/IconsSignUp'
import { getFirestore, getDoc, setDoc, doc } from "firebase/firestore"
import { ClReviewSignUp } from "../../classes/cl-signUp"

export function SignUp({ setIsRegistering }) {
  const auth = getAuth(firebaseApp)
  const firestore = getFirestore(firebaseApp)
  const cl = new ClReviewSignUp()

  function upperCaseName(str) {
    // pablo  mario   gonzaleZ CAMARENA  
    // Pablo Mario Gonzalez Camarena 
    const stageOne = str.trim().toLowerCase().split(' ').filter(n => n !== '')
    return stageOne.map(n => n[0].toUpperCase() + n.slice(1)).join(' ')
  }

  async function addUser(e) {
    e.preventDefault()
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
      await createUserWithEmailAndPassword(auth, mail, password)
    } else return
    /* ⛔ testing
    console.log(messagePass, pass, "La promesa retorna {} en SignUp.jsx")
    console.log(messagePass, pass, "FirebasePromise: User added")
    console.log(messagePass, pass, "Cargando pantalla de inicio")
    */
  }

  function goSignIn() {
    cl._resetBorders()
    setIsRegistering(false)
  };

  return (
    <section className="container-signUp">
      <form className="signUpForm" onSubmit={(e) => {
        if (cl._reviewFormSignUp(e)) addUser(e)
      }}>
        <h1 className="signUpForm-title">Crea una cuenta <span className="gradient">gratis</span></h1>

        <label className="signUpForm-label" htmlFor="sufn">
          Nombre
          <IconText />
        </label>
        <input
          id="sufn"
          className="signUp-name"
          placeholder="Ingresa tu nombre y apellidos"
          autoComplete="new-password"
          onFocus={() => cl._inputFocusIn('name')}
          onBlur={() => cl._inputBlur('name')}
          onKeyUp={() => cl._inputNameKeyUp()}
        />
        <p className="signUp-name-p"> </p>

        <label className="signUpForm-label" htmlFor="inputMail">
          Correo electrónico
          <IconAt />
        </label>
        <input
          id="inputMail"
          className="signUp-mail"
          placeholder="usuario@dominio.com"
          autoComplete="new-password"
          onFocus={() => cl._inputFocusIn('mail')}
          onBlur={() => cl._inputBlur('mail')}
          onKeyUp={() => cl._inputMailKeyUp()}
        />
        <p className="signUp-mail-p"></p>

        <label className="signUpForm-label" htmlFor="inputPassword">Contraseña</label>
        <section className="wrapper-password">
          <input
            id="inputPassword"
            className="signUp-pass"
            type="password"
            autoComplete="new-password"
            placeholder="Crea una contraseña"
            onFocus={() => cl._inputFocusIn('pass')}
            onBlur={() => cl._inputBlur('pass')}
            onChangeCapture={() => cl._emptyConfirmPass()}
          />
          <button
            className="btn-showPass"
            type="button"
            title="button show"
            onClick={() => cl._showPass('signUp-pass', 'btn-showPass-svg', 'btn-hidePass-svg')}
          >
            <IconShow />
            <IconHide />
          </button>
        </section>
        <p className="signUp-pass-p"></p>

        <label className="signUpForm-label" htmlFor="sufcp">Confirmar contraseña</label>
        <div className="wrapper-password">
          <input
            id="sufcp"
            className="signUp-passConfirm"
            type="password"
            autoComplete="new-password"
            placeholder="Repite la contraseña"
            onFocus={() => cl._inputFocusIn('passConfirm')}
            onBlur={() => cl._inputBlur('passConfirm')}
            onKeyUp={() => cl._inputConfirmPassKeyUp()}
          />
          <button
            className="btn-showPassConfirm"
            title="button show"
            type="button"
            onClick={() => cl._showPass('signUp-passConfirm', 'btn-showPassConfirm-svg', 'btn-hidePassConfirm-svg')}
          >
            <IconShowConfirm />
            <IconHideConfirm />
          </button>
        </div>
        <p className="signUp-passConfirm-p"></p>

        <button
          type="submit"
          className="signUpForm-btnRegister"
          name="button to Register">Registrarme Ahora</button>

        <label className="signUpForm-labelGoSignIn" htmlFor="sufbsi">¿Ya tienes una cuenta?
          <button
            id="sufbsi"
            className="signUpForm-btnGoSignIn"
            onClick={goSignIn}
          > Inicia Sesión
          </button>
        </label>

      </form>
    </section>
  )
};
