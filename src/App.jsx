import React from "react";

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Signup from "./pages/Authentication/Signup/Signup";

import Login from "./pages/Authentication/Login/Login";

import Home from "./pages/Home/Home";

import PolicyDoc from "./pages/Policy/Policy";

import Registration from "./pages/Registration/Registration";

import Dashboard from "./pages/dashboard/dashboard/Dashboard";

import Transactions from "./pages/dashboard/Transactions/Transactions";

import PaymentMethod from "./pages/dashboard/MarketPlace/MarketPlace";

import StkPush from "./pages/dashboard/MarketPlace/stkpush/StkPush";

import PaymentLinkReady from "./components/dashboard/PaymentLinkReady/PaymentLinkReady";

import Payments from "./pages/dashboard/Payments/Payments";

import HekopayPayments from "./pages/dashboard/Payments/Hekopay/HekopayPayments";

import PaymentSuccess from "./components/dashboard/PaymentSuccess/PaymentSuccess";

import ForgotPassword from "./pages/Authentication/ForgotPassword/ForgotPassword";

import TermsAndConditions from "./pages/TermsAndConditions/TermsAndConditions";

import Bntc from "./pages/dashboard/bntc/Bntc";

import Wallet from "./pages/dashboard/wallet/Wallet";


import Store from "./pages/store/Store";

import Settings from "./pages/dashboard/settings/Settings";

import Help from "./pages/Help/Help";


import PayViaMpesaTill from "./pages/dashboard/PayMpesaTill/PayMpesaTill";

const App = () => {
  return (
    <div>
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/sign-in" element={<Login />} />
          <Route path="/sign-up" element={<Signup />} />
          <Route path="/forgot-password" element={<ForgotPassword />} />
          <Route path="/policy" element={<PolicyDoc />} />
          <Route path="/registration" element={<Registration />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/transactions" element={<Transactions />} />
          <Route
            path="/marketplace/payment-method"
            element={<PaymentMethod />}
          />
          <Route path="/marketplace/send-stk-push" element={<StkPush />} />

          <Route
            path="/marketplace/payment-link/:id"
            element={<PaymentLinkReady />}
          />

<Route
            path="/payments/mpesa-till"
            element={<PayViaMpesaTill/>}
          />

          <Route path="/payments" element={<Payments />} />

          <Route path="/payments/hekopay" element={<HekopayPayments />} />

          <Route path="/payments/success" element={<PaymentSuccess />} />

          <Route path="/terms-conditions" element={<TermsAndConditions />} />

          {/* dashboard */}

          <Route path="/bnct" element={<Bntc />} />

          <Route path="/wallet" element={<Wallet />} />


          <Route path="/store" element={<Store/>} />
          
          <Route path="/settings" element={<Settings/>} />

          <Route path="/help" element={<Help/>} />

        </Routes>
      </Router>
    </div>
  );
};

export default App;
