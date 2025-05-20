import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import StatsCard from "../components/common/StatsCard";
import RevenueChart from "../components/dashboard/RevenueChart";
import ProfitChart from "../components/dashboard/ProfitChart";
import SessionsChart from "../components/dashboard/SessionsChart";
import RecentOrders from "../components/dashboard/RecentOrders";
import TopProducts from "../components/dashboard/TopProducts";
import Container from "../components/common/Container";

import { FaHeart } from "react-icons/fa6";
import { PiUsersFill } from "react-icons/pi";
import { GiShoppingBag, GiTwoCoins } from "react-icons/gi";
import Title from "../components/common/Title";

const Dashboard = () => {
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
              <Title
                text="Dashboard"
                description="An overview of recent data of customers info, products details analysis"
                handleExportCSV={handleExportCSV}
                handleDownloadReport={handleDownloadReport}
              />

              {/* Stats Cards */}
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-6">
                <StatsCard
                  icon={
                    <div className="p-2 rounded-full bg-[#FF343F]/20 text-[#FF343F]">
                      <FaHeart size={20} />
                    </div>
                  }
                  title="Total Products Sales"
                  value="120,347"
                  change={28.4}
                />
                <StatsCard
                  icon={
                    <div className="p-2 rounded-full bg-[#FF343F]/20 text-[#FF343F]">
                      <GiTwoCoins size={20} />
                    </div>
                  }
                  title="Escrow Balance"
                  value="23.6K"
                  change={-12.6}
                />
                <StatsCard
                  icon={
                    <div className="p-2 rounded-full bg-[#FF343F]/20 text-[#FF343F]">
                      <GiShoppingBag size={20} />
                    </div>
                  }
                  title="Total Number Of Orders"
                  value="756"
                  change={3.1}
                />
                <StatsCard
                  icon={
                    <div className="p-2 rounded-full bg-[#FF343F]/20 text-[#FF343F]">
                      <PiUsersFill size={20} />
                    </div>
                  }
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
