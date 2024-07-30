import Banner from "../components/Banner.jsx";
import Cards from "../components/Cards.jsx";
import imageSrc from "../assets/Image source 1.png";

function Home() {
  return (
    <>
      <div className="home">
        <Banner
          src={imageSrc}
          alt="Landscape"
          text="Chez vous, partout et ailleurs"
          className="home-banner"
        />
      </div>
      <div>
        <Cards />
      </div>
    </>
  );
}

export default Home;
