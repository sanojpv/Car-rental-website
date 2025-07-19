import React, { useEffect, useState } from "react";
import { cars } from "../data/Carsdata";
import { Link, useNavigate, useParams } from "react-router-dom";
import {
  ShoppingCart,
  ArrowBigLeft,
  Gauge,
  Fuel,
  ReceiptIndianRupee,
  Car,
} from "lucide-react";
import { useDispatch, useSelector } from "react-redux";
import { addtocart } from "../redux/Cartslice";
const Booking = () => {
  const [selectcar, setSelectcar] = useState(cars);
  const [pickdate, setPickdate] = useState("");
  const [returndate, setReturndate] = useState("");
  const [days, setDays] = useState(0);
  const [grandtotal, setGrandTotal] = useState(0);
  const [confirmBooking, setConfirmBooking] = useState(false);
  const { id } = useParams();
  useEffect(() => {
    const slcar = selectcar.find((ncar) => ncar.id == id);
    setSelectcar(slcar);
  }, []);

  useEffect(() => {
    if (pickdate && returndate) {
      const pickup = new Date(pickdate);
      const drop = new Date(returndate);

      const timeDifferance = drop.getTime() - pickup.getTime();
      const millisecondsPerDay = 1000 * 60 * 60 * 24;
      let dayDifferance = Math.ceil(timeDifferance / millisecondsPerDay);

      setDays(dayDifferance > 0 ? dayDifferance : 0);
    }
  }, [pickdate, returndate]);
  useEffect(() => {
    const dailyRent = Number(selectcar.price) || 0;

    const total = dailyRent * days;
    if (total > 0) {
      const gst_servicefee = 5 + 15; //gst and service fee
      const grandTotal = total + gst_servicefee;

      setGrandTotal(grandTotal);
    }
  }, [days]);

  const login = useSelector((state) => state.login.value);
  const theme = useSelector((state) => state.theme.value);
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const canceling = () => {
    alert("Are you sure Cancel Booking");
    setConfirmBooking(false);
  };
  const handleBooking = () => {
    if (login && pickdate && returndate) {
      console.log("confirm");
      setConfirmBooking(true);
    } else {
      console.log("please login first and book");
    }
  };
  const handleCart = (cartitem) => {
    dispatch(addtocart(cartitem));
  };

  return (
    <div
      className={
        theme === "light"
          ? "grid grid-cols-1 px-1 bg-gray-100 md:flex flex-1/2"
          : "grid grid-cols-1 px-1 bg-gray-900 md:flex flex-1/2"
      }
    >
      {confirmBooking && (
        <div className="fixed top-1/2 right-1/2 transform-translate-x-1/2 transform-translate-y-1/2 bg-white text-black px-10 py-8 rounded shadow-lg z-50 w[90%]  max-w-md text-center">
          <div className="flex justify-between items-center gap-6 text-2xl">
            <p className="ml-2">Booking Confirm🎉</p>
            {/* <button
              onClick={() => setConfirmBooking(false)}
              className="text-red-500 font-bold text-lg"
            >
              ✖
            </button> */}
          </div>
          <div className="flex justify-center gap-5 text-white mt-3">
            <button
              className="rounded-sm bg-red-500 border-red-400 px-2 cursor-pointer hover:bg-red-600"
              onClick={canceling}
            >
              cancel
            </button>
            <button
              className="rounded-sm bg-green-600 border-blue-400 px-2 cursor-pointer hover:bg-green-700"
              onClick={() => setConfirmBooking(false)}
            >
              confirm
            </button>
          </div>
        </div>
      )}
      <div className="mt-2 p-2 w-full mb-4 shadow-2xl bg-white md:rounded-2xl md:p-5 md:w-2/3 md:m-5">
        <img
          src={selectcar.images}
          alt="car image"
          className="w-full rounded-2xl mb-2 md:max-h-130"
        />
        <div className="border-0 p-2 rounded-2xl bg-gray-200">
          <h2 className="font-bold flex m-2">
            {" "}
            Model:
            <Car className="text-violet-500" />
            {selectcar.brand} {selectcar.model}
          </h2>
          {/* <p>{selectcar.color}</p> */}
          <p className="flex m-2">
            Fuel type:
            <Fuel className="text-green-500" />
            {selectcar.fueltype}
          </p>
          <p className="flex m-2">
            mileage:
            <Gauge className="text-red-500" />
            {selectcar.mileage}
          </p>
          <p className="flex m-2">
            price:
            <ReceiptIndianRupee className="text-yellow-500" />
            {selectcar.price}/day
          </p>

          <div className="grid w-full   md:flex justify-center gap-2">
            <div>
              <button className="w-full rounded-sm px-3 text-sm text-white md:text-lg  md:px-3 py-2 m-2 md:rounded-sm bg-blue-500 hover:bg-blue-600">
                <Link to="/carlist" className="flex ">
                  {" "}
                  <ArrowBigLeft />
                  Back to carlist
                </Link>
              </button>
            </div>
            <div>
              <button
                className="w-full rounded-sm px-3 text-sm text-white md:text-lg  md:px-3 py-2 m-2 md:rounded-sm bg-blue-500 hover:bg-blue-600"
                onClick={() => handleCart(selectcar)}
              >
                <Link className="flex ">
                  {" "}
                  <ShoppingCart /> Add to cart
                </Link>
              </button>
            </div>
          </div>
        </div>
      </div>
      <div className="outline-0 p-2 shadow-2xl mb-5 bg-white md:rounded-2xl md:p-5 md:w-1/3 md:m-5">
        <h2 className="text-xl font-bold py-3">🚗Book This Car </h2>
        <div>
          <h3 className="m-2">Pickup Date</h3>
          <input
            type="date"
            className="border rounded-sm px-2 py-1.5 w-full m-3"
            value={pickdate}
            onChange={(e) => setPickdate(e.target.value)}
          />
          <br />
          <h3 className="m-2">Return Date</h3>
          <input
            type="date"
            className="border rounded-sm px-2 py-1.5 w-full m-3"
            value={returndate}
            onChange={(e) => setReturndate(e.target.value)}
          />
        </div>
        {/* calculating total amt */}
        <div className="bg-gray-300 m-2 rounded-lg">
          <div className="flex justify-between px-5 rounded-sm  p-3 text-gray-700 ">
            <p>Daily Rent </p>
            <span className="text-xl">₹ {selectcar.price}</span>
          </div>
          <div className="flex justify-between px-5 rounded-sm p-3 text-gray-700">
            <p>Gst tax</p>
            <span className="text-xl"> 5%</span>
          </div>
          <div className="flex justify-between px-5 rounded-sm p-3 text-gray-700">
            <p>service fee</p>
            <span className="text-xl">₹15</span>
          </div> <hr className="font-extralight text-gray-500"/>
          <div className="flex justify-between px-5 rounded-sm p-3 text-gray-700">
            <p className="font-bold">Total Days</p>
            <span className="text-xl font-bold">{days}</span>
          </div>
          <div className="flex justify-between px-5 rounded-sm p-3 text-gray-700">
            <p className="font-bold">Total Amount</p>
            <span className="text-xl font-extrabold">₹{grandtotal}</span>
          </div>
        </div>
        <button
          className="border-0 rounded-sm bg-blue-500 p-1 text-white shadow-2xl tracking-wider cursor-pointer py-2 w-full"
          onClick={handleBooking}
        >
          Book now
        </button>
      </div>
      {/* <Outlet/> */}
    </div>
  );
};

export default Booking;
