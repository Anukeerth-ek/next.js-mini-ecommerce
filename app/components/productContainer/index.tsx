import { Product } from "@/app/types/product";
import ProductCard from "../ProductCard/index";

export const ProductContainer = () => {
 const products: Product[] = [
  {
    id: 1,
    name: "Nike Air Max 90",
    price: "1,200",
    originalPrice: "1,300",
    variants: [
      { color: "red", bgColor: "#9D333B", image: "/products/nike-red.png" },
      { color: "purple", bgColor: "#6B4EFF", image: "/products/nike-purple.png" },
      { color: "green", bgColor: "#9ADA2A", image: "/products/nike-limegreen.png" },
      { color: "pink", bgColor: "#FF6FB1", image: "/products/nike-pink.png" },
    ],
  },
  {
    id: 2,
    name: "Nike Air Max 90",
    price: "1,200",
    originalPrice: "1,300",
    variants: [
      { color: "green", bgColor: "#9ADA2A", image: "/products/nike-limegreen.png" },
      { color: "red", bgColor: "#9D333B", image: "/products/nike-red.png" },
    ],
  },
  {
    id: 3,
    name: "Nike Air Max 90",
    price: "1,200",
    originalPrice: "1,300",
    variants: [
      { color: "purple", bgColor: "#6B4EFF", image: "/products/nike-purple.png" },
      { color: "pink", bgColor: "#FF6FB1", image: "/products/nike-pink.png" },
    ],
  },
  {
    id: 4,
    name: "Nike Air Max 90",
    price: "1,200",
    originalPrice: "1,300",
    variants: [
      { color: "red", bgColor: "#9D333B", image: "/products/nike-red.png" },
      { color: "green", bgColor: "#9ADA2A", image: "/products/nike-limegreen.png" },
    ],
  },
  {
    id: 5,
    name: "Nike Air Max 90",
    price: "1,200",
    originalPrice: "1,300",
    variants: [
      { color: "pink", bgColor: "#FF6FB1", image: "/products/nike-pink.png" },
    ],
  },
  {
    id: 6,
    name: "Nike Air Max 90",
    price: "1,200",
    originalPrice: "1,300",
    variants: [
      { color: "green", bgColor: "#9ADA2A", image: "/products/nike-limegreen.png" },
      { color: "purple", bgColor: "#6B4EFF", image: "/products/nike-purple.png" },
    ],
  },
  {
    id: 7,
    name: "Nike Air Max 90",
    price: "1,200",
    originalPrice: "1,300",
    variants: [
      { color: "red", bgColor: "#9D333B", image: "/products/nike-red.png" },
    ],
  },
  {
    id: 8,
    name: "Nike Air Max 90",
    price: "1,200",
    originalPrice: "1,300",
    variants: [
      { color: "purple", bgColor: "#6B4EFF", image: "/products/nike-purple.png" },
      { color: "pink", bgColor: "#FF6FB1", image: "/products/nike-pink.png" },
    ],
  },
];

  return (
    <div className="grid grid-cols-4 gap-4">
  {products.map((product) => (
    <ProductCard key={product.id} product={product} />
  ))}
</div>

  );
};
