import React, { useState } from "react";
import Logo from "../../Logo/Logo";
import { Bell, User, X, Menu, Search } from "lucide-react";
import { openSidebar, closeSidebar } from "../../../Redux/features/SidebarSlice";
import { useDispatch, useSelector } from "react-redux";

const Navbar = () => {
  const dispatch = useDispatch();
  const { isOpen } = useSelector((state) => state.sidebar);
  const [showMobileSearch, setShowMobileSearch] = useState(false);

  return (
    <>
      
      <nav className="w-full bg-white shadow-sm px-4 h-[50px] flex items-center fixed top-0 right-0 left-0 z-30">
        <div className="w-full mx-auto flex items-center justify-between gap-4 flex-wrap sm:flex-nowrap h-full">
          <div className="flex items-center">
            {isOpen ? (
              <button onClick={() => dispatch(closeSidebar())}>
                <X size={28} />
              </button>
            ) : (
              <button onClick={() => dispatch(openSidebar())}>
                <Menu size={28} />
              </button>
            )}
            <div className="ml-4">
              <Logo />
            </div>
          </div>

         
          <div className="flex-grow max-w-md w-full order-3 sm:order-none mr-8 hidden md:block">
            <input
              type="text"
              placeholder="Search for something"
              className="w-full px-4 py-[6px] border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-purple-500 text-sm"
            />
          </div>

          <div className="flex items-center gap-4">
          
            <button
              type="button"
              className="relative text-gray-600 hover:text-purple-600 focus:outline-none block md:hidden"
              onClick={() => setShowMobileSearch((prev) => !prev)}
            >
              <Search className="w-5 h-5" />
            </button>

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
      </nav>

    
      <div
        className={`fixed md:hidden top-[50px] left-0 right-0 z-20 px-4 bg-white shadow-md overflow-hidden transition-all duration-500 ease-in-out ${
          showMobileSearch ? "max-h-40 opacity-100" : "max-h-0 opacity-0"
        }`}
      >
        <input
          type="text"
          placeholder="Search for something"
          className="w-full px-4 py-2 mt-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-purple-500 text-sm mb-[0.5rem]"
        />
      </div>
    </>
  );
};

export default Navbar;
