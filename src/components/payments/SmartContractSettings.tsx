import { useState } from "react";
import { motion } from "framer-motion";
import Button from "../common/Button";
import { BsQuestionCircle } from "react-icons/bs";
const SmartContractSettings = () => {
  const [contractAddress, setContractAddress] = useState("");
  const [currentAddress, setCurrentAddress] = useState("0XA04C123...458F");

  const handleAddressChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setContractAddress(e.target.value);
  };

  const handleSave = () => {
    if (contractAddress) {
      setCurrentAddress(contractAddress);
      setContractAddress("");
    }
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4, delay: 0.3 }}
      className="bg-[#1e2024] rounded-lg p-5 shadow-md"
    >
      <h3 className="text-lg font-medium text-white mb-4">
        Smart Contract Settings
      </h3>

      <div className="flex flex-col md:flex-row md:items-center gap-6">
        <div className="md:w-1/3">
          <p className="text-gray-400 mb-2">Current Payment Address:</p>
          <span className="bg-green-500/20 border border-green-500/30 text-green-500 p-1">
            {currentAddress}
          </span>
        </div>

        <div className="md:w-2/3 flex flex-wrap items-start gap-4">
          <p className="text-gray-400 mb-2">Update Address</p>
          <div className="flex flex-col sm:flex-row gap-4 items-start">
            <div className="w-full">
              <input
                type="text"
                placeholder="Enter New Contract Address"
                value={contractAddress}
                onChange={handleAddressChange}
                className="bg-[#292B30] border border-[#333] rounded-md px-4 py-2 text-white w-full focus:outline-none focus:ring-2 focus:ring-[#FF343F]/30 transition-all"
              />
              <div className="flex items-center gap-2 mt-2 text-xs text-white">
                <BsQuestionCircle size={16} className="text-gray-400" />
                <span>
                  Ensure this address is correct. All incoming payments will
                  route through this smart contract
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="mt-6">
        <Button
          title="Save Contract Address"
          className="bg-Red break-normal mx-auto max-w-md w-full flex justify-center items-center text-white rounded-md px-6 py-3 font-medium hover:bg-[#FF343F]/90 transition-all"
          onClick={handleSave}
        />
      </div>
    </motion.div>
  );
};

export default SmartContractSettings;
