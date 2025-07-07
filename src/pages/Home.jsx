import React, { useState } from "react";
import { useSelector } from "react-redux";
import Carslist from "./Carslist";

const Home = () => {
  const theme = useSelector((state) => state.theme.value);

  return (
    <div className="bg-gray-50 min-h-screen">
      {/* Hero Section */}
      <section
        className={
          theme === "light"
            ? "flex flex-col md:flex-row items-center justify-between px-8 md:px-20 py-10 h-screen bg-white"
            : "flex flex-col md:flex-row items-center justify-between px-8 md:px-20 py-16 h-screen bg-gray-900 "
        }
      >
        <div className="max-w-xl">
          <h2
            className={
              theme === "light"
                ? "text-4xl font-bold text-gray-800 mb-4"
                : "text-4xl font-bold text-white mb-4"
            }
          >
            Find Your Perfect Ride
          </h2>
          <p
            className={
              theme === "light" ? "text-gray-600 mb-6" : " text-white mb-6"
            }
          >
            Choose from a wide range of cars. Affordable. Reliable. Convenient.
          </p>
          <button className="bg-green-800 text-white px-6 py-3 rounded hover:bg-green-600">
            Book Now
          </button>
        </div>
        <div
          className={
            theme === "light"
              ? ""
              : "relative p-1 border-animation w-fit rounded-lg"
          }
        >
          <img
            src="https://img.autocarindia.com/mmv_images/colors/20250508070453_BMW_M5_Isle_Of_Man_Green_Metallic[1].png?w=750&h=500&q=90&c=1"
            alt="Car"
            className="rounded-lg"
            width={600}
          />
        </div>
      </section>
      <Carslist />
    </div>
  );
};

export default Home;
