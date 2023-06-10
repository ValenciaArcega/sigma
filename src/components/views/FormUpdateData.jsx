import { firebaseApp } from '../../credentials';
import { IconText, IconHashtag, IconHide, IconShow, IconHideConfirm, IconShowConfirm } from '../svg/IconsSignUp';
import { getFirestore, getDoc, updateDoc, doc } from "firebase/firestore";
import Review from "./Review";

export function FormUpdateData({ userMail }) {
  const classReview = new Review();
  const firestore = getFirestore(firebaseApp);

  function upperCaseName(str) {
    // pablo  mario   gonzaleZ CAMARENA  
    // Pablo Mario Gonzalez Camarena 
    const stageOne = str.trim().toLowerCase().split(' ').filter(n => n !== '');
    return stageOne.map(n => n[0].toUpperCase() + n.slice(1)).join(' ');
  }

  async function addUser(e) {
    e.preventDefault();
    const name = e.target.sufn.value;
    const nameFixed = upperCaseName(name);
    const phone = e.target.inputPhoneNumber.value;
    const idCar = e.target.inputIDCar.value;
    const modelCar = e.target.inputModelCar.value;
    const password = e.target.inputPassword.value;
    const dataUser = [
      {
        name: nameFixed,
        mail: userMail,
        idCar: idCar,
        modelCar: modelCar,
        phone: phone,
        pass: password,
      },
    ];
    const docRef = doc(firestore, `users/${userMail}`);
    const query = await getDoc(docRef);

    if (query.exists()) {
      await updateDoc(docRef, { data: [...dataUser] });
    } else {
      return;
    }
  }

  return (
    <section className="container-signUp">
      <form className="signUpForm" onSubmit={addUser}>

        <h1 className="signUpForm-title">Actualiza tus <span className="gradient">datos</span></h1>

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
        {/* ///////////////////////////////////////////////////// */}
        <label className="signUpForm-label" htmlFor="inputMail">
          Número celular
          <IconHashtag />
        </label>
        <input
          id="inputPhoneNumber"
          className="signUpForm-number"
          placeholder="5540678934"
          autoComplete="new-password"
          onFocus={() => classReview._inputNumberFocusIn()}
          onBlur={() => classReview._inputNumberBlur()}
        />
        {/* ///////////////////////////////////////////////////// */}
        <label className="signUpForm-label" htmlFor="inputIDCar">
          Placa vehicular
          <IconText />
        </label>
        <input
          id="inputIDCar"
          className="signUpForm-IDCar"
          placeholder="EDC-3456"
          autoComplete="new-password"
          onFocus={() => classReview._inputIDCarFocusIn()}
          onBlur={() => classReview._inputIDCarBlur()}
        />
        {/* ///////////////////////////////////////////////////// */}
        <label className="signUpForm-label" htmlFor="inputModelCar">
          Modelo del vehiculo
          <IconText />
        </label>
        <input
          id="inputModelCar"
          className="signUpForm-modelCar"
          placeholder="Chevrolet Aveo 2018"
          autoComplete="new-password"
          onFocus={() => classReview._inputModelCarFocusIn()}
          onBlur={() => classReview._inputModelCarBlur()}
        />
        {/* ///////////////////////////////////////////////////// */}
        <label className="signUpForm-label" htmlFor="inputPassword">Nueva contraseña</label>
        <section className="wrapper-password">
          <input
            id="inputPassword"
            className="signUpForm-pass"
            type="password"
            autoComplete="new-password"
            placeholder="Ingresa una contraseña"
            onBlur={() => classReview._inputPassBlur()}
            onFocus={() => classReview._inputPassFocusIn()}
          />
          <button onClick={() => classReview._showPassRegister()} className="btn-showPass" type="button" title="button show">
            <IconShow />
            <IconHide />
          </button>
        </section>
        {/* ///////////////////////////////////////////////////// */}
        <label className="signUpForm-label" htmlFor="sufcp">Confirmar nueva contraseña</label>
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
        {/* ///////////////////////////////////////////////////// */}
        <button type="submit"
          className="signUpForm-btnRegister"
          name="button to Register">Actualizar Datos</button>
      </form>
    </section>
  );
}