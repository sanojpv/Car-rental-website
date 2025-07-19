import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { cars } from "../data/Carsdata";
const Confirmation = () => {
  const [carsdata, setCarsdata] = useState(cars);
  const navigate = useNavigate();
  const confirmBooking = () => {
    alert("booking confirm");
    navigate(`/${carsdata.id}`);
  };
  return (
    <div className="fixed inset-0 bg-opacity-50  flex items-center justify-center z-50">
      <div className="bg-gray-900 border opacity-95  rounded-lg shadow-xl w-[90%] max-w-md p-6 relative">
        <h2 className="text-2xl font-semibold text-center mb-6 text-gray-800 dark:text-white">
          Confirm Booking
        </h2>
        <div className="flex items-center justify-center">
          <p className="text-white ">Are you sure to Booking</p>
          <button
            className="bg-red-500 p-2 m-2 rounded-sm cursor-pointer"
            onClick={() => navigate(`/${carsdata.id}`)}
          >
            Cancel
          </button>
          <button
            className="bg-green-500 p-2 m-2 rounded-sm cursor-pointer"
            onClick={confirmBooking}
          >
            Confirm
          </button>
        </div>
      </div>
    </div>
  );
};

export default Confirmation;
