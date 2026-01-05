import React, { useState } from 'react'
import { Link , useNavigate } from 'react-router-dom'

import axios from 'axios'

const Register = () => {

    const navigate = useNavigate()

    const [username, setusername] = useState("")
    const [email, setemail] = useState("")
    const [password, setpassword] = useState("")
    const [role, setrole] = useState("")

    const [error, seterror] = useState("")

    
    const handleSubmit = (e)=>{
        e.preventDefault()

        axios.post("http://localhost:3000/user/register", {username ,email, password, role})
        .then((res)=>{
            console.log(res.data);
            localStorage.setItem("token",res.data.token)
            setemail("")
            setusername("")
            setrole("")
            setpassword("")
            seterror("")
            
            navigate("/")

        })
        .catch((error)=>{
            console.log(error);
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
        <h1 className='text-center font-semibold text-2xl'>Register Here</h1>
        <br />
        <label htmlFor="username">username :</label>
        <input
        value={username}
        onChange={(e)=>{
            setusername(e.target.value)
        }}
        id='username' type="text" className='border w-full' />
        <br />
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
        <label htmlFor="role">Role :</label>
        <br />
    
        <select
        value={role}
        onChange={(e)=>{
            setrole(e.target.value)
        }}
        className='border'>
            <option >---select---</option>
            <option value="user">user</option>
            <option value="admin">admin</option>
        </select>
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
        <p className='mt-2'>if you have an account? <Link to={"/login"} className='text-blue-700'>Login</Link></p>
        <br /> 
        { error && <p className='text-red-500'>{error}</p>}
      </form>
    </div>
  )
}

export default Register
