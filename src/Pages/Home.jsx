// @ts-nocheck
import About from "../Components/About/About";
import Banner from "../Components/Banner/Banner";
import Rating from "../Components/Rating/Rating";
import TopFood from "../Components/TopFood/TopFood";
import Container from "../Components/UI/Container";

// @ts-nocheck
const Home = () => {
  return (
    <div>
      <Banner></Banner>
      <Container>
        <TopFood></TopFood>
      </Container>
      <Rating></Rating>
      <About></About>
    </div>
  );
};

export default Home;
