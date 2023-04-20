import { getAuth, signOut } from 'firebase/auth';
import { firebaseApp } from "../../credentials";
import { Link } from "react-router-dom";
import { makeLight } from '../../functions/switch-appearance';

const auth = getAuth(firebaseApp);

const Profile = () => {

  return (
    <section className="container-profile">
      <Link to='/sigfea/profile/formDates' className="profile-btn">Registrar mis datos</Link>

      <Link to='/sigfea/profile/formPost' className="profile-btn">Vender mi automóvil</Link>

      <Link
        className="profile-btn profile-btnRed"
        to='/sigfea/'
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

export default Profile;