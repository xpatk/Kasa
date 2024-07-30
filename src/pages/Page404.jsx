import { Link } from "react-router-dom";

function Page404() {
  return (
    <div className="page404-container">
      <h1 className="page404-header">404</h1>
      <p className="page404-par">
        Ooups. La page que vous demandez n&apos;existe pas.
      </p>
      <Link to="">
        <p className="page404-link">Retourner sur la page d&apos;accueil.</p>
      </Link>
    </div>
  );
}

export default Page404;
