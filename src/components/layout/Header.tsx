
import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import Container from "../common/Container";
import { Avatar, disputeIcon, Logo, paymentsIcon } from "../../pages";
import { IoChevronDown } from "react-icons/io5";
import { GrHomeRounded } from "react-icons/gr";
import { CgController } from "react-icons/cg";
import { PiTruck } from "react-icons/pi";

const Header = () => {
  const location = useLocation();
  const [notificationsOpen, setNotificationsOpen] = useState(false);

  // Navigation links
  const navLinks = [
    { label: "Dashboard", path: "/", icon: <GrHomeRounded className="text-lg"/> },
    { label: "Disputes", path: "/disputes", icon: <img src={disputeIcon} alt="dispute-nav-icon" className="w-5 h-5"/> },
    { label: "Vendor Control", path: "/vendor-control", icon: <CgController className="text-xl"/>},
    { label: "Payments", path: "/payments", icon: <img src={paymentsIcon} alt="payments-nav-icon" className="w-4 h-4"/> },
    { label: "Logistics", path: "/logistics", icon: <PiTruck className="text-xl"/> },
  ];

  const isActive = (path: string) => {
    return location.pathname === path;
  };

  return (
    <header className="w-full py-2 md:py-4 bg-Dark shadow-md sticky top-0 z-50">
      <Container className="py-0 flex items-center justify-between">
        {/* <div className="flex items-center"> */}
        <Link to="/" className="text-white font-bold text-2xl mr-8 mr-auto">
          <div className="w-8 h-8 md:w-9 md:h-9 relative overflow-hidden">
            <img
              src={Logo}
              className="w-full transition-transform group-hover:scale-110 object-cover object-[25%_25%]"
              alt="dezenmart logo"
            />
          </div>
        </Link>


        {/* </div> */}

        <div className="flex items-center rounded-full gap-2 bg-[#292B30] pl-1 py-1 pr-3">
          <nav className="hidden md:flex items-center space-x-1 border-r borrder-r-[1px] border-gray-400 pr-30">
            {navLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                className={`px-4 py-2 text-sm flex items-center rounded-full ${isActive(link.path)
                    ? "bg-Red text-white"
                    : "text-gray-400 hover:bg-[#292B30] hover:text-white"
                  }`}
              >
                {link.icon}
                <span className="ml-2">{link.label}</span>
              </Link>
            ))}
          </nav>
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

            <div className="flex items-center gap-3">
            <img
              src={Avatar}
              className="w-8 h-8 rounded-full"
              alt="admin avatar"
            />
              <div className="hidden sm:block">
                <p className="text-white text-sm font-medium">John Carter</p>
                <p className="text-gray-400 text-xs">Admin settings</p>
              </div>
              <IoChevronDown className="text-gray-400 text-lg"/>
            </div>
          </div>
        </div>

      </Container>
    </header>
  );
};

export default Header;