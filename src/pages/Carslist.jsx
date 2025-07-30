import React, { useState, useEffect } from "react";
import { cars } from "../data/Carsdata";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

const Carslist = () => {
  const [carsdata, setCarsdata] = useState(cars);
  const [searchText, setSearchText] = useState("");
  const [category, setCategory] = useState([]);
  const [selectedcategory, setSelectedcategory] = useState("All");
  const [minprice, setMinprice] = useState("");
  const [maxPrice, setMaxPrice] = useState("");
  const navigate = useNavigate();
  const theme = useSelector((state) => state.theme.value);

  useEffect(() => {
    let filteredItem = [...cars];

    //  Filter by brand/model name 
    if (searchText.trim() != "") {
      filteredItem = filteredItem.filter((car) =>
        (car.brand + "" + car.model)
          .toLowerCase()
          .includes(searchText.toLowerCase())
      );
    }
    let getcategory = ["All", ...new Set(cars.map((car) => car.category))];

    setCategory(getcategory);
 //filter by category
    if (selectedcategory === "All") {
      filteredItem;
    } else {
      filteredItem = filteredItem.filter(
        (car) => car.category == selectedcategory
      );
    }
    //filter by min price and max price
    if (minprice !== "") {
      filteredItem = filteredItem.filter(
        (car) => car.price >= parseInt(minprice)
      );
    }
    if (maxPrice !== "") {
      filteredItem = filteredItem.filter(
        (car) => car.price <= parseInt(maxPrice)
      );
    }

    setCarsdata(filteredItem);
  }, [searchText, selectedcategory, minprice, maxPrice]);

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

        {/*  Filters and Sorting */}
        <div className="flex flex-col lg:flex-row gap-4 mb-6 justify-between items-center">
          <input
            type="text"
            placeholder="Search by brand or model"
            className={
              theme === "light"
                ? "px-4 py-2 rounded border-2 w-full lg:w-1/3 text-blue-600  outline-0 border-blue-400"
                : "px-4 py-2 rounded border-2 w-full lg:w-1/3 text-white  outline-0 border-blue-500"
            }
            value={searchText}
            onChange={(e) => setSearchText(e.target.value)}
          />
          <div className=" border-blue-500 px-4 py-2 rounded border-2 w-full lg:w-1/4">
            <select
              onChange={(e) => setSelectedcategory(e.target.value)}
              className="outline-0 px-5 w-full"
            >
              {category.map((cat, index) => (
                <option key={index} value={cat} className="px-4 bg-gray-500">
                  {cat}
                </option>
              ))}
            </select>
          </div>
          <div className="flex gap-2 w-full  lg:w-1/3">
            <input
              type="number"
              placeholder="Minprice"
              value={minprice}
              onChange={(e) => setMinprice(e.target.value)}
              className="px-4 py-2 rounded border-2 w-1/2 border-blue-500 text-blue-500 focus:outline-amber-600"
            />
            <input
              type="number"
              placeholder="maxPrice"
              value={maxPrice}
              onChange={(e) => setMaxPrice(e.target.value)}
              className="px-4 py-2 rounded border-2 w-1/2 border-blue-500 text-blue-500 focus:outline-amber-600"
            />
          </div>
        </div>

        {/* Car Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
          {carsdata.length === 0 ? (
            <p className="col-span-3 text-center text-xl text-red-500">
              No cars match your search.
            </p>
          ) : (
            carsdata.map((car) => (
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
                  Car Model: {car.brand.toLocaleUpperCase()} {car.model}
                </h4>
                <p>Fuel Type: {car.fueltype}</p>
                <div className="flex gap-2 font-mono">
                  <p className="text-blue-500 mb-4 text-xl font-bold">
                    ₹ {car.price}
                  </p>
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
