import Banner from "../components/Banner.jsx";
import Cards from "../components/Cards.jsx";

function Home() {
  return (
    <>
      <div className="home">
        <Banner />
      </div>
      <div>
        <Cards />
      </div>
    </>
  );
}

export default Home;
