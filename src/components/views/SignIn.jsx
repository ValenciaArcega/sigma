import BadCredentials from "../messages/BadCredentials";
import { firebaseApp } from '../../credentials';
import { useState } from "react";
import { getAuth, signInWithEmailAndPassword, signInWithRedirect, GoogleAuthProvider } from 'firebase/auth';

const auth = getAuth(firebaseApp);
const googleProvider = new GoogleAuthProvider();

export function SignIn({ setIsRegistering }) {
  const [isWrong, setIsWrong] = useState(false);

  async function submitHandler(e) {
    e.preventDefault();
    try {
      const m = e.target.inputMail.value;
      const p = e.target.inputPassword.value;
      await signInWithEmailAndPassword(auth, m, p);
    } catch (e) {
      setIsWrong(true);
      setTimeout(() => {
        setIsWrong(false);
      }, 4000);
    }
  }
  const goRegister = (e) => {
    e.preventDefault();
    setIsRegistering(true);
  };

  return (
    <section className="container-login">
      {isWrong ? <BadCredentials /> : null}

      <form className="login" onSubmit={submitHandler}>
        <img className="login-img" src="login.svg" alt="" />
        <h1 className="login-title">Inicia Sesión</h1>

        <label className="login-label" htmlFor="inputMail">Correo electrónico</label>
        <input
          id="inputMail"
          className="login-inputMail"
          type="text"
          autoComplete="new-password"
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

        <button
          className="login-buttonLoginGoogle"
          type="button"
          onClick={() => signInWithRedirect(auth, googleProvider)}
        >
          <img src="google.png" height={26} />
          Entrar con Google
        </button>

        <label className="login-labelBGR" htmlFor="lbgr">¿No tienes una cuenta? <button onClick={goRegister} className="login-buttonGoRegister" id="lbgr">Registrate</button></label>
      </form>
    </section>
  );
};
