import { getFirestore, getDoc, updateDoc, doc } from "firebase/firestore"
import { ClReviewUpdateData } from "../../classes/cl-updateData"
import { DataUpdated } from "../messages/DataUpdated"
import { firebaseApp } from '../../credentials'
import { useState } from "react"

export function UpdateData({ userMail }) {
  const firestore = getFirestore(firebaseApp)
  const cl = new ClReviewUpdateData()
  const [gotEdit, setGotEdit] = useState(false)


  function upperCaseName(str) {
    // pablo  mario   gonzaleZ CAMARENA  
    // Pablo Mario Gonzalez Camarena 
    const stageOne = str.trim().toLowerCase().split(' ').filter(n => n !== '')
    return stageOne.map(n => n[0].toUpperCase() + n.slice(1)).join(' ')
  }

  async function addUser(e) {
    e.preventDefault()
    const name = e.target.sufn.value
    const nameFixed = upperCaseName(name)
    const phone = e.target.inputPhoneNumber.value
    const plates = e.target.inputIDCar.value
    const modelCar = e.target.inputModelCar.value
    const dataUser = [
      {
        name: nameFixed,
        mail: userMail,
        idCar: plates,
        modelCar: modelCar,
        phone: phone,
      },
    ]
    const docRef = doc(firestore, `users/${userMail}`)
    const query = await getDoc(docRef)

    if (query.exists()) {
      await updateDoc(docRef, { data: [...dataUser] })
      setGotEdit(true)
      setTimeout(() => setGotEdit(false), 3000)
    } else return
    /*
    console.log(messagePass, pass, "La promesa retorna [{..dataUser}] en UpdateData.jsx")
    cl._reviewFormUpdateData(e)
    console.log(messagePass, pass, "FirebasePromise: User data modified")
    console.log(messagePass, pass, "Datos actualizados en UpdateData.jsx")
    */
  }

  return (
    <section className="container-updateData">

      {gotEdit ? <DataUpdated /> : null}

      <form className="updateData" onSubmit={(e) => {
        if (cl._reviewFormUpdateData(e)) addUser(e)
      }}>

        <h1 className="updateData-title">Actualiza tus <span className="gradient">datos</span></h1>

        <label>Nombre</label>
        <input
          id="sufn"
          className="updateData-name"
          placeholder="Ej. Sanchez Cabrera Ignacio"
          autoComplete="new-password"
          onFocus={() => cl._inputFocusIn('name')}
          onBlur={() => cl._inputBlur('name')}
          onKeyUp={() => cl._inputNameKeyUp()}
        />
        <p className="updateData-name-p"> </p>

        <label>Número celular</label>
        <input
          id="inputPhoneNumber"
          className="updateData-number"
          // type="number"
          // pattern="[0-9]*"
          // inputMode="numeric"
          placeholder="5540678934"
          autoComplete="new-password"
          onFocus={() => cl._inputFocusIn('number')}
          onBlur={() => cl._inputBlur('number')}
          onKeyUp={() => cl._inputNumberKeyUp()}
        />
        <p className="updateData-number-p"> </p>

        <label>Placa vehicular</label>
        <input
          id="inputIDCar"
          className="updateData-plates"
          placeholder="EDC-3456"
          autoComplete="new-password"
          onFocus={() => cl._inputFocusIn('plates')}
          onBlur={() => cl._inputBlur('plates')}
        />
        <p className="updateData-plates-p"> </p>

        <label>Modelo del vehiculo</label>
        <input
          id="inputModelCar"
          className="updateData-modelCar"
          placeholder="Chevrolet Aveo 2018"
          autoComplete="new-password"
          onFocus={() => cl._inputFocusIn('modelCar')}
          onBlur={() => cl._inputBlur('modelCar')}
        />
        <p className="updateData-modelCar-p"> </p>

        <button
          type="submit"
          className="signUpForm-btnRegister"
          name="button to Register">Actualizar Datos</button>
      </form>
    </section>
  )
}