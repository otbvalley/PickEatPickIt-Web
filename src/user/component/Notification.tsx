import React from "react";
import { Bell, ArrowLeft, Package, Clock, CheckCircle } from "lucide-react";
import { Link } from "react-router-dom";

interface Notification {
  id: string;
  restaurant: string;
  message: string;
  orderId: string;
  items: number;
  price: string;
  time: string;
  status: "delivered" | "processing" | "received";
  image: string;
}

const Notification: React.FC = () => {
  const notifications: Notification[] = [
    {
      id: "1",
      restaurant: "Marilya kitchen",
      message:
        "Your order has been delivered, kindly confirm that you have received the order",
      orderId: "54jbh7",
      items: 3,
      price: "$12.36",
      time: "9:00am",
      status: "delivered",
      image:
        "https://images.unsplash.com/photo-1546069901-ba9599a7e63c?w=100&h=100&fit=crop",
    },
    {
      id: "2",
      restaurant: "Marilya kitchen",
      message: "Your order has been processed and on it's way to you",
      orderId: "54jbh7",
      items: 3,
      price: "$12.36",
      time: "9:00am",
      status: "processing",
      image:
        "https://images.unsplash.com/photo-1546069901-ba9599a7e63c?w=100&h=100&fit=crop",
    },
    {
      id: "3",
      restaurant: "Marilya kitchen",
      message: "Your order has been received and being process",
      orderId: "54jbh7",
      items: 3,
      price: "$12.36",
      time: "9:00am",
      status: "received",
      image:
        "https://images.unsplash.com/photo-1546069901-ba9599a7e63c?w=100&h=100&fit=crop",
    },
    {
      id: "4",
      restaurant: "Marilya kitchen",
      message:
        "Your order has been delivered, kindly confirm that you have received the order",
      orderId: "54jbh7",
      items: 3,
      price: "$12.36",
      time: "9:00am",
      status: "delivered",
      image:
        "https://images.unsplash.com/photo-1546069901-ba9599a7e63c?w=100&h=100&fit=crop",
    },
    {
      id: "5",
      restaurant: "Marilya kitchen",
      message: "Your order has been processed and on it's way to you",
      orderId: "54jbh7",
      items: 3,
      price: "$12.36",
      time: "9:00am",
      status: "processing",
      image:
        "https://images.unsplash.com/photo-1546069901-ba9599a7e63c?w=100&h=100&fit=crop",
    },
  ];

  const getStatusIcon = (status: string) => {
    switch (status) {
      case "delivered":
        return <CheckCircle className="w-4 h-4 text-green-600" />;
      case "processing":
        return <Package className="w-4 h-4 text-blue-600" />;
      case "received":
        return <Clock className="w-4 h-4 text-orange-600" />;
      default:
        return null;
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100">
      {/* Header */}
      <div className="sticky top-0 z-50 bg-white shadow-sm">
        <div className="w-full px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16 sm:h-20">
            <Link to="/user-dashboard">
              <button className="p-2 hover:bg-gray-100 rounded-full transition-colors">
                <ArrowLeft className="w-5 h-5 sm:w-6 sm:h-6 text-gray-700" />
              </button>
            </Link>
            <h1 className="text-lg sm:text-xl font-semibold text-gray-900">
              Notification
            </h1>
            <button className="p-2 hover:bg-green-50 rounded-full transition-colors relative">
              <Bell
                className="w-5 h-5 sm:w-6 sm:h-6 text-green-600"
                fill="currentColor"
              />
              <span className="absolute top-1 right-1 w-2 h-2 bg-red-500 rounded-full"></span>
            </button>
          </div>
        </div>
      </div>

      {/* Content */}
      <div className="w-full px-4 sm:px-6 lg:px-8 py-6 sm:py-8">
        {/* Date Header */}
        <div className="mb-4 sm:mb-6">
          <p className="text-xs sm:text-sm font-medium text-gray-500 uppercase tracking-wide">
            31st Oct 2023
          </p>
        </div>

        {/* Notifications List */}
        <div className="space-y-3 sm:space-y-4">
          {notifications.slice(0, 3).map((notification) => (
            <div
              key={notification.id}
              className="bg-white rounded-xl sm:rounded-2xl shadow-sm hover:shadow-md transition-all duration-300 p-4 sm:p-5 lg:p-6 border border-gray-100"
            >
              <div className="flex gap-3 sm:gap-4">
                {/* Restaurant Image */}
                <div className="flex-shrink-0">
                  <div className="w-12 h-12 sm:w-14 sm:h-14 lg:w-16 lg:h-16 rounded-full overflow-hidden ring-2 ring-gray-100">
                    <img
                      src={notification.image}
                      alt={notification.restaurant}
                      className="w-full h-full object-cover"
                    />
                  </div>
                </div>

                {/* Content */}
                <div className="flex-1 min-w-0">
                  <div className="flex items-start justify-between gap-2 mb-2">
                    <div className="flex items-center gap-2">
                      <h3 className="text-sm sm:text-base font-semibold text-gray-900">
                        From {notification.restaurant}
                      </h3>
                      {getStatusIcon(notification.status)}
                    </div>
                    <span className="text-xs sm:text-sm text-gray-500 whitespace-nowrap">
                      {notification.time}
                    </span>
                  </div>

                  <p className="text-xs sm:text-sm text-gray-600 mb-3 leading-relaxed">
                    {notification.message}
                  </p>

                  <div className="flex items-center justify-between">
                    <span className="text-xs sm:text-sm font-semibold text-green-600">
                      Order ID: {notification.orderId} | {notification.items}{" "}
                      items
                    </span>
                    <span className="text-base sm:text-lg font-bold text-green-600">
                      {notification.price}
                    </span>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Second Date Section */}
        <div className="mt-8 sm:mt-10 mb-4 sm:mb-6">
          <p className="text-xs sm:text-sm font-medium text-gray-500 uppercase tracking-wide">
            31st Oct 2023
          </p>
        </div>

        <div className="space-y-3 sm:space-y-4">
          {notifications.slice(3).map((notification) => (
            <div
              key={notification.id}
              className="bg-white rounded-xl sm:rounded-2xl shadow-sm hover:shadow-md transition-all duration-300 p-4 sm:p-5 lg:p-6 border border-gray-100"
            >
              <div className="flex gap-3 sm:gap-4">
                <div className="flex-shrink-0">
                  <div className="w-12 h-12 sm:w-14 sm:h-14 lg:w-16 lg:h-16 rounded-full overflow-hidden ring-2 ring-gray-100">
                    <img
                      src={notification.image}
                      alt={notification.restaurant}
                      className="w-full h-full object-cover"
                    />
                  </div>
                </div>

                <div className="flex-1 min-w-0">
                  <div className="flex items-start justify-between gap-2 mb-2">
                    <div className="flex items-center gap-2">
                      <h3 className="text-sm sm:text-base font-semibold text-gray-900">
                        From {notification.restaurant}
                      </h3>
                      {getStatusIcon(notification.status)}
                    </div>
                    <span className="text-xs sm:text-sm text-gray-500 whitespace-nowrap">
                      {notification.time}
                    </span>
                  </div>

                  <p className="text-xs sm:text-sm text-gray-600 mb-3 leading-relaxed">
                    {notification.message}
                  </p>

                  <div className="flex items-center justify-between">
                    <span className="text-xs sm:text-sm font-semibold text-green-600">
                      Order ID: {notification.orderId} | {notification.items}{" "}
                      items
                    </span>
                    <span className="text-base sm:text-lg font-bold text-green-600">
                      {notification.price}
                    </span>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Notification;
