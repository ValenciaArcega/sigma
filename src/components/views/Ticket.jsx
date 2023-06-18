import { useLocation } from "react-router-dom"

export function Ticket() {
  const location = useLocation()
  const data = location.state

  return (
    <section className="container-ticket">
      <main className="ticket">
        <h1 className="ticket-title">Comprobante de cita</h1>

        <h3 className="ticket-h3">Nombre del taller</h3>
        <p className="ticket-p">{data[0].name}</p>

        <h3 className="ticket-h3">Servicio a realizar</h3>
        <p className="ticket-p">{data[1].specialty}</p>

        <h3 className="ticket-h3">Fecha de la cita</h3>
        <p className="ticket-p">{data[1].date}</p>

        <h3 className="ticket-h3">Horario de la cita</h3>
        <p className="ticket-p">{data[1].schedule}</p>

        <h3 className="ticket-h3">Cobro a la tarjeta</h3>
        <p className="ticket-p">{data[1].cardDigits}</p>

        <h3 className="ticket-h3">Número para aclaraciones</h3>
        <p className="ticket-p">{data[0].phone}</p>
      </main>
    </section>
  )
}