import BadCredentials from "../messages/BadCredentials"
import { firebaseApp } from '../../credentials'
import { useState } from "react"
import { getAuth, signInWithEmailAndPassword, signInWithRedirect, GoogleAuthProvider } from 'firebase/auth'

const auth = getAuth(firebaseApp)
const googleProvider = new GoogleAuthProvider()

export function SignIn({ setIsRegistering }) {
  const [isWrong, setIsWrong] = useState(false)
  const [error, setError] = useState('Las credenciales no coinciden')

  async function submitHandler(e) {
    e.preventDefault()
    try {
      const m = e.target.inputMail.value
      const p = e.target.inputPassword.value
      await signInWithEmailAndPassword(auth, m, p)

    } catch (e) {
      // ⛔ error handlers ⛔
      if (e.message === 'Firebase: Error (auth/wrong-password).') {
        setError('Las credenciales no coinciden')
      }
      if (e.message === 'Firebase: Error (auth/invalid-email).') {
        setError('Campo correo es invalido')
      }
      if (e.message === 'Firebase: Error (auth/missing-password).') {
        setError('Campo contraseña es invalido')
      }
      if (e.message === 'Firebase: Access to this account has been temporarily disabled due to many failed login attempts. You can immediately restore it by resetting your password or you can try again later. (auth/too-many-requests).') {
        setError('Cuenta bloqueada')
      }
      // console.log(e.message)
      setIsWrong(true)
      setTimeout(() => {
        setIsWrong(false)
      }, 4000)
    }
  }

  function goRegister(e) {
    e.preventDefault()
    setIsRegistering(true)
  }

  return (
    <section className="container-login">
      {isWrong ? <BadCredentials message={error} /> : null}

      <form className="login" onSubmit={submitHandler}>
        <img className="login-img" src="login.svg" alt="" />
        <h1 className="login-title">Inicia Sesión</h1>

        <label className="login-label" htmlFor="inputMail">Correo electrónico</label>
        <input
          id="inputMail"
          className="login-inputMail"
          type="text"
          placeholder="Ingresa tu correo"
        />

        <label className="login-label" htmlFor="inputPassword">Contraseña</label>
        <input
          id="inputPassword"
          className="login-inputPass"
          type="password"
          autoComplete="new-password"
          placeholder="Ingresa tu contraseña"
        />

        <button className="login-buttonLogin" type="submit">Entrar</button>

        {/* <button
          className="login-buttonLoginGoogle"
          type="button"
          onClick={() => signInWithRedirect(auth, googleProvider)}
        >
        <img src="google.png" height={26} />
        Entrar con Google
       </button> */}

        <label className="login-labelBGR" htmlFor="lbgr">¿No tienes una cuenta? <button onClick={goRegister} className="login-buttonGoRegister" id="lbgr">Registrate</button></label>
      </form>
    </section >
  )
};
