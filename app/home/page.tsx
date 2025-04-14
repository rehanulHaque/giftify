'use client'
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import { categoryData, fakeData } from "@/data/category";
import Link from "next/link";
import ProductCard from "@/components/ProductCard";
import Footer from "@/components/Footer";

const bgImages = [
  "/images/bg1.jpg",
  "/images/bg2.jpg",
  "/images/bg3.jpg"
];

export default function Home() {
  const [currentBg, setCurrentBg] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentBg((prev) => (prev + 1) % bgImages.length);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="min-h-screen bg-white text-gray-800">
      {/* Hero Section */}
      <section
        className="relative flex flex-col items-center justify-center text-center py-36 overflow-hidden min-h-[80vh]"
        style={{ backgroundImage: `url(${bgImages[currentBg]})`, backgroundSize: "cover", backgroundPosition: "center" }}
      >
        <div className="absolute inset-0 bg-black/40 z-0"></div>
        <div className="relative z-10 px-4">
          <motion.h1
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-4xl md:text-6xl font-bold text-white mb-4"
          >
            Find The Perfect Gift
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.8 }}
            className="text-lg md:text-xl text-white/90 mb-6 max-w-xl mx-auto"
          >
            Discover unique t-shirts, jackets, bottles and more for your loved ones.
          </motion.p>
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.6, duration: 0.6 }}
          >
            <Button className="text-lg px-8 py-4 rounded-2xl shadow-lg">Start Shopping</Button>
          </motion.div>
        </div>
      </section>

      {/* Category Slider */}
      <section className="py-6 bg-white border-t border-b mx-4">
        <div className="overflow-x-auto whitespace-nowrap scrollbar-hide category">
          <div className="flex gap-4 px-1 sm:px-4 md:justify-center">
            {categoryData.map((category) => (
              <motion.div
                key={category.id}
                whileTap={{ scale: 0.95 }}
                className="inline-block px-4 py-2 rounded-full bg-gray-100 hover:bg-gray-200 text-sm font-medium cursor-pointer"
              >
                <Link href={category.link}>
                {category.title}
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Product Listing */}
      <section className="py-12 max-w-7xl md:mx-auto mx-4">
        <h2 className="text-2xl md:text-3xl font-semibold text-center mb-10">Featured Products</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {fakeData.map((product, index) => (
            <ProductCard product={product} index={index} key={product.id}/>
          ))}
        </div>
      </section>

      {/* Footer */}
     <Footer/>
    </div>
  );
}
