import { getAuth, signOut } from 'firebase/auth';
import { firebaseApp } from "../../database/credentials";
import { Link } from "react-router-dom";
import { makeLight } from '../../functions/switch-appearance';

const auth = getAuth(firebaseApp);

const Profile = () => {

  return (
    <section className="container-profile">
      <Link onClick={() => {
        makeLight();
        signOut(auth);
      }} to='/sigfea/'>
        Cerrar Sesión
      </Link>
    </section>
  );
};

export default Profile;