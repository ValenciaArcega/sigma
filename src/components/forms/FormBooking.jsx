import Review from "../../functions/Review"
import { getFirestore, doc, getDoc } from "firebase/firestore"
import { firebaseApp } from "../../credentials"
import { useEffect, useState } from "react"

export function FormBooking({ userMail }) {
  const classReview = new Review()
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
    classReview._reviewFormBooking()
    if (inputCheckPassword.value === firebasePass) {
      classReview._setGoodPass()
    } else classReview._setWrongPass()
  }

  useEffect(() => {
    getPass()
  }, [])

  return (
    <section className="container-booking">
      <form className="form-booking">
        {/* Booking */}
        <div className="form-booking-data">
          <h1 className="form-booking-data-h1"><span className="gradient">Agendar cita</span></h1>

          <label className="form-booking-data-label" htmlFor="input-especiality">Especialidad</label>
          <input
            id="input-especiality"
            className="form-booking-data-input data-input-specialty"
            type="text"
            placeholder="Servicio a contratar"
            autoComplete="new-password"
            onFocus={() => classReview._inputSpecialtyFocusIn()}
            onBlur={() => classReview._inputSpecialtyBlur()}
            onKeyUp={() => classReview._inputSpecialtyKeyUp()}
          />
          <p className="form-booking-data-p data-p-specialty"> </p>


          <label className="form-booking-data-label" htmlFor="input-date">Fecha de la reservación</label>
          <input
            id="input-date"
            className="form-booking-data-input data-input-date"
            type="text"
            placeholder="Ej. 16 de abril de 2023"
            autoComplete="new-password"
            onFocus={() => classReview._inputDateFocusIn()}
            onBlur={() => classReview._inputDateBlur()}
            onKeyUp={() => classReview._inputDateKeyUp()}
          />
          <p className="form-booking-data-p data-p-date"> </p>

          <label className="form-booking-data-label" htmlFor="input-schedule">Horario de la reservación</label>
          <input
            id="input-schedule"
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
          <label className="form-booking-payment-label" htmlFor="input-cardDigits">Número de tarjeta</label>
          <input
            id="input-cardDigits"
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
            onClick={generateTicket}
          >Pagar y Generar Ticket
          </button>
        </div>
      </form>
    </section>
  )
}