import { useState } from "react";
import { FaEye, FaEyeSlash } from "react-icons/fa";
import logo from "../src/assets/Asset 1 1.png"

const Login = () => {
  const [showPassword, setShowPassword] = useState(false);

  return (
    <div className="flex items-center justify-center min-h-screen bg-gradient-to-b from-blue-200 to-blue-300">
      <div className="bg-white shadow-lg rounded-lg p-8 flex w-[800px]">
        {/* Left Section */}
        <div className="w-1/2 flex flex-col items-center justify-center text-center p-6">
          <img src={logo} alt="Logo" className="w-24 mb-4" />
          <h2 className="text-2xl font-semibold text-gray-700">CyberCraft <span className="text-blue-700">Bangladesh</span></h2>
          <p className="text-gray-600 mt-2">
            Welcome back to CyberCraft Bangladesh, where your creativity thrives
          </p>
        </div>

        {/* Right Section */}
        <div className="w-1/2 p-6">
          <form className="space-y-4">
            {/* Email */}
            <div>
              <label className="block text-sm text-gray-700">Email address</label>
              <input 
                type="email" 
                placeholder="Your email" 
                className="w-full p-2 mt-1 border rounded-md focus:ring-2 focus:ring-blue-400 outline-none"
              />
            </div>

            {/* Password */}
            <div className="relative">
              <label className="block text-sm text-gray-700">Password</label>
              <input 
                type={showPassword ? "text" : "password"} 
                placeholder="Password" 
                className="w-full p-2 mt-1 border rounded-md focus:ring-2 focus:ring-blue-400 outline-none" 
              />
              <button type="button" onClick={() => setShowPassword(!showPassword)} className="absolute right-3 top-7 text-gray-600">
                {showPassword ? <FaEyeSlash /> : <FaEye />}
              </button>
            </div>

            {/* Remember Me & Forgot Password */}
            <div className="flex items-center justify-between text-sm">
              <div className="flex items-center">
                <input type="checkbox" className="mr-2" />
                <span className="text-gray-700">Remember me</span>
              </div>
              <a href="#" className="text-blue-700 font-medium">Forgot password?</a>
            </div>

            {/* Submit Button */}
            <button className="w-full p-2 mt-4 bg-blue-700 text-white rounded-md hover:bg-blue-800 transition">
              Log in
            </button>
          </form>

          {/* Signup Redirect */}
          <div className="text-center mt-4 text-sm text-gray-600">
            <p>Or</p>
            <p>Don't have an account? <a href="#" className="text-blue-700 font-medium">Sign up</a></p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
