import NavBarDesktop from "../navegation-bar/NavBarDesktop";
import NavBarMobile from '../navegation-bar/NavBarMobile';
import Dashboard from "../views/Dashboard";
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
        <Route path="/sigfea//*" element={<Dashboard />}></Route>
        <Route path="/sigfea/feed" element={<Feed />}></Route>
      </Routes>
    </main>
  );
};

export default Home;