import React, { useState } from "react";
import { cars } from "../data/Carsdata";
import { useSelector } from "react-redux";
import {useNavigate } from "react-router-dom";
const Carslist = () => {
  const [carsdata, setCarsdata] = useState(cars);
  const navigate=useNavigate()
  const theme = useSelector((state) => state.theme.value);
  return (
    <div>
     
      <section
        className={
          theme === "light"
            ? "px-8 md:px-20 py-16 bg-gray-100"
            : "px-8 md:px-20 py-16 bg-gray-900 text-white"
        }
      >
        <h3 className="text-3xl font-bold text-center mb-10">Available Cars</h3>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
          {carsdata.map((car) => (
            <div
              key={car.id}
              className="bg-white p-4 rounded shadow text-black"
            >
              <img
                src={car.images}
                alt="Car"
                className="w-full h-45 object-cover rounded mb-4"
              />
              <h4 className="mb-2">
                Car Model:{car.brand.toLocaleUpperCase()} {car.model}
              </h4>
              <p>Fuel Type:{car.fueltype}</p>
              <div className="flex gap-2 font-mono">
                <p className="text-blue-500 mb-4 text-xl font-bold">
                  ₹ {car.price}
                </p>
                <p className="text-gray-400 text-xl">/day</p>
              </div>
              <button className="bg-fuchsia-500 text-white px-4 py-2 rounded hover:bg-fuchsia-600" onClick={()=>navigate(`${car.id}`)}>
               
               Rent Now
            
              </button>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default Carslist;
