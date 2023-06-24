import { IconHome, IconGarages, IconPerson } from "../svg/Nvm"
import { useState, useEffect } from "react"
import { Link } from "react-router-dom"

export function NavBar() {
  const [isDesktop, setIsDesktop] = useState(false)

  useEffect(() => {
    const x = window.matchMedia("(min-width: 480px)")
    setIsDesktop(x.matches)
    const handleResize = () => setIsDesktop(x.matches)
    x.addListener(handleResize)

    return () => x.removeListener(handleResize)
  }, [])

  return <div> {isDesktop ? <NavBarDesktop /> : <NavBarMobile />} </div>
}

// 💻
function NavBarDesktop() {
  return <nav className="navBar-desktop">

    <img src="logo.png" alt="" height={34} style={{ marginLeft: 10 }} />

    <section className="NVD-wrapperButtons">
      <Link className="NVD-btn-garages" to='/sigma/'>Talleres</Link>
      <Link className="NVD-btn-account" to='/sigma/profile/'>Cuenta</Link>
    </section>
  </nav>
}

// 📱
function NavBarMobile() {
  return <nav className="navBar-mobile">
    <Link className="NVM-btn" to='/sigma/'>
      <IconHome />
      Inicio
    </Link>

    <Link className="NVM-btn" to='/sigma/garages/'>
      <IconGarages />
      Talleres
    </Link>

    <Link className="NVM-btn" to='/sigma/profile/'>
      <IconPerson />
      Cuenta
    </Link>
  </nav>
}