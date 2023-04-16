import { IconText, IconHide, IconShow, IconHideConfirm, IconShowConfirm } from '../svg/IconsSignUp';
import { inputNameKeyUp, inputNameFocusIn, inputNameBlur, inputNumberFocusIn, inputNumberBlur, inputPassFocusIn, inputPassBlur, showPassRegister, inputConfirmPassFocusIn, inputConfirmPassBlur, inputConfirmPassKeyUp, showConfirmRegister } from "../../functions/review-inputRegister";
import reviewRegister from "../../functions/review-userRegistration";

const SignUp = ({ setIsRegistering }) => {

  const goSignIn = (e) => {
    e.preventDefault();
    setIsRegistering(false);
  };

  return (
    <section className="container-signUp">

      <form className="signUpForm">

        <h1 className="signUpForm-title">Crea una cuenta <span className="gradient">gratis</span></h1>

        <label className="signUpForm-label" htmlFor="sufn">Nombre<IconText /></label>
        <input
          id="sufn"
          className="signUpForm-name"
          placeholder="Ingresa tu nombre y apellidos"
          autoComplete="new-password"
          onFocus={inputNameFocusIn}
          onBlur={inputNameBlur}
          onKeyUp={inputNameKeyUp}
        />
        <p className="signUpForm-name-p"> </p>

        <label className="signUpForm-label" htmlFor="sufc">Correo electrónico</label>
        <input
          id="sufc"
          className="signUpForm-mail"
          placeholder="usuario@dominio.com"
          autoComplete="new-password"
          onFocus={inputNumberFocusIn}
          onBlur={inputNumberBlur}
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
            onBlur={inputPassBlur}
            onFocus={inputPassFocusIn}
          />
          <button onClick={showPassRegister} className="btn-showPass" type="button" title="button show">
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
            onKeyUp={inputConfirmPassKeyUp}
            onFocus={inputConfirmPassFocusIn}
            onBlur={inputConfirmPassBlur}
          />
          <button onClick={showConfirmRegister} className="btn-showPassConfirm" type="button" title="button show">
            <IconShowConfirm />
            <IconHideConfirm />
          </button>
        </div>
        <p className="signUpForm-passConfirm-p"></p>

        <button type="submit" onClick={goSignIn} className="signUpForm-btnRegister" name="button to Register">Registrarme Ahora</button>

        <label htmlFor="">¿Ya tienes una cuenta?
          <button>Iniciar Sesión</button></label>
      </form>
    </section>
  );
};

export default SignUp;