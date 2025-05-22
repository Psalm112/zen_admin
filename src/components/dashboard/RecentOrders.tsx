import { motion } from "framer-motion";
import { useState } from "react";
import { CgCheck } from "react-icons/cg";
import { IoIosCheckbox } from "react-icons/io";
import { IoChevronDown } from "react-icons/io5";
import { PiCalendarBlankFill } from "react-icons/pi";

interface Order {
  id: string;
  date: string;
  status: "Paid" | "Pending";
  total: number;
  selected: boolean;
}

const initialOrders: Order[] = [
  {
    id: "#1532",
    date: "Dec 30, 10:06 AM",
    status: "Paid",
    total: 329.4,
    selected: false,
  },
  {
    id: "#1531",
    date: "Dec 29, 2:59 AM",
    status: "Pending",
    total: 117.24,
    selected: false,
  },
  {
    id: "#1530",
    date: "Dec 29, 12:54 AM",
    status: "Pending",
    total: 52.16,
    selected: false,
  },
  {
    id: "#1529",
    date: "Dec 28, 2:32 PM",
    status: "Paid",
    total: 350.52,
    selected: false,
  },
  {
    id: "#1528",
    date: "Dec 27, 2:20 PM",
    status: "Pending",
    total: 246.78,
    selected: false,
  },
  {
    id: "#1527",
    date: "Dec 26, 9:48 AM",
    status: "Paid",
    total: 64.0,
    selected: false,
  },
];

const RecentOrders = () => {
  const [month, setMonth] = useState("Jan 2024");
  const [orders, setOrders] = useState<Order[]>(initialOrders);
  const [selectAll, setSelectAll] = useState(false);
  const [isMonthPickerOpen, setIsMonthPickerOpen] = useState(false);

  // Toggle the month picker dropdown
  const toggleMonthPicker = () => {
    setIsMonthPickerOpen(!isMonthPickerOpen);
  };

  // Handle select all checkbox
  const handleSelectAll = () => {
    const newSelectAll = !selectAll;
    setSelectAll(newSelectAll);
    setOrders(
      orders.map((order) => ({
        ...order,
        selected: newSelectAll,
      }))
    );
  };

  // Handle individual order selection
  const handleSelectOrder = (id: string) => {
    const updatedOrders = orders.map((order) =>
      order.id === id ? { ...order, selected: !order.selected } : order
    );

    setOrders(updatedOrders);
    setSelectAll(updatedOrders.every((order) => order.selected));
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4, delay: 0.5 }}
      className="bg-[#1e2024] rounded-lg py-5 shadow-md"
    >
      <div className="flex justify-between items-center mb-4 px-5">
        <h3 className="text-lg font-medium text-white">Recent orders</h3>
        <div className="relative">
          <motion.button
            onClick={toggleMonthPicker}
            className="px-3 py-1.5 flex items-center gap-2 text-sm bg-[#212428] border border-[#333] rounded-md text-[#AEB9E1]"
            aria-expanded={isMonthPickerOpen}
            aria-haspopup="listbox"
            whileHover={{ backgroundColor: "#292B30" }}
          >
            <PiCalendarBlankFill size={20} />
            <span>{month}</span>
            <IoChevronDown size={20} />
          </motion.button>

          {isMonthPickerOpen && (
            <motion.div
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              className="absolute right-0 mt-2 w-48 bg-[#292B30] border border-[#333] rounded-md shadow-lg z-30"
            >
              <ul role="listbox" className="py-1">
                <li
                  role="option"
                  onClick={() => {
                    setMonth("Jan 2024");
                    setIsMonthPickerOpen(false);
                  }}
                  className="px-4 py-2 text-sm text-white hover:bg-[#333] cursor-pointer"
                >
                  Jan 2024
                </li>
                <li
                  role="option"
                  onClick={() => {
                    setMonth("Dec 2023");
                    setIsMonthPickerOpen(false);
                  }}
                  className="px-4 py-2 text-sm text-white hover:bg-[#333] cursor-pointer"
                >
                  Dec 2023
                </li>
                <li
                  role="option"
                  onClick={() => {
                    setMonth("Nov 2023");
                    setIsMonthPickerOpen(false);
                  }}
                  className="px-4 py-2 text-sm text-white hover:bg-[#333] cursor-pointer"
                >
                  Nov 2023
                </li>
              </ul>
            </motion.div>
          )}
        </div>
      </div>

      <div className="overflow-x-auto max-h-[400px] overflow-y-auto scrollbar-thin scrollbar-thumb-[#333] scrollbar-track-[#1e2024]">
        <table className="w-full border-collapse">
          <thead className="sticky top-0 bg-[#1e2024] z-10 ">
            <tr className="text-left text-white text-xs border-b border-[#292B30] px-5">
              <th className="pb-2 pl-5">
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
                  <span>Order</span>
                </div>
              </th>
              <th>
                <div className="pb-2 flex gap-1 items-center max-md:px-2">
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
              <th className="pb-2 text-right pr-5 max-md:pl-2">Total</th>
            </tr>
          </thead>
          <tbody>
            {orders.map((order, index) => (
              <motion.tr
                key={order.id}
                className={`border-b border-[#292B30] text-sm ${
                  index % 2 !== 1 ? "bg-[#171A1E]" : ""
                }`}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.3 }}
                whileHover={{ backgroundColor: "rgba(255,255,255,0.02)" }}
              >
                <td className="py-4 pl-5 ">
                  <div className="flex items-center gap-2">
                    <label className="relative inline-block h-4 w-4">
                      <input
                        type="checkbox"
                        checked={order.selected}
                        onChange={() => handleSelectOrder(order.id)}
                        className="peer absolute h-4 w-4 appearance-none rounded-sm bg-[#292B30] border border-[#AEB9E1] checked:bg-[#FF343F] checked:border-[#FF343F] focus:ring-[#FF343F] cursor-pointer"
                      />
                      <span className="pointer-events-none absolute inset-0 flex items-center justify-center text-white text-xs peer-checked:opacity-100 opacity-0">
                        <CgCheck />
                      </span>
                    </label>

                    <span
                      className={
                        order.status === "Paid"
                          ? "text-white font-medium"
                          : "text-white"
                      }
                    >
                      {order.id}
                    </span>
                  </div>
                </td>
                <td
                  className={`py-4 max-md:px-2 ${
                    order.status !== "Paid" ? "text-[#AEB9E1]" : "text-gray-400"
                  }`}
                >
                  {order.date}
                </td>
                <td className="py-4">
                  <span
                    className={`inline-flex items-center gap-1 px-2 py-1 rounded text-xs font-medium ${
                      order.status === "Paid"
                        ? "bg-green-900/30 text-green-500 border border-green-500/30"
                        : "bg-yellow-900/30 text-yellow-500 border border-yellow-500/30"
                    }`}
                  >
                    <span className="text-lg leading-3">•</span>
                    {order.status}
                  </span>
                </td>
                <td
                  className={`py-4 text-right font-medium pr-5 max-md:pl-2 ${
                    order.status !== "Paid" ? "text-[#AEB9E1]" : "text-white"
                  }`}
                >
                  $ {order.total.toFixed(2)}
                </td>
              </motion.tr>
            ))}
          </tbody>
        </table>
      </div>
    </motion.div>
  );
};

export default RecentOrders;
