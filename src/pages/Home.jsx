import React, { useState } from "react";
import { useSelector } from "react-redux";
import Carslist from "./Carslist";
import Loginpage from "./Loginpage";
import { Link, Outlet } from "react-router-dom";


const Home = () => {
  const theme = useSelector((state) => state.theme.value);

  return (
    <div className="bg-gray-50 min-h-screen">
      {/* Hero Section */}
      <section
        className={
          theme === "light"
            ? "flex flex-col-reverse justify-center md:flex-row items-center md:justify-between px-8 md:px-20 py-10 h-screen bg-white"
            : "flex flex-col-reverse md:flex-row items-center justify-between px-8 md:px-20 py-16 h-screen bg-gray-900 "
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
          <button className="bg-blue-800 text-white px-6 py-3 rounded hover:bg-blue-700">
            <Link to={'carlist'}>
            Book Now
            </Link>
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
            src="https://vexstockimages.fastly.carvana.io/stockimages/2021_BMW_M4_COMPETITION%20COUPE%202D_GREEN_stock_desktop_1920x1080.png?v=1754307121.804"
            alt="Car"
            className="rounded-lg"
            width={750}
          />
        </div>
      </section>
      <Outlet/>
     
    </div>
  );
};

export default Home;
