import { NavBarDesktop } from "../interface/NavBarDesktop";
import { NavBarMobile } from '../interface/NavBarMobile';
import { Appearance } from "../theme/Appearance";
import { Dashboard } from "../views/Dashboard";
// import { FormDates } from "../views/FormDates";
import { FormPost } from "../views/FormPost";
import { Profile } from "../views/Profile";
import { Garages } from '../views/Garages';
import { useEffect } from "react";
import { Route, Routes } from 'react-router-dom';
import { FormUpdateData } from "../views/FormUpdateData";

export function Home({ userMail }) {

  useEffect(() => {
    let viewPort = window.matchMedia("(max-width: 450px)");
    const desk = document.querySelector('.navBar-desktop');
    const phone = document.querySelector('.navBar-mobile');

    function mediaScreen(y) {
      if (y.matches) {
        desk.classList.add('hidden');
        phone.classList.remove('hidden');
      } else {
        desk.classList.remove('hidden');
        phone.classList.add('hidden');
      }
    };
    mediaScreen(viewPort);
    viewPort.addListener(mediaScreen);
  }, []);

  return (
    <main className="page-home">
      <NavBarDesktop />
      <NavBarMobile />
      <Routes>
        <Route
          path="/sigma//*"
          element={<Dashboard userMail={userMail} />}></Route>
        <Route
          path="/sigma/garages"
          element={<Garages />}></Route>
        <Route
          path="/sigma/profile"
          element={<Profile />}></Route>
        <Route
          path="/sigma/profile/formUpdateData"
          element={<FormUpdateData userMail={userMail} />}></Route>
        <Route
          path="/sigma/profile/formPost"
          element={<FormPost />}></Route>
      </Routes>
      <Appearance />
    </main>
  );
};
