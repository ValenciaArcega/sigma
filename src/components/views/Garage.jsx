import { useEffect } from "react"
import { useLocation, useNavigate } from "react-router-dom"

export function Garage() {
  const location = useLocation()
  const data = location.state
  const navigate = useNavigate()

  function loadMap() {
    const coords = [data.latitude, data.longitude]
    const map = L.map('map').setView(coords, 10)

    L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
      attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
    }).addTo(map)

    L.marker(coords).addTo(map)
      .bindPopup(`Taller: ${data.name}`)
      .openPopup()
  }

  useEffect(() => loadMap(), [])

  return (
    <section className="container-garageInfoCard">

      <main className="wrapper-garageInfoCard">

        <header className="garageInfoCard-header">
          <h1 className="garageInfoCard-h1">{data.name}</h1>
          <p className="garageInfoCard-p">Este taller ofrece los siguientes servicios y su ubicación aparece marcada en el mapa</p>
        </header>

        <div className="garageInfoCard-features">
          {data.features.map((item, i) => <p key={i} className="garageInfoCard-feature">◉ {item}</p>)}
        </div>

        <main className="mapy" id="map"></main>

        <button
          className="btn-booking btn-bubble"
          onClick={() => navigate('/sigma/garage/booking', { state: data })}
        >
          Agendar Cita
        </button>
      </main>
    </section>
  )
}