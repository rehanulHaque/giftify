"use client";
import { categoryData } from "@/data/category";
import { Menu } from "lucide-react";
import Link from "next/link";
import React, { useState } from "react";
import { Button } from "./ui/button";

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  return (
    <header className="flex items-center justify-between py-4 shadow-md bg-white sticky top-0 z-50 px-4">
      <div className="text-xl font-bold">Giftify</div>
      <nav className="hidden md:flex items-center gap-6 text-sm font-medium">
        <div className="relative group">
          <span className="cursor-pointer"><Link href="/categories">Categories</Link></span>
          <div className="absolute hidden group-hover:flex flex-col bg-white border rounded shadow-md top-6 left-0 min-w-[150px] z-40">
            {categoryData.map((cat) => (
              <span
                key={cat.id}
                className="px-4 py-2 hover:bg-gray-100 cursor-pointer"
              >
                <Link href={cat.link}>{cat.title}</Link>
              </span>
            ))}
          </div>
        </div>
        <span className="cursor-pointer">Cart</span>
        <span className="cursor-pointer">Login / Signup</span>
      </nav>
      <button onClick={() => setMenuOpen(!menuOpen)} className="md:hidden">
        <Menu size={24} />
      </button>

      {/* Mobile Menu */}
      {menuOpen && (
        <div className="absolute top-full left-0 w-full bg-white shadow-md z-40 flex flex-col gap-4 px-6 py-4 md:hidden">
          <div>
            <strong className="block mb-2">Categories</strong>
            <div className="grid grid-cols-2 gap-2">
              {categoryData.map((cat) => (
                <span
                  key={cat.id}
                  className="text-sm hover:underline cursor-pointer"
                >
                  <Link href={cat.link}>{cat.title}</Link>
                </span>
              ))}
            </div>
          </div>
          <span className="cursor-pointer">Cart</span>
          <Button>Get Started</Button>
        </div>
      )}
    </header>
  );
}
