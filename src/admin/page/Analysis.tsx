import { useState } from "react";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
} from "recharts";
import {
  Bell,
  Menu,
  TrendingUp,
  Users,
  ShoppingBag,
  Clock,
} from "lucide-react";

const Analysis = () => {
  const [activeTab, setActiveTab] = useState("M");

  const chartData = [
    { day: "1", value: 60000 },
    { day: "3", value: 85000 },
    { day: "5", value: 95000 },
    { day: "7", value: 78000 },
    { day: "9", value: 65000 },
    { day: "11", value: 92000 },
    { day: "13", value: 72000 },
    { day: "15", value: 88000 },
    { day: "17", value: 95000 },
    { day: "19", value: 68000 },
    { day: "21", value: 82000 },
    { day: "23", value: 98000 },
    { day: "25", value: 90000 },
    { day: "27", value: 85000 },
    { day: "29", value: 95000 },
    { day: "31", value: 88000 },
  ];

  const users = [
    { name: "Esther Howard", orders: 33, avatar: "👩🏻", color: "bg-orange-400" },
    { name: "Jacob Jones", orders: 29, avatar: "👨🏻", color: "bg-green-400" },
    { name: "Bessie Cooper", orders: 24, avatar: "👩🏻‍🦰", color: "bg-blue-400" },
  ];

  const insights = [
    {
      icon: ShoppingBag,
      label: "Most sells",
      value: "Mardiya kitchen",
      color: "bg-orange-400",
    },
    {
      icon: TrendingUp,
      label: "Popular orders",
      value: "Fried rice",
      color: "bg-green-400",
    },
    {
      icon: Clock,
      label: "Peak order hours",
      value: "5PM - 9PM",
      color: "bg-blue-400",
    },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100">
      {/* Header */}
      <div className="bg-gradient-to-r from-green-600 to-green-500 text-white px-4 py-4 shadow-lg">
        <div className="max-w-7xl mx-auto">
          <div className="flex items-center justify-between mb-4">
            <button className="p-2 hover:bg-white/10 rounded-lg transition-all">
              <Menu className="w-6 h-6" />
            </button>
            <h1 className="text-xl font-bold tracking-wide">
              Reports & Analytics
            </h1>
            <button className="p-2 hover:bg-white/10 rounded-lg transition-all relative">
              <Bell className="w-6 h-6" />
              <span className="absolute top-1 right-1 w-2 h-2 bg-red-500 rounded-full animate-pulse"></span>
            </button>
          </div>

          <div className="bg-white/20 backdrop-blur-sm rounded-2xl p-4 border border-white/30 shadow-xl">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-green-100 text-sm font-medium mb-1">
                  Total Revenue
                </p>
                <p className="text-3xl font-bold tracking-tight">$1200.87</p>
              </div>
              <div className="bg-white/20 p-3 rounded-xl">
                <TrendingUp className="w-8 h-8" />
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 py-6 space-y-6">
        {/* Chart Section */}
        <div className="bg-white rounded-3xl shadow-xl p-6 border border-gray-100 animate-fade-in">
          <div className="flex items-center justify-between mb-6">
            <h2 className="text-lg font-bold text-gray-800">August 2021</h2>
            <div className="flex gap-2 bg-gray-100 rounded-xl p-1">
              {["D", "W", "M", "Y"].map((tab) => (
                <button
                  key={tab}
                  onClick={() => setActiveTab(tab)}
                  className={`px-4 py-2 rounded-lg text-sm font-semibold transition-all ${
                    activeTab === tab
                      ? "bg-green-500 text-white shadow-md"
                      : "text-gray-600 hover:text-gray-800"
                  }`}
                >
                  {tab}
                </button>
              ))}
            </div>
          </div>

          <ResponsiveContainer width="100%" height={250}>
            <BarChart
              data={chartData}
              margin={{ top: 10, right: 10, left: -20, bottom: 0 }}
            >
              <CartesianGrid
                strokeDasharray="3 3"
                stroke="#f0f0f0"
                vertical={false}
              />
              <XAxis
                dataKey="day"
                axisLine={false}
                tickLine={false}
                tick={{ fill: "#9ca3af", fontSize: 12 }}
              />
              <YAxis
                axisLine={false}
                tickLine={false}
                tick={{ fill: "#9ca3af", fontSize: 12 }}
                tickFormatter={(value) => `${value / 1000}k`}
              />
              <Tooltip
                cursor={{ fill: "rgba(34, 197, 94, 0.1)" }}
                contentStyle={{
                  backgroundColor: "white",
                  border: "none",
                  borderRadius: "12px",
                  boxShadow: "0 10px 40px rgba(0,0,0,0.1)",
                }}
                formatter={(value) => [`$${value.toLocaleString()}`, "Revenue"]}
              />
              <Bar
                dataKey="value"
                fill="#22c55e"
                radius={[8, 8, 0, 0]}
                animationDuration={1000}
              />
            </BarChart>
          </ResponsiveContainer>
        </div>

        {/* User Engagement */}
        <div className="bg-white rounded-3xl shadow-xl p-6 border border-gray-100 animate-fade-in-delay-1">
          <div className="flex items-center gap-3 mb-5">
            <div className="bg-green-100 p-2 rounded-xl">
              <Users className="w-5 h-5 text-green-600" />
            </div>
            <h2 className="text-lg font-bold text-gray-800">
              Monthly user engagement report
            </h2>
          </div>

          <div className="space-y-4">
            {users.map((user, index) => (
              <div
                key={user.name}
                className="flex items-center gap-4 p-3 rounded-2xl hover:bg-gray-50 transition-all cursor-pointer group"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <div
                  className={`w-12 h-12 ${user.color} rounded-full flex items-center justify-center text-2xl shadow-md group-hover:scale-110 transition-transform`}
                >
                  {user.avatar}
                </div>
                <div className="flex-1">
                  <p className="font-semibold text-gray-800">{user.name}</p>
                  <p className="text-sm text-gray-500">{user.orders} orders</p>
                </div>
                <div className="w-16 h-2 bg-gray-200 rounded-full overflow-hidden">
                  <div
                    className={`h-full ${user.color} rounded-full transition-all duration-1000`}
                    style={{ width: `${(user.orders / 33) * 100}%` }}
                  ></div>
                </div>
              </div>
            ))}
          </div>

          <button className="w-full mt-4 py-3 text-green-600 font-semibold hover:bg-green-50 rounded-xl transition-all">
            See all →
          </button>
        </div>

        {/* Order Insights */}
        <div className="bg-white rounded-3xl shadow-xl p-6 border border-gray-100 animate-fade-in-delay-2">
          <h2 className="text-lg font-bold text-gray-800 mb-5">
            Order insight
          </h2>

          <div className="space-y-4">
            {insights.map((insight, index) => {
              const Icon = insight.icon;
              return (
                <div
                  key={insight.label}
                  className="flex items-center gap-4 p-3 rounded-2xl hover:bg-gray-50 transition-all cursor-pointer group"
                  style={{ animationDelay: `${index * 100}ms` }}
                >
                  <div
                    className={`w-12 h-12 ${insight.color} rounded-full flex items-center justify-center shadow-md group-hover:scale-110 transition-transform`}
                  >
                    <Icon className="w-6 h-6 text-white" />
                  </div>
                  <div className="flex-1">
                    <p className="text-sm text-gray-500">{insight.label}</p>
                    <p className="font-semibold text-gray-800">
                      {insight.value}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>

      <style>{`
        @keyframes fade-in {
          from {
            opacity: 0;
            transform: translateY(20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        .animate-fade-in {
          animation: fade-in 0.6s ease-out;
        }

        .animate-fade-in-delay-1 {
          animation: fade-in 0.6s ease-out 0.2s backwards;
        }

        .animate-fade-in-delay-2 {
          animation: fade-in 0.6s ease-out 0.4s backwards;
        }
      `}</style>
    </div>
  );
};

export default Analysis;
