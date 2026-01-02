import { HorizontalProductCard } from "../components/HorizontalProductCard";

interface PageProps {
  searchParams: {
    product?: string;
  };
}

export default function OrderSuccess({ searchParams }: PageProps) {
  const productParam = searchParams.product;

  if (!productParam) {
    return (
      <div className="min-h-screen bg-[#0a0a0a] text-white flex items-center justify-center">
        Invalid Order
      </div>
    );
  }

  let product;
  try {
    product = JSON.parse(decodeURIComponent(productParam));
  } catch {
    return (
      <div className="min-h-screen bg-[#0a0a0a] text-white flex items-center justify-center">
        Invalid Order Data
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-[#0a0a0a] text-white flex items-center justify-center px-4">
      <div className="text-center max-w-md w-full">
        <h1 className="text-3xl font-bold mb-3">
          Successfully Ordered!
        </h1>

        <HorizontalProductCard product={product} />
      </div>
    </div>
  );
}
