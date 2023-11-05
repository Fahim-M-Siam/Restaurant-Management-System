// @ts-nocheck
import { Link } from "react-router-dom";
import Container from "../UI/Container";
import TopFoodCard from "./TopFoodCard";

// @ts-nocheck
const TopFood = () => {
  return (
    <Container>
      <div className="text-3xl text-center font-extrabold my-20">
        <h2>Top Foods</h2>
      </div>
      <div>
        <TopFoodCard></TopFoodCard>
      </div>
      <div className="text-center my-16">
        <Link to="/allfooditems">
          <button className="text-white btn btn-outline bg-[#C59D5F]">
            See All
          </button>
        </Link>
      </div>
    </Container>
  );
};

export default TopFood;
