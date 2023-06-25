import { useEffect } from "react"
import { useLocation } from "react-router-dom"

export function Ticket() {
  const location = useLocation()
  const data = location.state

  return (
    <section className="container-ticket">
      <main className="ticket">
        <h1 className="ticket-title">Comprobante de cita</h1>

        <h3>Nombre del taller</h3>
        <p>{data[0].garageName}</p>

        <h3>Servicio a realizar</h3>
        <p>{data[0].service}</p>

        <h3>Fecha de la cita</h3>
        <p>{data[0].date.getDate()}</p>

        <h3>Horario de la cita</h3>
        <p>{data[0].schedule}</p>

        <h3>Cobro a la tarjeta</h3>
        <p>{data[0].cardDigits}</p>

        <h3>Monto pagado</h3>
        <p>{data[0].price}</p>

        <h3>Número para aclaraciones</h3>
        <p>{data[0].garageNumber}</p>
      </main>
    </section>
  )
}