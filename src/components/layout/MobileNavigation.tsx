

import { memo } from "react";
import { NavLink } from "react-router-dom";
import { AiOutlineHome } from "react-icons/ai";
import { BiPackage } from "react-icons/bi";
import { IoSwapHorizontalOutline } from "react-icons/io5";
import { BsPeople } from "react-icons/bs";
import { RiUser3Line } from "react-icons/ri";
import { IoChatbubbleOutline } from "react-icons/io5";

const navItems = [
  { icon: <AiOutlineHome size={22} />, label: "Home", path: "/" },
  { icon: <BiPackage size={22} />, label: "Product", path: "/product" },
  {
    icon: <IoSwapHorizontalOutline size={22} />,
    label: "Trade",
    path: "/trades",
  },
  { icon: <BsPeople size={22} />, label: "Community", path: "/community" },
  { icon: <RiUser3Line size={22} />, label: "Account", path: "/account" },
];

const MobileNavigation = () => {
  return (
    <nav className="fixed bottom-0 left-0 right-0 bg-[#212428] flex justify-evenly items-center px-2 py-1.5 sm:hidden z-50 border-t border-[#292B30]">
      {navItems.map((item) => (
          <NavLink
            key={item.path}
            to={item.path}
            className={({ isActive }) => `
              relative flex flex-col items-center text-xs p-1.5
              ${isActive ? "text-Red" : "text-[#545456]"}
            `}
            aria-label={item.label}
          >
            {item.icon}
            <span className="mt-0.5 text-[10px]">{item.label}</span>
          </NavLink>
        )
      )}
    </nav>
  );
};

export default memo(MobileNavigation);
