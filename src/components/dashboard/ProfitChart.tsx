import { motion } from "framer-motion";
import { PiChartLineUp } from "react-icons/pi";
import { TbArrowUpRight } from "react-icons/tb";
import {
  BarChart,
  Bar,
  XAxis,
  Tooltip,
  ResponsiveContainer,
  CartesianGrid,
} from "recharts";

const data = [
  { name: "12 AM", revenue: 12, profit: 4 },
  { name: "", revenue: 18, profit: 5 },
  { name: "", revenue: 25, profit: 8 },
  { name: "4 AM", revenue: 40, profit: 12 },
  { name: "", revenue: 35, profit: 10 },
  { name: "", revenue: 30, profit: 9 },
  { name: "8 AM", revenue: 45, profit: 14 },
  { name: "", revenue: 50, profit: 15 },
  { name: "", revenue: 60, profit: 18 },
  { name: "12 PM", revenue: 70, profit: 22 },
  { name: "", revenue: 65, profit: 20 },
  { name: "", revenue: 60, profit: 19 },
  { name: "4 PM", revenue: 75, profit: 25 },
  { name: "", revenue: 80, profit: 28 },
  { name: "", revenue: 90, profit: 30 },
  { name: "8 PM", revenue: 85, profit: 27 },
  { name: "", revenue: 70, profit: 22 },
  { name: "", revenue: 55, profit: 18 },
  { name: "11 PM", revenue: 40, profit: 12 },
];

const CustomTooltip = ({ active, payload }: any) => {
  if (active && payload && payload.length >= 2) {
    const revenue = payload.find((p: any) => p.dataKey === "revenue")?.value;
    const profit = payload.find((p: any) => p.dataKey === "profit")?.value;
    return (
      <div className="bg-[#292B30] p-2 border border-[#333] rounded-md shadow text-xs">
        <p className="text-gray-300">Revenue: ${revenue}K</p>
        <p className="text-[#FF343F]">Profit: ${profit}K</p>
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
      className="bg-[#1e2024] rounded-lg lg:rounded-l-none lg:rounded-br-none p-5 shadow-md h-fit"
    >
      {/* Header */}
      <div className="flex justify-between items-center mb-2">
        <div>
          <h3 className="text-[#AEB9E1] flex items-center gap-2">
            <PiChartLineUp size={20} />
            <span>Total profit</span>
          </h3>
          <div className="flex items-center gap-2 mt-1">
            <h2 className="text-2xl font-bold text-white">$144.6K</h2>
            <span className="text-xs flex items-center rounded-sm px-1 bg-green-500/20 border border-green-500/30 text-green-500">
              <span>28.5%</span>
              <TbArrowUpRight size={16} />
            </span>
          </div>
        </div>
      </div>

      {/* Chart */}
      <div className="h-[120px] mt-4 w-full">
        <ResponsiveContainer width="100%" height="100%">
          <BarChart
            data={data}
            margin={{ top: 0, right: 0, left: 0, bottom: 0 }}
          >
            <CartesianGrid
              vertical={false}
              stroke="#3a3a3a"
              // strokeDasharray="3 3"
            />
            <XAxis
              dataKey="name"
              axisLine={true}
              tickLine={false}
              tick={{ fill: "#AEB9E1", fontSize: 10 }}
              interval="equidistantPreserveStart"
   
            />
            <Tooltip
              content={<CustomTooltip />}
              cursor={{ fill: "transparent" }}
            />
            {/* <Bar
              dataKey="revenue"
              fill="#444"
              radius={[2, 2, 0, 0]}
              barSize={12}
              animationDuration={0}
            /> */}
            <Bar
              dataKey="profit"
              fill="#FF343F"
              radius={[2, 2, 0, 0]}
              barSize={12}
              animationDuration={1500}
            />
          </BarChart>
        </ResponsiveContainer>
      </div>

      {/* Footer */}
      <div className="flex items-center justify-between border-t border-gray-400/20 mt-4 pt-2">
        <div className="text-xs text-[#AEB9E1]">Last 12 months</div>
        <motion.button
          className="text-xs text-[#FF343F] hover:underline"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          View report
        </motion.button>
      </div>
    </motion.div>
  );
};

export default ProfitChart;
