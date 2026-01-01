"use client";

import React, { useState } from "react";

const ProductCard = () => {
     const [selectedSize, setSelectedSize] = useState("8");
     const [selectedColor, setSelectedColor] = useState("red");

     const sizes = ["7", "8", "9", "10"];
     const colors = [
          { name: "green", value: "#84cc16" },
          { name: "purple", value: "#a855f7" },
          { name: "red", value: "#dc2626" },
     ];

     return (
          <div className="relative w-78 h-101.25 bg-[#1f1f1f] overflow-hidden">
               <div className="absolute bottom-60 -right-10 w-[384px] h-96 bg-[#b91c1c] rounded-full z-0" />

               <div className="absolute inset-0 flex items-center justify-center z-0 pointer-events-none">
                    <span className="text-[120px] font-extrabold italic text-white/5 tracking-widest select-none">
                         NIKE
                    </span>
               </div>

               <div className="relative z-10 mt-12 flex justify-center">
                    <img
                         src="/products/frame 8 (1).png"
                         alt="Nike Shoe"
                         className="w-70 h-auto -rotate-2 drop-shadow-2xl"
                    />
               </div>

               <div className="absolute bottom-0 w-full text-center z-10 px-6 pb-8">
                    <h2 className="text-white text-2xl font-bold tracking-wide mb-6">NIKE SHOES</h2>

                    <div className="flex items-center justify-center gap-3 mb-5">
                         <span className="text-white font-semibold text-sm">SIZE:</span>
                         {sizes.map((size) => (
                              <button
                                   key={size}
                                   onClick={() => setSelectedSize(size)}
                                   className={`w-10 h-10 rounded font-bold text-sm transition-colors ${
                                        selectedSize === size
                                             ? "bg-white text-black"
                                             : "bg-transparent text-white border-2 border-white"
                                   }`}
                              >
                                   {size}
                              </button>
                         ))}
                    </div>

                    <div className="flex items-center justify-center gap-3 mb-6">
                         <span className="text-white font-semibold text-sm">COLOR:</span>
                         {colors.map((color) => (
                              <button
                                   key={color.name}
                                   onClick={() => setSelectedColor(color.name)}
                                   className={`w-8 h-8 rounded-full transition-transform ${
                                        selectedColor === color.name
                                             ? "ring-2 ring-white ring-offset-2 ring-offset-[#1f1f1f] scale-110"
                                             : ""
                                   }`}
                                   style={{ backgroundColor: color.value }}
                              />
                         ))}
                    </div>

                    <button className="bg-white text-black font-bold text-base px-12 py-3 rounded hover:bg-gray-100 transition-colors">
                         Buy Now
                    </button>
               </div>
          </div>
     );
};

export default ProductCard;
