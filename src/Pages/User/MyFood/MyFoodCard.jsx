// @ts-nocheck
import propTypes from "prop-types";

const MyFoodCard = ({ foodItem }) => {
  const { image, foodName, price, shortDescription } = foodItem;
  return (
    <div className="w-96 h-[450px] bg-base-100 shadow-xl hover:scale-105 transform transition-transform">
      <figure>
        <img className="w-full h-[250px]" src={image} alt="Shoes" />
      </figure>
      <div className="card-body">
        <h2 className="card-title">
          Steak
          <div className="badge badge-secondary">{foodName}</div>
        </h2>
        <p>{shortDescription}</p>
        <p className="font-medium">${price}</p>
        <div className="card-actions justify-start pt-4">
          <div className="btn btn-sm btn-outline bg-[#C59D5F] text-white">
            Update
          </div>
        </div>
      </div>
    </div>
  );
};
MyFoodCard.propTypes = {
  foodItem: propTypes.object,
};

export default MyFoodCard;
