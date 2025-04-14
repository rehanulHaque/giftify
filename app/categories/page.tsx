"use client"

const categories = [
  { id: 1, title: "T-Shirts", image: "/images/bg1.jpg", link: "/categories/t-shirts" },
  { id: 2, title: "Shirts", image: "/images/bg1.jpg", link: "/categories/shirts" },
  { id: 3, title: "Jeans", image: "/images/bg1.jpg", link: "/categories/jeans" },
  { id: 4, title: "Jackets", image: "/images/bg1.jpg", link: "/categories/jackets" },
  { id: 5, title: "Bottles", image: "/images/bg1.jpg", link: "/categories/bottles" },
  { id: 6, title: "Clocks", image: "/images/bg1.jpg", link: "/categories/clocks" },
  { id: 7, title: "Wallets", image: "/images/bg1.jpg", link: "/categories/wallets" },
  { id: 8, title: "Bags", image: "/images/bg1.jpg", link: "/categories/bags" },
  { id: 9, title: "Tea Sets", image: "/images/bg1.jpg", link: "/categories/tea-sets" },
  { id: 10, title: "Gift Boxes", image: "/images/bg1.jpg", link: "/categories/gift-boxes" },
  { id: 11, title: "Eco Gifts", image: "/images/bg1.jpg", link: "/categories/eco-gifts" },
];

import { Card } from "@/components/ui/card";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { ChevronDown, ChevronUp } from "lucide-react";
import Footer from "@/components/Footer";


const sizes = ["S", "M", "L", "XL", "XXL"];

export default function CategoryPage() {
  const [page, setPage] = useState(1);
  const itemsPerPage = 8;
  const [showFilters, setShowFilters] = useState(true);

  const paginated = categories.slice((page - 1) * itemsPerPage, page * itemsPerPage);
  const totalPages = Math.ceil(categories.length / itemsPerPage);

  return (
    <>
    
    <div className="px-4 py-10 max-w-7xl mx-auto">
      <h1 className="text-3xl font-bold mb-8 text-center">Shop by Category</h1>
      <div className="flex flex-col lg:flex-row-reverse  gap-10">
        {/* Category Grid */}
        <div className="flex-1 bg-gray-50 p-4 rounded-xl">
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4 gap-4">
            {paginated.map((cat) => (
              <Link key={cat.id} href={cat.link} passHref>
                <Card className="hover:shadow-lg transition-shadow cursor-pointer overflow-hidden">
                  <Image
                    src={cat.image}
                    alt={cat.title}
                    width={400}
                    height={300}
                    className="w-full h-40 object-cover"
                  />
                  <div className="p-3">
                    <h2 className="text-base font-semibold">{cat.title}</h2>
                  </div>
                </Card>
              </Link>
            ))}
          </div>

          {/* Pagination */}
          <div className="flex justify-center mt-10 gap-4">
            <Button onClick={() => setPage((prev) => Math.max(prev - 1, 1))} disabled={page === 1}>
              Previous
            </Button>
            <span className="text-sm py-2">Page {page} of {totalPages}</span>
            <Button onClick={() => setPage((prev) => Math.min(prev + 1, totalPages))} disabled={page === totalPages}>
              Next
            </Button>
          </div>
        </div>

        {/* Filters */}
        <aside className="w-full lg:w-1/4 bg-gray-50 p-4 rounded-xl">
          <div className="lg:hidden mb-4">
            <Button variant="outline" className="w-full" onClick={() => setShowFilters(!showFilters)}>
              {showFilters ? <ChevronUp className="mr-2" /> : <ChevronDown className="mr-2" />} Filters
            </Button>
          </div>

          <div className={`${showFilters ? "block" : "hidden"} lg:block`}>
            <div className="mb-6">
              <h2 className="text-lg font-semibold mb-2">Filter by Size</h2>
              <div className="flex flex-wrap gap-2">
                {sizes.map((size) => (
                  <span key={size} className="px-3 py-1 bg-gray-100 text-sm rounded-full cursor-pointer hover:bg-gray-200">
                    {size}
                  </span>
                ))}
              </div>
            </div>
            <div>
              <h2 className="text-lg font-semibold mb-2">Filter by Category</h2>
              <div className="flex flex-col gap-2">
                {categories.map((cat) => (
                  <label key={cat.id} className="flex items-center gap-2 text-sm">
                    <input type="checkbox" className="accent-gray-700" />
                    {cat.title}
                  </label>
                ))}
              </div>
            </div>
          </div>
        </aside>
      </div>
    </div>
    <Footer/>
    </>
  );
}



// export default async function page({params}: {params: Promise<{id: string}>}) {
//   const categoryId = await (await params).id