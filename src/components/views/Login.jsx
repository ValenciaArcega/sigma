const Login = () => {
  return (
    <section className="container-login">
      <form className="login">
        <img className="login-img" src="./login.svg" alt="" />
        <h1 className="login-title">Inicia Sesión</h1>

        <label className="login-label" htmlFor="inputMail">Correo electrónico</label>
        <input autoComplete="new-password" className="login-inputMail" type="text" id="inputMail" />

        <label className="login-label" htmlFor="inputPass">Contraseña</label>
        <input className="login-inputPass" type="password" id="inputPass" />

        <button className="login-buttonLogin">Entrar</button>
      </form>
    </section>
  );
};

export default Login;