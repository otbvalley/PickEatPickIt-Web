import { useState, useEffect } from "react";
import {
  ChevronLeft,
  ChevronRight,
  ShoppingCart,
  Star,
  Clock,
  Truck,
} from "lucide-react";

export default function HeroFoodCarousel() {
  const [currentSlide, setCurrentSlide] = useState(0);

  const foodItems = [
    {
      id: 1,
      name: "Grilled Chicken Burger",
      price: "₦2,500",
      originalPrice: "₦3,200",
      image:
        "https://images.unsplash.com/photo-1568901346375-23c9450c58cd?w=800&h=600&fit=crop",
      rating: 4.8,
      discount: "22% OFF",
      description: "Juicy grilled chicken with fresh veggies and special sauce",
    },
    {
      id: 2,
      name: "Margherita Pizza",
      price: "₦4,800",
      originalPrice: "₦6,000",
      image:
        "https://images.unsplash.com/photo-1574071318508-1cdbab80d002?w=800&h=600&fit=crop",
      rating: 4.9,
      discount: "20% OFF",
      description: "Classic Italian style with fresh mozzarella and basil",
    },
    {
      id: 3,
      name: "Spicy Jollof Rice Bowl",
      price: "₦1,800",
      originalPrice: "₦2,500",
      image:
        "https://images.unsplash.com/photo-1604329760661-e71dc83f8f26?w=800&h=600&fit=crop",
      rating: 4.7,
      discount: "28% OFF",
      description: "Traditional Nigerian jollof with grilled chicken",
    },
    {
      id: 4,
      name: "Chocolate Pancakes",
      price: "₦1,500",
      originalPrice: "₦2,000",
      image:
        "https://images.unsplash.com/photo-1567620905732-2d1ec7ab7445?w=800&h=600&fit=crop",
      rating: 4.6,
      discount: "25% OFF",
      description: "Fluffy pancakes with chocolate syrup and berries",
    },
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % foodItems.length);
    }, 5000);

    return () => clearInterval(timer);
  }, [foodItems.length]);

  const goToPrevious = () => {
    setCurrentSlide((prev) => (prev - 1 + foodItems.length) % foodItems.length);
  };

  const goToNext = () => {
    setCurrentSlide((prev) => (prev + 1) % foodItems.length);
  };

  const currentItem = foodItems[currentSlide];

  return (
    <div className="relative w-full min-h-screen bg-gradient-to-br from-emerald-50 via-green-50 to-teal-50">
      {/* Main Container */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 lg:py-20">
        <div className="grid lg:grid-cols-2 gap-12 items-center min-h-[80vh]">
          {/* Left Content Section */}
          <div className="space-y-8 order-2 lg:order-1">
            {/* Top Badge Section */}
            <div className="flex items-center gap-4 flex-wrap">
              <span className="inline-flex items-center bg-green-600 text-white px-4 py-2 rounded-full text-sm font-semibold shadow-lg">
                {currentItem.discount}
              </span>
              <div className="flex items-center gap-2 text-green-700">
                <Clock className="w-4 h-4" />
                <span className="text-sm font-medium">Ready in 20 mins</span>
              </div>
              <div className="flex items-center gap-2 text-green-700">
                <Truck className="w-4 h-4" />
                <span className="text-sm font-medium">Free Delivery</span>
              </div>
            </div>

            {/* Title */}
            <div className="space-y-4">
              <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold text-gray-900 leading-tight">
                {currentItem.name}
              </h1>
              <p className="text-xl text-gray-600 leading-relaxed max-w-lg">
                {currentItem.description}
              </p>
            </div>

            {/* Rating */}
            <div className="flex items-center gap-4">
              <div className="flex items-center bg-green-100 px-4 py-2 rounded-lg border border-green-200">
                <Star className="w-5 h-5 fill-green-600 text-green-600 mr-2" />
                <span className="text-green-900 font-bold text-lg">
                  {currentItem.rating}
                </span>
              </div>
              <span className="text-gray-600 font-medium">
                250+ Happy Customers
              </span>
            </div>

            {/* Price Section */}
            <div className="bg-white rounded-2xl p-6 shadow-lg border-2 border-green-100 inline-block">
              <div className="flex items-baseline gap-4 mb-2">
                <span className="text-6xl font-bold text-green-600">
                  {currentItem.price}
                </span>
                <span className="text-2xl text-gray-400 line-through font-medium">
                  {currentItem.originalPrice}
                </span>
              </div>
              <p className="text-sm text-gray-500 font-medium">
                Best price guaranteed
              </p>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-wrap gap-4">
              <button className="bg-green-600 hover:bg-green-700 text-white font-bold py-4 px-8 rounded-xl text-lg flex items-center gap-3 transition-all duration-300 transform hover:scale-105 shadow-xl">
                <ShoppingCart className="w-6 h-6" />
                Add to Cart
              </button>
              <button className="bg-white hover:bg-gray-50 text-green-600 font-bold py-4 px-8 rounded-xl text-lg border-2 border-green-600 transition-all duration-300">
                View Menu
              </button>
            </div>

            {/* Trust Indicators */}
            <div className="flex items-center gap-8 pt-4 border-t border-gray-200">
              <div className="text-center">
                <p className="text-2xl font-bold text-green-600">500+</p>
                <p className="text-sm text-gray-600">Orders Today</p>
              </div>
              <div className="text-center">
                <p className="text-2xl font-bold text-green-600">4.8★</p>
                <p className="text-sm text-gray-600">Average Rating</p>
              </div>
              <div className="text-center">
                <p className="text-2xl font-bold text-green-600">10k+</p>
                <p className="text-sm text-gray-600">Happy Customers</p>
              </div>
            </div>
          </div>

          {/* Right Image Section */}
          <div className="relative order-1 lg:order-2">
            {/* Main Image */}
            <div className="relative rounded-3xl overflow-hidden shadow-2xl">
              <img
                src={currentItem.image}
                alt={currentItem.name}
                className="w-full h-[500px] lg:h-[600px] object-cover transition-all duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-green-900/20 to-transparent"></div>
            </div>

            {/* Floating Card */}
            <div className="absolute -bottom-6 -left-6 bg-white rounded-2xl p-4 shadow-xl border-2 border-green-100">
              <p className="text-sm text-gray-600 mb-1">Today's Special</p>
              <p className="text-2xl font-bold text-green-600">
                {currentItem.discount}
              </p>
            </div>

            {/* Navigation Arrows */}
            <button
              onClick={goToPrevious}
              className="absolute left-4 top-1/2 -translate-y-1/2 bg-white hover:bg-green-50 text-green-600 p-3 rounded-full transition-all duration-200 shadow-lg border border-green-200"
              aria-label="Previous slide"
            >
              <ChevronLeft className="w-6 h-6" />
            </button>

            <button
              onClick={goToNext}
              className="absolute right-4 top-1/2 -translate-y-1/2 bg-white hover:bg-green-50 text-green-600 p-3 rounded-full transition-all duration-200 shadow-lg border border-green-200"
              aria-label="Next slide"
            >
              <ChevronRight className="w-6 h-6" />
            </button>
          </div>
        </div>

        {/* Bottom Thumbnail Navigation */}
        <div className="mt-12 flex justify-center gap-4 flex-wrap">
          {foodItems.map((item, index) => (
            <button
              key={item.id}
              onClick={() => setCurrentSlide(index)}
              className={`relative rounded-xl overflow-hidden transition-all duration-300 ${
                index === currentSlide
                  ? "ring-4 ring-green-600 scale-105 shadow-xl"
                  : "opacity-60 hover:opacity-100 shadow-md"
              }`}
            >
              <img
                src={item.image}
                alt={item.name}
                className="w-24 h-24 object-cover"
              />
              {index === currentSlide && (
                <div className="absolute inset-0 bg-green-600/20"></div>
              )}
            </button>
          ))}
        </div>

        {/* Dots Indicator */}
        <div className="mt-8 flex justify-center gap-3">
          {foodItems.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentSlide(index)}
              className={`transition-all duration-300 rounded-full ${
                index === currentSlide
                  ? "w-12 h-3 bg-green-600"
                  : "w-3 h-3 bg-green-300 hover:bg-green-400"
              }`}
              aria-label={`Go to slide ${index + 1}`}
            />
          ))}
        </div>
      </div>
    </div>
  );
}
