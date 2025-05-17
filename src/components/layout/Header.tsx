// src/components/layout/Header.tsx
import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import Container from "../common/Container";
import { Avatar, disputeIcon, Logo, paymentsIcon } from "../../pages";
import { IoCashOutline, IoChevronDown } from "react-icons/io5";
import { GrHomeRounded } from "react-icons/gr";
import { CgController } from "react-icons/cg";
import { PiTruck } from "react-icons/pi";
import { IoNotificationsOutline } from "react-icons/io5";
import { HiMenu } from "react-icons/hi";
import { TbUserExclamation } from "react-icons/tb";

const Header = () => {
  const location = useLocation();
  const [notificationsOpen, setNotificationsOpen] = useState(false);

  // Navigation links
  const navLinks = [
    { label: "Dashboard", path: "/", icon: <GrHomeRounded className="text-lg  max-lg:hidden" /> },
    { label: "Disputes", path: "/disputes", icon: <TbUserExclamation size={18} />},
    { label: "Vendor Control", path: "/vendor-control", icon: <CgController className="text-xl max-lg:hidden" /> },
    { label: "Payments", path: "/payments", icon: <IoCashOutline size={20} /> },
    { label: "Logistics", path: "/logistics", icon: <PiTruck className="text-xl max-lg:hidden" /> },
  ];

  const isActive = (path: string) => {
    return location.pathname === path;
  };

  return (
    <header className="w-full py-2 md:py-4 bg-Dark shadow-md sticky top-0 z-50">
      <Container className="py-0 flex items-center justify-between">
        <Link 
          to="/" 
          className="flex items-center"
          aria-label="Go to homepage"
        >
          <motion.div 
            className="w-8 h-8 md:w-9 md:h-9 relative overflow-hidden"
            whileHover={{ scale: 1.05 }}
            transition={{ type: "spring", stiffness: 400, damping: 10 }}
          >
            <img
              src={Logo}
              className="w-full object-cover object-[25%_25%]"
              alt="Company logo"
            />
          </motion.div>
        </Link>

        <div className="flex items-center rounded-full gap-2 bg-[#292B30] pl-1 py-1 pr-3">
          <nav className="hidden md:flex items-center space-x-1 border-r border-r-[1px] border-gray-400 pr-4 mr-2">
            {navLinks.map((link) => (
              <motion.div
                key={link.path}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <Link
                  to={link.path}
                  className={`px-4 py-2 text-sm flex items-center rounded-full transition-colors duration-200 ${
                    isActive(link.path)
                      ? "bg-Red text-white"
                      : "text-gray-400 hover:bg-[#2e3035] hover:text-white"
                  }`}
                  aria-current={isActive(link.path) ? "page" : undefined}
                >
                  <span className="flex items-center justify-center">{link.icon}</span>
                  <span className="ml-2">{link.label}</span>
                </Link>
              </motion.div>
            ))}
          </nav>


          <div className="flex items-center space-x-4">
            <motion.button
              aria-label="Notifications"
              className="relative p-2 rounded-md text-gray-400 hover:bg-[#2e3035] hover:text-white focus:outline-none"
              onClick={() => setNotificationsOpen(!notificationsOpen)}
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
            >
              <IoNotificationsOutline size={20} />
              <span className="absolute top-1 right-1 block h-2 w-2 rounded-full bg-Red" aria-label="New notifications available"></span>
            </motion.button>

            <motion.div 
              className="flex items-center gap-3 cursor-pointer"
              whileHover={{ scale: 1.03 }}
            >
              <img
                src={Avatar}
                className="w-8 h-8 rounded-full"
                alt="User avatar"
              />
              <div className="hidden max-md:block lg:block">
                <p className="text-white text-sm font-medium">John Carter</p>
                <p className="text-gray-400 text-xs">Admin settings</p>
              </div>
              <IoChevronDown className="text-gray-400 text-lg" />
            </motion.div>
          </div>
        </div>
      </Container>
    </header>
  );
};

export default Header;