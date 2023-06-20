import { useState, useEffect } from "react"
import { dataGarages } from '../../data/dt-garages'
import { Finder } from '../finder/Finder'
import { useNavigate } from 'react-router-dom'
import { getFirestore, doc, getDoc } from "firebase/firestore"
import { firebaseApp } from "../../credentials"
import { Link } from "react-router-dom"

export function Garages({ userMail }) {
  const navigate = useNavigate()
  const [filteredItems, setFilteredItems] = useState(dataGarages)
  const [isSearching, setIsSearching] = useState(false)
  const [name, setName] = useState(null)
  const [dataLoaded, setDataLoaded] = useState(false)
  const firestore = getFirestore(firebaseApp)
  const day = new Date().getDate()
  const weekDay = new Date().toLocaleDateString("es-MX", { weekday: 'long' })
  const weekDayStr = weekDay.slice(0, 1).toUpperCase() + weekDay.slice(1).toLowerCase()
  const welcomeText = `Hoy es ${weekDayStr} ${(day === 1) ? '1ro' : day}. Busca y reserva en tu taller ideal!`

  function fixName(str) {
    return str.trim().split(' ')[0]
  }

  function lookFor(e) {
    setIsSearching(true)
    setFilteredItems(dataGarages.filter(item => item.name.toLowerCase().includes(e.target.value.toLowerCase())))
  }

  useEffect(() => {
    (async function getUserName() {
      const docRef = doc(firestore, `users/${userMail}`)
      const query = await getDoc(docRef)
      if (query.exists()) {
        const infoDoc = query.data()
        // get data from firebase
        const fullName = infoDoc.data[0].name
        const finalName = fixName(fullName)
        setName(finalName)
        setDataLoaded(true)
      }
    })()
  }, [])

  return (
    dataLoaded
      ?
      <section className="container-garages">

        <h1 className="welcomeMessage-h1"><span className="gradient">Hola {name}</span></h1>
        <p className="welcomeMessage-p">{welcomeText}</p>
        <Finder lookFor={lookFor} setIsSearching={setIsSearching} />

        <h1 className="garages-title">
          Los <span className="gradient">talleres</span> disponibles
        </h1>

        <main className="garages">
          {(isSearching ? filteredItems : dataGarages).map(function (item, i) {
            return (
              <div className="garage" key={i}>
                <h2 className="garage-h2">{item.name}</h2>
                <button
                  className="garage-button"
                  onClick={() => navigate('/sigma/garage/', { state: item })}>
                  Ver detalles
                </button>

              </div>
            )
          })}
        </main>

        <Link
          to='/sigma/addGarage'
          className="btn-add-garage"
        >
          Registrar mi Taller
        </Link>
      </section >
      : null
  )
};
