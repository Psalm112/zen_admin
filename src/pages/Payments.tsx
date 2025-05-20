import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import Container from "../components/common/Container";
import SmartContractSettings from "../components/payments/SmartContractSettings";
import PaymentHistory from "../components/payments/PaymentHistory";
import { FaHeart, FaMoneyBillTransfer } from "react-icons/fa6";
import StatsCard from "../components/common/StatsCard";
import { GiTwoCoins } from "react-icons/gi";
import { BsFillFuelPumpFill } from "react-icons/bs";
import Title from "../components/common/Title";

const Payments = () => {
  const [isLoading, setIsLoading] = useState(true);

  // Simulating data loading
  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 800);

    return () => clearTimeout(timer);
  }, []);

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
                text="Payment"
                description="Withdraw profits and manage the payment contract address. Ensure gas fees are covered for smooth transactions."
                // handleExportCSV={handleExportCSV}
                // handleDownloadReport={handleDownloadReport}
              />

              {/* Stats Cards */}
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-6">
                <StatsCard
                  icon={
                    <div className="p-2 rounded-full bg-[#FF343F]/20 text-[#FF343F]">
                      <FaHeart size={20} />
                    </div>
                  }
                  title="Total Platform Profit"
                  value="120,347"
                  change={28.4}
                />
                <StatsCard
                  icon={
                    <div className="p-2 rounded-full bg-[#FF343F]/20 text-[#FF343F]">
                      <GiTwoCoins size={20} />
                    </div>
                  }
                  title="Pending Escrow Balance"
                  value="23.6K"
                  change={-12.6}
                />
                <StatsCard
                  icon={
                    <div className="p-2 rounded-full bg-[#FF343F]/20 text-[#FF343F]">
                      <BsFillFuelPumpFill size={20} />
                    </div>
                  }
                  title="Estimated Gas Fee"
                  value="0.004 ETH"
                  change={3.1}
                />
                <StatsCard
                  icon={
                    <div className="p-2 rounded-full bg-[#FF343F]/20 text-[#FF343F]">
                      <FaMoneyBillTransfer size={20} />
                    </div>
                  }
                  title="Last Withdrawal"
                  value="30"
                  Date="May 12, 2025"
                  change={2500}
                />
              </div>

              {/* Smart Contract Settings */}
              <div className="mb-6">
                <SmartContractSettings />
              </div>

              {/* Payment History */}
              <div>
                <PaymentHistory />
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </Container>
    </div>
  );
};

export default Payments;
