import { useState } from "react";
import logo from "../../assets/Logo SVG 1.png";
import { Eye, EyeOff } from "lucide-react";
import { Link } from "react-router-dom";
import Button from "../../component/button";
const VendorLogin = () => {
  const [showPassword, setShowPassword] = useState(false);

  return (
    <div className="min-h-screen bg-white">
      <div className="max-w-md mx-auto px-6 py-8">
        <div className="flex flex-col items-center mb-16">
          <img src={logo} alt="" />
          <h1 className="text-green-600 font-bold text-xl">PickEAT PickIT</h1>
        </div>

        <div className="mb-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-2">
            Login Information
          </h2>
          <p className="text-gray-600 text-sm">
            To continue, kindly provide the following details
          </p>
        </div>

        <div className="space-y-4 mb-4">
          <div className="relative">
            <div className="absolute left-4 top-1/2 -translate-y-1/2">
              <div className="w-10 h-10 bg-green-600 rounded-lg flex items-center justify-center">
                <svg
                  className="w-5 h-5 text-white"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                  />
                </svg>
              </div>
            </div>
            <input
              type="email"
              placeholder="E-mail address"
              className="w-full pl-16 pr-4 py-3.5 border border-gray-300 rounded-lg text-green-600 placeholder-green-600 focus:outline-none focus:ring-2 focus:ring-green-600 focus:border-transparent"
            />
          </div>

          <div className="relative">
            <div className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400">
              <svg
                className="w-5 h-5"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z"
                />
              </svg>
            </div>
            <input
              type={showPassword ? "text" : "password"}
              placeholder="Password"
              className="w-full pl-12 pr-12 py-3.5 bg-gray-50 border border-gray-200 rounded-lg text-gray-900 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-green-600 focus:border-transparent"
            />
            <button
              type="button"
              onClick={() => setShowPassword(!showPassword)}
              className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-400 hover:text-gray-600"
            >
              {showPassword ? (
                <EyeOff className="w-5 h-5" />
              ) : (
                <Eye className="w-5 h-5" />
              )}
            </button>
          </div>
        </div>

        <div className="text-right mb-32">
          <button
            // onClick={() => onNavigate("forgot")}
            className="text-gray-600 text-sm hover:text-green-600"
          >
            Forget Password?
          </button>
        </div>

        <div className="text-center mb-6">
          <p className="text-gray-600 text-sm">
            Don't have an account?{" "}
            <Link to="/vendor-signup">
              <button className="text-gray-900 font-semibold hover:text-green-600">
                Sign up
              </button>
            </Link>
          </p>
        </div>

        <Link to="/vendor-dashboard">
          <button className="w-full bg-green-600 hover:bg-green-700 text-white font-semibold py-4 rounded-lg transition-colors">
            Sign In
          </button>
        </Link>
        <Link to="/">
          <div className="flex items-center justify-center mt-2 cursor-pointer">
            <Button text="Select Role" />
          </div>
        </Link>
      </div>
    </div>
  );
};

export default VendorLogin;
