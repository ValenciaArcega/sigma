import Review from "../../functions/Review"

export function FormBooking() {
  const classReview = new Review()

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
            placeholder="Ej. 8pm ó 11am"
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
            inputMode="decimal"
            placeholder="Ej. 5540905687"
            autoComplete="new-password"
            onFocus={() => classReview._inputBookingNumberFocusIn()}
            onBlur={() => classReview._inputBookingNumberBlur()}
          />
          <p className="form-booking-data-p data-p-bookingNumber"> </p>

        </div>
        {/* Payment */}
        <div className="form-booking-payment">
          <h1 className="form-booking-payment-h1"><span className="gradient">Método de pago</span></h1>
        </div>
      </form>
    </section>
  )
}