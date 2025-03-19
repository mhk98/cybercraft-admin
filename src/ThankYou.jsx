import logo from "../src/assets/Asset 1 1.png"

export default function ThankYou() {
    return (
      <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100 p-4">
        <div className="bg-white p-6 rounded-lg shadow-md text-center max-w-sm">
          <img
            src={logo}
            alt="CyberCraft Bangladesh"
            className="mx-auto mb-4 w-24"
          />
          <h2 className="text-xl font-semibold text-gray-700">CyberCraft</h2>
          <p className="text-gray-600 text-sm">Bangladesh</p>
          <p className="mt-4 text-gray-700">
            Thank you so much for your nice contribution for today.
          </p>
          <button className="mt-6 px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700">
            Go Back to Login
          </button>
        </div>
      </div>
    );
  }
  