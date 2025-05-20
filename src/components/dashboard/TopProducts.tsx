
import { motion } from "framer-motion";
import { useState } from "react";
import { PiCalendarBlankFill } from "react-icons/pi";

interface Product {
  id: string;
  name: string;
  image: string;
  stock: number;
  price: number;
}

const products: Product[] = [
  { 
    id: "p1", 
    name: "iPhone 14 Pro Max", 
    image: "/products/iphone.png", 
    stock: 524, 
    price: 1099.00 
  },
  { 
    id: "p2", 
    name: "Apple Watch S8", 
    image: "/products/watch.png", 
    stock: 320, 
    price: 799.00 
  }
];

const TopProducts = () => {
  const [month, setMonth] = useState("Jan 2024");
  const [isMonthPickerOpen, setIsMonthPickerOpen] = useState(false);
  
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
           <PiCalendarBlankFill size={20}/> 
            <span>{month}</span>
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
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
                  onClick={() => { setMonth("Jan 2024"); setIsMonthPickerOpen(false); }}
                  className="px-4 py-2 text-sm text-white hover:bg-[#333] cursor-pointer"
                >
                  Jan 2024
                </li>
                <li 
                  role="option"
                  onClick={() => { setMonth("Dec 2023"); setIsMonthPickerOpen(false); }}
                  className="px-4 py-2 text-sm text-white hover:bg-[#333] cursor-pointer"
                >
                  Dec 2023
                </li>
                <li 
                  role="option"
                  onClick={() => { setMonth("Nov 2023"); setIsMonthPickerOpen(false); }}
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
        <table className="w-full">
          <thead className="sticky top-0 bg-[#1e2024] z-10">
            <tr className="text-left text-gray-400 text-xs border-b border-[#292B30]">
              <th className="pb-2 font-medium">Products</th>
              <th className="pb-2 text-right font-medium">Price</th>
            </tr>
          </thead>
          <tbody>
            {products.map(product => (
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
                      <div className="h-12 w-12 bg-[#212428] rounded-md flex items-center justify-center">
                        {product.id === "p1" ? (
                          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-gray-500">
                            <rect x="5" y="2" width="14" height="20" rx="2" ry="2"></rect>
                            <line x1="12" y1="18" x2="12" y2="18"></line>
                          </svg>
                        ) : (
                          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-gray-500">
                            <circle cx="12" cy="12" r="7"></circle>
                            <polyline points="12 9 12 12 13.5 13.5"></polyline>
                            <path d="M16.51 17.35l-.35 3.83a2 2 0 0 1-2 1.82H9.83a2 2 0 0 1-2-1.82l-.35-3.83m.01-10.7l.35-3.83A2 2 0 0 1 9.83 1h4.35a2 2 0 0 1 2 1.82l.35 3.83"></path>
                          </svg>
                        )}
                      </div>
                    </div>
                    <div>
                      <p className="text-white font-medium">{product.name}</p>
                      <p className="text-xs text-[#AEB9E1]">{product.stock} in stock</p>
                    </div>
                  </div>
                </td>
                <td className="py-4 text-right text-white font-medium">$ {product.price.toFixed(2)}</td>
              </motion.tr>
            ))}
          </tbody>
        </table>
      </div>
    </motion.div>
  );
};

export default TopProducts;