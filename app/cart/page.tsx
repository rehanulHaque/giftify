"use client"
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import Link from "next/link";
import { useAddToCart } from "@/hooks/addToCart";

export default function CartPage() {
  const {cart, updateQuantity, removeFromCart} = useAddToCart();

  const handleQuantityChange = (id: any, size: any, delta: number) => {
    updateQuantity(id, size, delta);
  };

  const handleRemove = (id: any, size: any) => {
    removeFromCart(id, size);
  };

  const total = cart.reduce((acc, item) => acc + item.price * item.quantity, 0);

  return (
    <div className="px-4 py-10 max-w-5xl mx-auto">
      <h1 className="text-3xl font-bold mb-8 text-center">Your Cart</h1>
      {cart.length === 0 ? (
        <p className="text-center text-gray-600">Your cart is empty.</p>
      ) : (
        <div className="space-y-6">
          {cart.map((item, idx) => (
            <Card key={idx} className="flex flex-col sm:flex-row items-center p-4 gap-4">
              <div className="relative w-32 h-32">
                <Image
                  src={item.image}
                  alt={item.title}
                  layout="fill"
                  objectFit="cover"
                  className="rounded"
                />
              </div>
              <div className="flex-1 w-full">
                <h2 className="text-lg font-semibold mb-2">{item.title}</h2>
                <p className="text-sm text-gray-500 mb-2">${item.price.toFixed(2)}</p>
                <p className="text-sm text-gray-500 mb-2">Size: {item.size}</p>
                <div className="flex items-center gap-3">
                  <Button variant="outline" size="sm" onClick={() => handleQuantityChange(item.id, item.size, -1)}>-</Button>
                  <span>{item.quantity}</span>
                  <Button variant="outline" size="sm" onClick={() => handleQuantityChange(item.id, item.size, 1)}>+</Button>
                  <Button variant="destructive" size="sm" onClick={() => handleRemove(item.id, item.size)} className="ml-auto">
                    Remove
                  </Button>
                </div>
              </div>
            </Card>
          ))}

          <div className="flex justify-between items-center pt-6 border-t">
            <p className="text-xl font-semibold">Total: ${total.toFixed(2)}</p>
            <Link href="/checkout">
              <Button>Checkout</Button>
            </Link>
          </div>
        </div>
      )}
    </div>
  );
}
