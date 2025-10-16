import { useState, useEffect } from "react";
import {
  Bell,
  TrendingUp,
  Star,
  Clock,
  ShoppingBag,
  DollarSign,
  Users,
  ChevronRight,
} from "lucide-react";
import { VendorNav } from "../component/VendorNav";

const VendorDashboard = () => {
  const [animateStats, setAnimateStats] = useState(false);

  useEffect(() => {
    setAnimateStats(true);
  }, []);

  const menuItems = [
    {
      name: "Jollof Rice",
      orders: 89,
      price: "₦2,500",
      image: "🍛",
      trend: "+12%",
      category: "Main Course",
    },
    {
      name: "Fried Rice",
      orders: 76,
      price: "₦2,200",
      image: "🍚",
      trend: "+8%",
      category: "Main Course",
    },
    {
      name: "Chicken Suya",
      orders: 64,
      price: "₦1,800",
      image: "🍗",
      trend: "+15%",
      category: "Grills",
    },
    {
      name: "Pounded Yam",
      orders: 52,
      price: "₦3,000",
      image: "🍲",
      trend: "+5%",
      category: "Swallow",
    },
  ];

  const recentOrders = [
    {
      id: "#4521",
      customer: "Adebayo O.",
      item: "Jollof Rice",
      time: "2 min ago",
      status: "preparing",
    },
    {
      id: "#4520",
      customer: "Chioma N.",
      item: "Fried Rice",
      time: "8 min ago",
      status: "ready",
    },
    {
      id: "#4519",
      customer: "Tunde K.",
      item: "Chicken Suya",
      time: "15 min ago",
      status: "delivered",
    },
  ];

  const stats = [
    {
      label: "Total Orders",
      value: "1,284",
      change: "+18%",
      icon: ShoppingBag,
      color: "from-purple-500 to-purple-600",
    },
    {
      label: "Revenue",
      value: "₦3.2M",
      change: "+24%",
      icon: DollarSign,
      color: "from-green-500 to-green-600",
    },
    {
      label: "Customers",
      value: "892",
      change: "+12%",
      icon: Users,
      color: "from-blue-500 to-blue-600",
    },
    {
      label: "Avg Rating",
      value: "4.7",
      change: "+0.3",
      icon: Star,
      color: "from-yellow-500 to-yellow-600",
    },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100">
      {/* Header */}
      <VendorNav />
      <div className="bg-gradient-to-r from-green-600 to-green-700 text-white px-6 py-4 shadow-lg">
        <div className="flex items-center justify-between max-w-7xl mx-auto">
          <div>
            <h1 className="text-2xl font-bold">My Dashboard</h1>
            <p className="text-green-100 text-sm mt-1">Welcome back, Chef!</p>
          </div>
          <div className="relative">
            <Bell className="w-6 h-6 cursor-pointer hover:scale-110 transition-transform" />
            <span className="absolute -top-1 -right-1 w-5 h-5 bg-red-500 rounded-full text-xs flex items-center justify-center font-bold animate-pulse">
              3
            </span>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-6 py-8">
        {/* Stats Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          {stats.map((stat, index) => {
            const Icon = stat.icon;
            return (
              <div
                key={index}
                className={`bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 ${
                  animateStats
                    ? "opacity-100 translate-y-0"
                    : "opacity-0 translate-y-4"
                }`}
                style={{ transitionDelay: `${index * 100}ms` }}
              >
                <div className="flex items-center justify-between mb-4">
                  <div
                    className={`w-12 h-12 rounded-xl bg-gradient-to-br ${stat.color} flex items-center justify-center shadow-lg`}
                  >
                    <Icon className="w-6 h-6 text-white" />
                  </div>
                  <span className="text-green-600 text-sm font-semibold bg-green-50 px-3 py-1 rounded-full">
                    {stat.change}
                  </span>
                </div>
                <p className="text-gray-600 text-sm mb-1">{stat.label}</p>
                <p className="text-3xl font-bold text-gray-800">{stat.value}</p>
              </div>
            );
          })}
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Most Popular Orders */}
          <div className="lg:col-span-2">
            <div className="bg-white rounded-2xl shadow-lg p-6 mb-6">
              <div className="flex items-center justify-between mb-6">
                <h2 className="text-2xl font-bold text-gray-800 flex items-center gap-2">
                  <TrendingUp className="w-6 h-6 text-green-600" />
                  Most Popular Orders
                </h2>
                <button className="text-green-600 font-semibold hover:text-green-700 flex items-center gap-1">
                  View All <ChevronRight className="w-4 h-4" />
                </button>
              </div>
              <div className="space-y-4">
                {menuItems.map((item, index) => (
                  <div
                    key={index}
                    className="flex items-center gap-4 p-4 rounded-xl bg-gradient-to-r from-gray-50 to-white hover:from-green-50 hover:to-white transition-all duration-300 group cursor-pointer border border-gray-100 hover:border-green-200 hover:shadow-md"
                  >
                    <div className="w-16 h-16 bg-gradient-to-br from-green-100 to-green-200 rounded-xl flex items-center justify-center text-3xl group-hover:scale-110 transition-transform">
                      {item.image}
                    </div>
                    <div className="flex-1">
                      <h3 className="font-bold text-gray-800 group-hover:text-green-700 transition-colors">
                        {item.name}
                      </h3>
                      <p className="text-sm text-gray-500">{item.category}</p>
                      <p className="text-sm font-semibold text-green-600 mt-1">
                        {item.price}
                      </p>
                    </div>
                    <div className="text-right">
                      <p className="text-2xl font-bold text-green-600">
                        {item.orders}
                      </p>
                      <p className="text-xs text-gray-500">orders</p>
                      <span className="text-xs text-green-600 font-semibold bg-green-50 px-2 py-1 rounded-full mt-1 inline-block">
                        {item.trend}
                      </span>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Recent Orders */}
            <div className="bg-white rounded-2xl shadow-lg p-6">
              <h2 className="text-2xl font-bold text-gray-800 mb-6 flex items-center gap-2">
                <Clock className="w-6 h-6 text-green-600" />
                Recent Orders
              </h2>
              <div className="space-y-3">
                {recentOrders.map((order, index) => (
                  <div
                    key={index}
                    className="flex items-center justify-between p-4 rounded-xl bg-gradient-to-r from-gray-50 to-white hover:shadow-md transition-all border border-gray-100 cursor-pointer"
                  >
                    <div className="flex-1">
                      <div className="flex items-center gap-3 mb-1">
                        <span className="font-bold text-gray-800">
                          {order.id}
                        </span>
                        <span className="text-gray-600">•</span>
                        <span className="text-gray-700">{order.customer}</span>
                      </div>
                      <p className="text-sm text-gray-600">{order.item}</p>
                      <p className="text-xs text-gray-500 mt-1">{order.time}</p>
                    </div>
                    <span
                      className={`px-4 py-2 rounded-full text-xs font-semibold ${
                        order.status === "preparing"
                          ? "bg-yellow-100 text-yellow-700"
                          : order.status === "ready"
                          ? "bg-blue-100 text-blue-700"
                          : "bg-green-100 text-green-700"
                      }`}
                    >
                      {order.status.charAt(0).toUpperCase() +
                        order.status.slice(1)}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Reviews Section */}
          <div className="lg:col-span-1">
            <div className="bg-gradient-to-br from-green-600 to-green-700 rounded-2xl shadow-lg p-6 text-white mb-6 hover:shadow-xl transition-shadow">
              <h2 className="text-xl font-bold mb-6 flex items-center gap-2">
                <Star className="w-5 h-5" />
                Customer Reviews
              </h2>
              <div className="text-center mb-6">
                <div className="text-6xl font-bold mb-2">4.7</div>
                <div className="flex justify-center gap-1 mb-2">
                  {[1, 2, 3, 4, 5].map((star) => (
                    <Star
                      key={star}
                      className={`w-6 h-6 ${
                        star <= 4
                          ? "fill-yellow-400 text-yellow-400"
                          : "fill-yellow-400/50 text-yellow-400/50"
                      }`}
                    />
                  ))}
                </div>
                <p className="text-green-100 text-sm">(578 Reviews)</p>
              </div>
              <div className="space-y-3">
                {[
                  { stars: 5, count: 445 },
                  { stars: 4, count: 87 },
                  { stars: 3, count: 32 },
                  { stars: 2, count: 10 },
                  { stars: 1, count: 4 },
                ].map((rating) => (
                  <div key={rating.stars} className="flex items-center gap-3">
                    <span className="text-sm font-semibold w-8">
                      {rating.stars}★
                    </span>
                    <div className="flex-1 bg-white/20 rounded-full h-2 overflow-hidden">
                      <div
                        className="bg-yellow-400 h-full rounded-full transition-all duration-1000"
                        style={{ width: `${(rating.count / 578) * 100}%` }}
                      />
                    </div>
                    <span className="text-sm text-green-100 w-8">
                      {rating.count}
                    </span>
                  </div>
                ))}
              </div>
            </div>

            {/* Quick Actions */}
            <div className="bg-white rounded-2xl shadow-lg p-6">
              <h2 className="text-xl font-bold text-gray-800 mb-4">
                Quick Actions
              </h2>
              <div className="space-y-3">
                {["New Order", "View Menu", "Analytics", "Settings"].map(
                  (action, index) => (
                    <button
                      key={index}
                      className="w-full py-3 px-4 bg-gradient-to-r from-green-600 to-green-700 hover:from-green-700 hover:to-green-800 text-white rounded-xl font-semibold transition-all hover:shadow-lg transform hover:-translate-y-0.5"
                    >
                      {action}
                    </button>
                  )
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default VendorDashboard;
