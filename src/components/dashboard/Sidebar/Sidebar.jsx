import React from "react";
import {
  LayoutDashboard,
  CreditCard,
  Store,
  DollarSign,
  Banknote,
  Wallet,
  ShoppingCart,
  Settings,
  HelpCircle,
  LogOut,
} from "lucide-react";
import { NavLink, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { closeSidebar } from "../../../Redux/features/SidebarSlice";

const Sidebar = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { isOpen } = useSelector((state) => state.sidebar);

  const menuItems = [
    { to: "/dashboard", label: "Dashboard", icon: LayoutDashboard },
    { to: "/transactions", label: "Transactions", icon: CreditCard },
    { to: "/marketplace/payment-method", label: "Marketplace", icon: Store },
    { to: "/payments", label: "Payments", icon: DollarSign },
    { to: "/bnct", label: "BNCT", icon: Banknote },
    { to: "/wallet", label: "My Wallet", icon: Wallet },
    { to: "/store", label: "My Store", icon: ShoppingCart },
    { to: "/settings", label: "Settings", icon: Settings },
    { to: "/help", label: "Help Center", icon: HelpCircle },
  ];

  const handleLogout = () => {
    
    navigate("/sign-in"); 
  };

  return (
    <div
      className={`bg-purple-800 min-h-screen text-white w-[250px] fixed top-[50px] left-0 pl-4 py-6 z-30 transform transition-transform duration-300 ${
        isOpen ? "translate-x-0" : "-translate-x-full"
      }`}
    >
      <ul className="space-y-2">
        {menuItems.map(({ to, label, icon: Icon }) => (
          <li key={to}>
            <NavLink
              to={to}
              onClick={() => dispatch(closeSidebar())}
              className={({ isActive }) =>
                `flex items-center gap-3 px-3 py-2 rounded-l-[25px] transition ${
                  isActive
                    ? "bg-white text-purple-800"
                    : "hover:bg-white hover:text-purple-800"
                }`
              }
            >
              <Icon className="w-5 h-5" />
              {label}
            </NavLink>
          </li>
        ))}
        <li>
          <button
            onClick={handleLogout}
            className="flex items-center gap-3 px-3 py-2 w-full text-left rounded-l-[25px] hover:bg-white hover:text-purple-800 transition"
          >
            <LogOut className="w-5 h-5" />
            Logout
          </button>
        </li>
      </ul>
    </div>
  );
};

export default Sidebar;
