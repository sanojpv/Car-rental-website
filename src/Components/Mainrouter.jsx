import React from "react";
import { Route, Routes } from "react-router-dom";
import Home from "../pages/Home";
import About from "../pages/About";
import Cart from "../pages/Cart";
import Carslist from "../pages/Carslist";
import Booking from "../pages/Booking";
import Loginpage from "../pages/Loginpage";
import Dashbord from "../pages/Dashbord";
import ProtectedRoute from "./ProtectedRoute";
import ErrorPage from "../pages/ErrorPage";

const Mainrouter = () => {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Home />}>
          <Route path="Loginpage" element={<Loginpage />} />
        </Route>

        <Route path="about" element={<About />} />
        <Route path="cart" element={<Cart />} />
        <Route path="Carlist" element={<Carslist />} />

        <Route
          path="dashbord"
          element={
            <ProtectedRoute>
              <Dashbord />
            </ProtectedRoute>
          }
        />

        <Route path=":id" element={<Booking />} />
        <Route path="*" element={<ErrorPage />} />
      </Routes>
    </div>
  );
};

export default Mainrouter;
