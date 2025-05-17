import { motion } from "framer-motion";
import { LineChart, Line, XAxis, ResponsiveContainer } from "recharts";

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
      className="bg-[#1e2024] rounded-lg p-5 shadow-md"
    >
      <div className="flex justify-between items-center mb-2">
        <div>
          <h3 className="text-sm text-gray-400">Total sessions</h3>
          <div className="flex items-baseline gap-2 mt-1">
            <h2 className="text-2xl font-bold text-white">400</h2>
            <span className="text-xs text-green-500">↑ 16.8%</span>
          </div>
        </div>
      </div>
      
      <div className="h-[120px] mt-4">
        <ResponsiveContainer width="100%" height="100%">
          <LineChart data={data} margin={{ top: 5, right: 5, left: 5, bottom: 5 }}>
            <XAxis dataKey="name" axisLine={false} tickLine={false} tick={{ fill: '#666' }} />
            <Line type="monotone" dataKey="sessions" stroke="#FF343F" strokeWidth={2} dot={false} />
          </LineChart>
        </ResponsiveContainer>
      </div>
      
      <div className="text-xs text-gray-400 mt-2">Last 12 months</div>
      <div className="flex justify-between items-center">
        <div className="flex items-center gap-2 mt-2">
          <span className="h-2 w-2 rounded-full bg-green-500"></span>
          <span className="text-xs text-white">Live</span>
          <span className="text-xs text-gray-400">10k visitors</span>
        </div>
        <button className="text-xs text-[#FF343F]">View report</button>
      </div>
    </motion.div>
  );
};

export default SessionsChart;