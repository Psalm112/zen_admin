
import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
// import { motion } from "framer-motion";

const Header = () => {
  const location = useLocation();
  const [notificationsOpen, setNotificationsOpen] = useState(false);
  
  // Navigation links
  const navLinks = [
    { label: "Dashboard", path: "/", icon: "home" },
    { label: "Disputes", path: "/disputes", icon: "flag" },
    { label: "Vendor Control", path: "/vendor-control", icon: "users" },
    { label: "Payments", path: "/payments", icon: "credit-card" },
    { label: "Logistics", path: "/logistics", icon: "truck" },
  ];
  
  const isActive = (path: string) => {
    return location.pathname === path;
  };
  
  return (
    <header className="bg-[#1e2024] border-b border-[#292B30]">
      <div className="max-w-[1400px] mx-auto px-4 lg:px-6 h-16 flex items-center justify-between">
        <div className="flex items-center">
          <Link to="/" className="text-white font-bold text-2xl mr-8">
            <div className="w-8 h-8 bg-Red rounded-full flex items-center justify-center">
              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"></path>
              </svg>
            </div>
          </Link>
          
          <nav className="hidden md:flex items-center space-x-1">
            {navLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                className={`px-4 py-2 rounded-md text-sm flex items-center ${
                  isActive(link.path)
                    ? "bg-Red text-white"
                    : "text-gray-400 hover:bg-[#292B30] hover:text-white"
                }`}
              >
                {link.label}
              </Link>
            ))}
          </nav>
        </div>
        
        <div className="flex items-center space-x-4">
          <button 
            className="relative p-2 rounded-md text-gray-400 hover:bg-[#292B30] hover:text-white focus:outline-none"
            onClick={() => setNotificationsOpen(!notificationsOpen)}
          >
            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M18 8A6 6 0 0 0 6 8c0 7-3 9-3 9h18s-3-2-3-9"></path>
              <path d="M13.73 21a2 2 0 0 1-3.46 0"></path>
            </svg>
            <span className="absolute top-1 right-1 block h-2 w-2 rounded-full bg-Red"></span>
          </button>
          
          <div className="flex items-center">
            <div className="w-8 h-8 bg-Red rounded-full mr-2 flex items-center justify-center text-white font-medium">
              J
            </div>
            <div className="hidden sm:block">
              <p className="text-white text-sm font-medium">John Carter</p>
              <p className="text-gray-400 text-xs">Admin settings</p>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;