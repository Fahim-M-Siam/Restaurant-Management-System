// @ts-nocheck
import Container from "../../../Components/UI/Container";
import OrderCard from "./OrderCard";

const Orders = () => {
  return (
    <Container>
      <h2 className="text-5xl font-dancing my-20 text-center">
        My Ordered Food Items
      </h2>
      <div className="mb-20">
        <OrderCard></OrderCard>
      </div>
    </Container>
  );
};

export default Orders;
