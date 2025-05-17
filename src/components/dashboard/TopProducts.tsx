
import { motion } from "framer-motion";
import { useState } from "react";

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
  
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4, delay: 0.6 }}
      className="bg-[#1e2024] rounded-lg p-5 shadow-md"
    >
      <div className="flex justify-between items-center mb-4">
        <h3 className="text-lg font-medium text-white">Top Selling Products</h3>
        <button className="px-3 py-1.5 flex items-center gap-2 text-sm bg-[#212428] border border-[#333] rounded-md text-white">
          <span>{month}</span>
          <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <polyline points="6 9 12 15 18 9"></polyline>
          </svg>
        </button>
      </div>
      
      <div className="overflow-x-auto">
        <table className="w-full">
          <thead>
            <tr className="text-left text-gray-400 text-xs border-b border-[#292B30]">
              <th className="pb-2 font-medium">Products</th>
              <th className="pb-2 text-right font-medium">Price</th>
            </tr>
          </thead>
          <tbody>
            {products.map(product => (
              <tr key={product.id} className="border-b border-[#292B30]">
                <td className="py-4">
                  <div className="flex items-center gap-3">
                    <div className="h-16 w-16 bg-[#292B30] rounded-md flex items-center justify-center">
                      <div className="h-12 w-12 bg-[#212428] rounded-md"></div>
                    </div>
                    <div>
                      <p className="text-white font-medium">{product.name}</p>
                      <p className="text-xs text-gray-400">{product.stock} in stock</p>
                    </div>
                  </div>
                </td>
                <td className="py-4 text-right text-white font-medium">$ {product.price.toFixed(2)}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </motion.div>
  );
};

export default TopProducts;