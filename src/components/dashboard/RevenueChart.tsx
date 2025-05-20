import { useState } from "react";
import { motion } from "framer-motion";
import {
  AreaChart,
  Area,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
} from "recharts";
import { TbArrowUpRight } from "react-icons/tb";
import { IoChevronDown } from "react-icons/io5";
import { PiCalendarBlankFill } from "react-icons/pi";

// Mock data
const data = [
  { name: "Jan", revenue: 25, expenses: 15 },
  { name: "Feb", revenue: 35, expenses: 20 },
  { name: "Mar", revenue: 28, expenses: 22 },
  { name: "Apr", revenue: 40, expenses: 25 },
  { name: "May", revenue: 42, expenses: 30 },
  { name: "Jun", revenue: 52, expenses: 28 },
  { name: "Jul", revenue: 60, expenses: 35 },
  { name: "Aug", revenue: 70, expenses: 40 },
  { name: "Sep", revenue: 80, expenses: 45 },
  { name: "Oct", revenue: 90, expenses: 50 },
  { name: "Nov", revenue: 100, expenses: 55 },
  { name: "Dec", revenue: 110, expenses: 60 },
];

const CustomTooltip = ({ active, payload }: any) => {
  if (active && payload && payload.length) {
    return (
      <div className="bg-[#292B30] border border-Red/20 p-3 rounded-md shadow">
        <p className="text-[#FF343F]">
          Revenue: ${payload[0].value.toLocaleString()}
        </p>
        <p className="text-[#39ACFF]">
          Expenses: ${payload[1].value.toLocaleString()}
        </p>
        <p className="text-[#AEB9E1] font-medium">{payload[0].payload.name}</p>
      </div>
    );
  }
  return null;
};

const RevenueChart = () => {
  const [dateRange, setDateRange] = useState("Jan 2024 - Dec 2024");
  const [isDatePickerOpen, setIsDatePickerOpen] = useState(false);

  const toggleDatePicker = () => {
    setIsDatePickerOpen(!isDatePickerOpen);
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4, delay: 0.2 }}
      className="bg-[#1e2024] rounded-lg lg:rounded-r-none p-5 max-lg:pb-10 shadow-md h-full "
    >
      <div className="flex justify-between flex-wrap gap-4 items-baseline mb-6">
        <div>
          <h3 className="text-sm text-[#AEB9E1]">Total revenue</h3>
          <div className="flex items-center gap-2 mt-1">
            <h2 className="text-2xl font-bold text-white">$240.8K</h2>
            {/* <span className={`text-xs flex items-center rounded-sm px-1 ${isPositive ? 'bg-green-500/20 border border-green-500/30 text-green-500' : 'bg-red-500/20 border border-red-500/30 text-red-500'}`}> */}
            <span
              className={`text-xs flex items-center rounded-sm px-1 bg-green-500/20 border border-green-500/30 text-green-500`}
            >
              <span>{Math.abs(24.6)}%</span>
              {/* <span>{isPositive ? <TbArrowUpRight size={20}/> : <TbArrowDownRight size={20}/>}</span>  */}
              <span>
                <TbArrowUpRight size={20} />
              </span>
            </span>
          </div>
        </div>

        <div className="flex gap-6 flex-wrap items-center">
          <div className="flex items-center gap-2">
            <span className="h-3 w-3 rounded-full bg-[#FF343F]"></span>
            <span className="text-xs text-[#AEB9E1]">Revenue</span>
          </div>
          <div className="flex items-center gap-2">
            <span className="h-3 w-3 rounded-full bg-[#39ACFF]"></span>
            <span className="text-xs text-[#AEB9E1]">Expenses</span>
          </div>

          <div className="relative">
            <motion.button
              onClick={toggleDatePicker}
              className="px-3 py-1.5 flex items-center gap-2 text-sm bg-[#212428] border border-[#333] rounded-md text-[#AEB9E1]"
              aria-expanded={isDatePickerOpen}
              aria-haspopup="listbox"
              whileHover={{ backgroundColor: "#292B30" }}
            >
              <PiCalendarBlankFill size={20} />
              <span>{dateRange}</span>
              <IoChevronDown />
            </motion.button>

            {isDatePickerOpen && (
              <motion.div
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                className="absolute right-0 mt-2 w-56 bg-[#292B30] border border-[#333] rounded-md shadow-lg z-10"
              >
                <ul role="listbox" className="py-1">
                  <li
                    role="option"
                    onClick={() => {
                      setDateRange("Jan 2024 - Dec 2024");
                      setIsDatePickerOpen(false);
                    }}
                    className="px-4 py-2 text-sm text-white hover:bg-[#333] cursor-pointer"
                  >
                    Jan 2024 - Dec 2024
                  </li>
                  <li
                    role="option"
                    onClick={() => {
                      setDateRange("Jul 2023 - Jun 2024");
                      setIsDatePickerOpen(false);
                    }}
                    className="px-4 py-2 text-sm text-white hover:bg-[#333] cursor-pointer"
                  >
                    Jul 2023 - Jun 2024
                  </li>
                  <li
                    role="option"
                    onClick={() => {
                      setDateRange("Jan 2023 - Dec 2023");
                      setIsDatePickerOpen(false);
                    }}
                    className="px-4 py-2 text-sm text-white hover:bg-[#333] cursor-pointer"
                  >
                    Jan 2023 - Dec 2023
                  </li>
                </ul>
              </motion.div>
            )}
          </div>
        </div>
      </div>

      {/* Highlighted data point */}
      {/* <div className="ml-28 mb-4">
        <div className="text-[#39ACFF] text-xl font-bold">$125.2k</div>
        <div className="text-xs text-gray-400">June 21, 2023</div>
      </div> */}

      <ResponsiveContainer
        width="100%"
        height={`${window.innerWidth <= 643 ? "60%" : "80%"}`}
        className="scale-120 xs:scale-110 md:scale-none max-md:-translate-x-3"
      >
        <AreaChart
          data={data}
          margin={{ top: 10, right: 30, left: 0, bottom: 0 }}
        >
          <defs>
            <linearGradient id="colorRevenue" x1="0" y1="0" x2="0" y2="1.3">
              <stop offset="5%" stopColor="#FF343E43" stopOpacity={0.8} />
              <stop offset="95%" stopColor="#1e2024" stopOpacity={0} />
            </linearGradient>
            <linearGradient id="colorExpenses" x1="0" y1="0" x2="0" y2="1.3">
              <stop offset="5%" stopColor="#39ADFF55" stopOpacity={0.8} />
              <stop offset="95%" stopColor="#1e2024" stopOpacity={0} />
            </linearGradient>
          </defs>
          <XAxis
            dataKey="name"
            axisLine={false}
            tickLine={false}
            tick={{
              fill: "#AEB9E1",
              fontSize: window.innerWidth <= 643 ? 10 : "initial",
            }}
          />
          <YAxis
            axisLine={false}
            tickLine={false}
            tick={{
              fill: "#AEB9E1",
              fontSize: window.innerWidth <= 643 ? 10 : "initial",
            }}
          />
          <CartesianGrid vertical={false} stroke="#3a3a3a" />
          <Tooltip content={<CustomTooltip />} />
          <Area
            type="monotone"
            dataKey="revenue"
            stroke="#FF343F"
            fillOpacity={1}
            fill="url(#colorRevenue)"
            strokeWidth={1}
            activeDot={{
              r: 6,
              fill: "#1e2024",
              stroke: "#FF343F",
              strokeWidth: 1,
            }}
          />
          <Area
            type="monotone"
            dataKey="expenses"
            stroke="#39ACFF"
            fillOpacity={1}
            fill="url(#colorExpenses)"
            strokeWidth={1}
            activeDot={{
              r: 6,
              fill: "#1e2024",
              stroke: "#39ACFF",
              strokeWidth: 1,
            }}
          />
        </AreaChart>
      </ResponsiveContainer>
    </motion.div>
  );
};

export default RevenueChart;
