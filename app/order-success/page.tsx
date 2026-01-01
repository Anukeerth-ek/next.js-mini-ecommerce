const OrderSuccess = () => {
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

                    <div className="bg-[#1a1a1a] rounded-2xl p-6 flex items-center gap-4">
                         <div className="bg-[#a3e635] rounded-2xl p-4 shrink-0">
                              <img
                                   src="https://images.unsplash.com/photo-1600185365926-3a2ce3cdb9eb?w=200&h=200&fit=crop"
                                   alt="Nike Air Max 90"
                                   className="w-16 h-16 object-contain"
                              />
                         </div>

                         <div className="grow text-left">
                              <h3 className="text-base font-semibold mb-1">Nike Air Max 90</h3>
                              <p className="text-gray-400 text-sm">UK 7, 9ADA2A</p>
                         </div>

                         <div className="text-right shrink-0">
                              <div className="text-lg font-bold">₹1,200</div>
                              <div className="text-gray-500 text-sm line-through">₹1,300</div>
                         </div>
                    </div>
               </div>
          </div>
     );
};

export default OrderSuccess;
