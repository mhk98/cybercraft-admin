import { Link } from "react-router-dom";
import logo from "../src/assets/Asset 1 1.png"
import Navbar from "./Navbar";

export default function ThankYou() {
    return (
     <div>
      <Navbar/>
       <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100 p-4">
        <div className="bg-white p-6 rounded-lg shadow-md text-center max-w-sm">
          <img
            src={logo}
            alt="CyberCraft Bangladesh"
            className="mx-auto mb-4 w-36"
          />
          <p className="mt-4 text-gray-700">
            Thank you so much for your nice contribution for today.
          </p>
          <Link to="/login" className="mt-6 btn px-4 py-2 rounded-md " style={{backgroundColor:"#345485", color:"white"}}>
            Go Back to Login
          </Link>
        </div>
      </div>
     </div>
    );
  }
  