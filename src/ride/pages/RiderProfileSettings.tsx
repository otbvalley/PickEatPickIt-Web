import { useState, useEffect, useRef } from "react";
import { ArrowLeft, Camera, MapPin, X, Check } from "lucide-react";
import { Link } from "react-router-dom";

interface ProfileData {
  fullName: string;
  email: string;
  phone: string;
  zip: string;
  city: string;
  state: string;
  address: string;
  profileImage: string;
}

type EditField = "fullName" | "email" | "phone" | "address" | null;

export default function RiderProfileSettings() {
  const [isActive, setIsActive] = useState(true);
  const [profileData, setProfileData] = useState<ProfileData>({
    fullName: "James Sussy Milburn",
    email: "creativomotayo@gmail.com",
    phone: "+234 906 3287 855",
    zip: "900104",
    city: "Gwagwalada",
    state: "Abuja",
    address: "Shop B4, 1234 Shopping Complex, Along Lorem Way",
    profileImage: "",
  });

  const [editingField, setEditingField] = useState<EditField>(null);
  const [tempValue, setTempValue] = useState("");
  const [isVisible, setIsVisible] = useState(false);
  const [isSaving, setIsSaving] = useState(false);
  const fileInputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const handleEdit = (field: EditField) => {
    if (field) {
      setEditingField(field);
      setTempValue(profileData[field]);
    }
  };

  const handleSaveField = (field: EditField) => {
    if (field) {
      setProfileData({ ...profileData, [field]: tempValue });
      setEditingField(null);
    }
  };

  const handleCancelEdit = () => {
    setEditingField(null);
    setTempValue("");
  };

  const handleImageUpload = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setProfileData({
          ...profileData,
          profileImage: reader.result as string,
        });
      };
      reader.readAsDataURL(file);
    }
  };

  const handleSave = () => {
    setIsSaving(true);
    setTimeout(() => {
      setIsSaving(false);
      // Show success message or handle save logic
    }, 1500);
  };

  const renderEditableField = (
    label: string,
    field: EditField,
    value: string,
    type: string = "text"
  ) => {
    const isEditing = editingField === field;

    return (
      <div className="bg-white rounded-2xl p-4 shadow-sm hover:shadow-md transition-all duration-300">
        <div className="flex items-center justify-between gap-3">
          <div className="flex-1">
            <label className="text-xs text-gray-500 mb-1 block">{label}</label>
            {isEditing ? (
              <input
                type={type}
                value={tempValue}
                onChange={(e) => setTempValue(e.target.value)}
                className="w-full text-sm font-semibold text-gray-900 border-b-2 border-emerald-500 focus:outline-none focus:border-emerald-600 pb-1 transition-colors"
                autoFocus
              />
            ) : (
              <p className="text-sm font-semibold text-gray-900">{value}</p>
            )}
          </div>
          <div className="flex items-center gap-2">
            {isEditing ? (
              <>
                <button
                  onClick={() => handleSaveField(field)}
                  className="w-8 h-8 bg-gradient-to-r from-emerald-500 to-emerald-600 text-white rounded-lg hover:shadow-lg hover:scale-110 transition-all duration-300 flex items-center justify-center"
                >
                  <Check className="w-4 h-4" />
                </button>
                <button
                  onClick={handleCancelEdit}
                  className="w-8 h-8 bg-gray-200 text-gray-700 rounded-lg hover:bg-gray-300 hover:scale-110 transition-all duration-300 flex items-center justify-center"
                >
                  <X className="w-4 h-4" />
                </button>
              </>
            ) : (
              <button
                onClick={() => handleEdit(field)}
                className="px-4 py-2 bg-gradient-to-r from-emerald-500 to-emerald-600 text-white text-xs font-bold rounded-lg hover:shadow-lg hover:scale-105 transition-all duration-300"
              >
                Edit
              </button>
            )}
          </div>
        </div>
      </div>
    );
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 via-white to-emerald-50">
      <input
        ref={fileInputRef}
        type="file"
        accept="image/*"
        onChange={handleImageUpload}
        className="hidden"
      />

      {/* Header */}
      <div className="bg-white shadow-sm sticky top-0 z-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between py-4">
            <Link to="/rider-profile">
              <button className="w-10 h-10 rounded-full bg-gray-100 hover:bg-gray-200 flex items-center justify-center transition-all duration-300 hover:scale-110 active:scale-95">
                <ArrowLeft className="w-5 h-5 text-gray-700" />
              </button>
            </Link>
            <div className="flex-1" />
          </div>
        </div>
      </div>

      {/* Content */}
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-6 pb-24">
        {/* Active Status */}
        <div
          className={`transform transition-all duration-500 ${
            isVisible ? "translate-y-0 opacity-100" : "translate-y-4 opacity-0"
          }`}
        >
          <div className="flex items-center justify-between mb-6">
            <span className="text-emerald-600 font-bold text-base">
              Active Status
            </span>
            <button
              onClick={() => setIsActive(!isActive)}
              className={`relative w-14 h-8 rounded-full transition-all duration-300 ${
                isActive
                  ? "bg-gradient-to-r from-emerald-500 to-emerald-600"
                  : "bg-gray-300"
              }`}
            >
              <span
                className={`absolute top-1 left-1 w-6 h-6 bg-white rounded-full shadow-lg transition-transform duration-300 ${
                  isActive ? "translate-x-6" : "translate-x-0"
                }`}
              />
            </button>
          </div>
        </div>

        {/* Profile Card */}
        <div
          className={`transform transition-all duration-500 delay-100 ${
            isVisible ? "translate-y-0 opacity-100" : "translate-y-4 opacity-0"
          }`}
        >
          <div className="bg-white rounded-3xl p-6 shadow-lg mb-6 hover:shadow-xl transition-all duration-300">
            <div className="flex flex-col sm:flex-row items-center gap-6">
              {/* Profile Photo */}
              <div className="relative group">
                <div className="w-24 h-24 rounded-full bg-gradient-to-br from-emerald-400 to-emerald-600 flex items-center justify-center shadow-lg overflow-hidden">
                  {profileData.profileImage ? (
                    <img
                      src={profileData.profileImage}
                      alt="Profile"
                      className="w-full h-full object-cover"
                    />
                  ) : (
                    <Camera className="w-10 h-10 text-white" />
                  )}
                </div>
                <button
                  onClick={() => fileInputRef.current?.click()}
                  className="absolute bottom-0 right-0 w-8 h-8 bg-white rounded-full shadow-lg flex items-center justify-center border-2 border-emerald-500 group-hover:scale-110 transition-transform duration-300"
                >
                  <Camera className="w-4 h-4 text-emerald-600" />
                </button>
                <div className="text-center mt-2">
                  <p className="text-xs font-semibold text-gray-700">Update</p>
                  <p className="text-xs text-gray-500">Profile Photo</p>
                </div>
              </div>

              {/* Profile Info */}
              <div className="flex-1 text-center sm:text-left">
                <h2 className="text-xl font-bold text-gray-900 mb-1">
                  Mr. Bright Rider
                </h2>
                <p className="text-sm text-gray-600 mb-1">
                  {profileData.email}
                </p>
                <p className="text-sm font-semibold text-emerald-600">
                  {profileData.phone}
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Personal Information */}
        <div
          className={`transform transition-all duration-500 delay-200 ${
            isVisible ? "translate-y-0 opacity-100" : "translate-y-4 opacity-0"
          }`}
        >
          <h3 className="text-emerald-600 font-bold text-lg mb-4">
            Personal information
          </h3>

          <div className="space-y-4">
            {renderEditableField("Full Name", "fullName", profileData.fullName)}
            {renderEditableField(
              "Email Address",
              "email",
              profileData.email,
              "email"
            )}
            {renderEditableField(
              "Phone Number",
              "phone",
              profileData.phone,
              "tel"
            )}
          </div>
        </div>

        {/* Address Section */}
        <div
          className={`mt-6 transform transition-all duration-500 delay-300 ${
            isVisible ? "translate-y-0 opacity-100" : "translate-y-4 opacity-0"
          }`}
        >
          <div className="bg-white rounded-2xl p-4 shadow-sm hover:shadow-md transition-all duration-300 mb-4">
            <label className="text-xs text-emerald-600 font-bold mb-2 block">
              Address
            </label>
            {editingField === "address" ? (
              <div className="space-y-2">
                <textarea
                  value={tempValue}
                  onChange={(e) => setTempValue(e.target.value)}
                  className="w-full text-sm text-gray-700 border-2 border-emerald-500 rounded-lg p-2 focus:outline-none focus:border-emerald-600 transition-colors resize-none"
                  rows={2}
                  autoFocus
                />
                <div className="flex items-center gap-2 justify-end">
                  <button
                    onClick={() => handleSaveField("address")}
                    className="px-4 py-2 bg-gradient-to-r from-emerald-500 to-emerald-600 text-white text-xs font-bold rounded-lg hover:shadow-lg hover:scale-105 transition-all duration-300"
                  >
                    Save
                  </button>
                  <button
                    onClick={handleCancelEdit}
                    className="px-4 py-2 bg-gray-200 text-gray-700 text-xs font-bold rounded-lg hover:bg-gray-300 hover:scale-105 transition-all duration-300"
                  >
                    Cancel
                  </button>
                </div>
              </div>
            ) : (
              <div className="flex items-start justify-between gap-2">
                <p className="text-sm text-gray-700 flex-1">
                  {profileData.address}
                </p>
                <button
                  onClick={() => handleEdit("address")}
                  className="px-3 py-1 bg-gradient-to-r from-emerald-500 to-emerald-600 text-white text-xs font-bold rounded-lg hover:shadow-lg hover:scale-105 transition-all duration-300 flex-shrink-0"
                >
                  Edit
                </button>
              </div>
            )}
          </div>

          {/* Zip, City, State */}
          <div className="grid grid-cols-3 gap-3 mb-4">
            <div className="bg-white rounded-2xl p-3 shadow-sm hover:shadow-md transition-all duration-300">
              <label className="text-xs text-emerald-600 font-bold mb-1 block">
                Zip
              </label>
              <input
                type="text"
                value={profileData.zip}
                onChange={(e) =>
                  setProfileData({ ...profileData, zip: e.target.value })
                }
                className="text-sm font-semibold text-gray-900 w-full focus:outline-none border-b-2 border-transparent focus:border-emerald-500 transition-colors"
              />
            </div>
            <div className="bg-white rounded-2xl p-3 shadow-sm hover:shadow-md transition-all duration-300">
              <label className="text-xs text-emerald-600 font-bold mb-1 block">
                City
              </label>
              <input
                type="text"
                value={profileData.city}
                onChange={(e) =>
                  setProfileData({ ...profileData, city: e.target.value })
                }
                className="text-sm font-semibold text-gray-900 w-full focus:outline-none border-b-2 border-transparent focus:border-emerald-500 transition-colors"
              />
            </div>
            <div className="bg-white rounded-2xl p-3 shadow-sm hover:shadow-md transition-all duration-300">
              <label className="text-xs text-emerald-600 font-bold mb-1 block">
                State
              </label>
              <input
                type="text"
                value={profileData.state}
                onChange={(e) =>
                  setProfileData({ ...profileData, state: e.target.value })
                }
                className="text-sm font-semibold text-gray-900 w-full focus:outline-none border-b-2 border-transparent focus:border-emerald-500 transition-colors"
              />
            </div>
          </div>
        </div>

        {/* Delivery Range */}
        <div
          className={`transform transition-all duration-500 delay-400 ${
            isVisible ? "translate-y-0 opacity-100" : "translate-y-4 opacity-0"
          }`}
        >
          <div className="bg-white rounded-2xl p-4 shadow-sm hover:shadow-md transition-all duration-300 mb-4">
            <div className="flex items-start gap-3 mb-3">
              <div className="w-10 h-10 rounded-full bg-gradient-to-br from-emerald-500 to-emerald-600 flex items-center justify-center shadow-lg">
                <MapPin className="w-5 h-5 text-white" />
              </div>
              <div>
                <h4 className="text-base font-bold text-gray-900">
                  Delivery Range
                </h4>
                <p className="text-xs text-gray-600">
                  Abuja - Gwagwalada - Garki Town
                </p>
              </div>
            </div>

            {/* Map Placeholder */}
            <div className="relative h-48 bg-gray-100 rounded-xl overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-br from-emerald-100/50 to-blue-100/50">
                <div
                  className="absolute inset-0"
                  style={{
                    backgroundImage:
                      "linear-gradient(rgba(0,0,0,0.05) 1px, transparent 1px), linear-gradient(90deg, rgba(0,0,0,0.05) 1px, transparent 1px)",
                    backgroundSize: "20px 20px",
                  }}
                />

                <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
                  <div className="relative">
                    <div className="w-12 h-12 rounded-full bg-gradient-to-br from-emerald-500 to-emerald-600 shadow-lg flex items-center justify-center animate-pulse">
                      <MapPin className="w-6 h-6 text-white" />
                    </div>
                    <div className="absolute inset-0 rounded-full bg-emerald-400 animate-ping opacity-75" />
                  </div>
                </div>

                <div className="absolute top-4 left-4 bg-white/90 backdrop-blur-sm px-3 py-1.5 rounded-full shadow-md">
                  <p className="text-xs font-semibold text-gray-700">
                    University of Abuja
                  </p>
                </div>
                <div className="absolute bottom-4 right-4 bg-white/90 backdrop-blur-sm px-3 py-1.5 rounded-full shadow-md">
                  <p className="text-xs font-semibold text-gray-700">
                    Gwagwalada
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Fixed Save Button */}
      <div className="fixed bottom-0 left-0 right-0 bg-white/95 backdrop-blur-lg border-t border-gray-200 shadow-2xl">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <button
            onClick={handleSave}
            disabled={isSaving}
            className={`w-full py-4 rounded-2xl font-bold text-white text-base shadow-xl transition-all duration-300 ${
              isSaving
                ? "bg-gradient-to-r from-emerald-400 to-emerald-500 scale-95"
                : "bg-gradient-to-r from-emerald-500 to-emerald-600 hover:from-emerald-600 hover:to-emerald-700 hover:shadow-2xl hover:scale-[1.02] active:scale-95"
            }`}
          >
            {isSaving ? (
              <span className="flex items-center justify-center gap-2">
                <svg
                  className="animate-spin h-5 w-5 text-white"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                >
                  <circle
                    className="opacity-25"
                    cx="12"
                    cy="12"
                    r="10"
                    stroke="currentColor"
                    strokeWidth="4"
                  ></circle>
                  <path
                    className="opacity-75"
                    fill="currentColor"
                    d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                  ></path>
                </svg>
                Saving...
              </span>
            ) : (
              "Save"
            )}
          </button>
        </div>
      </div>
    </div>
  );
}
