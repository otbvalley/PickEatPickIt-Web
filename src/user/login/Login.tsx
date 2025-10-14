import { useState } from "react";
import { Eye, EyeOff, ShoppingBag, Heart, Star } from "lucide-react";
import { Link } from "react-router-dom";

const Login = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  // Mock logo component
  const Logo = () => (
    <div className="w-20 h-20 bg-gradient-to-br from-green-600 to-green-700 rounded-2xl flex items-center justify-center mb-3 shadow-lg">
      <ShoppingBag className="w-10 h-10 text-white" />
    </div>
  );

  return (
    <div className="min-h-screen relative overflow-hidden">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-0">
        <img
          src="https://images.unsplash.com/photo-1555939594-58d7cb561ad1?q=80&w=2787&auto=format&fit=crop"
          alt="Food background"
          className="w-full h-full object-cover"
        />
        {/* Gradient overlays for better contrast */}
        <div className="absolute inset-0 bg-gradient-to-br from-black/60 via-green-900/40 to-black/70"></div>
        <div className="absolute inset-0 backdrop-blur-[2px]"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 min-h-screen flex items-center justify-center p-4">
        <div className="w-full max-w-6xl flex flex-col lg:flex-row gap-8 items-center">
          {/* Left Side - Visual/Branding */}
          <div className="hidden lg:flex lg:w-1/2 flex-col justify-center p-8">
            <div className="relative">
              {/* Decorative glow effects */}
              <div className="absolute -top-8 -left-8 w-32 h-32 bg-green-400 rounded-full opacity-20 blur-3xl"></div>
              <div className="absolute -bottom-8 -right-8 w-40 h-40 bg-green-500 rounded-full opacity-20 blur-3xl"></div>

              {/* Main visual content */}
              <div className="relative bg-white/10 backdrop-blur-xl rounded-3xl p-12 shadow-2xl border border-white/20">
                <div className="relative z-10">
                  <div className="flex items-center gap-3 mb-6">
                    <ShoppingBag className="w-16 h-16 text-white" />
                    <Heart className="w-8 h-8 text-red-400 animate-pulse" />
                  </div>
                  <h2 className="text-4xl font-bold text-white mb-4">
                    Order Your Favorite Meals
                  </h2>
                  <p className="text-white/90 text-lg mb-8 leading-relaxed">
                    Discover amazing food from local vendors. Fresh, delicious,
                    and delivered right to your door.
                  </p>

                  {/* Features */}
                  <div className="space-y-4 mt-8">
                    <div className="flex items-center gap-3 bg-white/10 backdrop-blur-sm rounded-xl p-4 border border-white/20">
                      <div className="w-10 h-10 bg-green-500 rounded-lg flex items-center justify-center">
                        <Star className="w-5 h-5 text-white" />
                      </div>
                      <div>
                        <div className="text-white font-semibold">
                          Top Rated Vendors
                        </div>
                        <div className="text-white/70 text-sm">
                          Quality meals from trusted sellers
                        </div>
                      </div>
                    </div>
                    <div className="flex items-center gap-3 bg-white/10 backdrop-blur-sm rounded-xl p-4 border border-white/20">
                      <div className="w-10 h-10 bg-green-500 rounded-lg flex items-center justify-center">
                        <span className="text-xl">🚀</span>
                      </div>
                      <div>
                        <div className="text-white font-semibold">
                          Fast Delivery
                        </div>
                        <div className="text-white/70 text-sm">
                          Get your food in 30 minutes or less
                        </div>
                      </div>
                    </div>
                    <div className="flex items-center gap-3 bg-white/10 backdrop-blur-sm rounded-xl p-4 border border-white/20">
                      <div className="w-10 h-10 bg-green-500 rounded-lg flex items-center justify-center">
                        <span className="text-xl">💳</span>
                      </div>
                      <div>
                        <div className="text-white font-semibold">
                          Easy Payment
                        </div>
                        <div className="text-white/70 text-sm">
                          Multiple payment options available
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Decorative food items */}
                <div
                  className="absolute top-8 right-8 w-20 h-20 bg-white/10 rounded-full flex items-center justify-center backdrop-blur-sm border border-white/20 animate-bounce"
                  style={{ animationDuration: "3s" }}
                >
                  <span className="text-4xl">🍱</span>
                </div>
                <div
                  className="absolute bottom-20 right-16 w-16 h-16 bg-white/10 rounded-full flex items-center justify-center backdrop-blur-sm border border-white/20 animate-bounce"
                  style={{ animationDuration: "4s", animationDelay: "0.5s" }}
                >
                  <span className="text-3xl">🍰</span>
                </div>
                <div
                  className="absolute top-32 right-24 w-12 h-12 bg-white/10 rounded-full flex items-center justify-center backdrop-blur-sm border border-white/20 animate-bounce"
                  style={{ animationDuration: "3.5s", animationDelay: "1s" }}
                >
                  <span className="text-2xl">🥗</span>
                </div>
              </div>

              {/* Floating badge */}
              <div className="mt-8 flex gap-4 justify-center">
                <div className="bg-white/95 backdrop-blur-sm px-6 py-3 rounded-full shadow-xl flex items-center gap-2 border border-white/40">
                  <span className="text-2xl">🎉</span>
                  <span className="text-sm font-semibold text-gray-700">
                    New User Discounts
                  </span>
                </div>
              </div>
            </div>
          </div>

          {/* Right Side - Login Form */}
          <div className="w-full lg:w-1/2 max-w-md">
            <div className="bg-white/95 backdrop-blur-xl rounded-3xl shadow-2xl p-8 sm:p-10 md:p-12 border border-white/40">
              {/* Logo Section */}
              <div className="flex flex-col items-center mb-8">
                <Logo />
                <h1 className="text-green-600 font-bold text-2xl sm:text-3xl">
                  PickEAT PickIT
                </h1>
                <p className="text-gray-500 text-sm mt-2 flex items-center gap-2">
                  <ShoppingBag className="w-4 h-4" />
                  Customer Portal
                </p>
              </div>

              {/* Mobile features */}
              <div className="lg:hidden space-y-2 mb-8 p-4 bg-gradient-to-r from-green-50 to-green-100 rounded-2xl border border-green-200">
                <div className="flex items-center gap-2 text-sm">
                  <Star className="w-4 h-4 text-green-600" />
                  <span className="text-gray-700 font-medium">
                    Top rated vendors
                  </span>
                </div>
                <div className="flex items-center gap-2 text-sm">
                  <span className="text-green-600">🚀</span>
                  <span className="text-gray-700 font-medium">
                    Fast delivery guaranteed
                  </span>
                </div>
              </div>

              {/* Header */}
              <div className="mb-8">
                <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-2">
                  Welcome Back! 🍽️
                </h2>
                <p className="text-gray-600 text-sm sm:text-base">
                  Sign in to start ordering delicious meals
                </p>
              </div>

              {/* Form */}
              <div className="space-y-5">
                {/* Email Input */}
                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2">
                    Email Address
                  </label>
                  <div className="relative">
                    <div className="absolute left-4 top-1/2 -translate-y-1/2">
                      <div className="w-10 h-10 bg-gradient-to-br from-green-600 to-green-700 rounded-xl flex items-center justify-center shadow-md">
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
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      placeholder="your@email.com"
                      className="w-full pl-16 pr-4 py-4 border-2 border-gray-200 rounded-xl text-gray-900 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent transition-all text-sm sm:text-base hover:border-gray-300 bg-white"
                    />
                  </div>
                </div>

                {/* Password Input */}
                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2">
                    Password
                  </label>
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
                      value={password}
                      onChange={(e) => setPassword(e.target.value)}
                      placeholder="Enter your password"
                      className="w-full pl-12 pr-12 py-4 bg-gray-50 border-2 border-gray-200 rounded-xl text-gray-900 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent transition-all text-sm sm:text-base hover:border-gray-300"
                    />
                    <button
                      type="button"
                      onClick={() => setShowPassword(!showPassword)}
                      className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-400 hover:text-green-600 transition-colors"
                    >
                      {showPassword ? (
                        <EyeOff className="w-5 h-5" />
                      ) : (
                        <Eye className="w-5 h-5" />
                      )}
                    </button>
                  </div>
                </div>

                {/* Forgot Password */}
                <div className="text-right">
                  <button className="text-green-600 text-sm font-semibold hover:text-green-700 transition-colors hover:underline">
                    Forgot Password?
                  </button>
                </div>
              </div>
              <Link to="/user-dashboard">
                {/* Sign In Button */}
                <button className="w-full bg-gradient-to-r from-green-600 to-green-700 hover:from-green-700 hover:to-green-800 text-white font-bold py-4 rounded-xl transition-all mt-8 shadow-lg hover:shadow-xl transform hover:-translate-y-0.5 text-sm sm:text-base">
                  Sign In to Order
                </button>
              </Link>
              {/* Sign Up Link */}
              <div className="text-center mt-6">
                <p className="text-gray-600 text-sm sm:text-base">
                  New to PickEAT?{" "}
                  <Link to="/signup">
                    <button className="text-green-600 font-bold hover:text-green-700 transition-colors hover:underline">
                      Create an account
                    </button>
                  </Link>
                </p>
              </div>

              {/* Divider */}
              <div className="relative my-6">
                <div className="absolute inset-0 flex items-center">
                  <div className="w-full border-t border-gray-200"></div>
                </div>
                <div className="relative flex justify-center text-sm">
                  <span className="px-4 bg-white text-gray-500">or</span>
                </div>
              </div>
              <Link to="/">
                {/* Select Role Button */}
                <button className="w-full bg-gray-100 hover:bg-gray-200 text-gray-700 font-semibold py-3.5 rounded-xl transition-all text-sm sm:text-base border-2 border-gray-200 hover:border-gray-300">
                  ← Select Role
                </button>
              </Link>
            </div>

            {/* Footer */}
            <div className="mt-6 text-center">
              <p className="text-white/90 text-xs sm:text-sm flex items-center justify-center gap-2 bg-black/30 backdrop-blur-sm rounded-full px-4 py-2 mx-auto w-fit border border-white/20">
                <span>🔒</span>
                Secure login • Your data is safe
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
