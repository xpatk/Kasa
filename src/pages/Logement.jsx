import { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import Slider from "../components/Slider";
import Title from "../components/Title";
import Location from "../components/Location";
import Tags from "../components/Tags";
import Host from "../components/Host";
import Rating from "../components/Rating";
import Collapse from "../components/Collapse";

function Logement() {
  const { id } = useParams();
  const navigate = useNavigate();
  const [accommodation, setAccommodation] = useState(null);

  useEffect(() => {
    fetch("../../kasa.json")
      .then((response) => response.json())
      .then((data) => {
        const foundAccommodation = data.find((item) => item.id === id);
        if (!foundAccommodation) {
          navigate("/404");
        } else {
          setAccommodation(foundAccommodation);
        }
      })
      .catch((error) => {
        console.error("Data not fetched properly", error);
        navigate("/404");
      });
  }, [id, navigate]);

  if (!accommodation) {
    return <div>Chargement de page. Veuillez patienter...</div>;
  }

  return (
    <>
      <section>
        <Slider pictures={accommodation.pictures} />
        <br />
        <div className="main-logement">
          <div className="logement">
            <div className="logement-left">
              <Title title={accommodation.title} />
              <Location location={accommodation.location} />
              <Tags tags={accommodation.tags} />
            </div>
            <div className="logement-right">
              <Host hosts={[accommodation.host]} />
              <Rating rating={accommodation.rating} />
            </div>
          </div>
          <div className="collapsible">
            <Collapse header="Description">
              {accommodation.description}
            </Collapse>
            <Collapse header="Equipments">
              {accommodation.equipments.map((equipment, index) => (
                <div key={index}>{equipment}</div>
              ))}
            </Collapse>
          </div>
        </div>
      </section>
    </>
  );
}

export default Logement;
