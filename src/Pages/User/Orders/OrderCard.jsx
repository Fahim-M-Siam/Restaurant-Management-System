// @ts-nocheck
import { AiFillDelete } from "react-icons/ai";
const OrderCard = () => {
  return (
    <div className="overflow-x-auto">
      <table className="table">
        {/* head */}
        <thead>
          <tr>
            <th>Food Image</th>
            <th>Food Name</th>
            <th>Order Price</th>
            <th>Added time</th>
            <th>Food Owner</th>
            <th>Delete Order</th>
          </tr>
        </thead>
        <tbody>
          {/* row 1 */}
          <tr>
            <th>
              <div className="avatar">
                <div className="mask mask-squircle w-12 h-12">
                  <img
                    src="/tailwind-css-component-profile-2@56w.png"
                    alt="Avatar Tailwind CSS Component"
                  />
                </div>
              </div>
            </th>
            <td>
              <div className="flex items-center space-x-3">
                <div>
                  <div className="font-bold">Hart Hagerty</div>
                </div>
              </div>
            </td>
            <td>$450.00</td>
            <td>11/5/2023 7.11 Pm</td>
            <td>Fahim</td>
            <th>
              <AiFillDelete className="text-2xl ml-6">Delete</AiFillDelete>
            </th>
          </tr>
        </tbody>
        {/* foot */}
      </table>
    </div>
  );
};

export default OrderCard;
