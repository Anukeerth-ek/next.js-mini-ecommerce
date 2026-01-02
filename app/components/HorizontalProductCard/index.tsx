import Image from "next/image";

export const HorizontalProductCard = ({ product, className = "" }: { product: any; className?: string }) => {
     const variant = product?.variants?.[0];
     const productImage = variant?.image || product?.image || "/placeholder.png";

     const bgColor = variant?.bgColor || "#a3e635";

     const price = Number(product.price?.toString().replace(/,/g, ""));
     const originalPrice = product.originalPrice ? Number(product.originalPrice.toString().replace(/,/g, "")) : null;

     return (
          <div className={`bg-[#1a1a1a] rounded-2xl p-4 pr-6 flex items-center gap-4 ${className}`}>
               <div className="rounded-2xl p-4 shrink-0" style={{ backgroundColor: bgColor }}>
                    <Image
                         src={productImage}
                         alt={product.name || "product"}
                         className="object-contain"
                         width={109}
                         height={96}
                    />
               </div>

               <div className="grow">
                    <h3 className="text-white text-base font-semibold mb-1">{product.name}</h3>

                    {product.sku && <p className="text-gray-400 text-sm">{product.sku}</p>}
               </div>

               <div className="text-right shrink-0">
                    {price && <div className="text-white text-lg font-bold">₹{price.toLocaleString("en-IN")}</div>}

                    {originalPrice && (
                         <div className="text-gray-500 text-sm line-through">₹{originalPrice.toLocaleString("en-IN")}</div>
                    )}
               </div>
          </div>
     );
};
