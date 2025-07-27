import React, { useState, useEffect } from "react";
import { cars } from "../data/Carsdata";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import Sort from "./Sort";

const Carslist = () => {
  const [carsdata, setCarsdata] = useState(cars);
  const [sorting, setSorting] = useState();
  const [searchText, setSearchText] = useState("");
  const [minPrice, setMinPrice] = useState("");
  const [maxPrice, setMaxPrice] = useState("");

  const navigate = useNavigate();
  const theme = useSelector((state) => state.theme.value);

  useEffect(() => {
    let filtered = [...cars];

    // 🔍 Filter by brand/model name
    if (searchText.trim() !== "") {  
      filtered = filtered.filter((car) =>
        (car.brand + " " + car.model).toLowerCase().includes(searchText.toLowerCase())
      );
    }

    // 💸 Filter by custom price range
    if (minPrice !== "") {
      filtered = filtered.filter((car) => car.price >= parseInt(minPrice));
    }
    if (maxPrice !== "") {
      filtered = filtered.filter((car) => car.price <= parseInt(maxPrice));
    }

    setCarsdata(filtered);
  }, [searchText, minPrice, maxPrice]);

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

        {/* 🔍 Filters and Sorting */}
        <div className="flex flex-col lg:flex-row gap-4 mb-6 justify-between items-center">
          <input
            type="text"
            placeholder="Search by brand or model"
            className="px-4 py-2 rounded border w-full lg:w-1/3 text-black"
            value={searchText}
            onChange={(e) => setSearchText(e.target.value)}
          />

          <div className="flex gap-2 w-full lg:w-1/3">
            <input
              type="number"
              placeholder="Min Price"
              className="px-4 py-2 rounded border w-1/2 text-black"
              value={minPrice}
              onChange={(e) => setMinPrice(e.target.value)}
            />
            <input
              type="number"
              placeholder="Max Price"
              className="px-4 py-2 rounded border w-1/2 text-black"
              value={maxPrice}
              onChange={(e) => setMaxPrice(e.target.value)}
            />
          </div>

          <div className="w-full lg:w-1/3">
            <Sort sorting={setSorting} />
          </div>
        </div>

        {/* 🚘 Car Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
          {carsdata.length === 0 ? (
            <p className="col-span-3 text-center text-xl text-red-500">
              No cars match your search.
            </p>
          ) : (
            carsdata.map((car) => (
              <div key={car.id} className="bg-white p-4 rounded shadow text-black">
                <img
                  src={car.images}
                  alt="Car"
                  className="w-full h-45 object-cover rounded mb-4"
                />
                <h4 className="mb-2">
                  Car Model: {car.brand.toLocaleUpperCase()} {car.model}
                </h4>
                <p>Fuel Type: {car.fueltype}</p>
                <div className="flex gap-2 font-mono">
                  <p className="text-blue-500 mb-4 text-xl font-bold">₹ {car.price}</p>
                  <p className="text-gray-400 text-xl">/day</p>
                </div>
                <button
                  className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700 w-full"
                  onClick={() => navigate(`/${car.id}`)}
                >
                  Rent Now
                </button>
              </div>
            ))
          )}
        </div>
      </section>
    </div>
  );
};

export default Carslist;
