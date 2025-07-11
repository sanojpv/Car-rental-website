import React, { useEffect, useState } from "react";
import { cars } from "../data/Carsdata";
import { Link, Outlet, useNavigate, useParams } from "react-router-dom";
import Confirmation from "./Confirmation";
import { useSelector } from "react-redux";
const Booking = () => {
  const [selectcar, setSelectcar] = useState(cars);
  const { id } = useParams();
  useEffect(() => {
    const slcar = selectcar.find((ncar) => ncar.id == id);
    setSelectcar(slcar);
  }, []);
   const login=useSelector((state)=>state.login.value)
const navigate=useNavigate()
const handleBooking=()=>{
 if(login){
  console.log('confitm');
  
   navigate('confirmpage')
 }else{
  console.log('please login first and book');
  
 }
   
}


  return (
    <div className="grid grid-cols-1 px-1 bg-gray-200 md:flex flex-1/2">
      <div className="rounded-2xl p-5 w-full mb-4 shadow-2xl bg-white md:w-2/3 md:m-5">
        <img
          src={selectcar.images}
          alt="car image"
          className="w-full rounded-2xl mb-2 md:max-h-3/4"
        />
        <div className="border-0 p-2 rounded-2xl bg-gray-200">
          <h2>
            {selectcar.brand} {selectcar.model}
          </h2>
          <p>{selectcar.color}</p>
          <p>⛽{selectcar.fueltype}</p>
          <p>{selectcar.milage}</p>
          <p>💰{selectcar.price}</p>
          <div>
            <button className="text-white text-lg  px-3 py-2 rounded-sm bg-blue-500 hover:bg-blue-600">
               <Link to='/carlist'>🚘Back to carlist
              </Link> 
            </button>
          </div>
        </div>
      </div>
      <div className="outline-0 rounded-2xl p-5 shadow-2xl mb-5 bg-white md:w-1/3 md:m-5">
        <h2 className="text-xl font-bold py-3">🚗Book This Car </h2>
        <div>
          <h3>Pickup Date</h3>
          <input
            type="date"
            className="border rounded-sm px-2 py-1.5 w-full mb-3"
          />
          <br />
          <h3>Return Date</h3>
          <input type="date" className="border rounded-sm px-2 py-1.5 w-full" />
        </div>
        {/* calculating side */}
        <div className="bg-gray-300 m-2 rounded-lg">

        <div className="flex justify-between px-5 rounded-sm  p-3 text-gray-700 ">

          <p>Daily Rent  </p>
          <span className="text-xl">{selectcar.price}</span>
          
        </div>
        <div className="flex justify-between px-5 rounded-sm p-3 text-gray-700">

          <p>Gst tax</p>
          <span className="text-xl"> 5%</span>
          
        </div>
        <div className="flex justify-between px-5 rounded-sm p-3 text-gray-700">

          <p>Total Amount</p>
          <span className="text-xl">tt</span>
          
        </div>
          {/* <div className="flex justify-between px-5 rounded-sm p-3">

            <p>Total Amount </p>
            <span className="text-2xl">{selectcar.price}</span>
            
          </div> */}
        </div>
      <Outlet/>
        <button className="border-0 rounded-sm bg-blue-500 p-1 text-white shadow-2xl tracking-wider cursor-pointer py-2 w-full" onClick={handleBooking}>
          Book now
        </button>
      </div>
    </div>
  );
};

export default Booking;
