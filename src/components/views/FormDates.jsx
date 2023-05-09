import React, { useState } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { firebaseApp, db } from '../../credentials';
import { getAuth } from 'firebase/auth';
import { collection, doc, setDoc } from "firebase/firestore";


export function FormDates() {
  const auth = getAuth(firebaseApp);
  const [dates, setDates] = useState({
    verificacion: null,
    tenencia: null,
    mantenimiento: null,
    seguro: null,
    licencia: null
  });

  const changeDate = (name, value) => setDates({ ...dates, [name]: value });
  async function addData(e) {
    try {
      e.preventDefault();
      const user = auth.currentUser;
      const docRef = doc(collection(db, 'dates'), user.email);
      await setDoc(docRef, {
        verificacion: dates.verificacion,
        tenencia: dates.tenencia,
        mantenimiento: dates.mantenimiento,
        seguro: dates.seguro,
        licencia: dates.licencia,
      });
      alert('Datos registrados con exito ✅');
      // console.log("Document written with ID: ", docRef.id);
    } catch (e) {
      console.error("Error: ", e);
    }
  };

  return (
    <section className="container-formDates">
      <form className="formDates">
        <h2>Registra tus fechas</h2>

        <div className="wrapperInputDates">
          <p className="formDates-label">Ultima fecha de verificación</p>
          <DatePicker
            dateFormat="dd/MM/yyyy" showWeekNumbers className="formDates-input" selected={dates.verificacion} placeholderText="Selecciona una fecha" onChange={d => changeDate("verificacion", d)} />
        </div>

        <div className="wrapperInputDates">
          <p className="formDates-label">Ultimo pago de tenencia</p>
          <DatePicker
            dateFormat="dd/MM/yyyy" showWeekNumbers className="formDates-input" selected={dates.tenencia} placeholderText="Selecciona una fecha" onChange={d => changeDate("tenencia", d)} />
        </div>

        <div className="wrapperInputDates">
          <p className="formDates-label">Ultimo mantenimiento</p>
          <DatePicker
            dateFormat="dd/MM/yyyy" showWeekNumbers className="formDates-input" selected={dates.mantenimiento} placeholderText="Selecciona una fecha" onChange={d => changeDate("mantenimiento", d)} />
        </div>

        <div className="wrapperInputDates">
          <p className="formDates-label">Ultimo pago de seguro</p>
          <DatePicker
            dateFormat="dd/MM/yyyy" showWeekNumbers className="formDates-input" selected={dates.seguro} placeholderText="Selecciona una fecha" onChange={d => changeDate("seguro", d)} />
        </div>

        <div className="wrapperInputDates">
          <p className="formDates-label">Ultima renovación de licencia</p>
          <DatePicker
            dateFormat="dd/MM/yyyy" showWeekNumbers className="formDates-input" selected={dates.licencia} placeholderText="Selecciona una fecha" onChange={d => changeDate("licencia", d)} />
        </div>

        <button onClick={addData} className="formDates-btn" type="button">Cargar Fechas</button>

      </form>
    </section>
  );
};
