import React from "react";
import { Button } from "./ui/button";
import { ShoppingCartIcon } from "lucide-react";
import { useAddToCart } from "@/hooks/addToCart";
import { toast } from "sonner"
import { CartProductTypes } from "@/types/cart.types";

export default function AddCartButton({ product }: { product: CartProductTypes }) {
  const { addToCart, cart } = useAddToCart();
  const handelClick = () => {
    const isInCart = cart.some(
      (item) => item.id === product.id && item.size === product.size
    );

    if (isInCart) {
      toast("Product with this size is already in the cart");
    } else {
      addToCart(product);
      toast.success("Item added to cart");
    }
  };
  return (
    <div>
      <Button
        onClick={handelClick}
        className="w-full sm:w-auto py-2 px-6 bg-blue-600 text-white rounded-lg hover:bg-blue-700"
      >
        <ShoppingCartIcon /> Add To Cart
      </Button>
    </div>
  );
}
