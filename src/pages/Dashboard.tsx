
import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import StatsCard from "../components/dashboard/StatsCard";
import RevenueChart from "../components/dashboard/RevenueChart";
import ProfitChart from "../components/dashboard/ProfitChart";
import SessionsChart from "../components/dashboard/SessionsChart";
import RecentOrders from "../components/dashboard/RecentOrders";
import TopProducts from "../components/dashboard/TopProducts";
import Container from "../components/common/Container";
import { FiSearch, FiDownload } from "react-icons/fi";
import { FaHeart } from "react-icons/fa6";
import { PiUsersFill } from "react-icons/pi";
import { GiShoppingBag, GiTwoCoins } from "react-icons/gi";




const Dashboard = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [isLoading, setIsLoading] = useState(true);
  
  // Simulating data loading
  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 800);
    
    return () => clearTimeout(timer);
  }, []);

  // Function to handle export CSV
  const handleExportCSV = () => {
    // Logic to generate and download CSV would go here
    console.log("Exporting CSV...");
    // Example mock function to simulate download
    setTimeout(() => {
      alert("CSV Export completed");
    }, 1000);
  };

  // Function to handle downloading reports
  const handleDownloadReport = () => {
    // Logic to generate and download report would go here
    console.log("Downloading report...");
    // Example mock function to simulate download
    setTimeout(() => {
      alert("Report download completed");
    }, 1000);
  };
  
  return (
    <div className="lg:px-6 py-6 bg-[#171A1E] min-h-screen">
      <Container>
        <AnimatePresence>
          {isLoading ? (
            <motion.div 
              className="flex justify-center items-center min-h-[80vh]"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
            >
              <div className="w-16 h-16 border-4 border-[#FF343F]/20 border-t-[#FF343F] rounded-full animate-spin"></div>
            </motion.div>
          ) : (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.3 }}
              className="w-full"
            >
              <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-4">
                <div>
                  <h1 className="text-2xl font-bold text-white">Dashboard</h1>
                  <p className="text-gray-400 text-sm">An overview of recent data of customers info, products details analysis</p>
                </div>
                
                <div className="flex flex-col sm:flex-row gap-3 mt-4 md:mt-0 w-full sm:w-auto">
                  <div className="relative">
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
              
              {/* Stats Cards */}
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-6">
                <StatsCard 
                  icon={<div className="p-2 rounded-full bg-[#FF343F]/20 text-[#FF343F]"><FaHeart size={20}/></div>} 
                  title="Total Products Sales" 
                  value="120,347" 
                  change={28.4} 
                />
                <StatsCard 
                  icon={<div className="p-2 rounded-full bg-[#FF343F]/20 text-[#FF343F]"><GiTwoCoins size={20}/></div>} 
                  title="Escrow Balance" 
                  value="23.6K" 
                  change={-12.6} 
                />
                <StatsCard 
                  icon={<div className="p-2 rounded-full bg-[#FF343F]/20 text-[#FF343F]"><GiShoppingBag size={20}/></div>} 
                  title="Total Number Of Orders" 
                  value="756" 
                  change={3.1} 
                />
                <StatsCard 
                  icon={<div className="p-2 rounded-full bg-[#FF343F]/20 text-[#FF343F]"><PiUsersFill size={20}/></div>}  
                  title="Active Vendors" 
                  value="30" 
                  change={11.3} 
                />
              </div>
              
              {/* Charts Section */}
              <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 lg:gap-1 mb-6">
                <div className="lg:col-span-2">
                  <RevenueChart />
                </div>
                <div className="lg:col-span-1">
                  <ProfitChart />
                  <div className="mt-6 lg:mt-1">
                    <SessionsChart />
                  </div>
                </div>
              </div>
              
              {/* Tables Section */}
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                <RecentOrders />
                <TopProducts />
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </Container>
    </div>
  );
};

export default Dashboard;