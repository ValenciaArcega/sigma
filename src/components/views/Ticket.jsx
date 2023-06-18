import { useLocation } from "react-router-dom"

export function Ticket() {
  const location = useLocation()
  const data = location.state

  return (
    <section className="container-ticket">
      <main className="ticket">
        <h1 className="ticket-title">Comprobante de cita</h1>
      </main>
    </section>
  )
}