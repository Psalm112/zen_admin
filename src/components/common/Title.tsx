// import { twMerge } from "tailwind-merge";
import { FiSearch, FiDownload } from "react-icons/fi";
import { motion } from "framer-motion";
import { useState } from "react";

interface Props {
  text: string;
  description?: string;
  //   className?: string;
  handleExportCSV?: () => void;
  handleDownloadReport?: () => void;
}

const Title = ({
  text,
  description,
  //   className,
  handleExportCSV,
  handleDownloadReport,
}: Props) => {
  const [searchQuery, setSearchQuery] = useState("");
  //   const newClassName = twMerge("text-2xl font-bold", className);
  return (
    <div className="flex flex-wrap gap-3 items-end mb-4">
      <div className="mr-auto">
        <h1 className="text-2xl font-bold text-white">{text}</h1>
        <p className="text-gray-400 text-sm">{description}</p>
      </div>
      <div className="relative flex items-center">
        <input
          type="text"
          placeholder="Search here....."
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
          className="bg-[#212428] border border-[#333] rounded-full px-10 py-2 text-white w-full sm:w-64 focus:outline-none focus:ring-2 focus:ring-[#FF343F]/30 transition-all"
          aria-label="Search dashboard"
        />
        <FiSearch
          className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400"
          size={18}
        />
      </div>
      <div className="flex flex-col sm:flex-row gap-3 mt-4 md:mt-0 w-full sm:w-auto">
        <div className="flex gap-3">
          <motion.button
            className="flex items-center gap-2 bg-[#212428] border border-[#333] rounded-full px-3 py-2 text-white hover:bg-[#292B30] transition-colors"
            onClick={handleExportCSV}
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            aria-label="Export CSV"
          >
            <span>Export CSV</span>
            <FiDownload size={18} />
          </motion.button>

          <motion.button
            className="flex items-center gap-2 bg-[#212428] border border-[#333] rounded-full px-3 py-2 text-white hover:bg-[#292B30] transition-colors"
            onClick={handleDownloadReport}
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            aria-label="Download Report"
          >
            <span>Download Report</span>
            <FiDownload size={18} />
          </motion.button>
        </div>
      </div>
    </div>
  );
};

export default Title;
