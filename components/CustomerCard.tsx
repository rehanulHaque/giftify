import { motion } from "framer-motion";
import { Card, CardContent } from "./ui/card";
import { Button } from "./ui/button";
import AddCartButton from "./AddCartButton";

export default function CustomerCard({
  details,
}: {
  details: {
    id: number;
    title: string;
    description: string;
    image: string;
    transitionId: number;
    price: number;
  };
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: details.transitionId * 0.2 }}
    >
      <Card className="rounded-2xl overflow-hidden hover:shadow-xl transition-all">
        <CardContent className="p-6">
          <div className="h-48 bg-gray-200 mb-4 rounded-lg" />
          <h3 className="text-xl font-semibold mb-2">{details.title}</h3>
          <p className="text-gray-600 mb-4">{details.description}</p>
          <AddCartButton
                          product={{ id: details.id, title: details.title, image: details.image, quantity: 1, price: details.price }}
                        />
        </CardContent>
      </Card>
    </motion.div>
  );
}
