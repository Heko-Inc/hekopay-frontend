import React from "react";

import Navbar from "../../../components/dashboard/Navbar/Navbar";

import Sidebar from "../../../components/dashboard/Sidebar/Sidebar";

import "./layout.css";

import { useSelector } from "react-redux";

const DashboardLayout = ({ children }) => {
  const { isOpen } = useSelector((state) => state.sidebar);

  return (
    <div>
      <Navbar />
      <div className={`main ${!isOpen ? "active" : ""}`}>{children}</div>
      <Sidebar />
    </div>
  );
};

export default DashboardLayout;
