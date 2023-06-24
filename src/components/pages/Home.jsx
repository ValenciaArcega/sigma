import { NavBar } from "../interface/NavBar"
import { Appearance } from "../interface/Appearance"
import { UserData } from "../views/UserData"
import { Profile } from "../views/Profile"
import { Garages } from '../views/Garages'
import { Ticket } from "../views/Ticket"
import { Garage } from "../views/Garage"
import { Route, Routes } from 'react-router-dom'
import { UpdateData } from "../forms/UpdateData"
import { Booking } from "../forms/Booking"
import { AddGarage } from "../forms/AddGarage"

export function Home({ userMail }) {
  return (
    <main className="page-home">
      <NavBar />

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
          element={<Booking />}>
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
