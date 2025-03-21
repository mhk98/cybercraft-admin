import { useState } from "react";
import { FaEye, FaEyeSlash } from "react-icons/fa";
import logo from "../src/assets/Asset 1 1.png";
import { Link } from "react-router-dom";
import { useUserRegisterMutation } from "./features/auth/auth";
import { useNavigate } from "react-router-dom";
const Register = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [error, setError] = useState("");
  const [fullName, setFullName] = useState("")
  const [email, setEmail] = useState("")
  const navigate = useNavigate()

  const [userRegister] = useUserRegisterMutation()
  const handleSubmit = async(e) => {
    e.preventDefault();

    if (password !== confirmPassword) {
      setError("Passwords do not match");
      return;
    }
    setError(""); // Clear error if passwords match

    const data = {
      fullName, email, password
    }
    const res = await userRegister(data)

    if(res.data.status === "Success"){
      navigate("/login")
    }
  };

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
          <form onSubmit={handleSubmit} className="space-y-4">
            {/* Full Name */}
            <div>
              <label className="block text-sm text-[#345485] text-start">Full Name</label>
              <input 
                type="text" placeholder="Your full name" 
                onChange={(e) => setFullName(e.target.value)}
                className="w-full p-2 mt-1 border rounded-md focus:ring-2 focus:ring-blue-400 outline-none" 
              />
            </div>

            {/* Email */}
            <div>
              <label className="block text-sm text-[#345485] text-start">Email</label>
              <input 
                type="email" placeholder="example@gmail.com" 
                onChange={(e) => setEmail(e.target.value)}
                className="w-full p-2 mt-1 border rounded-md focus:ring-2 focus:ring-blue-400 outline-none" 
              />
            </div>

            {/* Password */}
            <div className="relative">
              <label className="block text-sm text-[#345485] text-start">Create a password</label>
              <input 
                type={showPassword ? "text" : "password"} 
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder="must be 8 characters" 
                className="w-full p-2 mt-1 border rounded-md focus:ring-2 focus:ring-blue-400 outline-none" 
              />
              <button 
                type="button" 
                onClick={() => setShowPassword(!showPassword)} 
                className="absolute right-3 top-7"
              >
                {showPassword ? <FaEyeSlash /> : <FaEye />}
              </button>
            </div>

            {/* Confirm Password */}
            <div className="relative">
              <label className="block text-sm text-[#345485] text-start">Confirm password</label>
              <input 
                type={showConfirmPassword ? "text" : "password"} 
                value={confirmPassword}
                onChange={(e) => setConfirmPassword(e.target.value)}
                placeholder="repeat password" 
                className="w-full p-2 mt-1 border rounded-md focus:ring-2 focus:ring-blue-400 outline-none" 
              />
              <button 
                type="button" 
                onClick={() => setShowConfirmPassword(!showConfirmPassword)} 
                className="absolute right-3 top-7"
              >
                {showConfirmPassword ? <FaEyeSlash /> : <FaEye />}
              </button>
            </div>

            {/* Error Message */}
            {error && <p className="text-red-500 text-sm">{error}</p>}

            {/* Submit Button */}
            <button 
              type="submit"
              className="w-full p-2 mt-4 text-white rounded-md transition" 
              style={{backgroundColor:"#345485"}}
            >
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
