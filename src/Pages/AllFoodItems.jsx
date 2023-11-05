// @ts-nocheck
import FoodCard from "../Components/FoodCard";
import Container from "../Components/UI/Container";

const AllFoodItems = () => {
  return (
    <Container>
      <div className="my-20 text-center">
        <h2 className="text-5xl font-dancing font-extrabold">All Food Items</h2>
      </div>
      <div className="my-20">
        <FoodCard></FoodCard>
      </div>
    </Container>
  );
};

export default AllFoodItems;
