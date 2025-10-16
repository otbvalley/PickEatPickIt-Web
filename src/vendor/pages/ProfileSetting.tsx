import { useState } from "react";
import { ArrowLeft, Camera, MapPin, Edit2, Check, X } from "lucide-react";
import { VendorNav } from "../component/VendorNav";

const ProfileSetting = () => {
  const [isOpen, setIsOpen] = useState(true);
  const [editingField, setEditingField] = useState<string | null>(null);

  const [formData, setFormData] = useState({
    restaurantName: "Mr. Moe's Kitchen",
    category: "Restaurant",
    email: "creativeomotayo@gmail.com",
    phone: "+234 906 3287 855",
    fullName: "James Sussy Milburn",
    address: "Shop B4, 1234 Shopping Complex, Along Lorem Way",
    zip: "900104",
    city: "Gwagwalada",
    state: "Abuja",
    deliveryRange: "Abuja - Gwagwalada - Garki Town",
  });

  const [tempValue, setTempValue] = useState("");

  const handleEdit = (field: string, currentValue: string) => {
    setEditingField(field);
    setTempValue(currentValue);
  };

  const handleSave = (field: string) => {
    setFormData({ ...formData, [field]: tempValue });
    setEditingField(null);
  };

  const handleCancel = () => {
    setEditingField(null);
    setTempValue("");
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100">
      <VendorNav />
      {/* Header */}
      <div className="bg-gradient-to-r from-green-600 to-green-700 text-white px-6 py-4 shadow-lg">
        <div className="flex items-center gap-4">
          <button className="p-2 hover:bg-white/20 rounded-lg transition-all">
            <ArrowLeft className="w-6 h-6" />
          </button>
        </div>
      </div>

      <div className="max-w-4xl mx-auto px-4 py-6 pb-24">
        {/* Restaurant Status Toggle */}
        <div className="bg-white rounded-2xl shadow-lg p-6 mb-6">
          <div className="flex items-center justify-between">
            <h3 className="text-lg font-bold text-gray-800">
              Restaurant Status
            </h3>
            <button
              onClick={() => setIsOpen(!isOpen)}
              className={`relative w-16 h-8 rounded-full transition-all duration-300 ${
                isOpen ? "bg-green-600" : "bg-gray-300"
              }`}
            >
              <div
                className={`absolute top-1 w-6 h-6 bg-white rounded-full shadow-md transition-all duration-300 ${
                  isOpen ? "left-9" : "left-1"
                }`}
              />
            </button>
          </div>
          <p className="text-sm text-gray-500 mt-2">
            {isOpen
              ? "Your restaurant is currently open"
              : "Your restaurant is currently closed"}
          </p>
        </div>

        {/* Profile Card */}
        <div className="bg-white rounded-2xl shadow-lg p-6 mb-6">
          <div className="flex items-start gap-4">
            <div className="relative group">
              <div className="w-24 h-24 rounded-full bg-gradient-to-br from-green-400 to-green-600 flex items-center justify-center shadow-lg">
                <Camera className="w-10 h-10 text-white" />
              </div>
              <button className="absolute bottom-0 right-0 w-8 h-8 bg-green-600 rounded-full flex items-center justify-center shadow-lg hover:bg-green-700 transition-all transform hover:scale-110">
                <Edit2 className="w-4 h-4 text-white" />
              </button>
              <p className="text-xs text-center text-gray-600 mt-2">
                Update
                <br />
                Profile Photo
              </p>
            </div>
            <div className="flex-1">
              <h2 className="text-2xl font-bold text-gray-800">
                {formData.restaurantName}
              </h2>
              <p className="text-green-600 font-semibold">
                {formData.category}
              </p>
              <p className="text-sm text-gray-600 mt-1">{formData.email}</p>
              <p className="text-sm font-semibold text-gray-700 mt-1">
                {formData.phone}
              </p>
            </div>
          </div>
        </div>

        {/* Personal Information */}
        <div className="bg-white rounded-2xl shadow-lg p-6 mb-6">
          <h3 className="text-xl font-bold text-green-700 mb-6">
            Personal Information
          </h3>

          {/* Full Name */}
          <div className="mb-4">
            <label className="text-sm text-gray-600 mb-2 block">
              Full Name
            </label>
            <div className="flex gap-2">
              {editingField === "fullName" ? (
                <>
                  <input
                    type="text"
                    value={tempValue}
                    onChange={(e) => setTempValue(e.target.value)}
                    className="flex-1 px-4 py-3 bg-blue-50 border-2 border-blue-300 rounded-xl focus:outline-none focus:border-blue-500 transition-all"
                    autoFocus
                  />
                  <button
                    onClick={() => handleSave("fullName")}
                    className="px-4 py-3 bg-green-600 text-white rounded-xl hover:bg-green-700 transition-all"
                  >
                    <Check className="w-5 h-5" />
                  </button>
                  <button
                    onClick={handleCancel}
                    className="px-4 py-3 bg-red-500 text-white rounded-xl hover:bg-red-600 transition-all"
                  >
                    <X className="w-5 h-5" />
                  </button>
                </>
              ) : (
                <>
                  <div className="flex-1 px-4 py-3 bg-gray-50 rounded-xl text-gray-800 font-medium">
                    {formData.fullName}
                  </div>
                  <button
                    onClick={() => handleEdit("fullName", formData.fullName)}
                    className="px-4 py-3 bg-green-600 text-white rounded-xl hover:bg-green-700 transition-all font-semibold"
                  >
                    Edit
                  </button>
                </>
              )}
            </div>
          </div>

          {/* Email Address */}
          <div className="mb-4">
            <label className="text-sm text-gray-600 mb-2 block">
              Email Address
            </label>
            <div className="flex gap-2">
              {editingField === "email" ? (
                <>
                  <input
                    type="email"
                    value={tempValue}
                    onChange={(e) => setTempValue(e.target.value)}
                    className="flex-1 px-4 py-3 bg-blue-50 border-2 border-blue-300 rounded-xl focus:outline-none focus:border-blue-500 transition-all"
                    autoFocus
                  />
                  <button
                    onClick={() => handleSave("email")}
                    className="px-4 py-3 bg-green-600 text-white rounded-xl hover:bg-green-700 transition-all"
                  >
                    <Check className="w-5 h-5" />
                  </button>
                  <button
                    onClick={handleCancel}
                    className="px-4 py-3 bg-red-500 text-white rounded-xl hover:bg-red-600 transition-all"
                  >
                    <X className="w-5 h-5" />
                  </button>
                </>
              ) : (
                <>
                  <div className="flex-1 px-4 py-3 bg-gray-50 rounded-xl text-gray-800 font-medium">
                    {formData.email}
                  </div>
                  <button
                    onClick={() => handleEdit("email", formData.email)}
                    className="px-4 py-3 bg-green-600 text-white rounded-xl hover:bg-green-700 transition-all font-semibold"
                  >
                    Edit
                  </button>
                </>
              )}
            </div>
          </div>

          {/* Phone Number */}
          <div className="mb-4">
            <label className="text-sm text-gray-600 mb-2 block">
              Phone Number
            </label>
            <div className="flex gap-2">
              {editingField === "phone" ? (
                <>
                  <input
                    type="tel"
                    value={tempValue}
                    onChange={(e) => setTempValue(e.target.value)}
                    className="flex-1 px-4 py-3 bg-blue-50 border-2 border-blue-300 rounded-xl focus:outline-none focus:border-blue-500 transition-all"
                    autoFocus
                  />
                  <button
                    onClick={() => handleSave("phone")}
                    className="px-4 py-3 bg-green-600 text-white rounded-xl hover:bg-green-700 transition-all"
                  >
                    <Check className="w-5 h-5" />
                  </button>
                  <button
                    onClick={handleCancel}
                    className="px-4 py-3 bg-red-500 text-white rounded-xl hover:bg-red-600 transition-all"
                  >
                    <X className="w-5 h-5" />
                  </button>
                </>
              ) : (
                <>
                  <div className="flex-1 px-4 py-3 bg-gray-50 rounded-xl text-gray-800 font-medium">
                    {formData.phone}
                  </div>
                  <button
                    onClick={() => handleEdit("phone", formData.phone)}
                    className="px-4 py-3 bg-green-600 text-white rounded-xl hover:bg-green-700 transition-all font-semibold"
                  >
                    Edit
                  </button>
                </>
              )}
            </div>
          </div>
        </div>

        {/* Address Section */}
        <div className="bg-white rounded-2xl shadow-lg p-6 mb-6">
          <h3 className="text-lg font-bold text-gray-800 mb-4">Address</h3>

          {editingField === "address" ? (
            <div className="mb-4">
              <textarea
                value={tempValue}
                onChange={(e) => setTempValue(e.target.value)}
                className="w-full px-4 py-3 bg-blue-50 border-2 border-blue-300 rounded-xl focus:outline-none focus:border-blue-500 transition-all"
                rows={2}
                autoFocus
              />
              <div className="flex gap-2 mt-2">
                <button
                  onClick={() => handleSave("address")}
                  className="flex-1 px-4 py-3 bg-green-600 text-white rounded-xl hover:bg-green-700 transition-all font-semibold"
                >
                  Save
                </button>
                <button
                  onClick={handleCancel}
                  className="flex-1 px-4 py-3 bg-red-500 text-white rounded-xl hover:bg-red-600 transition-all font-semibold"
                >
                  Cancel
                </button>
              </div>
            </div>
          ) : (
            <div
              onClick={() => handleEdit("address", formData.address)}
              className="text-gray-700 mb-4 p-4 bg-gray-50 rounded-xl cursor-pointer hover:bg-gray-100 transition-all"
            >
              {formData.address}
            </div>
          )}

          <div className="grid grid-cols-3 gap-4">
            <div>
              <label className="text-xs text-gray-600 mb-1 block">Zip</label>
              <input
                type="text"
                value={formData.zip}
                onChange={(e) =>
                  setFormData({ ...formData, zip: e.target.value })
                }
                className="w-full px-3 py-2 bg-gray-50 rounded-lg border-b-2 border-gray-300 focus:border-green-500 focus:outline-none transition-all"
              />
            </div>
            <div>
              <label className="text-xs text-gray-600 mb-1 block">City</label>
              <input
                type="text"
                value={formData.city}
                onChange={(e) =>
                  setFormData({ ...formData, city: e.target.value })
                }
                className="w-full px-3 py-2 bg-gray-50 rounded-lg border-b-2 border-gray-300 focus:border-green-500 focus:outline-none transition-all"
              />
            </div>
            <div>
              <label className="text-xs text-gray-600 mb-1 block">State</label>
              <input
                type="text"
                value={formData.state}
                onChange={(e) =>
                  setFormData({ ...formData, state: e.target.value })
                }
                className="w-full px-3 py-2 bg-gray-50 rounded-lg border-b-2 border-gray-300 focus:border-green-500 focus:outline-none transition-all"
              />
            </div>
          </div>
        </div>

        {/* Delivery Range */}
        <div className="bg-white rounded-2xl shadow-lg p-6 mb-6">
          <div className="flex items-center gap-3 mb-4">
            <div className="w-10 h-10 bg-green-100 rounded-full flex items-center justify-center">
              <MapPin className="w-6 h-6 text-green-600" />
            </div>
            <div>
              <h3 className="text-lg font-bold text-gray-800">
                Delivery Range
              </h3>
              <p className="text-sm text-gray-600">{formData.deliveryRange}</p>
            </div>
          </div>

          {/* Interactive Map */}
          <div className="relative rounded-xl overflow-hidden shadow-md h-64 bg-gradient-to-br from-green-100 to-blue-100">
            <iframe
              width="100%"
              height="100%"
              style={{ border: 0 }}
              loading="lazy"
              allowFullScreen
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d126182.48419177555!2d7.314454!3d9.073676!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x104e0a5e32c9a903%3A0x9c9b57a5e7c0f5d6!2sAbuja%2C%20Nigeria!5e0!3m2!1sen!2sng!4v1234567890"
            />
            {/* Map Overlay Marker */}
            <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-full">
              <div className="w-12 h-12 bg-green-600 rounded-full shadow-lg flex items-center justify-center animate-bounce">
                <MapPin className="w-8 h-8 text-white fill-white" />
              </div>
            </div>
          </div>
        </div>

        {/* Save Button */}
        <button className="w-full py-4 bg-gradient-to-r from-green-600 to-green-700 hover:from-green-700 hover:to-green-800 text-white rounded-2xl font-bold text-lg shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-[1.02]">
          Save Changes
        </button>
      </div>
    </div>
  );
};

export default ProfileSetting;
