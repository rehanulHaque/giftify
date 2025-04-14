import { motion } from "framer-motion";
import Image from "next/image";
import { Button } from "./ui/button";
import Link from "next/link";

export default function ProductCard({
  product,
  index,
}: {
  product: { id: number; title: string; desc: string; imgSrc: string; link: string };
  index: number;
}) {
  return (
    <Link href={product.link}>
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ delay: index * 0.1 }}
      className="rounded-2xl overflow-hidden border hover:shadow-xl transition-all bg-white"
    >
      <Image
        src={product.imgSrc}
        alt={product.title}
        width={500}
        height={300}
        className="w-full h-48 object-cover"
      />
      <div className="p-4">
        <h3 className="text-lg font-semibold mb-1">{product.title}</h3>
        <p className="text-sm text-gray-600 mb-3">{product.desc}</p>
        <Button className="w-full">Add to Cart</Button>
      </div>
    </motion.div>
    </Link>
  );
}
