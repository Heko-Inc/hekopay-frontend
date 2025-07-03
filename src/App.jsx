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

const App = () => {
  return (
    <div>
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/sign-in" element={<Login />} />
          <Route path="/sign-up" element={<Signup />} />
          <Route path="/policy" element={<PolicyDoc />} />
          <Route path="/registration" element={<Registration />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/transactions" element={<Transactions />} />
          <Route path="/marketplace/payment-method" element={<PaymentMethod />} />
          <Route path="/marketplace/send-stk-push" element={<StkPush />} />
          <Route path="/marketplace/payment-link/:id" element={<PaymentLinkReady />} />
          <Route path="/payments" element={<Payments />} />
          <Route path="/payments/hekopay" element={<HekopayPayments/>} />
        </Routes>
      </Router>
    </div>
  );
};

export default App;
