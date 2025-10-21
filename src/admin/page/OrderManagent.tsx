import React, { useState } from "react";
import { Menu, Bell, ChevronRight, ArrowLeft } from "lucide-react";

type OrderStatus = "Completed" | "Pending" | "Cancelled";
type StatusTab = "All" | "Pending" | "Completed" | "Cancelled";
type Screen = "main" | "details" | "status-control";

interface Order {
  id: string;
  name: string;
  date: string;
  amount: string;
  status: OrderStatus;
  image: string;
}

interface OrderDetail {
  id: string;
  title: string;
  price: string;
  quantity: string;
  status: string;
  items: Array<{
    quantity: number;
    name: string;
    price: string;
  }>;
  serviceCharges: string;
  deliveryCharges: string;
  promoCode: string;
  total: string;
  deliverTo: string;
  assignedRider: string;
}

interface StatusOrder {
  id: string;
  name: string;
  location: string;
  time: string;
  status: string;
  image: string;
  showCheckout?: boolean;
}

const OrderManagement: React.FC = () => {
  const [activeTab, setActiveTab] = useState<StatusTab>("All");
  const [currentScreen, setCurrentScreen] = useState<Screen>("main");
  const [selectedOrder, setSelectedOrder] = useState<OrderDetail | null>(null);

  const orders: Order[] = [
    {
      id: "1",
      name: "Robert Fox",
      date: "Oct 24, 2022 at 06:00 am",
      amount: "₦5000",
      status: "Completed",
      image:
        "https://images.unsplash.com/photo-1565299624946-b28f40a0ae38?w=400&h=400&fit=crop",
    },
    {
      id: "2",
      name: "Cameron Williamson",
      date: "Oct 24, 2022 at 06:00 am",
      amount: "₦5000",
      status: "Pending",
      image:
        "https://images.unsplash.com/photo-1546069901-ba9599a7e63c?w=400&h=400&fit=crop",
    },
    {
      id: "3",
      name: "Wade Warren",
      date: "Oct 24, 2022 at 06:00 am",
      amount: "₦5000",
      status: "Cancelled",
      image:
        "https://images.unsplash.com/photo-1512621776951-a57141f2eefd?w=400&h=400&fit=crop",
    },
  ];

  const statusOrders: StatusOrder[] = [
    {
      id: "1",
      name: "Samuel Omotayo .K",
      location: "Vila Nova Estate, New Agp Ext.",
      time: "Tue 21 Oct. - 4:00PM",
      status: "Completed",
      image:
        "https://images.unsplash.com/photo-1565299624946-b28f40a0ae38?w=400&h=400&fit=crop",
    },
    {
      id: "2",
      name: "Samuel Omotayo .K",
      location: "Vila Nova Estate, New Agp Ext.",
      time: "Tue 21 Oct. - 4:00PM",
      status: "Preparing",
      image:
        "https://images.unsplash.com/photo-1546069901-ba9599a7e63c?w=400&h=400&fit=crop",
      showCheckout: true,
    },
  ];

  const orderDetail: OrderDetail = {
    id: "5178",
    title: "Fried Rice",
    price: "$15.67",
    quantity: "X2",
    status: "Paid",
    items: [
      { quantity: 2, name: "Jollof Rice", price: "$46.90" },
      { quantity: 5, name: "Fried Plantain", price: "$1.75" },
      { quantity: 1, name: "Banana Smoothie", price: "$0.89" },
    ],
    serviceCharges: "$0.15",
    deliveryCharges: "$1.45",
    promoCode: "-5% off",
    total: "$51.14",
    deliverTo: "Old Male Hostel University of Abuja, Block A| Room 302",
    assignedRider: "Mr. Bright Osmond",
  };

  const handleCheckClick = () => {
    setSelectedOrder(orderDetail);
    setCurrentScreen("details");
  };

  const handleStatusControlClick = () => {
    setCurrentScreen("status-control");
  };

  const handleBackClick = () => {
    setCurrentScreen("main");
    setSelectedOrder(null);
  };

  const getStatusColor = (status: string) => {
    switch (status) {
      case "Completed":
        return "text-green-600";
      case "Pending":
        return "text-yellow-600";
      case "Cancelled":
        return "text-red-600";
      case "Preparing":
        return "text-blue-600";
      default:
        return "text-gray-600";
    }
  };

  const getStatusBgColor = (status: string) => {
    switch (status) {
      case "Completed":
        return "bg-green-600";
      case "Pending":
        return "bg-yellow-600";
      case "Cancelled":
        return "bg-red-600";
      case "Preparing":
        return "bg-blue-600";
      default:
        return "bg-gray-600";
    }
  };

  const filteredOrders =
    activeTab === "All"
      ? orders
      : orders.filter((order) => order.status === activeTab);

  return (
    <div className="min-h-screen bg-gray-50 flex items-center justify-center p-4">
      <div className="w-full max-w-7xl bg-white  overflow-hidden">
        {/* Main Screen */}
        {currentScreen === "main" && (
          <div className="animate-fadeIn">
            {/* Header */}
            <div className="bg-gradient-to-r from-green-600 to-green-500 text-white p-6 pb-8">
              <div className="flex justify-between items-center mb-6">
                <button className="hover:bg-white/10 p-2 rounded-lg transition-all">
                  <Menu size={24} />
                </button>
                <h1 className="text-xl font-bold">Order Management</h1>
                <button className="hover:bg-white/10 p-2 rounded-lg transition-all relative">
                  <Bell size={24} />
                  <span className="absolute top-1 right-1 w-2 h-2 bg-red-500 rounded-full"></span>
                </button>
              </div>

              {/* Status Tabs */}
              <div className="flex gap-2 overflow-x-auto pb-2 scrollbar-hide">
                {(
                  ["All", "Pending", "Completed", "Cancelled"] as StatusTab[]
                ).map((tab) => (
                  <button
                    key={tab}
                    onClick={() => setActiveTab(tab)}
                    className={`px-6 py-2 rounded-full whitespace-nowrap transition-all transform hover:scale-105 ${
                      activeTab === tab
                        ? "bg-white text-green-600 shadow-lg"
                        : "bg-white/20 text-white hover:bg-white/30"
                    }`}
                  >
                    {tab}
                  </button>
                ))}
              </div>
            </div>

            {/* Content */}
            <div className="p-6 space-y-4">
              {/* Control Buttons */}
              <button
                onClick={handleStatusControlClick}
                className="w-full flex justify-between items-center p-4 bg-white border border-gray-200 rounded-xl hover:shadow-lg transition-all transform hover:scale-[1.02] group"
              >
                <span className="font-semibold text-gray-800">
                  Order status control
                </span>
                <ChevronRight
                  className="text-gray-400 group-hover:translate-x-1 transition-transform"
                  size={20}
                />
              </button>

              <button className="w-full flex justify-between items-center p-4 bg-white border border-gray-200 rounded-xl hover:shadow-lg transition-all transform hover:scale-[1.02] group">
                <div>
                  <span className="font-semibold text-gray-800">
                    Order dispute{" "}
                  </span>
                  <span className="text-green-600 font-semibold">(5)</span>
                </div>
                <ChevronRight
                  className="text-gray-400 group-hover:translate-x-1 transition-transform"
                  size={20}
                />
              </button>

              {/* Orders List */}
              <div className="space-y-4 mt-6">
                {filteredOrders.map((order, index) => (
                  <div
                    key={order.id}
                    className="bg-white border border-gray-200 rounded-xl p-4 hover:shadow-xl transition-all transform hover:scale-[1.02] animate-slideUp"
                    style={{ animationDelay: `${index * 100}ms` }}
                  >
                    <div className="flex gap-4">
                      <img
                        src={order.image}
                        alt={order.name}
                        className="w-20 h-20 rounded-xl object-cover shadow-md"
                      />
                      <div className="flex-1">
                        <div className="flex justify-between items-start mb-2">
                          <div>
                            <h3 className="font-bold text-gray-800">
                              {order.name}
                            </h3>
                            <p className="text-xs text-gray-500">
                              {order.date}
                            </p>
                          </div>
                          {order.status === "Pending" && (
                            <button
                              onClick={handleCheckClick}
                              className="px-4 py-1 bg-green-600 text-white text-sm rounded-lg hover:bg-green-700 transition-all transform hover:scale-105 shadow-md"
                            >
                              Check
                            </button>
                          )}
                        </div>
                        <div className="flex justify-between items-center mt-3">
                          <p className="text-sm text-gray-600">
                            Amount:{" "}
                            <span className="font-bold text-gray-800">
                              {order.amount}
                            </span>
                          </p>
                          <span
                            className={`font-bold text-sm ${getStatusColor(
                              order.status
                            )}`}
                          >
                            {order.status}
                          </span>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        )}

        {/* Order Details Screen */}
        {currentScreen === "details" && selectedOrder && (
          <div className="animate-slideIn h-screen overflow-y-auto">
            {/* Header */}
            <div className="bg-gradient-to-r from-green-600 to-green-500 text-white p-6 sticky top-0 z-10 shadow-lg">
              <div className="flex justify-between items-center">
                <button
                  onClick={handleBackClick}
                  className="hover:bg-white/10 p-2 rounded-lg transition-all"
                >
                  <ArrowLeft size={24} />
                </button>
                <h1 className="text-xl font-bold">Order Details</h1>
                <button className="hover:bg-white/10 p-2 rounded-lg transition-all relative">
                  <Bell size={24} />
                  <span className="absolute top-1 right-1 w-2 h-2 bg-red-500 rounded-full"></span>
                </button>
              </div>
            </div>

            {/* Content */}
            <div className="p-6 space-y-6">
              {/* Main Item Card */}
              <div className="bg-white rounded-xl shadow-lg p-4 transform hover:scale-[1.02] transition-all">
                <div className="flex gap-4 items-center">
                  <img
                    src="https://images.unsplash.com/photo-1603133872878-684f208fb84b?w=400&h=400&fit=crop"
                    alt={selectedOrder.title}
                    className="w-24 h-24 rounded-xl object-cover shadow-md"
                  />
                  <div className="flex-1">
                    <div className="flex justify-between items-start">
                      <div>
                        <h2 className="text-xl font-bold text-gray-800">
                          {selectedOrder.title}
                        </h2>
                        <p className="text-2xl font-bold text-green-600 mt-1">
                          {selectedOrder.price}
                        </p>
                      </div>
                      <div className="text-right">
                        <span className="text-lg font-bold text-gray-800">
                          {selectedOrder.quantity}
                        </span>
                        <div className="mt-1 px-3 py-1 bg-green-600 text-white text-xs rounded-full font-semibold">
                          {selectedOrder.status}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Order Info */}
              <div className="bg-white rounded-xl shadow-lg p-6 space-y-4">
                <div className="flex justify-between items-center pb-4 border-b border-gray-100">
                  <span className="text-gray-500">Order ID:</span>
                  <span className="font-bold text-green-600 text-lg">
                    #{selectedOrder.id}
                  </span>
                  <span className="text-green-600 text-sm font-semibold">
                    just now
                  </span>
                </div>

                {/* Items */}
                <div className="space-y-3">
                  {selectedOrder.items.map((item, index) => (
                    <div
                      key={index}
                      className="flex justify-between items-center py-2 hover:bg-gray-50 px-2 rounded-lg transition-colors"
                    >
                      <div className="flex items-center gap-3">
                        <span className="text-green-600 font-bold w-8">
                          x{item.quantity}
                        </span>
                        <span className="text-gray-700">{item.name}</span>
                      </div>
                      <span className="font-bold text-gray-800">
                        {item.price}
                      </span>
                    </div>
                  ))}
                </div>

                {/* Charges */}
                <div className="space-y-2 pt-4 border-t border-gray-100">
                  <div className="flex justify-between text-sm">
                    <span className="text-gray-600">Services Charges:</span>
                    <span className="font-semibold text-gray-800">
                      {selectedOrder.serviceCharges}
                    </span>
                  </div>
                  <div className="flex justify-between text-sm">
                    <span className="text-gray-600">Delivery Charges:</span>
                    <span className="font-semibold text-gray-800">
                      {selectedOrder.deliveryCharges}
                    </span>
                  </div>
                  <div className="flex justify-between text-sm">
                    <span className="text-gray-600">Promo Code</span>
                    <span className="font-semibold text-red-600">
                      {selectedOrder.promoCode}
                    </span>
                  </div>
                </div>

                {/* Total */}
                <div className="flex justify-between items-center pt-4 border-t-2 border-gray-200">
                  <span className="text-lg font-bold text-gray-800">Total</span>
                  <span className="text-2xl font-bold text-green-600">
                    {selectedOrder.total}
                  </span>
                </div>
              </div>

              {/* Delivery Info */}
              <div className="bg-gradient-to-br from-green-50 to-green-100 rounded-xl shadow-lg p-6 space-y-4">
                <div>
                  <h3 className="text-sm font-bold text-green-800 mb-2">
                    DELIVER TO
                  </h3>
                  <p className="text-gray-700 leading-relaxed">
                    {selectedOrder.deliverTo}
                  </p>
                </div>

                <div className="flex justify-between items-center pt-4">
                  <div>
                    <h3 className="text-sm font-bold text-green-800 mb-1">
                      ASSIGNED RIDER
                    </h3>
                    <p className="text-gray-700 font-semibold">
                      {selectedOrder.assignedRider}
                    </p>
                  </div>
                  <button className="px-6 py-3 bg-green-600 text-white rounded-xl hover:bg-green-700 transition-all transform hover:scale-105 shadow-lg font-semibold">
                    Change Rider
                  </button>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* Status Control Screen */}
        {currentScreen === "status-control" && (
          <div className="animate-slideIn h-screen overflow-y-auto">
            {/* Header */}
            <div className="bg-gradient-to-r from-green-600 to-green-500 text-white p-6 sticky top-0 z-10 shadow-lg">
              <div className="flex justify-between items-center">
                <button
                  onClick={handleBackClick}
                  className="hover:bg-white/10 p-2 rounded-lg transition-all"
                >
                  <ArrowLeft size={24} />
                </button>
                <h1 className="text-xl font-bold">Order Status Control</h1>
                <button className="hover:bg-white/10 p-2 rounded-lg transition-all relative">
                  <Bell size={24} />
                  <span className="absolute top-1 right-1 w-2 h-2 bg-red-500 rounded-full"></span>
                </button>
              </div>
            </div>

            {/* Content */}
            <div className="p-6 space-y-4">
              {statusOrders.map((order, index) => (
                <div
                  key={order.id}
                  className="bg-white rounded-xl shadow-lg p-4 hover:shadow-2xl transition-all transform hover:scale-[1.02] animate-slideUp"
                  style={{ animationDelay: `${index * 100}ms` }}
                >
                  <div className="flex gap-4">
                    <img
                      src={order.image}
                      alt={order.name}
                      className="w-20 h-20 rounded-xl object-cover shadow-md"
                    />
                    <div className="flex-1">
                      <div className="flex justify-between items-start mb-3">
                        <div>
                          <h3 className="font-bold text-gray-800">
                            {order.name}
                          </h3>
                          <p className="text-xs text-gray-500 mt-1 flex items-center gap-1">
                            <span className="text-green-600">📍</span>
                            {order.location}
                          </p>
                          <p className="text-xs text-gray-600 mt-2 font-semibold">
                            Time:{" "}
                            <span className="text-green-600">{order.time}</span>
                          </p>
                        </div>
                        <span
                          className={`px-3 py-1 ${getStatusBgColor(
                            order.status
                          )} text-white text-xs rounded-full font-semibold shadow-md`}
                        >
                          {order.status}
                        </span>
                      </div>

                      <div className="flex gap-2 mt-3">
                        {order.showCheckout && (
                          <button className="flex-1 px-4 py-2 bg-green-600 text-white text-sm rounded-lg hover:bg-green-700 transition-all transform hover:scale-105 shadow-md font-semibold">
                            Check Out
                          </button>
                        )}
                        {order.status === "Completed" && (
                          <button className="flex-1 px-4 py-2 border-2 border-green-600 text-green-600 text-sm rounded-lg hover:bg-green-50 transition-all transform hover:scale-105 font-semibold">
                            Mark uncompleted
                          </button>
                        )}
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}
      </div>

      <style>{`
        @keyframes fadeIn {
          from {
            opacity: 0;
          }
          to {
            opacity: 1;
          }
        }

        @keyframes slideIn {
          from {
            transform: translateX(100%);
            opacity: 0;
          }
          to {
            transform: translateX(0);
            opacity: 1;
          }
        }

        @keyframes slideUp {
          from {
            transform: translateY(20px);
            opacity: 0;
          }
          to {
            transform: translateY(0);
            opacity: 1;
          }
        }

        .animate-fadeIn {
          animation: fadeIn 0.3s ease-out;
        }

        .animate-slideIn {
          animation: slideIn 0.3s ease-out;
        }

        .animate-slideUp {
          animation: slideUp 0.4s ease-out forwards;
          opacity: 0;
        }

        .scrollbar-hide::-webkit-scrollbar {
          display: none;
        }

        .scrollbar-hide {
          -ms-overflow-style: none;
          scrollbar-width: none;
        }
      `}</style>
    </div>
  );
};

export default OrderManagement;
