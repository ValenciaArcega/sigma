import { Link } from "react-router-dom";

export function NavBarDesktop() {
  return (
    <nav className="navBar-desktop">

      <img src="/logo.png" alt="" height={34} style={{ marginLeft: 10 }} />

      <section className="NVD-wrapperButtons">
        <Link className="NVD-btn-dashboard" to='/sigma/'>Inicio</Link>
        <Link className="NVD-btn-feed" to='/sigma/feed'>Publicaciones</Link>
        <Link className="NVD-btn-account" to='/sigma/profile'>Cuenta</Link>
      </section>
    </nav>
  );
};
