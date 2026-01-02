import { RiSearchLine } from '@remixicon/react'
import React from 'react'

const Navbar = () => {
  return (
    <div className='h-16 w-full bg-[#FF7A30] flex justify-between items-center px-5'>
        <h1 className='text-xl font-bold text-white'>Shoppy</h1>
        <div className='border w-[40%] py-1 px-2.5 rounded-2xl flex'>
            <input type="text"  className='w-[95%] outline-0'/>
            <RiSearchLine />
        </div>
        <button>Login</button>
    </div>
  )
}

export default Navbar
