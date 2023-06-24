import { useEffect, useState } from "react"
import { getFirestore, doc, getDoc } from "firebase/firestore"
import { firebaseApp } from "../../credentials"
import { ReviewUserData } from "../../functions/review/cl-userData"
import { Loader } from '../interface/Loader'

export function UserData({ userMail }) {
  const [userData, setUserData] = useState({})
  const [dataLoaded, setDataLoaded] = useState(false)
  const firestore = getFirestore(firebaseApp)
  const cl = new ReviewUserData()

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

    if (cl._reviewInputCheckPasswordUserData()) {
      cl._setInputCheckPasswordUserDataWrong()
      if (inputPassword.value === userData.pass) {
        cl._setInputCheckPasswordUserDataGood()
      } else cl._setInputCheckPasswordUserDataWrong()
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
            onFocus={() => cl._inputCheckPasswordUserDataFocusIn()}
            onBlur={() => cl._inputCheckPasswordUserDataBlur()}
          />
          <p className="form-userData-error"> </p>

          <button className="btn-bubble btn-printDoc" type="submit">Descargar PDF</button>
        </form>
      </section>
      : <Loader />
  )
};
