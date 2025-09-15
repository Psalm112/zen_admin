import { motion } from "framer-motion";
import { useState, useEffect } from "react";
import { PiCalendarBlankFill } from "react-icons/pi";

interface Product {
  id: string;
  name: string;
  images: string;
  stock: number;
  price: number;
}

const TopProducts = () => {
  const [month, setMonth] = useState("Jan 2024");
  const [isMonthPickerOpen, setIsMonthPickerOpen] = useState(false);
  const [products, setProducts] = useState<Product[]>([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    setIsLoading(true);
    setError(null);
    const baseUrl = import.meta.env.VITE_API_URL;
    fetch(`${baseUrl}/products`)
      .then((res) => {
        if (!res.ok) throw new Error("Failed to fetch products");
        return res.json();
      })
      .then((data) => setProducts(data))
      .catch((err) => setError(err.message))
      .finally(() => setIsLoading(false));
  }, []);

  // Toggle the month picker dropdown
  const toggleMonthPicker = () => {
    setIsMonthPickerOpen(!isMonthPickerOpen);
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4, delay: 0.6 }}
      className="bg-[#1e2024] rounded-lg p-5 shadow-md"
    >
      <div className="flex justify-between items-center mb-4">
        <h3 className="text-lg font-medium text-white">Top Selling Products</h3>
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
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="16"
              height="16"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <polyline points="6 9 12 15 18 9"></polyline>
            </svg>
          </motion.button>

          {isMonthPickerOpen && (
            <motion.div
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              className="absolute right-0 mt-2 w-48 bg-[#292B30] border border-[#333] rounded-md shadow-lg z-10"
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
        {isLoading ? (
          <div className="text-center text-white py-8">Loading...</div>
        ) : error ? (
          <div className="text-center text-red-400 py-8">{error}</div>
        ) : (
          <table className="w-full">
            <thead className="sticky top-0 bg-[#1e2024] z-10">
              <tr className="text-left text-gray-400 text-xs border-b border-[#292B30]">
                <th className="pb-2 font-medium">Products</th>
                <th className="pb-2 text-right font-medium">Price</th>
              </tr>
            </thead>
            <tbody>
              {products.map((product) => (
                <motion.tr
                  key={product.id}
                  className="border-b border-[#292B30]"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ duration: 0.3 }}
                  whileHover={{ backgroundColor: "rgba(255,255,255,0.02)" }}
                >
                  <td className="py-4">
                    <div className="flex items-center gap-3">
                      <div className="h-16 w-16 bg-[#292B30] rounded-md flex items-center justify-center overflow-hidden">
                        <img
                          src={product.images}
                          alt={product.name}
                          className="h-12 w-12 object-cover rounded-md"
                        />
                      </div>
                      <div>
                        <p className="text-white font-medium">{product.name}</p>
                        <p className="text-xs text-[#AEB9E1]">
                          {product.stock} in stock
                        </p>
                      </div>
                    </div>
                  </td>
                  <td className="py-4 text-right text-white font-medium">
                    $ {product.price.toFixed(2)}
                  </td>
                </motion.tr>
              ))}
            </tbody>
          </table>
        )}
      </div>
    </motion.div>
  );
};

export default TopProducts;
