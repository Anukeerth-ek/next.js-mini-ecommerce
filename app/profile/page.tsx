import { HorizontalProductCard } from "../components/HorizontalProductCard";

const Profile = () => {
     const orders = [
          {
               id: 1,
               name: "Nike Air Max 90",
               size: "UK 7, 9ADA2A",
               date: "12:34 PM, 20th Dec 2025",
               price: "1,200",
               originalPrice: "1,300",
               image: "/products/Frame 8.png",
          },
          {
               id: 2,
               name: "Nike Air Max 90",
               size: "UK 7, 9ADA2A",
               date: "12:34 PM, 20th Dec 2025",
               price: "1,200",
               originalPrice: "1,300",
               image: "/products/Frame 8.png",
          },
     ];

     return (
          <div className="min-h-screen bg-[#0a0a0a] text-white p-8">
               <div className="max-w-2xl">
                    <h1 className="text-4xl font-bold mb-8">My Orders</h1>

                    <div className="space-y-4">
                         {orders.map((order) => (
                              <HorizontalProductCard product={order} key={order.id} />
                         ))}
                    </div>
               </div>
          </div>
     );
};

export default Profile;
