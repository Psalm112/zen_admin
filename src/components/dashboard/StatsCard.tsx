
import { ReactNode } from "react";
import { motion } from "framer-motion";
import { twMerge } from "tailwind-merge";

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
      className={twMerge("bg-[#1e2024] rounded-lg p-4 shadow-md", className)}
    >
      <div className="flex justify-between items-start">
        <div>{icon}</div>
        <button className="text-gray-500">
          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <circle cx="12" cy="12" r="1"></circle>
            <circle cx="19" cy="12" r="1"></circle>
            <circle cx="5" cy="12" r="1"></circle>
          </svg>
        </button>
      </div>
      <p className="text-sm text-gray-400 mt-2">{title}</p>
      <div className="flex items-baseline gap-2 mt-1">
        <h3 className="text-2xl font-bold text-white">{value}</h3>
        <span className={`text-xs ${isPositive ? 'text-green-500' : 'text-red-500'}`}>
          {isPositive ? '↑' : '↓'} {Math.abs(change)}%
        </span>
      </div>
    </motion.div>
  );
};

export default StatsCard;