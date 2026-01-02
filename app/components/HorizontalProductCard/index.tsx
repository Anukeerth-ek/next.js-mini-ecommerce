import Image from "next/image";

export const HorizontalProductCard = ({ product, className = "" }: any) => {
     const productImage = product.variants[0].image
     return (
          <div className={`bg-[#1a1a1a] rounded-2xl p-4 pr-6 flex items-center gap-4 ${className}`}>
               <div className="bg-[#a3e635] rounded-2xl p-4 shrink-0">
                    <Image src={productImage} alt="product-name" className=" object-contain" width={109} height={96} />
               </div>

               <div className="grow">
                    <h3 className="text-white text-base font-semibold mb-1">{product.name}</h3>
                    <p className="text-gray-400 text-sm">{product.sku}</p>
               </div>

               <div className="text-right shrink-0">
                    <div className="text-white text-lg font-bold">₹{product.price.toLocaleString("en-IN")}</div>
                    {product.originalPrice && (
                         <div className="text-gray-500 text-sm line-through">
                              ₹{product.originalPrice.toLocaleString("en-IN")}
                         </div>
                    )}
               </div>
          </div>
     );
};
