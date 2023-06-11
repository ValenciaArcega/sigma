import { useEffect } from "react";
import { useLocation } from "react-router-dom";

export function Garage() {
  const location = useLocation();
  const data = location.state;

  function success() {
    const coords = [data.latitude, data.longitude];

    const map = L.map('map').setView(coords, 10);

    L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
      attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
    }).addTo(map);

    L.marker(coords).addTo(map)
      .bindPopup(`Taller: ${data.name}`)
      .openPopup();
  }
  function error() {
    console.log('Nope');
  }

  useEffect(() => navigator.geolocation.getCurrentPosition(success, error), []);

  return (
    <section className="container-garageInfoCard">
      <h1 className="garageInfoCard-h1"><span className="highlight-container"><span className="highlight">{data.name}</span></span></h1>

      <div className="garageInfoCard-features">
        {data.features.map((item, i) => <p key={i} className="garageInfoCard-feature">◉ {item}</p>)}
      </div>

      <main className="mapy" id="map"></main>
    </section>
  );
}