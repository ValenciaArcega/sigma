import NavBarDesktop from "../navegation-bar/NavBarDesktop";
import NavBarMobile from '../navegation-bar/NavBarMobile';
import Appearance from "../buttons/Appearance";
import Dashboard from "../views/Dashboard";
import FormDates from "../views/FormDates";
import FormPost from "../views/FormPost";
import Profile from "../views/Profile";
import Feed from '../views/Feed';
import { useEffect } from "react";
import { Route, Routes } from 'react-router-dom';

const Home = () => {

  useEffect(() => {
    let viewPort = window.matchMedia("(max-width: 450px)");

    const desk = document.querySelector('.navBar-desktop');
    const phone = document.querySelector('.navBar-mobile');

    const mediaScreen = (y) => {
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
        <Route path="/sigma//*" element={<Dashboard />}></Route>
        <Route path="/sigma/feed" element={<Feed />}></Route>
        <Route path="/sigma/profile" element={<Profile />}></Route>
        <Route path="/sigma/profile/formDates" element={<FormDates />}></Route>
        <Route path="/sigma/profile/formPost" element={<FormPost />}></Route>
      </Routes>
      <Appearance />
    </main>
  );
};

export default Home;