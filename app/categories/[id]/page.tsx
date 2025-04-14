"use client"
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

const tshirts = [
  {
    id: 1,
    title: "Basic White T-Shirt",
    image: "/images/product1.jpg",
    price: 15.99,
    size: "S, M, L, XL",
    rating: 4.2,
    link: "/product/1",
  },
  {
    id: 2,
    title: "Graphic Black Tee",
    image: "/images/product1.jpg",
    price: 22.49,
    size: "M, L",
    rating: 4.6,
    link: "/product/2",
  },
  {
    id: 3,
    title: "Slim Fit Blue T-Shirt",
    image: "/images/product1.jpg",
    price: 19.99,
    size: "S, M, L",
    rating: 4.4,
    link: "/product/3",
  },
  {
    id: 4,
    title: "Vintage Washed Tee",
    image: "/images/product1.jpg",
    price: 24.99,
    size: "M, L, XL",
    rating: 4.8,
    link: "/product/4",
  },
  {
    id: 5,
    title: "Basic White T-Shirt",
    image: "/images/product1.jpg",
    price: 15.99,
    size: "S, M, L, XL",
    rating: 4.2,
    link: "/product/1",
  },
  {
    id: 6,
    title: "Graphic Black Tee",
    image: "/images/product1.jpg",
    price: 22.49,
    size: "M, L",
    rating: 4.6,
    link: "/product/2",
  },
  {
    id: 7,
    title: "Slim Fit Blue T-Shirt",
    image: "/images/product1.jpg",
    price: 19.99,
    size: "S, M, L",
    rating: 4.4,
    link: "/product/3",
  },
  {
    id: 8,
    title: "Vintage Washed Tee",
    image: "/images/product1.jpg",
    price: 24.99,
    size: "M, L, XL",
    rating: 4.8,
    link: "/product/4",
  },
  {
    id: 9,
    title: "Basic White T-Shirt",
    image: "/images/product1.jpg",
    price: 15.99,
    size: "S, M, L, XL",
    rating: 4.2,
    link: "/product/1",
  },
  {
    id: 10,
    title: "Graphic Black Tee",
    image: "/images/product1.jpg",
    price: 22.49,
    size: "M, L",
    rating: 4.6,
    link: "/product/2",
  },
  {
    id: 11,
    title: "Slim Fit Blue T-Shirt",
    image: "/images/product1.jpg",
    price: 19.99,
    size: "S, M, L",
    rating: 4.4,
    link: "/product/3",
  },
  {
    id: 12,
    title: "Vintage Washed Tee",
    image: "/images/product1.jpg",
    price: 24.99,
    size: "M, L, XL",
    rating: 4.8,
    link: "/product/4",
  },
  {
    id: 13,
    title: "Basic White T-Shirt",
    image: "/images/product1.jpg",
    price: 15.99,
    size: "S, M, L, XL",
    rating: 4.2,
    link: "/product/1",
  },
  {
    id: 14,
    title: "Graphic Black Tee",
    image: "/images/product1.jpg",
    price: 22.49,
    size: "M, L",
    rating: 4.6,
    link: "/product/2",
  },
  {
    id: 15,
    title: "Slim Fit Blue T-Shirt",
    image: "/images/product1.jpg",
    price: 19.99,
    size: "S, M, L",
    rating: 4.4,
    link: "/product/3",
  },
  {
    id: 16,
    title: "Vintage Washed Tee",
    image: "/images/product1.jpg",
    price: 24.99,
    size: "M, L, XL",
    rating: 4.8,
    link: "/product/4",
  },
];

const renderStars = (rating: number) => {
  const full = Math.floor(rating);
  const half = rating % 1 >= 0.5;
  const empty = 5 - full - (half ? 1 : 0);
  return (
    <span className="text-yellow-500">
      {"★".repeat(full)}
      {half && "★"}
      <span className="text-gray-300">{"★".repeat(empty)}</span>
    </span>
  );
};

export default function TShirtCategoryPage() {
  const [page, setPage] = useState(1);
  const itemsPerPage = 8;
  const totalPages = Math.ceil(tshirts.length / itemsPerPage);
  const paginated = tshirts.slice((page - 1) * itemsPerPage, page * itemsPerPage);

  return (
    <div className="px-4 py-10 max-w-7xl mx-auto">
      <h1 className="text-3xl font-bold mb-8 text-center">T-Shirts</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {paginated.map((tshirt) => (
          <Link key={tshirt.id} href={tshirt.link} passHref>
            <Card className="hover:shadow-lg transition-shadow cursor-pointer overflow-hidden py-0">
              <div className="relative w-full h-64">
                <Image
                  src={tshirt.image}
                  alt={tshirt.title}
                  layout="fill"
                  objectFit="cover"
                  className="rounded-t-lg"
                />
              </div>
              <div className="px-4 pb-2">
                <h3 className="text-lg font-semibold mb-1">{tshirt.title}</h3>
                <div className="text-sm text-gray-600 mb-1">Size: {tshirt.size}</div>
                <div className="text-sm text-gray-600 mb-1">Price: ${tshirt.price.toFixed(2)}</div>
                <div className="text-sm">{renderStars(tshirt.rating)}</div>
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
  );
}
