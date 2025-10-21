import React, { useState } from "react";
import {
  Bell,
  Menu,
  ChevronRight,
  Clock,
  ArrowLeft,
  Plus,
  MoreVertical,
  Upload,
  X,
} from "lucide-react";

interface Game {
  id: number;
  kilometers: number;
  prize: number;
  date: string;
  time: string;
  progress: number;
}

interface Notification {
  id: number;
  title: string;
  content: string;
  visible: boolean;
}

interface Banner {
  id: number;
  title: string;
  heading: string;
  bodyText: string;
  buttonText: string;
  buttonUrl: string;
  status: "Active" | "Inactive";
  image?: string;
}

type Screen =
  | "home"
  | "game-history"
  | "notifications"
  | "banners"
  | "banner-form"
  | "preview";

const Content: React.FC = () => {
  const [screen, setScreen] = useState<Screen>("home");
  // const [selectedBanner, setSelectedBanner] = useState<Banner | null>(null);
  const [notificationCount] = useState(3);

  const [formData, setFormData] = useState({
    kilometers: "",
    prize: "",
    startTime: "11:00am",
    endTime: "05:00pm",
    notificationDetails: "",
  });

  const [games] = useState<Game[]>([
    {
      id: 1,
      kilometers: 90,
      prize: 5000,
      date: "20/11/2024",
      time: "11:00am - 11:59pm",
      progress: 27,
    },
    {
      id: 2,
      kilometers: 75,
      prize: 4000,
      date: "19/11/2024",
      time: "10:00am - 10:59pm",
      progress: 45,
    },
    {
      id: 3,
      kilometers: 100,
      prize: 6000,
      date: "18/11/2024",
      time: "09:00am - 09:59pm",
      progress: 60,
    },
    {
      id: 4,
      kilometers: 85,
      prize: 4500,
      date: "17/11/2024",
      time: "11:00am - 11:59pm",
      progress: 35,
    },
    {
      id: 5,
      kilometers: 95,
      prize: 5500,
      date: "16/11/2024",
      time: "08:00am - 08:59pm",
      progress: 80,
    },
  ]);

  const [notifications] = useState<Notification[]>([
    {
      id: 1,
      title: "Lorem ipsum dolor",
      content:
        "sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit.",
      visible: true,
    },
    {
      id: 2,
      title: "Lorem ipsum dolor",
      content:
        "sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit.",
      visible: false,
    },
  ]);

  const [banners, setBanners] = useState<Banner[]>([
    {
      id: 1,
      title: "Receive money, win up to 1k!",
      heading: "Win up to N1K bonus",
      bodyText: "Receive big payments, Spin...",
      buttonText: "Check it Out",
      buttonUrl: "https://www.google.com",
      status: "Active",
    },
    {
      id: 2,
      title: "Receive money, win up to 1k!",
      heading: "Win up to N1K bonus",
      bodyText: "Receive big payments, Spin...",
      buttonText: "Check it Out",
      buttonUrl: "https://www.google.com",
      status: "Inactive",
    },
  ]);

  const [bannerForm, setBannerForm] = useState<Banner>({
    id: 0,
    title: "",
    heading: "",
    bodyText: "",
    buttonText: "",
    buttonUrl: "",
    status: "Active",
    image: "",
  });

  const handleSaveBanner = () => {
    if (bannerForm.id === 0) {
      setBanners([...banners, { ...bannerForm, id: banners.length + 1 }]);
    } else {
      setBanners(banners.map((b) => (b.id === bannerForm.id ? bannerForm : b)));
    }
    setScreen("banners");
  };

  const renderHeader = () => (
    <div className="bg-green-600 text-white px-4 py-4 flex items-center justify-between sticky top-0 z-50 shadow-lg">
      <div className="flex items-center gap-3">
        {screen !== "home" && (
          <button
            onClick={() =>
              setScreen(
                screen === "banner-form" || screen === "preview"
                  ? "banners"
                  : "home"
              )
            }
            className="hover:bg-green-700 p-1 rounded-lg transition-all duration-200 active:scale-95"
          >
            <ArrowLeft size={24} />
          </button>
        )}
        {screen === "home" && (
          <button className="hover:bg-green-700 p-1 rounded-lg transition-all duration-200 active:scale-95">
            <Menu size={24} />
          </button>
        )}
        <h1 className="text-lg font-semibold">
          {screen === "home" && "Content management"}
          {screen === "game-history" && "Content Management"}
          {screen === "notifications" && "Content Management"}
          {screen === "banners" && "Banner"}
          {screen === "banner-form" && "Banner Info"}
          {screen === "preview" && "Preview"}
        </h1>
      </div>
      <div className="flex items-center gap-2">
        {screen === "banners" && (
          <button
            onClick={() => {
              setBannerForm({
                id: 0,
                title: "",
                heading: "",
                bodyText: "",
                buttonText: "",
                buttonUrl: "",
                status: "Active",
                image: "",
              });
              setScreen("banner-form");
            }}
            className="hover:bg-green-700 p-1 rounded-lg transition-all duration-200 active:scale-95"
          >
            <Plus size={24} />
          </button>
        )}
        <button
          onClick={() => setScreen("notifications")}
          className="relative hover:bg-green-700 p-1 rounded-lg transition-all duration-200 active:scale-95"
        >
          <Bell size={24} />
          {notificationCount > 0 && (
            <span className="absolute -top-1 -right-1 bg-red-500 text-white text-xs w-5 h-5 flex items-center justify-center rounded-full font-bold animate-pulse">
              {notificationCount}
            </span>
          )}
        </button>
      </div>
    </div>
  );

  const renderHome = () => (
    <div className="p-4 space-y-6 animate-fadeIn">
      <div className="bg-white rounded-2xl shadow-lg p-6 transform hover:scale-[1.02] transition-all duration-300">
        <h2 className="text-green-600 font-bold text-lg mb-4">
          Daily Rider Game Target
        </h2>
        <div className="space-y-4">
          <input
            type="text"
            placeholder="Enter Kilometers"
            value={formData.kilometers}
            onChange={(e) =>
              setFormData({ ...formData, kilometers: e.target.value })
            }
            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent outline-none transition-all duration-200"
          />
          <input
            type="text"
            placeholder="Enter prize"
            value={formData.prize}
            onChange={(e) =>
              setFormData({ ...formData, prize: e.target.value })
            }
            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent outline-none transition-all duration-200"
          />
          <div className="grid grid-cols-2 gap-4">
            <div>
              <label className="text-sm text-gray-600 mb-1 block">Start</label>
              <input
                type="text"
                value={formData.startTime}
                onChange={(e) =>
                  setFormData({ ...formData, startTime: e.target.value })
                }
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent outline-none transition-all duration-200"
              />
            </div>
            <div>
              <label className="text-sm text-gray-600 mb-1 block">End</label>
              <input
                type="text"
                value={formData.endTime}
                onChange={(e) =>
                  setFormData({ ...formData, endTime: e.target.value })
                }
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent outline-none transition-all duration-200"
              />
            </div>
          </div>
          <button className="w-full bg-green-50 text-green-600 py-3 rounded-lg font-semibold flex items-center justify-between hover:bg-green-100 active:scale-[0.98] transition-all duration-200">
            Save new
            <ChevronRight size={20} />
          </button>
        </div>
      </div>

      <div className="bg-white rounded-2xl shadow-lg p-6 transform hover:scale-[1.02] transition-all duration-300">
        <h3 className="text-green-600 font-semibold mb-3">New notification</h3>
        <p className="text-gray-500 text-sm mb-4">
          Kindly Provide details below
        </p>
        <textarea
          placeholder="Enter notification details..."
          value={formData.notificationDetails}
          onChange={(e) =>
            setFormData({ ...formData, notificationDetails: e.target.value })
          }
          className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent outline-none transition-all duration-200 min-h-[100px] resize-none"
        />
        <button className="w-full bg-green-50 text-green-600 py-3 rounded-lg font-semibold flex items-center justify-between mt-4 hover:bg-green-100 active:scale-[0.98] transition-all duration-200">
          Save new notification
          <ChevronRight size={20} />
        </button>
      </div>

      <div className="space-y-3">
        <button
          onClick={() => setScreen("game-history")}
          className="w-full bg-white rounded-xl shadow-md p-4 flex items-center justify-between hover:shadow-lg active:scale-[0.98] transition-all duration-200"
        >
          <span className="font-semibold">
            View rider game history <span className="text-green-600">(5)</span>
          </span>
          <ChevronRight className="text-green-600" size={24} />
        </button>
        <button
          onClick={() => setScreen("notifications")}
          className="w-full bg-white rounded-xl shadow-md p-4 flex items-center justify-between hover:shadow-lg active:scale-[0.98] transition-all duration-200"
        >
          <span className="font-semibold">
            View all available notification{" "}
            <span className="text-green-600">(5)</span>
          </span>
          <ChevronRight className="text-green-600" size={24} />
        </button>
        <button
          onClick={() => setScreen("banners")}
          className="w-full bg-white rounded-xl shadow-md p-4 flex items-center justify-between hover:shadow-lg active:scale-[0.98] transition-all duration-200"
        >
          <span className="font-semibold">Banner</span>
          <ChevronRight className="text-green-600" size={24} />
        </button>
      </div>
    </div>
  );

  const renderGameHistory = () => (
    <div className="p-4 space-y-4 animate-fadeIn">
      {games.map((game, idx) => (
        <div
          key={game.id}
          className="bg-white rounded-2xl shadow-lg p-6 transform hover:scale-[1.02] transition-all duration-300"
          style={{ animationDelay: `${idx * 100}ms` }}
        >
          <div className="flex justify-between items-start mb-4">
            <h3 className="text-gray-800 font-semibold text-lg">
              At least {game.kilometers} kilometers
            </h3>
            <span className="text-green-600 font-semibold">{game.date}</span>
          </div>
          <div className="flex items-center gap-2 text-gray-600 mb-4">
            <Clock size={16} />
            <span className="text-sm">{game.time}</span>
          </div>
          <div>
            <div className="flex justify-between items-center mb-2">
              <span className="text-gray-700 font-medium">Prize</span>
              <span className="text-green-600 font-bold">{game.progress}%</span>
            </div>
            <div className="text-green-600 font-bold text-2xl mb-2">
              N{game.prize.toLocaleString()}
            </div>
            <div className="w-full bg-gray-200 rounded-full h-3 overflow-hidden">
              <div
                className="bg-gradient-to-r from-green-500 to-green-600 h-full rounded-full transition-all duration-1000 ease-out"
                style={{ width: `${game.progress}%` }}
              />
            </div>
          </div>
        </div>
      ))}
    </div>
  );

  const renderNotifications = () => (
    <div className="p-4 space-y-4 animate-fadeIn">
      {notifications.map((notif, idx) => (
        <div
          key={notif.id}
          className="bg-white rounded-2xl shadow-lg p-6 transform hover:scale-[1.02] transition-all duration-300"
          style={{ animationDelay: `${idx * 100}ms` }}
        >
          <div className="flex justify-between items-start mb-3">
            <h3 className="text-green-600 font-semibold">
              #{notif.id} Notification
            </h3>
            <span
              className={`px-3 py-1 rounded-full text-sm font-medium ${
                notif.visible
                  ? "bg-green-100 text-green-700"
                  : "bg-gray-100 text-gray-600"
              }`}
            >
              {notif.visible ? "visible" : "hide"}
            </span>
          </div>
          <h4 className="font-bold text-gray-800 mb-3">{notif.title}</h4>
          <p className="text-gray-600 text-sm leading-relaxed mb-4">
            {notif.content}
          </p>
          <button className="w-full bg-green-50 text-green-600 py-3 rounded-lg font-semibold flex items-center justify-between hover:bg-green-100 active:scale-[0.98] transition-all duration-200">
            Change action
            <ChevronRight size={20} />
          </button>
        </div>
      ))}
    </div>
  );

  const renderBanners = () => (
    <div className="p-4 space-y-4 animate-fadeIn">
      {banners.map((banner, idx) => (
        <div
          key={banner.id}
          className="bg-white rounded-2xl shadow-lg border-2 border-green-200 p-5 transform hover:scale-[1.02] transition-all duration-300"
          style={{ animationDelay: `${idx * 100}ms` }}
        >
          <div className="flex justify-between items-center mb-4">
            <h3 className="text-green-600 font-bold text-lg">
              Banner {banner.id}
            </h3>
            <button className="text-gray-400 hover:text-gray-600 transition-colors">
              <MoreVertical size={20} />
            </button>
          </div>
          <div className="space-y-2 text-sm">
            <div className="flex justify-between py-2 border-b border-gray-100">
              <span className="text-gray-500">Title</span>
              <span className="text-gray-800 font-medium text-right">
                {banner.title}
              </span>
            </div>
            <div className="flex justify-between py-2 border-b border-gray-100">
              <span className="text-gray-500">Heading</span>
              <span className="text-gray-800 font-medium text-right">
                {banner.heading}
              </span>
            </div>
            <div className="flex justify-between py-2 border-b border-gray-100">
              <span className="text-gray-500">Body Text</span>
              <span className="text-gray-800 font-medium text-right">
                {banner.bodyText}
              </span>
            </div>
            <div className="flex justify-between py-2 border-b border-gray-100">
              <span className="text-gray-500">Text Button</span>
              <span className="text-gray-800 font-medium text-right">
                {banner.buttonText}
              </span>
            </div>
            <div className="flex justify-between py-2">
              <span className="text-gray-500">Status</span>
              <span
                className={`font-bold ${
                  banner.status === "Active"
                    ? "text-green-600"
                    : "text-gray-600"
                }`}
              >
                {banner.status}
              </span>
            </div>
          </div>
        </div>
      ))}
      <button
        onClick={() => {
          setBannerForm(banners[0]);
          setScreen("preview");
        }}
        className="w-full bg-green-600 text-white py-4 rounded-xl font-bold hover:bg-green-700 active:scale-[0.98] transition-all duration-200 shadow-lg"
      >
        Preview Banner
      </button>
    </div>
  );

  const renderBannerForm = () => (
    <div className="p-4 space-y-4 animate-fadeIn">
      <div className="space-y-4">
        <div>
          <label className="text-gray-700 font-semibold mb-2 block">
            Title
          </label>
          <input
            type="text"
            value={bannerForm.title}
            onChange={(e) =>
              setBannerForm({ ...bannerForm, title: e.target.value })
            }
            placeholder="Receive money, win up to 1k!"
            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent outline-none transition-all duration-200"
          />
        </div>
        <div>
          <label className="text-gray-700 font-semibold mb-2 block">
            Heading
          </label>
          <input
            type="text"
            value={bannerForm.heading}
            onChange={(e) =>
              setBannerForm({ ...bannerForm, heading: e.target.value })
            }
            placeholder="Win up to N1K bonus"
            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent outline-none transition-all duration-200"
          />
        </div>
        <div>
          <label className="text-gray-700 font-semibold mb-2 block">
            Body text
          </label>
          <input
            type="text"
            value={bannerForm.bodyText}
            onChange={(e) =>
              setBannerForm({ ...bannerForm, bodyText: e.target.value })
            }
            placeholder="Receive big payments, Spin to get up to N1K"
            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent outline-none transition-all duration-200"
          />
        </div>
        <div>
          <label className="text-gray-700 font-semibold mb-2 block">
            Button text
          </label>
          <input
            type="text"
            value={bannerForm.buttonText}
            onChange={(e) =>
              setBannerForm({ ...bannerForm, buttonText: e.target.value })
            }
            placeholder="Check it Out"
            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent outline-none transition-all duration-200"
          />
        </div>
        <div>
          <label className="text-gray-700 font-semibold mb-2 block">
            Button URL
          </label>
          <input
            type="url"
            value={bannerForm.buttonUrl}
            onChange={(e) =>
              setBannerForm({ ...bannerForm, buttonUrl: e.target.value })
            }
            placeholder="https://www.google.com"
            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent outline-none transition-all duration-200"
          />
        </div>
        <div>
          <label className="text-gray-700 font-semibold mb-2 block">
            Image
          </label>
          <div className="border-2 border-dashed border-gray-300 rounded-lg p-8 text-center hover:border-green-500 transition-all duration-200 cursor-pointer">
            <div className="flex flex-col items-center">
              <div className="w-16 h-16 bg-green-50 rounded-full flex items-center justify-center mb-3">
                <Upload className="text-green-600" size={28} />
              </div>
              <p className="text-gray-600 font-medium">Click to upload image</p>
              <p className="text-gray-400 text-sm mt-1">IMG 2340</p>
            </div>
          </div>
        </div>
      </div>
      <div className="flex gap-3 pt-4">
        <button
          onClick={handleSaveBanner}
          className="flex-1 bg-green-600 text-white py-4 rounded-xl font-bold hover:bg-green-700 active:scale-[0.98] transition-all duration-200 shadow-lg"
        >
          Save
        </button>
        <button
          onClick={() => setScreen("preview")}
          className="flex-1 bg-gray-100 text-gray-700 py-4 rounded-xl font-bold hover:bg-gray-200 active:scale-[0.98] transition-all duration-200"
        >
          Preview
        </button>
      </div>
    </div>
  );

  const renderPreview = () => (
    <div className="min-h-screen bg-gray-100 flex items-center justify-center p-4 animate-fadeIn">
      <div className="relative w-full max-w-md">
        <div className="bg-gradient-to-br from-gray-900 via-gray-800 to-black rounded-3xl shadow-2xl overflow-hidden transform hover:scale-[1.02] transition-all duration-300">
          <button
            onClick={() => setScreen("banner-form")}
            className="absolute top-4 right-4 z-10 bg-white/20 backdrop-blur-sm text-white p-2 rounded-full hover:bg-white/30 transition-all duration-200"
          >
            <X size={24} />
          </button>

          <div className="relative h-96 bg-gradient-to-br from-purple-900 via-gray-900 to-black">
            <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjAwIiBoZWlnaHQ9IjIwMCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZGVmcz48cGF0dGVybiBpZD0iZ3JpZCIgd2lkdGg9IjQwIiBoZWlnaHQ9IjQwIiBwYXR0ZXJuVW5pdHM9InVzZXJTcGFjZU9uVXNlIj48cGF0aCBkPSJNIDQwIDAgTCAwIDAgMCA0MCIgZmlsbD0ibm9uZSIgc3Ryb2tlPSJyZ2JhKDI1NSwgMjU1LCAyNTUsIDAuMDUpIiBzdHJva2Utd2lkdGg9IjEiLz48L3BhdHRlcm4+PC9kZWZzPjxyZWN0IHdpZHRoPSIxMDAlIiBoZWlnaHQ9IjEwMCUiIGZpbGw9InVybCgjZ3JpZCkiLz48L3N2Zz4=')] opacity-30" />

            <div className="relative z-10 p-8 h-full flex flex-col justify-between">
              <div>
                <div className="text-gray-400 text-sm mb-2 flex items-center gap-2">
                  <div className="w-8 h-8 bg-white/10 rounded-lg flex items-center justify-center">
                    📷
                  </div>
                  <span className="font-semibold">JOHNEX PHOTOGRAPHY</span>
                </div>
                <h1 className="text-yellow-400 text-3xl font-bold mb-2 animate-pulse">
                  Your One-Stop Shop for Visual
                </h1>
              </div>

              <div className="space-y-6">
                <div className="bg-white/10 backdrop-blur-md rounded-2xl p-6 border border-white/20">
                  <h2 className="text-yellow-400 text-2xl font-bold mb-3">
                    {bannerForm.heading || "Win up to 1K bonus"}
                  </h2>
                  <p className="text-white text-lg leading-relaxed">
                    {bannerForm.bodyText ||
                      "Receive big payments, Spin to get up to N1K"}
                  </p>
                </div>

                <div className="grid grid-cols-4 gap-2">
                  {[1, 2, 3, 4].map((i) => (
                    <div
                      key={i}
                      className="aspect-square bg-gradient-to-br from-purple-600 to-pink-600 rounded-lg opacity-70"
                    />
                  ))}
                </div>

                <button className="w-full bg-white text-gray-900 py-4 rounded-2xl font-bold text-lg hover:bg-gray-100 active:scale-[0.98] transition-all duration-200 shadow-xl">
                  {bannerForm.buttonText || "Check it Out"}
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );

  return (
    <div className="min-h-screen bg-gray-50">
      {renderHeader()}
      <div className="pb-8">
        {screen === "home" && renderHome()}
        {screen === "game-history" && renderGameHistory()}
        {screen === "notifications" && renderNotifications()}
        {screen === "banners" && renderBanners()}
        {screen === "banner-form" && renderBannerForm()}
        {screen === "preview" && renderPreview()}
      </div>
      <style>{`
        @keyframes fadeIn {
          from {
            opacity: 0;
            transform: translateY(20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        .animate-fadeIn {
          animation: fadeIn 0.5s ease-out forwards;
        }
      `}</style>
    </div>
  );
};

export default Content;
