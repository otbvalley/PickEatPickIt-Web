// import { useState } from "react";
// import rec1 from "../../assets/Rectangle 24.png";
// import rec2 from "../../assets/Rectangle 25.png";
// import rec3 from "../../assets/Rectangle 26.png";
// import rec4 from "../../assets/unsplash_gE28aTnlqJA.png";
// import group from "../../assets/Group 8.png";
import { useState, useRef } from "react";
import {
  ChevronLeft,
  ChevronRight,
  Bell,
  Check,
  Heart,
  Star,
} from "lucide-react";
import { Navbar } from "../../component/Navbar";
import HeroFoodCarousel from "../../component/HeroFoodCarousel";
import { Link } from "react-router-dom";

interface LikedState {
  [key: number]: boolean;
}

type ScrollDirection = "left" | "right";

export default function UserDashboard() {
  const [liked, setLiked] = useState<LikedState>({});
  const scrollRefs = {
    foods: useRef<HTMLDivElement>(null),
    offers: useRef<HTMLDivElement>(null),
    sellers: useRef<HTMLDivElement>(null),
  };

  const toggleLike = (id: number): void => {
    setLiked((prev) => ({ ...prev, [id]: !prev[id] }));
  };

  const scroll = (
    ref: React.RefObject<HTMLDivElement | null>,
    direction: ScrollDirection
  ): void => {
    if (ref.current) {
      const scrollAmount = 300;
      ref.current.scrollBy({
        left: direction === "left" ? -scrollAmount : scrollAmount,
        behavior: "smooth",
      });
    }
  };

  const featuredFoods = [
    {
      id: 1,
      name: "Green Chile Stew",
      img: "https://images.unsplash.com/photo-1546069901-ba9599a7e63c?w=300&h=300&fit=crop",
    },
    {
      id: 2,
      name: "Pasta Carbonara",
      img: "https://images.unsplash.com/photo-1621996346565-e3dbc646d9a9?w=300&h=300&fit=crop",
    },
    {
      id: 3,
      name: "Caesar Salad",
      img: "https://images.unsplash.com/photo-1495521821757-a1efb6729352?w=300&h=300&fit=crop",
    },
    {
      id: 4,
      name: "Margherita Pizza",
      img: "https://images.unsplash.com/photo-1555939594-58d7cb561424?w=300&h=300&fit=crop",
    },
    {
      id: 5,
      name: "Sushi Roll",
      img: "https://images.unsplash.com/photo-1579584425555-c3ce17fd4351?w=300&h=300&fit=crop",
    },
    {
      id: 6,
      name: "Burger Deluxe",
      img: "https://images.unsplash.com/photo-1568901346375-23c9450c58cd?w=300&h=300&fit=crop",
    },
  ];

  const specialOffers = [
    {
      id: 1,
      title: "Stainless Kitchen",
      subtitle: "$2.99 Delivery • 15-20 min",
      discount: "15% OFF",
      img: "https://images.unsplash.com/photo-1495521821757-a1efb6729352?w=400&h=200&fit=crop",
      spend: "Spend $45, Save $10",
    },
    {
      id: 2,
      title: "Mardiya Kitchen",
      subtitle: "$2.99 Delivery • 15-20 min",
      discount: "20% OFF",
      img: "https://images.unsplash.com/photo-1546069901-ba9599a7e63c?w=400&h=200&fit=crop",
      spend: "Spend $45, Save $10",
    },
    {
      id: 3,
      title: "Fresh & Healthy",
      subtitle: "Free Delivery • 20-25 min",
      discount: "30% OFF",
      img: "https://images.unsplash.com/photo-1512621776951-a57141f2eefd?w=400&h=200&fit=crop",
      spend: "Spend $50, Save $15",
    },
    {
      id: 4,
      title: "Premium Taste",
      subtitle: "$1.99 Delivery • 15 min",
      discount: "25% OFF",
      img: "https://images.unsplash.com/photo-1504674900967-ab21de0019b7?w=400&h=200&fit=crop",
      spend: "Spend $40, Save $8",
    },
  ];

  const sellers = [
    {
      id: 1,
      name: "Darlene",
      img: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=200&h=200&fit=crop",
    },
    {
      id: 2,
      name: "Robert Fux",
      img: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=200&h=200&fit=crop",
    },
    {
      id: 3,
      name: "Jerome",
      img: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=200&h=200&fit=crop",
    },
    {
      id: 4,
      name: "Esther",
      img: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=200&h=200&fit=crop",
    },
    {
      id: 5,
      name: "Arlene",
      img: "https://images.unsplash.com/photo-1506126613408-eca07ce68773?w=200&h=200&fit=crop",
    },
  ];

  const restaurants = [
    {
      id: 1,
      name: "GreenVita",
      rating: 4.7,
      time: "15 - 20 mins",
      delivery: "Free Delivery",
      img: "https://images.unsplash.com/photo-1514432324607-2e467f4af445?w=150&h=150&fit=crop",
    },
    {
      id: 2,
      name: "Anauco",
      rating: 4.8,
      time: "10 mins",
      delivery: "Delivery $2.34",
      img: "https://images.unsplash.com/photo-1495521821757-a1efb6729352?w=150&h=150&fit=crop",
    },
    {
      id: 3,
      name: "Parking Pizza",
      rating: 4.7,
      time: "20 - 30 mins",
      delivery: "Delivery $1.99",
      img: "https://images.unsplash.com/photo-1555939594-58d7cb561424?w=150&h=150&fit=crop",
    },
    {
      id: 4,
      name: "Sushi Shop",
      rating: 4.9,
      time: "20 mins",
      delivery: "Free Delivery",
      img: "https://images.unsplash.com/photo-1579584425555-c3ce17fd4351?w=150&h=150&fit=crop",
    },
    {
      id: 5,
      name: "Foc i Oli",
      rating: 4.6,
      time: "25 mins",
      delivery: "Free Delivery",
      img: "https://images.unsplash.com/photo-1546069901-ba9599a7e63c?w=150&h=150&fit=crop",
    },
  ];

  return (
    <div className="w-full min-h-screen bg-gradient-to-br from-orange-50 via-white to-green-50">
      <style>{`
        @keyframes slideInDown {
          from { opacity: 0; transform: translateY(-20px); }
          to { opacity: 1; transform: translateY(0); }
        }
        @keyframes slideInUp {
          from { opacity: 0; transform: translateY(20px); }
          to { opacity: 1; transform: translateY(0); }
        }
        @keyframes fadeIn {
          from { opacity: 0; }
          to { opacity: 1; }
        }
        @keyframes pulse-glow {
          0%, 100% { box-shadow: 0 0 20px rgba(34, 197, 94, 0.3); }
          50% { box-shadow: 0 0 30px rgba(34, 197, 94, 0.5); }
        }
        .animate-slide-in-down { animation: slideInDown 0.6s ease-out; }
        .animate-slide-in-up { animation: slideInUp 0.6s ease-out 0.2s backwards; }
        .animate-fade-in { animation: fadeIn 0.5s ease-out; }
        .scroll-smooth { scroll-behavior: smooth; }
        .hide-scrollbar { scrollbar-width: none; }
        .hide-scrollbar::-webkit-scrollbar { display: none; }
      `}</style>

      <div className="w-full pb-24">
        {/* Header */}
        <div className="sticky top-0 z-50 bg-white/80 backdrop-blur-xl shadow-lg">
          <Navbar />

          <div className="px-4 sm:px-6 md:px-8 py-4 sm:py-5">
            <div className="flex items-center justify-between mb-4 animate-slide-in-down">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 sm:w-12 sm:h-12 bg-gradient-to-br from-green-500 to-emerald-600 rounded-full flex items-center justify-center text-white font-bold shadow-lg">
                  O
                </div>
                <div>
                  <p className="text-xs text-gray-500">Welcome back,</p>
                  <p className="text-sm sm:text-base font-bold bg-gradient-to-r from-green-600 to-emerald-600 bg-clip-text text-transparent">
                    notjustomt
                  </p>
                </div>
              </div>
              <div className="flex gap-2">
                <button className="p-2.5 hover:bg-green-100 rounded-full transition-all duration-300 hover:scale-110">
                  <Bell size={20} className="text-gray-600" />
                </button>
                <button className="p-2.5 hover:bg-green-100 rounded-full transition-all duration-300 hover:scale-110">
                  <Check size={20} className="text-gray-600" />
                </button>
              </div>
            </div>

            {/* Search Bar */}
            <div
              className="relative animate-slide-in-down"
              style={{ animationDelay: "0.1s" }}
            >
              <svg
                className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                />
              </svg>
              <Link to="/search">
                <input
                  type="text"
                  placeholder="Search for foods, restaurants..."
                  className="w-full pl-12 pr-5 py-3 sm:py-3.5 bg-gradient-to-r from-gray-50 to-green-50 border-2 border-gray-200 rounded-full text-sm text-gray-700 placeholder-gray-400 focus:border-green-500 focus:outline-none focus:ring-4 focus:ring-green-100 transition-all duration-300"
                />
              </Link>
            </div>
          </div>
        </div>
        <HeroFoodCarousel />
        {/* Featured Foods */}
        <div className="px-4 sm:px-6 md:px-8 py-6 sm:py-8 md:py-10">
          <h2 className="text-sm sm:text-base font-bold text-gray-800 mb-4 flex items-center gap-2 animate-slide-in-up">
            <span className="w-1 h-6 bg-gradient-to-b from-green-500 to-emerald-600 rounded-full"></span>
            Featured Foods
          </h2>
          <div className="relative group">
            <div
              ref={scrollRefs.foods}
              className="flex gap-3 sm:gap-4 overflow-x-auto pb-4 hide-scrollbar scroll-smooth"
            >
              {featuredFoods.map((food, idx) => (
                <div
                  key={idx}
                  className="flex-shrink-0 animate-slide-in-up"
                  style={{ animationDelay: `${idx * 0.05}s` }}
                >
                  <div className="group/item cursor-pointer">
                    <div className="relative overflow-hidden rounded-2xl w-36 h-36 sm:w-40 sm:h-40 md:w-44 md:h-44 shadow-lg hover:shadow-2xl transition-all duration-500">
                      <img
                        src={food.img}
                        alt={food.name}
                        className="w-full h-full object-cover group-hover/item:scale-110 transition-transform duration-500"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent opacity-0 group-hover/item:opacity-100 transition-opacity duration-300"></div>
                    </div>
                    <p className="text-xs sm:text-sm font-semibold text-gray-800 mt-2.5 line-clamp-2">
                      {food.name}
                    </p>
                  </div>
                </div>
              ))}
            </div>
            <button
              onClick={() => scroll(scrollRefs.foods, "left")}
              className="hidden sm:flex absolute -left-4 top-1/3 w-10 h-10 items-center justify-center bg-white rounded-full shadow-xl hover:shadow-2xl hover:bg-green-50 transition-all duration-300 hover:scale-110 z-10"
            >
              <ChevronLeft size={20} className="text-gray-600" />
            </button>
            <button
              onClick={() => scroll(scrollRefs.foods, "right")}
              className="hidden sm:flex absolute -right-4 top-1/3 w-10 h-10 items-center justify-center bg-white rounded-full shadow-xl hover:shadow-2xl hover:bg-green-50 transition-all duration-300 hover:scale-110 z-10"
            >
              <ChevronRight size={20} className="text-gray-600" />
            </button>
          </div>
        </div>

        {/* Special Offers */}
        <div className="px-4 sm:px-6 md:px-8 py-6 sm:py-8 md:py-10">
          <h2 className="text-sm sm:text-base font-bold text-gray-800 mb-4 flex items-center gap-2 animate-slide-in-up">
            <span className="w-1 h-6 bg-gradient-to-b from-orange-500 to-red-500 rounded-full"></span>
            Special Offers
          </h2>
          <div className="relative group">
            <div
              ref={scrollRefs.offers}
              className="flex gap-3 sm:gap-4 overflow-x-auto pb-4 hide-scrollbar scroll-smooth"
            >
              {specialOffers.map((offer, idx) => (
                <div
                  key={offer.id}
                  className="flex-shrink-0 animate-slide-in-up group/offer"
                  style={{ animationDelay: `${idx * 0.05}s` }}
                >
                  <div className="relative bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500 w-72 sm:w-80 md:w-96 cursor-pointer group-hover/offer:scale-105">
                    <div className="relative h-32 sm:h-40 overflow-hidden">
                      <img
                        src={offer.img}
                        alt={offer.title}
                        className="w-full h-full object-cover group-hover/offer:scale-110 transition-transform duration-500"
                      />
                      <div className="absolute inset-0 bg-black/20 group-hover/offer:bg-black/40 transition-all duration-300"></div>
                    </div>
                    <div className="absolute top-4 right-4 bg-white/95 backdrop-blur px-3 py-1.5 rounded-full shadow-lg">
                      <p className="text-xs font-bold bg-gradient-to-r from-orange-500 to-red-500 bg-clip-text text-transparent">
                        {offer.discount}
                      </p>
                    </div>
                    <div className="p-4 sm:p-5">
                      <p className="font-bold text-gray-900 text-sm sm:text-base">
                        {offer.title}
                      </p>
                      <p className="text-xs text-gray-600 mt-1">
                        {offer.subtitle}
                      </p>
                      <div className="mt-3 bg-gradient-to-r from-green-50 to-emerald-50 p-2.5 rounded-lg">
                        <p className="text-xs font-semibold text-green-700">
                          {offer.spend}
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
            <button
              onClick={() => scroll(scrollRefs.offers, "left")}
              className="hidden sm:flex absolute -left-4 top-1/3 w-10 h-10 items-center justify-center bg-white rounded-full shadow-xl hover:shadow-2xl hover:bg-green-50 transition-all duration-300 hover:scale-110 z-10"
            >
              <ChevronLeft size={20} className="text-gray-600" />
            </button>
            <button
              onClick={() => scroll(scrollRefs.offers, "right")}
              className="hidden sm:flex absolute -right-4 top-1/3 w-10 h-10 items-center justify-center bg-white rounded-full shadow-xl hover:shadow-2xl hover:bg-green-50 transition-all duration-300 hover:scale-110 z-10"
            >
              <ChevronRight size={20} className="text-gray-600" />
            </button>
          </div>
        </div>

        {/* Featured Sellers */}
        <div className="px-4 sm:px-6 md:px-8 py-6 sm:py-8 md:py-10">
          <h2 className="text-sm sm:text-base font-bold text-gray-800 mb-4 flex items-center gap-2 animate-slide-in-up">
            <span className="w-1 h-6 bg-gradient-to-b from-blue-500 to-purple-600 rounded-full"></span>
            Featured Sellers
          </h2>
          <div className="relative group">
            <div
              ref={scrollRefs.sellers}
              className="flex gap-3 sm:gap-4 overflow-x-auto pb-4 hide-scrollbar scroll-smooth"
            >
              {sellers.map((seller, idx) => (
                <div
                  key={seller.id}
                  className="flex-shrink-0 flex flex-col items-center group/seller animate-slide-in-up"
                  style={{ animationDelay: `${idx * 0.05}s` }}
                >
                  <div className="relative">
                    <div className="w-20 h-20 sm:w-24 sm:h-24 md:w-28 md:h-28 rounded-full p-1 bg-gradient-to-br from-green-400 to-emerald-600 shadow-lg group-hover/seller:shadow-2xl transition-all duration-300 group-hover/seller:scale-110">
                      <img
                        src={seller.img}
                        alt={seller.name}
                        className="w-full h-full rounded-full object-cover border-4 border-white"
                      />
                    </div>
                    <div className="absolute -bottom-2 -right-2 w-6 h-6 sm:w-7 sm:h-7 bg-gradient-to-br from-green-400 to-emerald-600 rounded-full border-4 border-white shadow-lg flex items-center justify-center">
                      <Check size={12} className="text-white" />
                    </div>
                  </div>
                  <p className="text-xs sm:text-sm font-semibold text-gray-800 mt-3 text-center">
                    {seller.name}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Restaurants Near You */}
        <div className="px-4 sm:px-6 md:px-8 py-6 sm:py-8 md:py-10">
          <h2 className="text-sm sm:text-base font-bold text-gray-800 mb-4 flex items-center gap-2 animate-slide-in-up">
            <span className="w-1 h-6 bg-gradient-to-b from-red-500 to-pink-600 rounded-full"></span>
            Kitchens Near You
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 sm:gap-6">
            {restaurants.map((restaurant, idx) => (
              <div
                key={restaurant.id}
                className="group/restaurant animate-slide-in-up bg-white p-4 sm:p-5 rounded-2xl border-2 border-gray-100 hover:border-green-200 hover:shadow-xl transition-all duration-500 cursor-pointer"
                style={{ animationDelay: `${idx * 0.05}s` }}
              >
                <div className="flex gap-3 sm:gap-4">
                  <div className="relative flex-shrink-0 w-20 h-20 sm:w-24 sm:h-24 rounded-xl overflow-hidden shadow-md group-hover/restaurant:shadow-lg transition-shadow duration-300">
                    <img
                      src={restaurant.img}
                      alt={restaurant.name}
                      className="w-full h-full object-cover group-hover/restaurant:scale-110 transition-transform duration-500"
                    />
                  </div>
                  <div className="flex-1 flex flex-col justify-between min-w-0">
                    <div>
                      <div className="flex items-start justify-between gap-2 mb-2">
                        <p className="font-bold text-sm sm:text-base text-gray-900 truncate">
                          {restaurant.name}
                        </p>
                        <button
                          onClick={() => toggleLike(restaurant.id)}
                          className="flex-shrink-0 p-1.5 sm:p-2 hover:bg-pink-50 rounded-full transition-all duration-300 hover:scale-110"
                        >
                          {liked[restaurant.id] ? (
                            <Heart
                              size={18}
                              className="text-red-500 fill-red-500"
                            />
                          ) : (
                            <Heart
                              size={18}
                              className="text-gray-300 group-hover/restaurant:text-red-300"
                            />
                          )}
                        </button>
                      </div>
                      <div className="flex items-center gap-1.5">
                        <div className="flex items-center gap-1 bg-yellow-50 px-2 py-1 rounded-full">
                          <Star
                            size={14}
                            className="text-yellow-500 fill-yellow-500"
                          />
                          <span className="text-xs font-bold text-yellow-700">
                            {restaurant.rating}
                          </span>
                        </div>
                        <span className="text-xs text-gray-600">
                          {restaurant.delivery}
                        </span>
                      </div>
                    </div>
                    <p className="text-xs text-gray-500 mt-2">
                      Arrives in {restaurant.time}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
