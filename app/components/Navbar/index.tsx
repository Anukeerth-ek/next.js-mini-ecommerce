import Image from "next/image";
import Link from "next/link";
import { FaUserCircle } from "react-icons/fa";

const Navbar = () => {
     return (
          <div className="flex item-center w-full bg-[#191919] py-2 px-14 justify-between">
               <Image src="/nike-nav-img.png" alt="nike-nav-img" width={52} height={52} />
               <div className="flex items-center gap-4 text-white">
                    <Link href="/view-orders" aria-label="View orders">
                         <FaUserCircle className="cursor-pointer text-2xl hover:opacity-80" />
                    </Link>
                    <Link href="/Login">
                         <span className="font-bold text-md">
                              <button className="cursor-pointer">Logout</button>
                         </span>
                    </Link>
               </div>
          </div>
     );
};

export default Navbar;
