import { NavLink } from "react-router-dom";
import logodesktop from "../assets/Logo-desktop.png";

function Header() {
  return (
    <header>
      <img src={logodesktop} alt="Logo Kasa"></img>
      <nav>
        <ul>
          <li>
            <NavLink
              to="/"
              className={(nav) => (nav.isActive ? "nav-active" : "")}
            >
              <h2>Accueil</h2>
            </NavLink>
          </li>

          <li>
            <NavLink
              to="apropos"
              className={(nav) => (nav.isActive ? "nav-active" : "")}
            >
              <h2>A propos</h2>
            </NavLink>
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default Header;
