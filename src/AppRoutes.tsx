import { Routes, Route } from "react-router-dom";
import Select from "./home/Select";
import { Home } from "./user/home/Home";
import Signup from "./user/signup/Signup";
import Login from "./auth/login/VendorLogin";
import UserDashboard from "./user/user-dashboard/UserDashboard";

import { Rider1 } from "./rider/Rider1";
import { Rider2 } from "./rider/Rider2";
import { Rider3 } from "./rider/Rider3";
import { Rider4 } from "./rider/Rider4";
import { Rider5 } from "./rider/Rider5";
import { Rider6 } from "./rider/Rider6";
// import Signup from "./auth/sigup/VendorSignup";
import VendorSignup from "./auth/sigup/VendorSignup";
import VendorLogin from "./auth/login/VendorLogin";
import VendorDashboard from "./vendor/dashboard/VendorDashboard";

const AppRoutes = () => {
  return (
    <Routes>
      {/* normal user */}
      <Route path="/" element={<Select />} />
      <Route path="/user-home" element={<Home />} />
      <Route path="/signup" element={<Signup />} />
      <Route path="/login" element={<Login />} />
      <Route path="/user-dashboard" element={<UserDashboard />} />
      {/* vendor */}

      <Route path="/vendor-dashboard" element={<VendorDashboard />} />
      <Route path="/welcome1" element={<Rider1 />} />
      <Route path="/welcome2" element={<Rider2 />} />
      <Route path="/welcome3" element={<Rider3 />} />
      <Route path="/welcome4" element={<Rider4 />} />
      <Route path="/welcome5" element={<Rider5 />} />
      <Route path="/welcome6" element={<Rider6 />} />
      <Route path="/vendor-signup" element={<VendorSignup />} />
      <Route path="/vendor-login" element={<VendorLogin />} />
    </Routes>
  );
};

export default AppRoutes;
