import React, { useState, useEffect, useRef } from "react";
import { FaBell, FaSearch, FaBars, FaTimes } from "react-icons/fa";
import logo from "../src/assets/logo.png";
import profile from "../src/assets/profile.png";
import { Link, useNavigate } from "react-router-dom";
import { jwtDecode } from "jwt-decode";

const Navbar = () => {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const dropdownRef = useRef(null);
  const navigate = useNavigate();
  const token = localStorage.getItem("token");

  // Handle click outside dropdown to close
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setIsDropdownOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);


  const [userInfo, setUserInfo] = useState("");


   useEffect(() => {
      const token = localStorage.getItem("token");
      if (token) {
        try {
          const decodedToken = jwtDecode(token);
          console.log("decodedToken", decodedToken)
          setUserInfo(decodedToken);
        } catch (error) {
          console.error("Invalid token", error);
        }
      }
    }, []);

  const handleLogout = () => {
    localStorage.removeItem("token");
    navigate("/thank-you");
  };

  return (
    <nav className="flex items-center justify-between bg-white px-6 py-3 w-full shadow-md">
      {/* Logo & Mobile Menu Button */}
      <div className="flex items-center space-x-4">
        <img src={logo} alt="Logo" className="w-[118px] h-[52px]" />
        
        {/* Mobile Menu Button */}
        <button
          className="md:hidden text-gray-700 focus:outline-none"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        >
          {isMobileMenuOpen ? <FaTimes size={22} /> : <FaBars size={22} />}
        </button>
      </div>

      {/* Search Bar (Hidden on small screens) */}
      <div className="relative w-96 hidden md:block lg:hidden">
        <input
          type="text"
          placeholder="Search"
          className="w-full p-2 pl-4 pr-10 border border-gray-300 rounded-lg outline-none focus:ring-2 focus:ring-blue-400"
        />
        <FaSearch className="absolute right-3 top-3 text-gray-500" />
      </div>

      {/* Right Section: Notifications & Profile */}
      <div className="flex items-center space-x-4">

      <div className=" w-96 hidden md:block lg:flex hidden">
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
        <div className="relative" ref={dropdownRef}>
          <div
            className="flex items-center space-x-2 cursor-pointer"
            onClick={() => setIsDropdownOpen(!isDropdownOpen)}
          >
            <div>
              <p className="text-sm font-semibold text-gray-700">{userInfo.fullName}</p>
              <p className="text-xs text-gray-500">{userInfo.role}</p>
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
                    onClick={handleLogout}
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

      {/* Mobile Menu (Hidden on Desktop) */}
      {isMobileMenuOpen && (
        <div className="absolute top-16 left-0 w-full bg-white shadow-md flex flex-col items-center space-y-4 py-4 md:hidden">
          <input
            type="text"
            placeholder="Search"
            className="w-11/12 p-2 border border-gray-300 rounded-lg outline-none focus:ring-2 focus:ring-blue-400"
          />
          <Link
            to="/notifications"
            className="flex items-center space-x-2 text-gray-700"
          >
            <FaBell size={18} />
            <span>Notifications</span>
          </Link>
          {token ? (
            <button
              onClick={handleLogout}
              className="text-red-600 bg-gray-100 px-4 py-2 rounded-md w-11/12 text-center"
            >
              Logout
            </button>
          ) : (
            <Link
              to="/login"
              className="text-blue-600 bg-gray-100 px-4 py-2 rounded-md w-11/12 text-center"
            >
              Login
            </Link>
          )}
        </div>
      )}
    </nav>
  );
};

export default Navbar;
