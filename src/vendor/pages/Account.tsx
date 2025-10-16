import { useState } from "react";
import {
  User,
  FileText,
  History,
  Wallet,
  Smartphone,
  Star,
  Headphones,
  LogOut,
  ShoppingBag,
  ChevronRight,
  Award,
  TrendingUp,
  Crown,
} from "lucide-react";
import { VendorNav } from "../component/VendorNav";
import { Link } from "react-router-dom";

const Account = () => {
  const [isHovering, setIsHovering] = useState<string | null>(null);

  const menuItems = [
    {
      icon: User,
      label: "Profile",
      description: "Manage your personal info",
      color: "from-blue-500 to-blue-600",
      bgColor: "bg-blue-50",
      hoverColor: "hover:bg-blue-100",
      sec: "ProfileSetting",
    },
    {
      icon: FileText,
      label: "Menu",
      description: "View and manage menu items",
      color: "from-green-500 to-green-600",
      bgColor: "bg-green-50",
      hoverColor: "hover:bg-green-100",
      sec: "menu",
    },
    {
      icon: History,
      label: "Order History",
      description: "Track all your orders",
      color: "from-purple-500 to-purple-600",
      bgColor: "bg-purple-50",
      hoverColor: "hover:bg-purple-100",
      sec: "orderhistory",
    },
    {
      icon: Wallet,
      label: "Earning and Payment",
      description: "Manage earnings & payments",
      color: "from-yellow-500 to-yellow-600",
      bgColor: "bg-yellow-50",
      hoverColor: "hover:bg-yellow-100",
      sec: "earning",
    },
    {
      icon: Smartphone,
      label: "Devices and Session",
      description: "Manage connected devices",
      color: "from-indigo-500 to-indigo-600",
      bgColor: "bg-indigo-50",
      hoverColor: "hover:bg-indigo-100",
      sec: "DevicesSession",
    },
    {
      icon: Star,
      label: "Review and Ratings",
      description: "View customer feedback",
      color: "from-pink-500 to-pink-600",
      bgColor: "bg-pink-50",
      hoverColor: "hover:bg-pink-100",
      sec: "ProfileSetting",
    },
    {
      icon: Headphones,
      label: "Support",
      description: "Get help from our team",
      color: "from-red-500 to-red-600",
      bgColor: "bg-red-50",
      hoverColor: "hover:bg-red-100",
      sec: "Support-vendor",
    },
  ];

  const stats = [
    {
      icon: ShoppingBag,
      label: "Total Orders",
      value: "1,284",
      color: "text-blue-600",
    },
    {
      icon: TrendingUp,
      label: "Revenue",
      value: "₦3.2M",
      color: "text-green-600",
    },
    { icon: Award, label: "Rating", value: "4.0", color: "text-yellow-600" },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100 pb-24">
      <VendorNav />
      {/* Header */}
      <div className="bg-gradient-to-r from-green-600 to-green-700 text-white px-6 py-4 shadow-lg">
        <div className="flex items-center justify-center">
          <h1 className="text-xl font-bold">Profile</h1>
        </div>
      </div>

      <div className="max-w-4xl mx-auto px-4 py-6">
        {/* Profile Card */}
        <div className="bg-white rounded-3xl shadow-xl p-8 mb-6 relative overflow-hidden">
          {/* Decorative background elements */}
          <div className="absolute top-0 right-0 w-64 h-64 bg-gradient-to-br from-green-100 to-transparent rounded-full -mr-32 -mt-32 opacity-50"></div>
          <div className="absolute bottom-0 left-0 w-48 h-48 bg-gradient-to-tr from-green-100 to-transparent rounded-full -ml-24 -mb-24 opacity-50"></div>

          <div className="relative z-10">
            {/* Profile Image and Rating */}
            <div className="flex justify-center mb-4 relative">
              <div className="relative">
                <div className="w-32 h-32 rounded-full bg-gradient-to-br from-green-400 to-green-600 p-1 shadow-2xl animate-pulse">
                  <div className="w-full h-full rounded-full bg-gradient-to-br from-gray-800 to-gray-600 flex items-center justify-center text-white text-4xl font-bold overflow-hidden">
                    <img
                      src="https://images.unsplash.com/photo-1577219491135-ce391730fb2c?w=400&h=400&fit=crop"
                      alt="Profile"
                      className="w-full h-full object-cover"
                    />
                  </div>
                </div>
                {/* Crown Badge */}
                <div className="absolute -top-2 -right-2 w-12 h-12 bg-gradient-to-br from-yellow-400 to-yellow-600 rounded-full flex items-center justify-center shadow-lg animate-bounce">
                  <Crown className="w-6 h-6 text-white" />
                </div>
              </div>

              {/* Rating Badge */}
              <div className="absolute right-8 top-0 bg-white rounded-full px-4 py-2 shadow-xl flex items-center gap-2 border-2 border-green-200">
                <span className="text-2xl font-bold text-gray-800">4.0</span>
                <Star className="w-6 h-6 fill-yellow-400 text-yellow-400" />
              </div>
            </div>

            {/* Store Info */}
            <div className="text-center mb-6">
              <h2 className="text-3xl font-bold text-gray-800 mb-2">
                Chef's Paradise
              </h2>
              <p className="text-gray-500 mb-4">
                123 Food Street, Lagos, Nigeria
              </p>

              {/* Stats Row */}
              <div className="grid grid-cols-3 gap-4 mt-6">
                {stats.map((stat, index) => {
                  const Icon = stat.icon;
                  return (
                    <div
                      key={index}
                      className="bg-gradient-to-br from-gray-50 to-white rounded-2xl p-4 shadow-md hover:shadow-lg transition-all duration-300 transform hover:-translate-y-1 cursor-pointer"
                    >
                      <Icon className={`w-6 h-6 ${stat.color} mx-auto mb-2`} />
                      <p className="text-2xl font-bold text-gray-800">
                        {stat.value}
                      </p>
                      <p className="text-xs text-gray-600 mt-1">{stat.label}</p>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        </div>

        {/* Menu Items */}
        <div className="space-y-3">
          {menuItems.map((item, index) => {
            const Icon = item.icon;
            return (
              <div
                key={index}
                onMouseEnter={() => setIsHovering(item.label)}
                onMouseLeave={() => setIsHovering(null)}
                className={`bg-white rounded-2xl shadow-md hover:shadow-xl transition-all duration-300 cursor-pointer transform hover:-translate-y-1 overflow-hidden ${
                  isHovering === item.label ? "scale-[1.02]" : ""
                }`}
              >
                <Link to={`/${item.sec}`}>
                  <div className="flex items-center gap-4 p-5">
                    {/* Icon */}
                    <div
                      className={`w-14 h-14 rounded-xl ${
                        item.bgColor
                      } flex items-center justify-center flex-shrink-0 transition-all duration-300 ${
                        isHovering === item.label ? "scale-110" : ""
                      }`}
                    >
                      <div
                        className={`w-12 h-12 bg-gradient-to-br ${item.color} rounded-lg flex items-center justify-center shadow-md`}
                      >
                        <Icon className="w-6 h-6 text-white" />
                      </div>
                    </div>

                    {/* Text Content */}
                    <div className="flex-1 min-w-0">
                      <h3 className="font-bold text-gray-800 text-lg mb-0.5">
                        {item.label}
                      </h3>
                      <p className="text-sm text-gray-500">
                        {item.description}
                      </p>
                    </div>

                    {/* Arrow */}
                    <ChevronRight
                      className={`w-6 h-6 text-gray-400 transition-all duration-300 ${
                        isHovering === item.label
                          ? "text-green-600 translate-x-1"
                          : ""
                      }`}
                    />
                  </div>
                </Link>
              </div>
            );
          })}
        </div>

        {/* Logout Button */}
        <button className="w-full mt-6 py-4 px-6 bg-gradient-to-r from-green-600 to-green-700 hover:from-green-700 hover:to-green-800 text-white rounded-2xl font-bold text-lg shadow-lg hover:shadow-xl transition-all duration-300 flex items-center justify-center gap-3 group transform hover:scale-[1.02]">
          <span>Log out</span>
          <LogOut className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
        </button>

        {/* Additional Info Card */}
        <div className="mt-6 bg-gradient-to-br from-green-50 to-green-100 rounded-2xl p-6 border-2 border-green-200">
          <div className="flex items-start gap-4">
            <div className="w-12 h-12 bg-green-600 rounded-full flex items-center justify-center flex-shrink-0">
              <Award className="w-6 h-6 text-white" />
            </div>
            <div>
              <h3 className="font-bold text-green-800 mb-1">Premium Member</h3>
              <p className="text-sm text-green-700">
                You're enjoying all premium features. Keep up the great work!
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Account;
