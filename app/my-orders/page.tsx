import React from "react";

const MyOrders = () => {
     const orders = [
          {
               id: 1,
               name: "Nike Air Max 90",
               size: "UK 7, 9ADA2A",
               date: "12:34 PM, 20th Dec 2025",
               price: "₹1,200",
               originalPrice: "₹1,300",
               image: "https://images.unsplash.com/photo-1600185365926-3a2ce3cdb9eb?w=200&h=200&fit=crop",
          },
          {
               id: 2,
               name: "Nike Air Max 90",
               size: "UK 7, 9ADA2A",
               date: "12:34 PM, 20th Dec 2025",
               price: "₹1,200",
               originalPrice: "₹1,300",
               image: "https://images.unsplash.com/photo-1600185365926-3a2ce3cdb9eb?w=200&h=200&fit=crop",
          },
     ];

     return (
          <div className="min-h-screen bg-[#0a0a0a] text-white p-8">
               <div className="max-w-2xl">
                    <h1 className="text-4xl font-bold mb-8">My Orders</h1>

                    <div className="space-y-4">
                         {orders.map((order) => (
                              <div
                                   key={order.id}
                                   className="bg-[#1a1a1a] rounded-2xl p-6 flex items-center gap-6 hover:bg-[#222] transition-colors"
                              >

                                   <div className="bg-[#a3e635] rounded-2xl p-4 shrink-0">
                                        <img src={order.image} alt={order.name} className="w-20 h-20 object-contain" />
                                   </div>

                                   <div className="grow">
                                        <h3 className="text-lg font-semibold mb-1">{order.name}</h3>
                                        <p className="text-gray-400 text-sm mb-2">{order.size}</p>
                                        <p className="text-gray-500 text-xs">{order.date}</p>
                                   </div>

                                   <div className="text-right shrink-0">
                                        <div className="text-xl font-bold">{order.price}</div>
                                        <div className="text-gray-500 text-sm line-through">{order.originalPrice}</div>
                                   </div>
                              </div>
                         ))}
                    </div>
               </div>
          </div>
     );
};

export default MyOrders;
