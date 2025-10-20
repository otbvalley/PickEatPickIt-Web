import { useState } from "react";
import {
  Bell,
  ChevronRight,
  ArrowLeft,
  MapPin,
  Phone,
  Mail,
  CheckCircle,
} from "lucide-react";
import { RiderNav } from "../component/RiderNav";

interface OrderItem {
  name: string;
  quantity: number;
  price: number;
}

interface Customer {
  name: string;
  email: string;
  phone: string;
}

interface Order {
  id: string;
  restaurant: string;
  location: string;
  time: string;
  image: string;
  items: OrderItem[];
  customer: Customer;
  pickup: string;
  delivery: string;
  serviceCharge: number;
  deliveryCharge: number;
  total: number;
  instructions?: string;
  deliveryTime?: string;
}

const RiderOrder = () => {
  const [activeTab, setActiveTab] = useState<"pending" | "ongoing">("pending");
  const [selectedOrder, setSelectedOrder] = useState<Order | null>(null);
  const [view, setView] = useState<"list" | "details" | "insights">("list");
  const [showNotification, setShowNotification] = useState(false);
  const [pendingOrders, setPendingOrders] = useState<Order[]>([
    {
      id: "5178",
      restaurant: "Mardiya Kitchen",
      location: "Vila Nova Estate, New Apo Ext.",
      time: "Tue 21 Oct, 2023 - 4:00PM",
      image: "🥗",
      items: [
        { name: "Jollof Rice", quantity: 2, price: 46.9 },
        { name: "Fried Plantain", quantity: 5, price: 1.75 },
        { name: "Banana Smoothie", quantity: 1, price: 0.89 },
      ],
      customer: {
        name: "Samuel Adeyanju K.",
        email: "samueladeyanjuk@yahoo.com",
        phone: "+2349063123456",
      },
      pickup: "Flat 1, Block L, 02 Boulevard,Vila Nova Estate, New Apo Ext.",
      delivery: "Flat 1, Block L, 02 Boulevard,Vila Nova Estate, New Apo Ext.",
      serviceCharge: 0.15,
      deliveryCharge: 1.45,
      total: 51.14,
      instructions:
        "Tell the gateman you're from Mrs. Adeyanju, tell him you're the guest.\nPls knock when you get to the door",
    },
    {
      id: "5179",
      restaurant: "Mardiya Kitchen",
      location: "Vila Nova Estate, New Apo Ext.",
      time: "Tue 21 Oct, 2023 - 4:00PM",
      image: "🍟",
      items: [{ name: "French Fries", quantity: 3, price: 25.5 }],
      customer: {
        name: "John Doe",
        email: "johndoe@email.com",
        phone: "+2348012345678",
      },
      pickup: "Flat 1, Block L, 02 Boulevard,Vila Nova Estate, New Apo Ext.",
      delivery: "Flat 1, Block L, 02 Boulevard,Vila Nova Estate, New Apo Ext.",
      serviceCharge: 0.1,
      deliveryCharge: 1.2,
      total: 26.8,
      instructions: "Please ring the doorbell twice",
    },
    {
      id: "5180",
      restaurant: "Mardiya Kitchen",
      location: "Vila Nova Estate, New Apo Ext.",
      time: "Tue 21 Oct, 2023 - 4:00PM",
      image: "🥙",
      items: [{ name: "Shawarma", quantity: 2, price: 18.0 }],
      customer: {
        name: "Jane Smith",
        email: "janesmith@email.com",
        phone: "+2347098765432",
      },
      pickup: "Flat 1, Block L, 02 Boulevard,Vila Nova Estate, New Apo Ext.",
      delivery: "Flat 1, Block L, 02 Boulevard,Vila Nova Estate, New Apo Ext.",
      serviceCharge: 0.08,
      deliveryCharge: 1.0,
      total: 19.08,
      instructions: "Call when you arrive",
    },
    {
      id: "5181",
      restaurant: "Mardiya Kitchen",
      location: "Vila Nova Estate, New Apo Ext.",
      time: "Tue 21 Oct, 2023 - 4:00PM",
      image: "🥤",
      items: [{ name: "Smoothie Bowl", quantity: 1, price: 12.5 }],
      customer: {
        name: "Mike Johnson",
        email: "mikej@email.com",
        phone: "+2348123456789",
      },
      pickup: "Flat 1, Block L, 02 Boulevard,Vila Nova Estate, New Apo Ext.",
      delivery: "Flat 1, Block L, 02 Boulevard,Vila Nova Estate, New Apo Ext.",
      serviceCharge: 0.05,
      deliveryCharge: 0.95,
      total: 13.5,
      instructions: "Leave at the door",
    },
  ]);
  const [ongoingOrders, setOngoingOrders] = useState<Order[]>([]);

  const handleAcceptOrder = () => {
    if (selectedOrder) {
      const order = pendingOrders.find((o) => o.id === selectedOrder.id);
      if (order) {
        const ongoingOrder: Order = {
          ...order,
          deliveryTime: "21 Oct. - 4:00PM",
        };
        setOngoingOrders([...ongoingOrders, ongoingOrder]);
        setPendingOrders(
          pendingOrders.filter((o) => o.id !== selectedOrder.id)
        );

        setShowNotification(true);
        setTimeout(() => {
          setShowNotification(false);
          setActiveTab("ongoing");
          setView("list");
          setSelectedOrder(null);
        }, 2000);
      }
    }
  };

  const handleRejectOrder = () => {
    if (selectedOrder) {
      setPendingOrders(pendingOrders.filter((o) => o.id !== selectedOrder.id));
      setView("list");
      setSelectedOrder(null);
    }
  };

  const handleMarkCompleted = () => {
    if (selectedOrder) {
      setOngoingOrders(ongoingOrders.filter((o) => o.id !== selectedOrder.id));
      setView("insights");
      setSelectedOrder(null);
    }
  };

  const OrderCard = ({
    order,
    type,
  }: {
    order: Order;
    type: "pending" | "ongoing";
  }) => (
    <div
      className="bg-white rounded-xl p-4 mb-3 shadow-sm hover:shadow-md transition-all duration-300 cursor-pointer border border-gray-100 hover:border-green-200 transform hover:-translate-y-1"
      onClick={() => {
        setSelectedOrder(order);
        setView("details");
      }}
    >
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-4">
          <div className="w-16 h-16 bg-gradient-to-br from-green-50 to-green-100 rounded-xl flex items-center justify-center text-3xl shadow-sm">
            {order.image}
          </div>
          <div>
            <h3 className="font-semibold text-gray-900 text-base">
              {type === "ongoing"
                ? order.customer.name.split(" ")[0] + " Gift Adeyanju"
                : order.restaurant}
            </h3>
            <div className="flex items-center gap-1 text-gray-500 text-sm mt-1">
              <MapPin className="w-3.5 h-3.5" />
              <span>{order.location}</span>
            </div>
            <p className="text-sm mt-1.5">
              <span className="text-gray-600">
                {type === "ongoing" ? "To be Delivered:" : "Time:"}
              </span>
              <span className="text-green-600 font-medium ml-1">
                {type === "ongoing" ? order.deliveryTime : order.time}
              </span>
            </p>
          </div>
        </div>
        <ChevronRight className="w-5 h-5 text-gray-400" />
      </div>
    </div>
  );

  if (view === "insights") {
    return (
      <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white">
        <div className="bg-white shadow-sm sticky top-0 z-10">
          <div className="max-w-md mx-auto px-4 py-4 flex items-center justify-between">
            <ArrowLeft
              className="w-6 h-6 cursor-pointer text-gray-700 hover:text-gray-900 transition-colors"
              onClick={() => setView("list")}
            />
            <h1 className="text-lg font-semibold text-gray-900">Insights</h1>
            <Bell className="w-6 h-6 text-gray-700" />
          </div>
        </div>

        <div className="max-w-md mx-auto p-4">
          <div className="bg-white rounded-xl p-3 mb-4 border border-gray-200 inline-flex items-center gap-2 shadow-sm">
            <div className="w-8 h-8 bg-green-100 rounded-lg flex items-center justify-center">
              <div className="w-5 h-5 bg-green-500 rounded"></div>
            </div>
            <span className="font-medium text-gray-900">Today</span>
            <ChevronRight className="w-4 h-4 text-gray-400 ml-2" />
          </div>

          <div className="bg-gradient-to-br from-green-50 to-white rounded-2xl p-6 mb-4 shadow-sm border border-green-100">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-10 h-10 bg-white rounded-xl flex items-center justify-center shadow-sm">
                <div className="w-5 h-5 bg-green-500 rounded"></div>
              </div>
              <h3 className="font-semibold text-gray-900">Deliveries</h3>
            </div>
            <p className="text-sm text-gray-600 mb-6">
              Your total number of orders delivered compared to the other riders
            </p>
            <div className="flex items-end justify-between pt-4 border-t border-gray-200">
              <div>
                <p className="text-sm text-gray-500 mb-2">Today</p>
                <p className="text-4xl font-bold text-green-600">2</p>
              </div>
              <div className="text-right">
                <p className="text-sm text-gray-500 mb-2">Average</p>
                <p className="text-4xl font-bold text-gray-800">8</p>
              </div>
            </div>
          </div>

          <div className="bg-gradient-to-br from-blue-50 to-white rounded-2xl p-6 shadow-sm border border-blue-100">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-10 h-10 bg-white rounded-xl flex items-center justify-center shadow-sm">
                <MapPin className="w-5 h-5 text-blue-600" />
              </div>
              <h3 className="font-semibold text-gray-900">Deliveries</h3>
            </div>
            <p className="text-sm text-gray-600 mb-6">
              Your distance travelled compared to the other riders
            </p>
            <div className="flex items-end justify-between pt-4 border-t border-gray-200">
              <div>
                <p className="text-sm text-gray-500 mb-2">Today</p>
                <p className="text-3xl font-bold text-green-600">
                  11.87<span className="text-base text-gray-500 ml-1">km</span>
                </p>
              </div>
              <div className="text-right">
                <p className="text-sm text-gray-500 mb-2">Average</p>
                <p className="text-3xl font-bold text-gray-800">
                  12.95<span className="text-base text-gray-500 ml-1">km</span>
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className="fixed bottom-0 left-0 right-0 bg-white border-t border-gray-200 shadow-lg">
          <div className="max-w-md mx-auto px-6 py-3 flex justify-around">
            <button className="flex flex-col items-center gap-1 text-gray-400 hover:text-gray-600 transition-colors">
              <div className="w-6 h-6 bg-gray-300 rounded"></div>
              <span className="text-xs">Home</span>
            </button>
            <button className="flex flex-col items-center gap-1 text-green-600">
              <div className="w-6 h-6 bg-green-600 rounded"></div>
              <span className="text-xs font-medium">Orders</span>
            </button>
            <button className="flex flex-col items-center gap-1 text-gray-400 hover:text-gray-600 transition-colors">
              <MapPin className="w-6 h-6" />
              <span className="text-xs">Map</span>
            </button>
            <button className="flex flex-col items-center gap-1 text-gray-400 hover:text-gray-600 transition-colors">
              <div className="w-6 h-6 rounded-full bg-gray-300"></div>
              <span className="text-xs">Account</span>
            </button>
          </div>
        </div>
      </div>
    );
  }

  if (view === "details" && selectedOrder) {
    return (
      <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white">
        {showNotification && (
          <div className="fixed top-4 left-1/2 transform -translate-x-1/2 bg-green-600 text-white px-6 py-3 rounded-xl shadow-2xl z-50 flex items-center gap-3 animate-slideDown">
            <CheckCircle className="w-5 h-5" />
            <span className="font-medium">Order accepted successfully!</span>
          </div>
        )}

        <div className="bg-white shadow-sm sticky top-0 z-10">
          <div className="max-w-5xl mx-auto px-4 py-4 flex items-center justify-between">
            <ArrowLeft
              className="w-6 h-6 cursor-pointer text-gray-700 hover:text-gray-900 transition-colors"
              onClick={() => {
                setView("list");
                setSelectedOrder(null);
              }}
            />
            <h1 className="text-lg font-semibold text-gray-900">
              Order details
            </h1>
            <div className="w-6"></div>
          </div>
        </div>

        <div className="max-w-5xl mx-auto p-4 pb-32">
          <div className="bg-gradient-to-br from-green-50 to-white rounded-2xl p-5 mb-4 border-l-4 border-green-500 shadow-sm">
            <div className="flex items-center gap-2 mb-3">
              <MapPin className="w-5 h-5 text-green-600" />
              <h3 className="font-semibold text-green-700">Pick Up</h3>
            </div>
            <p className="text-sm text-gray-700 leading-relaxed">
              {selectedOrder.pickup}
            </p>
          </div>

          <div className="bg-gradient-to-br from-blue-50 to-white rounded-2xl p-5 mb-4 border-l-4 border-blue-500 shadow-sm">
            <div className="flex items-center gap-2 mb-3">
              <MapPin className="w-5 h-5 text-blue-600" />
              <h3 className="font-semibold text-blue-700">Delivery</h3>
            </div>
            <p className="text-sm text-gray-700 leading-relaxed">
              {selectedOrder.delivery}
            </p>
          </div>

          <div className="bg-white rounded-2xl p-5 mb-4 shadow-sm border border-gray-200">
            <div className="flex items-center gap-4 mb-4">
              <div className="w-16 h-16 bg-gradient-to-br from-gray-100 to-gray-200 rounded-full flex items-center justify-center">
                <span className="text-2xl font-bold text-gray-600">
                  {selectedOrder.customer.name.charAt(0)}
                </span>
              </div>
              <div>
                <h3 className="font-semibold text-gray-900 text-lg">
                  {selectedOrder.customer.name}
                </h3>
                <div className="flex items-center gap-2 mt-2">
                  <Mail className="w-4 h-4 text-gray-400" />
                  <p className="text-sm text-gray-600">
                    {selectedOrder.customer.email}
                  </p>
                </div>
                <div className="flex items-center gap-2 mt-1">
                  <Phone className="w-4 h-4 text-gray-400" />
                  <p className="text-sm text-green-600 font-medium">
                    {selectedOrder.customer.phone}
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-white rounded-2xl p-5 mb-4 shadow-sm border border-gray-200">
            <div className="flex items-center justify-between mb-4">
              <div>
                <p className="text-sm text-gray-500">
                  Order ID:{" "}
                  <span className="text-green-600 font-semibold">
                    {selectedOrder.id}
                  </span>
                </p>
                <p className="font-semibold text-gray-900 mt-1">
                  {selectedOrder.restaurant}
                </p>
              </div>
              <span className="text-xs text-gray-500 bg-gray-100 px-3 py-1 rounded-full">
                5 mins ago
              </span>
            </div>

            <div className="space-y-3 mb-4">
              {selectedOrder.items.map((item: OrderItem, idx: number) => (
                <div
                  key={idx}
                  className="flex justify-between items-center py-2 border-b border-gray-100 last:border-0"
                >
                  <div className="flex items-center gap-3">
                    <span className="bg-green-100 text-green-700 text-xs font-semibold px-2 py-1 rounded">
                      x{item.quantity}
                    </span>
                    <span className="text-gray-700">{item.name}</span>
                  </div>
                  <span className="text-green-600 font-semibold">
                    ${item.price.toFixed(2)}
                  </span>
                </div>
              ))}
            </div>

            <div className="pt-3 border-t border-gray-200 space-y-2">
              <div className="flex justify-between text-sm">
                <span className="text-gray-600">Services Charges:</span>
                <span className="text-gray-700">
                  ${selectedOrder.serviceCharge.toFixed(2)}
                </span>
              </div>
              <div className="flex justify-between text-sm">
                <span className="text-gray-600">Delivery Charges:</span>
                <span className="text-gray-700">
                  ${selectedOrder.deliveryCharge.toFixed(2)}
                </span>
              </div>
              <div className="flex justify-between text-sm pt-2 border-t border-gray-200">
                <span className="text-gray-600">Payment Mode:</span>
                <span className="text-gray-900 font-semibold">WALLET</span>
              </div>
              <div className="flex justify-between pt-3 border-t-2 border-gray-300">
                <span className="font-semibold text-gray-900 text-lg">
                  Total
                </span>
                <span className="font-bold text-green-600 text-xl">
                  ${selectedOrder.total.toFixed(2)}
                </span>
              </div>
            </div>
          </div>

          {selectedOrder.instructions && (
            <div className="bg-gradient-to-br from-amber-50 to-white rounded-2xl p-5 mb-4 shadow-sm border border-amber-200">
              <h4 className="font-semibold text-gray-900 mb-3">
                Special delivery instructions
              </h4>
              <p className="text-sm text-gray-700 leading-relaxed whitespace-pre-line">
                {selectedOrder.instructions}
              </p>
            </div>
          )}

          {activeTab === "pending" && (
            <div className="fixed bottom-0 left-0 right-0 bg-white border-t border-gray-200 p-4 shadow-2xl">
              <div className="max-w-md mx-auto flex gap-3">
                <button
                  onClick={handleRejectOrder}
                  className="flex-1 bg-white border-2 border-red-500 text-red-600 py-4 rounded-xl font-semibold hover:bg-red-50 transition-all duration-300 transform hover:scale-105 active:scale-95 shadow-sm"
                >
                  Reject order
                </button>
                <button
                  onClick={handleAcceptOrder}
                  className="flex-1 bg-gradient-to-r from-green-600 to-green-500 text-white py-4 rounded-xl font-semibold hover:from-green-700 hover:to-green-600 transition-all duration-300 transform hover:scale-105 active:scale-95 shadow-lg"
                >
                  Accept Order
                </button>
              </div>
            </div>
          )}

          {activeTab === "ongoing" && (
            <div className="fixed bottom-0 left-0 right-0 bg-white border-t border-gray-200 p-4 shadow-2xl">
              <div className="max-w-md mx-auto">
                <button
                  onClick={handleMarkCompleted}
                  className="w-full bg-gradient-to-r from-green-600 to-green-500 text-white py-4 rounded-xl font-semibold hover:from-green-700 hover:to-green-600 transition-all duration-300 transform hover:scale-105 active:scale-95 shadow-lg"
                >
                  Mark as Completed
                </button>
              </div>
            </div>
          )}
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white">
      <RiderNav />
      <div className="bg-white shadow-sm sticky top-0 z-10">
        <div className="max-w-5xl mx-auto px-4 py-4 flex items-center justify-between">
          <h1 className="text-lg font-semibold text-gray-900">Orders</h1>
          <Bell className="w-6 h-6 text-gray-700" />
        </div>
      </div>

      <div className="max-w-5xl mx-auto p-4">
        <h2 className="text-xl font-bold text-green-600 mb-4">My Orders</h2>

        <div className="flex gap-3 mb-6">
          <button
            onClick={() => setActiveTab("pending")}
            className={`flex-1 py-3 rounded-xl font-semibold transition-all duration-300 transform hover:scale-105 ${
              activeTab === "pending"
                ? "bg-gradient-to-r from-green-600 to-green-500 text-white shadow-lg"
                : "bg-gray-100 text-gray-600 hover:bg-gray-200"
            }`}
          >
            Pending Orders
          </button>
          <button
            onClick={() => setActiveTab("ongoing")}
            className={`flex-1 py-3 rounded-xl font-semibold transition-all duration-300 transform hover:scale-105 ${
              activeTab === "ongoing"
                ? "bg-gradient-to-r from-green-600 to-green-500 text-white shadow-lg"
                : "bg-gray-100 text-gray-600 hover:bg-gray-200"
            }`}
          >
            Ongoing Orders
          </button>
        </div>

        <div className="space-y-3">
          {activeTab === "pending" && pendingOrders.length === 0 && (
            <div className="text-center py-12">
              <div className="w-20 h-20 bg-gray-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-4xl">📦</span>
              </div>
              <p className="text-gray-500">No pending orders</p>
            </div>
          )}
          {activeTab === "pending" &&
            pendingOrders.map((order) => (
              <OrderCard key={order.id} order={order} type="pending" />
            ))}

          {activeTab === "ongoing" && ongoingOrders.length === 0 && (
            <div className="text-center py-12">
              <div className="w-20 h-20 bg-gray-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-4xl">🚚</span>
              </div>
              <p className="text-gray-500">No ongoing orders</p>
            </div>
          )}
          {activeTab === "ongoing" &&
            ongoingOrders.map((order) => (
              <OrderCard key={order.id} order={order} type="ongoing" />
            ))}
        </div>
      </div>

      <style>{`
        @keyframes slideDown {
          from {
            transform: translate(-50%, -100%);
            opacity: 0;
          }
          to {
            transform: translate(-50%, 0);
            opacity: 1;
          }
        }
        .animate-slideDown {
          animation: slideDown 0.3s ease-out;
        }
      `}</style>
    </div>
  );
};

export default RiderOrder;
