import React from "react";
import Logo from "../../Logo/Logo";
import { Bell, User, X, Menu } from "lucide-react";

import {
  openSidebar,
  closeSidebar,
} from "../../../Redux/features/SidebarSlice";

import { useDispatch, useSelector } from "react-redux";

const Navbar = () => {
  const dispatch = useDispatch();

  const { isOpen } = useSelector((state) => state.sidebar);

  return (
    <nav className="w-full bg-white shadow-sm px-4 h-[50px] flex items-center fixed top-0 right-0 left-0 z-30">
      <div className="w-full mx-auto flex items-center justify-between gap-4 flex-wrap sm:flex-nowrap h-full">
        <div className="flex-shrink-0">
          <div className="flex items-center ">
            {isOpen ? (
              <button
                onClick={() => {
                  dispatch(closeSidebar());
                }}
              >
                <X size={40} />
              </button>
            ) : (
              <button
                onClick={() => {
                  dispatch(openSidebar());
                }}
              >
                <Menu size={40} />
              </button>
            )}

            <div className="h-full flex justify-between items-center ml-[1rem]">
              <Logo />
            </div>
          </div>
        </div>

        <div className="flex justify-between items-center">
          <div className="flex-grow max-w-md w-full order-3 sm:order-none mr-[2rem]">
            <input
              type="text"
              placeholder="Search for something"
              className="w-full px-4 py-[4px] border border-gray-300 rounded-[2px]  focus:outline-none focus:ring-2 focus:ring-purple-500 text-sm"
            />
          </div>

          <div className="flex items-center gap-4">
            <button
              type="button"
              className="relative text-gray-600 hover:text-purple-600 focus:outline-none"
            >
              <Bell className="w-5 h-5" />
            </button>

            <div className="text-gray-600 hover:text-purple-600">
              <User className="w-5 h-5" />
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
