// @ts-nocheck
import loadingAnimation from "../assets/loadinAnimation.json";
import { useState } from "react";
import FoodCard from "../Components/FoodCard";
import Container from "../Components/UI/Container";
import { useEffect } from "react";
import axios from "axios";
import Lottie from "lottie-react";

const AllFoodItems = () => {
  const [originalFoodItems, setOriginalFoodItems] = useState([]);
  const [foodItems, setFoodItems] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [searchQuery, setSearchQuery] = useState("");

  useEffect(() => {
    axios
      .get("http://localhost:5000/fooditems")
      .then((response) => {
        setOriginalFoodItems(response.data);
        setFoodItems(response.data);
      })
      .catch((error) => console.log(error))
      .finally(() => {
        setIsLoading(false);
      });
  }, []);

  const handleSearch = () => {
    if (searchQuery.trim() === "") {
      setFoodItems(originalFoodItems);
    } else {
      const filteredItems = originalFoodItems.filter((foodItem) =>
        foodItem.foodName.toLowerCase().includes(searchQuery.toLowerCase())
      );
      setFoodItems(filteredItems);
    }
  };

  return (
    <Container>
      {isLoading ? (
        <div className="w-[400px] flex ml-96 items-center h-screen">
          <Lottie animationData={loadingAnimation}></Lottie>
        </div>
      ) : (
        <div>
          <div className="my-20 text-center">
            <h2 className="text-5xl font-dancing font-extrabold">
              All Food Items
            </h2>
          </div>
          <div>
            <input
              type="text"
              placeholder="Search Your Favourite Food..."
              className="input input-bordered w-full max-w-xs"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
            />
            <button
              onClick={handleSearch}
              className="btn btn-outline bg-[#C59D5F] text-white ml-2"
            >
              Search
            </button>
          </div>
          <div className="my-20 grid md:grid-cols-2 lg:grid-cols-3 gap-5">
            {foodItems?.map((foodItem) => (
              <FoodCard key={foodItem._id} foodItem={foodItem}></FoodCard>
            ))}
          </div>
        </div>
      )}
    </Container>
  );
};

export default AllFoodItems;
