import Image from 'next/image'
import React from 'react'

const Navbar = () => {
  return (
    <div className="flex item-center w-full bg-[#191919] py-2 px-14 justify-between">
      <Image src="/nike-nav-img.png" alt="nike-nav-img" width={52} height={52} />
      <div className='flex items-center'>
        <span className='font-bold text-md'>Logout</span>
      </div>
    </div>
  )
}

export default Navbar