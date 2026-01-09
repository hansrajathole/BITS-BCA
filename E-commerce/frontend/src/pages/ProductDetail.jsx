import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'


const ProductDetail = () => {

   const params = useParams()

   const productId = params.productId
   const navigate = useNavigate()
   const token = localStorage.getItem("token")
   const [productDetail, setproductDetail] = useState({})

   useEffect(() => {
        getProductDetail()
   }, [])
   


   const getProductDetail = ()=>{
        axios.get(`http://localhost:3000/product/details/${productId}`,{
            headers :{
                Authorization : `bearar ${token}`
            }
        })
        .then((res)=>{
            console.log(res.data);
            setproductDetail(res.data.product)  
        })
        .catch((err)=>{
            console.log(err);
            
        })
   }
    

   const deleteHandler = ()=>{
        axios.delete(`http://localhost:3000/product/delete/${productId}`,{
            headers : {
                Authorization : `bearer ${token}`
            }
        })
        .then((res)=>{
            console.log(res);
            navigate("/")
            
        })
        .catch((err)=>{
            console.log(err);
            
        })
   }

  return (
    <div className='min-h-screen w-full flex justify-center items-center mt-16'>
        <div className="container h-[80vh] w-[80%] border rounded-2xl flex ">
            <div className="left w-[50%]">
                <img src={productDetail.image} alt="" />
            </div>
            <div className="right w-[50%] p-2 flex flex-col gap-2" >
                <h1 className='text-2xl font-bold'>Title : {productDetail.title}</h1>
                <p>Description : {productDetail.description}</p>
                <h2 className='text-xl font-semibold'>Category : {productDetail.category}</h2>
                <h2 className='text-2xl font-semibold'>Price : {productDetail.price}</h2>
                <br />
                <br />
                <div className='btn flex w-full justify-between px-5'>
                    <button
                    onClick={()=>{
                        navigate(`/product/update/${productDetail._id}`)
                    }}
                    className='border py-1 px-3 rounded font-semibold bg-blue-500 text-white'>Update</button>
                    <button 
                    onClick={deleteHandler}
                    className='border py-1 px-3 rounded font-semibold bg-red-500 text-white'>Delete</button>
                </div>
            </div>
        </div>
    </div>
  )
}

export default ProductDetail
