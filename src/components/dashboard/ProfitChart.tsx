
import { motion } from "framer-motion";
import { BarChart, Bar, XAxis, Tooltip, ResponsiveContainer } from "recharts";

const data = [
  { name: "12 AM", profit: 20 },
  { name: "", profit: 35 },
  { name: "", profit: 25 },
  { name: "", profit: 45 },
  { name: "4 PM", profit: 30 },
  { name: "", profit: 20 },
  { name: "", profit: 38 },
  { name: "", profit: 25 },
  { name: "8 PM", profit: 40 },
  { name: "", profit: 30 },
  { name: "", profit: 35 },
  { name: "11 PM", profit: 28 },
];

const CustomTooltip = ({ active, payload, label }: any) => {
  if (active && payload && payload.length) {
    return (
      <div className="bg-[#292B30] p-2 border border-[#333] rounded-md shadow">
        <p className="text-[#FF343F] text-xs">${payload[0].value}K</p>
      </div>
    );
  }
  return null;
};

const ProfitChart = () => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4, delay: 0.3 }}
      className="bg-[#1e2024] rounded-lg p-5 shadow-md"
    >
      <div className="flex justify-between items-center mb-2">
        <div>
          <h3 className="text-sm text-gray-400">Total profit</h3>
          <div className="flex items-baseline gap-2 mt-1">
            <h2 className="text-2xl font-bold text-white">$144.6K</h2>
            <span className="text-xs text-green-500">↑ 28.5%</span>
          </div>
        </div>
      </div>
      
      <div className="h-[120px] mt-4">
        <ResponsiveContainer width="100%" height="100%">
          <BarChart data={data} margin={{ top: 0, right: 0, left: 0, bottom: 0 }}>
            <XAxis dataKey="name" axisLine={false} tickLine={false} tick={{ fill: '#666' }} />
            <Tooltip content={<CustomTooltip />} />
            <Bar dataKey="profit" fill="#FF343F" radius={[2, 2, 0, 0]} barSize={12} />
          </BarChart>
        </ResponsiveContainer>
      </div>
      
      <div className="text-xs text-gray-400 mt-2">Last 12 months</div>
      <div className="flex justify-end">
        <button className="text-xs text-[#FF343F]">View report</button>
      </div>
    </motion.div>
  );
};

export default ProfitChart;