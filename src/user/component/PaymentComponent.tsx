import { useState } from "react";
import { ChevronLeft, Wallet, Check } from "lucide-react";
import { Navbar } from "../../component/Navbar";
// import { Navbar } from "../../component/Navbar";

type Screen = "kitchen" | "confirm" | "payment" | "success";

interface MenuItem {
  id: number;
  name: string;
  price: number;
  discount: number;
  image: string;
  description: string;
  quantity: number;
}

interface OrderItem {
  name: string;
  quantity: number;
  price: number;
}

const menuItems: MenuItem[] = [
  {
    id: 1,
    name: "Fried Rice",
    price: 23.45,
    discount: 15,
    image:
      "https://images.unsplash.com/photo-1562909895-d82f9655a90c?w=500&h=500&fit=crop",
    description: "Delicious fried rice with vegetables",
    quantity: 0,
  },
  {
    id: 2,
    name: "Fresh Salad",
    price: 23.45,
    discount: 30,
    image:
      "https://images.unsplash.com/photo-1546069901-ba9599a7e63c?w=500&h=500&fit=crop",
    description: "Crisp and fresh garden salad",
    quantity: 0,
  },
  {
    id: 3,
    name: "Chicken BBQ",
    price: 23.45,
    discount: 38,
    image:
      "https://images.unsplash.com/photo-1598103442097-8b74394b95c6?w=500&h=500&fit=crop",
    description: "Smoky grilled chicken",
    quantity: 0,
  },
  {
    id: 4,
    name: "Fried Plantain",
    price: 23.45,
    discount: 25,
    image:
      "https://images.unsplash.com/photo-1585238341710-4b4e6ceea842?w=500&h=500&fit=crop",
    description: "Golden crispy plantain slices",
    quantity: 0,
  },
  {
    id: 5,
    name: "Grilled Fish",
    price: 23.45,
    discount: 15,
    image:
      "https://images.unsplash.com/photo-1580959375944-abd7e991f971?w=500&h=500&fit=crop",
    description: "Fresh grilled fish fillet",
    quantity: 0,
  },
  {
    id: 6,
    name: "Premium Burger",
    price: 23.45,
    discount: 40,
    image:
      "https://images.unsplash.com/photo-1568901346375-23c9450c58cd?w=500&h=500&fit=crop",
    description: "Juicy beef burger with toppings",
    quantity: 0,
  },
  {
    id: 7,
    name: "Fried Chicken",
    price: 23.45,
    discount: 25,
    image:
      "https://images.unsplash.com/photo-1626082927389-6cd097cdc45e?w=500&h=500&fit=crop",
    description: "Crispy golden fried chicken",
    quantity: 0,
  },
];

export default function PaymentComponent() {
  const [screen, setScreen] = useState<Screen>("kitchen");
  const [items, setItems] = useState<MenuItem[]>(menuItems);

  const [showSuccess, setShowSuccess] = useState(false);

  const getCart = (): OrderItem[] =>
    items
      .filter((item) => item.quantity > 0)
      .map((item) => ({
        name: item.name,
        quantity: item.quantity,
        price: item.price * item.quantity,
      }));

  const calculateTotal = () => {
    const subtotal = getCart().reduce((sum, item) => sum + item.price, 0);
    const coupon = 5.5;
    const delivery = 5.0;
    return { subtotal, coupon, delivery, total: subtotal - coupon + delivery };
  };

  const Payment = () => {
    const { subtotal, coupon, delivery, total } = calculateTotal();
    return (
      <div className="min-h-screen w-full bg-gray-50">
        <div className="sticky top-0 bg-white z-40 border-b border-gray-200 shadow-sm">
          <div className="max-w-3xl mx-auto px-4 py-4 flex items-center gap-4">
            <ChevronLeft
              className="w-6 h-6 cursor-pointer text-gray-700 hover:text-gray-900"
              onClick={() => setScreen("confirm")}
            />
            <h1 className="text-xl font-bold text-gray-900 flex-1">Payment</h1>
          </div>
        </div>

        <div className="max-w-3xl mx-auto px-4 py-6">
          <div className="bg-white rounded-xl p-5 mb-6 border border-gray-200">
            <h2 className="font-bold text-gray-900 mb-4">Order Items</h2>
            <div className="space-y-4">
              {getCart().map((item, i) => (
                <div
                  key={i}
                  className="flex gap-4 items-center pb-4 border-b border-gray-100 last:border-b-0 last:pb-0"
                >
                  <div className="w-20 h-20 bg-gray-200 rounded-lg overflow-hidden flex-shrink-0">
                    <img
                      src={items[i].image}
                      alt={item.name}
                      className="w-full h-full object-cover"
                      onClick={() => setItems}
                    />
                  </div>
                  <div className="flex-1">
                    <p className="font-bold text-gray-900">{item.name}</p>
                    <p className="text-sm text-gray-600">x{item.quantity}</p>
                  </div>
                  <p className="font-bold text-green-600">
                    ${item.price.toFixed(2)}
                  </p>
                </div>
              ))}
            </div>
          </div>

          <div className="bg-white rounded-xl p-5 mb-6 border border-gray-200">
            <div className="flex gap-3 mb-5 p-3 bg-gray-50 rounded-lg border border-gray-300 hover:border-green-500 transition-colors">
              <input
                type="text"
                placeholder="Enter your promo code"
                className="flex-1 outline-none text-sm bg-gray-50"
              />
              <ChevronLeft className="w-5 h-5 text-gray-400 rotate-180" />
            </div>

            <div className="space-y-3 text-sm">
              <div className="flex justify-between text-gray-700">
                <span>Subtotal</span>
                <span className="font-semibold">${subtotal.toFixed(2)}</span>
              </div>
              <div className="flex justify-between text-green-600 font-bold">
                <span>Coupon Discount</span>
                <span>-${coupon.toFixed(2)}</span>
              </div>
              <div className="flex justify-between text-gray-700">
                <span>Delivery Fee</span>
                <span className="font-semibold">${delivery.toFixed(2)}</span>
              </div>
              <div className="border-t border-gray-200 pt-3 mt-3 flex justify-between font-bold text-base">
                <span className="text-gray-900">Total Amount</span>
                <span className="text-green-600">${total.toFixed(2)}</span>
              </div>
            </div>
          </div>

          <div className="bg-white rounded-xl p-5 mb-6 border border-gray-200">
            <div className="flex items-center gap-3">
              <Wallet className="w-6 h-6 text-green-600" />
              <div className="flex-1">
                <p className="font-semibold text-gray-900">Payment Method</p>
                <p className="text-sm text-gray-600">
                  Visa •••• •••• •••• 8970
                </p>
              </div>
              <ChevronLeft className="w-5 h-5 text-gray-400 rotate-180" />
            </div>
          </div>

          <div className="flex gap-3 mb-6">
            <button className="flex-1 border-2 border-green-600 text-green-600 font-bold py-4 rounded-lg hover:bg-green-50 transition-colors">
              Add to Cart
            </button>
            <button
              onClick={() => setShowSuccess(true)}
              className="flex-1 bg-green-600 hover:bg-green-700 text-white font-bold py-4 rounded-lg transition-colors shadow-lg hover:shadow-xl"
            >
              Pay Now
            </button>
          </div>
        </div>
      </div>
    );
  };

  const Success = () => (
    <div className="fixed inset-0 bg-black/50 flex items-center justify-center p-4 z-50">
      <div className="bg-white rounded-2xl max-w-md w-full overflow-hidden shadow-2xl animate-fade-in">
        <div className="bg-gradient-to-b from-green-50 to-emerald-50 pt-16 pb-10 px-6 text-center">
          <div className="flex justify-center mb-8">
            <div className="w-28 h-28 bg-white rounded-full shadow-xl flex items-center justify-center border-4 border-green-100 animate-bounce">
              <Check className="w-14 h-14 text-green-600 stroke-[2.5]" />
            </div>
          </div>
          <h1 className="text-2xl md:text-3xl font-bold text-gray-900 mb-2">
            Your order was placed successfully
          </h1>
          <p className="text-gray-600 text-sm">
            Your delicious meal is on the way
          </p>
        </div>

        <div className="px-6 py-10 text-center bg-white">
          <p className="text-gray-500 text-xs font-bold mb-4 uppercase tracking-widest">
            Order ID
          </p>
          <div className="text-7xl font-black bg-gradient-to-r from-green-600 to-emerald-500 bg-clip-text text-transparent mb-6">
            5178
          </div>
          <p className="text-gray-600 text-sm mb-8">
            <span className="font-bold text-gray-900">Screenshot</span> and show
            this code to the rider
          </p>
          <div className="bg-green-50 border-2 border-green-200 rounded-xl px-6 py-4 mb-8 inline-block">
            <p className="text-gray-700 font-bold">
              <span className="text-2xl text-green-600">45 mins</span> delivery
              time
            </p>
          </div>

          <button
            onClick={() => setShowSuccess(false)}
            className="w-full bg-green-600 hover:bg-green-700 text-white font-bold py-4 rounded-lg transition-colors shadow-lg hover:shadow-xl"
          >
            OK
          </button>
        </div>
      </div>
    </div>
  );

  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      {screen && <Payment />}
      {showSuccess && <Success />}
    </div>
  );
}
