import React, { useState } from "react";
import {
  LayoutDashboard,
  ShoppingCart,
  Users,
  DollarSign,
  BarChart3,
  FileText,
  Folder,
  HelpCircle,
  X,
  Menu,
  Bell,
  CheckCircle,
  XCircle,
  Clock,
} from "lucide-react";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
} from "recharts";
import UserManagement from "../page/UserManagement";

// Types
type MenuItem = {
  id: string;
  label: string;
  icon: React.ReactNode;
};

// type OrderStats = {
//   active: number;
//   completed: number;
//   canceled: number;
// };

// Mock data for the chart
const chartData = [
  { day: "02", value: 45000 },
  { day: "04", value: 78000 },
  { day: "06", value: 52000 },
  { day: "08", value: 95000 },
  { day: "10", value: 68000 },
  { day: "12", value: 125000 },
  { day: "14", value: 88000 },
  { day: "16", value: 145000 },
  { day: "18", value: 92000 },
  { day: "20", value: 168000 },
  { day: "22", value: 115000 },
  { day: "24", value: 78000 },
  { day: "26", value: 198000 },
  { day: "28", value: 145000 },
  { day: "30", value: 225000 },
];

const AdminDashboard: React.FC = () => {
  const [isOpen, setIsOpen] = useState(true);
  const [activeMenu, setActiveMenu] = useState("dashboard");

  const menuItems: MenuItem[] = [
    {
      id: "dashboard",
      label: "Dashboard",
      icon: <LayoutDashboard size={20} />,
    },
    {
      id: "orders",
      label: "Order management",
      icon: <ShoppingCart size={20} />,
    },
    { id: "users", label: "Users management", icon: <Users size={20} /> },
    {
      id: "earnings",
      label: "Earnings & Transaction",
      icon: <DollarSign size={20} />,
    },
    {
      id: "reports",
      label: "Reports & Analytics",
      icon: <BarChart3 size={20} />,
    },
    { id: "pages", label: "Pages & Restriction", icon: <FileText size={20} /> },
    { id: "content", label: "Content Management", icon: <Folder size={20} /> },
    { id: "help", label: "Help & Support", icon: <HelpCircle size={20} /> },
  ];

  const DashboardContent: React.FC = () => (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex items-center justify-between">
        <h1 className="text-2xl font-bold text-gray-800">Dashboard</h1>
        <Bell
          className="text-gray-600 cursor-pointer hover:text-gray-800"
          size={24}
        />
      </div>

      {/* Today's Orders Card */}
      <div className="bg-white rounded-lg shadow-sm p-6">
        <div className="flex items-center justify-between mb-6">
          <h2 className="text-green-600 font-semibold">Todays Orders</h2>
          <span className="text-gray-500 text-sm">02 Nov, 2023</span>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {/* Circular Progress */}
          <div className="flex items-center justify-center">
            <div className="relative w-48 h-48">
              <svg className="w-full h-full transform -rotate-90">
                <circle
                  cx="96"
                  cy="96"
                  r="80"
                  stroke="#E5E7EB"
                  strokeWidth="16"
                  fill="none"
                />
                <circle
                  cx="96"
                  cy="96"
                  r="80"
                  stroke="#3B82F6"
                  strokeWidth="16"
                  fill="none"
                  strokeDasharray="502.4"
                  strokeDashoffset="125.6"
                  strokeLinecap="round"
                />
              </svg>
              <div className="absolute inset-0 flex flex-col items-center justify-center">
                <span className="text-3xl font-bold text-blue-600">
                  5,824,213
                </span>
                <span className="text-gray-400 text-sm">1/3 Goal</span>
              </div>
            </div>
          </div>

          {/* Order Stats */}
          <div className="space-y-4">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-2">
                <div className="w-3 h-3 bg-blue-400 rounded-full"></div>
                <span className="text-gray-600">Active Orders</span>
              </div>
              <span className="font-semibold">5 Orders</span>
            </div>
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-2">
                <div className="w-3 h-3 bg-blue-600 rounded-full"></div>
                <span className="text-gray-600">Completed Orders</span>
              </div>
              <span className="font-semibold">45 Orders</span>
            </div>
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-2">
                <div className="w-3 h-3 bg-blue-200 rounded-full"></div>
                <span className="text-gray-600">Canceled Orders</span>
              </div>
              <span className="font-semibold">10 Orders</span>
            </div>
          </div>
        </div>
      </div>

      {/* Today's Earning */}
      <div className="bg-white rounded-lg shadow-sm p-6">
        <span className="text-gray-500 text-sm">Todays Earning</span>
        <div className="flex items-center justify-between mt-2">
          <h3 className="text-3xl font-bold text-gray-800">₦ 3,027.87</h3>
          <div className="text-green-600 text-sm">↑</div>
        </div>
      </div>

      {/* Pending Approvals */}
      <div className="bg-white rounded-lg shadow-sm p-6">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-4">
            <div className="bg-gray-100 p-3 rounded-lg">
              <Clock className="text-gray-600" size={24} />
            </div>
            <div>
              <h3 className="text-gray-600 font-medium">Pending approvals</h3>
              <span className="text-3xl font-bold text-green-600">5</span>
            </div>
          </div>
          <button className="text-green-600 hover:text-green-700">→</button>
        </div>
      </div>

      {/* Order Stats Chart */}
      <div className="bg-white rounded-lg shadow-sm p-6">
        <div className="flex items-center justify-between mb-4">
          <h3 className="font-semibold text-gray-800">Order Stat</h3>
          <div className="flex gap-2">
            <button className="px-3 py-1 text-sm bg-gray-100 rounded">D</button>
            <button className="px-3 py-1 text-sm bg-gray-100 rounded">W</button>
            <button className="px-3 py-1 text-sm bg-green-600 text-white rounded">
              M
            </button>
            <button className="px-3 py-1 text-sm bg-gray-100 rounded">Y</button>
          </div>
        </div>
        <div className="text-xs text-gray-500 mb-4">August 2023</div>

        <ResponsiveContainer width="100%" height={200}>
          <LineChart data={chartData}>
            <CartesianGrid strokeDasharray="3 3" stroke="#f0f0f0" />
            <XAxis
              dataKey="day"
              stroke="#9CA3AF"
              style={{ fontSize: "12px" }}
            />
            <YAxis stroke="#9CA3AF" style={{ fontSize: "12px" }} />
            <Tooltip />
            <Line
              type="monotone"
              dataKey="value"
              stroke="#22C55E"
              strokeWidth={2}
              dot={false}
            />
          </LineChart>
        </ResponsiveContainer>
      </div>

      {/* Order Summary Cards */}
      <div className="space-y-4">
        <div className="bg-white rounded-lg shadow-sm p-6">
          <div className="flex items-center gap-4">
            <div className="bg-green-100 p-3 rounded-lg">
              <CheckCircle className="text-green-600" size={24} />
            </div>
            <div className="flex-1">
              <h4 className="text-gray-700 font-medium">Active Orders</h4>
              <p className="text-2xl font-bold text-gray-800">750,456</p>
              <p className="text-green-600 text-sm">₦ 9,456,004.98</p>
            </div>
          </div>
        </div>

        <div className="bg-white rounded-lg shadow-sm p-6">
          <div className="flex items-center gap-4">
            <div className="bg-green-600 p-3 rounded-lg">
              <CheckCircle className="text-white" size={24} />
            </div>
            <div className="flex-1">
              <h4 className="text-gray-700 font-medium">Completed Orders</h4>
              <p className="text-2xl font-bold text-gray-800">750,456</p>
              <p className="text-green-600 text-sm">₦ 9,456,004.98</p>
            </div>
          </div>
        </div>

        <div className="bg-white rounded-lg shadow-sm p-6">
          <div className="flex items-center gap-4">
            <div className="bg-gray-100 p-3 rounded-lg">
              <Clock className="text-gray-600" size={24} />
            </div>
            <div className="flex-1">
              <h4 className="text-gray-700 font-medium">Pending Orders</h4>
              <p className="text-2xl font-bold text-gray-800">5</p>
              <p className="text-gray-600 text-sm">₦ 9,456,004.98</p>
            </div>
          </div>
        </div>

        <div className="bg-white rounded-lg shadow-sm p-6">
          <div className="flex items-center gap-4">
            <div className="bg-red-100 p-3 rounded-lg">
              <XCircle className="text-red-600" size={24} />
            </div>
            <div className="flex-1">
              <h4 className="text-gray-700 font-medium">Canceled Orders</h4>
              <p className="text-2xl font-bold text-gray-800">110</p>
              <p className="text-red-600 text-sm">₦ 9,456,004.98</p>
            </div>
          </div>
        </div>
      </div>

      {/* Active Users */}
      <div className="bg-white rounded-lg shadow-sm p-6">
        <div className="flex items-center gap-2 mb-4">
          <h3 className="font-semibold text-green-600">Active Users</h3>
          <HelpCircle className="text-gray-400" size={16} />
        </div>
        <div className="text-4xl font-bold text-gray-800 mb-2">
          594 <span className="text-base font-normal text-gray-500">Users</span>
        </div>
        <div className="w-full bg-gray-200 rounded-full h-2 mb-4">
          <div
            className="bg-green-600 h-2 rounded-full"
            style={{ width: "75%" }}
          ></div>
        </div>
        <div className="flex gap-4 text-sm">
          <div className="flex items-center gap-2">
            <div className="w-3 h-1 bg-green-600 rounded"></div>
            <span className="text-gray-600">Clients</span>
          </div>
          <div className="flex items-center gap-2">
            <div className="w-3 h-1 bg-gray-300 rounded"></div>
            <span className="text-gray-400">Vendors</span>
          </div>
          <div className="flex items-center gap-2">
            <div className="w-3 h-1 bg-gray-300 rounded"></div>
            <span className="text-gray-400">Riders</span>
          </div>
        </div>
      </div>
    </div>
  );

  const renderContent = () => {
    switch (activeMenu) {
      case "dashboard":
        return <DashboardContent />;
      case "orders":
        return (
          <div className="bg-white rounded-lg shadow-sm p-8">
            <h2 className="text-2xl font-bold text-gray-800 mb-4">
              Order Management
            </h2>
            <p className="text-gray-600">Manage all your orders here.</p>
          </div>
        );
      case "users":
        return <UserManagement />;
      case "earnings":
        return (
          <div className="bg-white rounded-lg shadow-sm p-8">
            <h2 className="text-2xl font-bold text-gray-800 mb-4">
              Earnings & Transaction
            </h2>
            <p className="text-gray-600">
              View earnings and transaction history.
            </p>
          </div>
        );
      case "reports":
        return (
          <div className="bg-white rounded-lg shadow-sm p-8">
            <h2 className="text-2xl font-bold text-gray-800 mb-4">
              Reports & Analytics
            </h2>
            <p className="text-gray-600">
              Generate reports and view analytics.
            </p>
          </div>
        );
      case "pages":
        return (
          <div className="bg-white rounded-lg shadow-sm p-8">
            <h2 className="text-2xl font-bold text-gray-800 mb-4">
              Pages & Restriction
            </h2>
            <p className="text-gray-600">
              Manage pages and access restrictions.
            </p>
          </div>
        );
      case "content":
        return (
          <div className="bg-white rounded-lg shadow-sm p-8">
            <h2 className="text-2xl font-bold text-gray-800 mb-4">
              Content Management
            </h2>
            <p className="text-gray-600">Manage your content and media.</p>
          </div>
        );
      case "help":
        return (
          <div className="bg-white rounded-lg shadow-sm p-8">
            <h2 className="text-2xl font-bold text-gray-800 mb-4">
              Help & Support
            </h2>
            <p className="text-gray-600">Get help and contact support.</p>
          </div>
        );
      default:
        return <DashboardContent />;
    }
  };

  return (
    <div className="flex h-screen bg-gray-50 overflow-hidden">
      {/* Sidebar */}
      <div
        className={`${
          isOpen ? "w-64" : "w-20"
        } bg-white shadow-lg transition-all duration-300 ease-in-out flex flex-col`}
      >
        {/* Logo and Toggle */}
        <div className="h-16 flex items-center justify-between px-4 border-b border-gray-200">
          {isOpen ? (
            <>
              <div className="flex items-center gap-2">
                <div className="w-8 h-8 bg-green-600 rounded flex items-center justify-center">
                  <span className="text-white font-bold">M</span>
                </div>
                <span className="font-semibold text-gray-800">Dashboard</span>
              </div>
              <button
                onClick={() => setIsOpen(false)}
                className="text-gray-500 hover:text-gray-700 transition-colors"
              >
                <X size={20} />
              </button>
            </>
          ) : (
            <button
              onClick={() => setIsOpen(true)}
              className="text-gray-500 hover:text-gray-700 transition-colors mx-auto"
            >
              <Menu size={20} />
            </button>
          )}
        </div>

        {/* Menu Items */}
        <nav className="flex-1 overflow-y-auto py-4">
          {menuItems.map((item) => (
            <button
              key={item.id}
              onClick={() => setActiveMenu(item.id)}
              className={`w-full flex items-center gap-3 px-4 py-3 transition-all ${
                activeMenu === item.id
                  ? "bg-green-50 text-green-600 border-r-4 border-green-600"
                  : "text-gray-600 hover:bg-gray-50"
              }`}
            >
              <span className="flex-shrink-0">{item.icon}</span>
              {isOpen && (
                <span className="text-sm font-medium whitespace-nowrap overflow-hidden">
                  {item.label}
                </span>
              )}
            </button>
          ))}
        </nav>
      </div>

      {/* Main Content */}
      <div className="flex-1 overflow-y-auto">
        <div className="max-w-7xl mx-auto p-4 md:p-6 lg:p-8">
          {renderContent()}
        </div>
      </div>
    </div>
  );
};

export default AdminDashboard;
