// @ts-nocheck
import propTypes from "prop-types";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
const TopFoodCard = (topFoodItem) => {
  const { foodName, image, category, price } = topFoodItem.topFoodItem;

  return (
    <motion.div
      layout
      style={{ borderRadius: 20 }}
      className="w-[350px] h-[470px] bg-base-100 shadow-xl hover:scale-105 transform transition-transform"
    >
      <figure>
        <img className="w-full h-[250px]" src={image} alt="Shoes" />
      </figure>
      <div className="card-body items-center text-center space-y-3">
        <h2 className="card-title">{foodName}</h2>

        <p className="font-medium">${price}</p>
        <div className="card-actions justify-start">
          <div className="badge badge-outline">{category}</div>
        </div>
        <Link to={`/food/${foodName}`}>
          <button className="btn btn-outline bg-[#C59D5F] btn-sm text-white">
            Details
          </button>
        </Link>
      </div>
    </motion.div>
  );
};
TopFoodCard.propTypes = {
  topFoodItem: propTypes.object,
};

export default TopFoodCard;
