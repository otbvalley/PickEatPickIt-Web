import React, { useState } from "react";
import { Bell, ChevronLeft, CheckCircle, Clock } from "lucide-react";
import { Navbar } from "../component/Navbar";

interface Order {
  id: string;
  restaurant: string;
  items: number;
  price: number;
  date: string;
  status: "pending" | "completed" | "canceled";
}

interface OrderProgress {
  time: string;
  message: string;
  completed: boolean;
}

const Booking: React.FC = () => {
  const [activeTab, setActiveTab] = useState<
    "accepted" | "canceled" | "completed"
  >("accepted");
  const [currentView, setCurrentView] = useState<
    "bookings" | "track" | "history"
  >("bookings");
  const [selectedOrder, setSelectedOrder] = useState<string | null>(null);

  const orders: Order[] = [
    {
      id: "ERFH76",
      restaurant: "Mardiya Kitchen",
      items: 3,
      price: 17.84,
      date: "Sep 4, 2021 at 12:14 am",
      status: "pending",
    },
    {
      id: "ERFHTU",
      restaurant: "Mardiya Kitchen",
      items: 3,
      price: 17.84,
      date: "Sep 4, 2021 at 12:14 am",
      status: "completed",
    },
    {
      id: "ERFHTU2",
      restaurant: "Mardiya Kitchen",
      items: 3,
      price: 17.84,
      date: "Sep 4, 2021 at 12:14 am",
      status: "canceled",
    },
    {
      id: "ERFHTU3",
      restaurant: "Mardiya Kitchen",
      items: 3,
      price: 17.84,
      date: "Sep 4, 2021 at 12:14 am",
      status: "completed",
    },
    {
      id: "ERFHTU4",
      restaurant: "Mardiya Kitchen",
      items: 3,
      price: 17.84,
      date: "Sep 4, 2021 at 12:14 am",
      status: "completed",
    },
  ];

  const orderProgress: OrderProgress[] = [
    {
      time: "09:45am",
      message: "Mardiya Kitchen has received and confirmed your order",
      completed: true,
    },
    {
      time: "09:47am",
      message: "Mardiya Kitchen is preparing your order",
      completed: true,
    },
    {
      time: "09:50am",
      message: "A courier has been assigned to your order",
      completed: true,
    },
    {
      time: "09:55am",
      message: "The courier is on the way to deliver your order",
      completed: false,
    },
    {
      time: "10:03am",
      message: "The courier is delivering your order",
      completed: false,
    },
  ];

  const filteredOrders = orders.filter((order) => {
    if (activeTab === "accepted") return order.status === "pending";
    if (activeTab === "canceled") return order.status === "canceled";
    if (activeTab === "completed") return order.status === "completed";
    return true;
  });

  const handleTrackOrder = (orderId: string) => {
    setSelectedOrder(orderId);
    setCurrentView("track");
  };

  const handleReOrder = () => {
    // Re-order logic
  };

  const getStatusColor = (status: string) => {
    switch (status) {
      case "pending":
        return "text-orange-500";
      case "completed":
        return "text-green-600";
      case "canceled":
        return "text-red-500";
      default:
        return "text-gray-600";
    }
  };

  const getStatusText = (status: string) => {
    return status.charAt(0).toUpperCase() + status.slice(1);
  };

  // Bookings iew
  if (currentView === "bookings") {
    return (
      <div className="min-h-screen bg-gray-50 pb-20">
        {/* Header */}
        <Navbar />
        <div className="bg-white px-6 py-4 flex items-center justify-between shadow-sm sticky top-0 z-10">
          <div className="text-xl font-semibold text-gray-800">Bookings</div>
          <button className="p-2 hover:bg-gray-100 rounded-full transition-colors">
            <Bell className="w-6 h-6 text-gray-700" />
          </button>
        </div>

        {/* Content */}
        <div className="px-6 py-6">
          <h2 className="text-2xl font-bold text-green-700 mb-6">
            My Bookings
          </h2>

          {/* Tabs */}
          <div className="flex gap-3 mb-6">
            <button
              onClick={() => setActiveTab("accepted")}
              className={`px-6 py-2.5 rounded-lg font-medium transition-all ${
                activeTab === "accepted"
                  ? "bg-green-600 text-white shadow-md"
                  : "bg-white text-gray-600 hover:bg-gray-50"
              }`}
            >
              ✓ Accepted
            </button>
            <button
              onClick={() => setActiveTab("canceled")}
              className={`px-6 py-2.5 rounded-lg font-medium transition-all ${
                activeTab === "canceled"
                  ? "bg-green-600 text-white shadow-md"
                  : "bg-white text-gray-600 hover:bg-gray-50"
              }`}
            >
              Canceled
            </button>
            <button
              onClick={() => setActiveTab("completed")}
              className={`px-6 py-2.5 rounded-lg font-medium transition-all ${
                activeTab === "completed"
                  ? "bg-green-600 text-white shadow-md"
                  : "bg-white text-gray-600 hover:bg-gray-50"
              }`}
            >
              Completed
            </button>
          </div>

          {/* Orders List */}
          {filteredOrders.length > 0 ? (
            <div className="space-y-4">
              {filteredOrders.map((order) => (
                <div
                  key={order.id}
                  onClick={() => selectedOrder}
                  className="bg-white rounded-xl p-5 shadow-sm border border-gray-100 hover:shadow-md transition-shadow"
                >
                  <div className="flex justify-between items-start mb-3">
                    <div>
                      <h3 className="font-bold text-gray-800 text-lg mb-1">
                        {order.restaurant}
                      </h3>
                      <p className="text-green-600 font-medium text-sm">
                        Order ID:{" "}
                        <span className="font-semibold">{order.id}</span> |{" "}
                        {order.items} items
                      </p>
                    </div>
                    <div className="text-right">
                      <div className="text-xl font-bold text-gray-800">
                        ${order.price}
                      </div>
                      <div
                        className={`text-sm font-semibold ${getStatusColor(
                          order.status
                        )}`}
                      >
                        {getStatusText(order.status)}
                      </div>
                    </div>
                  </div>
                  <div className="flex justify-between items-center pt-3 border-t border-gray-100">
                    <span className="text-gray-500 text-sm">{order.date}</span>
                    <button
                      onClick={() =>
                        order.status === "pending"
                          ? handleTrackOrder(order.id)
                          : handleReOrder()
                      }
                      className={`px-5 py-2 rounded-lg font-medium text-sm transition-colors ${
                        order.status === "pending"
                          ? "bg-green-600 text-white hover:bg-green-700"
                          : "bg-green-50 text-green-700 hover:bg-green-100 border border-green-200"
                      }`}
                    >
                      {order.status === "pending" ? "Track Order" : "Re Order"}
                    </button>
                  </div>
                </div>
              ))}
            </div>
          ) : (
            <div className="flex flex-col items-center justify-center py-20">
              <div className="relative mb-6">
                <div className="w-32 h-40 bg-gray-100 rounded-lg border-4 border-white shadow-md transform -rotate-12"></div>
                <div className="w-32 h-40 bg-gray-50 rounded-lg border-4 border-white shadow-lg absolute top-0 left-8 transform rotate-6">
                  <div className="absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-16 h-6 bg-green-600 rounded-full"></div>
                </div>
              </div>
              <p className="text-gray-400 text-lg">No orders found</p>
            </div>
          )}
        </div>
      </div>
    );
  }

  // Track Order View
  if (currentView === "track") {
    return (
      <div className="min-h-screen bg-gray-50">
        {/* Header */}
        <div className="bg-white px-6 py-4 flex items-center shadow-sm sticky top-0 z-10">
          <button
            onClick={() => setCurrentView("bookings")}
            className="p-2 hover:bg-gray-100 rounded-full transition-colors mr-4"
          >
            <ChevronLeft className="w-6 h-6 text-gray-700" />
          </button>
          <div className="text-xl font-semibold text-gray-800">Track order</div>
        </div>

        {/* Content */}
        <div className="px-6 py-6">
          <h2 className="text-2xl font-bold text-green-700 mb-6">
            Order Progress
          </h2>

          {/* Progress Timeline */}
          <div className="relative">
            {orderProgress.map((progress, index) => (
              <div key={index} className="flex gap-4 mb-8 relative">
                {/* Timeline Line */}
                {index < orderProgress.length - 1 && (
                  <div
                    className={`absolute left-3 top-8 w-0.5 h-12 ${
                      progress.completed ? "bg-green-500" : "bg-gray-300"
                    }`}
                  ></div>
                )}

                {/* Time */}
                <div className="w-16 flex-shrink-0">
                  <span className="text-sm text-gray-600 font-medium">
                    {progress.time}
                  </span>
                </div>

                {/* Icon */}
                <div className="flex-shrink-0">
                  {progress.completed ? (
                    <div className="w-6 h-6 bg-green-500 rounded-full flex items-center justify-center">
                      <CheckCircle className="w-4 h-4 text-white" />
                    </div>
                  ) : (
                    <div className="w-6 h-6 bg-gray-300 rounded-full flex items-center justify-center">
                      <Clock className="w-4 h-4 text-white" />
                    </div>
                  )}
                </div>

                {/* Message */}
                <div className="flex-1 pb-2">
                  <p
                    className={`text-sm ${
                      progress.completed
                        ? "text-gray-800 font-medium"
                        : "text-gray-500"
                    }`}
                  >
                    {progress.message}
                  </p>
                </div>
              </div>
            ))}
          </div>

          {/* Estimated Delivery */}
          <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-100 mt-8">
            <div className="flex justify-between items-center">
              <div>
                <div className="text-3xl font-bold text-green-700 mb-1">
                  10:01AM
                </div>
                <div className="text-sm text-gray-500">
                  Estimated time of delivery
                </div>
              </div>
              <button className="bg-green-50 text-green-700 px-6 py-2.5 rounded-lg font-medium hover:bg-green-100 border border-green-200 transition-colors">
                Accept Order
              </button>
            </div>
            <div className="mt-4 pt-4 border-t border-gray-100">
              <span className="text-sm text-gray-600">
                Order ID:{" "}
                <span className="font-semibold text-gray-800">BH76898</span>
              </span>
            </div>
          </div>
        </div>
      </div>
    );
  }

  // Booking History (Empty State)
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <div className="bg-white px-6 py-4 flex items-center shadow-sm sticky top-0 z-10">
        <button
          onClick={() => setCurrentView("bookings")}
          className="p-2 hover:bg-gray-100 rounded-full transition-colors mr-4"
        >
          <ChevronLeft className="w-6 h-6 text-gray-700" />
        </button>
      </div>

      {/* Content */}
      <div className="px-6 py-6">
        <h2 className="text-2xl font-bold text-green-700 mb-12">
          Booking History
        </h2>

        {/* Empty State */}
        <div className="flex flex-col items-center justify-center py-20">
          <div className="relative mb-8">
            {/* Clipboard 1 */}
            <div className="w-40 h-52 bg-white rounded-xl border-4 border-gray-200 shadow-lg transform -rotate-12 relative">
              <div className="absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
                <div className="w-20 h-8 bg-green-600 rounded-full shadow-md"></div>
              </div>
            </div>

            {/* Clipboard 2 */}
            <div className="w-40 h-52 bg-white rounded-xl border-4 border-gray-200 shadow-2xl absolute top-4 left-16 transform rotate-6">
              <div className="absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
                <div className="w-20 h-8 bg-green-600 rounded-full shadow-md"></div>
              </div>
            </div>
          </div>

          <p className="text-gray-400 text-lg font-medium">
            No booking history yet
          </p>
          <p className="text-gray-300 text-sm mt-2">
            Your past orders will appear here
          </p>

          <button
            onClick={() => setCurrentView("bookings")}
            className="mt-8 bg-green-600 text-white px-8 py-3 rounded-lg font-medium hover:bg-green-700 transition-colors shadow-md"
          >
            Browse Restaurants
          </button>
        </div>
      </div>
    </div>
  );
};

export default Booking;
