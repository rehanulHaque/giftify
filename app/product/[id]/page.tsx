"use client";
import { useState } from "react";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import RelatedProducts from "@/components/RelatedProducts";
import Footer from "@/components/Footer";
import AddCartButton from "@/components/AddCartButton";


const product = {
  id: 1,
  title: "Stylish T-Shirt",
  description:
    "This stylish T-shirt is perfect for casual outings. Made with premium cotton, it's comfortable and breathable.",
  price: 29.99,
  material: "100% Premium Cotton",
  size: ["S", "M", "L", "XL", "XXL"],
  rating: 4,
  deliveryDate: "Delivered within 5-7 business days",
  images: [
    "/images/product1.jpg",
    "/images/product2.jpg",
    "/images/product3.jpg",
    "/images/product4.jpg",
  ],
};

export default function ProductPage() {
  const [selectedImage, setSelectedImage] = useState(product.images[0]);
  const [quantity, setQuantity] = useState(1);
  const [selectSize, setSelectSize] = useState<"S" | "M" | "L" | "XL" | "XXL">("L");

  const handleImageChange = (image: string) => {
    setSelectedImage(image);
  };

  const increaseQuantity = () => setQuantity(quantity + 1);
  const decreaseQuantity = () => setQuantity(Math.max(1, quantity - 1));

  const renderStars = (rating: number) => {
    const fullStars = Math.floor(rating);
    const halfStars = rating % 1 >= 0.5 ? 1 : 0;
    const emptyStars = 5 - fullStars - halfStars;

    return (
      <>
        {[...Array(fullStars)].map((_, index) => (
          <span key={`full-${index}`} className="text-yellow-500">
            ★
          </span>
        ))}
        {halfStars === 1 && <span className="text-yellow-500">★</span>}
        {[...Array(emptyStars)].map((_, index) => (
          <span key={`empty-${index}`} className="text-gray-300">
            ★
          </span>
        ))}
      </>
    );
  };

  return (
    <section>
      <div className="container px-4 py-6 sm:py-8 md:py-10 mx-auto max-w-7xl">
        <div className="flex flex-col lg:flex-row gap-6 md:gap-8 lg:gap-10">
          {/* Left side: Product images */}
          <div className="w-full lg:w-1/2">
            <div className="relative w-full h-64 sm:h-72 md:h-80 lg:h-96 mb-4">
              <Image
                src={selectedImage}
                alt={product.title}
                fill
                sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                className="rounded-xl object-cover"
              />
            </div>
            <div className="flex flex-wrap gap-2">
              {product.images.map((image, index) => (
                <button
                  key={index}
                  onClick={() => handleImageChange(image)}
                  className={`w-16 h-16 sm:w-20 sm:h-20 overflow-hidden rounded-lg border-2 transition-colors ${
                    selectedImage === image
                      ? "border-blue-500"
                      : "border-gray-200 hover:border-gray-400"
                  }`}
                >
                  <div className="relative w-full h-full">
                    <Image
                      src={image}
                      alt={`Product Image ${index + 1}`}
                      fill
                      sizes="80px"
                      className="object-cover"
                    />
                  </div>
                </button>
              ))}
            </div>
          </div>

          {/* Right side: Product details */}
          <div className="w-full lg:w-1/2 mt-6 lg:mt-0">
            <h1 className="text-2xl sm:text-3xl font-bold mb-3">
              {product.title}
            </h1>
            <p className="text-base sm:text-lg mb-4">{product.description}</p>

            {/* Product details */}
            <div className="mb-6">
              <div className="text-xl font-semibold mb-2">
                Price: ${product.price.toFixed(2)}
              </div>
              <div className="text-sm mb-2">Material: {product.material}</div>
              <div className="text-sm mb-2 flex gap-4 items-center">
                Size:{" "}
                <div className="flex gap-2">
                {product.size.map((si: any, idx) => (
                  <Button
                  onClick={() => setSelectSize(si.toString())}
                    key={idx}
                    className={`flex justify-center items-center h-8 w-8 rounded-full ${
                      selectSize === si
                        ? "bg-gray-200 text-black"
                        : "bg-black text-white hover:bg-gray-800"
                    }`}
                  >
                    {si}
                  </Button>
                ))}
                </div>
              </div>
              <div className="text-sm mb-2 flex items-center">
                Rating:{" "}
                <span className="ml-1 flex">{renderStars(product.rating)}</span>
              </div>
              <div className="text-sm mb-2">{product.deliveryDate}</div>
            </div>

            {/* Quantity input and Add to Cart Button */}
            <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4 mb-4">
              <div className="flex items-center gap-2">
                <Button
                  onClick={decreaseQuantity}
                  className="h-10 w-10 p-0 bg-gray-200 hover:bg-gray-300 text-gray-700 rounded-lg"
                  aria-label="Decrease quantity"
                >
                  -
                </Button>
                <input
                  type="number"
                  value={quantity}
                  readOnly
                  className="w-12 sm:w-16 h-10 p-2 border-2 border-gray-300 rounded-lg text-center"
                  aria-label="Quantity"
                />
                <Button
                  onClick={increaseQuantity}
                  className="h-10 w-10 p-0 bg-gray-200 hover:bg-gray-300 text-gray-700 rounded-lg"
                  aria-label="Increase quantity"
                >
                  +
                </Button>
              </div>
              <AddCartButton
                product={{ id: product.id, title: product.title, price: product.price, quantity, image: product.images[0], size: selectSize }}
              />
            </div>
          </div>
        </div>
      </div>
      <RelatedProducts />
      <Footer />
    </section>
  );
}
