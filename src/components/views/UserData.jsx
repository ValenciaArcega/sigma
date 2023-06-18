import { useEffect, useState } from "react"
import { getFirestore, doc, getDoc } from "firebase/firestore"
import { firebaseApp } from "../../credentials"
import Review from "../../functions/Review"
import { Loader } from '../loader/Loader'

export function UserData({ userMail }) {
  const classReview = new Review()
  const firestore = getFirestore(firebaseApp)
  const [userData, setUserData] = useState({})
  const [dataLoaded, setDataLoaded] = useState(false)

  async function getUserName() {
    const docRef = doc(firestore, `users/${userMail}`)
    const query = await getDoc(docRef)
    if (query.exists()) {
      const infoDoc = query.data()
      const [data] = infoDoc.data
      setUserData(data)
      setDataLoaded(true)
    }
  }

  function downloadDoc(e) {
    e.preventDefault()

    if (classReview._reviewInputCheckPasswordUserData()) {
      classReview._setInputCheckPasswordUserDataWrong()
      if (inputPassword.value === userData.pass) {
        classReview._setInputCheckPasswordUserDataGood()
      } else classReview._setInputCheckPasswordUserDataWrong()
    }
  }

  useEffect(() => {
    getUserName()
  }, [])

  return (
    dataLoaded
      ?
      <section className="container-userData">
        <form className="form-userData" onSubmit={downloadDoc}>
          <h1 className="form-userData-h1">Mi información personal</h1>

          <h4 className="form-userData-h4">Nombre</h4>
          <p>{userData.name}</p>

          <h4 className="form-userData-h4">Correo</h4>
          <p>{userMail}</p>

          <h4 className="form-userData-h4">Número telefónico</h4>
          <p>{userData.phone}</p>

          <h4 className="form-userData-h4">Número de placas</h4>
          <p>{userData.idCar}</p>

          <h4 className="form-userData-h4">Modelo de automóvil</h4>
          <p>{userData.modelCar}</p>


          <h3 className="form-userData-h3">Verifica tu identidad</h3>
          <label className="form-userData-label" htmlFor="inputPassword">Ingresa tu contraseña</label>
          <input
            id="inputPassword"
            className="form-userData-input"
            type="password"
            placeholder="La que usaste para registrarte"
            onFocus={() => classReview._inputCheckPasswordUserDataFocusIn()}
            onBlur={() => classReview._inputCheckPasswordUserDataBlur()}
          />
          <p className="form-userData-error"> </p>

          <button className="btn-bubble btn-printDoc" type="submit">Descargar PDF</button>
        </form>
      </section>
      : <Loader />
  )
};
