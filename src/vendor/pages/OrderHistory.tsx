import { useState } from "react";
import { ArrowLeft } from "lucide-react";
import { VendorNav } from "../component/VendorNav";

interface Order {
  id: string;
  customerName: string;
  date: string;
  time: string;
  amount: string;
  status: "completed" | "pending" | "cancelled";
  image: string;
  hasReview?: boolean;
}

const OrderHistory = () => {
  const [hasOrders, setHasOrders] = useState(true);

  const orders: Order[] = [
    {
      id: "1",
      customerName: "Robert Fox",
      date: "Oct 24, 2022",
      time: "06:00 am",
      amount: "N5000",
      status: "completed",
      image: "🍟",
      hasReview: true,
    },
    {
      id: "2",
      customerName: "Cameron Williamson",
      date: "Oct 24, 2022",
      time: "06:00 am",
      amount: "N5000",
      status: "pending",
      image: "🍗",
    },
    {
      id: "3",
      customerName: "Wade Warren",
      date: "Oct 24, 2022",
      time: "06:00 am",
      amount: "N5000",
      status: "cancelled",
      image: "🥤",
    },
    {
      id: "4",
      customerName: "Brooklyn Simmons",
      date: "Oct 24, 2022",
      time: "06:00 am",
      amount: "N5000",
      status: "cancelled",
      image: "🥗",
    },
    {
      id: "5",
      customerName: "Kathryn Murphy",
      date: "Oct 24, 2022",
      time: "06:00 am",
      amount: "N5000",
      status: "completed",
      image: "🍱",
      hasReview: true,
    },
    {
      id: "6",
      customerName: "Eleanor Pena",
      date: "Oct 24, 2022",
      time: "06:00 am",
      amount: "N5000",
      status: "pending",
      image: "🍲",
    },
  ];

  const getStatusButton = (order: Order) => {
    if (order.status === "completed" && order.hasReview) {
      return (
        <button className="px-4 py-2 bg-green-600 text-white rounded-lg font-semibold hover:bg-green-700 transition-all">
          Check Review
        </button>
      );
    }
    if (order.status === "pending") {
      return (
        <button className="px-4 py-2 bg-green-50 text-green-700 rounded-lg font-semibold hover:bg-green-100 transition-all">
          Accept
        </button>
      );
    }
    return null;
  };

  const getStatusBadge = (status: string) => {
    switch (status) {
      case "completed":
        return (
          <span className="text-green-600 font-bold text-sm">Completed</span>
        );
      case "pending":
        return (
          <span className="text-yellow-600 font-bold text-sm">Pending</span>
        );
      case "cancelled":
        return (
          <span className="text-red-600 font-bold text-sm">Cancelled</span>
        );
      default:
        return null;
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100">
      {/* Header */}
      <VendorNav />
      <div className="bg-gradient-to-r from-green-600 to-green-700 text-white px-6 py-4 shadow-lg">
        <div className="flex items-center gap-4">
          <button className="p-2 hover:bg-white/20 rounded-lg transition-all">
            <ArrowLeft className="w-6 h-6" />
          </button>
        </div>
      </div>

      <div className="max-w-4xl mx-auto px-4 py-6">
        {/* Page Title */}
        <h1 className="text-2xl font-bold text-green-700 mb-6">
          Order History
        </h1>

        {hasOrders ? (
          /* Orders List */
          <div className="space-y-4">
            {orders.map((order, index) => (
              <div
                key={order.id}
                className="bg-white rounded-2xl shadow-md hover:shadow-xl transition-all duration-300 p-4 transform hover:-translate-y-1"
                style={{
                  animation: `slideIn 0.5s ease-out ${index * 0.1}s both`,
                }}
              >
                <div className="flex gap-4">
                  {/* Order Image */}
                  <div className="w-20 h-20 rounded-xl bg-gradient-to-br from-green-100 to-green-200 flex items-center justify-center text-4xl flex-shrink-0 shadow-md">
                    {order.image}
                  </div>

                  {/* Order Details */}
                  <div className="flex-1 min-w-0">
                    <div className="flex items-start justify-between gap-2 mb-1">
                      <h3 className="font-bold text-gray-800 text-lg">
                        {order.customerName}
                      </h3>
                      {getStatusButton(order)}
                    </div>

                    <p className="text-sm text-gray-600 mb-2">
                      {order.date} at {order.time}
                    </p>

                    <div className="flex items-center justify-between">
                      <p className="text-gray-800 font-bold">
                        Amount:{" "}
                        <span className="text-green-600">{order.amount}</span>
                      </p>
                      {getStatusBadge(order.status)}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        ) : (
          /* Empty State */
          <div className="flex flex-col items-center justify-center min-h-[60vh] px-4">
            <div className="relative mb-8 animate-float">
              {/* Clipboard 1 */}
              <div className="absolute -left-12 top-0 w-32 h-40 bg-white rounded-lg shadow-xl border-4 border-gray-200 transform -rotate-12 transition-transform hover:rotate-0">
                <div className="w-16 h-4 bg-gradient-to-r from-green-500 to-green-600 rounded-b-lg mx-auto"></div>
                <div className="p-4 space-y-2 mt-4">
                  <div className="h-2 bg-gray-200 rounded"></div>
                  <div className="h-2 bg-gray-200 rounded w-3/4"></div>
                  <div className="h-2 bg-gray-200 rounded w-1/2"></div>
                </div>
              </div>

              {/* Clipboard 2 */}
              <div className="relative w-40 h-48 bg-white rounded-xl shadow-2xl border-4 border-gray-200 z-10">
                <div className="w-20 h-5 bg-gradient-to-r from-green-500 to-green-600 rounded-b-xl mx-auto shadow-md"></div>
                <div className="p-6 space-y-3 mt-6">
                  <div className="h-2 bg-gray-200 rounded"></div>
                  <div className="h-2 bg-gray-200 rounded w-4/5"></div>
                  <div className="h-2 bg-gray-200 rounded w-3/5"></div>
                  <div className="h-2 bg-gray-200 rounded"></div>
                  <div className="h-2 bg-gray-200 rounded w-2/3"></div>
                </div>
              </div>
            </div>

            <h2 className="text-2xl font-bold text-gray-800 mb-3 text-center">
              No Order History Yet
            </h2>
            <p className="text-gray-500 text-center max-w-md mb-6">
              Your order history will appear here once you start receiving and
              completing orders from customers.
            </p>

            <button
              onClick={() => setHasOrders(true)}
              className="px-8 py-3 bg-gradient-to-r from-green-600 to-green-700 hover:from-green-700 hover:to-green-800 text-white rounded-xl font-bold shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105"
            >
              View Sample Orders
            </button>
          </div>
        )}

        {/* Toggle Button for Demo */}
        {hasOrders && (
          <button
            onClick={() => setHasOrders(false)}
            className="w-full mt-6 py-3 bg-gray-200 text-gray-700 rounded-xl font-semibold hover:bg-gray-300 transition-all"
          >
            Show Empty State
          </button>
        )}
      </div>

      <style>{`
        @keyframes slideIn {
          from {
            opacity: 0;
            transform: translateY(20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        @keyframes float {
          0%,
          100% {
            transform: translateY(0);
          }
          50% {
            transform: translateY(-10px);
          }
        }

        .animate-float {
          animation: float 3s ease-in-out infinite;
        }
      `}</style>
    </div>
  );
};

export default OrderHistory;
