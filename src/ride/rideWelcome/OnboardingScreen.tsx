import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";

const OnboardingScreen: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  return (
    <div className="min-h-screen w-full bg-gradient-to-br from-gray-50 via-white to-green-50 flex items-center justify-center p-4 overflow-hidden">
      <div className="w-full ">
        {/* Skip Button */}
        <div className="flex justify-end mb-8">
          <button
            className={`text-green-600 font-semibold text-base hover:text-green-700 transition-all duration-300 ${
              isVisible
                ? "opacity-100 translate-y-0"
                : "opacity-0 -translate-y-4"
            }`}
          >
            Skip
          </button>
        </div>

        {/* Main Content Container */}
        <div className="bg-white rounded-3xl shadow-xl p-8 sm:p-10 relative overflow-hidden">
          {/* Decorative Background Elements */}
          <div className="absolute top-0 right-0 w-64 h-64 bg-green-100 rounded-full blur-3xl opacity-30 -translate-y-1/2 translate-x-1/2 animate-pulse"></div>
          <div
            className="absolute bottom-0 left-0 w-48 h-48 bg-green-200 rounded-full blur-3xl opacity-20 translate-y-1/2 -translate-x-1/2 animate-pulse"
            style={{ animationDelay: "1s" }}
          ></div>

          {/* Content */}
          <div className="relative z-10">
            {/* Title */}
            <h1
              className={`text-3xl sm:text-4xl font-bold text-gray-900 text-center mb-16 transition-all duration-700 delay-100 ${
                isVisible
                  ? "opacity-100 translate-y-0"
                  : "opacity-0 translate-y-8"
              }`}
            >
              Welcome to the
              <br />
              <span className="text-green-600 bg-gradient-to-r from-green-600 to-green-500 bg-clip-text ">
                PickItPickEat Team!
              </span>
            </h1>

            {/* Illustration Container with Real Image */}
            <div
              className={`relative h-64 sm:h-80 mb-12 rounded-2xl overflow-hidden transition-all duration-1000 delay-300 ${
                isVisible ? "opacity-100 scale-100" : "opacity-0 scale-90"
              }`}
            >
              {/* Background Image */}
              <div className="absolute inset-0 bg-gradient-to-br from-green-400/20 to-green-600/20"></div>

              {/* Main Delivery Scene Image */}
              <img
                src="https://images.unsplash.com/photo-1526367790999-0150786686a2?w=800&h=600&fit=crop"
                alt="Delivery rider on scooter"
                className="w-full h-full object-cover animate-[fadeIn_1s_ease-out]"
              />

              {/* Overlay gradient for better text contrast */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent"></div>

              {/* Animated Elements Overlay */}
              <div className="absolute top-4 right-4 bg-green-500 text-white px-4 py-2 rounded-full font-semibold text-sm shadow-lg animate-bounce">
                🚀 Fast Delivery
              </div>

              <div className="absolute bottom-4 left-4 bg-white/90 backdrop-blur-sm px-4 py-2 rounded-full font-semibold text-sm shadow-lg animate-pulse">
                💰 Earn More
              </div>

              {/* Floating badges */}
              <div className="absolute top-1/2 left-4 transform -translate-y-1/2 bg-white/95 backdrop-blur-sm p-3 rounded-xl shadow-xl animate-[float_3s_ease-in-out_infinite]">
                <div className="flex items-center gap-2">
                  <div className="w-10 h-10 bg-green-100 rounded-full flex items-center justify-center">
                    <svg
                      className="w-6 h-6 text-green-600"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
                      />
                    </svg>
                  </div>
                  <div>
                    <p className="text-xs text-gray-500">Flexible</p>
                    <p className="text-sm font-bold text-gray-900">Schedule</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Description */}
            <p
              className={`text-gray-600 text-center text-base sm:text-lg mb-8 leading-relaxed transition-all duration-700 delay-500 ${
                isVisible
                  ? "opacity-100 translate-y-0"
                  : "opacity-0 translate-y-8"
              }`}
            >
              Join thousands of riders delivering food and packages with ease.
              Earn on your schedule!
            </p>

            {/* Buttons */}
            <div
              className={`space-y-4 transition-all duration-700 delay-700 ${
                isVisible
                  ? "opacity-100 translate-y-0"
                  : "opacity-0 translate-y-8"
              }`}
            >
              <Link to="/rider-registration">
                <button className="w-full bg-gradient-to-r from-green-600 to-green-500 hover:from-green-700 hover:to-green-600 text-white font-bold py-4 px-6 rounded-xl shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300 text-lg">
                  Next
                </button>
              </Link>
              <Link to="/rider-login">
                <button className="w-full text-green-600 hover:text-green-700 font-semibold py-3 transition-all duration-300 text-base">
                  Login your account
                </button>
              </Link>
            </div>
          </div>
        </div>

        {/* Progress Indicator */}
        <div className="flex justify-center mt-8 space-x-2">
          {[0, 1, 2].map((i) => (
            <div
              key={i}
              className={`h-2 rounded-full transition-all duration-500 ${
                i === 0 ? "w-8 bg-green-600" : "w-2 bg-gray-300"
              }`}
              style={{ transitionDelay: `${800 + i * 100}ms` }}
            ></div>
          ))}
        </div>
      </div>

      <style>{`
        @keyframes fadeIn {
          from {
            opacity: 0;
            transform: scale(1.1);
          }
          to {
            opacity: 1;
            transform: scale(1);
          }
        }
        
        @keyframes float {
          0%, 100% {
            transform: translateY(-50%) translateX(0);
          }
          50% {
            transform: translateY(-50%) translateX(10px);
          }
        }
      `}</style>
    </div>
  );
};

export default OnboardingScreen;
