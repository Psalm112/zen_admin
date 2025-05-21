import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Container from "../components/common/Container";
import DisputeRow from "../components/disputes/DisputeRow";
import Title from "../components/common/Title";
import { PiCalendarBlankFill } from "react-icons/pi";
import { FaUser } from "react-icons/fa6";
import { IoIosCheckbox } from "react-icons/io";
import { FaUserTie } from "react-icons/fa6";
interface Dispute {
  id: string;
  user: {
    name: string;
    email: string;
  };
  date: string;
  status: "Delivered" | "Escalated" | "Resolved" | "Open";
  vendor: string;
  reason: string;
  selected: boolean;
}

const initialDisputes: Dispute[] = [
  {
    id: "#1532",
    user: {
      name: "John Carter",
      email: "hello@johncarter.com",
    },
    date: "Jan 30, 2024",
    status: "Delivered",
    vendor: "Jack Miles",
    reason: "Item not delivered",
    selected: false,
  },
  {
    id: "#1531",
    user: {
      name: "Sophie Moore",
      email: "contact@sophiemoore.com",
    },
    date: "Jan 27, 2024",
    status: "Escalated",
    vendor: "Cole James",
    reason: "Wrong item",
    selected: false,
  },
  {
    id: "#1530",
    user: {
      name: "Matt Cannon",
      email: "info@mattcannon.com",
    },
    date: "Jan 24, 2024",
    status: "Resolved",
    vendor: "Anthony Iles",
    reason: "Item not delivered",
    selected: false,
  },
  {
    id: "#1529",
    user: {
      name: "Graham Hills",
      email: "hills@grahamhills.com",
    },
    date: "Jan 21, 2024",
    status: "Open",
    vendor: "India Jones",
    reason: "Wrong item",
    selected: false,
  },
  {
    id: "#1528",
    user: {
      name: "Sandy Houston",
      email: "contact@sandyhouston.com",
    },
    date: "Jan 18, 2024",
    status: "Resolved",
    vendor: "Lyn Stone",
    reason: "Item not delivered",
    selected: false,
  },
  {
    id: "#1527",
    user: {
      name: "Andy Smith",
      email: "hello@andysmith.com",
    },
    date: "Jan 15, 2024",
    status: "Open",
    vendor: "Cully Val",
    reason: "Wrong item",
    selected: false,
  },
];

const VendorControl = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [disputes, setDisputes] = useState<Dispute[]>(initialDisputes);
  const [filteredDisputes, setFilteredDisputes] = useState<Dispute[]>([]);
  const [selectAll, setSelectAll] = useState(false);

  // Simulate data loading
  useEffect(() => {
    const timer = setTimeout(() => {
      setFilteredDisputes(disputes);
      setIsLoading(false);
    }, 600);

    return () => clearTimeout(timer);
  }, []);

  //   useEffect(() => {
  //     setFilteredDisputes(disputes);
  //   }, [disputes]);
  // Handle select all checkbox
  const handleSelectAll = () => {
    const newSelectAll = !selectAll;
    setSelectAll(newSelectAll);
    setDisputes(
      disputes.map((dispute) => ({
        ...dispute,
        selected: newSelectAll,
      }))
    );
  };

  // Handle individual dispute selection
  const handleSelectDispute = (id: string) => {
    const updatedDisputes = disputes.map((dispute) =>
      dispute.id === id ? { ...dispute, selected: !dispute.selected } : dispute
    );

    setDisputes(updatedDisputes);
    setSelectAll(updatedDisputes.every((dispute) => dispute.selected));
  };

  // Handle export CSV
  const handleExportCSV = () => {
    console.log("Exporting CSV...");
  };

  // Handle download report
  const handleDownloadReport = () => {
    console.log("Downloading report...");
  };

  // Filter disputes based on search term
  const handleSearch = (searchTerm: string) => {
    const result = disputes.filter(
      (dispute) =>
        dispute.id.toLowerCase().includes(searchTerm.toLowerCase()) ||
        dispute.user.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
        dispute.vendor.toLowerCase().includes(searchTerm.toLowerCase()) ||
        dispute.reason.toLowerCase().includes(searchTerm.toLowerCase())
    );
    setFilteredDisputes(result);
  };

  return (
    <div className="lg:px-6 py-6 bg-[#171A1E] min-h-screen">
      <Container>
        <AnimatePresence>
          {isLoading ? (
            <motion.div
              className="flex justify-center items-center min-h-[80vh]"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
            >
              <div className="w-16 h-16 border-4 border-[#FF343F]/20 border-t-[#FF343F] rounded-full animate-spin"></div>
            </motion.div>
          ) : (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.3 }}
              className="w-full"
            >
              <Title
                title="Vendor Control"
                description="Monitor vendor activity, approve new sellers, and enforce product compliance to maintain marketplace standards."
                onSearch={handleSearch}
                handleDownloadReport={handleDownloadReport}
                handleExportCSV={handleExportCSV}
              />

              {/* Disputes Table */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4 }}
                className="bg-[#1e2024] rounded-lg py-5 shadow-md"
              >
                <h2 className="text-lg font-medium text-white mb-4">
                  Disputes
                </h2>

                <div className="overflow-x-auto">
                  <table className="w-full border-collapse">
                    <thead>
                      <tr className="text-left border-b border-[#292B30] ">
                        <th className="py-3 px-4">
                          <div className="flex items-center gap-2">
                            <label className="relative inline-block h-4 w-4">
                              <input
                                type="checkbox"
                                checked={selectAll}
                                onChange={handleSelectAll}
                                className="peer absolute h-4 w-4 appearance-none rounded-sm bg-[#292B30] border border-[#AEB9E1] checked:bg-[#FF343F] checked:border-[#FF343F] focus:ring-[#FF343F] cursor-pointer"
                                aria-label="Select all disputes"
                              />
                              <span className="pointer-events-none absolute inset-0 flex items-center justify-center text-white text-xs peer-checked:opacity-100 opacity-0">
                                -
                              </span>
                            </label>
                            <span className="text-sm text-white">Order</span>
                          </div>
                        </th>
                        <th className="py-3 px-4">
                          <span className="text-sm text-white">
                            {" "}
                            <div className="pb-2 flex gap-1 items-center">
                              <FaUser
                                size={20}
                                className="text-[#AEB9E1] max-md:hidden"
                              />
                              <span>User</span>
                            </div>
                          </span>
                        </th>
                        <th className="py-3 px-4">
                          <span className="text-sm text-white">
                            <div className="pb-2 flex gap-1 items-center">
                              <PiCalendarBlankFill
                                size={20}
                                className="text-[#AEB9E1] max-md:hidden"
                              />
                              <span>Date</span>
                            </div>
                          </span>
                        </th>
                        <th className="py-3 px-4">
                          <span className="text-sm text-white">
                            <div className="pb-2 flex gap-1 items-center">
                              <IoIosCheckbox
                                size={20}
                                className="text-[#AEB9E1] max-md:hidden"
                              />
                              <span>Status</span>
                            </div>
                          </span>
                        </th>
                        <th className="py-3 px-4">
                          <span className="text-sm text-white">
                            <div className="pb-2 flex gap-1 items-center">
                              <FaUserTie
                                size={20}
                                className="text-[#AEB9E1] max-md:hidden"
                              />
                              <span>Vendor</span>
                            </div>
                          </span>
                        </th>
                        <th className="py-3 px-4">
                          <span className="text-sm text-white">Reason</span>
                        </th>
                        <th className="py-3 px-4">
                          <span className="text-sm text-white">Action</span>
                        </th>
                      </tr>
                    </thead>
                    <tbody>
                      {filteredDisputes.map((dispute, index) => (
                        <DisputeRow
                          key={dispute.id}
                          dispute={dispute}
                          onSelect={handleSelectDispute}
                          className={`${index % 2 !== 1 ? "bg-[#171A1E]" : ""}`}
                        />
                      ))}
                    </tbody>
                  </table>
                </div>

                {filteredDisputes.length === 0 && (
                  <div className="text-center py-8">
                    <p className="text-[#AEB9E1]">
                      No disputes found matching your search.
                    </p>
                  </div>
                )}
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>
      </Container>
    </div>
  );
};

export default VendorControl;
