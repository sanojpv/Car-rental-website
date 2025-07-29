import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { Gauge, Fuel, ReceiptIndianRupee, Car } from "lucide-react";
import { clearcart } from "../redux/Cartslice";

const Cart = () => {
  const theme = useSelector((state) => state.theme.value);
  const carts = useSelector((state) => state.cart.value);
  const dispatch = useDispatch();

  const clearCartItem = () => {
    dispatch(clearcart());
  };

  return (
    <div className={`${theme === "light" ? "bg-white" : "bg-black text-white"} min-h-screen pb-28`}>
      <h2 className="text-3xl font-bold text-center pt-6">🛒 Your Cart</h2>

      <div className="md:grid grid-cols-2 gap-6 p-6">
        {carts.length === 0 ? (
          <div className="col-span-2 flex items-center justify-center h-96">
            <p className="text-2xl text-violet-500 animate-bounce">🛒 Your cart is empty</p>
          </div>
        ) : (
          carts.map((item) => (
            <div
              key={item.id}
              className="rounded-xl border bg-white text-black shadow-lg overflow-hidden md:flex"
            >
              {/* Car Image */}
              <div className="w-full md:w-1/2">
                <img
                  src={item.images}
                  alt={`${item.brand} ${item.model}`}
                  className="object-cover w-full h-56 md:h-full"
                />
              </div>

              {/* Car Details */}
              <div className="p-4 bg-gray-100 flex flex-col justify-between md:w-1/2">
                <div>
                  <h2 className="font-bold text-xl flex items-center gap-2 mb-2">
                    <Car className="text-violet-500" /> {item.brand} {item.model}
                  </h2>
                  <p className="mb-1">Color: {item.color}</p>
                  <p className="flex items-center gap-2 mb-1">
                    <Fuel className="text-green-500" /> {item.fueltype}
                  </p>
                  <p className="flex items-center gap-2 mb-1">
                    <Gauge className="text-red-500" /> {item.mileage}
                  </p>
                  <p className="flex items-center gap-2 font-semibold text-lg">
                    <ReceiptIndianRupee className="text-yellow-500" /> ₹ {item.price}/day
                  </p>
                </div>
              </div>
            </div>
          ))
        )}
      </div>

      {/* Fixed Bottom Button */}
      {carts.length > 0 && (
        <div className="fixed bottom-4 w-full flex justify-center">
          <button
            className="px-6 py-3 bg-red-500 text-white rounded-lg shadow-lg hover:bg-red-600 transition"
            onClick={clearCartItem}
          >
            🗑️ Clear Cart
          </button>
        </div>
      )}
    </div>
  );
};

export default Cart;
