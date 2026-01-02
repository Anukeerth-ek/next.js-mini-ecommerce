import ProductCard from "../ProductCard/index";

export const ProductContainer = () => {
  const products = [
    {
      id: 1,
      name: "Nike Air Max 90",
      size: "UK 7, 9ADA2A",
      date: "12:34 PM, 20th Dec 2025",
      price: "1,200",
      originalPrice: "1,300",
      image: "/products/nike-red.png",
    },
    {
      id: 2,
      name: "Nike Air Max 90",
      size: "UK 7, 9ADA2A",
      date: "12:34 PM, 20th Dec 2025",
      price: "1,200",
      originalPrice: "1,300",
      image: "/products/nike-purple.png",
    },
    {
      id: 3,
      name: "Nike Air Max 90",
      size: "UK 7, 9ADA2A",
      date: "12:34 PM, 20th Dec 2025",
      price: "1,200",
      originalPrice: "1,300",
      image: "/products/nike-limegreen.png",
    },
    {
      id: 4,
      name: "Nike Air Max 90",
      size: "UK 7, 9ADA2A",
      date: "12:34 PM, 20th Dec 2025",
      price: "1,200",
      originalPrice: "1,300",
      image: "/products/nike-pink.png",
    },
   {
      id: 5,
      name: "Nike Air Max 90",
      size: "UK 7, 9ADA2A",
      date: "12:34 PM, 20th Dec 2025",
      price: "1,200",
      originalPrice: "1,300",
      image: "/products/nike-limegreen.png",
    },
    {
      id: 6,
      name: "Nike Air Max 90",
      size: "UK 7, 9ADA2A",
      date: "12:34 PM, 20th Dec 2025",
      price: "1,200",
      originalPrice: "1,300",
      image: "/products/nike-pink.png",
    },
    {
      id: 7,
      name: "Nike Air Max 90",
      size: "UK 7, 9ADA2A",
      date: "12:34 PM, 20th Dec 2025",
      price: "1,200",
      originalPrice: "1,300",
      image: "/products/nike-red.png",
    },
    {
      id: 8,
      name: "Nike Air Max 90",
      size: "UK 7, 9ADA2A",
      date: "12:34 PM, 20th Dec 2025",
      price: "1,200",
      originalPrice: "1,300",
      image: "/products/nike-purple.png",
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
