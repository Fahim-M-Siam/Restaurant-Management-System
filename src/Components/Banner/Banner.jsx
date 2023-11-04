// @ts-nocheck
import { Link } from "react-router-dom";
import "../Banner/Banner.css";
import Container from "../UI/Container";
import Lottie from "lottie-react";

import bannerAnimation from "../../assets/bannerAnimation.json";

// @ts-nocheck
const Banner = () => {
  return (
    <div className="hero h-[600px] banner">
      <div className="overlay">
        <Container>
          <div className="hero-content text-center flex flex-col md:flex-row lg:flex-row justify-between">
            <div className="max-w-full flex-1">
              <h1 className="font-dancing text-3xl font-bold text-white mt-16">
                Welcome to TasteHarmony Cafe - Where Culinary Dreams Come to
                Life
              </h1>
              <p className="py-6 text-sm text-white">
                Experience the Art of Culinary Excellence at TasteHarmony Cafe.
                From our carefully crafted dishes to our warm and inviting
                atmosphere, we are dedicated to creating moments of gastronomic
                delight that will linger in your memory.
              </p>
              <Link to="/register">
                <button className="btn btn-outline bg-[#C59D5F] text-white">
                  Register Now
                </button>
              </Link>
            </div>
            <div className="flex-1">
              <Lottie animationData={bannerAnimation}></Lottie>
            </div>
          </div>
        </Container>
      </div>
    </div>
  );
};

export default Banner;
