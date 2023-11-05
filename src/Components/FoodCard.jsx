// @ts-nocheck
const FoodCard = () => {
  return (
    <div className="w-72 h-[500px] bg-base-100 shadow-xl">
      <figure>
        <img
          className="w-full"
          src="https://i.ibb.co/k5HhTJ3/addFood.jpg"
          alt="Shoes"
        />
      </figure>
      <div className="card-body items-center text-center space-y-4">
        <h2 className="card-title">
          Steak
          <div className="badge badge-secondary">Heavy Meal</div>
        </h2>
        <p>If a dog chews shoes whose shoes does he choose?</p>
        <p className="font-medium">$450.00</p>
        <div className="card-actions justify-start">
          <div className="badge badge-outline">Quantity</div>
        </div>
        <button className="btn btn-outline bg-[#C59D5F] btn-sm text-white">
          Details
        </button>
      </div>
    </div>
  );
};

export default FoodCard;
