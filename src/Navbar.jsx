import React from "react";
import { FaBell, FaSearch } from "react-icons/fa";
import logo from "../src/assets/logo.png"
import profile from "../src/assets/profile.png"

const Navbar = () => {
  return (
    <nav className="flex items-center justify-between bg-white px-6 pb-3 w-full">
      {/* Logo */}
      <div className="flex items-center space-x-2">
        <img src={logo} alt="Logo" className="h-8" /> {/* Replace with your logo */}
       
      </div>

      {/* Search Bar */}
    

      {/* Profile & Notifications */}
      <div className="flex items-center space-x-4">
      <div className="relative w-96 hidden md:block">
        <input
          type="text"
          placeholder="Search"
          className="w-full p-2 pl-4 pr-10 border border-gray-300 rounded-lg outline-none focus:ring-2 focus:ring-blue-400"
        />
        <FaSearch className="absolute right-3 top-3 text-gray-500" />
      </div>
        <div className="relative">
          <FaBell className="text-gray-500 text-lg cursor-pointer" />
          <span className="absolute -top-1 -right-1 bg-red-500 text-white text-xs w-4 h-4 flex items-center justify-center rounded-full">
            6
          </span>
        </div>
        <div className="flex items-center space-x-2">
         
          <div>
            <p className="text-sm font-semibold text-gray-700">Arya Stark</p>
            <p className="text-xs text-gray-500">Admin</p>
          </div>

          <img
            src={profile}  // Replace with actual user profile image
            alt="Profile"
            className="w-8 h-8 rounded-full"
          />
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
