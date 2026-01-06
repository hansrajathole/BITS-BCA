import React from 'react'
import Navbar from './components/Navbar'
import { Routes , Route } from 'react-router-dom'
import Login from './pages/Login'
import Register from './pages/Register'
import CreateProduct from './pages/CreateProduct'


const App = () => {
  return (
    <div className='min-h-screen w-full bg-[#E9E3DF]'>
      <Navbar/>
     
      <Routes>
        <Route path='/' element={ <h1>Home Page</h1>}/>
        <Route path='/login' element={ <Login/> }/>
        <Route path='/register' element={<Register/>}/>
        <Route path='/product/create' element={<CreateProduct/>}/>
      </Routes>
    </div>
  )
}

export default App
