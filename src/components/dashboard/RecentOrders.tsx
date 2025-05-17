
import { motion } from "framer-motion";
import { useState } from "react";

interface Order {
  id: string;
  date: string;
  status: "Paid" | "Pending";
  total: number;
}

const orders: Order[] = [
  { id: "#1532", date: "Dec 30, 10:06 AM", status: "Paid", total: 329.40 },
  { id: "#1531", date: "Dec 29, 2:59 AM", status: "Pending", total: 117.24 },
  { id: "#1530", date: "Dec 29, 12:54 AM", status: "Pending", total: 52.16 },
  { id: "#1529", date: "Dec 28, 2:32 PM", status: "Paid", total: 390.52 },
  { id: "#1528", date: "Dec 27, 2:30 PM", status: "Pending", total: 246.78 },
  { id: "#1527", date: "Dec 26, 9:48 AM", status: "Paid", total: 64.00 },
];

const RecentOrders = () => {
  const [month, setMonth] = useState("Jan 2024");
  
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4, delay: 0.5 }}
      className="bg-[#1e2024] rounded-lg p-5 shadow-md"
    >
      <div className="flex justify-between items-center mb-4">
        <h3 className="text-lg font-medium text-white">Recent orders</h3>
        <button className="px-3 py-1.5 flex items-center gap-2 text-sm bg-[#212428] border border-[#333] rounded-md text-white">
          <span>{month}</span>
          <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <polyline points="6 9 12 15 18 9"></polyline>
          </svg>
        </button>
      </div>
      
      <div className="overflow-x-auto">
        <table className="w-full">
          <thead>
            <tr className="text-left text-gray-400 text-xs border-b border-[#292B30]">
              <th className="pb-2 font-medium">Order</th>
              <th className="pb-2 font-medium">Date</th>
              <th className="pb-2 font-medium">Status</th>
              <th className="pb-2 text-right font-medium">Total</th>
            </tr>
          </thead>
          <tbody>
            {orders.map(order => (
              <tr key={order.id} className="border-b border-[#292B30] text-sm">
                <td className="py-4">
                  <div className="flex items-center gap-2">
                    <input type="checkbox" className="rounded-sm bg-[#292B30] border-none" />
                    <span className={order.status === "Paid" ? "text-white font-medium" : "text-white"}>{order.id}</span>
                  </div>
                </td>
                <td className="py-4 text-gray-400">{order.date}</td>
                <td className="py-4">
                  <span className={`px-2 py-1 rounded text-xs ${
                    order.status === "Paid" 
                      ? "bg-green-900/30 text-green-500" 
                      : "bg-yellow-900/30 text-yellow-500"
                  }`}>
                    ● {order.status}
                  </span>
                </td>
                <td className="py-4 text-right text-white font-medium">$ {order.total.toFixed(2)}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </motion.div>
  );
};

export default RecentOrders;