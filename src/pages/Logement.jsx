import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

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
    return <div>Chargement...</div>;
  }

  return (
    <>
      <div className="img-slider">
        {accommodation.pictures.map((picture, index) => (
          <img key={index} src={picture} alt={`Accommodation ${index}`} />
        ))}
      </div>
      <h2>{accommodation.title}</h2>
      <h3>{accommodation.location}</h3>
      <p>{accommodation.description}</p>
    </>
  );
}

export default Logement;
