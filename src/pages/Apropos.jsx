import Banner from "../components/Banner.jsx";
import imageSrc from "../assets/banner2.png";
import Collapse from "../components/Collapse.jsx";
import { useEffect, useState } from "react";

function Apropos() {
  const [data, setData] = useState({});

  useEffect(() => {
    fetch("../../valeurs.json")
      .then((response) => response.json())
      .then((data) => setData(data))
      .catch((error) => console.error("Data not fetched correctly", error));
  }, []);

  return (
    <>
      <div className="apropos-banner">
        <Banner className="banner2" src={imageSrc} alt="Landscape" text="" />
      </div>
      <div className="collapsible-2">
        <Collapse header="Fiabilité">{data.Fiabilité}</Collapse>
        <Collapse header="Respect">{data.Respect}</Collapse>
        <Collapse header="Service">{data.Service}</Collapse>
        <Collapse header="Securité">{data.Sécurité}</Collapse>
      </div>
    </>
  );
}

export default Apropos;
