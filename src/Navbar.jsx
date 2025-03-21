import React, { useState } from "react";
import { FaBell, FaSearch } from "react-icons/fa";
import logo from "../src/assets/logo.png";
import profile from "../src/assets/profile.png";
import { Link, useNavigate } from "react-router-dom";

const Navbar = () => {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const navigate = useNavigate();
  const token = localStorage.getItem("token");

  console.log("token", token);

  const handleLogout = () => {
    localStorage.removeItem("token");
    navigate("/login");
  };

  return (
    <nav className="flex items-center justify-between bg-white px-6 py-3 w-full">
      {/* Logo */}
      <div className="flex items-center space-x-2">
        <img src={logo} alt="Logo" style={{ width: "118px", height: "52px" }} />
      </div>

      {/* Profile & Notifications */}
      <div className="flex items-center space-x-4">
        {/* Search Bar */}
        <div className="relative w-96 hidden md:block">
          <input
            type="text"
            placeholder="Search"
            className="w-full p-2 pl-4 pr-10 border border-gray-300 rounded-lg outline-none focus:ring-2 focus:ring-blue-400"
          />
          <FaSearch className="absolute right-3 top-3 text-gray-500" />
        </div>

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
            <div className="absolute right-0 mt-2 w-28 bg-white rounded-lg shadow-lg border border-gray-200">
              <ul className="py-2 text-gray-700">
                {token ? (
                  <li
                    className="px-4 py-1 cursor-pointer hover:bg-gray-100"
                    onClick={handleLogout} // ✅ Fix: Remove function execution
                  >
                    Logout
                  </li>
                ) : (
                  <li className="px-4 py-1 cursor-pointer hover:bg-gray-100">
                    <Link to="/login">Login</Link>
                  </li>
                )}
              </ul>
            </div>
          )}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
