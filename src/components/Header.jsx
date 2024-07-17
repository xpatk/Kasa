import { Link } from "react-router-dom";
import logodesktop from "../assets/Logo-desktop.png";

function Header() {
  return (
    <header>
      <img src={logodesktop} alt="Logo Kasa"></img>
      <nav>
        <ul>
          <li>
            <Link to="/">
              <h2>Accueil</h2>
            </Link>
          </li>

          <li>
            <Link to="apropos">
              <h2>A propos</h2>
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default Header;
