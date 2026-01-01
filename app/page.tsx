import ProductCard from "./components/ProductCard";

export default function Home() {
     return (
          <div className="flex flex-col bg-zinc-50 font-sans dark:bg-black">
               <div className="flex h-screen justify-center align-center bg-[#161616]">
                    <ProductCard />
               </div>
          </div>
     );
}
