import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import Slider from "../components/Slider";

function Logement() {
  const { id } = useParams();
  const [accommodation, setAccommodation] = useState();

  useEffect(() => {
    fetch("../../kasa.json")
      .then((response) => response.json())
      .then((data) => {
        const foundAccommodation = data.find((item) => item.id === id);
        setAccommodation(foundAccommodation);
      })
      .catch((error) => console.error("Data not fetched properly", error));
  }, [id]);

  if (!accommodation) {
    return <div>Chargement de page. Veuillez patienter...</div>;
  }

  return (
    <>
      <Slider pictures={accommodation.pictures} />
    </>
  );
}

export default Logement;
