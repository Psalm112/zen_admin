import { motion } from "framer-motion";
import { TbArrowDownRight, TbArrowUpRight } from "react-icons/tb";
import { FaHeart } from "react-icons/fa6";
import { GiTwoCoins } from "react-icons/gi";
import { BsFillFuelPumpFill } from "react-icons/bs";
import { FaMoneyBillTransfer } from "react-icons/fa6";

interface PaymentCardProps {
  title: string;
  value: string;
  percentage?: string;
  isPositive?: boolean;
  date?: string;
  amount?: string;
  iconName: "heart" | "escrow" | "gas" | "withdrawal";
}

const PaymentCard = ({
  title,
  value,
  percentage,
  isPositive = true,
  date,
  amount,
  iconName,
}: PaymentCardProps) => {
  const getIcon = () => {
    switch (iconName) {
      case "heart":
        return <FaHeart size={20} />;
      case "escrow":
        return <GiTwoCoins size={20} />;
      case "gas":
        return <BsFillFuelPumpFill size={20} />;
      case "withdrawal":
        return <FaMoneyBillTransfer size={20} />;
    }
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.3 }}
      className="bg-[#1e2024] rounded-lg p-5 shadow-md"
    >
      <div className="flex justify-between items-start">
        <div className="flex items-center gap-2">
          <div className="p-2 rounded-full bg-[#FF343F]/20 text-[#FF343F]">
            {getIcon()}
          </div>
          <p className="text-[#AEB9E1]">{title}</p>
        </div>
        <div className="relative">
          <button
            className="text-gray-500 hover:text-gray-300 transition-colors"
            aria-label="More options"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <circle cx="12" cy="12" r="1"></circle>
              <circle cx="19" cy="12" r="1"></circle>
              <circle cx="5" cy="12" r="1"></circle>
            </svg>
          </button>
        </div>
      </div>

      <div className="flex items-center gap-2 mt-1">
        <h3 className="text-2xl font-bold text-white">{value}</h3>
        {percentage && (
          <span
            className={`text-xs flex items-center rounded-sm px-1 ${
              isPositive
                ? "bg-green-500/20 border border-green-500/30 text-green-500"
                : "bg-red-500/20 border border-red-500/30 text-red-500"
            }`}
          >
            <span>{percentage}%</span>
            <span>
              {isPositive ? (
                <TbArrowUpRight size={16} />
              ) : (
                <TbArrowDownRight size={16} />
              )}
            </span>
          </span>
        )}
      </div>

      {date && amount && (
        <div className="mt-1 text-xs text-gray-400">
          {date} • {amount}
        </div>
      )}
    </motion.div>
  );
};

export default PaymentCard;
