// @ts-nocheck
import propTypes from "prop-types";
import { AiFillDelete } from "react-icons/ai";
const OrderCard = ({ order }) => {
  const { image, foodName, price, buyerName, buyingDate } = order;
  return (
    <tr>
      <th>
        <div className="avatar">
          <div className="mask mask-squircle w-12 h-12">
            <img src={image} alt="Avatar Tailwind CSS Component" />
          </div>
        </div>
      </th>
      <td>
        <div className="flex items-center space-x-3">
          <div>
            <div className="font-bold">{foodName}</div>
          </div>
        </div>
      </td>
      <td>${price}</td>
      <td>{buyingDate}</td>
      <td>{buyerName}</td>
      <th>
        <AiFillDelete className="text-2xl ml-6">Delete</AiFillDelete>
      </th>
    </tr>
  );
};
OrderCard.propTypes = {
  order: propTypes.object,
};

export default OrderCard;
