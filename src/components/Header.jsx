import { Link } from "react-router-dom";

function Header() {
  return (
    <header>
      <img></img>
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
