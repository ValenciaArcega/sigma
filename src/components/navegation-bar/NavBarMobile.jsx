import { IconHome, IconFeed, IconPerson } from "../svg/Nvm";
import { Link } from "react-router-dom";

const NavBarMobile = () => {
  return (
    <nav className="navBar-mobile">
      <Link className="NVM-btn" to='/sigma/'>
        <IconHome />
        Inicio
      </Link>

      <Link className="NVM-btn" to='/sigma/feed'>
        <IconFeed />
        Descubrir
      </Link>

      <Link className="NVM-btn" to='/sigma/profile'>
        <IconPerson />
        Cuenta
      </Link>
    </nav>
  );
};

export default NavBarMobile;