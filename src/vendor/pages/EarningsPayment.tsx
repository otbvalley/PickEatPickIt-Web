import { useState } from "react";
import {
  ArrowLeft,
  Calendar,
  ArrowUpCircle,
  Eye,
  ChevronDown,
} from "lucide-react";
import { VendorNav } from "../component/VendorNav";

const EarningsPayment = () => {
  const [activeTab, setActiveTab] = useState<"transactions" | "orders">(
    "transactions"
  );
  const [showEarnings, setShowEarnings] = useState(true);

  const transactions = [
    {
      id: 1,
      title: "Transfer to LACE RESTAURANT LIMITED",
      amount: 15350,
      commission: 1250,
      date: "Oct 21st, 11:00:33",
      status: "successful",
    },
    {
      id: 2,
      title: "Transfer to LACE RESTAURANT LIMITED",
      amount: 15350,
      commission: 1250,
      date: "Oct 21st, 11:00:33",
      status: "successful",
    },
    {
      id: 3,
      title: "Transfer to LACE RESTAURANT LIMITED",
      amount: 15350,
      commission: 1250,
      date: "Oct 21st, 11:00:33",
      status: "successful",
    },
    {
      id: 4,
      title: "Transfer to LACE RESTAURANT LIMITED",
      amount: 15350,
      commission: 1250,
      date: "Oct 21st, 11:00:33",
      status: "successful",
    },
    {
      id: 5,
      title: "Transfer to LACE RESTAURANT LIMITED",
      amount: 15350,
      commission: 1250,
      date: "Oct 21st, 11:00:33",
      status: "successful",
    },
    {
      id: 6,
      title: "Transfer to LACE RESTAURANT LIMITED",
      amount: 15350,
      commission: 1250,
      date: "Oct 21st, 11:00:33",
      status: "successful",
    },
  ];

  const orders = [
    {
      id: 1,
      orderNo: "#2356",
      amount: 15350,
      commission: 1250,
      date: "Oct 21st, 11:00:33",
      status: "completed",
    },
    {
      id: 2,
      orderNo: "#2356",
      amount: 15350,
      commission: 1250,
      date: "Oct 21st, 11:00:33",
      status: "completed",
    },
    {
      id: 3,
      orderNo: "#2356",
      amount: 15350,
      commission: 1250,
      date: "Oct 21st, 11:00:33",
      status: "completed",
    },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-green-50 via-white to-green-50">
      {/* Header */}
      <VendorNav />
      <div className="bg-gradient-to-r from-green-600 to-green-700 text-white px-6 py-4 shadow-lg">
        <div className="flex items-center justify-between max-w-6xl mx-auto">
          <div className="flex items-center gap-4">
            <button className="hover:bg-white/10 p-2 rounded-full transition-all duration-300 transform hover:scale-110">
              <ArrowLeft size={24} />
            </button>
            <h1 className="text-xl font-semibold">Earnings and Payment</h1>
          </div>
          <div className="flex items-center gap-2">
            <div className="w-2 h-2 bg-green-300 rounded-full animate-pulse"></div>
            <div
              className="w-2 h-2 bg-green-300 rounded-full animate-pulse"
              style={{ animationDelay: "0.2s" }}
            ></div>
            <div
              className="w-2 h-2 bg-green-300 rounded-full animate-pulse"
              style={{ animationDelay: "0.4s" }}
            ></div>
          </div>
        </div>
      </div>

      <div className="max-w-6xl mx-auto px-4 py-6 space-y-6">
        {/* Earnings Card */}
        <div className="bg-white rounded-3xl shadow-xl p-6 transform hover:scale-[1.02] transition-all duration-300 border border-green-100">
          <div className="flex items-center justify-between mb-4">
            <div className="flex items-center gap-2 text-green-600 font-medium">
              <span className="text-sm">Today's Earning</span>
              <ChevronDown size={16} className="animate-bounce" />
            </div>
          </div>

          <div className="flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div className="bg-gradient-to-br from-green-400 to-green-600 p-3 rounded-2xl shadow-lg transform hover:rotate-12 transition-transform duration-300">
                <span className="text-white text-2xl font-bold">₦</span>
              </div>
              <div>
                <h2 className="text-4xl font-bold text-gray-800 tracking-tight">
                  {showEarnings ? "₦ 3,027.87" : "₦ ••••••"}
                </h2>
                <p className="text-sm text-gray-500 mt-1">
                  Pending Payout -{" "}
                  <span className="text-green-600 font-semibold">
                    ₦ 2859.87
                  </span>
                </p>
              </div>
            </div>

            <div className="flex items-center gap-3">
              <button
                onClick={() => setShowEarnings(!showEarnings)}
                className="bg-green-50 p-3 rounded-full hover:bg-green-100 transition-all duration-300 transform hover:scale-110"
              >
                <Eye size={20} className="text-green-600" />
              </button>
              <div className="flex items-center gap-1 bg-gradient-to-r from-green-500 to-green-600 px-3 py-2 rounded-full shadow-md">
                <div className="w-4 h-4 rounded-full bg-white"></div>
                <div className="w-4 h-4 rounded-full bg-green-300"></div>
                <div className="w-4 h-4 rounded-full bg-green-300"></div>
              </div>
              <button className="bg-green-50 p-3 rounded-full hover:bg-green-100 transition-all duration-300 transform hover:scale-110 hover:rotate-90">
                <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
                  <path
                    d="M10 4L10 16M4 10L16 10"
                    stroke="#16a34a"
                    strokeWidth="2"
                    strokeLinecap="round"
                  />
                </svg>
              </button>
            </div>
          </div>
        </div>

        {/* Update Payment Info */}
        <button className="w-full bg-white rounded-2xl shadow-md p-5 flex items-center justify-between hover:shadow-xl transition-all duration-300 transform hover:translate-x-2 border border-gray-100">
          <span className="text-gray-700 font-medium">Update Payment Info</span>
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
            <path
              d="M9 18L15 12L9 6"
              stroke="#16a34a"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </button>

        {/* Tabs */}
        <div className="bg-white rounded-2xl shadow-md p-2 border border-gray-100">
          <div className="flex gap-2">
            <button
              onClick={() => setActiveTab("transactions")}
              className={`flex-1 py-3 px-6 rounded-xl font-semibold transition-all duration-300 ${
                activeTab === "transactions"
                  ? "bg-gradient-to-r from-green-500 to-green-600 text-white shadow-lg transform scale-105"
                  : "text-gray-600 hover:bg-gray-50"
              }`}
            >
              Transactions
            </button>
            <button
              onClick={() => setActiveTab("orders")}
              className={`flex-1 py-3 px-6 rounded-xl font-semibold transition-all duration-300 ${
                activeTab === "orders"
                  ? "bg-gradient-to-r from-green-500 to-green-600 text-white shadow-lg transform scale-105"
                  : "text-gray-600 hover:bg-gray-50"
              }`}
            >
              Orders
            </button>
          </div>
        </div>

        {/* Date Range */}
        <div className="flex items-center justify-end gap-2 text-gray-600">
          <span className="text-sm font-medium">21st May - 25th Aug</span>
          <Calendar size={18} className="text-green-600" />
        </div>

        {/* List Items */}
        <div className="space-y-3">
          {activeTab === "transactions" ? (
            <>
              {transactions.map((item, index) => (
                <div
                  key={item.id}
                  className="bg-white rounded-2xl shadow-md p-5 hover:shadow-xl transition-all duration-300 border border-gray-100 transform hover:-translate-y-1"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <div className="flex items-center gap-4">
                    <div className="bg-gradient-to-br from-green-100 to-green-200 p-4 rounded-2xl shadow-md transform hover:rotate-12 transition-transform duration-300">
                      <ArrowUpCircle size={24} className="text-green-600" />
                    </div>

                    <div className="flex-1">
                      <h3 className="font-semibold text-gray-800 mb-1">
                        {item.title}
                      </h3>
                      <div className="flex items-center gap-3">
                        <span className="text-xs text-gray-500">
                          {item.date}
                        </span>
                        <span className="bg-green-500 text-white text-xs px-3 py-1 rounded-full font-medium shadow-sm">
                          {item.status}
                        </span>
                      </div>
                    </div>

                    <div className="text-right">
                      <p className="text-xl font-bold text-gray-800">
                        -₦{item.amount.toLocaleString()}
                      </p>
                      <p className="text-sm text-green-600 font-medium">
                        Commission - ₦{item.commission.toLocaleString()}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </>
          ) : (
            <>
              {orders.map((item, index) => (
                <div
                  key={item.id}
                  className="bg-white rounded-2xl shadow-md p-5 hover:shadow-xl transition-all duration-300 border border-gray-100 transform hover:-translate-y-1"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <div className="flex items-center gap-4">
                    <div className="bg-gradient-to-br from-green-100 to-green-200 p-4 rounded-2xl shadow-md transform hover:rotate-12 transition-transform duration-300">
                      <ArrowUpCircle size={24} className="text-green-600" />
                    </div>

                    <div className="flex-1">
                      <h3 className="font-semibold text-gray-800 mb-1">
                        ORDER - {item.orderNo}
                      </h3>
                      <div className="flex items-center gap-3">
                        <span className="text-xs text-gray-500">
                          {item.date}
                        </span>
                        <span className="bg-green-500 text-white text-xs px-3 py-1 rounded-full font-medium shadow-sm">
                          {item.status}
                        </span>
                      </div>
                    </div>

                    <div className="text-right">
                      <p className="text-xl font-bold text-gray-800">
                        -₦{item.amount.toLocaleString()}
                      </p>
                      <p className="text-sm text-green-600 font-medium">
                        Commission - ₦{item.commission.toLocaleString()}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </>
          )}
        </div>

        {/* Action Buttons */}
        <div className="space-y-3 pb-8">
          <button className="w-full bg-gradient-to-r from-green-600 to-green-700 text-white py-4 rounded-2xl font-semibold shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:scale-[1.02] hover:-translate-y-1">
            Request Withdrawal
          </button>
          <button className="w-full bg-gradient-to-r from-blue-50 to-green-50 text-green-600 py-4 rounded-2xl font-semibold shadow-md hover:shadow-lg transition-all duration-300 transform hover:scale-[1.02] border-2 border-green-200">
            Download Report
          </button>
        </div>
      </div>
    </div>
  );
};

export default EarningsPayment;
