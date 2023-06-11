import { IconHome, IconGarages, IconPerson } from "../svg/Nvm";
import { Link } from "react-router-dom";

export function NavBarMobile() {
  return (
    <nav className="navBar-mobile">
      <Link className="NVM-btn" to='/sigma/'>
        <IconHome />
        Inicio
      </Link>

      <Link className="NVM-btn" to='/sigma/garages'>
        <IconGarages />
        Descubrir
      </Link>

      <Link className="NVM-btn" to='/sigma/profile'>
        <IconPerson />
        Cuenta
      </Link>
    </nav>
  );
};
