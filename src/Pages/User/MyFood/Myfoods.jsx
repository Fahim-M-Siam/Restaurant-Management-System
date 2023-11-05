// @ts-nocheck
import Container from "../../../Components/UI/Container";
import MyFoodCard from "./MyFoodCard";

const Myfoods = () => {
  return (
    <Container>
      <h2 className="text-5xl font-dancing my-20 text-center">
        My Added Food Items
      </h2>
      <div className="mb-20">
        <MyFoodCard></MyFoodCard>
      </div>
    </Container>
  );
};

export default Myfoods;
