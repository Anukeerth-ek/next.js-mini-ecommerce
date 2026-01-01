"use client";

import Image from "next/image";
import Link from "next/link";
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
          <div className="w-[312px] h-[405px] relative overflow-hidden rounded-none bg-[#1f1f1f]">
               <div
                    className="absolute top-[-155px] z-40 left-[-11px] w-[384px] h-[384px] rounded-full"
                    style={{ backgroundColor: "#9ADA2A" }}
               />

               <div className="absolute bottom-[85px] left-[-10px] z-0">
                    <p className="text-[160px] font-extrabold tracking-tight italic text-[#ffffff] opacity-3">NIKE</p>
               </div>

               <div className="">
                    <Image
                         src="/products/Frame 8.png"
                         alt="Nike Shoe"
                         width={260}
                         height={160}
                         priority
                         className="absolute top-[76px] left-[40px] z-100 rotate-[3deg]"
                    />
               </div>

               <div className="absolute bottom-[40px] w-full text-center z-20">
                    <p className="text-white text-[18px] font-semibold tracking-wide">NIKE SHOES</p>
               </div>
          </div>
     );
};

export default ProductCard;
