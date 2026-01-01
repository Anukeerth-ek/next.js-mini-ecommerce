import { HorizontalProductCard } from "../components/HorizontalProductCard";

const OrderSuccess = () => {
          const orders = [
          {
               id: 1,
               name: "Nike Air Max 90",
               size: "UK 7, 9ADA2A",
               date: "12:34 PM, 20th Dec 2025",
               price: "1,200",
               originalPrice: "1,300",
               image: "/products/Frame 8.png",
          }
     ];
     return (
          <div className="min-h-screen bg-[#0a0a0a] text-white flex items-center justify-center px-4">
               <div className="text-center max-w-md w-full">
                    <div className="mb-6 flex justify-center">
                         <img
                              src="https://images.unsplash.com/photo-1611510338559-2f463335092c?w=120&h=80&fit=crop"
                              alt="Nike"
                              className="h-16 w-auto"
                         />
                    </div>

                    <h1 className="text-3xl font-bold mb-3">Successfully Ordered!</h1>
                    <p className="text-gray-400 text-sm mb-10">12:34 PM, 20th Dec 2025</p>

                    {orders.map((item, index) => (
                         <HorizontalProductCard product={item} key={item.id} />
                    ))}
               </div>
          </div>
     );
};

export default OrderSuccess;
