import { useState } from "react";
import {
  Bell,
  ChevronRight,
  Calendar,
  Package,
  MapPin,
  TrendingUp,
  Eye,
  Bike,
  Clock,
  Star,
} from "lucide-react";
import { RiderNav } from "../component/RiderNav";
import { Link } from "react-router-dom";

export default function RiderDashboard() {
  const [activeStatus, setActiveStatus] = useState(true);

  return (
    <div className="min-h-screen bg-gray-50 pb-24">
      {/* Header */}
      <RiderNav />
      <div className="bg-white px-6 py-4 flex items-center justify-between shadow-sm sticky top-0 z-10">
        <h1 className="text-xl font-bold text-gray-800">My Dashboard</h1>
        <Link to="/rider-notifications">
          <button className="relative p-2 hover:bg-gray-100 rounded-full transition-colors">
            <Bell className="w-6 h-6 text-gray-700" />
            <span className="absolute top-1 right-1 w-2 h-2 bg-red-500 rounded-full animate-pulse"></span>
          </button>
        </Link>
      </div>

      {/* Main Content */}
      <div className="px-6 py-6 space-y-4 max-w-5xl mx-auto">
        {/* Active Status Toggle */}
        <div className="bg-white rounded-2xl p-5 shadow-sm border border-gray-100">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div
                className={`p-2 rounded-full ${
                  activeStatus ? "bg-green-100" : "bg-gray-100"
                }`}
              >
                <Bike
                  className={`w-5 h-5 ${
                    activeStatus ? "text-green-600" : "text-gray-400"
                  }`}
                />
              </div>
              <div>
                <span className="text-green-600 font-semibold text-base block">
                  Active Status
                </span>
                <span className="text-xs text-gray-500">
                  {activeStatus ? "Available for deliveries" : "Offline"}
                </span>
              </div>
            </div>
            <button
              onClick={() => setActiveStatus(!activeStatus)}
              className={`relative w-14 h-7 rounded-full transition-all duration-300 ${
                activeStatus ? "bg-green-500" : "bg-gray-300"
              }`}
            >
              <span
                className={`absolute top-0.5 left-0.5 w-6 h-6 bg-white rounded-full shadow-md transition-transform duration-300 ${
                  activeStatus ? "translate-x-7" : "translate-x-0"
                }`}
              ></span>
            </button>
          </div>
        </div>

        {/* Date Selector */}
        <div className="flex items-center gap-2 bg-white rounded-xl px-4 py-3 w-fit shadow-sm border border-gray-100">
          <Calendar className="w-5 h-5 text-green-600" />
          <span className="font-semibold text-gray-800">Today</span>
          <ChevronRight className="w-4 h-4 text-gray-400 rotate-90" />
        </div>

        {/* Today's Earnings Card */}
        <div className="bg-gradient-to-br from-white to-green-50 rounded-2xl p-6 shadow-md border border-green-100">
          <div className="flex items-start justify-between mb-2">
            <div>
              <p className="text-gray-500 text-sm mb-1">Today's Earning</p>
              <div className="flex items-baseline gap-2">
                <span className="text-gray-600 text-lg">₦</span>
                <span className="text-4xl font-bold text-gray-800">
                  3,027.87
                </span>
              </div>
            </div>
            <div className="flex gap-2">
              <button className="p-2 bg-white rounded-lg shadow-sm hover:shadow-md transition-shadow">
                <Eye className="w-5 h-5 text-gray-600" />
              </button>
              <button className="p-2 bg-green-500 rounded-lg shadow-sm hover:shadow-md transition-shadow">
                <div className="w-5 h-5 flex items-center justify-center">
                  <div className="w-3 h-3 border-2 border-white rounded-full"></div>
                  <div className="w-2 h-2 bg-white rounded-full absolute"></div>
                </div>
              </button>
            </div>
          </div>
          <div className="flex items-center gap-2 mt-4 text-green-600">
            <TrendingUp className="w-4 h-4" />
            <span className="text-sm font-medium">+12.5% from yesterday</span>
          </div>
        </div>

        {/* Today's Orders Card */}
        <div className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100 hover:shadow-md transition-shadow cursor-pointer">
          <div className="flex items-center justify-between">
            <div className="flex-1">
              <div className="flex items-center gap-2 mb-3">
                <Package className="w-5 h-5 text-gray-400" />
                <p className="text-gray-500 text-sm font-medium">
                  Today's Orders
                </p>
              </div>
              <div className="flex items-baseline gap-2 mb-3">
                <span className="text-5xl font-bold text-green-600">4</span>
                <span className="text-gray-500 text-lg mb-1">orders</span>
              </div>
              <div className="flex items-center gap-4 text-xs text-gray-500">
                <div className="flex items-center gap-1">
                  <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                  <span>3 Completed</span>
                </div>
                <div className="flex items-center gap-1">
                  <div className="w-2 h-2 bg-yellow-500 rounded-full"></div>
                  <span>1 In Progress</span>
                </div>
              </div>
            </div>
            <button className="p-3 bg-green-50 rounded-full hover:bg-green-100 transition-colors">
              <ChevronRight className="w-6 h-6 text-green-600" />
            </button>
          </div>
        </div>

        {/* Distance Card */}
        <div className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100 hover:shadow-md transition-shadow">
          <div className="flex items-center justify-between mb-4">
            <div className="flex items-center gap-2">
              <MapPin className="w-5 h-5 text-gray-400" />
              <p className="text-gray-800 font-semibold">Distance</p>
              <div className="w-4 h-4 rounded-full bg-gray-100 flex items-center justify-center cursor-help">
                <span className="text-xs text-gray-500">i</span>
              </div>
            </div>
            <button className="p-2 bg-gray-50 rounded-full hover:bg-gray-100 transition-colors">
              <ChevronRight className="w-5 h-5 text-gray-400" />
            </button>
          </div>
          <div className="flex items-baseline gap-2 mb-4">
            <span className="text-4xl font-bold text-gray-800">15.89</span>
            <span className="text-gray-500 text-lg">KM</span>
          </div>
          <div className="relative w-full h-2 bg-gray-100 rounded-full overflow-hidden">
            <div className="absolute top-0 left-0 h-full w-1/3 bg-gradient-to-r from-green-500 to-green-400 rounded-full"></div>
          </div>
          <div className="flex justify-between mt-2 text-xs text-gray-400">
            <span>0 km</span>
            <span>50 km target</span>
          </div>
        </div>

        {/* Quick Stats */}
        <div className="grid grid-cols-2 gap-4">
          <div className="bg-white rounded-xl p-4 shadow-sm border border-gray-100">
            <div className="flex items-center gap-2 mb-2">
              <Clock className="w-4 h-4 text-blue-500" />
              <span className="text-xs text-gray-500">Avg. Time</span>
            </div>
            <p className="text-2xl font-bold text-gray-800">24 min</p>
            <p className="text-xs text-gray-400 mt-1">Per delivery</p>
          </div>
          <div className="bg-white rounded-xl p-4 shadow-sm border border-gray-100">
            <div className="flex items-center gap-2 mb-2">
              <Star className="w-4 h-4 text-yellow-500 fill-yellow-500" />
              <span className="text-xs text-gray-500">Rating</span>
            </div>
            <p className="text-2xl font-bold text-gray-800">4.8</p>
            <p className="text-xs text-gray-400 mt-1">From 156 reviews</p>
          </div>
        </div>
      </div>
    </div>
  );
}
