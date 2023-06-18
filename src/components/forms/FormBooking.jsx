import Review from "../../functions/Review"
import { getFirestore, doc, getDoc } from "firebase/firestore"
import { firebaseApp } from "../../credentials"
import { useEffect, useState } from "react"
import { useNavigate, useLocation } from "react-router-dom"

export function FormBooking({ userMail }) {
  let dataForTicket
  const location = useLocation()
  const garageData = location.state
  const classReview = new Review()
  const navigate = useNavigate()
  const firestore = getFirestore(firebaseApp)
  const [firebasePass, setFirebasePass] = useState(null)

  async function getPass() {
    const docRef = doc(firestore, `users/${userMail}`)
    const query = await getDoc(docRef)
    if (query.exists()) {
      const infoDoc = query.data()
      setFirebasePass(infoDoc.data[0].pass)
    }
  }

  function generateTicket(e) {
    e.preventDefault()
    if (classReview._reviewFormBooking()) {
      if (inputCheckPassword.value === firebasePass) {
        dataForTicket = {
          specialty: inputSpeciality.value,
          date: inputDate.value,
          schedule: inputSchedule.value,
          cardDigits: inputCardDigits.value,
        }
        const finalData = [garageData, dataForTicket]
        classReview._setGoodPass()
        navigate('/sigma/garage/booking/ticket/', { state: finalData })
      } else classReview._setWrongPass()
    }
  }

  useEffect(() => {
    getPass()
  }, [])

  return (
    <section className="container-booking">
      <form className="form-booking" onSubmit={generateTicket}>
        {/* Booking */}
        <div className="form-booking-data">
          <h1 className="form-booking-data-h1"><span className="gradient">Agendar cita</span></h1>

          <label className="form-booking-data-label" htmlFor="inputSpeciality">Especialidad</label>
          <input
            id="inputSpeciality"
            className="form-booking-data-input data-input-specialty"
            type="text"
            placeholder="Servicio a contratar"
            autoComplete="new-password"
            onFocus={() => classReview._inputSpecialtyFocusIn()}
            onBlur={() => classReview._inputSpecialtyBlur()}
            onKeyUp={() => classReview._inputSpecialtyKeyUp()}
          />
          <p className="form-booking-data-p data-p-specialty"> </p>


          <label className="form-booking-data-label" htmlFor="inputDate">Fecha de la reservación</label>
          <input
            id="inputDate"
            className="form-booking-data-input data-input-date"
            type="text"
            placeholder="Ej. 16 de abril de 2023"
            autoComplete="new-password"
            onFocus={() => classReview._inputDateFocusIn()}
            onBlur={() => classReview._inputDateBlur()}
            onKeyUp={() => classReview._inputDateKeyUp()}
          />
          <p className="form-booking-data-p data-p-date"> </p>

          <label className="form-booking-data-label" htmlFor="inputSchedule">Horario de la reservación</label>
          <input
            id="inputSchedule"
            className="form-booking-data-input data-input-schedule"
            type="text"
            placeholder="Ej. 8:30 ó 21:15"
            autoComplete="new-password"
            onFocus={() => classReview._inputScheduleFocusIn()}
            onBlur={() => classReview._inputScheduleBlur()}
            onKeyUp={() => classReview._inputScheduleKeyUp()}
          />
          <p className="form-booking-data-p data-p-schedule"> </p>

          <label className="form-booking-data-label" htmlFor="input-bookingNumber">Número de contacto</label>
          <input
            id="input-bookingNumber"
            className="form-booking-data-input data-input-bookingNumber"
            type="number"
            pattern="[0-9]*"
            inputMode="numeric"
            placeholder="Ej. 5540905687"
            autoComplete="new-password"
            onFocus={() => classReview._inputBookingNumberFocusIn()}
            onBlur={() => classReview._inputBookingNumberBlur()}
            onKeyUp={() => classReview._inputBookingNumberKeyUp()}
          />
          <p className="form-booking-data-p data-p-bookingNumber"> </p>

          <h3 className="form-booking-data-h3">Verfica tu identidad</h3>
          {/* Password */}
          <label className="form-booking-data-label" htmlFor="inputCheckPassword">Confirma tu contraseña</label>
          <input
            id="inputCheckPassword"
            className="form-booking-data-input data-input-checkPassword"
            type="password"
            placeholder="La que usaste para registrarte"
            autoComplete="new-password"
            onFocus={() => classReview._inputCheckPasswordFocusIn()}
            onBlur={() => classReview._inputCheckPasswordBlur()}
          />
          <p className="form-booking-data-p data-p-checkPassword"> </p>

        </div>
        {/* Payment */}
        <div className="form-booking-payment">
          <h1 className="form-booking-payment-h1"><span className="gradient">Método de pago</span></h1>
          {/* cardDigits */}
          <label className="form-booking-payment-label" htmlFor="inputCardDigits">Número de tarjeta</label>
          <input
            id="inputCardDigits"
            className="form-booking-payment-input payment-input-cardDigits"
            type="number"
            pattern="[0-9]*"
            inputMode="numeric"
            placeholder="Los 16 dígitos de la tarjeta"
            autoComplete="new-password"
            onFocus={() => classReview._inputCardDigitsFocusIn()}
            onBlur={() => classReview._inputCardDigitsBlur()}
            onKeyUp={() => classReview._inputCardDigitsKeyUp()}
          />
          <p className="form-booking-payment-p payment-p-cardDigits"> </p>
          {/* expirationDate */}
          <label className="form-booking-payment-label" htmlFor="input-expirationDate">Fecha de vencimiento</label>
          <input
            id="input-expirationDate"
            className="form-booking-payment-input payment-input-expirationDate"
            placeholder="Ej. 03/2024"
            autoComplete="new-password"
            onFocus={() => classReview._inputExpirationDateFocusIn()}
            onBlur={() => classReview._inputExpirationDateBlur()}
            onKeyUp={() => classReview._inputExpirationDateKeyUp()}
          />
          <p className="form-booking-payment-p payment-p-expirationDate"> </p>
          {/* cvv */}
          <label className="form-booking-payment-label" htmlFor="input-cvv">CVV</label>
          <input
            id="input-cvv"
            className="form-booking-payment-input payment-input-cvv"
            placeholder="Ej. 689"
            autoComplete="new-password"
            type="number"
            pattern="[0-9]*"
            inputMode="numeric"
            onFocus={() => classReview._inputCVVFocusIn()}
            onBlur={() => classReview._inputCVVBlur()}
            onKeyUp={() => classReview._inputCVVKeyUp()}
          />
          <p className="form-booking-payment-p payment-p-cvv"> </p>

          <button
            className="btn-bubble form-booking-payment-btn"
            type="submit"
          >Pagar y Generar Ticket
          </button>
        </div>
      </form>
    </section>
  )
}