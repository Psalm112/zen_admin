import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Container from "../components/common/Container";
import VendorRow from "../components/vendorcontrol/VendorRow";
import Title from "../components/common/Title";
import { FaUser } from "react-icons/fa6";
import { PiCalendarBlankFill } from "react-icons/pi";
import { IoIosCheckbox } from "react-icons/io";
import { MdEmail } from "react-icons/md";

interface Vendor {
  id: string;
  name: string;
  storeName: string;
  joinedOn: string;
  status: "Active" | "Blocked" | "Pending";
  email: string;
  products: number;
  selected: boolean;
}

const initialVendors: Vendor[] = [
  {
    id: "1",
    name: "Alpha Key",
    storeName: "John Carter",
    joinedOn: "Apr 12, 2025",
    status: "Active",
    email: "hello@johncarter.com",
    products: 23,
    selected: false,
  },
  {
    id: "2",
    name: "Tech Bros",
    storeName: "Sophie Moore",
    joinedOn: "Apr 12, 2025",
    status: "Blocked",
    email: "contact@sophiemoore.com",
    products: 12,
    selected: false,
  },
  {
    id: "3",
    name: "Femi Jay",
    storeName: "Matt Cannon",
    joinedOn: "Jan 24, 2024",
    status: "Active",
    email: "info@mattcannon.com",
    products: 6,
    selected: false,
  },
  {
    id: "4",
    name: "Kim Bros",
    storeName: "Graham Hills",
    joinedOn: "Apr 12, 2025",
    status: "Pending",
    email: "hi@grahamhills.com",
    products: 67,
    selected: false,
  },
  {
    id: "5",
    name: "Tom Miles",
    storeName: "Sandy Houston",
    joinedOn: "Jan 18, 2024",
    status: "Active",
    email: "contact@sandyhouston.com",
    products: 89,
    selected: false,
  },
  {
    id: "6",
    name: "Tech Bros",
    storeName: "Andy Smith",
    joinedOn: "Jan 15, 2024",
    status: "Pending",
    email: "hello@andysmith.com",
    products: 23,
    selected: false,
  },
];

const VendorControl = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [vendors, setVendors] = useState<Vendor[]>(initialVendors);
  const [filteredVendors, setFilteredVendors] = useState<Vendor[]>([]);
  const [selectAll, setSelectAll] = useState(false);

  // Simulate data loading
  useEffect(() => {
    const timer = setTimeout(() => {
      setFilteredVendors(vendors);
      setIsLoading(false);
    }, 600);

    return () => clearTimeout(timer);
  }, []);

  // Handle select all checkbox
  const handleSelectAll = () => {
    const newSelectAll = !selectAll;
    setSelectAll(newSelectAll);

    const updatedVendors = vendors.map((vendor) => ({
      ...vendor,
      selected: newSelectAll,
    }));

    setVendors(updatedVendors);
    setFilteredVendors(
      filteredVendors.map((vendor) => ({
        ...vendor,
        selected: newSelectAll,
      }))
    );
  };
  // Handle individual vendor selection
  const handleSelectVendor = (id: string) => {
    const updatedVendors = vendors.map((vendor) =>
      vendor.id === id ? { ...vendor, selected: !vendor.selected } : vendor
    );

    setVendors(updatedVendors);
    setFilteredVendors(
      filteredVendors.map((vendor) =>
        vendor.id === id ? { ...vendor, selected: !vendor.selected } : vendor
      )
    );
    setSelectAll(updatedVendors.every((vendor) => vendor.selected));
  };

  // Handle export CSV
  const handleExportCSV = () => {
    console.log("Exporting CSV...");
  };

  // Handle download report
  const handleDownloadReport = () => {
    console.log("Downloading report...");
  };

  // Filter vendors based on search term
  const handleSearch = (searchTerm: string) => {
    const result = vendors.filter(
      (vendor) =>
        vendor.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
        vendor.storeName.toLowerCase().includes(searchTerm.toLowerCase()) ||
        vendor.email.toLowerCase().includes(searchTerm.toLowerCase())
    );
    setFilteredVendors(result);
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

              {/* Vendors Table */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4 }}
                className="bg-[#1e2024] rounded-lg py-5 shadow-md"
              >
                <h2 className="text-lg font-medium text-white px-4 mb-4">
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
                                aria-label="Select all vendors"
                              />
                              <span className="pointer-events-none absolute inset-0 flex items-center justify-center text-white text-xs peer-checked:opacity-100 opacity-0">
                                -
                              </span>
                            </label>
                            <span className="text-sm text-white">
                              Vendor Name
                            </span>
                          </div>
                        </th>
                        <th className="py-3 px-4">
                          <div className="pb-2 flex gap-1 items-center">
                            <FaUser
                              size={20}
                              className="text-[#AEB9E1] max-md:hidden"
                            />
                            <span>Store Name</span>
                          </div>
                        </th>
                        <th className="py-3 px-4">
                          <span className="text-sm text-white">
                            {" "}
                            <div className="pb-2 flex gap-1 items-center">
                              <PiCalendarBlankFill
                                size={20}
                                className="text-[#AEB9E1] max-md:hidden"
                              />
                              <span>Joined On</span>
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
                              <MdEmail
                                size={20}
                                className="text-[#AEB9E1] max-md:hidden"
                              />
                              <span>Email</span>
                            </div>
                          </span>
                        </th>
                        <th className="py-3 px-4">
                          <span className="text-sm text-white">Products</span>
                        </th>
                        <th className="py-3 px-4">
                          <span className="text-sm text-white">Action</span>
                        </th>
                      </tr>
                    </thead>
                    <tbody>
                      {filteredVendors.map((vendor, index) => (
                        <VendorRow
                          key={vendor.id}
                          vendor={vendor}
                          onSelect={handleSelectVendor}
                          className={`${index % 2 !== 1 ? "bg-[#171A1E]" : ""}`}
                        />
                      ))}
                    </tbody>
                  </table>
                </div>

                {filteredVendors.length === 0 && (
                  <div className="text-center py-8">
                    <p className="text-[#AEB9E1]">
                      No vendors found matching your search.
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
