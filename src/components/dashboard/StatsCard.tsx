
import { ReactNode } from "react";
import { motion } from "framer-motion";
import { twMerge } from "tailwind-merge";
import { TbArrowDownRight, TbArrowUpRight } from "react-icons/tb";

interface StatsCardProps {
  icon: ReactNode;
  title: string;
  value: string | number;
  change: number;
  className?: string;
}

const StatsCard = ({ icon, title, value, change, className }: StatsCardProps) => {
  const isPositive = change > 0;
  
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.3 }}
      whileHover={{ y: -5 }}
      className={twMerge("bg-[#1e2024] rounded-lg p-4 shadow-md", className)}
    >
      <div className="flex justify-between items-start">
        <div className="flex items-center gap-2 flex-wrap">{icon}<p className="text-sm text-[#AEB9E1] mt-2">{title}</p></div>
        <div className="relative group">
          <button 
            className="text-gray-500 hover:text-gray-300 transition-colors"
            aria-label="More options"
          >
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <circle cx="12" cy="12" r="1"></circle>
              <circle cx="19" cy="12" r="1"></circle>
              <circle cx="5" cy="12" r="1"></circle>
            </svg>
          </button>
          <div className="absolute right-0 top-full mt-2 w-48 bg-[#292B30] rounded-md shadow-lg z-10 hidden group-hover:block">
            <ul className="py-1">
              <li><a href="#" className="block px-4 py-2 text-sm text-white hover:bg-[#333] transition-colors">View Details</a></li>
              <li><a href="#" className="block px-4 py-2 text-sm text-white hover:bg-[#333] transition-colors">Export Data</a></li>
              <li><a href="#" className="block px-4 py-2 text-sm text-white hover:bg-[#333] transition-colors">Set Alerts</a></li>
            </ul>
          </div>
        </div>
      </div>
      
      <div className="flex items-center gap-2 mt-1">
        <h3 className="text-2xl font-bold text-white">{value}</h3>
        <span className={`text-xs flex items-center rounded-sm px-1 ${isPositive ? 'bg-green-500/20 border border-green-500/30 text-green-500' : 'bg-red-500/20 border border-red-500/30 text-red-500'}`}>
        <span>{Math.abs(change)}%</span>
        <span>{isPositive ? <TbArrowUpRight size={20}/> : <TbArrowDownRight size={20}/>}</span> 
        </span>
      </div>
    </motion.div>
  );
};

export default StatsCard;