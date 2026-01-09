import React from 'react'
import Navbar from './components/Navbar'
import { Routes , Route } from 'react-router-dom'
import Login from './pages/Login'
import Register from './pages/Register'
import CreateProduct from './pages/CreateProduct'
import Home from './pages/Home'
import ProductDetail from './pages/ProductDetail'
import UpdateProduct from './pages/UpdateProduct'


const App = () => {
  return (
    <div className='min-h-screen w-full bg-[#E9E3DF]'>
      <Navbar/>
     
      <Routes>
        <Route path='/' element={<Home/> }/>
        <Route path='/login' element={ <Login/> }/>
        <Route path='/register' element={<Register/>}/>
        <Route path='/product/create' element={<CreateProduct/>}/>
        <Route path='product/details/:productId' element={<ProductDetail/>}/>
        <Route path='product/update/:productId' element={<UpdateProduct/>}/>
      </Routes>
    </div>
  )
}

export default App
