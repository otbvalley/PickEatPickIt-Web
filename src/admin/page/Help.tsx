import { useState } from "react";
import { Menu, Bell, AlertCircle, ChevronDown } from "lucide-react";

const Help: React.FC = () => {
  const [email, setEmail] = useState("customersupport@loopay.com");
  const [countryCode, setCountryCode] = useState("+234");
  const [phoneNumber, setPhoneNumber] = useState("9012456789");
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [isSaving, setIsSaving] = useState(false);
  const [showSuccess, setShowSuccess] = useState(false);

  const countryCodes = [
    { code: "+234", country: "Nigeria", flag: "🇳🇬" },
    { code: "+1", country: "USA", flag: "🇺🇸" },
    { code: "+44", country: "UK", flag: "🇬🇧" },
    { code: "+91", country: "India", flag: "🇮🇳" },
    { code: "+86", country: "China", flag: "🇨🇳" },
    { code: "+81", country: "Japan", flag: "🇯🇵" },
  ];

  const handleSave = () => {
    setIsSaving(true);

    // Simulate API call
    setTimeout(() => {
      setIsSaving(false);
      setShowSuccess(true);

      // Hide success message after 3 seconds
      setTimeout(() => {
        setShowSuccess(false);
      }, 3000);
    }, 1000);
  };

  const selectedCountry = countryCodes.find((c) => c.code === countryCode);

  return (
    <div className="min-h-screen bg-gray-50 flex items-center justify-center p-4">
      <div className="w-full max-w-7xl bg-white  overflow-hidden">
        <div className="animate-fadeIn min-h-screen">
          {/* Header */}
          <div className="bg-gradient-to-r from-green-600 to-green-500 text-white p-6">
            <div className="flex justify-between items-center">
              <button className="hover:bg-white/10 p-2 rounded-lg transition-all">
                <Menu size={24} />
              </button>
              <h1 className="text-xl font-bold">Help & Support</h1>
              <button className="hover:bg-white/10 p-2 rounded-lg transition-all relative">
                <Bell size={24} />
                <span className="absolute top-1 right-1 w-2 h-2 bg-red-500 rounded-full"></span>
              </button>
            </div>
          </div>

          {/* Content */}
          <div className="p-6 space-y-6">
            {/* Info Banner */}
            <div className="bg-green-50 border-l-4 border-green-500 p-4 rounded-lg flex gap-3 items-start animate-slideDown shadow-sm">
              <AlertCircle
                className="text-green-600 flex-shrink-0 mt-0.5"
                size={20}
              />
              <p className="text-green-800 text-sm font-medium leading-relaxed">
                update support mail address and whatsapp contact
              </p>
            </div>

            {/* Success Message */}
            {showSuccess && (
              <div className="bg-green-100 border border-green-400 text-green-800 px-4 py-3 rounded-lg animate-slideDown shadow-md">
                <p className="font-semibold">✓ Successfully saved!</p>
                <p className="text-sm">
                  Your contact information has been updated.
                </p>
              </div>
            )}

            {/* Email Input */}
            <div
              className="space-y-2 animate-slideUp"
              style={{ animationDelay: "100ms" }}
            >
              <label className="block text-sm font-semibold text-gray-700">
                Email Address
              </label>
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Enter email address"
                className="w-full px-4 py-3.5 bg-white border-2 border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent transition-all hover:border-gray-300 text-gray-800 font-medium shadow-sm"
              />
            </div>

            {/* Phone Number Input */}
            <div
              className="space-y-2 animate-slideUp"
              style={{ animationDelay: "200ms" }}
            >
              <label className="block text-sm font-semibold text-gray-700">
                WhatsApp Contact
              </label>
              <div className="flex gap-3">
                {/* Country Code Dropdown */}
                <div className="relative">
                  <button
                    onClick={() => setIsDropdownOpen(!isDropdownOpen)}
                    className="flex items-center justify-between gap-2 px-4 py-3.5 bg-white border-2 border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-green-500 transition-all hover:border-gray-300 shadow-sm min-w-[100px]"
                  >
                    <span className="font-medium text-gray-800">
                      {selectedCountry?.flag} {countryCode}
                    </span>
                    <ChevronDown
                      size={18}
                      className={`text-gray-600 transition-transform ${
                        isDropdownOpen ? "rotate-180" : ""
                      }`}
                    />
                  </button>

                  {/* Dropdown Menu */}
                  {isDropdownOpen && (
                    <div className="absolute top-full left-0 mt-2 w-64 bg-white border-2 border-gray-200 rounded-xl shadow-2xl z-50 animate-slideDown overflow-hidden">
                      <div className="max-h-64 overflow-y-auto">
                        {countryCodes.map((item) => (
                          <button
                            key={item.code}
                            onClick={() => {
                              setCountryCode(item.code);
                              setIsDropdownOpen(false);
                            }}
                            className={`w-full px-4 py-3 text-left hover:bg-green-50 transition-colors flex items-center gap-3 ${
                              countryCode === item.code
                                ? "bg-green-50 text-green-700 font-semibold"
                                : "text-gray-700"
                            }`}
                          >
                            <span className="text-xl">{item.flag}</span>
                            <span className="flex-1">{item.country}</span>
                            <span className="font-mono text-sm">
                              {item.code}
                            </span>
                          </button>
                        ))}
                      </div>
                    </div>
                  )}
                </div>

                {/* Phone Number Input */}
                <input
                  type="tel"
                  value={phoneNumber}
                  onChange={(e) =>
                    setPhoneNumber(e.target.value.replace(/\D/g, ""))
                  }
                  placeholder="Enter phone number"
                  className="flex-1 px-4 py-3.5 bg-white border-2 border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent transition-all hover:border-gray-300 text-gray-800 font-medium shadow-sm"
                />
              </div>
            </div>

            {/* Save Button */}
            <button
              onClick={handleSave}
              disabled={isSaving}
              className={`w-full py-4 rounded-xl font-bold text-lg shadow-lg transition-all transform hover:scale-[1.02] active:scale-[0.98] animate-slideUp ${
                isSaving
                  ? "bg-green-400 cursor-not-allowed"
                  : "bg-gradient-to-r from-green-600 to-green-500 hover:from-green-700 hover:to-green-600"
              } text-white`}
              style={{ animationDelay: "300ms" }}
            >
              {isSaving ? (
                <div className="flex items-center justify-center gap-2">
                  <div className="w-5 h-5 border-3 border-white border-t-transparent rounded-full animate-spin"></div>
                  <span>Saving...</span>
                </div>
              ) : (
                "Save"
              )}
            </button>

            {/* Info Text */}
            <p
              className="text-center text-sm text-gray-500 animate-slideUp"
              style={{ animationDelay: "400ms" }}
            >
              Make sure your contact information is accurate to receive support
              updates
            </p>
          </div>
        </div>
      </div>

      {/* Overlay for dropdown */}
      {isDropdownOpen && (
        <div
          className="fixed inset-0 z-40"
          onClick={() => setIsDropdownOpen(false)}
        ></div>
      )}

      <style>{`
        @keyframes fadeIn {
          from {
            opacity: 0;
          }
          to {
            opacity: 1;
          }
        }

        @keyframes slideDown {
          from {
            transform: translateY(-20px);
            opacity: 0;
          }
          to {
            transform: translateY(0);
            opacity: 1;
          }
        }

        @keyframes slideUp {
          from {
            transform: translateY(20px);
            opacity: 0;
          }
          to {
            transform: translateY(0);
            opacity: 1;
          }
        }

        @keyframes spin {
          to {
            transform: rotate(360deg);
          }
        }

        .animate-fadeIn {
          animation: fadeIn 0.3s ease-out;
        }

        .animate-slideDown {
          animation: slideDown 0.4s ease-out;
        }

        .animate-slideUp {
          animation: slideUp 0.4s ease-out forwards;
          opacity: 0;
        }

        .animate-spin {
          animation: spin 0.8s linear infinite;
        }

        /* Custom scrollbar for dropdown */
        .overflow-y-auto::-webkit-scrollbar {
          width: 6px;
        }

        .overflow-y-auto::-webkit-scrollbar-track {
          background: #f1f1f1;
        }

        .overflow-y-auto::-webkit-scrollbar-thumb {
          background: #16a34a;
          border-radius: 3px;
        }

        .overflow-y-auto::-webkit-scrollbar-thumb:hover {
          background: #15803d;
        }
      `}</style>
    </div>
  );
};

export default Help;
