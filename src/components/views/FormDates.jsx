import React, { useState } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

const FormDates = () => {
  const [dates, setDates] = useState({
    verificacion: null,
    tenencia: null,
    mantenimiento: null,
    seguro: null,
    licencia: null
  });

  const changeDate = (name, value) => setDates({ ...dates, [name]: value });

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

        <button className="formDates-btn">Cargar Fechas</button>

      </form>
    </section>
  );
};

export default FormDates;