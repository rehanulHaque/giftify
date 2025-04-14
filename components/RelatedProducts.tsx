import { Card } from "@/components/ui/card"; // Importing Card from Shadcn (assuming you have it in your UI library)
import Image from "next/image";
import Link from "next/link";

const relatedProducts = [
  {
    id: 1,
    title: "Stylish Hoodie",
    image: "/images/product1.jpg",
    price: 49.99,
    size: "M, L, XL",
    rating: 4.2,
    link: "/product/1",
  },
  {
    id: 2,
    title: "Classic Jeans",
    image: "/images/product2.jpg",
    price: 39.99,
    size: "S, M, L, XL",
    rating: 4.7,
    link: "/product/2",
  },
  {
    id: 3,
    title: "Leather Wallet",
    image: "/images/product3.jpg",
    price: 29.99,
    size: "One Size",
    rating: 4.3,
    link: "/product/3",
  },
  {
    id: 4,
    title: "Eco-Friendly Bottle",
    image: "/images/product4.jpg",
    price: 19.99,
    size: "One Size",
    rating: 4.6,
    link: "/product/4",
  },
];

const renderStars = (rating: number) => {
  const fullStars = Math.floor(rating);
  const halfStars = rating % 1 >= 0.5 ? 1 : 0;
  const emptyStars = 5 - fullStars - halfStars;

  return (
    <>
      {[...Array(fullStars)].map((_, index) => (
        <span key={`full-${index}`} className="text-yellow-500">★</span>
      ))}
      {halfStars === 1 && <span className="text-yellow-500">★</span>}
      {[...Array(emptyStars)].map((_, index) => (
        <span key={`empty-${index}`} className="text-gray-300">★</span>
      ))}
    </>
  );
};

export default function RelatedProducts() {
  return (
    <div className="my-10 px-4 max-w-7xl mx-auto">
      <h2 className="text-2xl font-semibold mb-6">Related Products</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {relatedProducts.map((product) => (
          <Link key={product.id} href={product.link} passHref>
            <Card className="hover:shadow-lg transition-shadow cursor-pointer overflow-hidden py-0 pb-4">
              <div className="relative w-full h-64">
                <Image
                  src={product.image}
                  alt={product.title}
                  layout="fill"
                  objectFit="cover"
                  className=""
                />
              </div>
              <div className="px-4">
                <h3 className="text-lg font-semibold">{product.title}</h3>
                <div className="flex items-center mt-1">{renderStars(product.rating)}</div>
                <p className="text-xl font-bold mt-1">${product.price.toFixed(2)}</p>
                <p className="text-sm text-gray-500 mt-1">Size: {product.size}</p>
              </div>
            </Card>
          </Link>
        ))}
      </div>
    </div>
  );
}
