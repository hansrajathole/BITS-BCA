import React, { useEffect, useState } from 'react'
import axios from 'axios'
import ProductCard from '../components/ProductCard'

const Home = () => {

    useEffect(() => {
        getProductData()

    }, [])
    
    const [productData, setproductData] = useState([])

    const getProductData = () => {
        axios.get("http://localhost:3000/product/getAllProduct")
        .then((res)=>{
            
            setproductData(res.data.productData)
        })
        .catch((err)=>{
            console.log(err);
            
        })
    }


  return (
    <div className=' min-h-screen flex p-3 gap-2 mt-16'>
      {
        productData?.map((product, index)=>{
           return <ProductCard product={product} key={index} />
        })
      }
    </div>
  )
}

export default Home
