import { useEffect, useState } from "react"
import { getFirestore, doc, getDoc } from "firebase/firestore"
import { firebaseApp } from "../../credentials"
import { Loader } from '../interface/Loader'

export function UserData({ userMail }) {
  const [userData, setUserData] = useState({})
  const [dataLoaded, setDataLoaded] = useState(true)
  const firestore = getFirestore(firebaseApp)

  async function getUserName() {
    const docRef = doc(firestore, `users/${userMail}`)
    const query = await getDoc(docRef)
    if (query.exists()) {
      const infoDoc = query.data()
      const [data] = infoDoc.data
      setUserData(data)
      setDataLoaded(true)
    }
    /*
   console.log(messageFail, fail, "La promesa retorna null en UserData.jsx")
   console.log(messageFail, fail, "FirebaseError: Fetching data failed")
   console.log(messageFail, fail, "Error al cargar los datos")
   */
  }

  useEffect(() => {
    getUserName()
  }, [])

  return (
    dataLoaded
      ?
      <section className="container-userData">
        <main className="form-userData">
          <h1 className="form-userData-h1">Mi información personal</h1>

          <h4>Nombre</h4>
          <p>{userData.name}</p>

          <h4>Correo</h4>
          <p>{userMail}</p>

          <h4>Número telefónico</h4>
          <p>{userData.phone}</p>

          <h4>Número de placas</h4>
          <p>{userData.idCar}</p>

          <h4>Modelo de automóvil</h4>
          <p>{userData.modelCar}</p>
        </main>
      </section>
      : <Loader />
  )
}
