"use client";

import Image from "next/image";
import { useEffect, useRef } from "react";
import gsap from "gsap";

const ProductCard = () => {
     const cardRef = useRef<HTMLDivElement>(null);

     const circleRef = useRef<HTMLDivElement>(null);
     const shoeRef = useRef<HTMLImageElement>(null);
     const backgroundtitleRef = useRef<HTMLParagraphElement>(null);
     const titleRef = useRef<HTMLParagraphElement>(null);

     const sizeRef = useRef<HTMLDivElement>(null);
     const colorRef = useRef<HTMLDivElement>(null);
     const buttonRef = useRef<HTMLButtonElement>(null);

     useEffect(() => {
          if (!cardRef.current) return;

          gsap.set([sizeRef.current, colorRef.current, buttonRef.current], {
               autoAlpha: 0,
               y: 0,
          });

          gsap.set(shoeRef.current, { rotate: 3 });

          const enterTl = gsap.timeline({ paused: true });

          enterTl
               .to(circleRef.current, {
                    top: -225,
                    left: 26,
                    duration: 0.2,
                    ease: "none",
               })
               .to(
                    backgroundtitleRef.current,
                    {
                         bottom: 150,
                         duration: 0.2,
                         ease: "none",
                    },
                    "<"
               )
               .to(
                    shoeRef.current,
                    {
                         top: 5,
                         rotate: 1.5,
                         duration: 0.25,
                         ease: "none",
                    },
                    "<"
               )
               .to(
                    titleRef.current,
                    {
                         top: 210,
                         bottom: "auto",
                         fontSize: 20,
                         duration: 0.2,
                         ease: "none",
                    },
                    "<"
               )
               .to(sizeRef.current, { autoAlpha: 1, duration: 0.15 })
               .to(colorRef.current, { autoAlpha: 1, duration: 0.15 })
               .to(buttonRef.current, { autoAlpha: 1, duration: 0.15 });

          const leaveTl = gsap.timeline({ paused: true });

          leaveTl
               .to([sizeRef.current, colorRef.current, buttonRef.current], {
                    y: 12,
                    autoAlpha: 0,
                    duration: 0.15,
                    stagger: 0.04,
                    ease: "none",
               })
               .to(
                    titleRef.current,
                    {
                         top: 300,
                         //    bottom: "auto",
                         fontSize: 18,
                         duration: 0.2,
                         ease: "none",
                    },
                    "<"
               )
               .to(
                    shoeRef.current,
                    {
                         top: 76,
                         rotate: 3,
                         duration: 0.25,
                         ease: "none",
                    },
                    "<"
               )
               .to(
                    backgroundtitleRef.current,
                    {
                         bottom: 85,
                         duration: 0.2,
                         ease: "none",
                    },
                    "<"
               )
               .to(
                    circleRef.current,
                    {
                         top: -155,
                         left: -11,
                         duration: 0.2,
                         ease: "none",
                    },
                    "<"
               );

          const card = cardRef.current;

          const onEnter = () => {
               leaveTl.kill();
               enterTl.restart();
          };

          const onLeave = () => {
               enterTl.kill();
               leaveTl.restart();
          };

          card.addEventListener("mouseenter", onEnter);
          card.addEventListener("mouseleave", onLeave);

          return () => {
               card.removeEventListener("mouseenter", onEnter);
               card.removeEventListener("mouseleave", onLeave);
          };
     }, []);

     return (
          <div ref={cardRef} className="relative h-[405px] w-[312px] overflow-hidden bg-[#1f1f1f] text-white">
               <div
                    ref={circleRef}
                    className="absolute h-[384px] w-[384px] rounded-full will-change-transform"
                    style={{ top: -155, left: -11, backgroundColor: "#9ADA2A" }}
               />

               <p
                    ref={backgroundtitleRef}
                    className="absolute bottom-[85px] left-[-10px] text-[160px] font-extrabold italic opacity-[0.04]"
               >
                    NIKE
               </p>

               <Image
                    ref={shoeRef}
                    src="/products/Frame 8.png"
                    alt="Nike Shoe"
                    width={260}
                    height={160}
                    className="absolute rotate-[3deg] will-change-transform"
                    style={{ top: 76, left: 40 }}
               />

               <p ref={titleRef} className="absolute bottom-[70px] w-full text-center text-[18px] font-semibold">
                    NIKE SHOES
               </p>

               <div ref={sizeRef} className="flex flex-col gap-4.5">
                    <div className="absolute top-[245px] w-full px-8 z-30 flex items-center justify-center">
                         <div className="flex items-center gap-4">
                              <span className="text-md font-semibold">SIZE:</span>

                              <div className="flex gap-1 items-center justify-center">
                                   {["7", "8", "9", "10"].map((size, index) => (
                                        <div
                                             key={size}
                                             className={`flex h-7 w-[30px] justify-center justify-center items-center rounded-md font-bold
                  ${index === 0 ? "bg-[#3a2a2a] text-white" : "bg-white text-black"}
                `}
                                        >
                                             {size}
                                        </div>
                                   ))}
                              </div>
                         </div>
                    </div>
               </div>

               <div ref={colorRef} className="absolute top-[290px] w-full px-8 z-30">
                    <div className="flex justify-center items-center gap-4">
                         <span className="text-md font-medium">COLOR:</span>

                         <div className="flex gap-1.5">
                              <span className="h-4 w-4 rounded-full bg-lime-400 ring-2 ring-white" />
                              <span className="h-4 w-4 rounded-full bg-purple-600" />
                              <span className="h-4 w-4 rounded-full bg-red-600" />
                         </div>
                    </div>
               </div>

               <button
                    ref={buttonRef}
                    className="absolute bottom-7 left-1/2 -translate-x-1/2 w-1/2 rounded-md bg-white p-2.5 font-semibold text-black"
               >
                    Buy Now
               </button>
          </div>
     );
};

export default ProductCard;
