import axios from 'axios'
import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'

const Login = () => {

    const navigate = useNavigate()
    const [email, setemail] = useState("")
    const [password, setpassword] = useState("")

    const [error, seterror] = useState("")

    const handleSubmit = (e)=>{
            e.preventDefault()
    
            axios.post("http://localhost:3000/user/login", {email, password})
            .then((res)=>{
                
                localStorage.setItem("token",res.data.token)
                setemail("")
                setpassword("")
                seterror("")
                
                navigate("/")
    
            })
            .catch((error)=>{
                
                seterror(error.response.data.message)
            })
    
    
        }

  return (
    <div className='h-[89vh] w-full flex justify-center items-center'>
      <form
      onSubmit={(e)=>{
        handleSubmit(e)
      }}
      className='border p-5 rounded-2xl' >
        <h1 className='text-center font-semibold text-2xl'>Login Here</h1>
        <br />
        <label htmlFor="email">email :</label>
        <input
        value={email}
        onChange={(e)=>{
            setemail(e.target.value)
        }}
        id='email' type="text" className='border w-full' />
        <br />
        <br />
        <label htmlFor="password">Password :</label>
        <input
        value={password}
        onChange={(e)=>{
            setpassword(e.target.value)
        }}
        id='password' type="password" className='border w-full' />
        <br />
        <br />
        <div className='flex justify-center'>
            
        <button className='bg-blue-400 px-3 py-1 font-semibold text-white rounded'>Submit</button>
       
        </div>
        <p className='mt-2'>if you don't have an account? <Link to={"/register"} className='text-blue-700'>Register</Link></p>
        <br />
        { error && <p className='text-red-500'>{error}</p>}
     
      </form>
    </div>
  )
}

export default Login
