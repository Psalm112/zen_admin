import { motion } from "framer-motion";
import { FaFolderOpen } from "react-icons/fa6";
import { FiEye } from "react-icons/fi";

interface ControlRowProps {
  control: {
    id: string;
    user: {
      name: string;
      email: string;
    };
    date: string;
    status: "Delivered" | "Escalated" | "Resolved" | "Open";
    vendor: string;
    reason: string;
    selected: boolean;
  };
  onSelect: (id: string) => void;
  className?: String;
}

const ControlRow = ({ control, onSelect, className }: ControlRowProps) => {
  // Get status badge style even:bg-[#171A1E]s
  const getStatusStyles = (status: string) => {
    switch (status) {
      case "Delivered":
        return "bg-green-900/30 text-green-500 border border-green-500/30";
      case "Escalated":
        return "bg-red-900/30 text-red-500 border border-red-500/30";
      case "Resolved":
        return "bg-green-900/30 text-green-500 border border-green-500/30";
      case "Open":
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
              checked={control.selected}
              onChange={() => onSelect(control.id)}
              className="peer absolute h-4 w-4 appearance-none rounded-sm bg-[#292B30] border border-[#AEB9E1] checked:bg-[#FF343F] checked:border-[#FF343F] focus:ring-[#FF343F] cursor-pointer"
              aria-label={`Select control ${control.id}`}
            />
            <span className="pointer-events-none absolute inset-0 flex items-center justify-center text-white text-xs peer-checked:opacity-100 opacity-0">
              ✓
            </span>
          </label>
          <span className="text-white font-medium">{control.id}</span>
        </div>
      </td>
      <td className="py-4 px-4">
        <div>
          <p className="text-white text-sm">{control.user.name}</p>
          <p className="text-[#AEB9E1] text-xs">{control.user.email}</p>
        </div>
      </td>
      <td className="py-4 px-4">
        <span className="text-white text-sm">{control.date}</span>
      </td>
      <td className="py-4 px-4">
        <span
          className={`inline-flex items-center gap-1 px-2 py-1 rounded text-xs font-medium ${getStatusStyles(
            control.status
          )}`}
        >
          <span className="text-lg leading-3">•</span>
          {control.status}
        </span>
      </td>
      <td className="py-4 px-4">
        <span className="text-white text-sm">{control.vendor}</span>
      </td>
      <td className="py-4 px-4">
        <span className="text-[#AEB9E1] text-sm">{control.reason}</span>
      </td>
      <td className="py-4 px-4">
        <div className="flex items-center gap-2">
          <motion.button
            className="p-1.5 bg-[#292B30] rounded-md text-[#AEB9E1] hover:text-white"
            whileHover={{ scale: 1.05, backgroundColor: "#343539" }}
            whileTap={{ scale: 0.95 }}
            aria-label="View control details"
          >
            <FiEye size={18} />
          </motion.button>
          <motion.button
            className="p-1.5 bg-[#292B30] rounded-md text-[#AEB9E1] hover:text-white"
            whileHover={{ scale: 1.05, backgroundColor: "#343539" }}
            whileTap={{ scale: 0.95 }}
            aria-label="Message regarding control"
          >
            <FaFolderOpen size={18} />
          </motion.button>
        </div>
      </td>
    </motion.tr>
  );
};

export default ControlRow;
