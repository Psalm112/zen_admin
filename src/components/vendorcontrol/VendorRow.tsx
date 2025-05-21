import { motion } from "framer-motion";
import { FiEye } from "react-icons/fi";
import { FaFolderOpen } from "react-icons/fa6";
import { CgCheck } from "react-icons/cg";

interface VendorRowProps {
  vendor: {
    id: string;
    name: string;
    storeName: string;
    joinedOn: string;
    status: "Active" | "Blocked" | "Pending";
    email: string;
    products: number;
    selected: boolean;
  };
  onSelect: (id: string) => void;
  className?: String;
}

const VendorRow = ({ vendor, onSelect, className }: VendorRowProps) => {
  // Get status badge style
  const getStatusStyles = (status: string) => {
    switch (status) {
      case "Active":
        return "bg-green-900/30 text-green-500 border border-green-500/30";
      case "Blocked":
        return "bg-red-900/30 text-red-500 border border-red-500/30";
      case "Pending":
        return "bg-yellow-900/30 text-yellow-500 border border-yellow-500/30";
      default:
        return "bg-gray-900/30 text-gray-500 border border-gray-500/30";
    }
  };

  return (
    <motion.tr
      className={`border-b border-[#292B30] ${className}`}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.3 }}
      whileHover={{ backgroundColor: "rgba(255,255,255,0.02)" }}
    >
      <td className="py-4 px-4">
        <div className="flex items-center gap-2">
          <label className="relative inline-block h-4 w-4">
            <input
              type="checkbox"
              checked={vendor.selected}
              onChange={() => onSelect(vendor.id)}
              className="peer absolute h-4 w-4 appearance-none rounded-sm bg-[#292B30] border border-[#AEB9E1] checked:bg-[#FF343F] checked:border-[#FF343F] focus:ring-[#FF343F] cursor-pointer"
              aria-label={`Select vendor ${vendor.id}`}
            />
            <span className="pointer-events-none absolute inset-0 flex items-center justify-center text-white text-xs peer-checked:opacity-100 opacity-0">
              <CgCheck />
            </span>
          </label>
          <span className="text-white font-medium">{vendor.name}</span>
        </div>
      </td>
      <td className="py-4 px-4">
        <span className="text-white text-sm">{vendor.storeName}</span>
      </td>
      <td className="py-4 px-4">
        <span className="text-white text-sm">{vendor.joinedOn}</span>
      </td>
      <td className="py-4 px-4">
        <span
          className={`inline-flex items-center gap-1 px-2 py-1 rounded text-xs font-medium ${getStatusStyles(
            vendor.status
          )}`}
        >
          <span className="text-lg leading-3">•</span>
          {vendor.status}
        </span>
      </td>
      <td className="py-4 px-4">
        <span className="text-[#AEB9E1] text-sm">{vendor.email}</span>
      </td>
      <td className="py-4 px-4 ">
        <span className="text-white text-sm">{vendor.products}</span>
      </td>
      <td className="py-4 px-4">
        <div className="flex items-center gap-2">
          <motion.button
            className="p-1.5 bg-[#292B30] rounded-md text-[#AEB9E1] hover:text-white"
            whileHover={{ scale: 1.05, backgroundColor: "#343539" }}
            whileTap={{ scale: 0.95 }}
            aria-label="View vendor details"
          >
            <FiEye size={18} />
          </motion.button>
          <motion.button
            className="p-1.5 bg-[#292B30] rounded-md text-[#AEB9E1] hover:text-white"
            whileHover={{ scale: 1.05, backgroundColor: "#343539" }}
            whileTap={{ scale: 0.95 }}
            aria-label="Message vendor"
          >
            <FaFolderOpen size={18} />
          </motion.button>
        </div>
      </td>
    </motion.tr>
  );
};

export default VendorRow;
