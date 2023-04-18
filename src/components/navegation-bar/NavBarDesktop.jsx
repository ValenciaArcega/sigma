import { Link } from "react-router-dom";

const NavBarDesktop = () => {
  return (
    <nav className="navBar-desktop">
      <h2 className="NVD-title"><span className="highlight-container"><span className="highlight">sigfea</span></span></h2>

      <section className="NVD-wrapperButtons">
        <Link className="NVD-btn-dashboard" to='/sigfea/'>Inicio</Link>
        <Link className="NVD-btn-feed" to='/sigfea/feed'>Publicaciones</Link>
        <Link className="NVD-btn-account" to='/sigfea/profile'>Cuenta</Link>
      </section>
    </nav>
  );
};

export default NavBarDesktop;