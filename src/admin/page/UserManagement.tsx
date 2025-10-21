import { useState } from "react";
import {
  X,
  ChevronRight,
  Search,
  Filter,
  Bell,
  Menu,
  ChevronLeft,
} from "lucide-react";

interface User {
  id: number;
  name: string;
  type: "Client" | "Vendor" | "Rider";
  dateJoined: string;
  isSuspended: boolean;
  email: string;
  phone: string;
  address: string;
  zip: string;
  city: string;
  state: string;
  fullName: string;
  avatar?: string;
}

type ModalType =
  | "details"
  | "suspend"
  | "delete"
  | "suspendSuccess"
  | "deleteSuccess"
  | null;
type ViewType = "list" | "profile";

const UserManagement = () => {
  const [activeTab, setActiveTab] = useState<
    "all" | "client" | "vendor" | "rider"
  >("all");
  const [showSuspended, setShowSuspended] = useState(false);
  const [selectedUser, setSelectedUser] = useState<User | null>(null);
  const [modalType, setModalType] = useState<ModalType>(null);
  const [searchQuery, setSearchQuery] = useState("");
  const [currentView, setCurrentView] = useState<ViewType>("list");
  const [editingField, setEditingField] = useState<string | null>(null);
  const [editValues, setEditValues] = useState<Partial<User>>({});

  const [users, setUsers] = useState<User[]>([
    {
      id: 1,
      name: "Sussy James",
      fullName: "James Sussy Milburn",
      type: "Client",
      dateJoined: "Sat, May 25, 2024 · 9:38pm",
      isSuspended: false,
      email: "sussyjames@outlook.com",
      phone: "+234 906 3287 855",
      address: "Shop B4, 1234 Shopping Complex, Along Lorem Way",
      zip: "900104",
      city: "Gwagwalada",
      state: "Abuja",
      avatar:
        "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=150&h=150&fit=crop",
    },
    {
      id: 2,
      name: "Creative Omotayo",
      fullName: "Omotayo Creative",
      type: "Vendor",
      dateJoined: "Sat, May 25, 2024 · 9:38pm",
      isSuspended: false,
      email: "vendor@gmail.com",
      phone: "+234 906 3287 855",
      address: "Shop A1, Main Street",
      zip: "900105",
      city: "Lagos",
      state: "Lagos",
    },
    {
      id: 3,
      name: "Creative Omotayo",
      fullName: "Omotayo Creative",
      type: "Rider",
      dateJoined: "Sat, May 25, 2024 · 9:38pm",
      isSuspended: false,
      email: "rider1@gmail.com",
      phone: "+234 906 3287 855",
      address: "Street 5",
      zip: "900106",
      city: "Abuja",
      state: "FCT",
    },
    {
      id: 4,
      name: "Creative Omotayo",
      fullName: "Omotayo Creative",
      type: "Rider",
      dateJoined: "Sat, May 25, 2024 · 9:38pm",
      isSuspended: false,
      email: "rider2@gmail.com",
      phone: "+234 906 3287 855",
      address: "Street 6",
      zip: "900107",
      city: "Abuja",
      state: "FCT",
    },
    {
      id: 5,
      name: "Creative Omotayo",
      fullName: "Omotayo Creative",
      type: "Client",
      dateJoined: "Sat, May 25, 2024 · 9:38pm",
      isSuspended: false,
      email: "client2@gmail.com",
      phone: "+234 906 3287 855",
      address: "Street 7",
      zip: "900108",
      city: "Lagos",
      state: "Lagos",
    },
    {
      id: 6,
      name: "Creative Omotayo",
      fullName: "Omotayo Creative",
      type: "Client",
      dateJoined: "Sat, May 25, 2024 · 9:38pm",
      isSuspended: false,
      email: "client3@gmail.com",
      phone: "+234 906 3287 855",
      address: "Street 8",
      zip: "900109",
      city: "Abuja",
      state: "FCT",
    },
    {
      id: 7,
      name: "Creative Omotayo",
      fullName: "Omotayo Creative",
      type: "Vendor",
      dateJoined: "Sat, May 25, 2024 · 9:38pm",
      isSuspended: false,
      email: "vendor2@gmail.com",
      phone: "+234 906 3287 855",
      address: "Street 9",
      zip: "900110",
      city: "Lagos",
      state: "Lagos",
    },
  ]);

  const filteredUsers = users.filter((user) => {
    const matchesTab =
      activeTab === "all" || user.type.toLowerCase() === activeTab;
    const matchesSuspended = showSuspended
      ? user.isSuspended
      : !user.isSuspended;
    const matchesSearch = user.name
      .toLowerCase()
      .includes(searchQuery.toLowerCase());
    return matchesTab && matchesSuspended && matchesSearch;
  });

  const suspendedCount = users.filter((u) => u.isSuspended).length;

  const handleUserClick = (user: User) => {
    setSelectedUser(user);
    setModalType("details");
  };

  const handleSuspend = () => {
    if (selectedUser) {
      setUsers(
        users.map((u) =>
          u.id === selectedUser.id ? { ...u, isSuspended: true } : u
        )
      );
      setModalType("suspendSuccess");
    }
  };

  // const handleDelete = () => {
  //   if (selectedUser) {
  //     setUsers(users.filter(u => u.id !== selectedUser.id));
  //     setModalType('deleteSuccess');
  //   }
  // };

  const handleDeactivate = () => {
    if (selectedUser) {
      setUsers(users.filter((u) => u.id !== selectedUser.id));
      setModalType("deleteSuccess");
    }
  };

  const closeModal = () => {
    setModalType(null);
    setSelectedUser(null);
  };

  // const handleViewProfile = () => {
  //   setCurrentView('profile');
  //   setModalType(null);
  //   if (selectedUser) {
  //     setEditValues({
  //       fullName: selectedUser.fullName,
  //       email: selectedUser.email,
  //       phone: selectedUser.phone,
  //       address: selectedUser.address,
  //       zip: selectedUser.zip,
  //       city: selectedUser.city,
  //       state: selectedUser.state
  //     });
  //   }
  // };

  const handleBackToList = () => {
    setCurrentView("list");
    setSelectedUser(null);
    setEditingField(null);
  };

  const handleEditField = (field: string) => {
    setEditingField(field);
  };

  const handleSaveField = () => {
    if (selectedUser) {
      const updatedUsers = users.map((u) =>
        u.id === selectedUser.id ? { ...u, ...editValues } : u
      );
      setUsers(updatedUsers);
      setSelectedUser({ ...selectedUser, ...editValues });
    }
    setEditingField(null);
  };

  const handleDeleteProfile = () => {
    if (selectedUser) {
      setUsers(users.filter((u) => u.id !== selectedUser.id));
      setCurrentView("list");
      setSelectedUser(null);
    }
  };

  const getTypeColor = (type: string) => {
    switch (type) {
      case "Client":
        return "text-green-600";
      case "Vendor":
        return "text-green-700";
      case "Rider":
        return "text-green-800";
      default:
        return "text-gray-600";
    }
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Profile View */}
      {currentView === "profile" && selectedUser && (
        <div className="min-h-screen bg-gray-50 animate-fadeIn">
          {/* Header */}
          <div className="bg-green-600 text-white px-4 py-3 flex items-center justify-between sticky top-0 z-40 shadow-lg">
            <button
              onClick={handleBackToList}
              className="p-1 hover:bg-green-700 rounded-full transition-colors"
            >
              <ChevronLeft className="w-6 h-6" />
            </button>
            <h1 className="text-lg font-semibold">User management</h1>
            <Bell className="w-6 h-6" />
          </div>

          {/* Profile Content */}
          <div className="px-4 py-6">
            {/* Avatar and Name */}
            <div className="flex flex-col items-center mb-6 animate-slideUp">
              <div className="w-32 h-32 rounded-full overflow-hidden mb-4 border-4 border-white shadow-lg">
                {selectedUser.avatar ? (
                  <img
                    src={selectedUser.avatar}
                    alt={selectedUser.name}
                    className="w-full h-full object-cover"
                  />
                ) : (
                  <div className="w-full h-full bg-gradient-to-br from-green-400 to-green-600 flex items-center justify-center text-white text-4xl font-bold">
                    {selectedUser.name.charAt(0)}
                  </div>
                )}
              </div>
              <h2 className="text-2xl font-bold text-gray-900">
                {selectedUser.name}
              </h2>
              <p className="text-green-600 font-medium">{selectedUser.email}</p>
              <p className="text-green-700 font-semibold mt-1">
                {selectedUser.phone}
              </p>
            </div>

            {/* Personal Information Section */}
            <div className="mb-6">
              <h3 className="text-green-700 font-bold text-lg mb-4">
                Personal information
              </h3>

              {/* Full Name */}
              <div className="bg-white rounded-xl p-4 mb-3 shadow-sm hover:shadow-md transition-shadow">
                <div className="flex justify-between items-start">
                  <div className="flex-1">
                    <p className="text-gray-500 text-sm mb-1">Full Name</p>
                    {editingField === "fullName" ? (
                      <input
                        type="text"
                        value={editValues.fullName || ""}
                        onChange={(e) =>
                          setEditValues({
                            ...editValues,
                            fullName: e.target.value,
                          })
                        }
                        className="w-full text-gray-900 font-medium border-b-2 border-green-500 focus:outline-none pb-1"
                        autoFocus
                      />
                    ) : (
                      <p className="text-gray-900 font-medium">
                        {selectedUser.fullName}
                      </p>
                    )}
                  </div>
                  <button
                    onClick={() =>
                      editingField === "fullName"
                        ? handleSaveField()
                        : handleEditField("fullName")
                    }
                    className="ml-4 px-4 py-1.5 bg-green-600 text-white text-sm rounded-lg hover:bg-green-700 transition-all transform hover:scale-105"
                  >
                    {editingField === "fullName" ? "Save" : "Edit"}
                  </button>
                </div>
              </div>

              {/* Email Address */}
              <div className="bg-white rounded-xl p-4 mb-3 shadow-sm hover:shadow-md transition-shadow">
                <div className="flex justify-between items-start">
                  <div className="flex-1">
                    <p className="text-gray-500 text-sm mb-1">Email Address</p>
                    {editingField === "email" ? (
                      <input
                        type="email"
                        value={editValues.email || ""}
                        onChange={(e) =>
                          setEditValues({
                            ...editValues,
                            email: e.target.value,
                          })
                        }
                        className="w-full text-gray-900 font-medium border-b-2 border-green-500 focus:outline-none pb-1"
                        autoFocus
                      />
                    ) : (
                      <p className="text-gray-900 font-medium">
                        {selectedUser.email}
                      </p>
                    )}
                  </div>
                  <button
                    onClick={() =>
                      editingField === "email"
                        ? handleSaveField()
                        : handleEditField("email")
                    }
                    className="ml-4 px-4 py-1.5 bg-green-600 text-white text-sm rounded-lg hover:bg-green-700 transition-all transform hover:scale-105"
                  >
                    {editingField === "email" ? "Save" : "Edit"}
                  </button>
                </div>
              </div>

              {/* Phone Number */}
              <div className="bg-white rounded-xl p-4 mb-3 shadow-sm hover:shadow-md transition-shadow">
                <div className="flex justify-between items-start">
                  <div className="flex-1">
                    <p className="text-gray-500 text-sm mb-1">Phone Number</p>
                    {editingField === "phone" ? (
                      <input
                        type="tel"
                        value={editValues.phone || ""}
                        onChange={(e) =>
                          setEditValues({
                            ...editValues,
                            phone: e.target.value,
                          })
                        }
                        className="w-full text-gray-900 font-medium border-b-2 border-green-500 focus:outline-none pb-1"
                        autoFocus
                      />
                    ) : (
                      <p className="text-gray-900 font-medium">
                        {selectedUser.phone}
                      </p>
                    )}
                  </div>
                  <button
                    onClick={() =>
                      editingField === "phone"
                        ? handleSaveField()
                        : handleEditField("phone")
                    }
                    className="ml-4 px-4 py-1.5 bg-green-600 text-white text-sm rounded-lg hover:bg-green-700 transition-all transform hover:scale-105"
                  >
                    {editingField === "phone" ? "Save" : "Edit"}
                  </button>
                </div>
              </div>
            </div>

            {/* Address Section */}
            <div className="mb-6">
              <h3 className="text-green-700 font-bold text-lg mb-4">Address</h3>

              {/* Street Address */}
              <div className="bg-white rounded-xl p-4 mb-3 shadow-sm hover:shadow-md transition-shadow">
                {editingField === "address" ? (
                  <textarea
                    value={editValues.address || ""}
                    onChange={(e) =>
                      setEditValues({ ...editValues, address: e.target.value })
                    }
                    className="w-full text-gray-900 border-b-2 border-green-500 focus:outline-none pb-1 resize-none"
                    rows={2}
                    autoFocus
                  />
                ) : (
                  <p className="text-gray-700">{selectedUser.address}</p>
                )}
                {editingField === "address" && (
                  <button
                    onClick={() => handleSaveField()}
                    className="mt-2 px-4 py-1.5 bg-green-600 text-white text-sm rounded-lg hover:bg-green-700 transition-all transform hover:scale-105"
                  >
                    Save
                  </button>
                )}
                {editingField !== "address" && (
                  <button
                    onClick={() => handleEditField("address")}
                    className="mt-2 text-green-600 text-sm font-medium hover:underline"
                  >
                    Edit Address
                  </button>
                )}
              </div>

              {/* Zip, City, State */}
              <div className="bg-white rounded-xl p-4 shadow-sm">
                <div className="grid grid-cols-3 gap-4">
                  <div>
                    <p className="text-gray-500 text-sm mb-1">Zip</p>
                    {editingField === "zip" ? (
                      <input
                        type="text"
                        value={editValues.zip || ""}
                        onChange={(e) =>
                          setEditValues({ ...editValues, zip: e.target.value })
                        }
                        className="w-full text-gray-900 border-b-2 border-green-500 focus:outline-none"
                        autoFocus
                        onBlur={() => handleSaveField()}
                      />
                    ) : (
                      <p
                        onClick={() => handleEditField("zip")}
                        className="text-gray-900 cursor-pointer hover:text-green-600"
                      >
                        {selectedUser.zip}
                      </p>
                    )}
                  </div>
                  <div>
                    <p className="text-gray-500 text-sm mb-1">City</p>
                    {editingField === "city" ? (
                      <input
                        type="text"
                        value={editValues.city || ""}
                        onChange={(e) =>
                          setEditValues({ ...editValues, city: e.target.value })
                        }
                        className="w-full text-gray-900 border-b-2 border-green-500 focus:outline-none"
                        autoFocus
                        onBlur={() => handleSaveField()}
                      />
                    ) : (
                      <p
                        onClick={() => handleEditField("city")}
                        className="text-gray-900 cursor-pointer hover:text-green-600"
                      >
                        {selectedUser.city}
                      </p>
                    )}
                  </div>
                  <div>
                    <p className="text-gray-500 text-sm mb-1">State</p>
                    {editingField === "state" ? (
                      <input
                        type="text"
                        value={editValues.state || ""}
                        onChange={(e) =>
                          setEditValues({
                            ...editValues,
                            state: e.target.value,
                          })
                        }
                        className="w-full text-gray-900 border-b-2 border-green-500 focus:outline-none"
                        autoFocus
                        onBlur={() => handleSaveField()}
                      />
                    ) : (
                      <p
                        onClick={() => handleEditField("state")}
                        className="text-gray-900 cursor-pointer hover:text-green-600"
                      >
                        {selectedUser.state}
                      </p>
                    )}
                  </div>
                </div>
              </div>
            </div>

            {/* Delete Profile Button */}
            <button
              onClick={handleDeleteProfile}
              className="w-full py-4 bg-red-600 text-white rounded-xl font-semibold hover:bg-red-700 transition-all transform hover:scale-[1.02] active:scale-[0.98] shadow-lg mb-6"
            >
              Delete profile
            </button>
          </div>
        </div>
      )}

      {/* List View */}
      {currentView === "list" && (
        <div className="animate-fadeIn">
          {/* Header */}
          <div className="bg-green-600 text-white px-4 py-3 flex items-center justify-between sticky top-0 z-40 shadow-lg">
            {showSuspended && (
              <button
                onClick={() => setShowSuspended(false)}
                className="p-1 hover:bg-green-700 rounded-full transition-colors"
              >
                <ChevronLeft className="w-6 h-6" />
              </button>
            )}
            {!showSuspended && <Menu className="w-6 h-6" />}
            <h1 className="text-lg font-semibold">
              {showSuspended ? "Suspended accounts" : "User management"}
            </h1>
            <Bell className="w-6 h-6" />
          </div>

          {/* Search Bar */}
          <div className="px-4 py-4 bg-white shadow-sm">
            <div className="flex gap-2">
              <div className="flex-1 relative">
                <Search className="w-5 h-5 absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
                <input
                  type="text"
                  placeholder="Search"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="w-full pl-10 pr-4 py-2.5 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500 transition-all"
                />
              </div>
              <button className="px-4 py-2.5 border border-gray-300 rounded-lg flex items-center gap-2 hover:bg-gray-50 transition-colors">
                <span className="text-green-600 font-medium">Filter</span>
                <Filter className="w-4 h-4 text-green-600" />
              </button>
            </div>
          </div>

          {/* Tabs */}
          {!showSuspended && (
            <div className="px-4 py-4 flex gap-2 overflow-x-auto bg-white">
              <button
                onClick={() => setActiveTab("all")}
                className={`px-6 py-2 rounded-full font-medium whitespace-nowrap transition-all transform hover:scale-105 ${
                  activeTab === "all"
                    ? "bg-green-600 text-white shadow-lg"
                    : "bg-gray-100 text-gray-600 hover:bg-gray-200"
                }`}
              >
                ✓ All users
              </button>
              <button
                onClick={() => setActiveTab("client")}
                className={`px-6 py-2 rounded-full font-medium whitespace-nowrap transition-all transform hover:scale-105 ${
                  activeTab === "client"
                    ? "bg-green-600 text-white shadow-lg"
                    : "bg-gray-100 text-gray-600 hover:bg-gray-200"
                }`}
              >
                Client
              </button>
              <button
                onClick={() => setActiveTab("vendor")}
                className={`px-6 py-2 rounded-full font-medium whitespace-nowrap transition-all transform hover:scale-105 ${
                  activeTab === "vendor"
                    ? "bg-green-600 text-white shadow-lg"
                    : "bg-gray-100 text-gray-600 hover:bg-gray-200"
                }`}
              >
                Vendors
              </button>
              <button
                onClick={() => setActiveTab("rider")}
                className={`px-6 py-2 rounded-full font-medium whitespace-nowrap transition-all transform hover:scale-105 ${
                  activeTab === "rider"
                    ? "bg-green-600 text-white shadow-lg"
                    : "bg-gray-100 text-gray-600 hover:bg-gray-200"
                }`}
              >
                Riders
              </button>
            </div>
          )}

          {/* Suspended Account Button */}
          {!showSuspended && (
            <div className="px-4 py-3 bg-white border-t border-b border-gray-200">
              <button
                onClick={() => setShowSuspended(true)}
                className="w-full flex items-center justify-between py-2 hover:bg-gray-50 rounded-lg transition-colors px-2"
              >
                <span className="text-gray-700 font-medium">
                  Suspended account{" "}
                  <span className="text-gray-500">({suspendedCount})</span>
                </span>
                <ChevronRight className="w-5 h-5 text-gray-400" />
              </button>
            </div>
          )}

          {/* Suspended Tabs */}
          {showSuspended && (
            <div className="px-4 py-4 flex gap-2 overflow-x-auto bg-white">
              <button className="px-6 py-2 rounded-full font-medium whitespace-nowrap bg-green-600 text-white shadow-lg">
                ✓ All
              </button>
              <button className="px-6 py-2 rounded-full font-medium whitespace-nowrap bg-gray-100 text-gray-600 hover:bg-gray-200 transition-all">
                Vendors
              </button>
              <button className="px-6 py-2 rounded-full font-medium whitespace-nowrap bg-gray-100 text-gray-600 hover:bg-gray-200 transition-all">
                Riders
              </button>
            </div>
          )}

          {/* User List */}
          <div className="px-4 py-2">
            {filteredUsers.map((user, index) => (
              <div
                key={user.id}
                onClick={() => handleUserClick(user)}
                className="bg-white border-b border-gray-200 py-4 px-4 flex items-center justify-between hover:bg-gray-50 transition-all cursor-pointer transform hover:scale-[1.01] active:scale-[0.99]"
                style={{ animationDelay: `${index * 50}ms` }}
              >
                <div className="flex items-center gap-3">
                  {showSuspended && (
                    <div className="w-3 h-3 bg-red-500 rounded-full animate-pulse"></div>
                  )}
                  {!showSuspended && (
                    <div className="w-10 h-10 bg-gray-200 rounded-full"></div>
                  )}
                  <div>
                    <p className="text-gray-700 font-medium">
                      {index + 1}. {user.name}
                    </p>
                  </div>
                </div>
                <div className="flex items-center gap-2">
                  <span className={`font-semibold ${getTypeColor(user.type)}`}>
                    {user.type}
                  </span>
                  {showSuspended && (
                    <ChevronRight className="w-5 h-5 text-gray-400 transform rotate-90" />
                  )}
                  {!showSuspended && (
                    <ChevronRight className="w-5 h-5 text-gray-400" />
                  )}
                </div>
              </div>
            ))}
          </div>

          {/* Modals */}
          {modalType && (
            <div
              className="fixed inset-0 bg-black/50 bg-opacity-100 flex items-end sm:items-center justify-center z-50 animate-fadeIn"
              onClick={closeModal}
            >
              {/* Details Modal */}
              {modalType === "details" && selectedUser && (
                <div
                  className="bg-white rounded-t-3xl sm:rounded-3xl w-full sm:max-w-md max-h-[90vh] overflow-y-auto animate-slideUp"
                  onClick={(e) => e.stopPropagation()}
                >
                  <div className="p-6">
                    <div className="flex justify-between items-center mb-6">
                      <div className="flex-1 text-center">
                        <h2 className="text-xl font-bold text-gray-900">
                          Mardiya Kitchen
                        </h2>
                        <p
                          className={`text-sm font-semibold mt-1 ${getTypeColor(
                            selectedUser.type
                          )}`}
                        >
                          {selectedUser.type}
                        </p>
                      </div>
                      <button
                        onClick={closeModal}
                        className="p-2 hover:bg-gray-100 rounded-full transition-colors"
                      >
                        <X className="w-6 h-6 text-gray-500" />
                      </button>
                    </div>

                    <div className="space-y-3">
                      <button
                        onClick={() => setModalType(null)}
                        className="w-full py-4 px-4 bg-white border border-gray-200 rounded-xl flex items-center justify-between hover:bg-gray-50 transition-all transform hover:scale-[1.02] active:scale-[0.98]"
                      >
                        <span className="text-gray-700 font-medium">
                          View Profile
                        </span>
                        <ChevronRight className="w-5 h-5 text-gray-400" />
                      </button>

                      <button
                        onClick={() => setModalType("suspend")}
                        className="w-full py-4 px-4 bg-white border border-gray-200 rounded-xl flex items-center justify-between hover:bg-gray-50 transition-all transform hover:scale-[1.02] active:scale-[0.98]"
                      >
                        <span className="text-gray-700 font-medium">
                          Suspend {selectedUser.type}
                        </span>
                        <ChevronRight className="w-5 h-5 text-gray-400" />
                      </button>

                      <div className="py-3 px-4 bg-gray-50 rounded-xl">
                        <p className="text-sm text-gray-500">Date joined</p>
                        <p className="text-sm text-gray-900 mt-1">
                          {selectedUser.dateJoined}
                        </p>
                      </div>

                      <button
                        onClick={() => setModalType("delete")}
                        className="w-full py-4 px-4 bg-white border-2 border-red-500 rounded-xl hover:bg-red-50 transition-all transform hover:scale-[1.02] active:scale-[0.98]"
                      >
                        <span className="text-red-500 font-semibold">
                          Delete {selectedUser.type}
                        </span>
                      </button>
                    </div>
                  </div>
                </div>
              )}

              {/* Suspend Confirmation Modal */}
              {modalType === "suspend" && selectedUser && (
                <div
                  className="bg-white rounded-t-3xl sm:rounded-3xl w-full sm:max-w-md p-8 animate-slideUp"
                  onClick={(e) => e.stopPropagation()}
                >
                  <div className="flex justify-end mb-4">
                    <button
                      onClick={closeModal}
                      className="p-2 hover:bg-gray-100 rounded-full transition-colors"
                    >
                      <X className="w-6 h-6 text-gray-500" />
                    </button>
                  </div>
                  <div className="text-center mb-8">
                    <h2 className="text-xl font-bold text-gray-900 mb-1">
                      Mardiya Kitchen
                    </h2>
                    <p
                      className={`text-sm font-semibold ${getTypeColor(
                        selectedUser.type
                      )}`}
                    >
                      {selectedUser.type}
                    </p>
                  </div>
                  <p className="text-center text-gray-600 mb-8">
                    Are you sure you want to suspend Mardiya Kitchen
                  </p>
                  <button
                    onClick={handleSuspend}
                    className="w-full py-4 bg-green-600 text-white rounded-xl font-semibold hover:bg-green-700 transition-all transform hover:scale-[1.02] active:scale-[0.98] shadow-lg"
                  >
                    Yes
                  </button>
                </div>
              )}

              {/* Suspend Success Modal */}
              {modalType === "suspendSuccess" && selectedUser && (
                <div
                  className="bg-white rounded-t-3xl sm:rounded-3xl w-full sm:max-w-md p-8 animate-slideUp"
                  onClick={(e) => e.stopPropagation()}
                >
                  <div className="flex justify-end mb-4">
                    <button
                      onClick={closeModal}
                      className="p-2 hover:bg-gray-100 rounded-full transition-colors"
                    >
                      <X className="w-6 h-6 text-gray-500" />
                    </button>
                  </div>
                  <div className="text-center mb-8">
                    <h2 className="text-xl font-bold text-gray-900 mb-1">
                      Mardiya Kitchen
                    </h2>
                    <p
                      className={`text-sm font-semibold ${getTypeColor(
                        selectedUser.type
                      )}`}
                    >
                      {selectedUser.type}
                    </p>
                  </div>
                  <p className="text-center text-gray-600 mb-8">
                    You've successfully suspended Mardiya Kitchen
                  </p>
                  <button
                    onClick={closeModal}
                    className="w-full py-4 bg-green-600 text-white rounded-xl font-semibold hover:bg-green-700 transition-all transform hover:scale-[1.02] active:scale-[0.98] shadow-lg"
                  >
                    Ok
                  </button>
                </div>
              )}

              {/* Delete Confirmation Modal */}
              {modalType === "delete" && selectedUser && (
                <div
                  className="bg-white rounded-t-3xl sm:rounded-3xl w-full sm:max-w-md p-8 animate-slideUp"
                  onClick={(e) => e.stopPropagation()}
                >
                  <div className="flex justify-end mb-4">
                    <button
                      onClick={closeModal}
                      className="p-2 hover:bg-gray-100 rounded-full transition-colors"
                    >
                      <X className="w-6 h-6 text-gray-500" />
                    </button>
                  </div>
                  <div className="text-center mb-8">
                    <h2 className="text-xl font-bold text-gray-900 mb-1">
                      Mardiya Kitchen
                    </h2>
                    <p
                      className={`text-sm font-semibold ${getTypeColor(
                        selectedUser.type
                      )}`}
                    >
                      {selectedUser.type}
                    </p>
                  </div>
                  <p className="text-center text-gray-600 mb-8">
                    Are you sure you want to deactivate Mardiya Kitchen
                  </p>
                  <button
                    onClick={handleDeactivate}
                    className="w-full py-4 bg-red-600 text-white rounded-xl font-semibold hover:bg-red-700 transition-all transform hover:scale-[1.02] active:scale-[0.98] shadow-lg"
                  >
                    Yes
                  </button>
                </div>
              )}

              {/* Delete Success Modal */}
              {modalType === "deleteSuccess" && selectedUser && (
                <div
                  className="bg-white rounded-t-3xl sm:rounded-3xl w-full sm:max-w-md p-8 animate-slideUp"
                  onClick={(e) => e.stopPropagation()}
                >
                  <div className="flex justify-end mb-4">
                    <button
                      onClick={closeModal}
                      className="p-2 hover:bg-gray-100 rounded-full transition-colors"
                    >
                      <X className="w-6 h-6 text-gray-500" />
                    </button>
                  </div>
                  <div className="text-center mb-8">
                    <h2 className="text-xl font-bold text-gray-900 mb-1">
                      Mardiya Kitchen
                    </h2>
                    <p
                      className={`text-sm font-semibold ${getTypeColor(
                        selectedUser.type
                      )}`}
                    >
                      {selectedUser.type}
                    </p>
                  </div>
                  <p className="text-center text-gray-600 mb-8">
                    You've successfully deactivated Mardiya Kitchen
                  </p>
                  <button
                    onClick={closeModal}
                    className="w-full py-4 bg-red-600 text-white rounded-xl font-semibold hover:bg-red-700 transition-all transform hover:scale-[1.02] active:scale-[0.98] shadow-lg"
                  >
                    Ok
                  </button>
                </div>
              )}
            </div>
          )}
        </div>
      )}
    </div>
  );
};

export default UserManagement;
