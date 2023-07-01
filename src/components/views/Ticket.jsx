// import { useEffect } from "react"
import { useLocation } from "react-router-dom"

export function Ticket() {
  const location = useLocation()
  const data = location.state
  const day = data[0].date.getDate()
  const weekDay = data[0].date.toLocaleDateString("es-MX", { weekday: 'long' })
  const weekDayStr = weekDay.slice(0, 1).toUpperCase() + weekDay.slice(1).toLowerCase()

  function fixNumberCard(num) {
    return '**** **** **** ' + num.slice(-4)
  }

  /*useEffect(() => {
    console.log(messagePass, pass, "La promesa retorna [{}] en Ticket.jsx")
    console.log(messagePass, pass, "FirebasePromise: fullfill")
    console.log(messagePass, pass, "Renderizar ticket con datos")
  }, [])*/

  return (
    <section className="container-ticket">
      <main className="ticket">
        <h1 className="ticket-title">Comprobante de cita</h1>

        <h3>Nombre del taller</h3>
        <p>{data[0].garageName}</p>

        <h3>Servicio a realizar</h3>
        <p>{data[0].service}</p>

        <h3>Fecha de la cita</h3>
        <p>{weekDayStr + ' ' + day}</p>

        <h3>Horario de la cita</h3>
        <p>{data[0].schedule}</p>

        <h3>Cobro a la tarjeta</h3>
        <p>{fixNumberCard(data[0].cardDigits)}</p>

        <h3>Monto pagado</h3>
        <p>{data[0].price}</p>

        <h3>Número para aclaraciones</h3>
        <p>{data[0].garageNumber}</p>
      </main>
    </section>
  )
}