// @ts-nocheck
const MyFoodCard = () => {
  return (
    <div className="w-72 h-[400px] bg-base-100 shadow-xl">
      <figure>
        <img
          className="w-full"
          src="https://i.ibb.co/k5HhTJ3/addFood.jpg"
          alt="Shoes"
        />
      </figure>
      <div className="card-body">
        <h2 className="card-title">
          Steak
          <div className="badge badge-secondary">Heavy Meal</div>
        </h2>
        <p>If a dog chews shoes whose shoes does he choose?</p>
        <p className="font-medium">$450.00</p>
        <div className="card-actions justify-start pt-4">
          <div className="btn btn-sm btn-outline bg-[#C59D5F] text-white">
            Update
          </div>
        </div>
      </div>
    </div>
  );
};

export default MyFoodCard;
