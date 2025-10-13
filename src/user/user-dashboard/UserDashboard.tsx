import { useState } from "react";
import {
  Search,
  Filter,
  Star,
  Clock,
  Heart,
  Home,
  ShoppingCart,
  User,
  Bell,
  Check,
} from "lucide-react";

interface LikedState {
  [key: number]: boolean;
}

interface Restaurant {
  id: number;
  name: string;
  rating: number;
  time: string;
  delivery: string;
  img: string;
}

export default function UserDashboard() {
  const [liked, setLiked] = useState<LikedState>({});

  const toggleLike = (id: number): void => {
    setLiked((prev) => ({ ...prev, [id]: !prev[id] }));
  };

  const featuredFoods = [
    {
      id: 1,
      name: "Green chile stew",
      img: "https://images.unsplash.com/photo-1546069901-ba9599a7e63c?w=150&h=150&fit=crop",
    },
    {
      id: 2,
      name: "Chicago-style pizza",
      img: "https://images.unsplash.com/photo-1604068549290-dea0e4a305ca?w=150&h=150&fit=crop",
    },
    {
      id: 3,
      name: "Key lime pie",
      img: "https://images.unsplash.com/photo-1578985545062-69928b1d9587?w=150&h=150&fit=crop",
    },
    {
      id: 4,
      name: "Grilled meat",
      img: "https://images.unsplash.com/photo-1555939594-58d7cb561424?w=150&h=150&fit=crop",
    },
  ];

  const specialOffers = [
    {
      id: 1,
      title: "Stainless Kitchen",
      subtitle: "$2.99 Delivery fee | 15-20 min",
      discount: "15% OFF",
      img: "https://images.unsplash.com/photo-1589985643985-5e5ee5e1e8db?w=500&h=200&fit=crop",
      badge: "success" as const,
    },
    {
      id: 2,
      title: "Mardiya Kitchen",
      subtitle: "$2.99 Delivery fee | 15-20 min",
      discount: "20% OFF",
      img: "https://images.unsplash.com/photo-1546069901-ba9599a7e63c?w=500&h=200&fit=crop",
      badge: "warning" as const,
    },
  ];

  const featuredSellers = [
    {
      id: 1,
      name: "Darlene Robert",
      img: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=100&h=100&fit=crop",
    },
    {
      id: 2,
      name: "Robert Fux",
      img: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&h=100&fit=crop",
    },
    {
      id: 3,
      name: "Jerome Bell",
      img: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=100&h=100&fit=crop",
    },
    {
      id: 4,
      name: "Esther Howard",
      img: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=100&h=100&fit=crop",
    },
    {
      id: 5,
      name: "Arlene McCoy",
      img: "https://images.unsplash.com/photo-1506126613408-eca07ce68773?w=100&h=100&fit=crop",
    },
    {
      id: 6,
      name: "Brooklyn Sim",
      img: "https://images.unsplash.com/photo-1519085360771-9852ef7c3dba?w=100&h=100&fit=crop",
    },
  ];

  const restaurants: Restaurant[] = [
    {
      id: 1,
      name: "GreenVita",
      rating: 4.7,
      time: "15 - 20 mins",
      delivery: "Free Delivery • $0.00",
      img: "https://images.unsplash.com/photo-1514432324607-2e467f4af445?w=120&h=120&fit=crop",
    },
    {
      id: 2,
      name: "Anauco",
      rating: 4.7,
      time: "10 mins",
      delivery: "Delivery Fee • $2.34",
      img: "https://images.unsplash.com/photo-1495521821757-a1efb6729352?w=120&h=120&fit=crop",
    },
    {
      id: 3,
      name: "Parking pizza",
      rating: 4.7,
      time: "20 - 30 mins",
      delivery: "Delivery Fee • $1.99",
      img: "https://images.unsplash.com/photo-1555939594-58d7cb561424?w=120&h=120&fit=crop",
    },
    {
      id: 4,
      name: "Sushi shop",
      rating: 4.7,
      time: "20 mins",
      delivery: "Free Delivery • $0.00",
      img: "https://images.unsplash.com/photo-1553621042-f6e147245ffe?w=120&h=120&fit=crop",
    },
    {
      id: 5,
      name: "Foc i Oli",
      rating: 4.7,
      time: "20 mins",
      delivery: "Free Delivery • $0.00",
      img: "https://images.unsplash.com/photo-1546069901-ba9599a7e63c?w=120&h=120&fit=crop",
    },
    {
      id: 6,
      name: "Pafinolis",
      rating: 4.7,
      time: "20 mins",
      delivery: "Delivery Fee • $2.34",
      img: "https://images.unsplash.com/photo-1504674900967-ab21de0019b7?w=120&h=120&fit=crop",
    },
  ];

  return (
    <div className="w-full min-h-screen bg-white">
      <div className="w-full  pb-24 overflow-hidden">
        {/* Header */}
        <div className="p-4">
          <div className="flex items-center justify-between mb-4">
            <div className="flex items-center gap-2">
              <div className="w-8 h-8 bg-green-600 rounded-full flex items-center justify-center text-white text-sm font-bold">
                O
              </div>
              <span className="text-sm font-medium">Welcome, notjustomt</span>
            </div>
            <div className="flex gap-2">
              <Bell size={20} className="text-gray-600" />
              <Check size={20} className="text-gray-600" />
            </div>
          </div>

          {/* Search Bar */}
          <div className="relative">
            <Search size={18} className="absolute left-3 top-3 text-gray-400" />
            <input
              type="text"
              placeholder="Search for available foods"
              className="w-full pl-10 pr-12 py-2.5 border border-gray-300 rounded-lg text-sm bg-white"
            />
            <Filter
              size={18}
              className="absolute right-3 top-3 text-green-600 cursor-pointer"
            />
          </div>
        </div>

        {/* Featured Foods Carousel */}
        <div className="px-4 py-4">
          <div className="flex gap-3 overflow-x-auto pb-2 scroll-smooth">
            {featuredFoods.map((food) => (
              <div
                key={food.id}
                className="flex-shrink-0 flex flex-col items-center"
              >
                <img
                  src={food.img}
                  alt={food.name}
                  className="w-24 h-24 rounded-lg object-cover"
                />
                <p className="text-xs text-gray-700 mt-2 text-center w-24 truncate">
                  {food.name}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Special Offers Section */}
        <div className="px-4 py-2">
          <h2 className="text-sm font-semibold mb-3">Special offers for you</h2>

          {specialOffers.map((offer) => (
            <div
              key={offer.id}
              className="relative rounded-lg overflow-hidden mb-3 h-24"
            >
              <img
                src={offer.img}
                alt={offer.title}
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-black/20"></div>
              <div className="absolute inset-0 flex items-end">
                <div className="w-full bg-gradient-to-t from-black/80 to-transparent p-3 flex justify-between items-end">
                  <div className="text-white">
                    <p className="text-sm font-semibold">{offer.title}</p>
                    <p className="text-xs opacity-90">{offer.subtitle}</p>
                  </div>
                  <div
                    className={`px-2 py-1 rounded text-xs font-bold text-white ${
                      offer.badge === "success"
                        ? "bg-green-500"
                        : "bg-orange-500"
                    }`}
                  >
                    {offer.discount}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Featured Sellers */}
        <div className="px-4 py-3">
          <h2 className="text-sm font-semibold mb-3">Featured Sellers</h2>
          <div className="flex gap-3 overflow-x-auto pb-2 scroll-smooth">
            {featuredSellers.map((seller) => (
              <div
                key={seller.id}
                className="flex-shrink-0 flex flex-col items-center"
              >
                <img
                  src={seller.img}
                  alt={seller.name}
                  className="w-16 h-16 rounded-full object-cover border-2 border-gray-200"
                />
                <p className="text-xs text-gray-700 mt-1 text-center w-16 truncate">
                  {seller.name}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Kitchens Near You */}
        <div className="px-4 py-3">
          <h2 className="text-sm font-semibold mb-3">Kitchens near you</h2>

          <div className="space-y-3">
            {restaurants.map((restaurant) => (
              <div
                key={restaurant.id}
                className="flex gap-3 pb-3 border-b border-gray-200 hover:bg-gray-50 -mx-1 px-1 py-1 rounded transition cursor-pointer"
              >
                <img
                  src={restaurant.img}
                  alt={restaurant.name}
                  className="w-20 h-20 rounded-lg object-cover flex-shrink-0"
                />
                <div className="flex-1 min-w-0">
                  <div className="flex justify-between items-start">
                    <p className="font-semibold text-sm">{restaurant.name}</p>
                    <button
                      onClick={() => toggleLike(restaurant.id)}
                      className="flex-shrink-0"
                    >
                      <Heart
                        size={18}
                        className={
                          liked[restaurant.id]
                            ? "fill-red-500 text-red-500"
                            : "text-gray-400"
                        }
                      />
                    </button>
                  </div>
                  <div className="flex items-center gap-2 text-xs text-gray-600 my-1">
                    <Star size={14} className="text-green-600 fill-green-600" />
                    <span className="text-green-600 font-semibold">
                      {restaurant.rating}
                    </span>
                    <span className="mx-1">•</span>
                    <Clock size={14} className="text-gray-400" />
                    <span>Arrival in {restaurant.time}</span>
                  </div>
                  <p className="text-xs text-green-600 font-semibold">
                    {restaurant.delivery}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Bottom Navigation */}
      <div className="fixed bottom-0 left-0 right-0 bg-white border-t flex justify-around w-full">
        <button className="flex-1 py-3 flex justify-center items-center text-green-600">
          <Home size={24} />
        </button>
        <button className="flex-1 py-3 flex justify-center items-center text-gray-400 hover:text-gray-600">
          <ShoppingCart size={24} />
        </button>
        <button className="flex-1 py-3 flex justify-center items-center text-gray-400 hover:text-gray-600">
          <ShoppingCart size={24} />
        </button>
        <button className="flex-1 py-3 flex justify-center items-center text-gray-400 hover:text-gray-600">
          <User size={24} />
        </button>
      </div>
    </div>
  );
}
