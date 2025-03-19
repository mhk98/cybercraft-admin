import { useState } from "react";
import { FaEye, FaEyeSlash } from "react-icons/fa";
import logo from "../src/assets/Asset 1 1.png"
import { Link } from "react-router-dom";

const Register = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);

  return (
    <div className="flex items-center justify-center min-h-screen">
      <div className="bg-white shadow-lg rounded-lg p-8 flex w-[800px] items-center bg-gradient-to-r from-[#C2DAFFF5] to-[#EFF1F02B]">
        {/* Left Section */}
        <div className="w-1/2 flex flex-col items-center justify-center text-center p-6">
          <img src={logo} alt="Logo" className="w-48 mb-4" />
          <p className="text-gray-600 mt-2">
            Welcome back to CyberCraft Bangladesh, where your creativity thrives
          </p>
        </div>

        {/* Right Section */}
        <div className="w-1/2 p-6">
          <form className="space-y-4">
            {/* Full Name */}
            <div>
              <label className="block text-sm text-[#345485] text-start">Full Name</label>
              <input type="text" placeholder="Your full name" className="w-full p-2 mt-1 border rounded-md focus:ring-2 focus:ring-blue-400 outline-none" />
            </div>

            {/* Email */}
            <div>
              <label className="block text-sm text-[#345485] text-start">Email</label>
              <input type="email" placeholder="example@gmail.com" className="w-full p-2 mt-1 border rounded-md focus:ring-2 focus:ring-blue-400 outline-none" />
            </div>

            {/* Password */}
            <div className="relative">
              <label className="block text-sm text-[#345485] text-start">Create a password</label>
              <input 
                type={showPassword ? "text" : "password"} 
                placeholder="must be 8 characters" 
                className="w-full p-2 mt-1 border rounded-md focus:ring-2 focus:ring-blue-400 outline-none" 
              />
              <button type="button" onClick={() => setShowPassword(!showPassword)} className="absolute right-3 top-7  hover-none">
                {showPassword ? <FaEyeSlash /> : <FaEye />}
              </button>
            </div>

            {/* Confirm Password */}
            <div className="relative">
              <label className="block text-sm text-[#345485] text-start">Confirm password</label>
              <input 
                type={showConfirmPassword ? "text" : "password"} 
                placeholder="repeat password" 
                className="w-full p-2 mt-1 border rounded-md focus:ring-2 focus:ring-blue-400 outline-none" 
              />
              <button type="button" onClick={() => setShowConfirmPassword(!showConfirmPassword)} className="absolute right-3 top-7  ">
                {showConfirmPassword ? <FaEyeSlash /> : <FaEye />}
              </button>
            </div>

            {/* Submit Button */}
            <button className="w-full p-2 mt-4 text-white rounded-md  transition" style={{backgroundColor:"#345485"}}>
              Create account
            </button>
          </form>

          {/* Login Redirect */}
          <div className="text-center mt-4 text-sm text-gray-600">
            <p>Or</p>
            <p>Already have an account? <Link to="/login" className="text-[#345485] font-medium">Log in</Link></p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Register;
