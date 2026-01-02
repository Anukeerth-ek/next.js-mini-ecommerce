"use client";

export const dynamic = "force-dynamic";

import { useSearchParams } from "next/navigation";
import { HorizontalProductCard } from "../components/HorizontalProductCard";

const OrderSuccess = () => {
     const searchParams = useSearchParams();
     const productParam = searchParams.get("product");

     const product = productParam ? JSON.parse(decodeURIComponent(productParam)) : null;

     if (!product) {
          return <div className="min-h-screen bg-[#0a0a0a] text-white flex items-center justify-center">Invalid Order</div>;
     }
     return (
          <div className="min-h-screen bg-[#0a0a0a] text-white flex items-center justify-center px-4">
               <div className="text-center max-w-md w-full">
                    <h1 className="text-3xl font-bold mb-3">Successfully Ordered!</h1>

                    <p className="text-gray-400 text-sm mb-10">{product.date ?? "—"}</p>

                    <HorizontalProductCard product={product} />
               </div>
          </div>
     );
};

export default OrderSuccess;
