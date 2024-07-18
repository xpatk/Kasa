import landscapeImg from "../assets/Image source 1.png";

function Banner() {
  return (
    <div className="banner">
      <img src={landscapeImg} alt="landscape"></img>
      <h2>Chez vous, partout et ailleurs</h2>
    </div>
  );
}

export default Banner;
