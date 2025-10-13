import React, { useState, useEffect, useRef } from "react";
import { MapPin, Search, ChevronDown, ArrowLeft } from "lucide-react";
import logo from "../../assets/Logo SVG 1.png";
import { Link } from "react-router-dom";
// Google Maps types
interface GoogleMapOptions {
  center: { lat: number; lng: number };
  zoom: number;
  disableDefaultUI?: boolean;
  zoomControl?: boolean;
  mapTypeControl?: boolean;
  streetViewControl?: boolean;
  fullscreenControl?: boolean;
}

interface GoogleMarkerOptions {
  position: { lat: number; lng: number };
  map: GoogleMap;
  draggable?: boolean;
  icon?: {
    path: number;
    scale: number;
    fillColor: string;
    fillOpacity: number;
    strokeColor: string;
    strokeWeight: number;
  };
}

interface GoogleMap {
  setCenter(latLng: { lat: number; lng: number }): void;
}

interface GoogleMarker {
  addListener(event: string, handler: () => void): void;
  getPosition(): { lat(): number; lng(): number } | null;
  setPosition(latLng: { lat: number; lng: number }): void;
}

interface GoogleMapsAPI {
  Map: new (element: HTMLElement, options: GoogleMapOptions) => GoogleMap;
  Marker: new (options: GoogleMarkerOptions) => GoogleMarker;
  SymbolPath: {
    CIRCLE: number;
  };
}

// Extend Window interface for Google Maps
declare global {
  interface Window {
    google: {
      maps: GoogleMapsAPI;
    };
  }
}

// Types
interface LocationType {
  lat: number;
  lng: number;
  address: string;
}

interface UserData {
  firstName?: string;
  lastName?: string;
  email?: string;
}

// Phone Input Screen
const PhoneInputScreen = ({
  onContinue,
}: {
  onContinue: (phone: string) => void;
}) => {
  const [phone, setPhone] = useState("");

  return (
    <div className="min-h-screen bg-white flex flex-col">
      <div className="flex-1 flex flex-col items-center px-6 pt-12">
        <img src={logo} alt="" />

        <h1 className="text-2xl font-bold text-green-700 mb-32">
          PickEAT PickIT
        </h1>

        <div className="w-full max-w-md space-y-3 mb-auto">
          <div className="flex gap-3">
            <button className="flex items-center gap-2 px-4 py-3 bg-[#F5F5F5] rounded-lg border border-gray-200">
              <span className="text-sm font-medium text-[#000000] font-family-inter">
                +234
              </span>
              <ChevronDown className="w-4 h-4 text-gray-600" />
            </button>
            <input
              type="tel"
              placeholder="Phone number"
              value={phone}
              onChange={(e) => setPhone(e.target.value)}
              className="flex-1 px-4 py-3 bg-[#F5F5F5] rounded-lg border text-[#000000] border-gray-200 text-sm placeholder-[#000000] outline-none"
            />
          </div>
        </div>
        <p className="text-sm text-gray-500 mb-6 font-family-inter">
          Already have an account?{" "}
          <Link to="/login" className="text-black font-family-inter font-bold">
            Log in
          </Link>
        </p>
        <div className="w-full max-w-md pb-8">
          <p className="text-xs text-gray-500 text-center mb-4">
            By continuing you agree to our{" "}
            <span className="text-green-700">Terms and condition</span> and the{" "}
            <span className="text-green-700">privacy Policy</span>
          </p>
          <button
            onClick={() => onContinue(phone)}
            className="w-full py-4 bg-green-700 text-white font-semibold rounded-xl hover:bg-green-800 transition-colors"
          >
            Continue
          </button>
        </div>
      </div>
    </div>
  );
};

// OTP Screen
const OTPScreen = ({
  phone,
  onContinue,
  onBack,
}: {
  phone: string;
  onContinue: () => void;
  onBack: () => void;
}) => {
  const [otp, setOtp] = useState(["", "", "", ""]);
  const inputRefs = useRef<HTMLInputElement[]>([]);

  const handleChange = (index: number, value: string) => {
    if (value.length > 1) return;

    const newOtp = [...otp];
    newOtp[index] = value;
    setOtp(newOtp);

    if (value && index < 3) {
      inputRefs.current[index + 1]?.focus();
    }
  };

  const handleKeyDown = (index: number, e: React.KeyboardEvent) => {
    if (e.key === "Backspace" && !otp[index] && index > 0) {
      inputRefs.current[index - 1]?.focus();
    }
  };

  return (
    <div className="min-h-screen bg-white flex flex-col">
      <div className="px-6 py-4">
        <button onClick={onBack} className="p-2 -ml-2">
          <ArrowLeft className="w-6 h-6" />
        </button>
      </div>

      <div className="flex-1 flex flex-col items-center px-6 pt-8">
        <h2 className="text-xl font-semibold mb-24 text-[#1E1E1E] font-family-inter">
          Enter code
        </h2>

        <div className="flex gap-4 mb-8">
          {otp.map((digit, index) => (
            <input
              key={index}
              ref={(el) => {
                if (el) inputRefs.current[index] = el;
              }}
              type="text"
              inputMode="numeric"
              maxLength={1}
              value={digit}
              onChange={(e) => handleChange(index, e.target.value)}
              onKeyDown={(e) => handleKeyDown(index, e)}
              className="w-14 h-14 text-center text-xl font-semibold border-2 border-gray-200 rounded-lg focus:border-green-700 focus:outline-none bg-[#FFFFFF]"
            />
          ))}
        </div>

        <p className="text-sm text-[#7A7A7A] font-family-inter text-center mb-auto">
          Enter the four digit code sent to
          <br />+{phone}
        </p>

        <div className="w-full max-w-md pb-8">
          <button
            onClick={onContinue}
            className="w-full py-4 bg-green-700 text-white font-semibold rounded-xl hover:bg-green-800 transition-colors"
          >
            Continue
          </button>
        </div>
      </div>
    </div>
  );
};

// Complete Profile Screen
const CompleteProfileScreen = ({
  onContinue,
  onBack,
}: {
  onContinue: (data: UserData) => void;
  onBack: () => void;
}) => {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");

  return (
    <div className="min-h-screen bg-white flex flex-col">
      <div className="px-6 py-4">
        <button onClick={onBack} className="p-2 -ml-2">
          <ArrowLeft className="w-6 h-6" />
        </button>
      </div>

      <div className="flex-1 flex flex-col px-6">
        <h2 className="text-xl font-semibold mb-2">Complete profile</h2>
        <p className="text-sm text-gray-500 mb-8">
          Let us know how to properly address you
        </p>

        <div className="space-y-4 mb-auto">
          <div>
            <label className="block text-xs text-gray-500 mb-2 px-1">
              First name
            </label>
            <input
              type="text"
              value={firstName}
              onChange={(e) => setFirstName(e.target.value)}
              placeholder="Omotayo"
              className="w-full px-4 py-3 border-2 border-green-700 rounded-xl text-sm focus:outline-none"
            />
          </div>
          <div>
            <label className="block text-xs text-gray-500 mb-2 px-1">
              Last name
            </label>
            <input
              type="text"
              value={lastName}
              onChange={(e) => setLastName(e.target.value)}
              placeholder="Enter last name"
              className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-xl text-sm placeholder-gray-400 focus:outline-none focus:border-green-700"
            />
          </div>
          <div>
            <label className="block text-xs text-gray-500 mb-2 px-1">
              Email
            </label>
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Enter email address"
              className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-xl text-sm placeholder-gray-400 focus:outline-none focus:border-green-700"
            />
          </div>
        </div>

        <div className="pb-8">
          <button
            onClick={() => onContinue({ firstName, lastName, email })}
            className="w-full py-4 bg-green-700 text-white font-semibold rounded-xl hover:bg-green-800 transition-colors"
          >
            Continue
          </button>
        </div>
      </div>
    </div>
  );
};

// Address Selection Screen
const AddressSelectionScreen = ({
  onContinue,
  onBack,
}: {
  onContinue: () => void;
  onBack: () => void;
}) => {
  const [searchQuery, setSearchQuery] = useState("");

  return (
    <div className="min-h-screen bg-white flex flex-col">
      <div className="px-6 py-4">
        <button onClick={onBack} className="p-2 -ml-2">
          <ArrowLeft className="w-6 h-6" />
        </button>
      </div>

      <div className="flex-1 flex flex-col px-6">
        <h2 className="text-xl font-semibold mb-6">Complete profile</h2>

        <div className="relative mb-6">
          <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
          <input
            type="text"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            placeholder="Enter a new address"
            className="w-full pl-12 pr-4 py-3 border border-gray-200 rounded-xl text-sm placeholder-gray-400 focus:outline-none focus:border-green-700"
          />
        </div>

        <button className="flex items-center gap-3 py-3 border-b border-gray-100">
          <MapPin className="w-5 h-5 text-green-700" />
          <span className="text-sm font-medium text-green-700">
            Choose from map
          </span>
        </button>

        <div className="py-4 border-b border-gray-100 mb-auto">
          <p className="text-xs text-gray-500 mb-1">Current location</p>
          <div className="flex items-start gap-3">
            <MapPin className="w-5 h-5 text-gray-400 mt-0.5" />
            <p className="text-sm">Villa Nova estate, Apo extension</p>
          </div>
        </div>

        <div className="pb-8">
          <button
            onClick={onContinue}
            className="w-full py-4 bg-green-700 text-white font-semibold rounded-xl hover:bg-green-800 transition-colors"
          >
            Select
          </button>
        </div>
      </div>
    </div>
  );
};

// Set Delivery Address Screen with Real Map
const SetDeliveryAddressScreen = ({
  onComplete,
  onBack,
}: {
  onComplete: () => void;
  onBack: () => void;
}) => {
  const [buildingType, setBuildingType] = useState("");
  const [aptSuite, setAptSuite] = useState("");
  const [buildingName, setBuildingName] = useState("");
  const [deliveryOption, setDeliveryOption] = useState("direct");
  const [instructions, setInstructions] = useState("");
  const [location, setLocation] = useState<LocationType>({
    lat: 6.4698,
    lng: 3.5852,
    address: "",
  });
  const mapRef = useRef<HTMLDivElement>(null);
  const mapInstanceRef = useRef<GoogleMap | null>(null);
  const markerInstanceRef = useRef<GoogleMarker | null>(null);

  useEffect(() => {
    // Load Google Maps script
    const script = document.createElement("script");
    script.src = `https://maps.googleapis.com/maps/api/js?key=AIzaSyBFw0Qbyq9zTFTd-tUY6dZWTgaQzuU17R8&libraries=places`;
    script.async = true;
    script.defer = true;
    document.head.appendChild(script);

    script.onload = () => {
      if (mapRef.current && window.google) {
        const mapInstance = new window.google.maps.Map(mapRef.current, {
          center: { lat: location.lat, lng: location.lng },
          zoom: 15,
          disableDefaultUI: true,
          zoomControl: false,
          mapTypeControl: false,
          streetViewControl: false,
          fullscreenControl: false,
        });

        const markerInstance = new window.google.maps.Marker({
          position: { lat: location.lat, lng: location.lng },
          map: mapInstance,
          draggable: true,
          icon: {
            path: window.google.maps.SymbolPath.CIRCLE,
            scale: 10,
            fillColor: "#15803d",
            fillOpacity: 1,
            strokeColor: "#ffffff",
            strokeWeight: 3,
          },
        });

        markerInstance.addListener("dragend", () => {
          const pos = markerInstance.getPosition();
          if (pos) {
            setLocation({ lat: pos.lat(), lng: pos.lng(), address: "" });
          }
        });

        mapInstanceRef.current = mapInstance;
        markerInstanceRef.current = markerInstance;

        // Try to get user's location
        if (navigator.geolocation) {
          navigator.geolocation.getCurrentPosition(
            (position) => {
              const pos = {
                lat: position.coords.latitude,
                lng: position.coords.longitude,
              };
              setLocation({ ...pos, address: "" });
              mapInstance.setCenter(pos);
              markerInstance.setPosition(pos);
            },
            () => {
              // Use default Ikeja location if geolocation fails
              console.log("Using default location");
            }
          );
        }
      }
    };

    return () => {
      if (document.head.contains(script)) {
        document.head.removeChild(script);
      }
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <div className="min-h-screen bg-white flex flex-col">
      <div className="px-6 py-4 flex items-center gap-3 bg-white z-10">
        <button onClick={onBack} className="p-2 -ml-2">
          <ArrowLeft className="w-6 h-6" />
        </button>
        <h2 className="text-xl font-semibold">Set delivery address</h2>
      </div>

      <div
        ref={mapRef}
        className="w-full h-64 bg-gray-200"
        style={{ minHeight: "250px" }}
      />

      <div className="flex-1 overflow-y-auto px-6 pt-4 pb-8">
        <p className="text-xs text-gray-500 mb-4">
          Move the pin to your building entrance to help your courier find you
          faster
        </p>

        <div className="space-y-4">
          <div>
            <label className="block text-xs text-gray-500 mb-2 px-1">
              Building type
            </label>
            <input
              type="text"
              value={buildingType}
              onChange={(e) => setBuildingType(e.target.value)}
              placeholder="Office"
              className="w-full px-4 py-3 border-2 border-green-700 rounded-xl text-sm focus:outline-none"
            />
          </div>

          <div>
            <label className="block text-xs text-gray-500 mb-2 px-1">
              Apt / Suite / Floor
            </label>
            <input
              type="text"
              value={aptSuite}
              onChange={(e) => setAptSuite(e.target.value)}
              placeholder="e.g 1208"
              className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-xl text-sm placeholder-gray-400 focus:outline-none focus:border-green-700"
            />
          </div>

          <div>
            <label className="block text-xs text-gray-500 mb-2 px-1">
              Business / Building name
            </label>
            <input
              type="text"
              value={buildingName}
              onChange={(e) => setBuildingName(e.target.value)}
              placeholder="e.g Central Tower"
              className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-xl text-sm placeholder-gray-400 focus:outline-none focus:border-green-700"
            />
          </div>

          <div className="space-y-3 pt-2">
            <label
              className={`flex items-center gap-3 p-4 border-2 rounded-xl cursor-pointer transition-colors ${
                deliveryOption === "direct"
                  ? "border-green-700 bg-green-50"
                  : "border-gray-200"
              }`}
            >
              <input
                type="radio"
                name="delivery"
                value="direct"
                checked={deliveryOption === "direct"}
                onChange={(e) => setDeliveryOption(e.target.value)}
                className="w-5 h-5 text-green-700"
              />
              <span className="text-sm font-medium">
                Hand it to me Directly
              </span>
            </label>

            <label
              className={`flex items-center gap-3 p-4 border-2 rounded-xl cursor-pointer transition-colors ${
                deliveryOption === "available"
                  ? "border-green-700 bg-green-50"
                  : "border-gray-200"
              }`}
            >
              <input
                type="radio"
                name="delivery"
                value="available"
                checked={deliveryOption === "available"}
                onChange={(e) => setDeliveryOption(e.target.value)}
                className="w-5 h-5 text-green-700"
              />
              <span className="text-sm font-medium">
                Hand to me or who's available
              </span>
            </label>

            <label
              className={`flex items-center gap-3 p-4 border-2 rounded-xl cursor-pointer transition-colors ${
                deliveryOption === "door"
                  ? "border-green-700 bg-green-50"
                  : "border-gray-200"
              }`}
            >
              <input
                type="radio"
                name="delivery"
                value="door"
                checked={deliveryOption === "door"}
                onChange={(e) => setDeliveryOption(e.target.value)}
                className="w-5 h-5 text-green-700"
              />
              <span className="text-sm font-medium">Leave it at my door</span>
            </label>
          </div>

          <div>
            <label className="block text-xs text-gray-500 mb-2 px-1">
              Instructions for delivery person
            </label>
            <textarea
              value={instructions}
              onChange={(e) => setInstructions(e.target.value)}
              placeholder="Example: Please knock instead of using the doorbell"
              rows={3}
              className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-xl text-sm placeholder-gray-400 resize-none focus:outline-none focus:border-green-700"
            />
          </div>
        </div>
        <Link to="/login">
          <button
            onClick={onComplete}
            className="w-full mt-6 py-4 bg-green-700 text-white font-semibold rounded-xl hover:bg-green-800 transition-colors"
          >
            Set address
          </button>
        </Link>
      </div>
    </div>
  );
};

// Main App Component
const Signup: React.FC = () => {
  const [step, setStep] = useState(1);
  const [phone, setPhone] = useState("");
  const [userData, setUserData] = useState<UserData>({});

  const handlePhoneContinue = (phoneNumber: string) => {
    setPhone(phoneNumber);
    setStep(2);
  };

  const handleOTPContinue = () => {
    setStep(3);
  };

  const handleProfileContinue = (data: UserData) => {
    setUserData({ ...userData, ...data });
    setStep(4);
  };

  const handleAddressSelection = () => {
    setStep(5);
  };

  const handleComplete = () => {
    console.log("Onboarding complete", { phone, userData });
    alert("Onboarding complete!");
  };

  return (
    <div
      className="max-w-md mx-auto bg-white shadow-xl"
      style={{ height: "100vh" }}
    >
      {step === 1 && <PhoneInputScreen onContinue={handlePhoneContinue} />}
      {step === 2 && (
        <OTPScreen
          phone={phone}
          onContinue={handleOTPContinue}
          onBack={() => setStep(1)}
        />
      )}
      {step === 3 && (
        <CompleteProfileScreen
          onContinue={handleProfileContinue}
          onBack={() => setStep(2)}
        />
      )}
      {step === 4 && (
        <AddressSelectionScreen
          onContinue={handleAddressSelection}
          onBack={() => setStep(3)}
        />
      )}
      {step === 5 && (
        <SetDeliveryAddressScreen
          onComplete={handleComplete}
          onBack={() => setStep(4)}
        />
      )}
    </div>
  );
};

export default Signup;
