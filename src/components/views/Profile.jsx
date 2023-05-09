import { getAuth, signOut } from 'firebase/auth';
import { firebaseApp } from "../../credentials";
import { Link } from "react-router-dom";
import { makeLight } from '../../functions/switch-appearance';


export function Profile() {
  const auth = getAuth(firebaseApp);

  return (
    <section className="container-profile">
      <Link to='/sigma/profile/formDates' className="profile-btn">Registrar mis datos</Link>

      <Link to='/sigma/profile/formPost' className="profile-btn">Vender mi automóvil</Link>

      <Link
        className="profile-btn profile-btnRed"
        to='/sigma/'
        onClick={() => {
          makeLight();
          signOut(auth);
        }}>
        Cerrar Sesión
      </Link>

      <button className="profile-btn profile-btnRed">Borrar mi cuenta</button>
    </section>
  );
};
