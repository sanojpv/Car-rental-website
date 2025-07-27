import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { Gauge, Fuel, ReceiptIndianRupee, Car } from "lucide-react";
import { clearcart } from "../redux/Cartslice";

const Cart = () => {
  const theme = useSelector((state) => state.theme.value);
  const carts = useSelector((state) => state.cart.value);
  // const[cartitem,setCartitem]=useState(carts)
  const dispatch = useDispatch();
  const clearCartItem = () => {
    console.log("clicked");

    dispatch(clearcart());
  };
  return (
    <div
      className={theme === "light" ? " bg-white" : "bg-black border-2 h-screen"}
    >
      <div className="md:grid grid-cols-2  min-h-screen w-full border">
        {carts.length === 0 ? (
          <p
            className={
              theme === "light"
                ? "text-2xl text-violet-500  absolute top-50 animate-bounce mt-5 border"
                : "text-2xl text-violet-500 absolute top-50 animate-bounce mt-5"
            }
          >
            🛒 Your cart is empty
          </p>
        ) : (
          carts.map((item) => (
            <div>
              <div
                className="rounded-xl border text-black bg-white m-6 md:w-2/3 md:flex md:rounded-xl lg:w-2/3"
                key={item.id}
              >
                <div className="rounded-xl m-2 bg-white">
                  <img
                    src={item.images}
                    alt=""
                    className="rounded-2xl md:max-w-md mx-auto p-3 object-scale-down"
                  />
                </div>
                <div className="bg-gray-400 rounded-b-xl  pb-4 md:rounded-r-2xl md:rounded-b-none md:rounded-br-xl">
                  <h2 className="font-bold flex m-2">
                    {" "}
                    Model:
                    <Car className="text-violet-500" />
                    {item.brand} {item.model}
                  </h2>
                  <p className="flex m-2"> Color: {item.color}</p>
                  <p className="flex m-2">
                    Fuel type:
                    <Fuel className="text-green-500" />
                    {item.fueltype}
                  </p>
                  <p className="flex m-2">
                    mileage:
                    <Gauge className="text-red-500" />
                    {item.mileage}
                  </p>
                  <p className="flex m-2">
                    price:
                    <ReceiptIndianRupee className="text-yellow-500" />
                    {item.price}/day
                  </p>
                </div>
              </div>
            </div>
          ))
        )}
      </div>
      <div className="m-5 fixed bottom-0">
        <button
          className="px-3 py-2 bg-red-500 rounded-sm cursor-pointer"
          onClick={clearCartItem}
        >
          Clear cart
        </button>
      </div>
    </div>
  );
};

export default Cart;
