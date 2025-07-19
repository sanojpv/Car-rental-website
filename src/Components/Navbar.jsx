import React, { useEffect, useState } from "react";
import logo from "../assets/pngwing.com (4).png";
import { useSelector, useDispatch } from "react-redux";
import { darkmode } from "../redux/Themeslice";
import { NavLink, useNavigate } from "react-router-dom";
import { isLogin } from "../redux/Loginslice";
import Dashbord from "../pages/Dashbord";

const Navbar = () => {
  const theme = useSelector((state) => state.theme.value);
  const logedin = useSelector((state) => state.login.value);
  const cart = useSelector((state) => state.cart.value);

  const navigate = useNavigate();
  const dispatch = useDispatch();
  const toogle_icon = (themes) => {
    dispatch(darkmode(themes));
  };

  const isLogedin = () => {
    navigate("/Loginpage");
  };
  const isLogedout = () => {
    dispatch(isLogin(false));
    localStorage.removeItem("logins");
  };
  return (
    <div>
      <nav
        className={
          theme == "light"
            ? "w-full shadow-2xl bg-gray-200 p-4"
            : "w-full bg-gray-900 shadow-2xl border-b-5 border-amber-500 p-4 text-white"
        }
      >
        <div className="max-w-8xl mx-auto flex flex-wrap items-center justify-between gap-2">
          {/* Logo */}
          <div className="flex items-center gap-2">
            <img src={logo} alt="logo" className="h-10 w-auto" />
          </div>

          {/* Nav Links */}
          <div
            className={
              theme == "light"
                ? "flex gap-5 text-sm font-bold sm:text-base md:text-xl md:font-bold rounded-md bg-blue-700 py-3 px-5 text-white"
                : "flex gap-4 text-sm font-bold sm:text-base md:text-xl md:font-bold rounded-md py-3 px-5 text-white"
            }
          >
            <NavLink to="/">Home</NavLink>
            <NavLink to="/about">About</NavLink>
            <NavLink to="/Carlist">Car List</NavLink>
            <NavLink to="/cart">Cart({cart.length})</NavLink>
          </div>
          {/* Search + Theme Toggle */}
          <div className="flex flex-wrap items-center gap-2">
            {logedin && <Dashbord />}
            {logedin ? (
              <button
                className={
                  theme === "light"
                    ? "px-1 text-xl ml-10 text-white font-sans flex bg-blue-800 rounded-xl md:px-2 py-1 font-bold"
                    : "px-1 ml-10 text-xl text-white font-sans flex bg-blue-800 rounded-lg md:px-2 font-bold"
                }
                onClick={isLogedout}
              >
                Logout
              </button>
            ) : (
              <button
                className={
                  theme === "light"
                    ? "px-1 text-xl ml-10  font-sans flex  rounded-xl md:px-2 py-1 font-bold"
                    : "px-1 ml-10 text-xl text-white font-sans flex bg-blue-800 rounded-lg md:px-2 font-bold"
                }
                onClick={isLogedin}
              >
                Login
              </button>
            )}

            <button className="border-0 rounded-2xl bg-gray-300">
              {theme === "light" ? (
                <p
                  className="text-2xl bg-gray-400 rounded-2xl cursor-pointer "
                  onClick={() => toogle_icon("dark")}
                >
                  🌙
                </p>
              ) : (
                <p
                  className="text-2xl  cursor-pointer "
                  onClick={() => toogle_icon("light")}
                >
                  🔆
                </p>
              )}
            </button>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
