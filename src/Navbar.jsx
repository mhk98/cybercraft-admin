import React, { useState } from "react";
import { FaBell, FaSearch } from "react-icons/fa";
import logo from "../src/assets/logo.png";
import profile from "../src/assets/profile.png";

const Navbar = () => {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  return (
    <nav className="flex items-center justify-between bg-white px-6 py-3 w-full shadow-md">
      {/* Logo */}
      <div className="flex items-center space-x-2">
        <img src={logo} alt="Logo" className="h-8" />
      </div>

      {/* Search Bar */}
      <div className="relative w-96 hidden md:block">
        <input
          type="text"
          placeholder="Search"
          className="w-full p-2 pl-4 pr-10 border border-gray-300 rounded-lg outline-none focus:ring-2 focus:ring-blue-400"
        />
        <FaSearch className="absolute right-3 top-3 text-gray-500" />
      </div>

      {/* Profile & Notifications */}
      <div className="flex items-center space-x-4">
        {/* Notification Bell */}
        <div className="relative">
          <FaBell className="text-gray-500 text-lg cursor-pointer" />
          <span className="absolute -top-1 -right-1 bg-red-500 text-white text-xs w-4 h-4 flex items-center justify-center rounded-full">
            6
          </span>
        </div>

        {/* Profile Section */}
        <div className="relative">
          <div
            className="flex items-center space-x-2 cursor-pointer"
            onClick={() => setIsDropdownOpen(!isDropdownOpen)}
          >
            <div>
              <p className="text-sm font-semibold text-gray-700">Arya Stark</p>
              <p className="text-xs text-gray-500">Admin</p>
            </div>

            <img
              src={profile}
              alt="Profile"
              className="w-8 h-8 rounded-full border border-gray-300"
            />
          </div>

          {/* Dropdown Menu */}
          {isDropdownOpen && (
            <div className="absolute right-0 mt-2 w-48 bg-white rounded-lg shadow-lg border border-gray-200">
              <ul className="py-2 text-gray-700">
                
                <li className="px-4 py-2 hover:bg-gray-100 cursor-pointer">Login</li>
               
              </ul>
            </div>
          )}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
