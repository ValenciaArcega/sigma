import BadCredentials from "../messages/BadCredentials";
import { useState } from "react";

const SignIn = ({ setIsRegistering }) => {
  const [isWrong, setIsWrong] = useState(true);

  const goRegister = (e) => {
    e.preventDefault();
    setIsRegistering(true);
  };

  return (
    <section className="container-login">
      {isWrong ? <BadCredentials /> : null}

      <form className="login">
        <img className="login-img" src="./login.svg" alt="" />
        <h1 className="login-title">Inicia Sesión</h1>

        <label className="login-label" htmlFor="inputMail">Correo electrónico</label>
        <input autoComplete="new-password" className="login-inputMail" type="text" id="inputMail" placeholder="Ingresa tu correo" />

        <label className="login-label" htmlFor="inputPass">Contraseña</label>
        <input className="login-inputPass" autoComplete="new-password" type="password" id="inputPass" placeholder="Ingresa tu contraseña" />

        <button className="login-buttonLogin" type="submit">Entrar</button>
        <label className="login-labelBGR" htmlFor="lbgr">¿No tienes una cuenta? <button onClick={goRegister} className="login-buttonGoRegister" id="lbgr">Registrate</button></label>
      </form>
    </section>
  );
};

export default SignIn;