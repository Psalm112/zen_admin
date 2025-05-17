import { useState } from "react";
import { motion } from "framer-motion";
import { AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from "recharts";

// Mock data
const data = [
  { name: "Jan", revenue: 25000, expenses: 15000 },
  { name: "Feb", revenue: 35000, expenses: 20000 },
  { name: "Mar", revenue: 28000, expenses: 22000 },
  { name: "Apr", revenue: 40000, expenses: 25000 },
  { name: "May", revenue: 42000, expenses: 30000 },
  { name: "Jun", revenue: 52000, expenses: 28000 },
  { name: "Jul", revenue: 60000, expenses: 35000 },
  { name: "Aug", revenue: 70000, expenses: 40000 },
  { name: "Sep", revenue: 80000, expenses: 45000 },
  { name: "Oct", revenue: 90000, expenses: 50000 },
  { name: "Nov", revenue: 100000, expenses: 55000 },
  { name: "Dec", revenue: 110000, expenses: 60000 },
];

const CustomTooltip = ({ active, payload }: any) => {
  if (active && payload && payload.length) {
    return (
      <div className="bg-[#292B30] p-3 border border-[#333] rounded-md shadow">
        <p className="text-white font-medium">{payload[0].payload.name}</p>
        <p className="text-[#FF343F]">Revenue: ${payload[0].value.toLocaleString()}</p>
        <p className="text-[#39ACFF]">Expenses: ${payload[1].value.toLocaleString()}</p>
      </div>
    );
  }
  return null;
};

const RevenueChart = () => {
  const [dateRange, setDateRange] = useState("Jan 2024 - Dec 2024");
  
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4, delay: 0.2 }}
      className="bg-[#1e2024] rounded-lg p-5 shadow-md h-[400px]"
    >
      <div className="flex justify-between items-center mb-6">
        <div>
          <h3 className="text-sm text-gray-400">Total revenue</h3>
          <div className="flex items-baseline gap-2 mt-1">
            <h2 className="text-2xl font-bold text-white">$240.8K</h2>
            <span className="text-xs text-green-500">↑ 24.6%</span>
          </div>
        </div>
        
        <div className="flex gap-6 items-center">
          <div className="flex items-center gap-2">
            <span className="h-3 w-3 rounded-full bg-[#FF343F]"></span>
            <span className="text-xs text-gray-400">Revenue</span>
          </div>
          <div className="flex items-center gap-2">
            <span className="h-3 w-3 rounded-full bg-[#39ACFF]"></span>
            <span className="text-xs text-gray-400">Expenses</span>
          </div>
          
          <button className="px-3 py-1.5 flex items-center gap-2 text-sm bg-[#212428] border border-[#333] rounded-md text-white">
            <span>{dateRange}</span>
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <polyline points="6 9 12 15 18 9"></polyline>
            </svg>
          </button>
        </div>
      </div>
      
      {/* Highlighted data point */}
      <div className="ml-28 mb-4">
        <div className="text-[#39ACFF] text-xl font-bold">$125.2k</div>
        <div className="text-xs text-gray-400">June 21, 2023</div>
      </div>
      
      <ResponsiveContainer width="100%" height="70%">
        <AreaChart data={data} margin={{ top: 10, right: 30, left: 0, bottom: 0 }}>
          <defs>
            <linearGradient id="colorRevenue" x1="0" y1="0" x2="0" y2="1">
              <stop offset="5%" stopColor="#FF343F" stopOpacity={0.8}/>
              <stop offset="95%" stopColor="#FF343F" stopOpacity={0}/>
            </linearGradient>
            <linearGradient id="colorExpenses" x1="0" y1="0" x2="0" y2="1">
              <stop offset="5%" stopColor="#39ACFF" stopOpacity={0.8}/>
              <stop offset="95%" stopColor="#39ACFF" stopOpacity={0}/>
            </linearGradient>
          </defs>
          <XAxis dataKey="name" axisLine={false} tickLine={false} tick={{ fill: '#666' }} />
          <YAxis axisLine={false} tickLine={false} tick={{ fill: '#666' }} />
          <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="#333" />
          <Tooltip content={<CustomTooltip />} />
          <Area type="monotone" dataKey="revenue" stroke="#FF343F" fillOpacity={1} fill="url(#colorRevenue)" />
          <Area type="monotone" dataKey="expenses" stroke="#39ACFF" fillOpacity={1} fill="url(#colorExpenses)" />
        </AreaChart>
      </ResponsiveContainer>
    </motion.div>
  );
};

export default RevenueChart;