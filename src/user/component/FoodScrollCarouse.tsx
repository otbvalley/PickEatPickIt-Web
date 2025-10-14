import { useState, useRef, useEffect } from "react";
import { ChevronLeft, ChevronRight, Star, Clock, MapPin } from "lucide-react";
import { Link } from "react-router-dom";

interface Chef {
  id: number;
  name: string;
  avatar: string;
  rating: number;
  location: string;
}

interface FoodItem {
  id: number;
  name: string;
  price: number;
  discount: number;
  image: string;
  description: string;
  chef: Chef;
  prepTime: number;
  orders: number;
}

const foodItems: FoodItem[] = [
  {
    id: 1,
    name: "Grilled Salmon",
    price: 24.99,
    discount: 20,
    image:
      "https://images.unsplash.com/photo-1546069901-ba9599a7e63c?w=400&h=300&fit=crop",
    description: "Fresh salmon with lemon butter sauce",
    chef: {
      id: 1,
      name: "Chef Marcus",
      avatar:
        "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&h=100&fit=crop",
      rating: 4.8,
      location: "Downtown",
    },
    prepTime: 25,
    orders: 1203,
  },
  {
    id: 2,
    name: "Truffle Pasta",
    price: 28.5,
    discount: 15,
    image:
      "https://images.unsplash.com/photo-1621996346565-e3dbc646d9a9?w=400&h=300&fit=crop",
    description: "Handmade pasta with black truffle",
    chef: {
      id: 2,
      name: "Chef Isabella",
      avatar:
        "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=100&h=100&fit=crop",
      rating: 4.9,
      location: "Midtown",
    },
    prepTime: 30,
    orders: 856,
  },
  {
    id: 3,
    name: "Wagyu Steak",
    price: 45.99,
    discount: 25,
    image:
      "https://images.unsplash.com/photo-1555939594-58d7cb561404?w=400&h=300&fit=crop",
    description: "Premium Japanese A5 Wagyu",
    chef: {
      id: 3,
      name: "Chef David",
      avatar:
        "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=100&h=100&fit=crop",
      rating: 5.0,
      location: "Uptown",
    },
    prepTime: 35,
    orders: 2341,
  },
  {
    id: 4,
    name: "Sushi Platter",
    price: 32.0,
    discount: 18,
    image:
      "https://images.unsplash.com/photo-1579584425555-c3ce17fd4351?w=400&h=300&fit=crop",
    description: "Assorted premium sushi rolls",
    chef: {
      id: 4,
      name: "Chef Akira",
      avatar:
        "https://images.unsplash.com/photo-1507009335872-a72e6b3ce338?w=100&h=100&fit=crop",
      rating: 4.7,
      location: "East Side",
    },
    prepTime: 20,
    orders: 1876,
  },
  {
    id: 5,
    name: "Lobster Risotto",
    price: 38.5,
    discount: 22,
    image:
      "https://images.unsplash.com/photo-1564621592063-3f82f59dc220?w=400&h=300&fit=crop",
    description: "Creamy risotto with fresh lobster",
    chef: {
      id: 5,
      name: "Chef Sophie",
      avatar:
        "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=100&h=100&fit=crop",
      rating: 4.9,
      location: "West Village",
    },
    prepTime: 28,
    orders: 945,
  },
  {
    id: 6,
    name: "Beef Tartare",
    price: 26.0,
    discount: 12,
    image:
      "https://images.unsplash.com/photo-1546069901-ba9599a7e63c?w=400&h=300&fit=crop",
    description: "Premium beef carpaccio with truffles",
    chef: {
      id: 1,
      name: "Chef Marcus",
      avatar:
        "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&h=100&fit=crop",
      rating: 4.8,
      location: "Downtown",
    },
    prepTime: 15,
    orders: 567,
  },
  {
    id: 7,
    name: "Foie Gras",
    price: 42.0,
    discount: 28,
    image:
      "https://images.unsplash.com/photo-1546069901-ba9599a7e63c?w=400&h=300&fit=crop",
    description: "Pan-seared foie gras with fig compote",
    chef: {
      id: 2,
      name: "Chef Isabella",
      avatar:
        "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=100&h=100&fit=crop",
      rating: 4.9,
      location: "Midtown",
    },
    prepTime: 22,
    orders: 432,
  },
];

export default function FoodScrollCarousel() {
  const scrollRef = useRef<HTMLDivElement>(null);
  const [showLeftArrow, setShowLeftArrow] = useState(false);
  const [showRightArrow, setShowRightArrow] = useState(true);
  const [selectedCard, setSelectedCard] = useState<number | null>(null);

  const handleScroll = () => {
    if (scrollRef.current) {
      const { scrollLeft, scrollWidth, clientWidth } = scrollRef.current;
      setShowLeftArrow(scrollLeft > 0);
      setShowRightArrow(scrollLeft < scrollWidth - clientWidth - 10);
    }
  };

  const scroll = (direction: "left" | "right") => {
    if (scrollRef.current) {
      const scrollAmount = 320;
      scrollRef.current.scrollBy({
        left: direction === "left" ? -scrollAmount : scrollAmount,
        behavior: "smooth",
      });
    }
  };

  useEffect(() => {
    const timer = setTimeout(handleScroll, 100);
    return () => clearTimeout(timer);
  }, []);

  const discountedPrice = (item: FoodItem) => {
    return (item.price * (1 - item.discount / 100)).toFixed(2);
  };

  return (
    <div className="w-full bg-gradient-to-br from-slate-50 to-slate-100 py-12 px-4 md:px-8">
      <div className="w-full mx-auto">
        {/* Header */}
        <div className="mb-8">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-2">
            Chef's Specials
          </h2>
          <p className="text-gray-600 text-lg">
            Curated dishes from top-rated chefs
          </p>
        </div>

        {/* Carousel Container */}
        <div className="relative group">
          {/* Left Arrow */}
          {showLeftArrow && (
            <button
              onClick={() => scroll("left")}
              className="absolute left-0 top-1/2 -translate-y-1/2 z-10 bg-white rounded-full p-3 shadow-xl hover:shadow-2xl transition-all duration-300 hover:scale-110 hidden md:flex items-center justify-center"
            >
              <ChevronLeft className="w-6 h-6 text-gray-800" />
            </button>
          )}

          {/* Right Arrow */}
          {showRightArrow && (
            <button
              onClick={() => scroll("right")}
              className="absolute right-0 top-1/2 -translate-y-1/2 z-10 bg-white rounded-full p-3 shadow-xl hover:shadow-2xl transition-all duration-300 hover:scale-110 hidden md:flex items-center justify-center"
            >
              <ChevronRight className="w-6 h-6 text-gray-800" />
            </button>
          )}

          {/* Scroll Container */}
          <div
            ref={scrollRef}
            onScroll={handleScroll}
            className="flex gap-6 overflow-x-auto scroll-smooth pb-4 md:px-12 px-2 scrollbar-hide"
            style={{
              scrollbarWidth: "none",
              msOverflowStyle: "none",
            }}
          >
            {foodItems.map((item) => (
              <div
                key={item.id}
                onClick={() => setSelectedCard(item.id)}
                className="flex-shrink-0 w-80 group cursor-pointer"
              >
                <div className="bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:scale-105 h-full flex flex-col">
                  {/* Image Container */}
                  <div className="relative overflow-hidden h-48 bg-gray-200">
                    <img
                      src={item.image}
                      alt={item.name}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                      onClick={() => selectedCard}
                    />

                    {/* Discount Badge */}
                    <div className="absolute top-4 right-4 bg-red-500 text-white px-3 py-1 rounded-full font-bold text-sm shadow-lg">
                      {item.discount}% OFF
                    </div>

                    {/* Rating Badge */}
                    <div className="absolute top-4 left-4 bg-white/90 backdrop-blur-sm rounded-full px-3 py-1 flex items-center gap-1 shadow-lg">
                      <Star className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                      <span className="font-bold text-sm text-gray-900">
                        {item.chef.rating}
                      </span>
                    </div>
                  </div>

                  {/* Content */}
                  <div className="p-5 flex flex-col flex-1">
                    {/* Food Name and Price */}
                    <div className="mb-3">
                      <h3 className="text-xl font-bold text-gray-900 mb-2 line-clamp-2">
                        {item.name}
                      </h3>
                      <div className="flex items-center gap-2">
                        <span className="text-2xl font-bold text-green-600">
                          ${discountedPrice(item)}
                        </span>
                        <span className="text-lg text-gray-400 line-through">
                          ${item.price.toFixed(2)}
                        </span>
                      </div>
                    </div>

                    {/* Description */}
                    <p className="text-gray-600 text-sm mb-4 line-clamp-2">
                      {item.description}
                    </p>

                    {/* Chef Info */}
                    <div className="bg-gradient-to-r from-slate-50 to-slate-100 rounded-xl p-4 mb-4">
                      <div className="flex items-center gap-3 mb-3">
                        <img
                          src={item.chef.avatar}
                          alt={item.chef.name}
                          className="w-12 h-12 rounded-full object-cover border-2 border-white shadow-md"
                        />
                        <div className="flex-1">
                          <p className="font-bold text-gray-900 text-sm">
                            {item.chef.name}
                          </p>
                          <div className="flex items-center gap-1 text-xs text-gray-600">
                            <MapPin className="w-3 h-3" />
                            {item.chef.location}
                          </div>
                        </div>
                      </div>
                      <div className="text-xs text-gray-600">
                        <span className="font-semibold text-gray-900">
                          {item.orders.toLocaleString()}
                        </span>{" "}
                        orders
                      </div>
                    </div>

                    {/* Meta Info */}
                    <div className="flex items-center gap-4 text-xs text-gray-600 mb-4 pb-4 border-b border-gray-200">
                      <div className="flex items-center gap-1">
                        <Clock className="w-4 h-4 text-green-600" />
                        <span>{item.prepTime} min</span>
                      </div>
                    </div>

                    {/* View Button */}
                    <button className="w-full bg-gradient-to-r from-green-600 to-emerald-600 hover:from-green-700 hover:to-emerald-700 text-white font-bold py-3 rounded-lg transition-all duration-300 transform hover:scale-105 active:scale-95 shadow-lg hover:shadow-xl">
                      View Details
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* View All Button */}
        <div className="flex justify-center mt-8">
          <Link to="/market">
            <button className="bg-gradient-to-r from-green-600 to-emerald-600 hover:from-green-700 hover:to-emerald-700 text-white font-bold px-8 py-4 rounded-lg transition-all duration-300 transform hover:scale-105 active:scale-95 shadow-xl hover:shadow-2xl text-lg">
              View All Dishes
            </button>
          </Link>
        </div>
      </div>

      <style>{`
        .scrollbar-hide::-webkit-scrollbar {
          display: none;
        }
      `}</style>
    </div>
  );
}
