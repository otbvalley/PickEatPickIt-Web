import { useState } from "react";
import {
  Menu,
  Bell,
  Search,
  ChevronDown,
  ArrowUpRight,
  ArrowDownRight,
  ChevronRight,
  ArrowLeft,
  X,
  Calendar,
} from "lucide-react";

const Transaction = () => {
  const [currentView, setCurrentView] = useState("main");
  const [selectedFilter, setSelectedFilter] = useState("All");
  const [showModal, setShowModal] = useState(false);
  const [modalType, setModalType] = useState("");
  const [selectedVendor, setSelectedVendor] = useState("");

  const filters = ["All", "Clients", "Vendors", "Riders"];

  const transactions = [
    {
      id: 1,
      type: "payout",
      title: "Transfer to LACE RESTAURANT LIMITED",
      date: "Oct 21st, 11:05:33",
      amount: "₦15,350",
      commission: "₦1,250",
      status: "successful",
    },
    {
      id: 2,
      type: "transfer",
      title: "Transfer from Jamie Micheal",
      date: "Oct 21st, 11:05:33",
      amount: "₦15,350",
      commission: "₦1,250",
      status: "successful",
    },
  ];

  const vendors = [
    { name: "Mardiya Kitchen", type: "vendor", amount: "₦125,500.65" },
    { name: "Mardiya Kitchen", type: "vendor", amount: "₦125,500.65" },
    { name: "Mardiya Kitchen", type: "vendor", amount: "₦125,500.65" },
    { name: "Mardiya Kitchen", type: "vendor", amount: "₦125,500.65" },
  ];

  const orders = [
    {
      id: "#2356",
      date: "Oct 21st, 11:05:33",
      amount: "₦15,350",
      commission: "₦1,250",
    },
    {
      id: "#2356",
      date: "Oct 21st, 11:05:33",
      amount: "₦15,350",
      commission: "₦1,250",
    },
    {
      id: "#2356",
      date: "Oct 21st, 11:05:33",
      amount: "₦15,350",
      commission: "₦1,250",
    },
    {
      id: "#2356",
      date: "Oct 21st, 11:05:33",
      amount: "₦15,350",
      commission: "₦1,250",
    },
  ];

  const handleCheckVendor = (vendorName: string) => {
    setSelectedVendor(vendorName);
    setCurrentView("orders");
  };

  const handleApprove = () => {
    setModalType("approve");
    setShowModal(true);
    setTimeout(() => setShowModal(false), 2000);
  };

  const handleDeny = () => {
    setModalType("deny");
    setShowModal(true);
    setTimeout(() => setShowModal(false), 2000);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100 pb-20">
      {/* Main View */}
      {currentView === "main" && (
        <div className="animate-fade-in">
          {/* Header */}
          <div className="bg-gradient-to-r from-green-600 to-green-500 text-white px-4 py-4 shadow-lg">
            <div className="flex items-center justify-between mb-4">
              <button className="p-2 hover:bg-white/10 rounded-lg transition-all">
                <Menu className="w-6 h-6" />
              </button>
              <h1 className="text-xl font-bold tracking-wide">
                Earning & Transactions
              </h1>
              <button className="p-2 hover:bg-white/10 rounded-lg transition-all relative">
                <Bell className="w-6 h-6" />
                <span className="absolute top-1 right-1 w-2 h-2 bg-red-500 rounded-full animate-pulse"></span>
              </button>
            </div>
          </div>

          {/* Search and Filter */}
          <div className="px-4 -mt-6 mb-4">
            <div className="bg-white rounded-2xl shadow-lg p-4">
              <div className="flex items-center gap-3 mb-4">
                <div className="flex-1 flex items-center gap-2 bg-gray-100 rounded-xl px-4 py-3">
                  <Search className="w-5 h-5 text-gray-400" />
                  <input
                    type="text"
                    placeholder="Search for transactions"
                    className="flex-1 bg-transparent outline-none text-sm"
                  />
                </div>
                <button className="px-4 py-3 bg-white border-2 border-green-500 text-green-600 rounded-xl font-semibold hover:bg-green-50 transition-all">
                  Filter
                </button>
              </div>

              <div className="flex gap-2 overflow-x-auto pb-2">
                {filters.map((filter) => (
                  <button
                    key={filter}
                    onClick={() => setSelectedFilter(filter)}
                    className={`px-6 py-2.5 rounded-xl font-semibold whitespace-nowrap transition-all ${
                      selectedFilter === filter
                        ? "bg-green-500 text-white shadow-lg shadow-green-500/30"
                        : "bg-gray-100 text-gray-600 hover:bg-gray-200"
                    }`}
                  >
                    {filter === "All" && <span className="mr-1">✓</span>}
                    {filter}
                  </button>
                ))}
              </div>
            </div>
          </div>

          {/* Total Earnings Card */}
          <div className="px-4 mb-4">
            <div className="bg-gradient-to-br from-white to-gray-50 rounded-3xl shadow-xl p-6 border border-gray-100 animate-slide-up">
              <div className="flex items-center justify-between mb-2">
                <div className="flex items-center gap-2 text-green-600 font-semibold">
                  <span>Total earnings</span>
                  <ChevronDown className="w-5 h-5" />
                </div>
              </div>
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <span className="text-3xl font-bold text-gray-800">₦</span>
                  <span className="text-4xl font-bold text-gray-800">
                    2,300,027.87
                  </span>
                </div>
                <div className="flex items-center gap-2 bg-green-100 px-3 py-2 rounded-xl">
                  <div className="w-6 h-4 rounded overflow-hidden flex">
                    <div className="w-1/2 bg-green-600"></div>
                    <div className="w-1/2 bg-white"></div>
                  </div>
                </div>
              </div>
              <div className="mt-4 text-right">
                <span className="text-gray-500 text-sm">Pending Payout - </span>
                <span className="text-green-600 font-bold">₦ 2859.87</span>
              </div>
            </div>
          </div>

          {/* Payout Management */}
          <div className="px-4 mb-4">
            <button
              onClick={() => setCurrentView("payout")}
              className="w-full bg-white rounded-2xl shadow-lg p-4 flex items-center justify-between hover:shadow-xl transition-all animate-slide-up"
              style={{ animationDelay: "0.1s" }}
            >
              <span className="font-bold text-gray-800 text-lg">
                Payout Management
              </span>
              <div className="flex items-center gap-2">
                <span className="bg-green-100 text-green-600 px-3 py-1 rounded-full text-sm font-semibold">
                  5
                </span>
                <ChevronRight className="w-6 h-6 text-green-600" />
              </div>
            </button>
          </div>

          {/* Transactions */}
          <div className="px-4">
            <div
              className="bg-white rounded-3xl shadow-xl p-6 animate-slide-up"
              style={{ animationDelay: "0.2s" }}
            >
              <div className="flex items-center justify-between mb-6">
                <h2 className="text-xl font-bold text-gray-800">
                  Transactions
                </h2>
                <div className="flex items-center gap-2 text-gray-500 text-sm">
                  <span>21st May - 25th Aug</span>
                  <Calendar className="w-4 h-4" />
                </div>
              </div>

              <div className="space-y-4">
                {transactions.map((transaction, index) => (
                  <div
                    key={transaction.id}
                    className="flex items-center gap-4 p-4 rounded-2xl hover:bg-gray-50 transition-all cursor-pointer group"
                    style={{ animationDelay: `${0.3 + index * 0.1}s` }}
                  >
                    <div
                      className={`w-12 h-12 rounded-full flex items-center justify-center ${
                        transaction.type === "payout"
                          ? "bg-blue-100"
                          : "bg-green-100"
                      } group-hover:scale-110 transition-transform`}
                    >
                      {transaction.type === "payout" ? (
                        <ArrowUpRight className="w-6 h-6 text-blue-600" />
                      ) : (
                        <ArrowDownRight className="w-6 h-6 text-green-600" />
                      )}
                    </div>
                    <div className="flex-1">
                      <p className="font-semibold text-gray-800 mb-1">
                        {transaction.type === "payout"
                          ? "Payout"
                          : "Transfer from Jamie Micheal"}
                      </p>
                      {transaction.type === "payout" && (
                        <p className="text-sm text-gray-600 mb-1">
                          Transfer to LACE RESTAURANT LIMITED
                        </p>
                      )}
                      <div className="flex items-center gap-2">
                        <span className="text-xs text-gray-500">
                          {transaction.date}
                        </span>
                        <span className="px-2 py-1 bg-green-100 text-green-600 text-xs font-semibold rounded-md">
                          {transaction.status}
                        </span>
                      </div>
                    </div>
                    <div className="text-right">
                      <p className="font-bold text-gray-800 text-lg">
                        {transaction.amount}
                      </p>
                      <p className="text-xs text-gray-500">
                        Commission -{" "}
                        <span className="text-green-600 font-semibold">
                          {transaction.commission}
                        </span>
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Payout Management View */}
      {currentView === "payout" && (
        <div className="animate-fade-in">
          <div className="bg-gradient-to-r from-green-600 to-green-500 text-white px-4 py-4 shadow-lg">
            <div className="flex items-center justify-between">
              <button
                onClick={() => setCurrentView("main")}
                className="p-2 hover:bg-white/10 rounded-lg transition-all"
              >
                <ArrowLeft className="w-6 h-6" />
              </button>
              <h1 className="text-xl font-bold tracking-wide">
                Payout Management{selectedVendor ? ` — ${selectedVendor}` : ""}
              </h1>
              <button className="p-2 hover:bg-white/10 rounded-lg transition-all relative">
                <Bell className="w-6 h-6" />
                <span className="absolute top-1 right-1 w-2 h-2 bg-red-500 rounded-full animate-pulse"></span>
              </button>
            </div>
          </div>

          {/* Total Earnings Card */}
          <div className="px-4 py-6">
            <div className="bg-gradient-to-br from-white to-gray-50 rounded-3xl shadow-xl p-6 border border-gray-100 animate-slide-up">
              <div className="flex items-center gap-2 text-green-600 font-semibold mb-2">
                <span>Total earnings</span>
                <ChevronDown className="w-5 h-5" />
              </div>
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <span className="text-3xl font-bold text-gray-800">₦</span>
                  <span className="text-4xl font-bold text-gray-800">
                    2,300,027.87
                  </span>
                </div>
                <div className="flex items-center gap-2 bg-green-100 px-3 py-2 rounded-xl">
                  <div className="w-6 h-4 rounded overflow-hidden flex">
                    <div className="w-1/2 bg-green-600"></div>
                    <div className="w-1/2 bg-white"></div>
                  </div>
                </div>
              </div>
              <div className="mt-4 text-right">
                <span className="text-gray-500 text-sm">Pending Payout - </span>
                <span className="text-green-600 font-bold">₦ 2859.87</span>
              </div>
            </div>
          </div>

          {/* Vendors List */}
          <div className="px-4 space-y-4">
            {vendors.map((vendor, index) => (
              <div
                key={index}
                className="bg-white rounded-2xl shadow-lg p-5 flex items-center justify-between hover:shadow-xl transition-all animate-slide-up"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div>
                  <p className="font-semibold text-gray-800 mb-1">
                    {vendor.name}{" "}
                    <span className="text-green-600 text-sm">
                      ({vendor.type})
                    </span>
                  </p>
                  <p className="text-xl font-bold text-gray-800">
                    {vendor.amount}
                  </p>
                </div>
                <button
                  onClick={() => handleCheckVendor(vendor.name)}
                  className="px-6 py-2.5 bg-green-500 text-white font-semibold rounded-xl hover:bg-green-600 transition-all shadow-lg shadow-green-500/30"
                >
                  Check
                </button>
              </div>
            ))}
          </div>
        </div>
      )}

      {/* Orders View */}
      {currentView === "orders" && (
        <div className="animate-fade-in">
          <div className="bg-gradient-to-r from-green-600 to-green-500 text-white px-4 py-4 shadow-lg">
            <div className="flex items-center justify-between">
              <button
                onClick={() => setCurrentView("payout")}
                className="p-2 hover:bg-white/10 rounded-lg transition-all"
              >
                <ArrowLeft className="w-6 h-6" />
              </button>
              <h1 className="text-xl font-bold tracking-wide">
                Payout Management
              </h1>
              <button className="p-2 hover:bg-white/10 rounded-lg transition-all relative">
                <Bell className="w-6 h-6" />
                <span className="absolute top-1 right-1 w-2 h-2 bg-red-500 rounded-full animate-pulse"></span>
              </button>
            </div>
          </div>

          {/* Total Earnings Card */}
          <div className="px-4 py-6">
            <div className="bg-gradient-to-br from-white to-gray-50 rounded-3xl shadow-xl p-6 border border-gray-100 animate-slide-up">
              <div className="flex items-center gap-2 text-green-600 font-semibold mb-2">
                <span>Total earnings</span>
                <ChevronDown className="w-5 h-5" />
              </div>
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <span className="text-3xl font-bold text-gray-800">₦</span>
                  <span className="text-4xl font-bold text-gray-800">
                    2,300,027.87
                  </span>
                </div>
                <div className="flex items-center gap-2 bg-green-100 px-3 py-2 rounded-xl">
                  <div className="w-6 h-4 rounded overflow-hidden flex">
                    <div className="w-1/2 bg-green-600"></div>
                    <div className="w-1/2 bg-white"></div>
                  </div>
                </div>
              </div>
              <div className="mt-4 text-right">
                <span className="text-gray-500 text-sm">Pending Payout - </span>
                <span className="text-green-600 font-bold">₦ 2859.87</span>
              </div>
            </div>
          </div>

          {/* Orders Completed */}
          <div className="px-4 mb-6">
            <div className="bg-white rounded-3xl shadow-xl p-6 animate-slide-up">
              <div className="flex items-center justify-between mb-6">
                <h2 className="text-xl font-bold text-green-600">
                  Orders completed
                </h2>
                <div className="flex items-center gap-2 text-gray-500 text-sm">
                  <span>21st May - 25th Aug</span>
                  <Calendar className="w-4 h-4" />
                </div>
              </div>

              <div className="space-y-4">
                {orders.map((order, index) => (
                  <div
                    key={index}
                    className="flex items-center gap-4 p-4 rounded-2xl hover:bg-gray-50 transition-all"
                    style={{ animationDelay: `${index * 0.1}s` }}
                  >
                    <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center">
                      <ArrowUpRight className="w-6 h-6 text-blue-600" />
                    </div>
                    <div className="flex-1">
                      <p className="font-bold text-gray-800 mb-1">
                        ORDER - {order.id}
                      </p>
                      <div className="flex items-center gap-2">
                        <span className="text-xs text-gray-500">
                          {order.date}
                        </span>
                        <span className="px-2 py-1 bg-green-100 text-green-600 text-xs font-semibold rounded-md">
                          Completed
                        </span>
                      </div>
                    </div>
                    <div className="text-right">
                      <p className="font-bold text-gray-800 text-lg">
                        {order.amount}
                      </p>
                      <p className="text-xs text-gray-500">
                        Commission -{" "}
                        <span className="text-green-600 font-semibold">
                          {order.commission}
                        </span>
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Action Buttons */}
          <div className="px-4 space-y-4 animate-slide-up">
            <button
              onClick={handleApprove}
              className="w-full py-4 bg-green-600 text-white font-bold text-lg rounded-2xl hover:bg-green-700 transition-all shadow-xl shadow-green-600/30"
            >
              Approve
            </button>
            <button
              onClick={handleDeny}
              className="w-full py-4 bg-red-600 text-white font-bold text-lg rounded-2xl hover:bg-red-700 transition-all shadow-xl shadow-red-600/30"
            >
              Deny Payout
            </button>
          </div>
        </div>
      )}

      {/* Modal */}
      {showModal && (
        <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 animate-fade-in px-4">
          <div className="bg-white rounded-3xl p-8 max-w-sm w-full shadow-2xl animate-scale-up">
            <div className="flex justify-end mb-4">
              <button
                onClick={() => setShowModal(false)}
                className="text-gray-400 hover:text-gray-600"
              >
                <X className="w-6 h-6" />
              </button>
            </div>
            <div className="text-center">
              <h3 className="text-2xl font-bold text-gray-800 mb-2">
                Mr. Bright
              </h3>
              <p className="text-green-600 font-semibold mb-6">Rider</p>
              <p className="text-gray-600 mb-8">
                Are you sure you want to{" "}
                {modalType === "approve" ? "approve" : "deny"} Mr. Bright payout
              </p>
              <button
                onClick={() => setShowModal(false)}
                className={`w-full py-4 ${
                  modalType === "approve"
                    ? "bg-green-600 hover:bg-green-700"
                    : "bg-red-600 hover:bg-red-700"
                } text-white font-bold text-lg rounded-2xl transition-all shadow-xl`}
              >
                Yes
              </button>
            </div>
          </div>
        </div>
      )}

      <style>{`
        @keyframes fade-in {
          from {
            opacity: 0;
          }
          to {
            opacity: 1;
          }
        }

        @keyframes slide-up {
          from {
            opacity: 0;
            transform: translateY(30px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        @keyframes scale-up {
          from {
            opacity: 0;
            transform: scale(0.9);
          }
          to {
            opacity: 1;
            transform: scale(1);
          }
        }

        .animate-fade-in {
          animation: fade-in 0.4s ease-out;
        }

        .animate-slide-up {
          animation: slide-up 0.6s ease-out backwards;
        }

        .animate-scale-up {
          animation: scale-up 0.3s ease-out;
        }
      `}</style>
    </div>
  );
};

export default Transaction;
