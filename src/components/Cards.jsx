import "../style/components/cards.scss";
import { useState, useEffect } from "react";
import Card from "../components/Card";

function Cards() {
  const [accommodations, setAccommodations] = useState([]);

  useEffect(() => {
    fetch("../../kasa.json")
      .then((response) => response.json())
      .then((data) => setAccommodations(data))
      .catch((error) => console.error("Data not fetched properly", error));
  }, []);

  return (
    <div className="parent-container">
      <div className="cards-container">
        {accommodations.map((accommodation) => (
          <Card
            key={accommodation.id}
            title={accommodation.title}
            picture={accommodation.cover}
          />
        ))}
      </div>
    </div>
  );
}

export default Cards;
