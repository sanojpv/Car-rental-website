import React from "react";
import logo from "../assets/pngwing.com (4).png";
import { useSelector, useDispatch } from "react-redux";
import { darkmode } from "../redux/Themeslice";
import {NavLink } from "react-router-dom";
import About from "../pages/About";

const Navbar = () => {
  const theme = useSelector((state) => state.theme.value);
  const dispatch = useDispatch();
  const toogle_icon = (themes) => {
    dispatch(darkmode(themes));
   
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
        <div className="max-w-7xl mx-auto flex flex-wrap items-center justify-between gap-4">
          {/* Logo */}
          <div className="flex items-center gap-2">
            <img src={logo} alt="logo" className="h-10 w-auto" />
          </div>

          {/* Nav Links */}
          <div className="flex gap-4 text-sm sm:text-base md:text-xl">
           <NavLink to='/'>Home</NavLink>
           <NavLink to='/about'>About</NavLink>
           <NavLink to='/cart'>Cart</NavLink>
          </div>

          {/* Search + Theme Toggle */}
          <div className="flex flex-wrap items-center gap-2">
            <input
              type="text"
              placeholder="search cars"
              className={
                theme == "light"
                  ? "px-2 py-1 border-2 border-blue-400 outline-0 rounded-md text-sm hover:animate-pulse  placeholder-blue-600"
                  : "px-2 py-1 border-2 border-blue-400 outline-0 rounded-md text-sm hover:animate-pulse placeholder:search cars placeholder-blue-400"
              }
            />
            <button className="bg-green-500 text-white px-3 py-1 rounded-md hover:bg-green-600">
              Search
            </button>
           
            <button className="border-0 rounded-2xl bg-gray-300">
              {theme === "light" ? (
                <p
                  className="text-2xl text-green-500 cursor-pointer "
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
            <button className={theme==='light'?"px-1 text-xl ml-10 text-black font-sans flex":"px-1  text-xl text-white font-sans flex"}>
            {/* <p className="text-gray-600">|</p> */}
            Login
            </button>
            
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
