import { motion } from "framer-motion";
import {
  LineChart,
  Line,
  XAxis,
  ResponsiveContainer,
  CartesianGrid,
  YAxis,
} from "recharts";
import { TbArrowUpRight } from "react-icons/tb";
import { BiSolidStopwatch } from "react-icons/bi";

const data = [
  { name: "12 AM", sessions: 10 },
  { name: "", sessions: 30 },
  { name: "", sessions: 15 },
  { name: "", sessions: 40 },
  { name: "4 AM", sessions: 30 },
  { name: "", sessions: 25 },
  { name: "", sessions: 50 },
  { name: "", sessions: 35 },
  { name: "8 AM", sessions: 25 },
  { name: "", sessions: 15 },
  { name: "", sessions: 30 },
  { name: "", sessions: 20 },
  { name: "12 PM", sessions: 35 },
  { name: "", sessions: 25 },
  { name: "", sessions: 15 },
  { name: "", sessions: 20 },
  { name: "4 PM", sessions: 40 },
  { name: "", sessions: 25 },
  { name: "", sessions: 30 },
  { name: "", sessions: 20 },
  { name: "8 PM", sessions: 30 },
  { name: "", sessions: 40 },
  { name: "", sessions: 30 },
  { name: "11 PM", sessions: 20 },
];

const SessionsChart = () => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4, delay: 0.4 }}
      className="bg-[#1e2024] rounded-lg lg:rounded-l-none lg:rounded-tr-none p-5 shadow-md"
    >
      <div className="flex justify-between items-center mb-2">
        <div>
          <h3 className="text-sm text-[#AEB9E1] flex items-center gap-2">
            <BiSolidStopwatch size={20} />
            <span>Total sessions</span>
          </h3>
          <div className="flex items-center gap-2 mt-1">
            <h2 className="text-2xl font-bold text-white">400</h2>
            <span className="text-xs flex items-center rounded-sm px-1 bg-green-500/20 border border-green-500/30 text-green-500">
              <span>16.8%</span>
              <TbArrowUpRight size={16} />
            </span>
          </div>
        </div>
      </div>

      <div className="h-[120px] mt-4">
        <ResponsiveContainer width="100%" height="100%" className="max-xs:scale-110 scale-100 lg:scale-110 -translate-x-7">
          <LineChart
            data={data}
            // margin={{ top: 5, right: 5, left: 5, bottom: 5 }}
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
            <YAxis
              dataKey="sessions"
              axisLine={false}
              tickLine={false}
              tick={{ fill: "#AEB9E1", fontSize: 10 }}
            />
            <Line
              type="monotone"
              dataKey="sessions"
              stroke="#FF343F"
              strokeWidth={2}
              dot={false}
              activeDot={{
                r: 4,
                fill: "#FF343F",
                stroke: "#1e2024",
                strokeWidth: 2,
              }}
              animationDuration={2000}
            />
          </LineChart>
        </ResponsiveContainer>
      </div>

      {/* <div className="text-xs text-gray-400 mt-2">Last 12 months</div> */}
      <div className="flex justify-between items-center border-t border-gray-400/20 mt-4 pt-2">
        <div className="flex items-center gap-2 mt-2">
          <div className="flex items-center gap-1 bg-green-500/20 border border-green-500/30 text-green-500 rounded-sm px-2 py-1">
            <span className="h-2 w-2 rounded-full bg-green-500"></span>
            <span className="text-xs text-white">Live</span>
          </div>
          <span className="text-xs text-[#AEB9E1]">10k visitors</span>
        </div>
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

export default SessionsChart;
