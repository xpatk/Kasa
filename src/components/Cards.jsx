import Card from "./Card.jsx";

function Cards() {
  return (
    <div className="container">
      {CardData &&
        CardData.map((data) => {
          return (
            <div className="card" key={data.id}>
              <img src={data.cover} alt={data.title}></img>

              <h3>{data.title}</h3>
            </div>
          );
        })}
    </div>
  );
}

export default Cards;
