import { useState } from "react";
import { FaEye, FaEyeSlash } from "react-icons/fa";
import logo from "../src/assets/Asset 1 1.png"
import { Link } from "react-router-dom";
import { useUserLoginMutation } from "./features/auth/auth";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const [showPassword, setShowPassword] = useState(false);
  const navigate = useNavigate()

  const [userLogin] = useUserLoginMutation()
  const { register, formState: { errors }, handleSubmit } = useForm();
  const onSubmit = async(data) => {
    const res = await userLogin(data)
    if(res.data.status === "Success"){
      console.log(res.data.data)
      localStorage.setItem("token", res.data.data.accessToken)
      navigate("/")
    }
  }



  return (
    <div className="flex items-center justify-center min-h-screen ">
      <div className=" shadow-lg rounded-lg p-8 flex w-[800px] items-center bg-gradient-to-r from-[#C2DAFFF5] to-[#EFF1F02B]">
        {/* Left Section */}
        <div className="w-1/2 flex flex-col items-center justify-center text-center p-6">
          <img src={logo} alt="Logo" className="w-48 mb-4" />
          <p className="text-gray-600 mt-2">
            Welcome back to CyberCraft Bangladesh, where your creativity thrives
          </p>
        </div>

        {/* Right Section */}
        <div className="w-1/2 p-6">
          <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
            {/* Email */}
            <div>
              <label className="block text-sm text-[#345485] text-start">Email address</label>
              <input 
              {...register("email", { required: true })} 
                type="email" 
                placeholder="Your email" 
                className="w-full p-2 mt-1 border rounded-md focus:ring-2 focus:ring-blue-400 outline-none"
              />
              {errors.email?.type === 'required' && <p role="alert">Email is required</p>}
            </div>

            {/* Password */}
            <div className="relative">
              <label className="block text-sm text-[#345485] text-start">Password</label>
              <input 
                type={showPassword ? "text" : "password"} 
              {...register("password", { required: true })} 
                placeholder="Password" 
                className="w-full p-2 mt-1 border rounded-md focus:ring-2 focus:ring-blue-400 outline-none" 
              />
              <button type="button" onClick={() => setShowPassword(!showPassword)} className="absolute right-3 top-7 text-gray-600">
                {showPassword ? <FaEyeSlash /> : <FaEye />}
              </button>
              {errors.password?.type === 'required' && <p role="alert">Password is required</p>}

            </div>

            {/* Remember Me & Forgot Password */}
            <div className="flex items-center justify-between text-sm">
              <div className="flex items-center">
                <input type="checkbox" className="mr-2" />
                <span className="text-[#345485] font-medium">Remember me</span>
              </div>
              <Link className="text-[#345485] font-medium">Forgot password?</Link>
            </div>

            {/* Submit Button */}
            <button className="w-full p-2 mt-4 text-white rounded-md transition" style={{backgroundColor:"#345485"}}>
              Log in
            </button>
          </form>

          {/* Signup Redirect */}
          <div className="text-center text-sm text-gray-600">
            <p>Or</p>
            <p>Don't have an account? <Link to="/signup" className="text-[#345485] font-medium">Sign up</Link></p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
