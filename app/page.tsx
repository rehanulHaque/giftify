"use client";
import CustomerCard from "@/components/CustomerCard";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { categoryData, fakeProductData } from "@/data/category";
import { motion } from "framer-motion";
import Link from "next/link";
import { useEffect, useState } from "react";

const bgImages = [
  "/images/bg1.jpg",
  "/images/bg2.jpg",
  "/images/bg3.jpg",
  "/images/bg4.jpg",
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
    <div className="min-h-screen bg-white text-gray-800 ">
      {/* Hero Section */}
      <section
        className="relative flex flex-col items-center justify-center text-center py-24 px-4 overflow-hidden h-screen"
        style={{
          backgroundImage: `url(${bgImages[currentBg]})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <div className="absolute inset-0 bg-black/40 z-0"></div>
        <div className="relative z-10">
          <motion.h1
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-4xl md:text-6xl font-bold text-white mb-4"
          >
            Gifts That Speak Your Heart.
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.8 }}
            className="text-lg md:text-xl text-white/90 mb-6 max-w-xl"
          >
            Shop premium t-shirts, wallets, bottles & more. Perfect gifts for
            every occasion.
          </motion.p>
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.6, duration: 0.6 }}
          >
            <Button className="text-lg px-8 py-4 rounded-2xl shadow-lg">
              Shop Now
            </Button>
          </motion.div>
        </div>
      </section>

      {/* Categories */}
      <section className="py-20 px-6 max-w-6xl mx-auto text-center">
        <h2 className="text-3xl font-semibold mb-10">Shop by Category</h2>
        <div className="grid grid-cols-2 md:grid-cols-3 gap-6">
          {categoryData.map((item, index) => (
            <motion.div
              key={item.id}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
            >
              <Link href={item.link}>
                <Card className="rounded-2xl hover:shadow-xl cursor-pointer transition-all">
                  <CardContent className="p-6 text-lg font-medium">
                    {item.title}
                  </CardContent>
                </Card>
              </Link>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Best Sellers */}
      <section className="py-20 px-6 bg-gray-50">
        <h2 className="text-3xl font-semibold text-center mb-10">
          Customer Favorites
        </h2>
        <div className="grid md:grid-cols-3 gap-6 max-w-6xl mx-auto">
          {fakeProductData.map((item) => (
            <CustomerCard details={item} key={item.id}/>
          ))}
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-20 px-6 max-w-6xl mx-auto text-center">
        <h2 className="text-3xl font-semibold mb-10">Made to Make You Smile</h2>
        <div className="grid md:grid-cols-4 gap-8">
          {[
            { icon: "🎁", text: "Handpicked Gifts" },
            { icon: "🌿", text: "Eco-Friendly Packaging" },
            { icon: "🚚", text: "Free Shipping" },
            { icon: "❤️", text: "Loved by Thousands" },
          ].map((item, index) => (
            <motion.div
              key={item.text}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.2 }}
              className="p-6 border rounded-2xl bg-white shadow-sm"
            >
              <div className="text-4xl mb-3">{item.icon}</div>
              <h4 className="text-lg font-medium">{item.text}</h4>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-20 px-6 bg-gradient-to-r from-pink-100 to-orange-100 text-center">
        <motion.h2
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6 }}
          className="text-3xl md:text-4xl font-semibold mb-6"
        >
          Ready to Surprise Someone Special?
        </motion.h2>
        <Button className="text-lg px-8 py-4 rounded-2xl shadow-md">
          Start Gifting
        </Button>
      </section>

      {/* Footer */}
      <footer className="py-10 px-6 bg-white border-t text-center text-sm text-gray-500">
        © 2025 Giftify. All rights reserved.
      </footer>
    </div>
  );
}
