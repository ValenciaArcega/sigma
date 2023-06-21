import { NavBarDesktop } from "../navBar/NavBarDesktop"
import { NavBarMobile } from '../navBar/NavBarMobile'
import { Appearance } from "../theme/Appearance"
import { UserData } from "../views/UserData"
import { Profile } from "../views/Profile"
import { Garages } from '../views/Garages'
import { Ticket } from "../views/Ticket"
import { Garage } from "../views/Garage"
import { useEffect } from "react"
import { Route, Routes } from 'react-router-dom'
import { UpdateData } from "../forms/UpdateData"
import { Booking } from "../forms/Booking"
import { AddGarage } from "../forms/AddGarage"

export function Home({ userMail }) {

  useEffect(() => {
    let viewPort = window.matchMedia("(max-width: 450px)")
    const desk = document.querySelector('.navBar-desktop')
    const phone = document.querySelector('.navBar-mobile')

    function mediaScreen(y) {
      if (y.matches) {
        desk.classList.add('hidden')
        phone.classList.remove('hidden')
      } else {
        desk.classList.remove('hidden')
        phone.classList.add('hidden')
      }
    };
    mediaScreen(viewPort)
    viewPort.addListener(mediaScreen)
  }, [])

  return (
    <main className="page-home">
      <NavBarDesktop />
      <NavBarMobile />

      <Routes>
        <Route
          path="/sigma//*"
          element={<Garages userMail={userMail} />}>
        </Route>
        <Route
          path="/sigma/addGarage"
          element={<AddGarage />}>
        </Route>
        <Route
          path="/sigma/garage/"
          element={<Garage />}>
        </Route>
        <Route
          path="/sigma/garage/booking/"
          element={<Booking userMail={userMail} />}>
        </Route>
        <Route
          path="/sigma/garage/booking/ticket/"
          element={<Ticket />}>
        </Route>
        <Route
          path="/sigma/profile/"
          element={<Profile />}>
        </Route>
        <Route
          path="/sigma/profile/formUpdateData/"
          element={<UpdateData userMail={userMail} />}>
        </Route>
        <Route
          path="/sigma/profile/userData/"
          element={<UserData userMail={userMail} />}>
        </Route>
      </Routes>

      <Appearance />
    </main>
  )
};
