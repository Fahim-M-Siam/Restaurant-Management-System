// @ts-nocheck
import { Helmet } from "react-helmet";
import About from "../Components/About/About";
import Banner from "../Components/Banner/Banner";
import Rating from "../Components/Rating/Rating";
import TopFood from "../Components/TopFood/TopFood";
import Container from "../Components/UI/Container";

// @ts-nocheck
const Home = () => {
  return (
    <div>
      <Helmet>
        <meta charSet="utf-8" />
        <title>Home | TasteHarmony Cafe</title>
        <link rel="canonical" href="http://mysite.com/example" />
      </Helmet>
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
