import { useLocation, useNavigate } from "react-router-dom"
import { useEffect } from "react"

export function Garage() {
  let a
  const navigate = useNavigate()
  const location = useLocation()
  const garageData = location.state

  function sendService(service, price) {
    a = {
      name: garageData.name,
      number: garageData.phone,
      service: service,
      price: price,
    }
    navigate('/sigma/garage/booking/', { state: a })
  }

  function loadMap() {
    const coords = [garageData.latitude, garageData.longitude]
    const map = L.map('map').setView(coords, 10)

    L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
      attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
    }).addTo(map)

    L.marker(coords).addTo(map)
      .bindPopup(`Taller: ${garageData.name}`)
      .openPopup()
  }

  useEffect(() => loadMap(), [])

  return (
    <section className="container-garageInfoCard">

      <main className="wrapper-garageInfoCard">

        <header className="garageInfoCard-header">
          <h1 className="garageInfoCard-h1">{garageData.name}</h1>
          <p className="garageInfoCard-p">Este taller ofrece los siguientes servicios y su ubicación aparece marcada en el mapa</p>
        </header>

        <article className="garageInfoCard-features">
          {garageData.features.map((item, i) => {
            return (
              <button
                key={i}
                className="garageInfoCard-feature"
                onClick={() => sendService(item[0], item[1])}
              >◉ {item[0]}
              </button>
            )
          })}
        </article>

        <article className="mapy" id="map"></article>

      </main>
    </section>
  )
}