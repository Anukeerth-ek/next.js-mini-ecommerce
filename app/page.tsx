import Image from "next/image";
import Navbar from "./components/Navbar";
import ProductCard from "./components/ProductCard";
import Footer from "./components/Footer";

export default function Home() {
     return (
          <div className="flex flex-col bg-zinc-50 font-sans dark:bg-black">
               <Navbar />
               <div className="flex h-screen justify-center align-center bg-[#161616]">
                    <ProductCard />
               </div>
               <Footer />
          </div>
     );
}
