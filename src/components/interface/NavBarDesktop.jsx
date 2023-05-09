import { Link } from "react-router-dom";

export function NavBarDesktop() {
  return (
    <nav className="navBar-desktop">
      <h2 className="NVD-title"><span className="highlight-container"><span className="highlight">sigma</span></span></h2>

      <section className="NVD-wrapperButtons">
        <Link className="NVD-btn-dashboard" to='/sigma/'>Inicio</Link>
        <Link className="NVD-btn-feed" to='/sigma/feed'>Publicaciones</Link>
        <Link className="NVD-btn-account" to='/sigma/profile'>Cuenta</Link>
      </section>
    </nav>
  );
};
