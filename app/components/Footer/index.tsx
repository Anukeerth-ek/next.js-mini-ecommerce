import Image from "next/image";
import React from "react";
import { FaFacebookF, FaXTwitter } from "react-icons/fa6";
import { AiFillInstagram } from "react-icons/ai";

const Footer = () => {
     return (
          <footer className="w-full bg-black py-16 px-25">
               <div className="max-w-7xl mx-auto flex items-center justify-between">
                    <div className="flex items-center">
                         <Image src="/nike-nav-img.png" alt="nike-img" width={106} height={56} />
                    </div>

                    <div className="flex items-center gap-4">
                         <button className="w-21 h-22 rounded-full transition-colors flex items-center justify-center">
                              <FaFacebookF />
                         </button>

                         <button className="w-21 h-22 rounded-full transition-colors flex items-center justify-center">
                              <AiFillInstagram />
                         </button>

                         <button className="w-21 h-22 rounded-full transition-colors flex items-center justify-center">
                              <FaXTwitter />
                         </button>
                    </div>
               </div>
          </footer>
     );
};

export default Footer;
