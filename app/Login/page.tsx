"use client";

import React, { useState } from "react";

const Login = () => {
     const [phone, setPhone] = useState("");

     const handleSubmit = () => {
          console.log("Phone:", phone);
     };

     return (
          <div className="flex h-screen w-full">
               <div className="w-1/2 relative overflow-hidden">
                    <img
                         src="https://images.unsplash.com/photo-1546519638-68e109498ffc?w=800&h=1200&fit=crop"
                         alt="Basketball player"
                         className="w-full h-full object-cover"
                    />
               </div>

               <div className="w-1/2 bg-black flex items-center justify-center px-16">
                    <div className="w-full max-w-sm">
                         <h1 className="text-white text-4xl font-bold mb-12">Log In</h1>

                         <div className="mb-6">
                              <label htmlFor="phone" className="block text-white text-sm mb-3">
                                   Phone
                              </label>
                              <input
                                   id="phone"
                                   type="tel"
                                   placeholder="Enter Phone"
                                   value={phone}
                                   onChange={(e) => setPhone(e.target.value)}
                                   className="w-full bg-[#1a1a1a] text-white placeholder-gray-500 px-4 py-3 rounded border border-gray-800 focus:outline-none focus:border-gray-600 transition-colors"
                              />
                         </div>

                         <button
                              onClick={handleSubmit}
                              className="w-full bg-white text-black font-semibold py-3 rounded hover:bg-gray-100 transition-colors"
                         >
                              Continue
                         </button>
                    </div>
               </div>
          </div>
     );
};

export default Login;
