import React from 'react'
import { useNavigate } from 'react-router-dom'


const ProductCard = ({product}) => {

   const navigate = useNavigate()


  return (
    <div className='h-[400px] w-[300px] border rounded hover:scale-101 ease-linear duration-50 hover:shadow-xl'>
      <div
      onClick={()=>{
            navigate(`/product/details/${product._id}`)
      }}
      className="top h-[70%] cursor-pointer">
        <img src={product.image} className='h-full w-auto' alt="" />
      </div>
      <div className="bottom p-1.5 ">
        <h2 className='font-bold text-2xl'>{product.title}</h2>
        <h1 className='font-semibold'>Price : {product.price}</h1>
      </div>
    </div>
  )
}

export default ProductCard
