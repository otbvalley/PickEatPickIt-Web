// import { useState } from "react";
import {
  User,
  Clock,
  Wallet,
  Moon,
  Monitor,
  HelpCircle,
  Users,
  LogOut,
} from "lucide-react";
import { Navbar } from "../component/Navbar";
import { Link } from "react-router-dom";
// import { useNavigate } from "react-router-dom";

interface MenuItem {
  icon: React.ReactNode;
  label: string;

  secs: string;
}

const Profile: React.FC = () => {
  const menuItems: MenuItem[] = [
    {
      icon: <User className="w-5 h-5 text-green-600" />,
      label: "Profile",
      secs: "/profile-edit",
    },
    {
      icon: <Clock className="w-5 h-5 text-green-600" />,
      label: "Booking History",
      secs: "/profile-edit",
    },
    {
      icon: <Wallet className="w-5 h-5 text-green-600" />,
      label: "Wallet",
      secs: "/wallet",
    },
    {
      icon: <Moon className="w-5 h-5 text-green-600" />,
      label: "Dark Theme",
      secs: "/profile-edit",
    },
    {
      icon: <Monitor className="w-5 h-5 text-green-600" />,
      label: "Devices and Session",
      secs: "/profile-edit",
    },
    {
      icon: <HelpCircle className="w-5 h-5 text-green-600" />,
      label: "FAQ",
      secs: "/profile-edit",
    },
    {
      icon: <Users className="w-5 h-5 text-green-600" />,
      label: "Support",
      secs: "/support",
    },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100 flex flex-col">
      {/* Main Content */}
      <Navbar />
      <div className="flex-1 overflow-y-auto pb-20">
        {/* Header */}
        <div className="bg-white px-6 py-6 text-center border-b border-gray-100">
          <h1 className="text-xl font-bold text-gray-900">Profile</h1>
        </div>

        {/* User Info Card */}
        <div className="px-6 py-8">
          <div className="bg-white rounded-3xl shadow-lg shadow-gray-200/50 p-8 text-center border border-gray-100">
            <div className="relative inline-block mb-6">
              <div className="w-28 h-28 rounded-full bg-gradient-to-br from-green-400 to-green-600 flex items-center justify-center shadow-xl">
                <span className="text-4xl font-bold text-white">JS</span>
              </div>
              <div className="absolute bottom-1 right-1 w-6 h-6 bg-green-500 rounded-full border-4 border-white"></div>
            </div>

            <h2 className="text-2xl font-bold text-gray-900 mb-2">
              James Sussy Milburn
            </h2>
            <p className="text-sm text-gray-500 mb-1">sussyjames@outlook.com</p>
            <p className="text-sm font-semibold text-green-600">
              +234 906 3287 855
            </p>
          </div>
        </div>

        {/* Menu Items */}
        <div className="px-6 space-y-3 mb-6">
          {menuItems.map((item, index) => (
            <Link to={item.secs}>
              <button
                key={index}
                className="w-full bg-white rounded-2xl p-4 flex items-center gap-4 shadow-sm hover:shadow-md transition-all duration-300 border border-gray-100 hover:border-green-200 group"
              >
                <div className="w-12 h-12 bg-green-50 rounded-xl flex items-center justify-center group-hover:bg-green-100 transition-colors">
                  {item.icon}
                </div>
                <span className="text-base font-semibold text-gray-900 group-hover:text-green-600 transition-colors">
                  {item.label}
                </span>
                <svg
                  className="w-5 h-5 ml-auto text-gray-400 group-hover:text-green-600 group-hover:translate-x-1 transition-all"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M9 5l7 7-7 7"
                  />
                </svg>
              </button>
            </Link>
          ))}
        </div>

        {/* Logout Button */}
        <div className="px-6 mb-8">
          <button className="w-full bg-gradient-to-r from-green-600 to-green-700 hover:from-green-700 hover:to-green-800 text-white font-bold py-4 px-6 rounded-2xl shadow-lg shadow-green-600/30 flex items-center justify-center gap-3 transition-all duration-300 hover:shadow-xl hover:shadow-green-600/40 active:scale-95">
            <span className="text-lg">Log out</span>
            <LogOut className="w-5 h-5" />
          </button>
        </div>
      </div>
    </div>
  );
};

export default Profile;
