import { getAuth, signOut } from 'firebase/auth'
import { firebaseApp } from "../../credentials"
import { Link } from "react-router-dom"
import AppearanceCl from "../../classes/cl-appearance"

export function Profile() {
  const auth = getAuth(firebaseApp)
  const classAppearance = new AppearanceCl()

  return (
    <section className="container-profile">
      <Link
        to='/sigma/profile/formUpdateData/'
        className="profile-btn">
        Editar Mis datos
      </Link>

      <Link
        to='/sigma/profile/userData/'
        className="profile-btn">
        Consultar Mis Datos
      </Link>

      <Link
        to='/sigma/'
        className="profile-btn profile-btnRed"
        onClick={() => {
          classAppearance._makeLight()
          signOut(auth)
        }}>
        Cerrar Sesión
      </Link>

      <button className="profile-btn profile-btnRed"
      /*
      console.log(messagePass, pass, "FirebasePromise: User data and sign auth has been deleted")
      console.log(messagePass, pass, "Cuenta eliminada")
      */
      >Borrar mi cuenta</button>
    </section>
  )
};
