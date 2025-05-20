
import { memo } from "react";
import { NavLink } from "react-router-dom";
import { motion } from "framer-motion";
import { GrHomeRounded } from "react-icons/gr";
import { CgController } from "react-icons/cg";
import { PiTruck } from "react-icons/pi";
import { TbUserExclamation } from "react-icons/tb";
import { IoCashOutline } from "react-icons/io5";

const navItems = [
  { icon: <GrHomeRounded size={18} />, label: "Dashboard", path: "/" },
  { 
    icon: <TbUserExclamation size={18} />,
    label: "Disputes", 
    path: "/disputes" 
  },
  { 
    icon: <CgController size={20} />, 
    label: "Vendor", 
    path: "/vendor-control" 
  },
  { 
    icon: <IoCashOutline size={20} />, 
    label: "Payments", 
    path: "/payments" 
  },
  { 
    icon: <PiTruck size={20} />, 
    label: "Logistics", 
    path: "/logistics" 
  },
];

const MobileNavigation = () => {
  return (
    <motion.nav 
      className="fixed bottom-4 left-1/2 transform -translate-x-1/2 bg-[#292B30] flex justify-evenly items-center px-4 py-2 rounded-full md:hidden z-50 shadow-lg"
      initial={{ y: 100 }}
      animate={{ y: 0 }}
      transition={{ type: "spring", stiffness: 300, damping: 30 }}
    >
      {navItems.map((item) => (
        <NavLink
          key={item.path}
          to={item.path}
          className={({ isActive }) => `
            relative text-xs p-2 mx-1
            ${isActive ? "text-Red" : "text-[#545456]"}
          `}
          aria-label={item.label}
        >
          <motion.div
            whileHover={{ scale: 1.15 }}
            whileTap={{ scale: 0.9 }}
            transition={{ type: "spring", stiffness: 400, damping: 17 }}
            className="flex flex-col items-center"
          >
            <span>{item.icon}</span>
            <span className="mt-1 text-[10px] font-medium max-xs:hidden">{item.label}</span>
          </motion.div>
        </NavLink>
      ))}
    </motion.nav>
  );
};

export default memo(MobileNavigation);