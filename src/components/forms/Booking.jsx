import { ClReviewBooking } from "../../classes/cl-booking"
import { useEffect, useState } from "react"
import { useNavigate, useLocation } from "react-router-dom"
import DatePicker from "react-datepicker"
import "react-datepicker/dist/react-datepicker.css"
import { ClReviewSignUp } from "../../classes/cl-signUp"

export function Booking() {
  let a
  const cl = new ClReviewBooking()
  const navigate = useNavigate()
  const location = useLocation()
  const garageData = location.state
  const [date, setDate] = useState({ day: null })

  function changeDate(value) {
    return setDate({ day: value })
  }

  function generateTicket(e) {
    e.preventDefault()
    if (cl._reviewFormBooking()) {
      a = [{
        garageName: garageData.name,
        garageNumber: garageData.number,
        service: garageData.service,
        price: garageData.price,
        date: date.day,
        schedule: inputSchedule.value,
        phone: inputBookingNumber.value,
        cardDigits: inputCardDigits.value,
      }]
      navigate('/sigma/garage/booking/ticket/', { state: a })
    }
  }

  useEffect(() => {
    new ClReviewSignUp()._resetBorders()
  }, [])

  return (
    <section className="container-booking">
      <form className="form-booking" onSubmit={generateTicket}>
        {/* Booking */}
        <div className="form-booking-data">
          <h1 className="form-booking-data-h1"><span className="gradient">{garageData.service}</span></h1>

          <div className="wrapperInputDates">
            <p className="form-booking-data-label">Fecha de reservación</p>
            <DatePicker
              dateFormat="dd/MM/yyyy"
              // showWeekNumbers
              className="formDates-input"
              placeholderText="Selecciona una fecha"
              onChange={d => changeDate(d)}
              selected={date.day}
            />
          </div>

          <label className="form-booking-data-label" htmlFor="inputSchedule">Horario de la reservación</label>
          <input
            id="inputSchedule"
            className="form-booking-data-input data-input-schedule"
            type="text"
            placeholder="Ej. 8:30 ó 21:15"
            autoComplete="new-password"
            onFocus={() => cl._inputFocusIn('schedule')}
            onBlur={() => cl._inputBlur('schedule')}
            onKeyUp={() => cl._inputScheduleKeyUp()}
          />
          <p className="form-booking-data-p data-p-schedule"> </p>

          <label className="form-booking-data-label">Número de contacto</label>
          <input
            id="inputBookingNumber"
            className="form-booking-data-input data-input-bookingNumber"
            type="number"
            pattern="[0-9]*"
            inputMode="numeric"
            placeholder="Ej. 5540905687"
            autoComplete="new-password"
            onFocus={() => cl._inputFocusIn('number')}
            onBlur={() => cl._inputBlur('number')}
            onKeyUp={() => {
              cl._inputBookingNumberKeyUp()
              cl._inputNumberKeyUp('data-p-bookingNumber')
            }
            }
          />
          <p className="form-booking-data-p data-p-bookingNumber"> </p>

          {/*<h3 className="form-booking-data-h3">Verfica tu identidad</h3>
           Password
          <label className="form-booking-data-label" htmlFor="inputCheckPassword">Confirma tu contraseña</label>
          <input
            id="inputCheckPassword"
            className="form-booking-data-input data-input-checkPassword"
            type="password"
            placeholder="La que usaste para registrarte"
            autoComplete="new-password"
            onFocus={() => cl._inputFocusIn('checkPassword')}
            onBlur={() => cl._inputBlur('checkPassword')}
          />
          <p className="form-booking-data-p data-p-checkPassword"> </p> */}

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
            onFocus={() => cl._inputFocusIn('cardDigits')}
            onBlur={() => cl._inputBlur('cardDigits')}
            onKeyUp={() => {
              cl._inputCardDigitsKeyUp()
              cl._inputNumberKeyUp('payment-p-cardDigits')
            }}
          />
          <p className="form-booking-payment-p payment-p-cardDigits"> </p>
          {/* expirationDate */}
          <label className="form-booking-payment-label" htmlFor="input-expirationDate">Fecha de vencimiento</label>
          <input
            id="input-expirationDate"
            className="form-booking-payment-input payment-input-expirationDate"
            placeholder="Ej. 03/2024"
            autoComplete="new-password"
            onFocus={() => cl._inputFocusIn('expirationDate')}
            onBlur={() => cl._inputBlur('expirationDate')}
            onKeyUp={() => {
              cl._inputExpirationDateKeyUp()
              cl._inputNumberKeyUp('payment-p-expirationDate')
            }}
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
            onFocus={() => cl._inputFocusIn('cvv')}
            onBlur={() => cl._inputBlur('cvv')}
            onKeyUp={() => {
              cl._inputCVVKeyUp()
              cl._inputNumberKeyUp('payment-p-cvv')
            }}
          />
          <p className="form-booking-payment-p payment-p-cvv"> </p>

          <button
            className="btn-bubble form-booking-payment-btn"
            type="submit">Pagar {garageData.price}</button>
        </div>
      </form>
    </section>
  )
}