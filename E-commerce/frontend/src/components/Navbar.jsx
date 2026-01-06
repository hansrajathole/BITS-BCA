import { RiSearchLine } from '@remixicon/react'
import React from 'react'
import { Link } from 'react-router-dom'
import { useNavigate } from 'react-router-dom'

const Navbar = () => {

  let navigate = useNavigate()

  let token = localStorage.getItem("token")

  return (
    <div className='h-16 w-full bg-[#FF7A30] flex justify-between items-center px-5'>
        <h1 className='text-xl font-bold text-white'>Shoppy</h1>
        <div className='border w-[40%] py-1 px-2.5 rounded-2xl flex'>
            <input type="text"  className='w-[95%] outline-0'/>
            <RiSearchLine />
        </div>

        { token && <Link
          to={"/product/create"}
        className='bg-gray-800 py-1 px-2 text-[1.1em] text-white font-semibold rounded-md'>Create Product</Link>}

        { token ? <button onClick={()=>{
          localStorage.removeItem("token")
          navigate("/login")
        }}>Logout</button> : 
        <button onClick={()=>{
          navigate("/login")
        }}>Login</button>}
        
    </div>
  )
}

export default Navbar
