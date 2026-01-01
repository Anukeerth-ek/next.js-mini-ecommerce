import Image from "next/image";
import Navbar from "./components/Navbar";
import ProductCard from "./components/ProductCard";

export default function Home() {
     return (
          <div className="flex flex-col bg-zinc-50 font-sans dark:bg-black">
               <Navbar />
               <div className="flex justify-center align-center">
                    <ProductCard />
               </div>
          </div>
     );
}
