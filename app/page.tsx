import ProductCard from "./components/ProductCard";
import { ProductContainer } from "./components/productContainer";

export default function Home() {
     return (
          <div className="flex flex-col bg-zinc-50 font-sans dark:bg-black">
               <div className="flex h-auto justify-center align-center bg-[#161616]">
                  <ProductContainer/>
               </div>
          </div>
     );
}
