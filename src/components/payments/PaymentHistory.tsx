import { useState } from "react";
import { motion } from "framer-motion";
import {
  PiCalendarBlankFill,
  PiCurrencyDollarSimpleFill,
} from "react-icons/pi";
import { IoIosCheckbox } from "react-icons/io";
import { BsFillFuelPumpFill } from "react-icons/bs";

interface Transaction {
  id: string;
  amount: string;
  date: string;
  status: "Success" | "Failed";
  gasFee: string;
  selected: boolean;
}

const initialTransactions: Transaction[] = [
  {
    id: "0x345...a8F",
    amount: "$2,500",
    date: "Apr 12, 2025",
    status: "Success",
    gasFee: "$3.80",
    selected: false,
  },
  {
    id: "0x345...a8F",
    amount: "$2,500",
    date: "Apr 12, 2025",
    status: "Failed",
    gasFee: "$3.80",
    selected: false,
  },
  {
    id: "0x345...a8F",
    amount: "$2,500",
    date: "Jan 24, 2024",
    status: "Success",
    gasFee: "$3.80",
    selected: false,
  },
  {
    id: "0x345...a8F",
    amount: "$2,500",
    date: "Apr 12, 2025",
    status: "Failed",
    gasFee: "$3.80",
    selected: false,
  },
  {
    id: "0x345...a8F",
    amount: "$2,500",
    date: "Jan 18, 2024",
    status: "Success",
    gasFee: "$3.80",
    selected: false,
  },
  {
    id: "0x345...a8F",
    amount: "$2,500",
    date: "Jan 15, 2024",
    status: "Failed",
    gasFee: "$3.80",
    selected: false,
  },
];

const PaymentHistory = () => {
  const [transactions, setTransactions] =
    useState<Transaction[]>(initialTransactions);
  const [selectAll, setSelectAll] = useState(false);

  const handleSelectAll = () => {
    const newSelectAll = !selectAll;
    setSelectAll(newSelectAll);
    setTransactions(
      transactions.map((transaction) => ({
        ...transaction,
        selected: newSelectAll,
      }))
    );
  };

  const handleSelectTransaction = (id: string) => {
    const updatedTransactions = transactions.map((transaction, index) =>
      index ===
      transactions.findIndex((t) => t.id === id && t.date === transaction.date)
        ? { ...transaction, selected: !transaction.selected }
        : transaction
    );

    setTransactions(updatedTransactions);
    setSelectAll(
      updatedTransactions.every((transaction) => transaction.selected)
    );
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4, delay: 0.5 }}
      className="bg-[#1e2024] rounded-lg p-5 shadow-md"
    >
      <h3 className="text-lg font-medium text-white mb-4">Payment History</h3>

      <div className="overflow-x-auto max-h-[400px] overflow-y-auto scrollbar-thin scrollbar-thumb-[#333] scrollbar-track-[#1e2024]">
        <table className="w-full max-md:border-separate max-md:border-spacing-2">
          <thead className="sticky top-0 bg-[#1e2024] z-10">
            <tr className="text-left text-white text-xs border-b border-[#292B30]">
              <th className="pb-2">
                <div className="flex items-center gap-2">
                  <label className="relative inline-block h-4 w-4">
                    <input
                      type="checkbox"
                      checked={selectAll}
                      onChange={handleSelectAll}
                      className="peer absolute h-4 w-4 appearance-none rounded-sm bg-[#292B30] border border-[#AEB9E1] checked:bg-[#FF343F] checked:border-[#FF343F] focus:ring-[#FF343F] cursor-pointer"
                    />
                    <span className="pointer-events-none absolute inset-0 flex items-center justify-center text-white text-xs peer-checked:opacity-100 opacity-0">
                      -
                    </span>
                  </label>
                  <span>Transaction ID</span>
                </div>
              </th>
              <th>
                <div className="pb-2 flex gap-1 items-center">
                  <PiCurrencyDollarSimpleFill
                    size={20}
                    className="text-[#AEB9E1] max-md:hidden"
                  />
                  <span>Amount</span>
                </div>
              </th>
              <th>
                <div className="pb-2 flex gap-1 items-center">
                  <PiCalendarBlankFill
                    size={20}
                    className="text-[#AEB9E1] max-md:hidden"
                  />
                  <span>Date</span>
                </div>
              </th>
              <th>
                <div className="pb-2 flex gap-1 items-center">
                  <IoIosCheckbox
                    size={20}
                    className="text-[#AEB9E1] max-md:hidden"
                  />
                  <span>Status</span>
                </div>
              </th>
              <th className="pb-2 text-right">
                <div className="flex gap-1 items-center justify-end">
                  <BsFillFuelPumpFill
                    size={20}
                    className="text-[#AEB9E1] max-md:hidden"
                  />
                  <span>Gas Fee</span>
                </div>
              </th>
            </tr>
          </thead>
          <tbody>
            {transactions.map((transaction, index) => (
              <motion.tr
                key={`${transaction.id}-${index}`}
                className="border-b border-[#292B30] text-sm"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.3 }}
                whileHover={{ backgroundColor: "rgba(255,255,255,0.02)" }}
              >
                <td className="py-4">
                  <div className="flex items-center gap-2">
                    <label className="relative inline-block h-4 w-4">
                      <input
                        type="checkbox"
                        checked={transaction.selected}
                        onChange={() => handleSelectTransaction(transaction.id)}
                        className="peer absolute h-4 w-4 appearance-none rounded-sm bg-[#292B30] border border-[#AEB9E1] checked:bg-[#FF343F] checked:border-[#FF343F] focus:ring-[#FF343F] cursor-pointer"
                      />
                      <span className="pointer-events-none absolute inset-0 flex items-center justify-center text-white text-xs peer-checked:opacity-100 opacity-0">
                        ✓
                      </span>
                    </label>
                    <span className="text-white">{transaction.id}</span>
                  </div>
                </td>
                <td className="py-4 text-white">{transaction.amount}</td>
                <td className="py-4 text-[#AEB9E1]">{transaction.date}</td>
                <td className="py-4">
                  <span
                    className={`inline-flex items-center gap-1 px-2 py-1 rounded text-xs font-medium ${
                      transaction.status === "Success"
                        ? "bg-green-900/30 text-green-500 border border-green-500/30"
                        : "bg-red-900/30 text-red-500 border border-red-500/30"
                    }`}
                  >
                    <span className="text-lg leading-3">•</span>
                    {transaction.status}
                  </span>
                </td>
                <td className="py-4 text-right text-white">
                  {transaction.gasFee}
                </td>
              </motion.tr>
            ))}
          </tbody>
        </table>
      </div>
    </motion.div>
  );
};

export default PaymentHistory;
